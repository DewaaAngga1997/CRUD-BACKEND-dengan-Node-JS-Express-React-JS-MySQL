//halaman ini mengatur perpindahan halaman
import Express from 'express';
import { getAllPoducts } from '../controllers/Products.js';

const router = Express.Router();

router.get('/', getAllPoducts);

export default router;
