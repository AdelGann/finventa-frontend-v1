import { DateField } from "@/components/ui/Datefield";
import LineChart, { LineChartDataPoint } from "@/components/custom/LineChart";
import PieChart from "@/components/custom/PieChart";

export const FinancialStats = () => {
  return (
    <div>
      <div className="flex gap-2 px-3 pb-5 pt-2">
        <DateField label="Desde:" />
        <DateField label="Hasta:" />
      </div>
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-[1.8fr_.3fr] gap-2 w-full mx-auto">
          <div className="min-w-0">
            <LineChart
              title="Ingresos Semanales"
              subtitle="Agosto 2025"
              data={sampleLineChartData}
              timeGranularity="day"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[240px]">
              <PieChart
                title="Resumen financiero"
                subtitle="Agosto 2025"
                data={sampleData}
                radius={["40%", "70%"]}
                showTotalInCenter={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const sampleData = [
  { value: 1500, name: "Salario", color: "#4CAF50" }, // Verde: estabilidad
  { value: 600, name: "Freelance", color: "#2196F3" }, // Azul: creatividad
  { value: 200, name: "Inversiones", color: "#FFC107" }, // Amarillo: riesgo
  { value: 100, name: "Otros", color: "#9C27B0" }, // Morado: diversidad
];

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

export default FinancialStats;
