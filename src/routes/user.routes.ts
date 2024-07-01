import { Router } from 'express';
import { signUpController, signInController, getMeController, logoutController } from '../controller/userController.js';

const router = Router();

router.post('/signup', signUpController);
router.post('/signin', signInController);
router.get('/me',  getMeController);
router.post('/logout', logoutController);

export default router;
