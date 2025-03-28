import { createStore } from "zustand/vanilla";
import { createJSONStorage, persist } from "zustand/middleware";

export const useAuthStore = createStore(
	persist<AuthState>(
		(set) => ({
			token: null,
			isAuthenticated: false,
			login: (token: Token) => set({ token, isAuthenticated: true }),
			logout: () => set({ token: null, isAuthenticated: false }),
		}),
		{
			name: "auth-storage",
			storage: createJSONStorage(() => localStorage),
		}
	)
);
