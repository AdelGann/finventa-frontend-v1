import { BackgroundDots } from "@/components/ui/BackgroundDots";
import { motion } from "framer-motion";
export const NotFound = () => {
	return (
		<BackgroundDots>
			<motion.section
				initial={{ opacity: 0, y: 160 }}
				animate={{ opacity: 1, y: 250 }}
				transition={{ duration: 0.6 }}
				className="flex flex-col items-center justify-center"
			>
				<h1 className="text-6xl font-bold">404</h1>
				<p className="mt-4 text-xl">Page not found</p>
			</motion.section>
		</BackgroundDots>
	);
};
