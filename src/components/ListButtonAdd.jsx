import { Icon } from "@iconify/react";
import { useListInput } from "../hooks/useListInput.js";
import { useShoppingList } from "../hooks/useShoppingList.js";

const ListButtonAdd = () =>
{
	const {productInfo} = useListInput();
	const {addTicket} = useShoppingList();

	const handleAddTicket = () =>
	{
		addTicket(productInfo);
	}

	return (
		<button onClick={handleAddTicket} className="list-button-add">
			<Icon className="list-button-add-icon" icon="mingcute:add-fill" />
		</button>
	);
};

export default ListButtonAdd;