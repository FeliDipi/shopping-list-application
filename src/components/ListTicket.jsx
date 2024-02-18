import { useRef } from "react";
import { useState } from "react";
import { useShoppingList } from "../hooks/useShoppingList.js";

const ListTicket = ({ticketData,isOnEdit}) =>
{
	const {id, name, price, amount, isSpent} = ticketData;

	const { updateTicket, editTicket } = useShoppingList();

	const [longPressed, setLongPressed] = useState(false);
	const timerRef = useRef(null);

	const handleInteract = () =>
	{
		if(isSpent) return;

		timerRef.current = setTimeout(() => {
			setLongPressed(true);
			editTicket(id);
		}, 500);
	};

	const handleStopInteract = () =>
	{
		clearTimeout(timerRef.current);

		if(longPressed)
		{
			setLongPressed(false);
			return;
		}

		if(isOnEdit)
		{
			editTicket(null);
			return;
		}

		const newTicketData = {...ticketData, isSpent:!isSpent};
		updateTicket(newTicketData);

	};

	var ticketStyle = "list-ticket";

	if(isSpent) ticketStyle += " list-ticket-spent";
	else if(isOnEdit) ticketStyle += " list-ticket-edit";

	return (
		<li onTouchStart={handleInteract}
			onTouchEnd={handleStopInteract}
			onTouchCancel={handleStopInteract}
			className={ticketStyle}>
			<p className="list-ticket-info">{name} x {amount}</p>
			<p className="list-ticket-price">${price*amount}</p>
		</li>
	);
};

export default ListTicket;