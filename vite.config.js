// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vike from "vike/plugin";

export default defineConfig({
  plugins: [react(), vike()],
  build: {
    outDir: "dist/client", // ✅ Only define client output location
  },
});
