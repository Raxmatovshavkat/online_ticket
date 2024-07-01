import express from 'express';
import * as TicketController from '../controller/ticketController';

const router = express.Router();

router.post('/', TicketController.createTicketController);
router.get('/:id', TicketController.getTicketByIdController);
router.put('/:id', TicketController.updateTicketController);
router.delete('/:id', TicketController.deleteTicketController);
router.get('/', TicketController.getAllTicketsController);

export default router;
