import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    publicDir: './public',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                'devtools/main': resolve(__dirname, 'src/devtools/main.ts'),
                'devtools/devtools': resolve(__dirname, 'src/devtools/devtools.ts'),
                'content/content-script': resolve(__dirname, 'src/content/content-script.ts'),
                'content/injected': resolve(__dirname, 'src/content/injected.ts'),
            },
            output: {
                entryFileNames: (chunkInfo) => {
                    console.log('[Vite] entryFileNames', chunkInfo);
                    if (chunkInfo.name.includes('content')) return '[name].js';
                    if (chunkInfo.name.includes('injected')) return '[name].js';
                    return '[name].js';
                },
                chunkFileNames: 'chunks/[name].[hash].js',
                assetFileNames: 'assets/[name].[hash].[ext]',
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
