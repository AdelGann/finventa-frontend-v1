import { Gauge, User, Settings, UserCog, UserSearch, UserPlus, Package, Receipt } from "lucide-react";

const app_routes = {
  "": [
    { name: "Dashboard", path: "/dashboard", icon: <Gauge /> },
    { name: "Profile", path: "/profile", icon: <User /> },
  ],
  Clientes: [
    { name: "Clientes", path: "/clients", icon: <UserCog /> },
    { name: "Búscar Cliente", path: "/clients", icon: <UserSearch /> },
  ],
  Empleados: [
    { name: "Empleados", path: "/employees", icon: <UserPlus /> },
  ],
  Productos: [
    { name: "Products", path: "/products", icon: <Package /> },
  ],
  Ordenes: [
    { name: "Orders", path: "/orders", icon: <Receipt /> },
  ],
  "Configuración": [
    { name: "Configuración", path: "/settings", icon: <Settings /> },
  ],
};

export default app_routes;
