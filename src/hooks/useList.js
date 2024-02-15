import { useContext } from "react";
import { ListContext } from "../providers/ListContext.jsx";

export const useList = () =>
{
	const context = useContext(ListContext);

	if(context === undefined)
	{
		throw new Error("useList must be used within a ListProvider");
	}

	return context;
};