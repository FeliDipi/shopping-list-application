import { useContext } from "react";
import { ShoppingListContext } from "../providers/ShoppingListContext.jsx";

export const useShoppingList = () =>
{
	const context = useContext(ShoppingListContext);

	if(context === undefined)
	{
		throw new Error("useList must be used within a ListProvider");
	}

	return context;
};