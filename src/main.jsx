import "./styles/styles.css";

import ReactDOM from "react-dom/client";

import { TicketsProvider } from "./providers/TicketsContext.jsx";
import App from "./App.jsx";
import { TicketsEditProvider } from "./providers/TicketsEditContext.jsx";
import { TicketsInputProvider } from "./providers/TicketsInputContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<TicketsProvider>
		<TicketsInputProvider>
			<TicketsEditProvider>
				<App />
			</TicketsEditProvider>
		</TicketsInputProvider>
	</TicketsProvider>
);
