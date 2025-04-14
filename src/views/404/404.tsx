import { SEO } from "@/components/custom/SEO";
import { motion } from "framer-motion";

export const NotFound = () => {
	return (
		<>
			<SEO title="Z0 - Page not found" description="Page not found" />
			<motion.section
				initial={{ opacity: 0, y: 160 }}
				animate={{ opacity: 1, y: 250 }}
				transition={{ duration: 0.6 }}
				className="flex flex-col items-center justify-center"
			>
				<h1 className="text-6xl font-bold">404</h1>
				<p className="mt-4 text-xl">Page not found</p>
			</motion.section>
		</>
	);
};
export default NotFound;
