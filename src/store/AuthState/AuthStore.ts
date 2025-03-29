import { createStore } from "zustand/vanilla";
import { createJSONStorage, persist } from "zustand/middleware";
import { useStore } from "zustand";

interface AuthState {
	token: string | null;
	isAuthenticated: boolean;
	login: (token: string) => void;
	logout: () => void;
}

const authStore = createStore(
	persist<AuthState>(
		(set) => ({
			token: null,
			isAuthenticated: false,
			login: (token) => set({ token, isAuthenticated: true }),
			logout: () => set({ token: null, isAuthenticated: false }),
		}),
		{
			name: "auth-storage",
			storage: createJSONStorage(() => localStorage),
		}
	)
);

export const useAuthStore = <T>(selector: (state: AuthState) => T) => useStore(authStore, selector);
