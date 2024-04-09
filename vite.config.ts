import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";
import { defineConfig, UserConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()] as UserConfig["plugins"],
  resolve: {
    alias: {
      src: `${path.resolve(__dirname, "./src")}`,
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./test-setup.ts",
  },
});
