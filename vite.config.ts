import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: "ENV__",
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: `${path.resolve(__dirname, "./src")}`,
    },
  },
});
