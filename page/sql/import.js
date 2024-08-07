/**
 * import setting
 */
(() => ({
    // tag setting
    importToTag: {
        js: [
            // AlaSQL
            'https://cdn.staticfile.net/alasql/3.1.0/alasql.min.js',
            // Monaco Editor
            'https://cdn.staticfile.net/monaco-editor/0.36.1/min/vs/loader.min.js',
        ],
        css: [
            // Normalize
            'https://cdn.staticfile.net/normalize/8.0.1/normalize.min.css',
            // Element Plus样式
            'https://cdn.staticfile.net/element-plus/2.2.18/index.css'
        ]
    },

    // ESM setting
    importToESM: {
        // Vue3 SFC Loader
        'vue3-sfc-loader': 'https://npm.elemecdn.com/vue3-sfc-loader@0.8.4/dist/vue3-sfc-loader.esm.js',

        // Vue3
        vue: 'https://cdn.staticfile.net/vue/3.2.37/vue.esm-browser.prod.min.js',

        // Element Plus
        'element-plus': 'https://cdn.staticfile.net/element-plus/2.2.18/index.full.min.mjs',
        'element-plus/': 'https://npm.elemecdn.com/element-plus@2.2.18/',
        '@element-plus/icons-vue': 'https://cdn.staticfile.net/element-plus-icons-vue/2.0.10/index.min.js'
    }
}))();
