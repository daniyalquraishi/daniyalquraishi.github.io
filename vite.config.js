import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/daniyalquraishi.github.io/',
    server: {
        open: true,
    },
});
