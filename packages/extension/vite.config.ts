import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    publicDir: './public',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                panel: resolve(__dirname, 'src/devtools/panel.ts'),
                devtools: resolve(__dirname, 'src/devtools/devtools.ts'),
                'content-script': resolve(__dirname, 'src/content/content-script.ts'),
                injected: resolve(__dirname, 'src/content/injected.ts'),
            },
            output: {
                entryFileNames: (chunkInfo) => {
                    console.log('[Vite] entryFileNames', chunkInfo);
                    if (chunkInfo.name.includes('content')) return 'content/[name].js';
                    if (chunkInfo.name.includes('injected')) return 'content/[name].js';
                    return 'devtools/[name].js';
                },
                chunkFileNames: '[name].js',
                assetFileNames: '[name].[ext]',
            },
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            '@content': resolve(__dirname, './src/content'),
            '@devtools': resolve(__dirname, './src/devtools'),
            '@console-vue-query-devtools-sdk/src/global': resolve(
                __dirname,
                '../sdk/src/global.d.ts'
            ),
            '@console-vue-query-devtools/eslint-config-custom/extension': resolve(
                __dirname,
                '../eslint-config-custom/extension.js'
            ),
        },
    },
});
