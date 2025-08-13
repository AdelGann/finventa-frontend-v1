import { lazy } from "react";

const Dashboard = lazy(() => import("@/pages/backoffice/Dashboard/Dashboard"));
const Employees = lazy(() => import("@/pages/backoffice/Employees/Employees"));

const backoffice_routes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/settings", component: <></> },
  { path: "/employees", component: <Employees /> },
];
export default backoffice_routes;
