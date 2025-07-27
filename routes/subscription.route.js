import { Router } from 'express';
import { createSubscription, getAllSubscriptions } from '../controllers/subscriptionController.js';
import auth from '../middleware/auth.js';

const router = Router();

router.get('/', auth, getAllSubscriptions);
router.post('/', auth, createSubscription);

export default router;
