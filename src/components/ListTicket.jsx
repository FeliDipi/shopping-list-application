import { useRef } from "react";
import { useState } from "react";
import { useShoppingList } from "../hooks/useShoppingList.js";

const ListTicket = ({id,name,price,amount,isSpent,onEdit}) =>
{
	const { updateTicket, editTicket } = useShoppingList();

	const [longPressed, setLongPressed] = useState(false);
	const timerRef = useRef(null);

	const handleInteract = () =>
	{
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

		if(onEdit)
		{
			editTicket(null);
		}
		else
		{
			const ticketInfo = {
				"id":id,
				"name":name,
				"price":price,
				"amount":amount,
				"isSpent":!isSpent
			};

			updateTicket(ticketInfo);
		}
	};

	var ticketStyle = "list-ticket";

	if(isSpent) ticketStyle += " list-ticket-spent";
	else if(onEdit) ticketStyle += " list-ticket-edit";

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