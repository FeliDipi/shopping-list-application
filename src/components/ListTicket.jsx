import { Reorder } from "framer-motion";
import { useTickets } from "../hooks/useTickets.js"
import { Icon } from "@iconify/react";
import { TICKET_STATE, TICKET_VARIANTS } from "../utils/ticketStates.js";

const ListTicket = ({ticket}) =>
{
	const {name, price, amount } = ticket;

	const { state, handleInteract, handleSpent, handleDrag } = useTickets(ticket);

	return (
		<Reorder.Item
			value={ticket}

			drag
			dragDirectionLock
			dragConstraints={{left:0,right:0}}
			dragListener={state===TICKET_STATE.NORMAL}
			
			onDragEnd={handleDrag}
			onClick={handleInteract}

			animate={state}

			variants={TICKET_VARIANTS}

			className="list-ticket"
		>
			<div className="list-ticket-section">
				<p>{name}</p>
				<p className="list-ticket-amount">x{amount}</p>
			</div>
			<div className="list-ticket-section">
				<p className="list-ticket-price">${price*amount}</p>
				<Icon
					onPointerDown={handleSpent} 
					className="list-ticket-drag-icon" 
					icon="fluent:cart-24-filled" 
				/>
			</div>
		</Reorder.Item>
	);
};

export default ListTicket;