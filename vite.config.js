import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    root: '.',  // Ensure Vite looks for index.html in root
    base: '/daniyalquraishi.github.io/',
    build: {
        outDir: 'dist', 
        emptyOutDir: true,
    },
});
