import { NavigateOptions, To, useNavigate } from "react-router-dom";

export const useViewTransitionNavigate = () => {
    const navigate = useNavigate();

    function viewTransitionNavigate(to: To, options?: NavigateOptions): void;
    function viewTransitionNavigate(delta: number): void;
    function viewTransitionNavigate(toOrDelta: To | number, options?: NavigateOptions) {
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                if (typeof toOrDelta === "number") {
                    navigate(toOrDelta);
                } else {
                    navigate(toOrDelta, options);
                }
            });
        } else {
            if (typeof toOrDelta === "number") {
                navigate(toOrDelta);
            } else {
                navigate(toOrDelta, options);
            }
        }
    }

    return viewTransitionNavigate;
};
