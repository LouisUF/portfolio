// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // 👉  replace with your repo name
  base: '/portfolio/',
  plugins: [react()],
});

