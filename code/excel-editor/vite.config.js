import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    publicDir: 'public',
    root: './',
    build: {
        outDir: 'dist',
        rollupOptions: {
            output: {
                manualChunks: {
                    'x-data-spreadsheet': ['x-data-spreadsheet'],
                    luckyexcel: ['luckyexcel'],
                    xlsx: ['./src/js/xlsx.js']
                }
            }
        }
    }
});
