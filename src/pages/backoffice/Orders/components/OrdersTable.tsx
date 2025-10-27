import { DataTable } from "@/components/custom/DataTable";
import { InputField } from "@/components/custom/InputField";
import { Button } from "@/components/ui/button";

export interface Orders {
  id: string;
  full_name: string;
  ci: string;
  state: "Pagado" | "Incompleto" | "Pendiente" | string;
  total_quantity: number;
  total_amount: string;
  created_at: string;
  updated_at: string;
}

export const OrdersTable = () => {
  const actions = [
    { label: "Editar", onClick: (row: Orders) => console.log(row) },
    { label: "Eliminar", onClick: (row: Orders) => console.log(row) },
  ];

  return (
    <div>
      <div className="flex justify-end items-center gap-5 place-items-center p-2 mb-5">
        <InputField
          label=""
          placeholder="Buscar por N.º de Orden"
          className="w-[250px]"
        />
        <Button>Buscar</Button>
        <Button variant={"outline"}>+ Nueva Orden</Button>
      </div>
      <DataTable columns={columns} data={data} customActions={actions} />
    </div>
  );
};

const columns = [
  { accessorKey: "id", header: "N.º de Orden" },
  { accessorKey: "ci", header: "C.I. del Comprador" },
  { accessorKey: "full_name", header: "Nombre del Comprador" },
  { accessorKey: "total_quantity", header: "Total de Artículos" },
  { accessorKey: "total_amount", header: "Monto Total" },
  { accessorKey: "created_at", header: "Fecha de Creación" },
  { accessorKey: "updated_at", header: "Fecha de Modificación" },
  { accessorKey: "state", header: "Estado" },
];

const data: Orders[] = [
  {
    id: "ORD-001",
    full_name: "María González",
    ci: "V-12345678",
    state: "Pagado",
    total_quantity: 12,
    total_amount: "$1,250.00",
    created_at: "2025-10-01",
    updated_at: "2025-10-10",
  },
  {
    id: "ORD-002",
    full_name: "Carlos Pérez",
    ci: "V-87654321",
    state: "Pendiente",
    total_quantity: 7,
    total_amount: "$980.00",
    created_at: "2025-09-15",
    updated_at: "2025-10-05",
  },
  {
    id: "ORD-003",
    full_name: "Ana Rodríguez",
    ci: "V-11223344",
    state: "Incompleto",
    total_quantity: 5,
    total_amount: "$2,340.00",
    created_at: "2025-10-20",
    updated_at: "2025-10-25",
  },
];
