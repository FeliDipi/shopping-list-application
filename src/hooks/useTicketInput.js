import { useContext } from "react";
import { TicketsInputContext } from "../providers/TicketsInputContext";

export const useTicketInput = () =>
{
	const context = useContext(TicketsInputContext);

	if(context === undefined)
	{
		throw new Error("useList must be used within a Tickets Input Provider");
	}

	return context;
}