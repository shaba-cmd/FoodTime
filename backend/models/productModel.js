const pool = require('../config/db');

const getAllProducts = async () => {
    const [rows] = await pool.execute('SELECT * FROM products ORDER BY id');
    return rows;
};

const getProductById = async (id) => {
    const [rows] = await pool.execute('SELECT * FROM products WHERE id = ?', [id]);
    return rows[0];
};

const createProduct = async (img, title, text, price) => {
    const [result] = await pool.execute(
        'INSERT INTO products (img, title, text, price) VALUES (?, ?, ?, ?)',
        [img, title, text, price]
    );
    return result.insertId;
};

const updateProduct = async (id, img, title, text, price) => {
    const [result] = await pool.execute(
        'UPDATE products SET img = ?, title = ?, text = ?, price = ? WHERE id = ?',
        [img, title, text, price, id]
    );
    return result.affectedRows;
};

const deleteProduct = async (id) => {
    const [result] = await pool.execute('DELETE FROM products WHERE id = ?', [id]);
    return result.affectedRows;
};

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
