import TicketList from "./components/TicketList.jsx";
import TicketListInfo from "./components/TicketListInfo.jsx";
import TicketControl from "./components/TicketControl.jsx";

const App = () => {
	return (
		<main className="list-app center top separation">
			<TicketListInfo/>
			<TicketList/>
			<TicketControl/>
		</main>
	);
};

export default App;
