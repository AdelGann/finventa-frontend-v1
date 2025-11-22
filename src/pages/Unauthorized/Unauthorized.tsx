import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft, ShieldAlert } from "lucide-react";

const Unauthorized = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="max-w-2xl w-full text-center space-y-8">
                {/* 403 Number */}
                <div className="relative">
                    <h1 className="text-[150px] md:text-[200px] font-bold text-muted/20 leading-none select-none">
                        403
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <ShieldAlert className="w-24 h-24 text-destructive/50" />
                    </div>
                </div>

                {/* Message */}
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Acceso no autorizado
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-md mx-auto">
                        No tienes permisos para acceder a esta página. Si crees que esto es un error, contacta al administrador.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <Button
                        onClick={() => navigate(-1)}
                        variant="outline"
                        size="lg"
                        className="gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Volver atrás
                    </Button>
                    <Button
                        onClick={() => navigate("/dashboard")}
                        size="lg"
                        className="gap-2"
                    >
                        <Home className="w-4 h-4" />
                        Ir al Dashboard
                    </Button>
                </div>

                {/* Additional Help */}
                <div className="pt-8 space-y-2">
                    <p className="text-sm text-muted-foreground">
                        Si necesitas acceso a esta sección, contacta al administrador del sistema.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Soporte:{" "}
                        <a href="mailto:soporte@finventa.com" className="text-primary hover:underline">
                            soporte@finventa.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Unauthorized;
