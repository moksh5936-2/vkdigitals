const { getDb } = require('./utils/db');

exports.handler = async (event) => {
  const db = await getDb();
  const collection = db.collection('comments');

  try {
    const isAdmin = event.headers['admin-token'] === (process.env.ADMIN_TOKEN || 'secure-temp-token');

    switch (event.httpMethod) {
      case 'GET':
        const blogId = event.queryStringParameters && event.queryStringParameters.blogId;
        const status = (event.queryStringParameters && event.queryStringParameters.status) || (isAdmin ? null : 'approved');
        const query = blogId ? (status ? { blogId, status } : { blogId }) : (status ? { status } : {});
        const comments = await collection.find(query).sort({ createdAt: 1 }).toArray();
        return { statusCode: 200, body: JSON.stringify(comments) };

      case 'POST':
        const data = JSON.parse(event.body);
        const newComment = { ...data, createdAt: new Date(), status: 'pending' };
        await collection.insertOne(newComment);
        return { statusCode: 201, body: JSON.stringify({ success: true }) };

      case 'PATCH':
        if (!isAdmin) return { statusCode: 401, body: 'Unauthorized' };
        const { id, updates } = JSON.parse(event.body);
        await collection.updateOne({ _id: id }, { $set: updates });
        return { statusCode: 200, body: JSON.stringify({ success: true }) };

      case 'DELETE':
        if (!isAdmin) return { statusCode: 401, body: 'Unauthorized' };
        const deleteId = event.queryStringParameters && event.queryStringParameters.id;
        await collection.deleteOne({ _id: deleteId });
        return { statusCode: 200, body: JSON.stringify({ success: true }) };

      default:
        return { statusCode: 405, body: 'Method Not Allowed' };
    }
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
