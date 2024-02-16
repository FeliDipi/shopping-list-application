const ListInput = () =>
{
	const handleNameInput = (event) =>
	{
	}

	const handlePriceInput = (event) =>
	{
		const value = event.target.value;

		if(isNaN(value)) return;
	}

	const handleAmountInput = (event) =>
	{
		const value = event.target.value;

		if(isNaN(value)) return;
	}

	const prefixFormatter = (str, prefix) =>
	{
		return str.length === 0?"":prefix+str;
	}

	return (
		<div className="list-input">
			<input onChange={handleNameInput} className="list-input-name" type="text" placeholder="Product..." value={""}/>
			<input onChange={handlePriceInput} className="list-input-price" type="text" placeholder="$0" value={prefixFormatter("","$")}/>
			<input onChange={handleAmountInput} className="list-input-amount" type="text" placeholder="x0" value={prefixFormatter("","x")}/>
		</div>
	);
};

export default ListInput;