import { SEO } from "@/components/custom/SEO";
import { EmployeesTable } from "./components/EmployeesTable"

const Employees = () => {
  return (
    <div>
      <SEO
        title="Empleados"
        description="Lista de Empleados"
      />
      <div className="px-5 pt-5">
        <h2 className="text-3xl uppercase font-bold">Listado de Empleados</h2>
      </div>
      <EmployeesTable />
    </div>
  )
}

export default Employees;
