import { ModeToggle } from "@/components/custom/Mode-Toggle";
import { Badge } from "@/components/ui/badge";
import {
	NavigationMenu,
	NavigationMenuContent,
	// NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	// NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useMobile } from "@/hooks/useMobile";
import { motion } from "framer-motion";
import { Menu } from "@/assets/icons/Menu";

export const Navbar = ({ routes }: RoutesProps) => {
	const { screenType } = useMobile();

	return (
		<motion.nav
			initial={{ opacity: 0, y: 0 }}
			animate={{ opacity: 1, y: 10 }}
			transition={{ delay: 0.2, duration: 0.3 }}
			className="flex justify-center items-center max-w-[70vw] p-4 m-4 shadow-sm dark:shadow-neutral-800 rounded-2xl mx-auto bg-white dark:bg-neutral-950"
		>
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
						{["sm", "2sm", "3sm", "lg"].some((item) => item === screenType) ? (
							<NavigationMenuItem>
								<NavigationMenuTrigger>
									<Menu />
								</NavigationMenuTrigger>
								<NavigationMenuContent
									className="flex flex-col gap-2"
									style={{ listStyle: "none" }}
								>
									<>
										{routes.map((route, key) => (
											<NavigationMenuLink
												key={key}
												href={route.path}
												className={`${navigationMenuTriggerStyle()} w-full text-2sm transition-all duration-300`}
											>
												{route?.icon}
												{route.name}
											</NavigationMenuLink>
										))}

										<NavigationMenuLink
											className={`${navigationMenuTriggerStyle()} w-full cursor-pointer rounded transition-all duration-300 hover:bg-neutral-100 hover:text-black dark:hover:bg-gray-500 dark:hover:text-white text-2sm`}
										>
											Log in
										</NavigationMenuLink>

										<NavigationMenuLink
											className={`${navigationMenuTriggerStyle()} cursor-pointer rounded transition-all duration-300 bg-black text-white hover:bg-neutral-400 hover:text-white dark:bg-white dark:text-black dark:hover:bg-gray-700 dark:hover:text-white text-2sm`}
										>
											Sign up!
										</NavigationMenuLink>
									</>
								</NavigationMenuContent>
							</NavigationMenuItem>
						) : (
							<>
								{routes.map((route, key) => (
									<NavigationMenuItem key={key}>
										<NavigationMenuLink
											key={key}
											href={route.path}
											className={`${navigationMenuTriggerStyle()} text-2sm transition-all duration-300`}
										>
											{route?.icon}
											{route.name}
										</NavigationMenuLink>
									</NavigationMenuItem>
								))}
								<div className="px-2">
									<ModeToggle />
								</div>
								<NavigationMenuItem>
									<NavigationMenuLink
										className={`${navigationMenuTriggerStyle()} cursor-pointer rounded transition-all duration-300 hover:bg-neutral-100 hover:text-black dark:hover:bg-gray-500 dark:hover:text-white text-2sm`}
									>
										Log in
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink
										className={`${navigationMenuTriggerStyle()} cursor-pointer rounded transition-all duration-300 bg-black text-white hover:bg-neutral-400 hover:text-white dark:bg-white dark:text-black dark:hover:bg-gray-700 dark:hover:text-white text-2sm`}
									>
										Sign up!
									</NavigationMenuLink>
								</NavigationMenuItem>
							</>
						)}
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</motion.nav>
	);
};
