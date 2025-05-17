import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Local dev settings (optional)
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  // Static deployment fixes
  base: './',                  // Critical: Uses relative paths for assets
  build: {
    outDir: 'dist',            // Explicit output folder (default is already 'dist')
    emptyOutDir: true,         // Clears the 'dist' folder on each build
    sourcemap: true,           // Optional: Helps with debugging
  },
});