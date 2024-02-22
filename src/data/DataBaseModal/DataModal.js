import { IDataModal } from "../IDataModal.js";
import { createDB, readDB, updateDB, deleteDB } from "./client.js";

export class DataModal extends IDataModal
{
    async create(data)
    {
        await createDB({...data});
    }

    async read()
    {
        const response = await readDB();
        const tickets = response.rows.map(
			({ticket_id,ticket_name,ticket_price,ticket_amount,ticket_isSpent})=>
			({id:ticket_id,name:ticket_name,price:ticket_price,amount:ticket_amount,isSpent:ticket_isSpent})
        );

        return tickets.reverse();
    }

    async update(data)
    {
        await updateDB({ticket:data});
    }

    async delete(data)
    {
        await deleteDB({id:data});
    }
}