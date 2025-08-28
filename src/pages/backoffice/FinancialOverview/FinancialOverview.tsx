import { SEO } from "@/components/custom/SEO";
import { BarChart4Icon, InfoIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import FinancialStats from "./views/FinancialStats";

export const Incomes_Debts = () => {
  return (
    <div>
      <SEO
        title="Resumen Financiero"
        description="Vista para los ingresos y las deudas de la diarias"
      />
      <div className="flex flex-col gap-2 pb-6 px-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 p-2">
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
        <div>
          <FinancialStats />
        </div>
      </div>
    </div>
  );
};

export default Incomes_Debts;
