import { createStore } from "zustand/vanilla";
import { createJSONStorage, persist } from "zustand/middleware";

export const useSidebarStore = createStore(
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
