import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  base: "/hado-portfolio/",
  server: {
    port: 8000
  },
  css: {
    postcss: './postcss.config.cjs',
  },
});
