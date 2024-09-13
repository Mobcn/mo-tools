/**
 * import配置
 *
 * @type {ImportSetting}
 */
const importSetting = {
    importToTag: {
        js: [
            // Tailwind CSS
            {
                moduleName: 'tailwind',
                varName: 'tailwind',
                url: './public/import/tailwind@3.2.6/index.js'
            },
            // decrypt
            {
                moduleName: 'decrypt',
                varName: 'decrypt',
                url: './public/import/decrypt/index.js',
                isExpose: false
            }
        ],
        css: []
    },

    importToESM: {
        // SolidJS
        'solid-js': 'https://npm.elemecdn.com/solid-js@1.6.13/dist/dev.js',
        'solid-js/web': 'https://npm.elemecdn.com/solid-js@1.6.13/web/dist/dev.js',

        // Browser Babel Solid
        'mo-browser-babel-solid': 'https://npm.elemecdn.com/mo-browser-babel-solid@1.0.1/mo-browser-babel-solid.min.js'
    }
};
(() => importSetting)();

/**
 * @typedef {Object} JSConfigItem 标签导入JS配置项
 * @property {string | undefined} moduleName ESM引入模块名
 * @property {string | undefined} varName 模块变量名
 * @property {string} url 标签导入JS地址
 * @property {boolean} isExpose 是否暴露全局变量
 */

/**
 * @typedef {string} CSSConfigItem 标签导入CSS地址
 */

/**
 * @typedef {Object} ImportToTag 标签导入配置
 * @property {JSConfigItem[]} js 标签导入JS配置
 * @property {CSSConfigItem[]} css 标签导入CSS配置
 */

/**
 * @typedef {string} ESModuleURL ESM导入地址
 */

/**
 * @typedef {{ [moduleName: string]: ESModuleURL }} ImportToESM ESM导入配置
 */

/**
 * @typedef {Object} ImportSetting 导入配置
 * @property {ImportToTag} importToTag 标签导入配置
 * @property {ImportToESM} importToESM ESM导入配置
 */
