import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // ✅ Use relative paths
  resolve: {
    alias: {
      '@': '/src', // Optional: Shorter imports
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], // Ensure `.jsx` is included
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: './index.html', // Ensure it starts from index.html
      output: {
        format: 'es', // Ensure ES module format
        entryFileNames: '[name]-[hash].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash][extname]',
      },
    },
  },
});
