import { BarChart2Icon, UserCog } from "lucide-react";

export const tabs_trigger = [
  {
    value: "stats",
    className: "cursor-pointer",
    children: (
      <>
        <BarChart2Icon className="text-blue-400 mr-1 h-4 w-4" /> Estadísticas
      </>
    ),
  },
  {
    value: "employees",
    className: "cursor-pointer",
    children: (
      <>
        <UserCog className="text-blue-400 mr-1 h-4 w-4" /> Miembros
      </>
    ),
  },
];
