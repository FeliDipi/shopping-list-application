import TicketInputButton from "./TicketInputButton.jsx";
import TicketInput from "./TicketInput.jsx";

const TicketControl = () =>
{
	return (
		<main className="tickets-control center">
			<TicketInput/>
			<TicketInputButton/>
		</main>
	);
};

export default TicketControl;