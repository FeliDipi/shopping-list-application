import { useContext } from "react";
import { TicketsContext } from "../providers/TicketsContext.jsx";

export const useTickets = () =>
{
	const context = useContext(TicketsContext);

	if(context === undefined)
	{
		throw new Error("useList must be used within a Shopping List Provider");
	}

	return context;
};