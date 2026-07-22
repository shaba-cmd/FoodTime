import { useState, useEffect } from 'react';
import { getFaq, getFaqCategories, createFaqItem, updateFaqItem, deleteFaqItem } from '../../utils/api';
import FaqForm from '../../components/FaqForm/FaqForm';
import { Table, Btn } from '../ProductsPage/ProductsPage.styled';

const FaqPage = () => {
  const [faq, setFaq] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const [faqData, catData] = await Promise.all([getFaq(), getFaqCategories()]);
      setFaq(faqData);
      setCategories(catData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (data) => {
    try {
      if (editingItem) {
        await updateFaqItem(editingItem.idQuestion || editingItem.id, data);
      } else {
        await createFaqItem(data);
      }
      setShowForm(false);
      setEditingItem(null);
      loadData();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleEdit = (item, categoryId) => {
    setEditingItem({ ...item, category_id: categoryId });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this FAQ item?')) return;
    try {
      await deleteFaqItem(id);
      loadData();
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <div className="admin-container">Loading...</div>;

  return (
    <>
    
      {loading 
      ? <div className="container">Loading...</div> 
      : <div className='container'>
          <Btn className="btn-add" onClick={() => { setEditingItem(null); setShowForm(true); }}>
            + Add FAQ
          </Btn>

          {showForm && (
            <FaqForm
              item={editingItem}
              categories={categories}
              onSave={handleSave}
              onCancel={() => { setShowForm(false); setEditingItem(null); }}
            />
          )}

          {faq.map((category) => (
            <div key={category.id}>
              <h3>{category.title}</h3>
              <Table>
                <table>
                  <thead>
                    <tr>
                      <th>Question</th>
                      <th>Answer</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.faq.map((item) => (
                      <tr key={item.idQuestion}>
                        <td>{item.question.substring(0, 80)}...</td>
                        <td>{item.answer.substring(0, 100)}...</td>
                        <td>
                          <Btn className="btn-edit" onClick={() => handleEdit(item, category.id)}>Edit</Btn>
                          <Btn className="btn-delete" onClick={() => handleDelete(item.idQuestion)}>Delete</Btn>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Table>
            </div>
          ))}
        </div>}
    </>
  );
};

export default FaqPage;
