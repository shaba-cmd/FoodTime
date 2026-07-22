const pool = require('../config/db');

const createUser = async (name, username, password) => {
    const [result] = await pool.execute(
        'INSERT INTO users (name, username, password) VALUES (?, ?, ?)',
        [name, username, password]
    );
    return result.insertId;
};

const getUserByUsername = async (username) => {
    const [rows] = await pool.execute(
        'SELECT * FROM users WHERE username = ?',
        [username]
    );
    return rows[0];
};

const getUserById = async (id) => {
    const [rows] = await pool.execute(
        'SELECT id, name, username, role, created_at FROM users WHERE id = ?',
        [id]
    );
    return rows[0];
};

module.exports = { createUser, getUserByUsername, getUserById };
