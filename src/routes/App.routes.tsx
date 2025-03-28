import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./Layouts/Landing/Landing.layout";
import { Home } from "@/views/home/Home";

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Landing />}>
					<Route path="/" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
