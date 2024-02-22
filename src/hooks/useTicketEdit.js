import { useContext } from "react";
import { TicketsEditContext } from "../providers/TicketsEditContext.jsx";

export const useTicketEdit = () =>
{
	const context = useContext(TicketsEditContext);

	if(context === undefined)
	{
		throw new Error("useList must be used within a Shopping List Provider");
	}

	return context;
}