import { Separator } from "@/components/ui/separator";
import { Bell, Settings, Users } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        href: string;
        title: string;
        icon: React.ReactNode;
    }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
    return (
        <nav
            className={`flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-2 ${className}`}
            {...props}
        >
            {items.map((item) => (
                <NavLink
                    key={item.href}
                    to={item.href}
                    end={item.href === "/settings"}
                    className={({ isActive }) =>
                        `justify-start flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${isActive
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`
                    }
                >
                    {item.icon}
                    <span className="text-base">{item.title}</span>
                </NavLink>
            ))}
        </nav>
    );
}

const sidebarNavItems = [
    {
        title: "General",
        href: "/settings",
        icon: <Settings className="w-5 h-5" />,
    },
    {
        title: "Usuarios",
        href: "/settings/users",
        icon: <Users className="w-5 h-5" />,
    },
    {
        title: "Notificaciones",
        href: "/settings/notifications",
        icon: <Bell className="w-5 h-5" />,
    },
];

export default function SettingsLayout() {
    return (
        <div className="space-y-8 p-6 md:p-10 pb-16 block animate-in fade-in duration-500 max-w-7xl mx-auto">
            <div className="space-y-1">
                <h2 className="text-3xl font-bold tracking-tight">Configuración</h2>
                <p className="text-muted-foreground text-lg">
                    Administra las preferencias de tu aplicación y cuenta.
                </p>
            </div>
            <Separator className="my-6" />
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                <aside className="lg:w-1/4 xl:w-1/5">
                    <SidebarNav items={sidebarNavItems} />
                </aside>
                <div className="flex-1 lg:max-w-4xl">
                    <div className="bg-card rounded-xl border border-border/50 shadow-sm min-h-[500px]">
                        <div className="p-8">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
