const globaleProperties = {};

/**
 * get Vue Instance
 *
 * @param {string} appId vue app ID
 */
const getVueApp = (appId = 'app') => {
    const appElement = document.getElementById(appId);
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            try {
                if (appElement.__vue_app__) {
                    clearInterval(interval);
                    resolve(appElement.__vue_app__);
                }
            } catch (error) {
                clearInterval(interval);
                reject(error);
            }
        }, 1);
    });
};

Object.defineProperty(globaleProperties, 'get', {
    value: async (name) => {
        const app = await getVueApp();
        return app.config.globalProperties[`$${name}`];
    }
});

export default globaleProperties;
