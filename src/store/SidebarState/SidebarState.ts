import { createStore } from "zustand/vanilla";
import { createJSONStorage, persist } from "zustand/middleware";
import { useStore } from "zustand";

export const sidebarStore = createStore(
	persist<SidebarState>(
		(set) => ({
			isOpen: true,
			toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
		}),
		{
			name: "sidebar-storage",
			storage: createJSONStorage(() => localStorage),
		}
	)
);
export const useSidebarStore = <T>(selector: (state: SidebarState) => T) =>
	useStore(sidebarStore, selector);
