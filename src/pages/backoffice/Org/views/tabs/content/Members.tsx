import { Users2Icon } from "lucide-react";
import { EmployeesTable } from "../../../components/EmployeesTable";

export const Members = () => {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-2 pb-6 px-4 pt-2">
        <div className="flex items-center gap-2 shadow rounded p-1">
          <Users2Icon className="text-blue-400" />
        </div>
        <h2 className="text-lg font-semibold">Miembros de la Organización.</h2>
      </div>
      <div>
        <EmployeesTable />
      </div>
    </div>
  )
}
export default Members;
