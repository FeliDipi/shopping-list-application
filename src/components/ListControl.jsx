import { useShoppingList } from "../hooks/useShoppingList.js";
import ListButtonAdd from "./ListButtonAdd.jsx";
import ListButtonDelete from "./ListButtonDelete.jsx";
import ListInput from "./ListInput.jsx";

const ListControl = () =>
{
	const {ticketOnEdit} = useShoppingList();

	return (
		<main className="list-control">
			<ListInput/>
			{
				ticketOnEdit?<ListButtonDelete/>:<ListButtonAdd/>
			}
		</main>
	);
};

export default ListControl;