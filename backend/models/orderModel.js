const pool = require('../config/db');

const createOrder = async (userId, totalAmount) => {
    const [result] = await pool.execute(
        'INSERT INTO orders (user_id, total_amount) VALUES (?, ?)',
        [userId, totalAmount]
    );
    return result.insertId;
};

const addOrderItem = async (orderId, productId, quantity, price) => {
    await pool.execute(
        'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)',
        [orderId, productId, quantity, price]
    );
};

const getOrdersByUser = async (userId) => {
    const [orders] = await pool.execute(
        'SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC',
        [userId]
    );

    for (const order of orders) {
        const [items] = await pool.execute(
            `SELECT oi.*, p.title, p.img 
             FROM order_items oi 
             JOIN products p ON oi.product_id = p.id 
             WHERE oi.order_id = ?`,
            [order.id]
        );
        order.items = items;
    }

    return orders;
};

module.exports = { createOrder, addOrderItem, getOrdersByUser };
