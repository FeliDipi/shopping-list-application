import { Icon } from "@iconify/react";
import { useShoppingList } from "../hooks/useShoppingList.js";
import { motion } from "framer-motion";
import { BTN_STATE } from "../utils/buttonStates.js";

const ListButtonAdd = ({editMode}) =>
{
	const {addTicket, finishEditTicket} = useShoppingList();

	const variants = 
	{
		"spawn":
		{
			scale:1,
			opacity:1
		},
		"add":
		{
			scale:1,
			opacity:1,
			backgroundColor:"#1DD1A1"
		},
		"edit":
		{
			scale:1,
			opacity:1,
			backgroundColor:"#54A0FF"
		}
	}

	const handleButtonBehaviour = () =>
	{
		if(editMode) finishEditTicket();
		else addTicket();
	}

	return (
		<motion.button
			initial={BTN_STATE.SPAWN}
			animate={editMode?BTN_STATE.EDIT:BTN_STATE.ADD}
			transition={{
				duration:0.15,
				ease:"easeInOut"
			}}
			variants={variants} 
			onClick={handleButtonBehaviour} 
			className="list-button-add"
		>
			<Icon className="list-button-add-icon" icon={editMode?"iconamoon:check-bold":"mingcute:add-fill"} />
		</motion.button>
	);
};

export default ListButtonAdd;