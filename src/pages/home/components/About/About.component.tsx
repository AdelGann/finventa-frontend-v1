import { motion } from "framer-motion";
import { BarChart3, Users, Package, Receipt, TrendingUp, Shield } from "lucide-react";

export const About = () => {
	const features = [
		{
			icon: <BarChart3 className="w-8 h-8" />,
			title: "Dashboard Intuitivo",
			description: "Visualiza todas tus métricas importantes en un solo lugar con gráficos en tiempo real."
		},
		{
			icon: <Users className="w-8 h-8" />,
			title: "Gestión de Clientes",
			description: "Administra tu cartera de clientes con perfiles detallados y historial completo."
		},
		{
			icon: <Package className="w-8 h-8" />,
			title: "Control de Inventario",
			description: "Mantén un registro preciso de tus productos y recibe alertas de stock bajo."
		},
		{
			icon: <Receipt className="w-8 h-8" />,
			title: "Órdenes de Venta",
			description: "Crea y gestiona órdenes de manera eficiente con seguimiento completo."
		},
		{
			icon: <TrendingUp className="w-8 h-8" />,
			title: "Reportes Financieros",
			description: "Genera reportes detallados de ventas, ingresos y gastos automáticamente."
		},
		{
			icon: <Shield className="w-8 h-8" />,
			title: "Seguridad Garantizada",
			description: "Tus datos están protegidos con encriptación de nivel empresarial."
		}
	];

	return (
		<section className="py-20">
			<div className="max-w-7xl mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold text-foreground mb-4">
						Todo lo que necesitas para gestionar tu negocio
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Finventa es una plataforma completa diseñada para simplificar la gestión empresarial
						y ayudarte a tomar mejores decisiones basadas en datos.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
						>
							<div className="text-primary mb-4">
								{feature.icon}
							</div>
							<h3 className="text-xl font-semibold text-foreground mb-2">
								{feature.title}
							</h3>
							<p className="text-muted-foreground">
								{feature.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
