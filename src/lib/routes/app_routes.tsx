import {
  Gauge,
  Settings,
  UserCog,
  Package,
  Receipt,
  BuildingIcon,
  BarChart4Icon,
} from "lucide-react";

const app_routes = {
  "": [
    { name: "Dashboard", path: "/dashboard", icon: <Gauge /> },
    { name: "Organización", path: "/organization", icon: <BuildingIcon /> },
  ],
  Finanzas: [
    {
      name: "Registro Financiero",
      path: "/financial-overview",
      icon: <BarChart4Icon />,
    },
  ],
  Ventas: [
    { name: "Clientes", path: "/clients", icon: <UserCog /> },
    { name: "Productos", path: "/products", icon: <Package /> },
    { name: "Ordenes", path: "/orders", icon: <Receipt /> },
  ],
  Configuración: [
    { name: "Configuración", path: "/settings", icon: <Settings /> },
  ],
};

export default app_routes;
