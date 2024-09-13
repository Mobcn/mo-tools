fetch('./import.js').then(async (res) => {
    const { importToTag, importToESM } = eval(await res.text());

    const head = document.getElementsByTagName('head')[0];

    // import css by tag
    for (const url of importToTag.css) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        head.appendChild(link);
    }

    // import js by tag
    for (const url of importToTag.js) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = false;
        script.src = url;
        head.appendChild(script);
    }

    const body = document.getElementsByTagName('body')[0];

    // set importmap
    const importMapScript = document.createElement('script');
    importMapScript.type = 'importmap';
    importMapScript.textContent = JSON.stringify({ imports: importToESM });
    body.appendChild(importMapScript);

    // loading main.js
    const mainScript = document.createElement('script');
    mainScript.type = 'module';
    mainScript.src = './src/main.js';
    body.appendChild(mainScript);
});
