const db = require('../config/db');

const getAllFaq = async () => {
  const result = await db.query(`
    SELECT fc.id as category_id, fc.title as category_title,
           fi.id, fi.question, fi.answer
    FROM faq_categories fc
    LEFT JOIN faq_items fi ON fc.id = fi.category_id
    ORDER BY fc.id, fi.id
  `);
  
  // Группируем по категориям
  const categories = {};
  result.rows.forEach(row => {
    if (!categories[row.category_id]) {
      categories[row.category_id] = {
        id: row.category_id,
        title: row.category_title,
        items: []
      };
    }
    if (row.id) {
      categories[row.category_id].items.push({
        id: row.id,
        question: row.question,
        answer: row.answer
      });
    }
  });
  
  return Object.values(categories);
};

const getCategories = async () => {
  const result = await db.query('SELECT * FROM faq_categories');
  return result.rows;
};

const getFaqItemById = async (id) => {
  const result = await db.query('SELECT * FROM faq_items WHERE id = $1', [id]);
  return result.rows[0] || null;
};

const createFaqItem = async (categoryId, question, answer) => {
  const result = await db.query(
    'INSERT INTO faq_items (category_id, question, answer) VALUES ($1, $2, $3) RETURNING id',
    [categoryId, question, answer]
  );
  return result.rows[0].id;
};

const updateFaqItem = async (id, categoryId, question, answer) => {
  const result = await db.query(
    'UPDATE faq_items SET category_id = $1, question = $2, answer = $3 WHERE id = $4',
    [categoryId, question, answer, id]
  );
  return result.rowCount;
};

const deleteFaqItem = async (id) => {
  const result = await db.query('DELETE FROM faq_items WHERE id = $1', [id]);
  return result.rowCount;
};

module.exports = {
  getAllFaq,
  getCategories,
  getFaqItemById,
  createFaqItem,
  updateFaqItem,
  deleteFaqItem
};