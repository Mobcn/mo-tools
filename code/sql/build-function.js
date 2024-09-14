/**
 * 构建获取实际路径函数
 *
 * @param {string} mainPath 入口函数路径
 */
export const buildGetActualPathFunction = (mainPath) => {
    const isDev = new URL(mainPath).pathname.endsWith('main.js');
    return (path) => {
        if (path.startsWith('static/')) {
            path = new URL(path.replace('static/', isDev ? '../public/' : '../'), mainPath).pathname;
        } else if (path.startsWith('@/')) {
            path = path.replace('@/', '/src/');
        } else if (path === 'root') {
            path = new URL('../index.html', mainPath).pathname;
        }
        return path;
    };
};

/**
 * 构建获取动态组件函数
 */
export const buildGetAsyncComponentFunction = () => {
    const components = import.meta.glob('/src/**/*.vue');
    return (path) => components[path]().then((moudle) => moudle.default);
};