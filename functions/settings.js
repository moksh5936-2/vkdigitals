const { sql } = require('./utils/db');

exports.handler = async (event) => {
  try {
    const isAdmin = event.headers['admin-token'] === (process.env.ADMIN_TOKEN || 'secure-temp-token');
    const method = event.httpMethod;

    switch (method) {
      case 'GET':
        const results = await sql`SELECT data FROM settings WHERE type = 'site' LIMIT 1`;
        return { statusCode: 200, body: JSON.stringify(results[0]?.data || {}) };

      case 'POST':
        if (!isAdmin) return { statusCode: 401, body: 'Unauthorized' };
        const data = JSON.parse(event.body);
        
        await sql`
          INSERT INTO settings (type, data, "updatedAt") 
          VALUES ('site', ${data}, NOW())
          ON CONFLICT (type) 
          DO UPDATE SET data = EXCLUDED.data, "updatedAt" = EXCLUDED."updatedAt"
        `;
        return { statusCode: 200, body: JSON.stringify({ success: true }) };

      default:
        return { statusCode: 405, body: 'Method Not Allowed' };
    }
  } catch (error) {
    console.error('Settings API Error:', error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
