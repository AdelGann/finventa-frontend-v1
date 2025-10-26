import { Contact } from "lucide-react";
import { SEO } from "@/components/custom/SEO";
import { Title } from "@/components/shared/backoffice/Title";
import { ClientsTable } from "./components/ClientsTable";

const Clients = () => {
  return (
    <div>
      <SEO title="Gestión de Clientes - FINVENTA" description="" />
      <Title title="Clientes" Icon={Contact} />
      <ClientsTable />
    </div>
  );
};

export default Clients;
