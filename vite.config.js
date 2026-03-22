import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react({ include: /\.(js|jsx|ts|tsx)$/ })],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    exclude: [],
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      Context: path.resolve(__dirname, 'src/Context'),
      algorithms: path.resolve(__dirname, 'src/algorithms'),
      algorithmAnimation: path.resolve(__dirname, 'src/algorithmAnimation'),
    },
  },
  appType: 'spa',
});
