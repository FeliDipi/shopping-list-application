import { IDataModal } from "../IDataModal.js";
import { tickets } from "./tickets.json";
 
export class DataModal extends IDataModal
{
    fetchData()
    {
        return tickets;
    }
}