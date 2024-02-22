import MenuButton from "./MenuButton.jsx";
import Menu from "./Menu.jsx";

const Header = () =>
{
	return (
		<header className="list-header">
			<MenuButton/>
			<Menu/>
		</header>
	);
};

export default Header;