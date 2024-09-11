import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './index.html'  // Ensure Vite looks for the correct index.html
    }
  },
  server: {
    port: 3000,
    open: true
  }
});