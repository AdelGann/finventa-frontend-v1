import LineChart, { LineChartDataPoint } from "@/components/custom/LineChart";
import { TransactionTable } from "../components/TransactionTable";

export const AccountPreview = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-bold text-gray-400">
        PRINCIPAL - PRINCIPAL
      </h3>
      <div className="min-w-0">
        <LineChart
          title=""
          subtitle=""
          data={sampleLineChartData}
          timeGranularity="day"
        />
      </div>
      <TransactionTable />
    </div>
  );
};

const sampleLineChartData: LineChartDataPoint[] = [
  { timestamp: Date.UTC(2025, 7, 19), value: 0 },
  { timestamp: Date.UTC(2025, 7, 20), value: 1200 },
  { timestamp: Date.UTC(2025, 7, 21), value: 1350 },
  { timestamp: Date.UTC(2025, 7, 22), value: 1280 },
  { timestamp: Date.UTC(2025, 7, 23), value: 1420 },
  { timestamp: Date.UTC(2025, 7, 24), value: 1500 },
  { timestamp: Date.UTC(2025, 7, 25), value: 1600 },
  { timestamp: Date.UTC(2025, 7, 26), value: 1700 },
];
