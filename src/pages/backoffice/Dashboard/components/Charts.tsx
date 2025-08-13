import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

export const MonthlyChart = () => {
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

export const DailyChart = () => {
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

export default { DailyChart, MonthlyChart };


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
