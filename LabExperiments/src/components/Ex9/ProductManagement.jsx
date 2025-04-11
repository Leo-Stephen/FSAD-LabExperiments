import { useState, useEffect } from 'react';
import productApi from './api/productApi';
import '/src/css/ProductManagement.css';
import Navbar from '../shared/Navbar';
import '../../../src/css/shared/ExperimentLayout.css';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: ''
  });
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');

  // Fetch all products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await productApi.getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
      setMessage('Failed to fetch products');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'price' || name === 'quantity' ? 
        (value === '' ? '' : parseFloat(value)) : value
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      quantity: ''
    });
    setIsEditing(false);
    setSelectedProductId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (isEditing) {
        await productApi.updateProduct(selectedProductId, formData);
        setMessage('Product updated successfully!');
      } else {
        await productApi.addProduct(formData);
        setMessage('Product added successfully!');
      }
      resetForm();
      fetchProducts();
    } catch (error) {
      console.error(error);
      setMessage(`Failed to ${isEditing ? 'update' : 'add'} product`);
    }
  };

  const handleEdit = async (id) => {
    try {
      const product = await productApi.getProductById(id);
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: product.quantity
      });
      setSelectedProductId(id);
      setIsEditing(true);
    } catch (error) {
      console.error(error);
      setMessage(`Failed to fetch product details for editing`);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await productApi.deleteProduct(id);
        setMessage('Product deleted successfully!');
        fetchProducts();
      } catch (error) {
        console.error(error);
        setMessage('Failed to delete product');
      }
    }
  };

  return (
    <div className="experiment-layout">
      <Navbar />
      <div className="experiment-content">
        <div className="product-management">
          <h2>{isEditing ? 'Edit Product' : 'Add New Product'}</h2>
          
          {message && <div className="message">{message}</div>}
          
          <form onSubmit={handleSubmit} className="product-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                step="0.01"
                min="0"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="0"
                value={formData.quantity}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-buttons">
              <button type="submit" className="btn-submit">
                {isEditing ? 'Update Product' : 'Add Product'}
              </button>
              {isEditing && (
                <button type="button" className="btn-cancel" onClick={resetForm}>
                  Cancel
                </button>
              )}
            </div>
          </form>
          
          <h2>Product List</h2>
          {products.length === 0 ? (
            <p>No products found</p>
          ) : (
            <table className="products-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>{product.quantity}</td>
                    <td className="action-buttons">
                      <button onClick={() => handleEdit(product.id)} className="btn-edit">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(product.id)} className="btn-delete">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
