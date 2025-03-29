import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./Layouts/Landing/Landing.layout";
import { Home } from "@/views/home/Home";
import { NotFound } from "@/views/404/404";

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Landing />}>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Home />} />
					<Route path="/register" element={<Home />} />
					
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
