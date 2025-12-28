import express from 'express';
import {
  createProduct,
  getProducts,
  getProduct,
} from '../controllers/product.controller.js';
import { validateCreateProduct } from '../middlewares/validateProduct.middleware.js';

const { Router } = express;

const router = Router();

router.post('/', validateCreateProduct, createProduct);
router.get('/', getProducts);
router.get('/:id', getProduct);

export default router;
