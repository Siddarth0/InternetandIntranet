import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the output folder is correctly set
    emptyOutDir: true, // Clears old files before building
  },
});