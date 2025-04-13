import { FormikValues } from "formik";
import { formikValidation } from "./formikValidation";
import { showToastError } from "./showToastError";
import * as Yup from "yup";

export const onValidateError = <T extends Yup.AnyObject, TValues extends FormikValues>(
    validationSchema: Yup.ObjectSchema<T>,
    values: TValues
) => {
    const errors = formikValidation<T>(validationSchema)(values);
    if (errors) {
        showToastError(errors);
    }
    return errors;
};
