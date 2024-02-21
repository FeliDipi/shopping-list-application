import { Reorder } from "framer-motion";
import { useShoppingList } from "../hooks/useShoppingList.js";
import ListTicket from "./ListTicket.jsx";

const List = () =>
{
	const {tickets, setTickets} = useShoppingList();

	return (
		<Reorder.Group axis="y" values={tickets} onReorder={setTickets} className="list">
			{
				tickets.map(ticket => (
					<ListTicket key={ticket.id} ticket={ticket}/>
				))
			}
		</Reorder.Group>
	);
};

export default List;