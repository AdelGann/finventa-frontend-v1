import { DataTable } from "@/components/custom/DataTable";
import { Button } from "@/components/ui/button";
import { DateField } from "@/components/custom/DateField";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  date: string;
};

export const ClientOrderTable = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 px-5">
        <h3 className="uppercase font-light text-lg">Historial de Ordenes</h3>
      </div>
      <div className="flex justify-end items-center gap-5 place-items-center p-2 mb-5">
        <DateField
          label=""
          className="w-[350px]"
        />
        <Button className="">Buscar</Button>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

const columns = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "amount",
    header: "Monto",
  },
  {
    accessorKey: "date",
    header: "Fecha",
  },
];

const data: Payment[] = [
  { id: "1", amount: 100, status: "pending", date: "2025-10-01" },
  { id: "2", amount: 200, status: "processing", date: "2025-10-05" },
  { id: "4", amount: 400, status: "failed", date: "2025-10-10" },
  { id: "5", amount: 500, status: "success", date: "2025-10-15" },
];
