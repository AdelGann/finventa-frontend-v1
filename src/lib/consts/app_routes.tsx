import { Gauge, User, Settings } from "lucide-react";

const app_routes = {
    "": [
        { name: "Dashboard", path: "/dashboard", icon: <Gauge /> },
        { name: "Profile", path: "/profile", icon: <User /> },
    ],
    settings: [
        { name: "Settings", path: "/settings", icon: <Settings /> },
    ],
};

export default app_routes;
