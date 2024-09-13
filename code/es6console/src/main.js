import ESEditor from './components/ESEditor.js';
import { transform } from '@babel/standalone';

import 'normalize.css';
import './styles/index.css';

// 自定义标签
window.customElements.define('es-editor', ESEditor);

const [input, output] = document.querySelectorAll('es-editor');

// 等待编辑器加载
const loadInterval = setInterval(() => {
    if (input.editorInstance) {
        clearInterval(loadInterval);
        transformByBabel(1000);
    }
}, 100);

/**
 * babel转换
 *
 * @param {number} delayTime 转换延时（停止输入后 delayTime 毫秒后执行转换）
 */
function transformByBabel(delayTime) {
    let execBabelTime = Date.now() + delayTime;
    input.editorInstance.onDidChangeModelContent(() => {
        if (execBabelTime <= Date.now()) {
            const delayInterval = setInterval(() => {
                if (execBabelTime <= Date.now()) {
                    clearInterval(delayInterval);
                    try {
                        const babelCode = transform(input.value, { presets: ['env', 'react'] }).code;
                        output.setAttribute('value', babelCode);
                    } catch (error) {}
                }
            }, delayTime);
        }
        execBabelTime = Date.now() + delayTime;
    });
}
