import { Icon } from "@iconify/react";
import { useShoppingList } from "../hooks/useShoppingList.js";

const ListButtonDelete = () =>
{
    const {ticketOnEdit, removeTicket} = useShoppingList();

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