fetch('./import.js').then(async (res) => {
    const { importToTag, importToESM } = eval(await res.text());

    const head = document.getElementsByTagName('head')[0];
    const body = document.getElementsByTagName('body')[0];
    const loadArray = [];

    // import css by tag
    for (const url of importToTag.css) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        head.appendChild(link);
    }

    // import js by tag
    for (const moduleName in importToTag.js) {
        loadArray.push(
            new Promise((rev) => {
                const { varName, url } = importToTag.js[moduleName];
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = url;
                script.onload = () => rev();
                body.appendChild(script);
                // add to ESM
                const blob = new Blob([`export default globalThis['${varName}'];`], { type: 'text/javascript' });
                importToESM[moduleName] = URL.createObjectURL(blob);
            })
        );
    }

    // set importmap
    const importMapScript = document.createElement('script');
    importMapScript.type = 'importmap';
    importMapScript.textContent = JSON.stringify({ imports: importToESM });
    body.appendChild(importMapScript);

    // wait for script to load
    await Promise.all(loadArray);

    // loading main.js
    const mainScript = document.createElement('script');
    mainScript.type = 'module';
    mainScript.src = './src/main.js';
    body.appendChild(mainScript);
});
