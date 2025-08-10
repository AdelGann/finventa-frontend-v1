import { lazy } from "react";
import { SEO } from "@/components/custom/SEO";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, CreditCard } from "lucide-react"; // Importación de íconos
import { SuspenseWrapper } from "@/components/custom/Suspense-wrapper";
import Charts from "./components/Charts";

const Income = lazy(() => import("./views/Income"));
const Debts = lazy(() => import("./views/Debts"));

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
          <Tabs defaultValue="incomes">
            <TabsList className="w-[90vw] sm:w-[50vw] mx-auto">
              <TabsTrigger value="incomes" className="cursor-pointer">
                <DollarSign className="mr-2 h-4 w-4 text-green-700" /> Incomes
              </TabsTrigger>
              <TabsTrigger value="debts" className="cursor-pointer">
                <CreditCard className="mr-2 h-4 w-4 text-red-700" /> Debts
              </TabsTrigger>
            </TabsList>
            <TabsContent value="incomes" className="flex justify-center w-full">
              <SuspenseWrapper>
                <Income />
              </SuspenseWrapper>
            </TabsContent>
            <TabsContent value="debts" className="flex justify-center w-full">
              <SuspenseWrapper>
                <Debts />
              </SuspenseWrapper>
            </TabsContent>
          </Tabs>
          <div className="grid grid-cols-2">
            <Charts chartState="Monthly" />
            <Charts chartState="Daily" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
