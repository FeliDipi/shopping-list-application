import { useShoppingList } from "../hooks/useShoppingList";

const ListInput = () =>
{
	const {ticketInput, setTicketInput, finishEditTicket} = useShoppingList();

	const handleInputName = (event)=>
	{
		const value = event.target.value;

		if(value.length === 0) return;

		const newInput = { ...ticketInput, name: value };
		setTicketInput(newInput);
	}

	const handleInputPrice = (event)=>
	{
		const value = event.target.value;

		if(isNaN(value)) return;

		const newInput = { ...ticketInput, price: value };
		setTicketInput(newInput);
	}

	const handleInputAmount = (event)=>
	{
		const value = event.target.value;

		if(isNaN(value)) return;

		const newInput = { ...ticketInput, amount: value };
		setTicketInput(newInput);
	}

	return (
		<div className="list-input">
			<input onBlur={finishEditTicket} onChange={handleInputName} className="list-input-name" type="text" placeholder="Product..." value={ticketInput.name}/>
			<input onBlur={finishEditTicket} onChange={handleInputPrice} className="list-input-price" type="text" placeholder="$0" value={ticketInput.price}/>
			<input onBlur={finishEditTicket} onChange={handleInputAmount} className="list-input-amount" type="text" placeholder="x0" value={ticketInput.amount}/>
		</div>
	);
};

export default ListInput;