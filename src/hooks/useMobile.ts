import { useEffect, useState } from "react";

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
		return "Desconocido";
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
