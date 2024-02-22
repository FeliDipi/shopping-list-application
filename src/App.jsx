import Header from "./components/Header.jsx";
import TicketList from "./components/TicketList.jsx";
import Footer from "./components/Footer.jsx";
import TicketControl from "./components/TicketControl.jsx";

const App = () => {
	return (
		<main className="list-app">
			<Header/>
			<TicketList/>
			<Footer/>
			<TicketControl/>
		</main>
	);
};

export default App;
