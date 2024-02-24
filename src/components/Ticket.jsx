import { Reorder, useMotionValue, useTransform } from "framer-motion";
import { Icon } from "@iconify/react";

import { useTicketHandle } from "../hooks/useTicketHandle.js"
import { TICKET_STATE, TICKET_VARIANTS } from "../utils/ticketStates.js";

const Ticket = ({ticket}) =>
{
	const {name, price, amount } = ticket;
	const { state, draggeable, handleSpent, handleDrag } = useTicketHandle({ticket});

	const icon = state === TICKET_STATE.SPENT?
					"icon-park-solid:shopping-cart-del":
					"icon-park-solid:shopping-cart-add";

	return (
		<Reorder.Item
			value={ticket}

			initial={TICKET_VARIANTS.normal}
			animate={state}
			variants={TICKET_VARIANTS}

			drag
			dragDirectionLock
			dragConstraints={{left:0,right:0}}
			dragListener={draggeable}
			onDragEnd={handleDrag}

			className="ticket background center"
		>
			<div className="ticket-section center">
				<p className="ticket-name">{name}</p>
				<p className="ticket-amount">x{amount}</p>
			</div>
			<div className="ticket-section center">
				<p className="ticket-price">${price*amount}</p>
				<Icon
					onPointerDown={handleSpent} 
					className="ticket-drag-icon" 
					icon={icon}
				/>
			</div>
		</Reorder.Item>
	);
};

export default Ticket;