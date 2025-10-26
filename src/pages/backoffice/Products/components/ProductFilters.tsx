import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Columns, Table } from "lucide-react";
import { FiltersProps } from "../views/ProductsView";
import { cn } from "@/lib/utils";
import { InputField } from "@/components/custom/InputField";
import { CreateProduct } from "../views/CreateProduct";

const activeStyle = "border text-[#00b77e] bg-[#00b77e]/10 dark:bg-[#00b77e]";

export const ProductFilters = ({
  setFilters,
  filters,
}: {
  filters: FiltersProps;
  setFilters: <K extends keyof FiltersProps>(
    key: K,
    value: FiltersProps[K],
  ) => void;
}) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:justify-between px-4 py-2">
      {/* Filtro por estado */}
      <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
        <ButtonGroup>
          <Button
            variant="outline"
            onClick={() => setFilters("filterBy", "")}
            className={cn(
              "transition-all duration-200 ease-in-out",
              filters.filterBy === "" && activeStyle,
            )}
          >
            Todos
          </Button>
          <Button
            variant="outline"
            onClick={() => setFilters("filterBy", "Active")}
            className={cn(
              "transition-all duration-200 ease-in-out",
              filters.filterBy === "Active" && activeStyle,
            )}
          >
            Activos
          </Button>
          <Button
            variant="outline"
            onClick={() => setFilters("filterBy", "Inactive")}
            className={cn(
              "transition-all duration-200 ease-in-out",
              filters.filterBy === "Inactive" && activeStyle,
            )}
          >
            Inactivos
          </Button>
        </ButtonGroup>
      </div>

      {/* Vista + búsqueda */}
      <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
        <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
          <ButtonGroup>
            <Button
              variant="outline"
              onClick={() => setFilters("viewType", "column")}
              className={cn(
                "transition-all duration-200 ease-in-out",
                filters.viewType === "column" && activeStyle,
              )}
            >
              <Columns className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => setFilters("viewType", "table")}
              className={cn(
                "transition-all duration-200 ease-in-out",
                filters.viewType === "table" && activeStyle,
              )}
            >
              <Table className="w-4 h-4" />
            </Button>
          </ButtonGroup>
        </div>
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          <InputField
            placeholder="Buscar por Descripción"
            className="w-full sm:w-[200px]"
          />
          <Button className="whitespace-nowrap">Buscar</Button>
          <CreateProduct />
        </div>
      </div>
    </div>
  );
};
