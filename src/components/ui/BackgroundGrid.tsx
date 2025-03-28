import { useEffect, useState } from "react";
import { useTheme } from "@/lib/provider/theme-provider";
import { cn } from "@/lib/utils";

interface BackgroundGridProps {
	size?: number;
	opacity?: number;
	className?: string;
}

export function BackgroundGrid({ size = 40, opacity = 0.7, className }: BackgroundGridProps) {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div className={cn("absolute inset-0 z-0 w-full h-full pointer-events-none", className)}>
			<div
				className={cn(
					"absolute bottom-0 left-0 right-0 top-0",
					theme === "dark"
						? "bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
						: "bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]"
				)}
				style={{
					backgroundSize: `${size}px ${size}px`,
					opacity: opacity,
					maskImage: "radial-gradient(ellipse 70% 50% at 50% 50%, black 70%, transparent 100%)",
					WebkitMaskImage:
						"radial-gradient(ellipse 70% 50% at 50% 50%, black 70%, transparent 100%)",
				}}
			/>
		</div>
	);
}
