import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export const Notifications = () => {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-semibold tracking-tight">Notificaciones</h3>
                <p className="text-muted-foreground mt-2">
                    Elige cómo y cuándo quieres ser notificado sobre la actividad del negocio.
                </p>
            </div>
            <Separator />

            <div className="space-y-6">
                <div className="grid gap-6">
                    {[
                        {
                            title: "Nuevas Órdenes",
                            desc: "Recibe una notificación cuando se cree una nueva orden de venta.",
                            default: true
                        },
                        {
                            title: "Stock Bajo",
                            desc: "Te avisaremos cuando el inventario de un producto esté por agotarse.",
                            default: true
                        },
                        {
                            title: "Reportes Semanales",
                            desc: "Recibe un resumen semanal de ventas y estadísticas por correo.",
                            default: false
                        },
                        {
                            title: "Nuevos Clientes",
                            desc: "Notificar cuando un nuevo cliente se registre en la plataforma.",
                            default: false
                        },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-6 border rounded-xl bg-card hover:bg-muted/20 transition-colors">
                            <div className="space-y-1">
                                <Label htmlFor={`notif-${i}`} className="text-base font-medium cursor-pointer">
                                    {item.title}
                                </Label>
                                <p className="text-sm text-muted-foreground max-w-md">
                                    {item.desc}
                                </p>
                            </div>
                            <Switch id={`notif-${i}`} defaultChecked={item.default} />
                        </div>
                    ))}
                </div>

                <div className="flex justify-end pt-4">
                    <Button size="lg" className="px-8">Guardar Preferencias</Button>
                </div>
            </div>
        </div>
    );
};

export default Notifications;
