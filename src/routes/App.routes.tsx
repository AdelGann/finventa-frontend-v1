import { SuspenseWrapper } from "@/components/custom/Suspense-wrapper";
import backoffice_routes from "@/lib/consts/backoffice.routes";
import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
const Landing = lazy(() => import("./Layouts/Landing/Landing.layout"));
const Backoffice = lazy(() => import("./Layouts/Backoffice/Backoffice.layout"));

const Home = lazy(() => import("@/views/home/Home"));
const Login = lazy(() => import("@/views/login/Login"));
const Register = lazy(() => import("@/views/Register/Register"));
const NotFound = lazy(() => import("@/views/404/404"));

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					element={
						<SuspenseWrapper>
							<Landing />
						</SuspenseWrapper>
					}
				>
					<Route
						path="/"
						element={
							<SuspenseWrapper>
								<Home />
							</SuspenseWrapper>
						}
					/>
					<Route
						path="*"
						element={
							<SuspenseWrapper>
								<NotFound />
							</SuspenseWrapper>
						}
					/>
				</Route>
				<Route
					path="/login"
					element={
						<SuspenseWrapper>
							<Login />
						</SuspenseWrapper>
					}
				/>
				<Route
					path="/register"
					element={
						<SuspenseWrapper>
							<Register />
						</SuspenseWrapper>
					}
				/>
				<Route
					element={
						<SuspenseWrapper>
							<Backoffice />
						</SuspenseWrapper>
					}
				>
					{backoffice_routes.map((item, key) => (
						<Route
							key={key}
							element={<SuspenseWrapper>{item.component}</SuspenseWrapper>}
							path={item.path}
						/>
					))}
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
