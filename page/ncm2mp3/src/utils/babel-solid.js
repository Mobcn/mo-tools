// JSX转换插件导入地址
const TRANSFORM_JSX_URL = './transform-jsx.js';

/**
 * Bable注册Solid
 *
 * @param {Object} Babel Babel对象
 * @param {(resolveJSX: (url: string) => Promise<string>) => void} callback 回调
 */
export const registerSolid = (Babel, callback) => {
    // 导入JSX转换插件
    import(TRANSFORM_JSX_URL)
        .then(({ default: plugin }) => plugin)
        .then((jsxTransformPlugin) => {
            /**
             * Solid预设
             */
            function solidPreset(context, options = {}) {
                const plugins = [
                    [
                        () => Object.assign(jsxTransformPlugin(), { inherits: Babel.availablePlugins['syntax-jsx'] }),
                        Object.assign(
                            {
                                moduleName: 'solid-js/web',
                                builtIns: [
                                    'For',
                                    'Show',
                                    'Switch',
                                    'Match',
                                    'Suspense',
                                    'SuspenseList',
                                    'Portal',
                                    'Index',
                                    'Dynamic',
                                    'ErrorBoundary'
                                ],
                                contextToCustomElements: true,
                                wrapConditionals: true,
                                generate: 'dom'
                            },
                            options
                        )
                    ]
                ];
                return {
                    plugins
                };
            }

            /**
             * import地址替换插件
             */
            const replaceImportPlugin = () => {
                return {
                    name: 'http-import-replace',
                    visitor: {
                        ImportDeclaration: (path, { opts }) => {
                            const { currentURL, promiseArr } = opts;
                            const url = path.node.source.value;
                            if (url.startsWith('./') || url.startsWith('../') || url.startsWith('/')) {
                                let newURL = new URL(url, currentURL).href;
                                path.node.source.value = newURL;
                                if (newURL.endsWith('.jsx')) {
                                    // 解析JSX文件地址异步数组添加
                                    promiseArr.push(resolveJSX(newURL).then((resolveURL) => [newURL, resolveURL]));
                                }
                            }
                        }
                    }
                };
            };

            // 注册JSX转换插件
            Babel.registerPlugin('transform-jsx', jsxTransformPlugin);
            // 注册import地址替换插件
            Babel.registerPlugin('http-import-replace', replaceImportPlugin);
            // 注册Solid预设
            Babel.registerPreset('solid', solidPreset);

            /**
             * 处理JSX文件
             *
             * @param {string} url JSX文件地址
             * @returns {Promise<string>} JSX文件解析生成文件新地址
             */
            const resolveJSX = (() => {
                /**
                 * 地址映射缓存
                 *
                 * @type {{ [srcURL: string]: string }}
                 */
                const cacheMappingURL = {};
                /**
                 * @param {string} url JSX文件地址
                 * @returns {Promise<string>} JSX文件解析生成文件新地址
                 */
                return (url) => {
                    if (cacheMappingURL[url]) {
                        return Promise.resolve(cacheMappingURL[url]);
                    }
                    return fetch(url)
                        .then((res) => res.text())
                        .then((text) => {
                            /**
                             * 处理JSX文件异步数组
                             *
                             * @type {[string, string][]}
                             */
                            const promiseArr = [];
                            const presets = ['solid'];
                            const plugins = [['http-import-replace', { currentURL: url, promiseArr }]];
                            let code = Babel.transform(text, { presets, plugins }).code;
                            return Promise.all(promiseArr).then((resList) => {
                                for (const [srcURL, desURL] of resList) {
                                    // 解析地址替换
                                    code = code.replaceAll(srcURL, desURL);
                                }
                                return URL.createObjectURL(new Blob([code], { type: 'text/javascript' }));
                            });
                        });
                };
            })();

            // 回调
            callback(resolveJSX);
        });
};
