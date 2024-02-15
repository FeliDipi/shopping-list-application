import { Icon } from "@iconify/react";
import "../styles/ListMenuButton.css";

const ListMenuButton = () =>
{
	return (
		<button className='list-menu-button'>
			<Icon className='list-menu-button-icon' icon="fluent:list-24-filled"/>
		</button>
	);
};

export default ListMenuButton;