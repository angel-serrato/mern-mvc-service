import api from '@/config/axios.config.ts';

export const getProducts = () => {
  return api.get('/products');
};
