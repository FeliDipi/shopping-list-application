import "../styles/Footer.css";

const Footer = ({tickets}) =>
{
	var estimatedValue = 0;
	var spentValue = 0;

	tickets.forEach(ticket =>
	{
		var productValue =ticket.productPrice*ticket.productAmount;

		estimatedValue+=productValue;

		if(ticket.isSpent)
		{
			spentValue+=productValue;
		}
	});

	return (
		<footer className="list-footer">
			<p className="list-footer-estimated">Estimated: ${estimatedValue}</p>
			<p className="list-footer-spent">Spent: ${spentValue}</p>
		</footer>
	);
};

export default Footer;