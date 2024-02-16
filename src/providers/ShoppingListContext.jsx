import { createContext, useState } from "react";
import { Modal } from "../data/JsonModal/JsonModal.js";

export const ShoppingListContext = createContext();

export const ShoppingListProvider = ({children}) =>
{
	const dataModal = new Modal();

	const [tickets, setTickets] = useState(dataModal.fetchData());
	const [ticketOnEdit, setTicketOnEdit] = useState(null);

	const validTicket = (ticket) =>
	{
		const {name, price, amount} = ticket;
		return name.length>0 && price>0 && amount>0;
	}

	const generateUnicId = () =>
	{
		return Math.random();
	}

	const createNewTicket = (ticket) =>
	{
		const newTicket = {
			"id":generateUnicId(),
			"name":ticket.name,
			"price":ticket.price,
			"amount":ticket.amount,
			"isSpent":false
		}

		return newTicket;
	}

	const addTicket = (ticket) =>
	{
		if(!validTicket(ticket)) return;

		const newTickets = [createNewTicket(ticket), ...tickets];

		setTickets(newTickets);
		dataModal.saveData(newTickets);
	};

	const spentTicket = (ticketId, isSpent) =>
	{
		const ticketIndex = tickets.findIndex(ticket => ticket.id === ticketId);

		if(ticketIndex>=0)
		{
			const newTickets = [...tickets];
			newTickets[ticketIndex].isSpent = isSpent;

			setTickets(newTickets);
			dataModal.saveData(newTickets);
		}
	};

	const editTicket = (ticketId, ticket) =>
	{
		const ticketIndex = tickets.findIndex(({id})=>id===ticketId);

		if(ticketIndex>=0)
		{
			const newTickets = [...tickets];

			newTickets[ticketIndex].name = ticket.name;
			newTickets[ticketIndex].price = ticket.price;
			newTickets[ticketIndex].amount = ticket.amount;

			setTickets(newTickets);
			dataModal.saveData(newTickets);
		}
	};

	const removeTicket = (ticketId) =>
	{
		const newTickets = tickets.filter(({id}) => ticketId !== id);

		setTickets(newTickets);
		setTicketOnEdit(null);

		dataModal.saveData(newTickets);
	};

	return (
		<ShoppingListContext.Provider value={{
			tickets,
			ticketOnEdit,
			addTicket,
			spentTicket,
			setTicketOnEdit,
			editTicket,
			removeTicket
		}}>
			{children}
		</ShoppingListContext.Provider>
	);
};
