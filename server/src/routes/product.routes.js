import express from 'express';
import {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller.js';
import { validateCreateProduct } from '../middlewares/validateProduct.middleware.js';

const { Router } = express;

const router = Router();

router.post('/', validateCreateProduct, createProduct);
router.get('/', getProducts);
router.get('/:id', getProduct);
router.put('/:id', validateCreateProduct, updateProduct);
router.delete('/:id', deleteProduct);

export default router;
