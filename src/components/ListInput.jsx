import { Icon } from "@iconify/react";
import "../styles/ListInput.css";

const ListInput = () =>
{
	return (
		<div className="list-input">
			<input className="list-input-name" type="text" placeholder="Product..."/>
			<div className="list-input-section">
				<div className="list-input-section">
					<Icon  className="list-input-price-icon" icon="ion:pricetag"/>
					<input className="list-input-price" type="number" placeholder="$0"/>
				</div>
				<div className="list-input-section">
					<Icon className="list-input-amount-icon" icon="bxs:cart"/>
					<input className="list-input-amount" type="number" placeholder="x0"/>
				</div>
			</div>
		</div>
	);
};

export default ListInput;