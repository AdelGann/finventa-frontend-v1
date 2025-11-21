import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InputField } from "@/components/custom/InputField";
import { Separator } from "@/components/ui/separator";
import { Camera } from "lucide-react";

const Profile = () => {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div>
                <h3 className="text-lg font-medium">Mi Perfil</h3>
                <p className="text-sm text-muted-foreground">
                    Gestiona tu información personal y preferencias de cuenta.
                </p>
            </div>
            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Avatar Section */}
                <Card className="md:col-span-1">
                    <CardHeader>
                        <CardTitle>Foto de Perfil</CardTitle>
                        <CardDescription>
                            Haz clic en la imagen para cambiar tu foto.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center gap-4">
                        <div className="relative group cursor-pointer">
                            <Avatar className="w-32 h-32 border-4 border-muted">
                                <AvatarImage src="" />
                                <AvatarFallback className="text-4xl">AG</AvatarFallback>
                            </Avatar>
                            <div className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Camera className="text-white w-8 h-8" />
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="font-medium">Adel G</p>
                            <p className="text-sm text-muted-foreground">Administrador</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Personal Info Section */}
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Información Personal</CardTitle>
                        <CardDescription>
                            Actualiza tus datos de contacto.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputField label="Nombre" defaultValue="Adel" />
                            <InputField label="Apellido" defaultValue="G" />
                        </div>
                        <InputField label="Correo Electrónico" type="email" defaultValue="adel@example.com" />
                        <InputField label="Teléfono" type="tel" defaultValue="+58 412 123 4567" />

                        <div className="flex justify-end pt-4">
                            <Button>Guardar Cambios</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Profile;
