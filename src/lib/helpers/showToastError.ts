import { toast } from "sonner";

export const showToastError = (errors: Record<string, string>) => {
    const firstErrorKey = Object.keys(errors)[0];

    if (firstErrorKey) {
        toast.error(errors[firstErrorKey], {
            description: "Please review the entered information and try again",
        });
    }
};
