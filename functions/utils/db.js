const { neon } = require('@neondatabase/serverless');

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is not defined in environment variables');
}

const sql = process.env.DATABASE_URL ? neon(process.env.DATABASE_URL) : null;

/**
 * Helper to interact with the database using simple SQL
 */
async function getDb() {
  return sql;
}

module.exports = { getDb, sql };
