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
			<input onChange={handleInputName} className="list-input-name" type="text" placeholder="Product..." value={input.name}/>
			<input onChange={handleInputPrice} className="list-input-price" type="text" placeholder="$0" value={input.price}/>
			<input onChange={handleInputAmount} className="list-input-amount" type="text" placeholder="x0" value={input.amount}/>
		</div>
	);
};

export default TicketInput;