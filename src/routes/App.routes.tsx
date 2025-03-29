import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./Layouts/Landing/Landing.layout";

import { Home } from "@/views/home/Home";
import { NotFound } from "@/views/404/404";

import { Login } from "@/views/login/Login";
import { Register } from "@/views/Register/Register";

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Landing />}>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} />
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
};
