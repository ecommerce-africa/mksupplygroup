import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
          mui: ['@mui/material', '@emotion/react', '@emotion/styled'],
          i18n: ['i18next', 'react-i18next'],
        },
      },
    },
  },
});
