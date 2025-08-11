import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface InputFieldProps extends React.ComponentProps<'input'> {
  label?: string;
  labelClassName?: string;
}

export const InputField = ({ label, labelClassName, ...rest }: InputFieldProps) => {
  return (
    <>
      <Label children={label} className={labelClassName} />
      <Input {...rest} />
    </>
  );
};
