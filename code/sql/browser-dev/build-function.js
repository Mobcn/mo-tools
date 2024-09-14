import { loadModule } from 'vue3-sfc-loader';

const { importToESM } = await fetch('./import.js').then(async (res) => eval(await res.text()));

let getActualPath;

/**
 * get actual path function builder
 *
 * @param {string} mainPath main.js import path
 */
export const buildGetActualPathFunction = (mainPath) => {
    const isDev = new URL(mainPath).pathname.endsWith('main.js');
    getActualPath = (path) => {
        path = importToESM[path] || path;
        if (path.startsWith('static/')) {
            path = new URL(path.replace('static/', isDev ? '../public/' : '../'), mainPath).pathname;
        } else if (path.startsWith('@/')) {
            path = new URL(path.replace('@/', './'), mainPath).pathname;
        } else if (path === 'root') {
            path = new URL('../index.html', mainPath).pathname;
        }
        return path;
    };
    return getActualPath;
};

/**
 * get async component function builder
 *
 * @param {any} modules initialize modules
 */
export const buildGetAsyncComponentFunction = (modules) => {
    if (!getActualPath) {
        throw new Error('getActualPath function is not build, please call the buildGetActualPathFunction function!');
    }

    const moduleCache = modules || {};

    /**
     * get file function
     *
     * @param {string} path path
     */
    const getFile = async (path) => {
        let isModuleJS = false;
        let getContentData;
        if (importToESM[path] && !path.endsWith('.css')) {
            getContentData = async () => Object.assign({ __esModule: true }, await import(path));
            isModuleJS = true;
        } else {
            const res = await fetch(getActualPath(path));
            if (!res.ok) {
                throw Object.assign(new Error(res.statusText + ' ' + path), { res });
            }
            getContentData = (asBinary) => (asBinary ? res.arrayBuffer() : res.text());
            isModuleJS = path.endsWith('.mjs.js');
        }
        return isModuleJS ? { getContentData, type: '.mjs' } : { getContentData };
    };

    /**
     * add style function
     *
     * @param {string} textContent file text content
     */
    const addStyle = (textContent) => {
        const style = Object.assign(document.createElement('style'), { textContent });
        const ref = document.head.getElementsByTagName('style')[0] || null;
        document.head.insertBefore(style, ref);
    };

    /**
     * module handle function
     *
     * @param {string} type file type
     * @param {Function} getContentData get file content
     * @param {string} path file path
     * @param {any} options options
     */
    const handleModule = async (type, getContentData, path, options) => {
        switch (type) {
            case '.mjs':
                if (importToESM[path]) {
                    return await getContentData();
                }
                break;
            case '.css':
                options.addStyle(await getContentData(false));
                return null;
            case '.json':
                return JSON.parse(await getContentData(false));
            case '.png':
            case '.jpg':
            case '.jpeg':
            case '.gif':
                return path;
        }
    };

    return (path) => loadModule(path, { moduleCache, getFile, addStyle, handleModule });
};
