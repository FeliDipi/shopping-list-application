import { IDataModal } from "../IDataModal.js";

const getData = () =>
{
    const ticketsRaw = localStorage.getItem("tickets");
    const tickets = ticketsRaw?JSON.parse(ticketsRaw):[];

    return tickets;
}

export class DataModal extends IDataModal
{
    async create(data)
    {
        const tickets = getData();

        const newTicket = {id:Math.random(),isSpent:false,...data};
        const newTickets = [newTicket,...tickets];

        localStorage.setItem("tickets",JSON.stringify(newTickets));
    }

    async read()
    {
        return getData();
    }

    async update(data)
    {
        const tickets = getData();
        const ticketIndex = tickets.findIndex(ticket=>ticket.id === data.id);

        tickets[ticketIndex] = data;

        localStorage.setItem("tickets",JSON.stringify(tickets));
    }

    async delete(data)
    {
        const tickets = getData();
        const newTickets = tickets.filter(ticket => ticket.id!==data);

        localStorage.setItem("tickets",JSON.stringify(newTickets));
    }
}