import { Request, Response } from 'express';
import * as OrderService from '../service/orderService';

export const createOrderController = async (req: Request, res: Response) => {
    try {
        const order = await OrderService.createOrder(req.body);
        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        console.error('Error creating order: ', error);
        res.status(500).json({ error });
    }
};

export const deleteOrderController = async (req: Request, res: Response) => {
    try {
        const orderId = parseInt(req.params.id);
        await OrderService.deleteOrder(orderId);
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        console.error('Error deleting order: ', error);
        res.status(500).json({ error});
    }
};
