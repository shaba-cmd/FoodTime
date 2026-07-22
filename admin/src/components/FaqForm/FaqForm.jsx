import { useState, useEffect } from 'react';
import { FormGroup } from '../Login/Login.styled';
import { ModalOverlay, Modal, Actions, Save, Cancel } from './FaqForm.styled';

const FaqForm = ({ item, categories, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    categoryId: '',
    question: '',
    answer: '',
  });

  useEffect(() => {
    if (item) {
      setFormData({
        categoryId: item.category_id || item.categoryId,
        question: item.question,
        answer: item.answer,
      });
    } else if (categories.length > 0) {
      setFormData((prev) => ({ ...prev, categoryId: categories[0].id }));
    }
  }, [item, categories]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      categoryId: parseInt(formData.categoryId),
      question: formData.question,
      answer: formData.answer,
    });
  };

  return (
    <ModalOverlay onClick={onCancel}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <h2>{item ? 'Edit FAQ' : 'Add FAQ'}</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <label>Category</label>
            <select
              value={formData.categoryId}
              onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
              required
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.title}</option>
              ))}
            </select>
          </FormGroup>
          <FormGroup>
            <label>Question</label>
            <textarea
              value={formData.question}
              onChange={(e) => setFormData({ ...formData, question: e.target.value })}
              required
            />
          </FormGroup>
          <FormGroup>
            <label>Answer</label>
            <textarea
              value={formData.answer}
              onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
              required
            />
          </FormGroup>
          <Actions>
            <Save type="submit">Save</Save>
            <Cancel type="button" onClick={onCancel}>Cancel</Cancel>
          </Actions>
        </form>
      </Modal>
    </ModalOverlay>
  );
};

export default FaqForm;
