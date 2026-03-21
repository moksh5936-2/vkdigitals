const { sql } = require('./utils/db');

exports.handler = async (event) => {
  try {
    const isAdmin = event.headers['admin-token'] === (process.env.ADMIN_TOKEN || 'secure-temp-token');
    const method = event.httpMethod;

    switch (method) {
      case 'GET':
        const blogId = event.queryStringParameters && event.queryStringParameters.blogId;
        const requestedStatus = event.queryStringParameters && event.queryStringParameters.status;
        
        // If not admin, always filter by 'approved'
        const status = isAdmin ? requestedStatus : 'approved';

        let results;
        if (blogId && status) {
          results = await sql`SELECT * FROM comments WHERE "blogId" = ${blogId} AND status = ${status} ORDER BY "createdAt" ASC`;
        } else if (blogId) {
          results = await sql`SELECT * FROM comments WHERE "blogId" = ${blogId} ORDER BY "createdAt" ASC`;
        } else if (status) {
          results = await sql`SELECT * FROM comments WHERE status = ${status} ORDER BY "createdAt" ASC`;
        } else {
          results = await sql`SELECT * FROM comments ORDER BY "createdAt" ASC`;
        }
        
        return { statusCode: 200, body: JSON.stringify(results) };

      case 'POST':
        const data = JSON.parse(event.body);
        if (!data.blogId || !data.content) return { statusCode: 400, body: 'Missing required fields' };

        await sql`
          INSERT INTO comments ("blogId", author, content, status, "createdAt")
          VALUES (${data.blogId}, ${data.author || 'Anonymous'}, ${data.content}, 'pending', NOW())
        `;
        return { statusCode: 201, body: JSON.stringify({ success: true }) };

      case 'PATCH':
        if (!isAdmin) return { statusCode: 401, body: 'Unauthorized' };
        const patchData = JSON.parse(event.body);
        if (!patchData.id || !patchData.updates) return { statusCode: 400, body: 'Missing ID or updates' };

        // We only support status updates for now
        if (patchData.updates.status) {
          await sql`UPDATE comments SET status = ${patchData.updates.status} WHERE id = ${patchData.id}`;
        }
        return { statusCode: 200, body: JSON.stringify({ success: true }) };

      case 'DELETE':
        if (!isAdmin) return { statusCode: 401, body: 'Unauthorized' };
        const deleteId = event.queryStringParameters && event.queryStringParameters.id;
        if (!deleteId) return { statusCode: 400, body: 'Missing ID' };
        
        await sql`DELETE FROM comments WHERE id = ${parseInt(deleteId)}`;
        return { statusCode: 200, body: JSON.stringify({ success: true }) };

      default:
        return { statusCode: 405, body: 'Method Not Allowed' };
    }
  } catch (error) {
    console.error('Comments API Error:', error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
