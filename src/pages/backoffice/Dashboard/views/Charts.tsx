import { useState } from "react";
import SelectField from "@/components/custom/SelectField";
import { SuspenseWrapper } from "@/components/custom/Suspense-wrapper";
import { DailyChart, MonthlyChart } from "@/components/custom/Charts";

type ChartState = "Monthly" | "Daily";

const Charts = () => {
  const [chartState, setChartState] = useState<ChartState>("Monthly");
  return (
    <SuspenseWrapper>
      <div className="p-2 m-5 bg:white dark:bg-[#262633] border rounded-sm">
        <div className="bg-opacity-50 dark:bg-opacity-50 rounded-lg">
          <div className="p-1">
            <h3 className="uppercase font-bold">
              {chartState === "Monthly"
                ? "Registro Financiero Mensual"
                : "Registro Financiero Diario"}
            </h3>
          </div>
          {chartState === "Monthly" && <MonthlyChart />}
          {chartState === "Daily" && <DailyChart />}
        </div>
        <div className="py-3">
          <SelectField
            onValueChange={(e) => setChartState(e as ChartState)}
            name="chartState"
            value={chartState}
            className="w-full"
            options={[
              { name: "MENSUAL", value: "Monthly" },
              { name: "DIARIO", value: "Daily" },
            ]}
          />
        </div>
      </div>
    </SuspenseWrapper>
  );
};
export default Charts;
