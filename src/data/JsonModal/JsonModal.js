import { IModal } from "../DataModal.js";
import { tickets } from "./tickets.json";
 
export class Modal extends IModal
{
    fetchData()
    {
        return tickets;
    }

    saveData(data)
    {
        console.log(data);
    }
}