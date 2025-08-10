import { Gauge, User, Settings } from "lucide-react";

const app_routes = {
  "": [
    { name: "Dashboard", path: "/dashboard", icon: <Gauge /> },
    { name: "Profile", path: "/profile", icon: <User /> },
  ],
  Clientes: [
    { name: "Clientes", path: "/clients", icon: <User /> },
    { name: "Búscar Cliente", path: "/clients", icon: <User /> },
  ],
  Empleados: [
    { name: "Empleados", path: "/employees", icon: <User /> },
    { name: "Empleados", path: "/employees", icon: <User /> },
    { name: "Empleados", path: "/employees", icon: <User /> },
  ],
  Productos: [
    { name: "Products", path: "/products", icon: <User /> },
  ],
  Ordenes: [
    { name: "Orders", path: "/orders", icon: <User /> },
  ],
  "Configuración": [
    { name: "Configuración", path: "/settings", icon: <Settings /> },
  ],
};

export default app_routes;
