import Product from '../models/Product.model.js';

export const createProduct = async (data) => {
  const exists = await Product.findOne({ name: data.name });
  if (exists) {
    throw new Error('Product name already exists');
  }
  return await Product.create(data);
};

export const getProducts = async () => {
  return await Product.find();
};

export const getProductById = async (id) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
};
