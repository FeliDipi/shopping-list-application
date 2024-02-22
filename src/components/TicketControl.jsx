import TicketInputButton from "./TicketInputButton.jsx";
import TicketInput from "./TicketInput.jsx";

const TicketControl = () =>
{
	return (
		<main className="list-control">
			<TicketInput/>
			<TicketInputButton/>
		</main>
	);
};

export default TicketControl;