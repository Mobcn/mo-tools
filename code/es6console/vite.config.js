import { defineConfig } from 'vite';
import importToCDN from 'vite-plugin-cdn-import';

export default defineConfig({
    base: './',
    publicDir: 'public',
    root: './',
    plugins: [
        importToCDN({
            modules: [
                {
                    name: '@babel/standalone',
                    var: 'Babel',
                    path: 'https://cdn.staticfile.net/babel-standalone/7.25.6/babel.min.js'
                }
            ]
        })
    ]
});
