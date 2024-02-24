import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { BTN_STATE, BTN_VARIANTS } from "../utils/buttonStates.js";
import { useTickets } from "../hooks/useTickets.js";
import { useTicketEdit } from "../hooks/useTicketEdit.js";
import { useTicketInput } from "../hooks/useTicketInput.js";

const TicketInputButton = () =>
{
	const {addTicket} = useTickets();
	const {ticketOnEdit,finishEdition} = useTicketEdit();
	const {input, resetInput} = useTicketInput();

	const handleButtonBehaviour = () =>
	{
		resetInput();

		if(ticketOnEdit) finishEdition();
		else addTicket(input);
	}

	return (
		<motion.button
			animate={ticketOnEdit?BTN_STATE.EDIT:BTN_STATE.ADD}
			transition={{
				duration:0.15,
				ease:"easeInOut"
			}}
			variants={BTN_VARIANTS} 
			onClick={handleButtonBehaviour} 
			className="tickets-input-button center"
		>
			<Icon className="list-button-add-icon" icon={ticketOnEdit?"iconamoon:check-bold":"mingcute:add-fill"} />
		</motion.button>
	);
};

export default TicketInputButton;