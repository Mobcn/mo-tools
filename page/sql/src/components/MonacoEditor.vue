<template>
    <div ref="editorComponent" class="mo-monaco-editor" />
</template>

<script setup>
import { defineEmits, defineProps, onMounted, ref } from 'vue';
import monaco from 'monaco-editor';
import GitHubTheme from '../theme/monaco-theme/GitHub.json';

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

// 挂载后
onMounted(() => {
    // 编辑器DOM元素
    const editorDOM = editorComponent.value;
    // 编辑器参数
    const options = Object.assign({}, defaultOptions, props.options);
    // 编辑器主题
    monaco.editor.defineTheme('GitHub', GitHubTheme);
    // 创建编辑器
    const monacoEditor = monaco.editor.create(editorDOM, options);
    // 监听内容变化
    monacoEditor.onDidChangeModelContent(() => emits('update:code', monacoEditor.getValue()));
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
