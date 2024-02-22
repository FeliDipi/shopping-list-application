import { Reorder } from "framer-motion";
import { Icon } from "@iconify/react";

import { useTicketHandle } from "../hooks/useTicketHandle.js"
import { TICKET_VARIANTS } from "../utils/ticketStates.js";

const Ticket = ({ticket}) =>
{
	const {name, price, amount } = ticket;

	const { state, draggeable, handleSpent, handleDrag } = useTicketHandle({ticket});

	return (
		<Reorder.Item
			value={ticket}
			drag
			dragDirectionLock
			dragConstraints={{left:0,right:0}}
			dragListener={draggeable}	
			onDragEnd={handleDrag}
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

export default Ticket;