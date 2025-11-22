import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Pricing = () => {
	const navigate = useNavigate();

	const plan = {
		name: "Gratuito",
		price: "$0",
		period: "/siempre",
		description: "Acceso completo a todas las funcionalidades de Finventa",
		features: [
			"Clientes ilimitados",
			"Productos ilimitados",
			"Órdenes ilimitadas",
			"Dashboard completo con métricas en tiempo real",
			"Gestión de inventario con alertas",
			"Reportes financieros detallados",
			"Usuarios ilimitados",
			"Soporte por email",
			"Actualizaciones automáticas",
			"Seguridad de nivel empresarial"
		]
	};

	/* Planes comentados por temas comerciales
	const plans = [
	  {
		name: "Básico",
		price: "$29",
		period: "/mes",
		description: "Perfecto para pequeños negocios que están comenzando",
		features: [
		  "Hasta 100 clientes",
		  "Hasta 50 productos",
		  "Órdenes ilimitadas",
		  "Dashboard básico",
		  "Soporte por email",
		  "1 usuario"
		],
		popular: false
	  },
	  {
		name: "Profesional",
		price: "$79",
		period: "/mes",
		description: "Ideal para negocios en crecimiento",
		features: [
		  "Clientes ilimitados",
		  "Productos ilimitados",
		  "Órdenes ilimitadas",
		  "Dashboard avanzado",
		  "Soporte prioritario",
		  "Hasta 5 usuarios",
		  "Reportes personalizados",
		  "Integraciones API"
		],
		popular: true
	  },
	  {
		name: "Empresarial",
		price: "$199",
		period: "/mes",
		description: "Para empresas que necesitan el máximo rendimiento",
		features: [
		  "Todo en Profesional",
		  "Usuarios ilimitados",
		  "Soporte 24/7",
		  "Gestor de cuenta dedicado",
		  "Personalización completa",
		  "Capacitación del equipo",
		  "SLA garantizado",
		  "Infraestructura dedicada"
		],
		popular: false
	  }
	];
	*/

	return (
		<section className="py-20 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold text-foreground mb-4">
						Comienza gratis, sin compromisos
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Accede a todas las funcionalidades de Finventa completamente gratis. Sin tarjeta de crédito, sin límites.
					</p>
				</motion.div>

				<div className="flex justify-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="w-full max-w-lg"
					>
						<div className="relative bg-card border-2 border-primary rounded-xl p-8 shadow-xl">
							<div className="absolute -top-4 left-1/2 -translate-x-1/2">
								<span className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
									100% Gratis
								</span>
							</div>

							<div className="text-center mb-6 mt-4">
								<h3 className="text-3xl font-bold text-foreground mb-2">
									{plan.name}
								</h3>
								<p className="text-muted-foreground text-sm mb-4">
									{plan.description}
								</p>
								<div className="flex items-baseline justify-center">
									<span className="text-6xl font-bold text-foreground">
										{plan.price}
									</span>
									<span className="text-muted-foreground ml-2 text-lg">
										{plan.period}
									</span>
								</div>
							</div>

							<ul className="space-y-4 mb-8">
								{plan.features.map((feature, i) => (
									<li key={i} className="flex items-start gap-3">
										<Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
										<span className="text-foreground font-medium">{feature}</span>
									</li>
								))}
							</ul>

							<Button
								onClick={() => navigate("/register")}
								className="w-full"
								size="lg"
							>
								Comenzar Ahora - Es Gratis
							</Button>
						</div>
					</motion.div>
				</div>

				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="text-center text-muted-foreground mt-12"
				>
					No se requiere tarjeta de crédito. Comienza a usar Finventa en menos de 2 minutos.
				</motion.p>
			</div>
		</section>
	);
};
