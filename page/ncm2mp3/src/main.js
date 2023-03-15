import { render } from 'solid-js/web';
import { resolveJSX } from 'mo-browser-babel-solid';
import tailwind from 'tailwind';

// tailwind配置
tailwind.config = {};

(async () => {
    const url = await resolveJSX(new URL('./App.jsx', import.meta.url).href);
    const { default: component } = await import(url);
    render(component, document.getElementById('app'));
})();
