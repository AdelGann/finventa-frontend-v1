import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
	const navigate = useNavigate();

	return (
		<div className="min-h-screen flex items-center justify-center bg-background px-4">
			<div className="max-w-2xl w-full text-center space-y-8">
				{/* 404 Number */}
				<div className="relative">
					<h1 className="text-[150px] md:text-[200px] font-bold text-muted dark:text-muted/40 leading-none select-none">
						404
					</h1>
					<div className="absolute inset-0 flex items-center justify-center">
						<Search className="w-24 h-24 text-muted-foreground/30" />
					</div>
				</div>

				{/* Message */}
				<div className="space-y-4">
					<h2 className="text-3xl md:text-4xl font-bold text-foreground">
						Página no encontrada
					</h2>
					<p className="text-muted-foreground text-lg max-w-md mx-auto">
						Lo sentimos, la página que estás buscando no existe o ha sido movida.
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
				<div className="pt-8 text-sm text-muted-foreground">
					<p>¿Necesitas ayuda? Contacta a soporte en{" "}
						<a href="mailto:soporte@finventa.com" className="text-primary hover:underline">
							soporte@finventa.com
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
