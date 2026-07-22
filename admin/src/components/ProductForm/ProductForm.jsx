import { useState, useEffect } from 'react';
import { FormGroup } from '../Login/Login.styled';
import { ModalOverlay, Modal, Actions, Save, Cancel } from '../FaqForm/FaqForm.styled';

const ProductForm = ({ product, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    price: '',
    img: '',
  });

  const [file, setFile] = useState(null);

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title,
        text: product.text,
        price: product.price,
        img: product.img,
      });
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('text', formData.text);
    data.append('price', formData.price);
    if (file) {
      data.append('image', file);
    } else if (formData.img) {
      data.append('img', formData.img);
    }
    onSave(data);
  };

  return (
    <ModalOverlay onClick={onCancel}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <h2>{product ? 'Edit Product' : 'Add Product'}</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <label>Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </FormGroup>
          <FormGroup>
            <label>Description</label>
            <textarea
              value={formData.text}
              onChange={(e) => setFormData({ ...formData, text: e.target.value })}
              required
            />
          </FormGroup>
          <FormGroup>
            <label>Price</label>
            <input
              type="number"
              step="0.01"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              required
            />
          </FormGroup>
          <FormGroup className='img-box'>
            <label>Image URL (or upload file)</label>
            <input
              type="text"
              value={formData.img}
              onChange={(e) => setFormData({ ...formData, img: e.target.value })}
              placeholder="https://..."
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ marginTop: '10px' }}
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

export default ProductForm;
