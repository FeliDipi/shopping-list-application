import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import Footer from "./components/Footer.jsx";
import ListControl from "./components/ListControl.jsx";

const App = () => {
	return (
		<main className="list-app">
			<Header/>
			<List/>
			<Footer/>
			<ListControl/>
		</main>
	);
};

export default App;
