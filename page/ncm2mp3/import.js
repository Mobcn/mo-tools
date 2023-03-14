/**
 * import setting
 */
(() => ({
    // tag setting
    importToTag: {
        js: {
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

        // Browser Babel Solid
        'mo-browser-babel-solid': 'https://npm.elemecdn.com/mo-browser-babel-solid@1.0.0/mo-browser-babel-solid.min.js'
    }
}))();
