import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Relative assets work on both root hosts (Netlify) and subpath hosts
  // (GitHub Pages at /robin-portfolio/).
  base: './',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});
