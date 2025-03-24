import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Debugging output paths
const basePath = './'; // ✅ Set base to './' to generate relative paths
const outDirectory = path.resolve(__dirname, 'dist');
const assetsDirectory = path.resolve(outDirectory, 'assets');

console.log('✅ Vite Config Loaded');
console.log('📁 Base Path:', basePath);
console.log('📂 Output Directory:', outDirectory);
console.log('📂 Assets Directory:', assetsDirectory);

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'], // Ensure `.jsx` is properly resolved
  },
  base: basePath, // ✅ Ensures relative paths in index.html
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: '[name]-[hash].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash][extname]',
      },
    },
  },
});
