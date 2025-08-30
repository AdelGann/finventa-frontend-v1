import { SEO } from "@/components/custom/SEO";
import { BarChart4Icon } from "lucide-react";

import FinancialStats from "./views/FinancialStats";
import { Title } from "@/components/shared/backoffice/Title";

export const Incomes_Debts = () => {
  return (
    <div>
      <SEO
        title="Resumen Financiero"
        description="Vista para los ingresos y las deudas de la diarias"
      />
      <Title title="Resumen Financiero" Icon={BarChart4Icon} />
      <div>
        <FinancialStats />
      </div>
    </div>
  );
};

export default Incomes_Debts;
