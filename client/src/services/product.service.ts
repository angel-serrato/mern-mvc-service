import api from '@/config/axios.config.ts';

export const getProducts = () => {
  return api.get('/products');
};

export const createProduct = (data) => {
  return api.post('/products', data);
};

export const updateProduct = (id, data) => {
  return api.put(`/products/${id}`, data);
};

export const deleteProduct = (id) => {
  return api.delete(`/products/${id}`);
};
