const db = require('../config/db');

const getAllProducts = async () => {
  const result = await db.query('SELECT * FROM products ORDER BY created_at DESC');
  return result.rows;
};

const getProductById = async (id) => {
  const result = await db.query('SELECT * FROM products WHERE id = $1', [id]);
  return result.rows[0] || null;
};

const createProduct = async (img, title, text, price) => {
  const result = await db.query(
    'INSERT INTO products (img, title, text, price) VALUES ($1, $2, $3, $4) RETURNING id',
    [img, title, text, price]
  );
  return result.rows[0].id;
};

const updateProduct = async (id, img, title, text, price) => {
  const result = await db.query(
    'UPDATE products SET img = $1, title = $2, text = $3, price = $4, updated_at = CURRENT_TIMESTAMP WHERE id = $5',
    [img, title, text, price, id]
  );
  return result.rowCount;
};

const deleteProduct = async (id) => {
  const result = await db.query('DELETE FROM products WHERE id = $1', [id]);
  return result.rowCount;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};