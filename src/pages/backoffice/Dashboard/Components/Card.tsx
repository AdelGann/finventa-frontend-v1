import { BarChart2 } from "lucide-react"; // Importación del ícono
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const Card = ({
	title,
	amount,
	progress,
	color = "text-green-500",
	description = "Percentage increase compared to the previous period",
}: {
	title: string;
	amount: number;
	progress: number;
	color?: string;
	description?: string;
}) => (
	<div className="p-4 max-w-[700px] bg-white dark:bg-accent  rounded-lg shadow-md dark:shadow-lg dark:shadow-neutral-900">
		<div className="p-2">
			<label className="text-sm font-semibold text-gray-500 dark:text-white uppercase block mb-2">
				{title}
			</label>
			<hr className="mb-4" />
			<div className="flex justify-between items-center mb-4 gap-1 flex-wrap">
				<label className={`font-bold text-2xl ${color}`}>${amount}</label>
				<Tooltip>
					<TooltipTrigger>
						<div className="flex items-center gap-2">
							<span className="text-sm text-gray-400 ">{progress}%</span>
							<BarChart2 className="w-4 h-4 text-gray-400" /> {/* Icon added */}
						</div>
					</TooltipTrigger>
					<TooltipContent>{description}</TooltipContent>
				</Tooltip>
			</div>
		</div>
	</div>
);
export default Card;
