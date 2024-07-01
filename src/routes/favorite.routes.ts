import express from 'express';
import * as FavoriteController from '../controller/favoritesController';

const router = express.Router();

router.post('/add', FavoriteController.addFavoriteController);
router.post('/remove', FavoriteController.removeFavoriteController);
router.get('/user/:userId', FavoriteController.getFavoritesByUserController);

export default router;
