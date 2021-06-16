import Router from "express-promise-router";
import ProductController from '../controllers/product.js';

const router = Router();

router.post('/products', ProductController.create);
router.get('/products', ProductController.listAll);
router.get('/products/:id', ProductController.findById);
router.put('/products/:id', ProductController.update);
router.delete('/products/:id', ProductController.deleteById);

export default router;