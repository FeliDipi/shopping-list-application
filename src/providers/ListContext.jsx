import { createContext, useState } from "react";
import {tickets as initialTickets} from "../mock/tickets.json";

export const ListContext = createContext();

export const ListProvider = ({children}) =>
{
	const [list, setList] = useState(initialTickets);
	const [ticketOnEdit, setTicketOnEdit] = useState(null);

	const addTicket = (ticket) =>
	{
		if(ticket.productName.length === 0 || ticket.productPrice<=0 || ticket.productAmount<=0) return;

		const newTicket = {
			"id":Math.random(),
			"productName":ticket.productName,
			"productPrice":ticket.productPrice,
			"productAmount":ticket.productAmount,
			"isSpent":false
		}

		const newList = [newTicket, ...list];

		setList(newList);
	};

	const spentTicket = (id, isSpent) =>
	{
		const ticketIndex = list.findIndex(ticket => ticket.id === id);

		if(ticketIndex>=0)
		{
			const newList = [...list];
			newList[ticketIndex].isSpent = isSpent;

			setList(newList);
		}
	};

	const editTicket = (ticket) =>
	{

	};

	const removeTicket = (ticket) =>
	{

	};

	return (
		<ListContext.Provider value={{
			list,
			addTicket,
			spentTicket,
			editTicket,
			removeTicket
		}}>
			{children}
		</ListContext.Provider>
	);
};
