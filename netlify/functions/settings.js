const { getDb } = require('./utils/db');

exports.handler = async (event) => {
  const db = await getDb();
  const collection = db.collection('settings');

  try {
    const isAdmin = event.headers['admin-token'] === (process.env.ADMIN_TOKEN || 'secure-temp-token');

    switch (event.httpMethod) {
      case 'GET':
        const settings = await collection.findOne({ type: 'site' });
        return { statusCode: 200, body: JSON.stringify(settings || {}) };

      case 'POST':
        if (!isAdmin) return { statusCode: 401, body: 'Unauthorized' };
        const data = JSON.parse(event.body);
        await collection.updateOne(
          { type: 'site' },
          { $set: { ...data, updatedAt: new Date() } },
          { upsert: true }
        );
        return { statusCode: 200, body: JSON.stringify({ success: true }) };

      default:
        return { statusCode: 405, body: 'Method Not Allowed' };
    }
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
