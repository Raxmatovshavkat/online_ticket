import { Request, Response } from 'express';
import * as TicketService from '../service/ticketService';

export const createTicketController = async (req: Request, res: Response) => {
    try {
        const ticket = await TicketService.createTicket(req.body);
        res.status(201).json({ message: 'Ticket created successfully', ticket });
    } catch (error) {
        console.error('Error creating ticket: ', error);
        res.status(500).json({ error });
    }
};

export const getTicketByIdController = async (req: Request, res: Response) => {
    try {
        const ticketId = parseInt(req.params.id);
        const ticket = await TicketService.getTicketById(ticketId);
        res.status(200).json(ticket);
    } catch (error) {
        console.error('Error fetching ticket: ', error);
        res.status(500).json({ error });
    }
};

export const updateTicketController = async (req: Request, res: Response) => {
    try {
        const ticketId = parseInt(req.params.id);
        const updatedTicket = await TicketService.updateTicket(ticketId, req.body);
        res.status(200).json({ message: 'Ticket updated successfully', ticket: updatedTicket });
    } catch (error) {
        console.error('Error updating ticket: ', error);
        res.status(500).json({ error });
    }
};

export const deleteTicketController = async (req: Request, res: Response) => {
    try {
        const ticketId = parseInt(req.params.id);
        await TicketService.deleteTicket(ticketId);
        res.status(200).json({ message: 'Ticket deleted successfully' });
    } catch (error) {
        console.error('Error deleting ticket: ', error);
        res.status(500).json({ error });
    }
};

export const getAllTicketsController = async (req: Request, res: Response) => {
    try {
        const tickets = await TicketService.getAllTickets();
        res.status(200).json(tickets);
    } catch (error) {
        console.error('Error fetching tickets: ', error);
        res.status(500).json({ error });
    }
};
