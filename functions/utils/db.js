const { neon } = require('@neondatabase/serverless');

const sql = neon(process.env.DATABASE_URL);

/**
 * Helper to interact with the database using simple SQL
 */
async function getDb() {
  return sql;
}

module.exports = { getDb, sql };
