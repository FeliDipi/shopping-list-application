import "./styles/App.css";

import {tickets as ticketsInitial} from "./mock/tickets.json";

import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import Footer from "./components/Footer.jsx";
import ListControl from "./components/ListControl.jsx";

const App = () => {
	return (
		<main className="list-app">
			<Header/>
			<List tickets={ticketsInitial}/>
			<Footer tickets={ticketsInitial}/>
			<ListControl/>
		</main>
	);
};

export default App;
