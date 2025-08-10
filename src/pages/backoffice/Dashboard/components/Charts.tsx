import SelectField from "@/components/custom/SelectField";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useState } from "react";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
//import SelectField from "@/components/custom/SelectField";
//import { useState } from "react";

type ChartState = "Monthly" | "Daily";

const Charts = () => {
  const [chartState, setChartState] = useState<ChartState>("Monthly");
  //console.log(chartState);
  return (
    <div className="p-2 m-5 bg:white dark:bg-[#161616] shadow dark:shadow-[#1b1b1b] rounded">
      <div className="p-2 bg-white dark:bg-[#1f1f1f] bg-opacity-50 dark:bg-opacity-50 rounded-lg">
        <div className="p-1">
          <h3 className="uppercase font-bold">{chartState} financial summary</h3>
        </div>
        {chartState === "Monthly" && <MonthlyChart />}
        {chartState === "Daily" && <DailyChart />}
      </div>
      <div className="py-3">
        <SelectField
          onChange={(e) => setChartState(e.value as ChartState)}
          name="aa"
          value={chartState}
          className="w-full"
          options={[
            { name: "MONTHLY", value: "Monthly" },
            { name: "DAILY", value: "Daily" },
          ]}
        />
      </div>
    </div>
  );
};
export default Charts;

const MonthlyChart = () => {
  return (
    <div>
      <ChartContainer config={chartConfig} className="h-[40vh] min-h-[150px] w-full">
        <BarChart accessibilityLayer data={monthlyChartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="income" fill={chartConfig.income.color} radius={4} />
          <Bar dataKey="debt" fill={chartConfig.debt.color} radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

const DailyChart = () => {
  return (
    <div>
      <ChartContainer config={chartConfig} className="h-[40vh] min-h-[150px] w-full">
        <BarChart accessibilityLayer data={dailyChartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="income" fill={chartConfig.income.color} radius={4} />
          <Bar dataKey="debt" fill={chartConfig.debt.color} radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

// TODO: REMOVE 
const monthlyChartData: ChartData[] = Array.from({ length: 12 }, (_, index) => {
  const month = new Date(0, index).toLocaleString("en-us", { month: "long" }) as MonthType; // TODO: SET LOCALE DEFAULT
  return {
    month: month.toUpperCase(),
    income: Math.floor(Math.random() * 10000) + 1000,
    debt: Math.floor(Math.random() * 5000) + 500,
  };
});
// TODO: REMOVE 
const dailyChartData: { day: string }[] = Array.from({ length: 7 }, (_, index) => {
  const day = new Date(1970, 0, index + 4).toLocaleString("en-US", { weekday: "long" }); //TODO: SET LOCALE DEFAULT
  return {
    day: day.toUpperCase(),
    income: Math.floor(Math.random() * 10000) + 1000,
    debt: Math.floor(Math.random() * 5000) + 500,
  };
});
// TODO: MOVE INTO CONFIG FOLDER 
const chartConfig = {
  income: {
    label: "Incomes",
    color: "#10b981",
  },
  debt: {
    label: "Debts",
    color: "#ef4444",
  },
};
