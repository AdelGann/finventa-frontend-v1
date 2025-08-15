import { lazy } from "react";
import { Content } from "@/routes/layouts/Content/Content.layout";

const Dashboard = lazy(() => import("@/pages/backoffice/Dashboard/Dashboard"));
const Employees = lazy(() => import("@/pages/backoffice/Employees/Employees"));

export interface RouteProps {
  path: string;
  component: React.ReactElement;
  layout?: React.ReactElement;
}

const backoffice_routes: RouteProps[] = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/employees", component: <Employees />, layout: <Content /> },
];
export default backoffice_routes;
