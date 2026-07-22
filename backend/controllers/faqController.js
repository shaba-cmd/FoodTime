const faqModel = require('../models/faqModel');
const { body, validationResult } = require('express-validator');

const faqValidation = [
    body('categoryId').isInt({ min: 1 }).withMessage('Valid category ID is required'),
    body('question').trim().notEmpty().withMessage('Question is required'),
    body('answer').trim().notEmpty().withMessage('Answer is required')
];

const getAllFaq = async (req, res) => {
    try {
        const faq = await faqModel.getAllFaq();
        res.json(faq);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCategories = async (req, res) => {
    try {
        const categories = await faqModel.getCategories();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createFaqItem = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { categoryId, question, answer } = req.body;

    try {
        const itemId = await faqModel.createFaqItem(categoryId, question, answer);
        const item = await faqModel.getFaqItemById(itemId);
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateFaqItem = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { categoryId, question, answer } = req.body;

    try {
        const result = await faqModel.updateFaqItem(req.params.id, categoryId, question, answer);
        if (result === 0) {
            return res.status(404).json({ message: 'FAQ item not found' });
        }
        const item = await faqModel.getFaqItemById(req.params.id);
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteFaqItem = async (req, res) => {
    try {
        const result = await faqModel.deleteFaqItem(req.params.id);
        if (result === 0) {
            return res.status(404).json({ message: 'FAQ item not found' });
        }
        res.json({ message: 'FAQ item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllFaq, getCategories, createFaqItem, updateFaqItem, deleteFaqItem, faqValidation };
