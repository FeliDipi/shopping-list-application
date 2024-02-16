import { useRef } from "react";
import { useState } from "react";
import { useList } from "../hooks/useList.js";
import { useListInput } from "../hooks/useListInput.js";

const ListTicket = ({id,productName,productPrice,productAmount,isSpent,onEdit}) =>
{
	const { spentTicket, setTicketOnEdit } = useList();
	const { setProductInfo } = useListInput();

	const [longPressed, setLongPressed] = useState(false);
	const timerRef = useRef(null);

	const handleInteract = () =>
	{
		timerRef.current = setTimeout(() => {
			setLongPressed(true);
			setProductInfo({"productName":productName,"productPrice":productPrice,"productAmount":productAmount});
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
			setProductInfo({"productName":"","productPrice":"","productAmount":""});
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
			<p className="list-ticket-info">{productName} x {productAmount}</p>
			<p className="list-ticket-price">${productPrice*productAmount}</p>
		</li>
	);
};

export default ListTicket;