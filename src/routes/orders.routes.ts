import express from 'express';
import * as OrderController from '../controller/ordersController';

const router = express.Router();

router.post('/', OrderController.createOrderController);
router.delete('/:id', OrderController.deleteOrderController);

export default router;
