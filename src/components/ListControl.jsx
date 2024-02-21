import { useShoppingList } from "../hooks/useShoppingList.js";
import ListButtonAdd from "./ListButtonAdd.jsx";
import ListInput from "./ListInput.jsx";

const ListControl = () =>
{
	const {ticketOnEdit} = useShoppingList();

	return (
		<main className="list-control">
			<ListInput/>
			<ListButtonAdd editMode={ticketOnEdit !== null}/>
		</main>
	);
};

export default ListControl;