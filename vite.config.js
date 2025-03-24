import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: './',  // Relative base path
    build: {
        outDir: 'dist',  // Output directory
        emptyOutDir: true,
    },
});
