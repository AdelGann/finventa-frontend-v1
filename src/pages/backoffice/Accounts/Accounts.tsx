import { SEO } from "@/components/custom/SEO";
import { Title } from "@/components/shared/backoffice/Title";
import { PiggyBank } from "lucide-react";
import { Overview } from "./views/Overview";

const Accounts = () => {
  return (
    <div>
      <SEO title="Gestión de Cuentas - FINVENTA" description="" />
      <Title title="Gestión de Cuentas" Icon={PiggyBank} />
      <Overview />
    </div>
  );
};

export default Accounts;
