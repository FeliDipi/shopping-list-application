import "./styles/index.css";

import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { ListProvider } from "./providers/ListContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<ListProvider>
		<App />
	</ListProvider>
);
