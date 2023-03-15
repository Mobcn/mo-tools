fetch('./import.js').then(async (res) => {
    /** @type {ImportSetting} */
    const { importToTag, importToESM } = eval(await res.text());

    // 标签导入CSS
    for (const url of importToTag.css) {
        addLink({ href: url });
    }

    // 标签导入JS
    let waitCount = 0;
    let isWait = false;
    document.body['__module_var__'] = {};
    for (const { moduleName, varName, url, isExpose } of importToTag.js) {
        let onload;
        if (varName) {
            if (moduleName) {
                // 添加到ESM
                const code = `export default document.body['__module_var__']['${varName}'];`;
                const blob = new Blob([code], { type: 'text/javascript' });
                importToESM[moduleName] = URL.createObjectURL(blob);
                ++waitCount && (isWait = true);
            }
            onload = () => {
                document.body['__module_var__'][varName] = globalThis[varName];
                isExpose === false && delete globalThis[varName];
                moduleName && execMain();
            };
        }
        addScript({ src: url, onload });
    }

    // 设置importmap
    addScript({ type: 'importmap', text: JSON.stringify({ imports: importToESM }) });

    // 执行主函数
    !isWait && execMain();

    /**
     * 添加Link标签
     */
    function addLink({ href, rel = 'stylesheet' }) {
        const link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        document.head.appendChild(link);
    }

    /**
     * 添加Script标签
     */
    function addScript({ src, text, type = 'text/javascript', onload }) {
        const script = document.createElement('script');
        script.type = type;
        src && (script.src = src);
        text && (script.textContent = text);
        onload && (script.onload = onload);
        document.body.appendChild(script);
    }

    /**
     * 执行主函数
     */
    function execMain() {
        --waitCount <= 0 && addScript({ src: './src/main.js', type: 'module' });
    }
});
