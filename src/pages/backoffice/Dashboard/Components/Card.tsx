interface CardProps {
	title: string;
	data: string | number;
}
export const Card = ({ ...props }: CardProps) => {
	return (
		<div className="bg-neutral-700 p-5 rounded-sm shadow-xl">
			<div className="flex">
				<label>{props.title}</label>
			</div>
		</div>
	);
};
