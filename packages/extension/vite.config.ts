import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
    plugins: [react(), vanillaExtractPlugin()],
    publicDir: './public',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        cssCodeSplit: false,
        rollupOptions: {
            input: {
                'devtools/main': resolve(__dirname, 'src/devtools/main.tsx'),
                'devtools/devtools': resolve(__dirname, 'src/devtools/devtools.ts'),
                'content/content-script': resolve(__dirname, 'src/content/content-script.ts'),
                'content/injected': resolve(__dirname, 'src/content/injected.ts'),
            },
            output: {
                entryFileNames: (chunkInfo) => {
                    if (chunkInfo.name.includes('content')) return '[name].js';
                    if (chunkInfo.name.includes('injected')) return '[name].js';
                    return '[name].js';
                },
                chunkFileNames: 'chunks/[name].[hash].js',
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name && assetInfo.name.endsWith('.css')) {
                        return 'assets/styles.css';
                    }
                    return 'assets/[name].[hash].[ext]';
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
});
