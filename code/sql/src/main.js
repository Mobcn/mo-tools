import { createApp, defineAsyncComponent } from 'vue';
import ElementPlus from 'element-plus';
import { buildGetActualPathFunction, buildGetAsyncComponentFunction } from '../build-function.js';

import 'normalize.css';
import 'element-plus/dist/index.css';

const getActualPath = buildGetActualPathFunction(import.meta.url);
const getAsyncComponent = buildGetAsyncComponentFunction();

const vm = createApp(defineAsyncComponent(() => getAsyncComponent(getActualPath('@/App.vue'))));

vm.config.globalProperties.$getActualPath = getActualPath;
vm.config.globalProperties.$getAsyncComponent = getAsyncComponent;

vm.use(ElementPlus);

vm.mount('#app');
