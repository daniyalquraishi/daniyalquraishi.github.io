import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Debugging output paths
const basePath = '/daniyalquraishi.github.io/';
const outDirectory = path.resolve(__dirname, 'dist');
const assetsDirectory = path.resolve(__dirname, 'dist/assets');

console.log('✅ Vite Config Loaded');
console.log('📁 Base Path:', basePath);
console.log('📂 Output Directory:', outDirectory);
console.log('📂 Assets Directory:', assetsDirectory);

export default defineConfig({
  plugins: [react()],
  base: '/daniyalquraishi.github.io/', // ✅ Correct base for GitHub Pages

  build: {
    outDir: 'dist', // ✅ Keep output folder as `dist`
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
});
