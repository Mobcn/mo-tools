<template>
    <div class="markdown_editor">
        <md-editor-v3 class="markdown_editor__content" v-model="content" :toolbars="toolbars" @on-save="saveHandle">
            <template #defToolbars>
                <normal-toolbar title="打开" @on-click="openFileHandle">
                    <template #trigger>
                        <svg class="md-icon" aria-hidden="true">
                            <use xlink:href="../assets/icon/mo-icon.svg#mo-open-file" />
                        </svg>
                    </template>
                </normal-toolbar>
            </template>
        </md-editor-v3>
        <create-file-dialog ref="createFileDialogComponent" @comfirm="comfirmHandle" />
    </div>
</template>

<script setup>
import CreateFileDialog from './components/CreateFileDialog.vue';
import { ref } from 'vue';
import { openFilePicker, readFileHandle, write } from '@/utils/mo-file-system.mjs.js';
import MdEditorV3 from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const { NormalToolbar } = MdEditorV3;

// 工具栏
const toolbars = [
    'bold',
    'underline',
    'italic',
    'strikeThrough',
    '-',
    'title',
    'sub',
    'sup',
    'quote',
    'unorderedList',
    'orderedList',
    'task',
    '-',
    'codeRow',
    'code',
    'link',
    'image',
    'table',
    'mermaid',
    'katex',
    '-',
    'revoke',
    'next',
    0,
    'save',
    '=',
    'prettier',
    'pageFullscreen',
    'fullscreen',
    'preview',
    'htmlPreview',
    'catalog',
    'github'
];

// 文件句柄
const fileHandle = ref(null);
// 文本内容
const content = ref('');

// 新建文件对话框
const createFileDialogComponent = ref();
const callback = () => {
    console.log('111');
};
/**
 * 打开文件事件
 */
const openFileHandle = async () => {
    fileHandle.value = await openFilePicker();
    if (fileHandle.value) {
        content.value = await readFileHandle(fileHandle.value);
    }
};

/**
 * 保存文件事件
 */
const saveHandle = async () => {
    if (fileHandle.value) {
        // 写入文件
        write(fileHandle.value, content.value, false);
    } else {
        // 打开新建文件对话框
        createFileDialogComponent.value.init();
    }
};

/**
 * 确认事件
 *
 * @param {any} newFileHandle 新建文件句柄
 * @param {any} dialogVisible 对话框是否显示
 */
const comfirmHandle = async (newFileHandle, dialogVisible) => {
    fileHandle.value = newFileHandle;
    await saveHandle();
    dialogVisible.value = false;
};
</script>

<style scoped>
.markdown_editor {
    height: 100vh;
}

.markdown_editor__content {
    height: 100%;
}

.markdown_editor__content >>> .markdown_editor__icon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.markdown_editor__content >>> .markdown_editor__icon-img {
    width: 14px;
    height: 14px;
}
</style>
