import { createApp, defineAsyncComponent } from 'vue';
import ElementPlus from 'element-plus';
import { buildGetActualPathFunction, buildGetAsyncComponentFunction } from '../build-function.js';

// 引入monaco-editor
require.config({ paths: { vs: 'https://cdn.staticfile.org/monaco-editor/0.36.1/min/vs' } });
const asyncMonacoEditor = new Promise((rev) => require(['vs/editor/editor.main'], () => rev(monaco)));

const getActualPath = buildGetActualPathFunction(import.meta.url);
const getAsyncComponent = buildGetAsyncComponentFunction({ 'async-monaco-editor': asyncMonacoEditor, alasql });

const vm = createApp(defineAsyncComponent(() => getAsyncComponent(getActualPath('@/App.vue'))));

vm.config.globalProperties.$getActualPath = getActualPath;
vm.config.globalProperties.$getAsyncComponent = getAsyncComponent;

vm.use(ElementPlus);

vm.mount('#app');
