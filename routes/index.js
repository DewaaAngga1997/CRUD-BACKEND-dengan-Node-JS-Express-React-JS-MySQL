//halaman ini mengatur perpindahan halaman
import Express from 'express';
import { getAllPoducts, createPoduct } from '../controllers/Products.js';

const router = Express.Router();

router.get('/', getAllPoducts);
router.post('/', createPoduct);

export default router;
