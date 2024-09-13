import BaseElement from '../base/BaseElement.js';
import MoEditor from '../utils/mo-editor.js';

/**
 * ES6 编辑器组件
 */
class ESEditor extends BaseElement {
    static properties = ['width', 'height', 'value', 'readonly', 'sx'];

    // 编辑器实例
    editorInstance = null;

    watchAttribute() {
        return {
            // 值
            value: (newValue) => {
                this.editorInstance?.setValue(newValue);
            },
            // 宽
            width: (newValue) => {
                this.addStyle(`:host{width:${newValue}}`);
                this.editorInstance?.layout();
            },
            // 高
            height: (newValue) => {
                this.addStyle(`:host{height:${newValue}}`);
                this.editorInstance?.layout();
            },
            // 样式
            sx: (newValue) => {
                this.addStyle(`:host{${newValue}}`);
                this.editorInstance?.layout();
            },
            // 只读
            readonly: (newValue) => {
                this.editorInstance?.updateOptions({ readOnly: newValue != null });
            }
        };
    }

    connectedCallback() {
        MoEditor.create(
            this,
            {
                value: this.getAttribute('value'),
                language: 'javascript',
                minimap: {
                    enabled: false
                },
                theme: 'vs-dark',
                readOnly: this.getAttribute('readonly') != null
            },
            null,
            (editorInstance) => {
                // 设置当前编辑器实例
                this.editorInstance = editorInstance;
                // 编辑器内容修改监听
                this.editorInstance.onDidChangeModelContent(() => {
                    this.value = this.editorInstance.getValue();
                });
            }
        );
    }
}

export default ESEditor;
