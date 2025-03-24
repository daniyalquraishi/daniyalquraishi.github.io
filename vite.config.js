import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/daniyalquraishi.github.io/', // ✅ Ensure correct base path for GitHub Pages
});
