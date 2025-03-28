import { Link } from "react-router-dom";

export const Footer = ({ routes }: RoutesProps) => {
	return (
		<div className="flex justify-center p-10 ">
			<div className="text-[12px] text-gray-500 flex justify-around w-96">
				<label>Z0© 2025. All Rights Reserved</label>
				<div className="flex gap-5">
					{routes.map((item, key) => (
						<Link to={item.path} key={key}>
							{item.name}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
