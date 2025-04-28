import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ConsoleVueQueryDevtoolsSDK',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@console-vue-query-devtools/types/global': resolve(__dirname, '../types/global.d.ts'),
    },
  },
});