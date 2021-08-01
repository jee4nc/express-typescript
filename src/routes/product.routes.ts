import { Router } from "express";
// Import function's routes 
import {getProducts, getProduct, setProduct, deleteProduct, createProduct} from '../controllers/product.controllers';

const router = Router();

router.get('/tasks', getProducts);
router.get('/tasks/:id', getProduct);
router.post('/tasks', createProduct);
router.put('/tasks/:id', setProduct);
router.delete('/tasks/:id', deleteProduct);

export default router;