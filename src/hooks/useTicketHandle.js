import { useEffect, useState } from "react";
import { TICKET_STATE } from "../utils/ticketStates.js";
import { useTickets } from "./useTickets.js";
import { useTicketEdit } from "./useTicketEdit.js";

export const useTicketHandle = ({ticket}) =>
{  
    const { isSpent } = ticket;

    const { updateTicket, removeTicket } = useTickets();
	const { ticketOnEdit, startEdition } = useTicketEdit();

	const [draggeable, setDraggeable] = useState(!isSpent);
	const [state, setState] = useState(isSpent?TICKET_STATE.SPENT:TICKET_STATE.NORMAL);

	const updateBehaviour = (dragValue,newState) =>
	{
		setDraggeable(dragValue);
		setState(newState);
	}

	const handleSpent = () =>
	{
		if(state === TICKET_STATE.EDIT) return;
	
		const newTicketData = {...ticket, isSpent:!isSpent};
		const newState = newTicketData.isSpent?TICKET_STATE.SPENT:TICKET_STATE.NORMAL;

		updateBehaviour(isSpent,newState);
		updateTicket(newTicketData);	
	}

	const handleEdit = () =>
	{		
		updateBehaviour(false,TICKET_STATE.EDIT);
		startEdition(ticket);		
	}

	const handleRemove = () =>
	{
		removeTicket(ticket);
	}

	const handleDrag = (event, info) =>{
		if(info.offset.x < -200) handleEdit();
		else if(info.offset.x > 200)  handleRemove();
	}

	const checkEditMode = () =>
	{
		if(state === TICKET_STATE.EDIT && (!ticketOnEdit || ticketOnEdit.id !== ticket.id))
		{
			updateBehaviour(true,TICKET_STATE.NORMAL);
		}
	}

	useEffect(checkEditMode,[ticketOnEdit]);

    return {
		state,
		draggeable,
		handleSpent,
		handleDrag
    }
}