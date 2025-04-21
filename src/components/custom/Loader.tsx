const Loader = ({
	divClassName = "flex items-center justify-center min-h-screen",
}: {
	divClassName?: string;
}) => {
	return (
		<div className={divClassName}>
			<div className="w-8 h-8 border-4 border-t-transparent border-gray-500 rounded-full animate-spin"></div>
		</div>
	);
};
export default Loader;
