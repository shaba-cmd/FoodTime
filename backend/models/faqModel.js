const pool = require('../config/db');

const getAllFaq = async () => {
    const [categories] = await pool.execute('SELECT * FROM faq_categories ORDER BY id');
    const [items] = await pool.execute('SELECT * FROM faq_items ORDER BY id');

    return categories.map(cat => ({
        id: cat.id,
        title: cat.title,
        faq: items
            .filter(item => item.category_id === cat.id)
            .map(item => ({
                idQuestion: item.id,
                question: item.question,
                answer: item.answer
            }))
    }));
};

const getFaqItemById = async (id) => {
    const [rows] = await pool.execute('SELECT * FROM faq_items WHERE id = ?', [id]);
    return rows[0];
};

const createFaqItem = async (categoryId, question, answer) => {
    const [result] = await pool.execute(
        'INSERT INTO faq_items (category_id, question, answer) VALUES (?, ?, ?)',
        [categoryId, question, answer]
    );
    return result.insertId;
};

const updateFaqItem = async (id, categoryId, question, answer) => {
    const [result] = await pool.execute(
        'UPDATE faq_items SET category_id = ?, question = ?, answer = ? WHERE id = ?',
        [categoryId, question, answer, id]
    );
    return result.affectedRows;
};

const deleteFaqItem = async (id) => {
    const [result] = await pool.execute('DELETE FROM faq_items WHERE id = ?', [id]);
    return result.affectedRows;
};

const getCategories = async () => {
    const [rows] = await pool.execute('SELECT * FROM faq_categories ORDER BY id');
    return rows;
};

module.exports = { getAllFaq, getFaqItemById, createFaqItem, updateFaqItem, deleteFaqItem, getCategories };
