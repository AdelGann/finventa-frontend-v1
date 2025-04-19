export const textVariants = {
	open: {
		opacity: 1,
		width: "auto",
		x: 0,
		transition: { duration: 0.2 },
	},
	closed: {
		opacity: 0,
		width: 0,
		x: -10,
		transition: { duration: 0.2 },
	},
};

export const badgeVariants = {
	open: {
		opacity: 1,
		width: "30%",
		marginLeft: 0,
		transition: { duration: 0.3 },
	},
	closed: {
		opacity: 0,
		width: 0,
		marginLeft: 0,
		transition: { duration: 0.3 },
	},
};
