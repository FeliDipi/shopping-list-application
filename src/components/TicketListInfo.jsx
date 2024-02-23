import { Icon } from "@iconify/react";
import { useTickets } from "../hooks/useTickets.js";

const TicketListInfo = () =>
{
	const {tickets} = useTickets();

	var estimatedValue = 0;
	var spentValue = 0;

	tickets.forEach(ticket =>
	{
		var productValue = ticket.price*ticket.amount;

		estimatedValue+=productValue;

		if(ticket.isSpent)
		{
			spentValue+=productValue;
		}
	});

	return (
		<footer className="list-footer">
			<div className="list-footer-section">
				<Icon className="list-footer-icon-estimated" icon="mdi:cash-multiple" />
				<p className="list-footer-estimated">{estimatedValue}</p>
			</div>
			<div className="list-footer-section">
				<Icon className="list-footer-icon-spent" icon="mdi:cash-check" />
				<p className="list-footer-spent">{spentValue}</p>
			</div>
		</footer>
	);
};

export default TicketListInfo;