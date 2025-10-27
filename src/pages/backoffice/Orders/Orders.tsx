import { PackageCheck } from "lucide-react";
import { SEO } from "@/components/custom/SEO";
import { Title } from "@/components/shared/backoffice/Title";
import { OrdersTable } from "./components/OrdersTable";

const Orders = () => {
  return (
    <div>
      <SEO title="Gestión de Ordenes - FINVENTA" description="" />
      <Title title="Gestión de Ordenes" Icon={PackageCheck} />
      <OrdersTable />
    </div>
  );
};
export default Orders;
