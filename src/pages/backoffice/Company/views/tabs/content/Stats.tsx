import { BarChart2Icon } from "lucide-react";
import StatsCharts from "../../../components/StatsCharts";

const Stats = () => {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-2 pb-6 px-4 pt-2">
        <div className="flex items-center gap-2 shadow rounded p-1">
          <BarChart2Icon className="text-blue-400" />
        </div>
        <h2 className="text-lg font-semibold">Estadísticas de la compañía.</h2>
      </div>
      <div>
        <StatsCharts />
      </div>
    </div>
  )
}
export default Stats;
