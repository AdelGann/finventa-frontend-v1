import { ModeToggle } from "@/components/custom/Mode-Toggle";
import { Badge } from "@/components/ui/badge";
import {
	NavigationMenu,
	// NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	// NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export const Navbar = ({ routes }: RoutesProps) => {
	return (
		<div className="flex justify-center items-center max-w-[70vw] p-4 m-4 shadow-lg rounded-2xl mx-auto">
			<div className="flex justify-between w-full items-center">
				<div className="flex items-center gap-2">
					<h3 className="text-xl font-bold pl-10">Z0</h3>
					<Badge variant="outline">V.0.0.1</Badge>
				</div>
				<NavigationMenu>
					<NavigationMenuList>
						{/* 
						<NavigationMenuItem>
							<NavigationMenuTrigger>Item One</NavigationMenuTrigger>
							<NavigationMenuContent>
								<NavigationMenuLink>Link</NavigationMenuLink>
							</NavigationMenuContent>
						</NavigationMenuItem> 
						*/}

						{routes.map((route, key) => (
							<NavigationMenuItem key={key}>
								<Link to={route.path}>
									<NavigationMenuLink
										className={`${navigationMenuTriggerStyle()} text-2sm transition-all duration-300`}
									>
										{route?.icon}
										{route.name}
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						))}
						<div className="px-2">
							<ModeToggle />
						</div>
						<NavigationMenuItem>
							<Link to={"/"}>
								<NavigationMenuLink
									className={`${navigationMenuTriggerStyle()} rounded transition-all duration-300 hover:bg-neutral-100 hover:text-black dark:hover:bg-gray-500 dark:hover:text-white text-2sm`}
								>
									Log in
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link to={"/"}>
								<NavigationMenuLink
									className={`${navigationMenuTriggerStyle()} rounded transition-all duration-300 bg-black text-white hover:bg-neutral-400 hover:text-white dark:bg-white dark:text-black dark:hover:bg-gray-700 dark:hover:text-white text-2sm`}
								>
									Sign up!
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</div>
	);
};
