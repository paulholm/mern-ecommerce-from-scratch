import express from 'express'
const router = express.Router()

import {
  createProduct,
  createProductReview,
  deleteProduct,
  getProducts,
  getProductById,
  getTopProducts,
  updateProduct,
} from '../controllers/productController.js'
import { isAdmin, protect } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect, isAdmin, createProduct)
router.get('/top', getTopProducts)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, isAdmin, deleteProduct)
  .put(protect, isAdmin, updateProduct)
router.route('/:id/reviews').post(protect, createProductReview)

export default router
