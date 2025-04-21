/// <reference types="vite/client" />

type Roles = "USER" | "ADMIN";

interface User {
	id: string;
	name: string;
	email: string;
	role: Roles;
}

type Token = string;

interface AuthState {
	token: Token | null;
	isAuthenticated: boolean;
}

interface SidebarState {
	isOpen: boolean;
	toggleSidebar: () => void;
}

interface RoutesProps {
	routes: Route[];
}

interface Route {
	path: string;
	name: string;
	icon?: ReactNode;
}

interface SidebarRoutes {
	routes: Record<string, Route[]>;
}

interface SidebarProps extends SidebarState, SidebarRoutes {}

type month =
	| "January"
	| "February"
	| "March"
	| "April"
	| "May"
	| "June"
	| "July"
	| "August"
	| "September"
	| "October"
	| "November"
	| "December";

type MonthType = typeof month;
type day = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

// shadcn chart config
interface MonthlyChartData {
	month: month;
	values: Record<string, number>;
}
type ChartData = Record<string, number | number>;

interface DailyChartData {
	day: day;
	values: Record<string, number>;
}
