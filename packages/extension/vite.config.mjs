import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    plugins: [vue(), tailwindcss()],
    publicDir: './public',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                'devtools/main': path.resolve(__dirname, 'src/devtools/main.ts'),
                'devtools/devtools': path.resolve(__dirname, 'src/devtools/devtools.ts'),
                'content/content-script': path.resolve(__dirname, 'src/content/content-script.ts'),
                'content/injected': path.resolve(__dirname, 'src/content/injected.ts'),
            },
            output: {
                entryFileNames: (chunkInfo) => {
                    console.log('[Vite] entryFileNames', chunkInfo);
                    if (chunkInfo.name.includes('content')) return '[name].js';
                    if (chunkInfo.name.includes('injected')) return '[name].js';
                    return '[name].js';
                },
                chunkFileNames: 'chunks/[name].[hash].js',
                assetFileNames: (assetInfo) => {
                    console.log('[Vite] assetFileNames', assetInfo);
                    if (assetInfo.name.endsWith('.css')) {
                        return 'assets/[name].[ext]';
                    }
                    return 'assets/[name].[hash].[ext]';
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@content': path.resolve(__dirname, './src/content'),
            '@devtools': path.resolve(__dirname, './src/devtools'),
            '@console-vue-query-devtools-sdk/src/global': path.resolve(
                __dirname,
                '../sdk/src/global.d.ts'
            ),
        },
    },
});
