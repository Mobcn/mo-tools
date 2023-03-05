import { createApp, defineAsyncComponent } from 'vue';
import { buildGetActualPathFunction, buildGetAsyncComponentFunction } from '../build-function.js';

const getActualPath = buildGetActualPathFunction(import.meta.url);
const getAsyncComponent = buildGetAsyncComponentFunction();

const vm = createApp(defineAsyncComponent(() => getAsyncComponent(getActualPath('@/App.vue'))));

vm.config.globalProperties.$getActualPath = getActualPath;
vm.config.globalProperties.$getAsyncComponent = getAsyncComponent;

vm.mount('#app');
