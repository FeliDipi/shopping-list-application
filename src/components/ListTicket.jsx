import { useRef } from "react";
import { useState } from "react";

const ListTicket = ({id,productName,productPrice,productAmount,isSpent}) =>
{
	const [longPressed, setLongPressed] = useState(false);
	const timerRef = useRef(null);

	const [spent, setSpent] = useState(isSpent);
	const [edit, setEdit] = useState(false);

	const handleInteract = () =>
	{
		timerRef.current = setTimeout(() => {
			setLongPressed(true);
			setEdit(true);
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

		if(edit)
		{
			setEdit(false);
		}
		else
		{
			setSpent(!spent);
		}
	};

	var ticketStyle = "list-ticket";

	if(spent) ticketStyle += " list-ticket-spent";
	else if(edit) ticketStyle += " list-ticket-edit";

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