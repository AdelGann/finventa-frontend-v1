import { useState } from "react";
import { ProductsTable } from "../components/ProductsTable";
import { ProductsColumn } from "../components/ProductsColumn";
import { ProductFilters } from "../components/ProductFilters";

export interface FiltersProps {
  viewType: "column" | "table";
  filterBy: "Active" | "Inactive" | ""; // vacío para all
  search: string;
}

export const ProductsView = () => {
  const [filters, setFilters] = useState<FiltersProps>({
    viewType: "column",
    filterBy: "",
    search: "",
  });
  const handleSetFilters = <K extends keyof FiltersProps>(
    key: K,
    value: FiltersProps[K],
  ) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  return (
    <div>
      <ProductFilters setFilters={handleSetFilters} filters={filters} />
      <div className="my-3">
        {filters.viewType === "column" ? <ProductsColumn /> : <ProductsTable />}
      </div>
    </div>
  );
};
