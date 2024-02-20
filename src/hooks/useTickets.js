import { useRef, useState } from "react";
import { useShoppingList } from "./useShoppingList.js";

const TICKET_STYLES = {
    NORMAL:"list-ticket",
    SPENT: "list-ticket list-ticket-spent",
    EDIT: "list-ticket list-ticket-edit"
}

export const useTickets = ({ticket}) =>
{    
    const { updateTicket, editTicket, ticketOnEdit } = useShoppingList();

    const onEdit = ticketOnEdit && ticketOnEdit.id === ticket.id;
    const {isSpent} = ticket; 

	const [longPressed, setLongPressed] = useState(false);
	const timerRef = useRef(null);

    const currentStyle = () =>
    {
        if(isSpent) return TICKET_STYLES.SPENT;

        if(onEdit) return TICKET_STYLES.EDIT;

        return TICKET_STYLES.NORMAL;
    }

	const handleInteract = () =>
	{
		if(isSpent) return;

		timerRef.current = setTimeout(() => {
			setLongPressed(true);
			editTicket(ticket);
		}, 500);
	};

	const handleStopInteract = () =>
	{
		clearTimeout(timerRef.current);

		if(longPressed)
		{
			setLongPressed(false);
			return;
		}

		if(onEdit)
		{
			editTicket(null);
			return;
		}

		const newTicketData = {...ticket, isSpent:!isSpent};
		updateTicket(newTicketData);

	};

    return {
        ticketStyle:currentStyle(),
        handleInteract,
        handleStopInteract
    }
}