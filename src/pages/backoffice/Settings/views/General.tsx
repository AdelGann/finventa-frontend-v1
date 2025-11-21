import { Button } from "@/components/ui/button";
import { InputField } from "@/components/custom/InputField";
import { Separator } from "@/components/ui/separator";

export const General = () => {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-semibold tracking-tight">General</h3>
                <p className="text-muted-foreground mt-2">
                    Configuración general de la aplicación e información del negocio.
                </p>
            </div>
            <Separator />

            <div className="grid gap-8">
                <div className="grid gap-2">
                    <h4 className="text-lg font-medium">Información del Negocio</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                        Estos detalles aparecerán en tus facturas y correos electrónicos.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField label="Nombre del Negocio" defaultValue="Mi Tienda" placeholder="Ej. Mi Tienda C.A." />
                        <InputField label="RIF / Identificación" defaultValue="J-12345678-9" placeholder="Ej. J-00000000-0" />
                        <InputField label="Correo de Contacto" defaultValue="contacto@mitienda.com" type="email" />
                        <InputField label="Teléfono" defaultValue="+58 212 123 4567" type="tel" />
                    </div>
                    <div className="mt-4">
                        <InputField label="Dirección Fiscal" defaultValue="Av. Principal, Edificio A, Piso 1" placeholder="Dirección completa" />
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <Button size="lg" className="px-8">Guardar Cambios</Button>
                </div>
            </div>
        </div>
    );
};

export default General;
