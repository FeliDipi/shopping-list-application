import { useShoppingList } from "../hooks/useShoppingList.js";
import ListTicket from "./ListTicket.jsx";

const List = () =>
{
	const {tickets} = useShoppingList();

	return (
		<ul className="list">
			{
				tickets.map(ticket => (<ListTicket key={ticket.id} ticket={ticket}/>))
			}
		</ul>
	);
};

export default List;