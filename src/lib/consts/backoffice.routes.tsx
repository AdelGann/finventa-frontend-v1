import { lazy } from "react";

const Dashboard = lazy(() => import("@/pages/backoffice/Dashboard/Dashboard"));

const backoffice_routes = [
	{ path: "/dashboard", component: <Dashboard /> },
	{ path: "/settings", component: <></> },
];
export default backoffice_routes;
