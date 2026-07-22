const express = require('express');
const router = express.Router();
const { getAllFaq, getCategories, createFaqItem, updateFaqItem, deleteFaqItem, faqValidation } = require('../controllers/faqController');
const { authenticate, authorizeAdmin } = require('../middleware/auth');

router.get('/', getAllFaq);
router.get('/categories', getCategories);
router.post('/', authenticate, authorizeAdmin, faqValidation, createFaqItem);
router.put('/:id', authenticate, authorizeAdmin, faqValidation, updateFaqItem);
router.delete('/:id', authenticate, authorizeAdmin, deleteFaqItem);

module.exports = router;
