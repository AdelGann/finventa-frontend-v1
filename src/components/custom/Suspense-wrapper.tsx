import { ReactNode, Suspense } from "react";

export const SuspenseWrapper = ({ children }: { children: ReactNode }) => (
	<Suspense
		fallback={
			<div className="flex items-center justify-center min-h-screen">
				<div className="w-8 h-8 border-4 border-t-transparent border-gray-500 rounded-full animate-spin"></div>
			</div>
		}
	>
		{children}
	</Suspense>
);
