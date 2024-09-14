import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import importToCDN from 'vite-plugin-cdn-import';

export default defineConfig({
    base: './',
    publicDir: 'public',
    root: './',
    plugins: [
        vue(),
        importToCDN({
            modules: [
                {
                    name: 'alasql',
                    var: 'alasql',
                    path: 'https://cdn.staticfile.net/alasql/3.1.0/alasql.min.js'
                }
            ]
        })
    ]
});
