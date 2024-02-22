import { createContext, useState } from "react";
import { DataModal } from "../data/JsonModal/DataModal.js";

export const TicketsContext = createContext();

export const TicketsProvider = ({children}) =>
{
	const dataModal = new DataModal();
	const [tickets, setTickets] = useState(dataModal.fetchData());

	const validTicket = (ticketInfo) =>
	{
		const {name, price, amount} = ticketInfo;
		return name.length>0 && price>0 && amount>0;
	}

	const generateUnitId = () =>
	{
		return Math.random();
	}

	const addTicket = (ticketInfo) =>
	{
		if(!ticketInfo || !validTicket(ticketInfo)) return;

		const newTicket = {id:generateUnitId(),isSpent:false,...ticketInfo};
		const newTickets = [newTicket, ...tickets];

		setTickets(newTickets);
		dataModal.saveData(newTickets);
	};

	const updateTicket = (ticket) =>
	{
		const ticketIndex = tickets.findIndex(({id}) => id === ticket.id);

		if(ticketIndex>=0)
		{
			const newTickets = [...tickets];
			newTickets[ticketIndex] = ticket;
	
			setTickets(newTickets);
			dataModal.saveData(newTickets);
		}
	}

	const removeTicket = (ticket) =>
	{
		const newTickets = tickets.filter(({id}) => id !== ticket.id);

		setTickets(newTickets);
		dataModal.saveData(newTickets);
	};

	const orderTickets = (newTickets) =>
	{
		setTickets(newTickets);
		dataModal.saveData(newTickets);
	}

	return (
		<TicketsContext.Provider value={{
			tickets,
			orderTickets,
			addTicket,
			updateTicket,
			removeTicket,
		}}>
			{children}
		</TicketsContext.Provider>
	);
};
