import * as Yup from "yup";

export const formikValidation = <T extends Yup.AnyObject>(schema: Yup.ObjectSchema<T>) => {
    return (values: unknown) => {
        try {
            schema.validateSync(values, { abortEarly: false });
        } catch (validationErrors) {
            const errors = {};
            (validationErrors as Yup.ValidationError).inner.forEach((error: Yup.ValidationError) => {
                (errors as Record<string, string>)[error.path!] = error.message;
            });
            return errors;
        }
    }
}
