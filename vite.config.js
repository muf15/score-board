import { defineConfig } from 'vite';
import html from '@rollup/plugin-html';

export default defineConfig({
  plugins: [
    html()
  ],
  build: {
    rollupOptions: {
      input: {
        index: 'src/index.js'
      }
    }
  }
});
