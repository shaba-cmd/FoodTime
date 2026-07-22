const db = require('../config/db');

const getUserByUsername = async (username) => {
  const result = await db.query('SELECT * FROM users WHERE username = $1', [username]);
  return result.rows[0] || null;
};

const getUserById = async (id) => {
  const result = await db.query('SELECT id, name, username, role, created_at FROM users WHERE id = $1', [id]);
  return result.rows[0] || null;
};

const createUser = async (name, username, password) => {
  const result = await db.query(
    'INSERT INTO users (name, username, password) VALUES ($1, $2, $3) RETURNING id',
    [name, username, password]
  );
  return result.rows[0].id;
};

module.exports = {
  getUserByUsername,
  getUserById,
  createUser
};