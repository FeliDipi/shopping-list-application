import { Icon } from "@iconify/react";
import { useShoppingList } from "../hooks/useShoppingList.js";

const ListButtonAdd = () =>
{
	const {addTicket} = useShoppingList();

	const handleAddTicket = () =>
	{
	}

	return (
		<button onClick={handleAddTicket} className="list-button-add">
			<Icon className="list-button-add-icon" icon="mingcute:add-fill" />
		</button>
	);
};

export default ListButtonAdd;