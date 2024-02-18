import { IDataModal } from "../IDataModal.js";

export class DataModal extends IDataModal
{
    fetchData()
    {
        const ticketsRaw = localStorage.getItem("tickets");

        const tickets = ticketsRaw?JSON.parse(ticketsRaw):[];

        return tickets;
    }

    saveData(data)
    {
        localStorage.setItem("tickets",JSON.stringify(data));
    }
}