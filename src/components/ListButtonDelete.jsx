import { Icon } from "@iconify/react";
import { useShoppingList } from "../hooks/useShoppingList.js";

const ListButtonDelete = () =>
{
    const {removeTicket} = useShoppingList();

    return (      
        <button onClick={removeTicket} className="list-button-delete">
            <Icon className="list-button-delete-icon" icon="tabler:trash-filled" />
        </button>      
    )
}

export default ListButtonDelete;