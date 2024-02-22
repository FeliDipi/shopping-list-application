import { IDataModal } from "../IDataModal.js";

export class DataModal extends IDataModal
{
    async create(data){}

    async read()
    {
        const ticketsRaw = localStorage.getItem("tickets");

        const tickets = ticketsRaw?JSON.parse(ticketsRaw):[];

        return tickets;
    }

    async update(data)
    {
        localStorage.setItem("tickets",JSON.stringify(data));
    }

    async delete(data){}
}