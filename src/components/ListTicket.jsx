const ListTicket = ({id,productName,productPrice,productAmount,isSpent}) =>
{
	const ticketStyle = isSpent?"list-ticket list-ticket-spent":"list-ticket";

	return (
		<li className={ticketStyle}>
			<p className="list-ticket-info">{productName} x {productAmount}</p>
			<p className="list-ticket-price">${productPrice*productAmount}</p>
		</li>
	);
};

export default ListTicket;