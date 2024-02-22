import { Reorder } from "framer-motion";
import { useTickets } from "../hooks/useTickets.js";
import Ticket from "./Ticket.jsx";
import { useTicketEdit } from "../hooks/useTicketEdit.js";

const TicketList = () =>
{
	const {tickets,setTickets} = useTickets();

	return (
		<Reorder.Group axis="y" values={tickets} onReorder={setTickets} className="list">
			{
				tickets.map(ticket => (
					<Ticket key={ticket.id} ticket={ticket}/>
				))
			}
		</Reorder.Group>
	);
};

export default TicketList;