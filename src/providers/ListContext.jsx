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

	const editTicket = (ticketId, ticketInfo) =>
	{
		const ticketIndex = list.findIndex(({id})=>id===ticketId);

		if(ticketIndex>=0)
		{
			const newList = [...list];

			newList[ticketIndex].productName = ticketInfo.productName;
			newList[ticketIndex].productPrice = ticketInfo.productPrice;
			newList[ticketIndex].productAmount = ticketInfo.productAmount;

			setList(newList);
		}
	};

	const removeTicket = (ticketId) =>
	{
		const newList = list.filter(({id}) => ticketId !== id);

		setList(newList);
		setTicketOnEdit(null);
	};

	return (
		<ListContext.Provider value={{
			list,
			ticketOnEdit,
			addTicket,
			spentTicket,
			setTicketOnEdit,
			editTicket,
			removeTicket
		}}>
			{children}
		</ListContext.Provider>
	);
};
