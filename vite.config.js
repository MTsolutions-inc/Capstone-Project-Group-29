import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // 👈 FIXED: Changed to standard Vite React plugin
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Forwards any request starting with /api directly to whitebricks.com
      '/api': {
        target: 'https://whitebricks.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
