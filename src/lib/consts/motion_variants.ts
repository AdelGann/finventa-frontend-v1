export const textVariants = {
	open: {
		opacity: 1,
		width: "auto",
		x: 0,
		transition: { duration: 0.3 },
	},
	closed: {
		opacity: 0,
		width: 0,
		x: -10,
		transition: { duration: 0.3 },
	},
	invisible: { opacity: 0, x: -20, transition: { duration: 0.2 } },
	visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

export const badgeVariants = {
	open: {
		opacity: 1,
		width: "auto",
		marginLeft: 0,
		transition: { duration: 0.3 },
	},
	closed: {
		opacity: 0,
		width: 0,
		marginLeft: 0,
		transition: { duration: 0.3 },
	},
	invisible: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
	visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
};
