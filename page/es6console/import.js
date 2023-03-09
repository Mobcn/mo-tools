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
            }
        },
        css: [
            // Normalize
            'https://cdn.staticfile.org/normalize/8.0.1/normalize.min.css'
        ]
    },

    // ESM setting
    importToESM: {}
}))();
