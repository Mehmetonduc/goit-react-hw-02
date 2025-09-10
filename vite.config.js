import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages için base ayarı
export default defineConfig({
  base: '/goit-react-hw-02/',
  plugins: [react()],
});
