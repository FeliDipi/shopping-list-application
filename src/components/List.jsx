import { useShoppingList } from "../hooks/useShoppingList.js";
import ListTicket from "./ListTicket.jsx";

const List = () =>
{
	const {tickets, ticketOnEdit} = useShoppingList();

	return (
		<ul className="list">
			{
				tickets.map(ticket => (<ListTicket key={ticket.id} ticketData={ticket} isOnEdit={ticketOnEdit && ticketOnEdit.id===ticket.id}/>))
			}
		</ul>
	);
};

export default List;