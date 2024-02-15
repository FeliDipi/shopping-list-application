import "./styles/App.css";

import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import Footer from "./components/Footer.jsx";
import ListInput from "./components/ListInput";

const App = () => {
	return (
		<main className="list-app">
			<Header/>
			<List/>
			<Footer/>
			<ListInput/>
		</main>
	);
}

export default App;
