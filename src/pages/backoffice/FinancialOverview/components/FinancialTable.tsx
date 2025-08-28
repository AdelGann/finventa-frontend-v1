import { DataTable } from "@/components/custom/DataTable";

interface Transaction {
  id: string;
  amount: string;
  account: string;
  account_type: string;
  transaction: string;
  transaction_type: string;
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
  { accessorKey: "account_type", header: "Tipo de Cuenta" },
  { accessorKey: "transaction", header: "Detalle" },
  { accessorKey: "transaction_type", header: "Tipo de Transaccion" },
];

const data: Transaction[] = [
  {
    id: "txn_001",
    amount: "1500.00",
    account: "Cuenta Principal",
    account_type: "cuenta matriz",
    transaction: "Pago recibido por servicios",
    transaction_type: "ingreso",
  },
  {
    id: "txn_002",
    amount: "320.50",
    account: "Caja Recaudadora Norte",
    account_type: "recaudadora",
    transaction: "Compra de insumos de oficina",
    transaction_type: "deuda",
  },
  {
    id: "txn_003",
    amount: "980.00",
    account: "Cuenta Personal Adel G",
    account_type: "personal",
    transaction: "Transferencia interna para gastos",
    transaction_type: "deuda",
  },
  {
    id: "txn_004",
    amount: "2100.75",
    account: "Cuenta Principal",
    account_type: "cuenta matriz",
    transaction: "Ingreso por venta de producto digital",
    transaction_type: "ingreso",
  },
  {
    id: "txn_005",
    amount: "450.00",
    account: "Caja Recaudadora Sur",
    account_type: "recaudadora",
    transaction: "Pago de servicios públicos",
    transaction_type: "deuda",
  },
  {
    id: "txn_006",
    amount: "1200.00",
    account: "Cuenta Personal Adel G",
    account_type: "personal",
    transaction: "Reembolso por gastos de viaje",
    transaction_type: "ingreso",
  },
];
