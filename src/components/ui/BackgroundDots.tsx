import { motion, useTransform, useSpring, useMotionValue, MotionValue } from "framer-motion";
import { useState, useEffect, memo, useRef, useCallback } from "react";

interface Dot {
	x: number;
	y: number;
	id: number;
	size: number;
	depth: number; // Nuevo: para profundidad de campo
	baseX: number; // Nueva: posición base X
	baseY: number; // Nueva: posición base Y
	offsetX: number; // Nuevo: offset aleatorio para dispersión
	offsetY: number; // Nuevo: offset aleatorio para dispersión
	speed: number; // Nuevo: velocidad individual
}

export const BackgroundDots = ({ children }: { children: React.ReactNode }) => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const [dots, setDots] = useState<Dot[]>([]);
	const timeRef = useRef<number>(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const animationFrameRef = useRef<number>(0);

	// Optimización: Memoizar la creación de puntos
	const createDots = useCallback(() => {
		const newDots: Dot[] = [];
		const numDots = 40; // Aumentado el número de puntos

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
	}, []);

	useEffect(() => {
		setDots(createDots());

		// Actualizar puntos cuando cambia el tamaño de la ventana
		const handleResize = () => {
			setDots(createDots());
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [createDots]);

	const handleMouseMove = useCallback(
		(e: React.MouseEvent) => {
			// Actualizar la posición del mouse sin importar el target
			mouseX.set(e.clientX);
			mouseY.set(e.clientY);
		},
		[mouseX, mouseY]
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
			className="fixed inset-0 z-10 w-full h-full overflow-hidden bg-white dark:bg-black"
			onMouseMove={handleMouseMove}
		>
			{dots.map((dot) => (
				<MemoizedDot key={dot.id} dot={dot} mouseX={mouseX} mouseY={mouseY} />
			))}
			<div className="relative z-50 pointer-events-none">
				<div className="pointer-events-auto" onMouseMove={(e) => e.stopPropagation()}>
					{children}
				</div>
			</div>
		</motion.div>
	);
};

const MemoizedDot = memo(
	({
		dot,
		mouseX,
		mouseY,
	}: {
		dot: Dot;
		mouseX: MotionValue<number>;
		mouseY: MotionValue<number>;
	}) => {
		const x = useSpring(
			useTransform(mouseX, (value: number) => dot.x + (value - dot.x) * dot.depth * 0.2),
			{
				stiffness: 800,
				damping: 40,
				mass: 0.1,
			}
		);

		const y = useSpring(
			useTransform(mouseY, (value) => dot.y + (value - dot.y) * dot.depth * 0.2),
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
			prev.dot.y === next.dot.y
		);
	}
);
