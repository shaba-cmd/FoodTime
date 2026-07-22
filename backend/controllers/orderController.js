const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel');
const { body, validationResult } = require('express-validator');

const orderValidation = [
    body('items').isArray({ min: 1 }).withMessage('Items array is required'),
    body('items.*.productId').isInt({ min: 1 }).withMessage('Valid product ID is required'),
    body('items.*.quantity').isInt({ min: 1 }).withMessage('Quantity must be at least 1')
];

const createOrder = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { items } = req.body;
    const userId = req.user.id;

    try {
        let totalAmount = 0;
        const orderItems = [];

        for (const item of items) {
            const product = await productModel.getProductById(item.productId);
            if (!product) {
                return res.status(404).json({ message: `Product ${item.productId} not found` });
            }
            totalAmount += product.price * item.quantity;
            orderItems.push({ productId: item.productId, quantity: item.quantity, price: product.price });
        }

        const orderId = await orderModel.createOrder(userId, totalAmount);

        for (const item of orderItems) {
            await orderModel.addOrderItem(orderId, item.productId, item.quantity, item.price);
        }

        res.status(201).json({ message: 'Order created successfully', orderId, totalAmount });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getMyOrders = async (req, res) => {
    try {
        const orders = await orderModel.getOrdersByUser(req.user.id);
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createOrder, getMyOrders, orderValidation };
