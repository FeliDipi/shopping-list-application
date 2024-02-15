import "./styles/index.css";

import ReactDOM from "react-dom/client";

import { ListProvider } from "./providers/ListContext.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<ListProvider>
		<App />
	</ListProvider>
);
