import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { badgeVariants, textVariants } from "@/lib/consts/motion_variants";
import { useMobile } from "@/hooks/useMobile";

const Sidebar = ({ ...props }: SidebarProps) => {
	const { isOpen, toggleSidebar, routes } = props;
	const { screenType } = useMobile(); // 3sm is the breakpoint;

	// VARIABLES
	const IS_MOBILE = ["3sm", "2sm", "sm"].includes(screenType);
	const LEFT_SIZE = isOpen ? "215px" : "65px";
	const VERSION = import.meta.env.VITE_VERSION;

	return (
		<section>
			{!IS_MOBILE && (
				<div className="absolute z-20">
					<Button
						style={{
							left: LEFT_SIZE,
							transition: "all .3s ease-in-out",
							transform: `rotate(${isOpen ? 180 : 0}deg)`,
						}}
						className={`relative top-[55px] rounded-full shadow cursor-pointer`}
						onClick={toggleSidebar}
					>
						<ArrowRight />
					</Button>
				</div>
			)}
			<div>
				<div className={`${IS_MOBILE && "flex justify-between w-full items-center"}`}>
					<div className={`flex items-center gap-2 justify-center pt-5`}>
						<h3 className="text-2xl font-bold pl-2">Z0</h3>
						<motion.div
							className="overflow-hidden"
							variants={badgeVariants}
							initial="closed"
							animate={isOpen ? "open" : "closed"}
						>
							<Badge variant="outline">{VERSION}</Badge>
						</motion.div>
					</div>
					{IS_MOBILE && (
						<>
							<Button className="rounded-full shadow cursor-pointer" onClick={toggleSidebar}>
								<ArrowLeft />
							</Button>
						</>
					)}
				</div>
				<hr className="my-6" />
				<div className="flex flex-col">
					{Object.entries(routes).map(([key, routeGroup]) => (
						<motion.div
							key={key}
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
						>
							{isOpen && (
								<h4 className="text-sm font-semibold text-gray-500 uppercase px-3 py-2">{key}</h4>
							)}
							{routeGroup.map((item, index) => (
								<Link
									to={item.path}
									key={index}
									className={`p-3 hover:bg-accent rounded-sm transition-all flex items-center ${
										isOpen ? "gap-2" : "justify-center"
									}`}
								>
									{item.icon && <>{item.icon}</>}
									<motion.p
										variants={textVariants}
										initial="closed"
										animate={isOpen ? "open" : "closed"}
										exit="closed"
										className="overflow-hidden whitespace-nowrap"
									>
										{item.name}
									</motion.p>
								</Link>
							))}
						</motion.div>
					))}
				</div>
				<div
					className={`absolute bottom-0 pb-4 px-2`}
					style={{
						width: IS_MOBILE ? "90%" : LEFT_SIZE,
						transition: "all .3s ease-in-out",
					}}
				>
					<Button
						className={`w-full flex items-center justify-center gap-2 cursor-pointer ${
							IS_MOBILE ? "w-full" : ""
						}`}
					>
						<LogOut />
						<motion.p
							variants={textVariants}
							initial="closed"
							animate={isOpen ? "open" : "closed"}
							exit="closed"
							className="overflow-hidden whitespace-nowrap"
						>
							Cerrar Sesión
						</motion.p>
					</Button>
				</div>
			</div>
		</section>
	);
};
export default Sidebar;
