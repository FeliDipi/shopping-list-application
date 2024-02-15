import { createContext, useState } from "react";
import {tickets as initialTickets} from "../mock/tickets.json";

export const ListContext = createContext();

export const ListProvider = ({children}) =>
{
	const [list, setList] = useState(initialTickets);

	const addTicket = (ticket) =>
	{

	};

	const editTicket = (ticket) =>
	{

	};

	const removeTicket = (ticket) =>
	{

	};

	return (
		<ListContext.Provider value={{
			list,
			addTicket,
			editTicket,
			removeTicket
		}}>
			{children}
		</ListContext.Provider>
	);
};
