import { motion, useTransform, useSpring, useMotionValue, MotionValue } from "framer-motion";
import { useState, useEffect, memo, useRef, useCallback } from "react";

interface Dot {
	x: number;
	y: number;
	id: number;
	size: number;
	depth: number;
	baseX: number;
	baseY: number;
	offsetX: number;
	offsetY: number;
	speed: number;
}

export const BackgroundDots = ({
	children,
	allowPointerEvents = false,
	blockRef = null,
	numDots = 50,
}: {
	children: React.ReactNode;
	allowPointerEvents?: boolean;
	blockRef?: React.RefObject<HTMLDivElement> | null;
	numDots?: number;
}) => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const [dots, setDots] = useState<Dot[]>([]);
	const timeRef = useRef<number>(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const animationFrameRef = useRef<number>(0);
	const isBlocked = useRef(false);

	const createDots = useCallback(() => {
		const newDots: Dot[] = [];

		for (let i = 0; i < numDots; i++) {
			const x = Math.random() * document.documentElement.scrollWidth;
			const y = Math.random() * document.documentElement.scrollHeight;
			newDots.push({
				x,
				y,
				baseX: x,
				baseY: y,
				id: i,
				size: Math.random() * 4 + 2,
				depth: Math.random() * 0.6 + 0.4,
				offsetX: Math.random() * 50 - 25,
				offsetY: Math.random() * 50 - 25,
				speed: Math.random() * 5 + 0.1,
			});
		}
		return newDots;
	}, [numDots]);

	useEffect(() => {
		setDots(createDots());

		const handleResize = () => {
			setDots(createDots());
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [createDots]);

	const handleMouseMove = useCallback(
		(e: React.MouseEvent) => {
			// Verificar si el puntero está sobre el contenedor referenciado
			if (blockRef?.current) {
				const rect = blockRef.current.getBoundingClientRect();
				isBlocked.current =
					e.clientX >= rect.left &&
					e.clientX <= rect.right &&
					e.clientY >= rect.top &&
					e.clientY <= rect.bottom;
			} else {
				isBlocked.current = false;
			}

			if (!isBlocked.current) {
				mouseX.set(e.clientX);
				mouseY.set(e.clientY);
			}
		},
		[mouseX, mouseY, blockRef]
	);

	useEffect(() => {
		const animate = (time: number) => {
			timeRef.current = time * 0.001;

			setDots((prevDots) =>
				prevDots.map((dot) => ({
					...dot,
					x:
						dot.baseX +
						Math.sin(timeRef.current * dot.speed + dot.id) * 20 * dot.depth +
						Math.cos(timeRef.current * dot.speed * 0.5) * dot.offsetX * dot.depth,
					y:
						dot.baseY +
						Math.cos(timeRef.current * dot.speed + dot.id) * 20 * dot.depth +
						Math.sin(timeRef.current * dot.speed * 0.5) * dot.offsetY * dot.depth,
				}))
			);

			animationFrameRef.current = requestAnimationFrame(animate);
		};

		animationFrameRef.current = requestAnimationFrame(animate);

		return () => {
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
			}
		};
	}, []);

	return (
		<motion.div
			ref={containerRef}
			className={`fixed inset-0 z-10 w-full h-full overflow-hidden bg-white dark:bg-black ${
				allowPointerEvents ? "pointer-events-auto" : "pointer-events-none"
			}`}
			onMouseMove={handleMouseMove}
		>
			{dots.map((dot) => (
				<MemoizedDot
					key={dot.id}
					dot={dot}
					mouseX={mouseX}
					mouseY={mouseY}
					isBlocked={isBlocked.current}
				/>
			))}
			<div className="relative z-50">
				<div className="pointer-events-auto">{children}</div>
			</div>
		</motion.div>
	);
};

const MemoizedDot = memo(
	({
		dot,
		mouseX,
		mouseY,
		isBlocked,
	}: {
		dot: Dot;
		mouseX: MotionValue<number>;
		mouseY: MotionValue<number>;
		isBlocked: boolean;
	}) => {
		
		const x = useSpring(
			useTransform(mouseX, (value: number) =>
				isBlocked ? dot.x : dot.x + (value - dot.x) * dot.depth * 0.2
			),
			{
				stiffness: 800,
				damping: 40,
				mass: 0.1,
			}
		);

		const y = useSpring(
			useTransform(mouseY, (value) =>
				isBlocked ? dot.y : dot.y + (value - dot.y) * dot.depth * 0.2
			),
			{
				stiffness: 800,
				damping: 40,
				mass: 0.1,
			}
		);

		const distance = useTransform([mouseX, mouseY], ([mx, my]) => {
			const dx = (mx as number) - dot.x;
			const dy = (my as number) - dot.y;
			return Math.sqrt(dx * dx + dy * dy);
		});

		const scale = useTransform(distance, [0, 150], [1 + dot.depth * 0.8, 1]);
		const opacity = useTransform(distance, [0, 150], [0.8 * dot.depth, 0.3 * dot.depth]);

		return (
			<motion.div
				className="absolute rounded-full"
				style={{
					width: dot.size,
					height: dot.size,
					x,
					y,
					scale,
					opacity,
					backgroundColor: "currentColor",
					boxShadow: `0 0 ${dot.size}px rgba(currentColor, ${dot.depth * 0.2})`,
					filter: `blur(${(1 - dot.depth) * 1}px)`,
				}}
			/>
		);
	},
	(prev, next) => {
		return (
			prev.mouseX.get() === next.mouseX.get() &&
			prev.mouseY.get() === next.mouseY.get() &&
			prev.dot.x === next.dot.x &&
			prev.dot.y === next.dot.y &&
			prev.isBlocked === next.isBlocked
		);
	}
);
