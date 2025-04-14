import { Suspense, lazy, ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("@/views/home/Home"));
const Login = lazy(() => import("@/views/login/Login"));
const Register = lazy(() => import("@/views/Register/Register"));
const NotFound = lazy(() => import("@/views/404/404"));
const Landing = lazy(() => import("./Layouts/Landing/Landing.layout"));

const SuspenseWrapper = ({ children }: { children: ReactNode }) => (
	<Suspense
		fallback={
			<div className="flex items-center justify-center min-h-screen">
				<div className="w-8 h-8 border-4 border-t-transparent border-gray-500 rounded-full animate-spin"></div>
			</div>
		}
	>
		{children}
	</Suspense>
);

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
			</Routes>
		</BrowserRouter>
	);
};
