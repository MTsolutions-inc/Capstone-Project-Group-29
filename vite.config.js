import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Forwards any request starting with /api directly to the correct live server
      "/api": {
        target:
          "https://whitebricks.com" /* 👈 FIXED: Pointing to the real backend server */,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
