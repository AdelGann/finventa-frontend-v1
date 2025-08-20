import { Gauge, User, Settings, UserCog, UserSearch, Package, Receipt, BuildingIcon } from "lucide-react";

const app_routes = {
  "": [
    { name: "Dashboard", path: "/dashboard", icon: <Gauge /> },
    { name: "Compañía", path: "/company", icon: <BuildingIcon /> },
    { name: "Profile", path: "/profile", icon: <User /> },
  ],
  Clientes: [
    { name: "Clientes", path: "/clients", icon: <UserCog /> },
    { name: "Búscar Cliente", path: "/clients", icon: <UserSearch /> },
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
