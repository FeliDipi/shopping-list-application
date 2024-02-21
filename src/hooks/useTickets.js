import { useShoppingList } from "./useShoppingList.js";
import { TICKET_STATE } from "../utils/ticketStates.js";
import { useState } from "react";

export const useTickets = (ticket) =>
{  
    const { isSpent } = ticket; 
    const { updateTicket, editTicket, removeTicket } = useShoppingList();

	const [state, setState] = useState(isSpent?TICKET_STATE.SPENT:TICKET_STATE.NORMAL);

	const isOnEdit = () =>
	{
		return state === TICKET_STATE.EDIT;
	}

	const handleInteract = () =>
	{
		if(isOnEdit()) resetEditState();	
	};

	const handleSpent = () =>
	{
		const newTicketData = {...ticket, isSpent:!isSpent};
		updateTicket(newTicketData);

		setState(newTicketData.isSpent?TICKET_STATE.SPENT:TICKET_STATE.NORMAL);
	}

	const resetEditState = () =>
	{
		editTicket(null);
		setState(TICKET_STATE.NORMAL);
	}

	const handleEdit = () =>
	{
		editTicket(ticket);
		setState(TICKET_STATE.EDIT);
	}

	const handleRemove = () =>
	{
		removeTicket(ticket);
	}

	const handleDrag = (event, info) =>{
		if(info.offset.x < -200) handleEdit();
		else if(info.offset.x > 200)  handleRemove();
	}

    return {
		state,
		handleSpent,
		handleInteract,
		handleDrag
    }
}