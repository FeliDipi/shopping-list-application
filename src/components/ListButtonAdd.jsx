import { Icon } from "@iconify/react";
import { useShoppingList } from "../hooks/useShoppingList.js";
import { motion } from "framer-motion";
import { BTN_STATE } from "../utils/buttonStates.js";

const ListButtonAdd = ({enable}) =>
{
	const {addTicket} = useShoppingList();

	const variants = 
	{
		"enable":
		{
			scale:1,
			opacity:1
		},
		"disable":
		{
			scale:0,
			opacity:0
		}
	}

	return (
		<motion.button
			initial={BTN_STATE.ENABLE}
			animate={enable?BTN_STATE.ENABLE:BTN_STATE.DISABLE}
			exit={BTN_STATE.DISABLE}
			transition={{
				duration:0.15,
				ease:"easeInOut"
			}}
			variants={variants} 
			onClick={addTicket} 
			className="list-button-add"
		>
			<Icon className="list-button-add-icon" icon="mingcute:add-fill" />
		</motion.button>
	);
};

export default ListButtonAdd;