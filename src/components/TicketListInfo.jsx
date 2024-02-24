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
		<footer className="tickets-info background-blur center separation">
			<div className="tickets-info-section background center">
				<Icon className="tickets-info-icon-estimated" icon="mdi:cash-multiple" />
				<p className="tickets-info-estimated">{estimatedValue}</p>
			</div>
			<div className="tickets-info-section background center">
				<Icon className="tickets-info-icon-spent" icon="mdi:cash-check" />
				<p className="tickets-info-spent">{spentValue}</p>
			</div>
		</footer>
	);
};

export default TicketListInfo;