import { lazy } from "react";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

import app_routes from "@/lib/consts/app_routes";
import { useSidebarStore } from "@/store/SidebarState/SidebarState";

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
	const sidebarState = useSidebarStore((state) => state);
	const SIDEBAR_WIDTH = sidebarState.isOpen ? "250px" : "100px";
	const SIDEBAR_START_MARGIN = sidebarState.isOpen ? "0px" : "-170px";
	const SIDEBAR_END_MARGIN = sidebarState.isOpen ? "0px" : "-150px";
	const mocked_profile = {
		username: "Adel",
		avatar: "",
	};
	return (
		<section
			style={{
				gridTemplateColumns: "250px 1fr",
			}}
			className="grid grid-areas-backoffice grid-rows-[auto_1fr] h-screen overflow-hidden"
		>
			<motion.header
				className="area-header bg-white border dark:bg-neutral-800 p-4"
				initial={{ marginLeft: SIDEBAR_START_MARGIN }}
				animate={{ marginLeft: SIDEBAR_END_MARGIN }}
				transition={{ duration: 0.3, ease: "easeInOut" }}
			>
				<Header profile={mocked_profile} />
			</motion.header>
			<motion.aside
				className="area-aside border dark:bg-neutral-900 p-4 max-h-screen overflow-auto"
				initial={{ width: SIDEBAR_WIDTH }}
				animate={{ width: SIDEBAR_WIDTH }}
				transition={{ duration: 0.3, ease: "easeInOut" }}
				style={{
					width: SIDEBAR_WIDTH,
				}}
			>
				<Sidebar
					isOpen={sidebarState.isOpen}
					toggleSidebar={sidebarState.toggleSidebar}
					routes={app_routes}
				/>
			</motion.aside>
			<motion.main
				className="area-main p-4 overflow-auto"
				initial={{ marginLeft: SIDEBAR_START_MARGIN }}
				animate={{ marginLeft: SIDEBAR_END_MARGIN }}
				transition={{ duration: 0.3, ease: "easeInOut" }}
			>
				<Outlet />
			</motion.main>
		</section>
	);
};

export default Backoffice;
