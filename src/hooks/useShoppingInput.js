import { useState } from "react";

export const useShoppingInput = () =>
{
    const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [amount, setAmount] = useState("");

	const ticket = {name,price,amount};

	return {
		ticket,
		setName,
		setPrice,
		setAmount
	}
};