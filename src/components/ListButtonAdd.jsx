import { Icon } from "@iconify/react";
import "../styles/ListButtonAdd.css";

const ListButtonAdd = () =>
{
	return (
		<button className="list-button-add">
			<Icon className="list-button-add-icon" icon="mingcute:add-fill" />
		</button>
	);
};

export default ListButtonAdd;