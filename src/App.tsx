import { Toaster } from "sonner";
import "./App.css";
import { ThemeProvider } from "./lib/provider/theme-provider";
import { AppRoutes } from "./routes/App.routes";
import { TooltipProvider } from "./components/ui/tooltip";
function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<TooltipProvider>
				<AppRoutes />
				<Toaster />
			</TooltipProvider>
		</ThemeProvider>
	);
}

export default App;
