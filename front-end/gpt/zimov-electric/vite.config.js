import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  base: "./", // Ensures relative paths for assets
  build: {
    outDir: "dist", // Ensures output goes to the correct directory
    assetsDir: "assets", // Keeps assets inside /dist/assets
    emptyOutDir: true, // Clears previous build files
  },
});
