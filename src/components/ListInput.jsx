const ListInput = () =>
{
	return (
		<div className="list-input">
			<input className="list-input-name" type="text" placeholder="Product..."/>
			<input className="list-input-price" type="number" placeholder="$0"/>
			<input className="list-input-amount" type="number" placeholder="x0"/>
		</div>
	);
};

export default ListInput;