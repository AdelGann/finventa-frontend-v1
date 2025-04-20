import { SEO } from "@/components/custom/SEO";
import { Card } from "./Components/Card";

const Dashboard = () => {
	return (
		<>
			<SEO
				title="Z0 - Dashboard"
				keywords="dashboard, manage system"
				description="Welcome to the control panel. Here you can manage and view all the important information."
			/>
			<div>
				<div className="flex gap-4 overflow-auto justify-center p-4">
					<Card title="New customers" data={0} />
					<Card title="incomes" data={0} />
					<Card title="debts" data={0} />
				</div>
			</div>
		</>
	);
};

export default Dashboard;
