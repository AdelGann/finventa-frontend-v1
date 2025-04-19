import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = ({ routes }: RoutesProps) => {
	return (
		<motion.footer
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2, duration: 0.3 }}
			className="flex justify-center p-10 bg-white dark:bg-black rounded-t-2xl shadow-sm dark:shadow-neutral-800"
		>
			<div className="text-[12px] text-gray-500 flex justify-around w-96">
				<label>Z0© 2025. All Rights Reserved</label>
				<div className="flex gap-5">
					{routes.map((item, key) => (
						<Link to={item.path} key={key}>
							{item.name}
						</Link>
					))}
				</div>
			</div>
		</motion.footer>
	);
};
export default Footer;
