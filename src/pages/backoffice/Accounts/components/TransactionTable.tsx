import { DataTable } from "@/components/custom/DataTable";

interface Transaction {
  id: string;
  amount: string;
  account: string;
  destination: string;
  transaction: string;
  transaction_type: string;
  date: string;
}

export const TransactionTable = () => {
  return (
    <div>
      <DataTable columns={columns} data={data} customActions={actions} />
    </div>
  );
};
const actions = [
  { label: "Editar", onClick: (row: Transaction) => console.log(row) },
  { label: "Eliminar", onClick: (row: Transaction) => console.log(row) },
];

const columns = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "amount", header: "Monto" },
  { accessorKey: "account", header: "Cuenta" },
  { accessorKey: "transaction", header: "Detalle" },
  { accessorKey: "transaction_type", header: "Tipo de Transaccion" },
  { accessorKey: "date", header: "Fecha" },
];

const data: Transaction[] = [
  {
    id: "txn_001",
    amount: "1200.50",
    account: "Principal",
    destination: "Banco Nacional",
    transaction: "Pago de servicios bancarios",
    transaction_type: "deuda",
    date: "30-08-2025 09-15",
  },
  {
    id: "txn_002",
    amount: "850.00",
    account: "Principal",
    destination: "Cliente Juan",
    transaction: "Ingreso por venta de producto",
    transaction_type: "ingreso",
    date: "30-08-2025 11-30",
  },
  {
    id: "txn_003",
    amount: "450.75",
    account: "Principal",
    destination: "MercadoPago",
    transaction: "Pago de comisión por transacción",
    transaction_type: "deuda",
    date: "30-08-2025 13-45",
  },
  {
    id: "txn_004",
    amount: "2200.00",
    account: "Principal",
    destination: "Cliente María",
    transaction: "Ingreso por asesoría financiera",
    transaction_type: "ingreso",
    date: "30-08-2025 15-10",
  },
  {
    id: "txn_005",
    amount: "300.00",
    account: "Principal",
    destination: "Proveedor XYZ",
    transaction: "Pago de insumos de oficina",
    transaction_type: "deuda",
    date: "30-08-2025 17-25",
  },
  {
    id: "txn_006",
    amount: "950.00",
    account: "Principal",
    destination: "Cliente Pedro",
    transaction: "Ingreso por consultoría técnica",
    transaction_type: "ingreso",
    date: "30-08-2025 19-00",
  },
  {
    id: "txn_007",
    amount: "125.00",
    account: "Principal",
    destination: "MercadoPago",
    transaction: "Pago de comisión mensual",
    transaction_type: "deuda",
    date: "30-08-2025 20-30",
  },
];
