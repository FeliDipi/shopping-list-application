import { useList } from "../hooks/useList.js";
import ListTicket from "./ListTicket.jsx";

const List = () =>
{
	const {list, ticketOnEdit} = useList();

	return (
		<ul className="list">
			{
				list.map(ticket => (<ListTicket key={ticket.id} {...ticket} onEdit={ticketOnEdit===ticket.id}/>))
			}
		</ul>
	);
};

export default List;