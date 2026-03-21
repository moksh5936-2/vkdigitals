const { getDb } = require('./utils/db');

exports.handler = async (event) => {
  const db = await getDb();
  const collection = db.collection('blogs');

  try {
    const isAdmin = event.headers['admin-token'] === (process.env.ADMIN_TOKEN || 'secure-temp-token');

    switch (event.httpMethod) {
      case 'GET':
        const id = event.queryStringParameters && event.queryStringParameters.id;
        if (id) {
          const blog = await collection.findOne({ id });
          return { statusCode: 200, body: JSON.stringify(blog) };
        }
        const blogs = await collection.find({ status: 'published' }).sort({ createdAt: -1 }).toArray();
        return { statusCode: 200, body: JSON.stringify(blogs) };

      case 'POST':
        if (!isAdmin) return { statusCode: 401, body: 'Unauthorized' };
        const data = JSON.parse(event.body);
        if (data.id) {
          await collection.updateOne({ id: data.id }, { $set: { ...data, updatedAt: new Date() } });
          return { statusCode: 200, body: JSON.stringify({ success: true }) };
        }
        const newBlog = { ...data, createdAt: new Date(), updatedAt: new Date(), views: 0 };
        await collection.insertOne(newBlog);
        return { statusCode: 201, body: JSON.stringify({ success: true }) };

      case 'DELETE':
        // Auth check would go here
        const deleteId = event.queryStringParameters.id;
        await collection.deleteOne({ id: deleteId });
        return { statusCode: 200, body: JSON.stringify({ success: true }) };

      default:
        return { statusCode: 405, body: 'Method Not Allowed' };
    }
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
