const { sql } = require('./utils/db');

exports.handler = async (event) => {
  try {
    const isAdmin = event.headers['admin-token'] === (process.env.ADMIN_TOKEN || 'secure-temp-token');
    const method = event.httpMethod;

    switch (method) {
      case 'GET':
        const blogId = event.queryStringParameters && event.queryStringParameters.id;
        if (blogId) {
          const results = await sql`SELECT * FROM blogs WHERE id = ${blogId} LIMIT 1`;
          return { statusCode: 200, body: JSON.stringify(results[0] || null) };
        }
        // Get all published blogs
        const blogs = await sql`SELECT * FROM blogs WHERE status = 'published' ORDER BY "createdAt" DESC`;
        return { statusCode: 200, body: JSON.stringify(blogs) };

      case 'POST':
        if (!isAdmin) return { statusCode: 401, body: 'Unauthorized' };
        const data = JSON.parse(event.body);
        
        if (data.id) {
          // Update existing
          await sql`
            UPDATE blogs 
            SET title = ${data.title}, 
                content = ${data.content}, 
                author = ${data.author}, 
                image = ${data.image}, 
                excerpt = ${data.excerpt}, 
                status = ${data.status}, 
                "updatedAt" = NOW()
            WHERE id = ${data.id}
          `;
          return { statusCode: 200, body: JSON.stringify({ success: true }) };
        } else {
          // Insert new
          const newId = Math.random().toString(36).substr(2, 9);
          await sql`
            INSERT INTO blogs (id, title, content, author, image, excerpt, status, "createdAt", "updatedAt", views)
            VALUES (${newId}, ${data.title}, ${data.content}, ${data.author}, ${data.image}, ${data.excerpt}, ${data.status}, NOW(), NOW(), 0)
          `;
          return { statusCode: 201, body: JSON.stringify({ success: true, id: newId }) };
        }

      case 'DELETE':
        if (!isAdmin) return { statusCode: 401, body: 'Unauthorized' };
        const deleteId = event.queryStringParameters && event.queryStringParameters.id;
        if (!deleteId) return { statusCode: 400, body: 'Missing ID' };
        await sql`DELETE FROM blogs WHERE id = ${deleteId}`;
        return { statusCode: 200, body: JSON.stringify({ success: true }) };

      default:
        return { statusCode: 405, body: 'Method Not Allowed' };
    }
  } catch (error) {
    console.error('Blogs API Error:', error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
