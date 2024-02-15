import "../styles/ListControl.css";
import ListButtonAdd from "./ListButtonAdd.jsx";
import ListInput from "./ListInput.jsx";

const ListControl = () =>
{
	return (
		<main className="list-control">
			<ListInput/>
			<ListButtonAdd/>
		</main>
	);
};

export default ListControl;