import { useList } from "../hooks/useList.js";
import ListButtonAdd from "./ListButtonAdd.jsx";
import ListButtonDelete from "./ListButtonDelete.jsx";
import ListInput from "./ListInput.jsx";

const ListControl = () =>
{
	const {ticketOnEdit} = useList();

	return (
		<main className="list-control">
			<ListInput/>
			{
				ticketOnEdit?<ListButtonDelete/>:<ListButtonAdd/>
			}
		</main>
	);
};

export default ListControl;