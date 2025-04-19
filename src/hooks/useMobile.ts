import { useEffect, useState } from "react";

/**
 * Custom hook to determine the screen type based on the current window width.
 * 
 * This hook listens to window resize events and updates the `screenType` state
 * with a string representing the screen size category.
 * 
 * Screen size categories:
 * - "sm": width < 360
 * - "2sm": 360 <= width < 480
 * - "3sm": 480 <= width < 768
 * - "lg": 768 <= width < 1024
 * - "2lg": 1024 <= width < 1440
 * - "xl": 1440 <= width < 1920
 * - "2xl": 1920 <= width < 2560
 * - "4xl": width >= 2560
 * - "unknown": width does not match any category
 * 
 * @returns An object containing:
 * - `screenType` (string): The current screen type based on the window width.
 * 
 * @example
 * const { screenType } = useMobile();
 * console.log(screenType); // Outputs the current screen type, e.g., "lg"
 */
export const useMobile = () => {
	const [screenType, setScreenType] = useState("");

	const getScreenType = (width: number) => {
		if (width < 360) return "sm";
		if (width >= 360 && width < 480) return "2sm";
		if (width >= 480 && width < 768) return "3sm";
		if (width >= 768 && width < 1024) return "lg";
		if (width >= 1024 && width < 1440) return "2lg";
		if (width >= 1440 && width < 1920) return "xl";
		if (width >= 1920 && width < 2560) return "2xl";
		if (width >= 2560) return "4xl";
		return "unknown";
	};

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			setScreenType(getScreenType(width));
		};

		// Ejecutar al montar el componente
		handleResize();

		// Escuchar cambios de tamaño
		window.addEventListener("resize", handleResize);

		// Limpiar listener al desmontar
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return {
		screenType,
	};
};
