<template>
    <div class="create-file-dialog">
        <mo-dialog
            v-if="dialogVisible"
            title="新建文件"
            width="350px"
            @cancel="dialogVisible = false"
            @comfirm="comfirmHandle"
        >
            <div class="create-file-dialog__item">
                <label class="create-file-dialog__label">目录</label>
                <mo-input v-model="dirName" :readonly="true" @click="openDirHandle" />
            </div>
            <div class="create-file-dialog__item">
                <label class="create-file-dialog__label">文件名</label>
                <mo-input v-model="fileName" @keyup.enter.native="comfirmHandle" />
            </div>
        </mo-dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import MoDialog from '@/components/MoDialog.vue';
import MoInput from '@/components/MoInput.vue';
import { createFile, openDirectoryPicker } from '@/utils/mo-file-system.mjs.js';

// 回调
const emits = defineEmits(['comfirm']);

// 对话框是否显示
const dialogVisible = ref(false);

// 目录句柄
const dirHandle = ref(null);
// 目录名
const dirName = ref('');
// 文件名
const fileName = ref('');

/**
 * 对话框初始化
 */
const init = () => {
    clear();
    dialogVisible.value = true;
};

/**
 * 打开目录事件
 */
const openDirHandle = async () => {
    const openDirHandle = await openDirectoryPicker();
    if (openDirHandle) {
        dirHandle.value = openDirHandle;
        dirName.value = openDirHandle.name;
    }
};

/**
 * 确定事件
 */
const comfirmHandle = async () => {
    if (dirName.value === '') {
        alert('请选择目录！');
    } else if (fileName.value.trim() === '') {
        alert('请输入文件名！');
    } else {
        let newFileName = fileName.value.trim();
        if (!newFileName.endsWith('.md')) {
            newFileName += '.md';
        }
        const newFileHandle = await createFile(dirHandle.value, newFileName);
        if (newFileHandle) {
            emits('comfirm', newFileHandle, dialogVisible);
        } else {
            alert('创建文件失败！');
        }
    }
};

/**
 * 清空数据
 */
const clear = () => {
    dirName.value = '';
    fileName.value = '';
    dirHandle.value = null;
};

defineExpose({ init });
</script>

<style scoped>
.create-file-dialog__item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 0 18px 0;
}

.create-file-dialog__label {
    display: inline-block;
    width: 60px;
    margin: 0 12px 0 0;
    text-align: right;
}

.create-file-dialog__label::before {
    margin: 0 5px 0 0;
    content: '*';
    color: red;
}
</style>
