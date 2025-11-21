import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Printer, CreditCard, MapPin, User, Mail, Phone } from "lucide-react";
import { useParams } from "react-router-dom";
import { useViewTransitionNavigate } from "@/lib/hooks/useViewTransitionNavigate";
import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/custom/DataTable";
import { ColumnDef } from "@tanstack/react-table";

interface OrderItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

export const OrderDetail = () => {
    const { id } = useParams();
    const navigate = useViewTransitionNavigate();

    // Mock data
    const order = {
        id: id || "ORD-001",
        created_at: "2025-10-01",
        status: "Pagado",
        client: {
            name: "María González",
            email: "maria.gonzalez@email.com",
            phone: "+58 412-1234567",
            address: "Av. Bolivar, Valencia, Carabobo",
        },
        items: [
            { id: 1, name: "Café Premium", quantity: 2, price: 50 },
            { id: 2, name: "Té Verde", quantity: 1, price: 30 },
            { id: 3, name: "Galletas Artesanales", quantity: 3, price: 40 },
        ],
        subtotal: 250,
        tax: 40,
        total: 290,
    };

    const columns: ColumnDef<OrderItem>[] = [
        {
            accessorKey: "name",
            header: "Producto",
            cell: ({ row }) => <span className="font-medium">{row.original.name}</span>,
        },
        {
            accessorKey: "price",
            header: () => <div className="text-right">Precio</div>,
            cell: ({ row }) => <div className="text-right">${row.original.price.toFixed(2)}</div>,
        },
        {
            accessorKey: "quantity",
            header: () => <div className="text-right">Cant.</div>,
            cell: ({ row }) => <div className="text-right">{row.original.quantity}</div>,
        },
        {
            id: "total",
            header: () => <div className="text-right">Total</div>,
            cell: ({ row }) => (
                <div className="text-right">
                    ${(row.original.price * row.original.quantity).toFixed(2)}
                </div>
            ),
        },
    ];

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="hover:bg-muted/50">
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                            Orden #{order.id}
                            <Badge variant={order.status === "Pagado" ? "default" : "secondary"}>
                                {order.status}
                            </Badge>
                        </h2>
                        <p className="text-muted-foreground text-sm">
                            Creada el {order.created_at}
                        </p>
                    </div>
                </div>
                <Button variant="outline" className="gap-2">
                    <Printer className="h-4 w-4" /> Imprimir
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Order Items */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="border-border/40 shadow-sm bg-card">
                        <CardHeader className="bg-muted/30 pb-4 border-b border-border/40">
                            <CardTitle className="text-lg font-medium">Detalles de la Orden</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="p-2">
                                <DataTable columns={columns} data={order.items} pageSize={5} />
                            </div>

                            <div className="p-6 bg-muted/20 space-y-3 border-t border-border/40">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span>${order.subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Impuestos</span>
                                    <span>${order.tax.toFixed(2)}</span>
                                </div>
                                <Separator className="my-2 bg-border/60" />
                                <div className="flex justify-between font-bold text-lg">
                                    <span>Total</span>
                                    <span className="text-primary">${order.total.toFixed(2)}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column - Customer Info */}
                <div className="space-y-6">
                    <Card className="border-border/40 shadow-sm bg-card">
                        <CardHeader className="bg-muted/30 pb-4 border-b border-border/40">
                            <CardTitle className="text-lg font-medium">Cliente</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            <div className="flex items-start gap-3">
                                <div className="bg-primary/10 p-2 rounded-full">
                                    <User className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium text-sm">{order.client.name}</p>
                                    <p className="text-xs text-muted-foreground">Cliente Registrado</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm">
                                    <Mail className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-muted-foreground">{order.client.email}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Phone className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-muted-foreground">{order.client.phone}</span>
                                </div>
                            </div>

                            <Separator className="bg-border/60" />

                            <div className="flex items-start gap-3">
                                <div className="bg-primary/10 p-2 rounded-full">
                                    <MapPin className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium text-sm mb-1">Dirección de Envío</p>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {order.client.address}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-border/40 shadow-sm bg-card">
                        <CardHeader className="bg-muted/30 pb-4 border-b border-border/40">
                            <CardTitle className="text-lg font-medium">Pago</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-primary/10 p-2 rounded-full">
                                        <CreditCard className="h-4 w-4 text-primary" />
                                    </div>
                                    <span className="font-medium text-sm">Tarjeta de Crédito</span>
                                </div>
                                <span className="text-xs text-muted-foreground">**** 4242</span>
                            </div>
                            <div className="flex justify-between items-center pt-2">
                                <span className="text-sm text-muted-foreground">Estado</span>
                                <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200 hover:bg-green-500/20">
                                    {order.status}
                                </Badge>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
