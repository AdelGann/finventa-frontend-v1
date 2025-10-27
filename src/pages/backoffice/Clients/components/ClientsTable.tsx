import { DataTable } from "@/components/custom/DataTable";
import { InputField } from "@/components/custom/InputField";
import { Button } from "@/components/ui/button";
import { AddClient } from "../views/AddClient";
import { useLocation, useNavigate } from "react-router-dom";

export interface Client {
  id: string;
  full_name: string;
  ci: string;
  email: string;
  phone: string;
  money_spent: string;
  total_orders: number;
  last_purchase: string;
  state: "Activo" | "Inactivo" | "Suspendido" | string;
}

export const ClientsTable = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const onView = (row: Client) => {
    navigate(location.pathname + `/client-detail/${row.id}`);
  };
  const actions = [
    { label: "Ver", onClick: onView },
    { label: "Editar", onClick: (row: Client) => console.log(row) },
    { label: "Eliminar", onClick: (row: Client) => console.log(row) },
  ];
  return (
    <div>
      <div className="flex justify-end items-center gap-5 place-items-center p-2 mb-5">
        <InputField
          label=""
          placeholder="Buscar por C.I."
          className="w-[350px]"
        />
        <Button className="">Buscar</Button>
        <AddClient />
      </div>
      <DataTable columns={columns} data={data} customActions={actions} />
    </div>
  );
};

const columns = [
  { accessorKey: "full_name", header: "Nombre" },
  { accessorKey: "ci", header: "C.I." },
  { accessorKey: "email", header: "Correo" },
  { accessorKey: "phone", header: "Teléfono" },
  { accessorKey: "money_spent", header: "Dinero Gastado" },
  { accessorKey: "total_orders", header: "Órdenes" },
  { accessorKey: "last_purchase", header: "Última Compra" },
  { accessorKey: "state", header: "Estado" },
];

const data: Client[] = [
  {
    id: "1",
    full_name: "María González",
    ci: "V-12345678",
    money_spent: "$1,250.00",
    state: "Activo",
    email: "maria.gonzalez@email.com",
    phone: "+58 412-1234567",
    last_purchase: "2025-10-10",
    total_orders: 5,
  },
  {
    id: "2",
    full_name: "Carlos Pérez",
    ci: "V-87654321",
    money_spent: "$980.00",
    state: "Inactivo",
    email: "carlos.perez@email.com",
    phone: "+58 414-7654321",
    last_purchase: "2025-08-22",
    total_orders: 3,
  },
  {
    id: "3",
    full_name: "Ana Rodríguez",
    ci: "V-11223344",
    money_spent: "$2,340.00",
    state: "Activo",
    email: "ana.rodriguez@email.com",
    phone: "+58 424-3344556",
    last_purchase: "2025-10-20",
    total_orders: 8,
  },
];
