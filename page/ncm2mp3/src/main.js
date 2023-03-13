import { render } from 'solid-js/web';
import { registerSolid } from './utils/babel-solid.js';
import Babel from 'babel-standalone';

registerSolid(Babel, async (resolveJSX) => {
    const url = await resolveJSX(new URL('./App.jsx', import.meta.url).href);
    const { default: component } = await import(url);
    render(component, document.getElementById('app'));
});
