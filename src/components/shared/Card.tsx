import { BarChart2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const Card = ({
  title,
  amount,
  progress,
  color = "text-green-500",
  description = "Percentage increase compared to the previous period",
  onClick,
  isActive,
  className,
}: {
  title: string;
  amount: number;
  progress?: number;
  color?: string;
  description?: string;
  onClick?: (...args: unknown[]) => void;
  isActive?: boolean;
  className?: string;
}) => (
  <div
    onClick={onClick}
    className={cn(
      `p-2 max-w-[700px] dark:bg-[#262633] border rounded-sm ${onClick && "cursor-pointer hover:bg-accent dark:hover:bg-accent/30 transition-all"} ${isActive && "bg-input/20 dark:bg-input/50"}`,
      className,
    )}
  >
    <div className="p-2 rounded-sm">
      <label className="text-sm font-semibold text-gray-500 dark:text-white uppercase block mb-2">
        {title}
      </label>
      <hr className="mb-4" />
      <div className="flex justify-between items-center mb-4 gap-1 flex-wrap">
        <label className={`font-bold text-2xl ${color}`}>${amount}</label>
        <Tooltip>
          <TooltipTrigger>
            <div className="flex items-center gap-2">
              {progress && (
                <span className="text-sm text-gray-400 ">{progress}%</span>
              )}
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
