import { lazy } from "react";
import { Outlet } from "react-router-dom";

import { BackgroundDots } from "@/components/ui/BackgroundDots";
import landing_routes from "@/lib/consts/routes";

const Navbar = lazy(() => import("@/components/layout/Navbar/Navbar"));
const Footer = lazy(() => import("@/components/layout/Footer/Footer"));

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
      <div className="fixed top-0 left-0 w-full z-30">
        <Navbar routes={landing_routes} />
      </div>
      <BackgroundDots numDots={30}>
        <section className="flex-grow p-0 lg:p-10 z-0">
          <Outlet />
        </section>
      </BackgroundDots>
      <div className="fixed bottom-0 left-0 w-full z-30">
        <Footer routes={landing_routes} />
      </div>
    </div>
  );
};

export default Landing;
