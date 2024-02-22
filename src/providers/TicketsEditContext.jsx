import { createContext, useState } from "react";
import { useTickets } from "../hooks/useTickets.js";
import { useTicketInput } from "../hooks/useTicketInput.js";

export const TicketsEditContext = createContext();

export const TicketsEditProvider = ({children}) =>
{
    const [ticketOnEdit, setTicketOnEdit] = useState(null);
    const {updateTicket} = useTickets();
    const {input,setInput} = useTicketInput();

    const finishEdition = () =>
    {
        if(!ticketOnEdit) return;

        const ticketEdited = {...ticketOnEdit, name:input.name, price: input.price, amount: input.amount};

        setTicketOnEdit(null);
        updateTicket(ticketEdited);
    }

    const startEdition = (ticket) =>
    {
        setTicketOnEdit(ticket);
        setInput({...ticket});
    }

    return (
        <TicketsEditContext.Provider 
        value={{
            ticketOnEdit,
            startEdition,
            finishEdition
        }}>
            {children}
        </TicketsEditContext.Provider>
    )
}