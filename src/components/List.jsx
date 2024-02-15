import ListTicket from "./ListTicket.jsx";

const List = ({tickets}) =>
{
	return (
		<ul className="list">
			{
				tickets.map(ticket => (<ListTicket key={ticket.id} {...ticket}/>))
			}
		</ul>
	);
};

export default List;