import ESEditor from './components/ESEditor.js';
import Babel from 'babel-standalone';

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
                    console.log(111);
                    clearInterval(delayInterval);
                    try {
                        const babelCode = Babel.transform(input.value, { presets: ['env'] }).code;
                        output.setAttribute('value', babelCode);
                    } catch (error) {}
                }
            }, delayTime);
        }
        execBabelTime = Date.now() + delayTime;
    });
}
