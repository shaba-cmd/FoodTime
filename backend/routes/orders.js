const express = require('express');
const router = express.Router();
const { createOrder, getMyOrders, orderValidation } = require('../controllers/orderControllers');
const { authenticate } = require('../middleware/auth');

router.post('/', authenticate, orderValidation, createOrder);
router.get('/my', authenticate, getMyOrders);

module.exports = router;
