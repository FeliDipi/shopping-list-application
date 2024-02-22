import { IDataModal } from "../IDataModal.js";

export class DataModal extends IDataModal
{
    async create(data)
    {
        const ticketsRaw = localStorage.getItem("tickets");
        const tickets = ticketsRaw?JSON.parse(ticketsRaw):[];

        const newTicket = {id:Math.random(),isSpent:false,...data};
        const newTickets = [newTicket,...tickets];

        localStorage.setItem("tickets",JSON.stringify(newTickets));
    }

    async read()
    {
        const ticketsRaw = localStorage.getItem("tickets");
        const tickets = ticketsRaw?JSON.parse(ticketsRaw):[];

        return tickets;
    }

    async update(data)
    {
        const ticketsRaw = localStorage.getItem("tickets");
        const tickets = ticketsRaw?JSON.parse(ticketsRaw):[];

        const ticketIndex = tickets.findIndex(ticket=>ticket.id === data.id);

        tickets[ticketIndex] = data;

        localStorage.setItem("tickets",JSON.stringify(tickets));
    }

    async delete(data)
    {
        const ticketsRaw = localStorage.getItem("tickets");
        const tickets = ticketsRaw?JSON.parse(ticketsRaw):[];

        const newTickets = tickets.filter(ticket => ticket.id!==data);

        localStorage.setItem("tickets",JSON.stringify(newTickets));
    }
}