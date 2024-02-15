import { useContext } from "react";
import { ListInputContext } from "../providers/ListInputContent.jsx";

export const useListInput = () =>
{
	const context = useContext(ListInputContext);

	if(context === undefined)
	{
		throw new Error("useList must be used within a ListInputProvider");
	}

	return context;
};