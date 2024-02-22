import { Reorder, motion } from "framer-motion";
import { Icon } from "@iconify/react";

import { useTicketHandle } from "../hooks/useTicketHandle.js"
import { TICKET_STATE, TICKET_VARIANTS } from "../utils/ticketStates.js";
import { useEffect, useRef } from "react";

const Ticket = ({ticket}) =>
{
	const nameElement = useRef(null);

	const {name, price, amount } = ticket;
	const { state, draggeable, handleSpent, handleDrag } = useTicketHandle({ticket});

	const icon = state === TICKET_STATE.SPENT?
					"icon-park-solid:shopping-cart-del":
					"icon-park-solid:shopping-cart-add";


	useEffect(()=>{

		if(nameElement.current && nameElement.current.scrollWidth > nameElement.current.clientWidth)
		{
			
		}

	},[])

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
			
			className="list-ticket"
		>
			<div className="list-ticket-section">
				<motion.p 
					ref={nameElement} 
					className="list-ticket-name"
				>
					{name}
				</motion.p>
				<p className="list-ticket-amount">x{amount}</p>
			</div>
			<div className="list-ticket-section">
				<p className="list-ticket-price">${price*amount}</p>
				<Icon
					onPointerDown={handleSpent} 
					className="list-ticket-drag-icon" 
					icon={icon}
				/>
			</div>
		</Reorder.Item>
	);
};

export default Ticket;