import { Toaster } from "sonner";
import "./App.css";
import { ThemeProvider } from "./lib/provider/theme-provider";
import { AppRoutes } from "./routes/App.routes";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<AppRoutes />
			<Toaster />
		</ThemeProvider>
	);
}

export default App;
