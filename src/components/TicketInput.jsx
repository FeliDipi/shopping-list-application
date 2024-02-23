import { useTicketInput } from "../hooks/useTicketInput.js";

const TicketInput = () =>
{
	const {input, setInput} = useTicketInput();

	const handleInputName = (event)=>
	{
		const value = event.target.value;

		const newInput = { ...input, name: value };

		setInput(newInput);
	}

	const handleInputPrice = (event)=>
	{
		const value = event.target.value;

		if(isNaN(value)) return;

		const newInput = { ...input, price: value };

		setInput(newInput);
	}

	const handleInputAmount = (event)=>
	{
		const value = event.target.value;

		if(isNaN(value)) return;

		const newInput = { ...input, amount: value };

		setInput(newInput);
	}

	return (
		<div className="list-input">
			<input onChange={handleInputName} className="list-input-name" type="text" placeholder="product..." value={input.name}/>
			<input onChange={handleInputPrice} className="list-input-price" type="text" placeholder="price $" value={input.price}/>
			<input onChange={handleInputAmount} className="list-input-amount" type="text" placeholder="amount x" value={input.amount}/>
		</div>
	);
};

export default TicketInput;