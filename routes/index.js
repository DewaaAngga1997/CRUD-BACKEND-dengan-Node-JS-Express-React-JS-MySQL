//halaman ini mengatur perpindahan halaman
import Express from 'express';
import { getAllPoducts, createPoduct, getPoductById, updateProduct, deleteProduct } from '../controllers/Products.js';

const router = Express.Router();

router.get('/', getAllPoducts);
router.get('/:id', getPoductById);
router.post('/', createPoduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
