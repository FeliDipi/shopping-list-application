import { IDataModal } from "../IDataModal.js";
import { tickets } from "./tickets.json";
 
export class DataModal extends IDataModal
{
    fetchData()
    {
        return tickets;
    }

    saveData(data)
    {
        //Just show the new data object
        // console.log(data);
    }
}