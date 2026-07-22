import { useState, useEffect } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../../utils/api';
import ProductForm from '../../components/ProductForm/ProductForm';
import { Table, Img, Btn } from './ProductsPage.styled';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (formData) => {
    try {
      if (editingProduct) {
        await updateProduct(editingProduct.id, formData);
      } else {
        await createProduct(formData);
      }
      setShowForm(false);
      setEditingProduct(null);
      loadProducts();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    try {
      await deleteProduct(id);
      loadProducts();
    } catch (err) {
      alert(err.message);
    }
  };
  
  return (
    <>
      {loading 
      ? <div className="container">Loading...</div> 
      : <div className="container">
          <Btn className="btn-add" onClick={() => { setEditingProduct(null); setShowForm(true); }}>
            + Add Product
          </Btn>

          {showForm && (
            <ProductForm
              product={editingProduct}
              onSave={handleSave}
              onCancel={() => { setShowForm(false); setEditingProduct(null); }}
            />
          )}

          <Table>
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <Img
                        src={product.img.startsWith('http') ? product.img : `http://localhost:5000${product.img}`}
                        alt={product.title}
                      />
                    </td>
                    <td>{product.title}</td>
                    <td>{product.text.substring(0, 60)}...</td>
                    <td>${product.price}</td>
                    <td>
                      <Btn className="btn-edit" onClick={() => handleEdit(product)}>Edit</Btn>
                      <Btn className="btn-delete" onClick={() => handleDelete(product.id)}>Delete</Btn>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Table>
        </div>}
    </>
  );
};

export default ProductsPage;
