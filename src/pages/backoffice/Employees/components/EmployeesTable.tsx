import { DataTable } from "@/components/custom/DataTable"
import { InputField } from "@/components/custom/InputField"
import { Button } from "@/components/ui/button"

interface Employee {
  id: string
  full_name: string
  user: string
  ci: string
  rol: string
  state: string
}

export const EmployeesTable = () => {
  return (
    <div>
      <div className="flex justify-end items-center gap-5 place-items-center p-2 mb-5">
        <InputField label="" placeholder="Buscar por C.I." className="w-[200px]" />
        <Button className="">Buscar</Button>
      </div>
      <DataTable columns={columns} data={data} customActions={actions} />
    </div>
  )
}
const actions = [
  { label: "Editar", onClick: (row: Employee) => console.log(row) },
  { label: "Eliminar", onClick: (row: Employee) => console.log(row) },
]

const columns = [
  { accessorKey: "full_name", header: "Nombre" },
  { accessorKey: "user", header: "Usuario" },
  { accessorKey: "ci", header: "C.I." },
  { accessorKey: "rol", header: "Rol" },
  { accessorKey: "state", header: "Estado" },
]
const data: Employee[] = [
  { id: "1", full_name: "John Doe", user: "johndoe", ci: "123456789", rol: "admin", state: "active" },
  { id: "2", full_name: "Jane Doe", user: "janedoe", ci: "123456789", rol: "admin", state: "active" },
]
