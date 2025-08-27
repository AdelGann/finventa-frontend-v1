import { SEO } from "@/components/custom/SEO";
import { BarChart4Icon, InfoIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import PieChart from "@/components/custom/PieChart";

export const Incomes_Debts = () => {
  return (
    <div>
      <SEO
        title="Resumen Financiero"
        description="Vista para los ingresos y las deudas de la diarias"
      />
      <div className="flex flex-col gap-2 pb-6 px-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded shadow border p-2">
            <BarChart4Icon className="text-amber-300 dark:text-indigo-500 w-8 h-8" />
          </div>
          <h2 className="text-2xl font-semibold">Resumen Financiero</h2>
        </div>
        <div className="flex items-center gap-2">
          <InfoIcon className="text-yellow-400 w-4 h-4" />
          <p className="text-[12px] text-gray-500">
            Más funcionalidades están en camino...
          </p>
        </div>
        <Separator className="my-2 w-full" />
      </div>
      <div>
        <PieChart
          title="Resumen financiero"
          subtitle="Agosto 2025"
          data={sampleData}
          radius={["40%", "70%"]}
          legendPosition="right"
          showTotalInCenter={true}
        />
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
export default Incomes_Debts;
