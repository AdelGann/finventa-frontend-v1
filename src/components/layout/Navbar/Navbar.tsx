import { ModeToggle } from "@/components/ui/Mode-Toggle";
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
import { useMobile } from "@/lib/hooks/useMobile";
import { useTheme } from "@/lib/provider/theme-provider";
import { motion } from "framer-motion";
import { Menu } from "@/assets/icons/Menu";
import { Link } from "react-router-dom";
import { VERSION } from "@/lib/consts/variables";

import Logo_White from "@/assets/FINVENTA/FINVENTA_WHITE.svg";
import Logo_Dark from "@/assets/FINVENTA/FINVENTA_DARK.svg";

interface RoutesElement extends React.HTMLProps<HTMLDivElement>, RoutesProps {}
const Navbar = ({ routes, ...rest }: RoutesElement) => {
  const { screenType } = useMobile();
  const { theme } = useTheme();
  const LOGO = theme === "light" ? Logo_White : Logo_Dark;
  return (
    <motion.nav
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 10 }}
      transition={{ delay: 0.2, duration: 0.3 }}
      className="flex justify-center items-center max-w-[70vw] p-4 m-4 shadow-sm dark:shadow-neutral-800 rounded-2xl mx-auto bg-white dark:bg-neutral-950"
    >
      <div
        className="flex justify-between w-full items-center"
        {...(rest as React.HTMLAttributes<HTMLDivElement>)}
      >
        <Link to="/" className="flex items-center gap-2">
          <img src={LOGO} className="w-[140px]" />
          <Badge variant="outline">{VERSION}</Badge>
        </Link>
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
                      href="/login"
                      className={`${navigationMenuTriggerStyle()} w-full cursor-pointer rounded transition-all duration-300 hover:bg-neutral-100 hover:text-black dark:hover:bg-gray-500 dark:hover:text-white text-2sm`}
                    >
                      Log in
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      href="/register"
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
                    href="/login"
                    className={`${navigationMenuTriggerStyle()} cursor-pointer rounded transition-all duration-300 px-4 py-2 text-[#333344] hover:bg-[#F3F4F6] hover:text-[#111827] dark:text-[#D1D5DB] dark:hover:bg-[#2a2a35] dark:hover:text-white text-sm`}
                  >
                    Log in
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/register"
                    className={`${navigationMenuTriggerStyle()} hover:text-white cursor-pointer rounded transition-all duration-300 px-4 py-2 bg-[#333344] text-white hover:bg-[#4a4a5a] dark:bg-[#2f2f3f] dark:text-[#F3F4F6] dark:hover:bg-[#3a3a4a] text-sm`}
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
export default Navbar;
