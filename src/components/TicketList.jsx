import { Reorder } from "framer-motion";
import { useTickets } from "../hooks/useTickets.js";
import Ticket from "./Ticket.jsx";
import { useTicketEdit } from "../hooks/useTicketEdit.js";

const TicketList = () =>
{
	const {tickets,orderTickets} = useTickets();

	return (
		<Reorder.Group axis="y" values={tickets} onReorder={orderTickets} className="list">
			{
				tickets.map(ticket => (
					<Ticket key={ticket.id} ticket={ticket}/>
				))
			}
		</Reorder.Group>
	);
};

export default TicketList;