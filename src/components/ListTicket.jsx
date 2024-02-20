import TextAutoScroll from "./TextAutoScroll.jsx";
import { useTickets } from "../hooks/useTickets.js";

const ListTicket = ({ticket}) =>
{
	const {name, price, amount} = ticket;

	const {ticketStyle, handleInteract, handleStopInteract} = useTickets({ticket});

	return (
		<li 
			onPointerDown={handleInteract}
			onPointerUp={handleStopInteract}
			onPointerCancel={handleStopInteract}
			className={ticketStyle}>
			<div className="list-ticket-info">
				<TextAutoScroll>{name}</TextAutoScroll>
				<p className="list-ticket-amount"> x{amount}</p>
			</div>
			<p className="list-ticket-price">${price*amount}</p>
		</li>
	);
};

export default ListTicket;