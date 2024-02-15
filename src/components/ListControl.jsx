import { ListInputProvider } from "../providers/ListInputContent.jsx";
import ListButtonAdd from "./ListButtonAdd.jsx";
import ListInput from "./ListInput.jsx";

const ListControl = () =>
{
	return (
		<main className="list-control">
			<ListInputProvider>
				<ListInput/>
				<ListButtonAdd/>
			</ListInputProvider>
		</main>
	);
};

export default ListControl;