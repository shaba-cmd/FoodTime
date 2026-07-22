const express = require('express');
const router = express.Router();
const { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct, productValidation } = require('../controllers/productController');
const { authenticate, authorizeAdmin } = require('../middleware/auth');
const upload = require('../middleware/upload');

router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.post('/', authenticate, authorizeAdmin, upload.single('image'), productValidation, createProduct);
router.put('/:id', authenticate, authorizeAdmin, upload.single('image'), productValidation, updateProduct);
router.delete('/:id', authenticate, authorizeAdmin, deleteProduct);

module.exports = router;
