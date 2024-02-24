import { createContext, useEffect, useState } from "react";
import { DataModal } from "../data/DataBaseModal/DataModal.js";

export const TicketsContext = createContext();

export const TicketsProvider = ({children}) =>
{
	const dataModal = new DataModal();
	const [tickets, setTickets] = useState([]);

	const loadTickets = async () =>
	{
		const newTickets = await dataModal.read();
		setTickets(newTickets);
	}

	const validTicket = async (ticketInfo) =>
	{
		const {name, price, amount} = ticketInfo;
		return name.length>0 && price>0 && amount>0;
	}

	const addTicket = async (ticketInfo) =>
	{
		if(!ticketInfo || !validTicket(ticketInfo)) return;

		await dataModal.create(ticketInfo);
		loadTickets();
	};

	const updateTicket = async (ticket) =>
	{
		await dataModal.update(ticket);
		loadTickets();
	}

	const removeTicket = async (ticket) =>
	{
		await dataModal.delete(ticket.id);
		loadTickets();
	};

	const orderTickets = (newTickets) =>
	{
		setTickets(newTickets);
	}

	useEffect(()=>{
		loadTickets();
	},[])

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
