import { lazy } from "react";
import { Tabs } from "@/components/custom/Tabs";
import { SuspenseWrapper } from "@/components/custom/Suspense-wrapper";
import { CreditCard, DollarSign } from "lucide-react";

const Income = lazy(() => import("../components/Income"));
const Debts = lazy(() => import("../components/Debts"));

const Statistics = () => {
  return (
    <>
      <Tabs
        defaultValue="incomes"
        tabListClassName="w-[90vw] sm:w-[50vw] mx-auto"
        tabsTrigger={tab_trigger}
        tabsContent={tabs_content}
      />
    </>
  )
}
export default Statistics;
const tab_trigger = [
  {
    value: "incomes",
    className: "cursor-pointer",
    children: (
      <>
        <DollarSign className="mr-2 h-4 w-4 text-green-700" /> Incomes
      </>
    ),
  },
  {
    value: "debts",
    className: "cursor-pointer",
    children: (
      <>
        <CreditCard className="mr-2 h-4 w-4 text-red-700" /> Debts
      </>
    ),
  },
];

const tabs_content = [
  {
    value: "incomes",
    className: "flex justify-center w-full",
    children: (
      <SuspenseWrapper>
        <Income />
      </SuspenseWrapper>
    ),
  },
  {
    value: "debts",
    className: "flex justify-center w-full",
    children: (
      <SuspenseWrapper>
        <Debts />
      </SuspenseWrapper>
    ),
  },
];
