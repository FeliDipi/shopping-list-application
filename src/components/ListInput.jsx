import { useList } from "../hooks/useList.js";
import { useListInput } from "../hooks/useListInput.js";

const ListInput = () =>
{
	const {productInfo,handleName,handlePrice,handleAmount} = useListInput();

	const handleNameInput = (event) =>
	{
		handleName(event.target.value);
	}

	const handlePriceInput = (event) =>
	{
		const value = event.target.value;

		if(isNaN(value)) return;

		handlePrice(value);
	}

	const handleAmountInput = (event) =>
	{
		const value = event.target.value;

		if(isNaN(value)) return;

		handleAmount(value);
	}

	const prefixFormatter = (str, prefix) =>
	{
		return str.length === 0?"":prefix+str;
	}

	return (
		<div className="list-input">
			<input onChange={handleNameInput} className="list-input-name" type="text" placeholder="Product..." value={productInfo.productName}/>
			<input onChange={handlePriceInput} className="list-input-price" type="text" placeholder="$0" value={prefixFormatter(productInfo.productPrice,"$")}/>
			<input onChange={handleAmountInput} className="list-input-amount" type="text" placeholder="x0" value={prefixFormatter(productInfo.productAmount,"x")}/>
		</div>
	);
};

export default ListInput;