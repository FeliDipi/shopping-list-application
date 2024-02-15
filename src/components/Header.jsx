import "../styles/Header.css";

import ListMenuButton from "./ListMenuButton.jsx";
import ListMenu from "./ListMenu.jsx";

const Header = () =>
{
    return (
        <header className="list-header">
            <ListMenuButton/>
            <ListMenu/>
        </header>
    );
}

export default Header;