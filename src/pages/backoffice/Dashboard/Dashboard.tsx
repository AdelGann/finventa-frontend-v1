import { SEO } from "@/components/custom/SEO";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, CreditCard } from "lucide-react"; // Importación de íconos

const Dashboard = () => {
	return (
		<>
			<SEO
				title="Z0 - Dashboard"
				keywords="dashboard, manage system"
				description="Welcome to the control panel. Here you can manage and view all the important information."
			/>
			<div className="w-full">
				<div className="flex justify-center">
					<Tabs defaultValue="incomes" className="">
						<TabsList className="w-[90vw]">
							<TabsTrigger value="incomes">
								<DollarSign className="mr-2 h-4 w-4 text-green-700" /> Incomes
							</TabsTrigger>
							<TabsTrigger value="debts">
								<CreditCard className="mr-2 h-4 w-4 text-red-700" /> Debts
							</TabsTrigger>
						</TabsList>
						<TabsContent value="incomes">Make changes to your account here.</TabsContent>
						<TabsContent value="debts">Change your password here.</TabsContent>
					</Tabs>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
