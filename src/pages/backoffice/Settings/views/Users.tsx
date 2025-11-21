import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { MoreVertical, Plus } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export const Users = () => {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-semibold tracking-tight">Usuarios</h3>
                    <p className="text-muted-foreground mt-2">
                        Gestiona quién tiene acceso al panel administrativo.
                    </p>
                </div>
                <Button className="gap-2">
                    <Plus className="w-4 h-4" /> Agregar Usuario
                </Button>
            </div>
            <Separator />

            <div className="space-y-4">
                {[
                    { name: "Admin User", email: "admin@finventa.com", role: "Administrador", status: "Activo" },
                    { name: "Vendedor 1", email: "vendedor1@finventa.com", role: "Vendedor", status: "Activo" },
                    { name: "Contador", email: "contador@finventa.com", role: "Finanzas", status: "Inactivo" },
                ].map((user, i) => (
                    <div key={i} className="flex items-center justify-between p-4 border rounded-xl hover:bg-muted/30 transition-colors bg-card shadow-sm">
                        <div className="flex items-center gap-4">
                            <Avatar className="h-12 w-12 border-2 border-muted">
                                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} />
                                <AvatarFallback>{user.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-medium text-lg">{user.name}</p>
                                <p className="text-sm text-muted-foreground">{user.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <Badge variant={user.status === "Activo" ? "default" : "secondary"} className="px-3 py-1">
                                {user.status}
                            </Badge>
                            <div className="text-sm font-medium text-muted-foreground w-24 text-right">
                                {user.role}
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <MoreVertical className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>Editar</DropdownMenuItem>
                                    <DropdownMenuItem className="text-destructive">Eliminar</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;
