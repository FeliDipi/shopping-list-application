import "./styles/index.css";

import ReactDOM from "react-dom/client";

import { ShoppingListProvider } from "./providers/ShoppingListContext.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<ShoppingListProvider>
		<App />
	</ShoppingListProvider>
);
