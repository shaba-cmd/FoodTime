const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const request = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || `Error ${response.status}`);
  }

  return data;
};

export const getProducts = () => request('/products');
export const getFaq = () => request('/faq');

export const login = (username, password) => 
  request('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });

export const register = (name, username, password) => 
  request('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ name, username, password }),
  });

export const getMe = () => request('/auth/me');