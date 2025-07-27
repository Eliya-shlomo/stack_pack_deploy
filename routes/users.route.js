import { Router } from 'express';
import { getAllUsers, getUserById } from '../controllers/userController.js';
import auth from '../middleware/auth.js';

const router = Router();

router.get('/', auth, getAllUsers);
router.get('/:id', auth, getUserById);

export default router;
