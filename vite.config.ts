import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	base: "/",
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		open: true,
	},
	dev: {
		sourcemap: true,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		sourcemapIgnoreList: (sourcePath: string, _sourcemapPath: string) => {
			return sourcePath.includes("node_modules") || sourcePath.includes("dist");
		},
	},
	build: {
		sourcemap: false,
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					if (id.includes("node_modules")) {
						return id
							.toString()
							.split("node_modules/")[1]
							.split("/")[0]
							.replace("@", "");
					}
				},
			},
		},
	},
});
