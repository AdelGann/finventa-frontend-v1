import { lazy } from "react";
import { Content } from "@/routes/layouts/Content/Content.layout";

const Dashboard = lazy(() => import("@/pages/backoffice/Dashboard/Dashboard"));
const Organization = lazy(() => import("@/pages/backoffice/Org/Org"));
const FinancialOverview = lazy(
  () => import("@/pages/backoffice/FinancialOverview/FinancialOverview"),
);
const Accounts = lazy(() => import("@/pages/backoffice/Accounts/Accounts"));
const Clients = lazy(() => import("@/pages/backoffice/Clients/Clients"));
//const Employees = lazy(() => import("@/pages/backoffice/Employees/Employees"));

export interface RouteProps {
  path: string;
  component: React.ReactElement;
  layout?: React.ReactElement;
}

const backoffice_routes: RouteProps[] = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/clients", component: <Clients />, layout: <Content /> },
  { path: "/organization", component: <Organization />, layout: <Content /> },
  { path: "/accounts", component: <Accounts />, layout: <Content /> },
  {
    path: "/financial-overview",
    component: <FinancialOverview />,
    layout: <Content />,
  },
];
export default backoffice_routes;
