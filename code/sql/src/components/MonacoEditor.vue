<template>
    <div ref="editorComponent" class="mo-monaco-editor" />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import GitHubTheme from '../assets/monaco-editor/theme/GitHub.json';
import SQLKeywords from '../assets/monaco-editor/languages/sql-keywords.json';

// 编辑器VS引入路径
const editorVS = 'https://cdn.staticfile.net/monaco-editor/0.36.1/min/vs';
// 编辑器Loader引入路径
const editorLoader = editorVS + '/loader.js';
// 异步导入monaco对象
const asyncMonacoEditor = fetch(editorLoader)
    .then((res) => res.text())
    .then((textJS) => {
        textJS = textJS.replace('var h=do', '//var h=do');
        textJS = textJS.replace('d(h)', 'd(h)\nfetch(r).then(d=>d.text()).then(t=>eval(t))');
        return eval(
            `new Promise((rev) => ({
                execFun: function () {
                    ${textJS};
                    this.require.config({paths:{vs:'${editorVS}'}});
                    this.require(['vs/editor/editor.main'],()=>rev(monaco));
                }
            }).execFun())`
        );
    });

// 参数
const props = defineProps({
    options: {
        type: Object,
        default: () => {}
    },
    code: {
        type: String,
        default: ''
    },
    height: {
        type: String,
        default: '100%'
    },
    width: {
        type: String,
        default: '100%'
    }
});

// 回调
const emits = defineEmits(['update:code']);

// 默认设置参数
const defaultOptions = {
    // 编辑器的值
    value: props.code,
    //语言
    language: 'javascript',
    // 编辑器主题：vs, hc-black, or vs-dark
    theme: 'GitHub',
    // 自动缩进
    autoIndent: true,
    // 是否只读
    readOnly: false,
    // 预览图
    minimap: {
        // 是否启用
        enabled: false
    }
};
// 编辑器组件
const editorComponent = ref();
// 编辑器对象
let monacoEditor;

/**
 * 编辑器设置
 */
const editorSetting = (monaco) => {
    // 空提示前缀
    const emptyPreffixs = [
        'database',
        'table',
        'view',
        'index',
        'into',
        'set',
        'distinct',
        'from',
        'join',
        'on',
        'where',
        'between',
        'like',
        'and',
        'or',
        'in',
        'order by',
        'group by',
        'having'
    ];
    // 默认提示
    const defaultSuggestions = SQLKeywords.map((item) => ({
        label: item,
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: item
    }));
    const getDefaultSuggestions = () => JSON.parse(JSON.stringify(defaultSuggestions));
    // SQL代码提示设置
    monaco.languages.registerCompletionItemProvider('sql', {
        provideCompletionItems: (model, position) => {
            const { lineNumber, column } = position;
            // 光标前文本
            const textBeforePointer = model.getValueInRange({
                startLineNumber: lineNumber,
                startColumn: 0,
                endLineNumber: lineNumber,
                endColumn: column
            });
            // 输入数组
            const tokens = textBeforePointer.trim().split(/\s+/);
            // 上一输入
            const preToken = tokens[tokens.length - 2]?.toLowerCase();

            return { suggestions: emptyPreffixs.includes(preToken) ? [] : getDefaultSuggestions() };
        }
    });
    // 编辑器主题
    monaco.editor.defineTheme('GitHub', GitHubTheme);
};

// 挂载后
onMounted(() =>
    asyncMonacoEditor.then((monaco) => {
        // 编辑器设置
        editorSetting(monaco);
        // 编辑器DOM元素
        const editorDOM = editorComponent.value;
        // 编辑器参数
        const options = Object.assign({}, defaultOptions, props.options);
        // 创建编辑器
        monacoEditor = monaco.editor.create(editorDOM, options);
        // 监听内容变化
        monacoEditor.onDidChangeModelContent(() => emits('update:code', monacoEditor.getValue()));
    })
);

defineExpose({
    /**
     * 获取选中文本
     *
     * @returns {string}
     */
    getSelection: () => monacoEditor.getModel().getValueInRange(monacoEditor.getSelection())
});
</script>

<style scoped>
.mo-monaco-editor {
    --mo-monaco-editor-height: v-bind(props.height);
    --mo-monaco-editor-width: v-bind(props.width);

    height: var(--mo-monaco-editor-height);
    width: var(--mo-monaco-editor-width);
    border: 1px solid #ddd;
}
</style>
