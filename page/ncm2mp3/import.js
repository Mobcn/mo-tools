/**
 * import setting
 */
(() => ({
    // tag setting
    importToTag: {
        js: {
            // Babel
            'babel-standalone': {
                varName: 'Babel',
                url: 'https://cdn.staticfile.org/babel-standalone/7.21.2/babel.min.js'
            },
            // decrypt
            decrypt: {
                varName: 'decrypt',
                url: './src/utils/decrypt.js'
            }
        },
        css: [
            // Tailwind CSS
            './src/styles/tailwind.css'
        ]
    },

    // ESM setting
    importToESM: {
        // SolidJS
        'solid-js': 'https://npm.elemecdn.com/solid-js@1.6.13/dist/dev.js',
        'solid-js/web': 'https://npm.elemecdn.com/solid-js@1.6.13/web/dist/dev.js',
    }
}))();
