import { Router } from 'express';
import { getAllProducts, getProductById, getProductsByType, getProductsTotalCost } from '../controllers/inventoryController';

const router = Router();

router.get("/products/totalcost", getProductsTotalCost);

router.get("/products/type/:type", getProductsByType);

router.get("/products/:id", getProductById);

router.get("/products", getAllProducts);

export default router;