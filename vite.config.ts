import { defineConfig } from 'vite';
import { resolve } from 'path';
import path from 'path';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        devtools: resolve(__dirname, 'src/devtools/devtools.html'),
        panel: resolve(__dirname, 'src/devtools/panel.html'),
        'console-vue-query-devtools-sdk': resolve(__dirname, 'src/sdk/console-vue-query-devtools-sdk.ts'),
        'content-script': resolve(__dirname, 'src/content/content-script.js'),
        injected: resolve(__dirname, 'src/content/injected.js'),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name.includes('content')) return 'content/[name].js';
          if (chunkInfo.name.includes('injected')) return 'content/[name].js';
          if (chunkInfo.name.includes('sdk')) return 'sdk/[name].js';
          return 'devtools/[name].js';
        },
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
  resolve: {
    alias: {
        '@': path.resolve(__dirname, './src'),
    },
},
});