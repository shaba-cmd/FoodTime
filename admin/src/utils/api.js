const API_URL = 'http://localhost:5000/api';

const getToken = () => localStorage.getItem('adminToken');

const request = async (endpoint, options = {}) => {
  const token = getToken();
  
  const isFormData = options.body instanceof FormData;
  
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  });

  if (response.status === 401) {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    window.location.reload();
    return;
  }

  let data;
  try {
    data = await response.json();
  } catch {
    data = { message: 'Server error' };
  }

  if (!response.ok) {
    throw new Error(data.message || `Error ${response.status}`);
  }

  return data;
};

export const login = (username, password) => 
  request('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });

export const getProducts = () => request('/products');
export const getProduct = (id) => request(`/products/${id}`);
export const createProduct = (formData) => 
  request('/products', {
    method: 'POST',
    body: formData,
    headers: {},
  });
export const updateProduct = (id, formData) => 
  request(`/products/${id}`, {
    method: 'PUT',
    body: formData,
    headers: {},
  });
export const deleteProduct = (id) => 
  request(`/products/${id}`, { method: 'DELETE' });

export const getFaq = () => request('/faq');
export const getFaqCategories = () => request('/faq/categories');
export const createFaqItem = (data) => 
  request('/faq', {
    method: 'POST',
    body: JSON.stringify(data),
  });
export const updateFaqItem = (id, data) => 
  request(`/faq/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
export const deleteFaqItem = (id) => 
  request(`/faq/${id}`, { method: 'DELETE' });