import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import * as SelectPrimitive from "@radix-ui/react-select";

import Loader from "./Loader";

type SelectFieldEvent = { name: string; value: string };

interface SelectFieldProps extends React.ComponentProps<typeof SelectPrimitive.Root> {
	placeholder?: string;
	className?: string;
	options: { [key: string]: string }[] | Record<string, { [key: string]: string }[]>;
	option_name?: string;
	option_value?: string;
	isLoading?: boolean;
	onChange?: (event: SelectFieldEvent) => void; // Devuelve el `name` y `value` seleccionados
}

const SelectField = ({
	className = "w-full",
	options,
	option_name = "name",
	option_value = "value",
	placeholder,
	isLoading = false,
	onChange,
	...rest
}: SelectFieldProps) => {
	const data_options = Array.isArray(options)
		? [{ label: null, options }] // Caso de array simple: sin SelectLabel
		: Object.entries(options).map(([key, value]) => ({
				label: key, // Caso de Record: usa la clave como SelectLabel
				options: value,
		  }));

	// Función para manejar el cambio de valor
	const handleValueChange = (value: string) => {
		if (onChange) {
			onChange({ name: rest?.name || "", value }); // Devuelve el `name` y el `value` al evento `onChange`
		}
	};

	return (
		<Select {...rest} onValueChange={handleValueChange}>
			<SelectTrigger className={className}>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				{!isLoading ? (
					data_options.map(({ label, options }, key) => (
						<SelectGroup key={key}>
							{label ? <SelectLabel key={key}>{label}</SelectLabel> : null}
							{options.map((item, key) => (
								<SelectItem value={item[option_value]} key={`item-${key}`}>
									{item[option_name]}
								</SelectItem>
							))}
						</SelectGroup>
					))
				) : (
					<Loader divClassName="flex items-center justify-center" />
				)}
			</SelectContent>
		</Select>
	);
};

export default SelectField;
