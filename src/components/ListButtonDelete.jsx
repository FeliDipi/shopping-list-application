import { Icon } from "@iconify/react";
import { useList } from "../hooks/useList.js";

const ListButtonDelete = () =>
{
    const {ticketOnEdit, removeTicket} = useList();

    const handleDelete = () =>
    {
        removeTicket(ticketOnEdit);
    }

    return (      
        <button onClick={handleDelete} className="list-button-delete">
            <Icon className="list-button-delete-icon" icon="tabler:trash-filled" />
        </button>      
    )
}

export default ListButtonDelete;