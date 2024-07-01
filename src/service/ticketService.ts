import Ticket from '../model/ticketModel';

export const createTicket = async (ticketData: any) => {
    try {
        const ticket = await Ticket.create(ticketData);
        return ticket;
    } catch (error) {
        throw new Error('Failed to create ticket');
    }
};

export const getTicketById = async (ticketId: number) => {
    try {
        const ticket = await Ticket.findByPk(ticketId);
        if (!ticket) {
            throw new Error('Ticket not found');
        }
        return ticket;
    } catch (error) {
        throw new Error('Failed to fetch ticket');
    }
};

export const updateTicket = async (ticketId: number, ticketData: any) => {
    try {
        const ticket = await Ticket.findByPk(ticketId);
        if (!ticket) {
            throw new Error('Ticket not found');
        }
        await ticket.update(ticketData);
        return ticket;
    } catch (error) {
        throw new Error('Failed to update ticket');
    }
};

export const deleteTicket = async (ticketId: number) => {
    try {
        const ticket = await Ticket.findByPk(ticketId);
        if (!ticket) {
            throw new Error('Ticket not found');
        }
        await ticket.destroy();
    } catch (error) {
        throw new Error('Failed to delete ticket');
    }
};

export const getAllTickets = async () => {
    try {
        const tickets = await Ticket.findAll();
        return tickets;
    } catch (error) {
        throw new Error('Failed to fetch tickets');
    }
};
