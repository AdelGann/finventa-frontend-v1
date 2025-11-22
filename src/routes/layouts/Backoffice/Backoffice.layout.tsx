import { lazy } from "react";
import { Outlet } from "react-router-dom";
import app_routes from "@/lib/routes/app_routes";

import { useSidebarStore } from "@/store/SidebarState/SidebarState";
import { useMobile } from "@/lib/hooks/useMobile";
import { SuspenseWrapper } from "@/components/custom/Suspense-wrapper";

const Header = lazy(() => import("@/components/layout/Header/Header"));
const Sidebar = lazy(() => import("@/components/layout/Sidebar/Sidebar"));

/**
 * Backoffice layout component for the application.
 *
 * This component defines the main structure of the backoffice layout, including
 * a header, a sidebar, and a main content area. It uses animations to handle
 * the opening and closing of the sidebar and adjusts the layout dynamically
 * based on the sidebar's state.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered Backoffice layout component.
 *
 * @remarks
 * - The layout is implemented using CSS Grid with predefined grid areas.
 * - Animations are handled using the `motion` components from Framer Motion.
 * - The sidebar's width and margins are dynamically adjusted based on the
 *   `isOpen` state from the `useSidebarStore` hook.
 *
 *
 * @dependencies
 * - `useSidebarStore`: A custom hook to manage the sidebar's state.
 * - `motion`: Framer Motion library for animations.
 * - `ModeToggle`: A component for toggling between light and dark modes.
 * - `Sidebar`: A component for rendering the sidebar with navigation routes.
 * - `Outlet`: A React Router component for rendering nested routes.
 *
 * @styles
 * - The layout uses Tailwind CSS classes for styling.
 * - Dark mode styles are applied using `dark:` prefixed classes.
 */
const Backoffice = () => {
  const { IS_MOBILE } = useMobile(); // 3sm is the breakpoint;
  const sidebarState = useSidebarStore((state) => state);

  // VARIABLES
  const MOBILE_STYLE = `min-w-screen relative w-full z-20 ${IS_MOBILE && sidebarState.isOpen ? "visible" : "hidden"
    }`;

  const SIDEBAR_WIDTH = sidebarState.isOpen ? "250px" : "100px";

  const SIDEBAR_END_MARGIN = sidebarState.isOpen ? "0px" : "-150px";

  const MOBILE_SIDEBAR_END_MARGIN = "0px";

  const GRID_TEMPLATE = IS_MOBILE ? "0 1fr" : "250px 1fr";
  const mocked_profile = {
    username: "Adel G",
    avatar: "",
  }; //TODO: Implementar sistema de carga de imagenes para el usuario

  return (
    <section
      style={{
        gridTemplateColumns: GRID_TEMPLATE,
      }}
      className="grid grid-areas-backoffice grid-rows-[auto_1fr] h-screen max-h-screen w-full min-w-screen overflow-hidden fixed"
    >
      <header
        className="area-header transition-all duration-300 ease-in-out"
        style={{
          marginLeft: IS_MOBILE
            ? MOBILE_SIDEBAR_END_MARGIN
            : SIDEBAR_END_MARGIN,
        }}
      >
        <SuspenseWrapper>
          <Header profile={mocked_profile} />
        </SuspenseWrapper>
      </header>

      <aside
        className={`area-aside transition-all duration-300 ease-in-out ${IS_MOBILE && MOBILE_STYLE}`}
        style={{
          width: IS_MOBILE
            ? "100%"
            : sidebarState.isOpen
              ? SIDEBAR_WIDTH
              : "100px",
          opacity: IS_MOBILE ? (sidebarState.isOpen ? 1 : 0) : 1,
        }}
      >
        <SuspenseWrapper>
          <Sidebar
            isOpen={sidebarState.isOpen}
            toggleSidebar={sidebarState.toggleSidebar}
            routes={app_routes}
          />
        </SuspenseWrapper>
      </aside>

      <main
        className="bg-white dark:bg-[#1a1a23] area-main p-4 overflow-y-auto overflow-x-hidden pt-5 transition-all duration-300 ease-in-out max-h-full"
        style={{
          marginLeft: IS_MOBILE
            ? MOBILE_SIDEBAR_END_MARGIN
            : SIDEBAR_END_MARGIN,
        }}
      >
        <div
          id="content"
          style={{ viewTransitionName: "content" }}
          className="pb-5"
        >
          <Outlet />
        </div>
      </main>
    </section>
  );
};

export default Backoffice;
