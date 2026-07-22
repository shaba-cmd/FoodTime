const productModel = require('../models/productModel');
const { body, validationResult } = require('express-validator');

const productValidation = [
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('text').trim().notEmpty().withMessage('Description is required'),
    body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number')
];

const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProduct = async (req, res) => {
    try {
        const product = await productModel.getProductById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createProduct = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { title, text, price } = req.body;
    const img = req.file ? `/uploads/products/${req.file.filename}` : req.body.img;

    if (!img) {
        return res.status(400).json({ message: 'Image is required' });
    }

    try {
        const productId = await productModel.createProduct(img, title, text, price);
        const product = await productModel.getProductById(productId);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProduct = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { title, text, price } = req.body;
    const existing = await productModel.getProductById(req.params.id);

    if (!existing) {
        return res.status(404).json({ message: 'Product not found' });
    }

    const img = req.file ? `/uploads/products/${req.file.filename}` : (req.body.img || existing.img);

    try {
        await productModel.updateProduct(req.params.id, img, title, text, price);
        const product = await productModel.getProductById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const result = await productModel.deleteProduct(req.params.id);
        if (result === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct, productValidation };
