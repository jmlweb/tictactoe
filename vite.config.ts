/// <reference types="vitest" />
import MillionLint from '@million/lint';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [mode !== 'test' && MillionLint.vite(), react()],
    test: {
      globals: true,
      environment: 'happy-dom',
    },
  };
});
