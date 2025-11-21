import { lazy } from "react";
import { Content } from "@/routes/layouts/Content/Content.layout";

const Dashboard = lazy(() => import("@/pages/backoffice/Dashboard/Dashboard"));
const Organization = lazy(() => import("@/pages/backoffice/Org/Org"));
const FinancialOverview = lazy(
  () => import("@/pages/backoffice/FinancialOverview/FinancialOverview"),
);
const Accounts = lazy(() => import("@/pages/backoffice/Accounts/Accounts"));
const Clients = lazy(() => import("@/pages/backoffice/Clients/Clients"));
const ClientDetail = lazy(
  () => import("@/pages/backoffice/Clients/views/ClientDetail"),
);
const Products = lazy(() => import("@/pages/backoffice/Products/Products"));
const Orders = lazy(() => import("@/pages/backoffice/Orders/Orders"));
const OrderDetail = lazy(
  () => import("@/pages/backoffice/Orders/views/OrderDetail"),
);
const SettingsLayout = lazy(
  () => import("@/pages/backoffice/Settings/layout/SettingsLayout"),
);
const GeneralSettings = lazy(
  () => import("@/pages/backoffice/Settings/views/General"),
);
const UsersSettings = lazy(
  () => import("@/pages/backoffice/Settings/views/Users"),
);
const NotificationsSettings = lazy(
  () => import("@/pages/backoffice/Settings/views/Notifications"),
);
const Profile = lazy(() => import("@/pages/backoffice/Profile/Profile"));

export interface RouteProps {
  path: string;
  component: React.ReactElement;
  layout?: React.ReactElement;
  children?: RouteProps[];
}

const backoffice_routes: RouteProps[] = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/clients", component: <Clients />, layout: <Content /> },
  {
    path: "/clients/client-detail/:id",
    component: <ClientDetail />,
    layout: <Content />,
  },
  { path: "/organization", component: <Organization />, layout: <Content /> },
  { path: "/accounts", component: <Accounts />, layout: <Content /> },
  {
    path: "/financial-overview",
    component: <FinancialOverview />,
    layout: <Content />,
  },
  {
    path: "/products",
    component: <Products />,
    layout: <Content />,
  },
  {
    path: "/orders",
    component: <Orders />,
    layout: <Content />,
  },
  {
    path: "/orders/order-detail/:id",
    component: <OrderDetail />,
    layout: <Content />,
  },
  {
    path: "/settings",
    component: <SettingsLayout />,
    layout: <Content />,
    children: [
      {
        path: "",
        component: <GeneralSettings />,
      },
      {
        path: "users",
        component: <UsersSettings />,
      },
      {
        path: "notifications",
        component: <NotificationsSettings />,
      },
    ],
  },
  {
    path: "/profile",
    component: <Profile />,
    layout: <Content />,
  },
];
export default backoffice_routes;
