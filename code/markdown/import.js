/**
 * import setting
 */
(() => ({
    // tag setting
    importToTag: {
        js: [],
        css: [
            // Normalize 样式重置
            'https://cdn.staticfile.org/normalize/8.0.1/normalize.min.css'
        ]
    },

    // ESM setting
    importToESM: {
        // Vue3 SFC Loader
        'vue3-sfc-loader': 'https://npm.elemecdn.com/vue3-sfc-loader@0.8.4/dist/vue3-sfc-loader.esm.js',

        // Vue3
        vue: 'https://cdn.staticfile.org/vue/3.2.37/vue.esm-browser.prod.min.js',

        // MdEditor富文本插件
        'md-editor-v3': 'https://npm.elemecdn.com/md-editor-v3@2.3.0/lib/md-editor-v3.es.js',
        'md-editor-v3/lib/style.css': 'https://npm.elemecdn.com/md-editor-v3@2.3.0/lib/style.css'
    }
}))();
