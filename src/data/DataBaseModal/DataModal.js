import { IDataModal } from "../IDataModal.js";
import { readDB } from "./client.js";

export class DataModal extends IDataModal
{
    async create(data){}

    async read()
    {
        const response = await readDB();
        const tickets = response.rows.map(
			({ticket_id,ticket_name,ticket_price,ticket_amount,ticket_isSpent})=>
			({id:ticket_id,name:ticket_name,price:ticket_price,amount:ticket_amount,isSpent:ticket_isSpent})
        );

        return tickets;
    }

    async update(data){}
    async delete(data){}
}