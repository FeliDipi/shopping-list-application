import "./styles/App.css";

import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import Footer from "./components/Footer.jsx";
import ListControl from "./components/ListControl.jsx";
import { ListInputProvider } from "./providers/ListInputContent.jsx";

const App = () => {
	return (
		<main className="list-app">
			<ListInputProvider>
				<Header/>
				<List/>
				<Footer/>
				<ListControl/>
			</ListInputProvider>
		</main>
	);
};

export default App;
