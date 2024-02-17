import { createContext, useState } from "react";
import { Modal } from "../data/JsonModal/JsonModal.js";

export const ShoppingListContext = createContext();

export const ShoppingListProvider = ({children}) =>
{
	const dataModal = new Modal();

	const blankTicket = {name:"",price:"",amount:""};

	const [tickets, setTickets] = useState(dataModal.fetchData());
	const [ticketOnEdit, setTicketOnEdit] = useState(null);
	const [ticketInput, setTicketInput] = useState(blankTicket);

	const validTicket = (ticket) =>
	{
		const {name, price, amount} = ticket;
		return name.length>0 && price>0 && amount>0;
	}

	const generateUnitId = () =>
	{
		return Math.random();
	}

	const createNewTicket = (ticket) =>
	{
		const newTicket = {
			"id":generateUnitId(),
			"name":ticket.name,
			"price":ticket.price,
			"amount":ticket.amount,
			"isSpent":false
		}

		return newTicket;
	}

	const addTicket = () =>
	{
		if(!validTicket(ticketInput)) return;

		const newTickets = [createNewTicket(ticketInput), ...tickets];

		setTickets(newTickets);
		setTicketInput(blankTicket);

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

	const editTicket = (ticketId) =>
	{
		const ticket = tickets.find(({id}) => id === ticketId);

		setTicketOnEdit(ticket);

		const newInput = ticketId?{"name":ticket.name,"price":ticket.price,"amount":ticket.amount}:blankTicket;

		setTicketInput(newInput);
	};

	const removeTicket = (ticketId) =>
	{
		const newTickets = tickets.filter(({id}) => ticketId !== id);

		setTickets(newTickets);
		setTicketOnEdit(null);

		dataModal.saveData(newTickets);
	};

	const finishEditTicket = () =>
	{
		if(!validTicket(ticketInput)) return;

		const ticketEdited = {...ticketOnEdit, name:ticketInput.name,price:ticketInput.price,amount:ticketInput.amount};
		
		updateTicket(ticketEdited);
	}

	return (
		<ShoppingListContext.Provider value={{
			tickets,
			ticketOnEdit,
			ticketInput,
			addTicket,
			updateTicket,
			editTicket,
			removeTicket,
			setTicketInput,
			finishEditTicket
		}}>
			{children}
		</ShoppingListContext.Provider>
	);
};
