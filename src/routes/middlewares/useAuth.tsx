import { useAuthStore } from "@/store/AuthState/AuthStore";
import { Navigate, Outlet } from "react-router-dom";

export const useAuth = () => {
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
	if (isAuthenticated) {
		return <Outlet />;
	} else {
		return <Navigate to={"/"} />;
	}
};
