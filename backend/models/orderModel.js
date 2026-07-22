const db = require('../config/db');

const createOrder = async (userId, totalAmount) => {
  const result = await db.query(
    'INSERT INTO orders (user_id, total_amount) VALUES ($1, $2) RETURNING id',
    [userId, totalAmount]
  );
  return result.rows[0].id;
};

const addOrderItem = async (orderId, productId, quantity, price) => {
  await db.query(
    'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4)',
    [orderId, productId, quantity, price]
  );
};

const getOrdersByUser = async (userId) => {
  const result = await db.query(`
    SELECT o.*, 
           json_agg(json_build_object(
             'id', oi.id,
             'product_id', oi.product_id,
             'quantity', oi.quantity,
             'price', oi.price
           )) as items
    FROM orders o
    LEFT JOIN order_items oi ON o.id = oi.order_id
    WHERE o.user_id = $1
    GROUP BY o.id
    ORDER BY o.created_at DESC
  `, [userId]);
  
  return result.rows.map(row => ({
    ...row,
    items: row.items[0] === null ? [] : row.items
  }));
};

module.exports = {
  createOrder,
  addOrderItem,
  getOrdersByUser
};