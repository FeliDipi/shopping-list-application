import { useList } from "../hooks/useList.js";
import ListTicket from "./ListTicket.jsx";

const List = () =>
{
	const {list} = useList();

	return (
		<ul className="list">
			{
				list.map(ticket => (<ListTicket key={ticket.id} {...ticket}/>))
			}
		</ul>
	);
};

export default List;