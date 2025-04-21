import { ReactNode, Suspense } from "react";
import Loader from "./Loader";

export const SuspenseWrapper = ({ children }: { children: ReactNode }) => (
	<Suspense fallback={<Loader />}>{children}</Suspense>
);
