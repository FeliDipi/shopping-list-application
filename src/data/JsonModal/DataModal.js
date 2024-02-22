import { IDataModal } from "../IDataModal.js";
import { tickets } from "./tickets.json";
 
export class DataModal extends IDataModal
{
    async create(data){}

    async read()
    {
        return tickets;
    }

    async update(data){}
    async delete(data){}
}