import { useRef } from "react";
import { useState } from "react";
import { useShoppingList } from "../hooks/useShoppingList.js";
import { useListInput } from "../hooks/useListInput.js";

const ListTicket = ({id,name,price,amount,isSpent,onEdit}) =>
{
	const { spentTicket, setTicketOnEdit } = useShoppingList();
	const { setProductInfo } = useListInput();

	const [longPressed, setLongPressed] = useState(false);
	const timerRef = useRef(null);

	const handleInteract = () =>
	{
		timerRef.current = setTimeout(() => {
			setLongPressed(true);
			setProductInfo({"name":name,"price":price,"amount":amount});
			setTicketOnEdit(id);
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
			setProductInfo({"name":"","price":"","amount":""});
			setTicketOnEdit(null);
		}
		else
		{
			spentTicket(id,!isSpent);
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