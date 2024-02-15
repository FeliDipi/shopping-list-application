import { useListInput } from "../hooks/useListInput.js";

const ListInput = () =>
{
	const {handleName,handlePrice,handleAmount} = useListInput();

	const handleNameInput = (event) =>
	{
		handleName(event.target.value);
	}

	const handlePriceInput = (event) =>
	{
		handlePrice(event.target.value);
	}

	const handleAmountInput = (event) =>
	{
		handleAmount(event.target.value);
	}

	return (
		<div className="list-input">
			<input onChange={handleNameInput} className="list-input-name" type="text" placeholder="Product..."/>
			<input onChange={handlePriceInput} className="list-input-price" type="number" placeholder="$0"/>
			<input onChange={handleAmountInput} className="list-input-amount" type="number" placeholder="x0"/>
		</div>
	);
};

export default ListInput;