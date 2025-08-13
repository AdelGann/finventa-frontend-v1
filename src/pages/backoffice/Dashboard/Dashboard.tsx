import { lazy } from "react";
import { SEO } from "@/components/custom/SEO";

const Statistics = lazy(() => import("./views/Statistics"));
const Orders = lazy(() => import("./views/RecentOrders"));
const Charts = lazy(() => import("./views/Charts"));

const Dashboard = () => {
  return (
    <>
      <SEO
        title="Z0 - Dashboard"
        keywords="dashboard, manage system"
        description="Welcome to the control panel. Here you can manage and view all the important information."
      />
      <div className="w-full">
        <div className="flex justify-center flex-col">
          <Statistics />
          <Charts />
          <Orders />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
