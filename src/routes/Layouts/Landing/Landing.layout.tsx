import { Outlet } from "react-router-dom";
import { Footer } from "@/components/layout/Footer/Footer";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Routes } from "@/lib/consts/routes";
import { BackgroundDots } from "@/components/ui/BackgroundDots";

/**
 * Layout principal para las páginas de la aplicación.
 *
 * Este componente incluye:
 * - Un `Navbar` en la parte superior
 * - Una sección central donde se renderizan las rutas hijas (`Outlet`)
 * - Un `Footer` al final del contenido
 *
 * @returns {JSX.Element} - Estructura del layout con Navbar, contenido principal y Footer
 */
export const Landing = () => {
	return (
		<div className="min-h-screen flex flex-col">
			<div className="fixed top-0 left-0 w-full z-20">
				<Navbar routes={Routes} />
			</div>
			<BackgroundDots numDots={30}>
				<section className="flex-grow p-0 lg:p-10 z-0">
					<Outlet />
				</section>
			</BackgroundDots>
			<div className="fixed bottom-0 left-0 w-full z-20">
				<Footer routes={Routes} />
			</div>
		</div>
	);
};
//
export default Landing;
