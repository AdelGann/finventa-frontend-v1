import { DataTable } from "@/components/custom/DataTable";

export type ProductPurchaseStatsType = {
  id: string;
  product_name: string;
  total_quantity: number;
  total_paid: number;
  purchase_frequency_days: number;
};

export const ProductPurchaseStats = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 px-2 mb-7">
        <h3 className="uppercase font-light text-lg">
          Productos más comprados
        </h3>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

const columns = [
  {
    accessorKey: "product_name",
    header: "Producto",
  },
  {
    accessorKey: "total_quantity",
    header: "Cantidad Total",
  },
  {
    accessorKey: "total_paid",
    header: "Total Pagado",
    cell: ({ row }: { row: { original: ProductPurchaseStatsType } }) =>
      `$${row.original.total_paid.toFixed(2)}`,
  },
  {
    accessorKey: "purchase_frequency_days",
    header: "Frecuencia (días)",
  },
];

const data: ProductPurchaseStatsType[] = [
  {
    id: "p1",
    product_name: "Café Premium",
    total_quantity: 25,
    total_paid: 1250,
    purchase_frequency_days: 7,
  },
  {
    id: "p2",
    product_name: "Té Verde",
    total_quantity: 15,
    total_paid: 600,
    purchase_frequency_days: 10,
  },
  {
    id: "p3",
    product_name: "Galletas Artesanales",
    total_quantity: 40,
    total_paid: 800,
    purchase_frequency_days: 5,
  },
];
