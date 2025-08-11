import { lazy } from "react";
import Charts from "./components/Charts";
import { SEO } from "@/components/custom/SEO";
import { Tabs } from "@/components/custom/Tabs";
import { SuspenseWrapper } from "@/components/custom/Suspense-wrapper";

import { DollarSign, CreditCard } from "lucide-react"; // Importación de íconos

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
					<Tabs
						defaultValue="incomes"
						tabListClassName="w-[90vw] sm:w-[50vw] mx-auto"
						tabsTrigger={tab_trigger}
						tabsContent={tabs_content}
					/>
					<div>
						<Charts />
					</div>
				</div>
			</div>
		</>
	);
};
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

export default Dashboard;
