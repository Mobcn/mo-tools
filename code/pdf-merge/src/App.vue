<template>
    <div ref="mergeRef" class="w-full flex justify-center mt-5 gap-2">
        <el-card class="w-85 h-180">
            <el-scrollbar class="h-175 px-2">
                <el-tree :data="mergeTreeData" :props="{ label: 'label' }" empty-text="没有合并的文件">
                    <template #default="{ node, data }">
                        <div class="flex-1 flex justify-between items-center">
                            <span>{{ node.label }}</span>
                            <div class="h-full w-16 mr-2 flex justify-center items-center gap-1 text-blue-500 text-4">
                                <span @click="preview(data.index)">预览</span>
                                <span @click="download(data.index)">下载</span>
                            </div>
                        </div>
                    </template>
                </el-tree>
            </el-scrollbar>
        </el-card>
        <el-card class="w-200 h-180">
            <div class="mb-2">
                <el-button type="primary" @click="mergePdf" :disabled="files.length === 0">合并PDF</el-button>
                <el-button type="danger" @click="files = []" :disabled="files.length === 0">清空</el-button>
            </div>
            <el-upload
                v-model:file-list="fileList"
                :auto-upload="false"
                :show-file-list="false"
                accept="application/pdf,application/x-zip-compressed"
                drag
                multiple
            >
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">拖拽文件到此处 或 <em>点击选择文件</em></div>
            </el-upload>
            <div class="px-2 mt-2 text-right">共 {{ files.length }} 个文件</div>
            <el-scrollbar class="h-100 px-2.5 mt-2 b-1 b-dashed b-gray-200 overflow-auto rounded-1">
                <el-tree
                    ref="treeRef"
                    :data="treeData"
                    :props="{ label: 'label' }"
                    empty-text="没有待合并的文件"
                    draggable
                    :allow-drop="(_node1: any, _node2: any, type: string) => type !== 'inner'"
                    @node-drag-over="handleDragOver"
                    @node-drag-end="handleDragEnd"
                >
                    <template #default="{ node, data }">
                        <div class="flex-1 flex justify-between items-center">
                            <span>{{ node.label }}</span>
                            <div
                                class="h-full w-6 mr-1 flex justify-center items-center text-red-500 bg-red-4 bg-op-10"
                                @click="files.splice(data.index, 1)"
                            >
                                <span class="text-4">x</span>
                            </div>
                        </div>
                    </template>
                </el-tree>
            </el-scrollbar>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import { UploadFilled } from '@element-plus/icons-vue';
import { ElLoading, ElMessage } from 'element-plus';
import JSZip from 'jszip';
import { PDFDocument } from 'pdf-lib';
import type { UploadUserFile } from 'element-plus';

const treeRef = ref<HTMLDivElement>();
const mergeRef = ref<HTMLDivElement>();
const fileList = ref<UploadUserFile[]>([]);
const files = ref<File[]>([]);
const treeData = computed<{ label: string; index: number }[]>(() =>
    files.value.map((file, index) => ({ label: file.name, index }))
);
const mergeFiles = ref<File[]>([]);
const mergeTreeData = computed<{ label: string; index: number }[]>(() =>
    mergeFiles.value.map((file, index) => ({ label: file.name, index }))
);

const zipMimeTypes = ['application/x-zip-compressed', 'application/zip', 'application/x-zip'];
watchEffect(async () => {
    if (fileList.value.length) {
        files.value = [];
        for (const file of fileList.value) {
            if (zipMimeTypes.includes(file.raw!.type)) {
                const zipFiles = await unzip(file.raw!);
                files.value.push(...zipFiles);
            } else {
                file.raw!.type === 'application/pdf' && files.value.push(file.raw!);
            }
        }
        fileList.value = [];
    }
});

function unzip(zipFile: File): Promise<File[]> {
    const options = {
        decodeFileName: (bytes: Buffer | Uint8Array | string[]) => new TextDecoder('gbk').decode(<Buffer>bytes)
    };
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = async (event) => {
            const jsZip = await JSZip.loadAsync(event.target!.result!, options);
            const files = jsZip.files;
            const pdfFiles: File[] = [];
            const pdfMap: Map<string, File[]> = new Map();
            for (const fileName in files) {
                const file = files[fileName];
                if (file.dir || !file.name.endsWith('.pdf')) {
                    continue;
                }
                const blob = await file.async('blob');
                const newFileName = fileName.split('/').pop()!;
                const regArr = /([0-9]+)(铺|号|座)/.exec(newFileName);
                let key;
                if (regArr?.length) {
                    key = `${regArr[2]}${regArr[1].padStart(5, '0')}`;
                } else {
                    key = newFileName;
                }
                const arr = pdfMap.get(key) || [];
                arr.push(new File([blob], newFileName, { type: 'application/pdf' }));
                pdfMap.set(key, arr);
            }
            if (pdfMap.size) {
                for (const key of [...pdfMap.keys()].sort()) {
                    pdfFiles.push(...pdfMap.get(key)!);
                }
            }
            resolve(pdfFiles);
        };
        reader.onerror = (event) => reject(event.target!.error);
        reader.readAsArrayBuffer(zipFile);
    });
}

async function mergePdf() {
    if (!files.value.length) {
        ElMessage.warning('没有待合并的文件');
        return;
    }
    // 创建一个新的PDF文档
    const mergedPdf = await PDFDocument.create();
    // 遍历文件
    for (let i = 0; i < files.value.length; i++) {
        const file = files.value[i];
        const flieBuffer = await file.arrayBuffer();
        // 将PDF文件添加到合并的PDF文档中
        const pdf = await PDFDocument.load(flieBuffer);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        for (const page of copiedPages) {
            mergedPdf.addPage(page);
        }
    }
    // 合并PDF
    const loadingInstance = ElLoading.service({
        lock: true,
        text: '正在合并PDF文件...',
        background: 'rgba(0, 0, 0, 0.7)'
    });
    const mergedPdfBytes = await mergedPdf.save();
    const mergedPdfBlob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
    mergeFiles.value.push(new File([mergedPdfBlob], `合并文件${Date.now()}.pdf`, { type: 'application/pdf' }));
    ElMessage.success('合并成功');
    loadingInstance.close();
}

function preview(index: number) {
    const file = mergeFiles.value[index];
    const url = URL.createObjectURL(file);
    window.open(url, '_blank');
    URL.revokeObjectURL(url);
}

function download(index: number) {
    const file = mergeFiles.value[index];
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    a.click();
    URL.revokeObjectURL(url);
}

function handleDragOver(_draggingNode: any, dropNode: any) {
    // 在此事件内修正offset解决el-tree在有滚动条时拖拽提示线错位的问题
    const itemHeight = (<any>treeRef.value).$el.clientHeight / treeData.value.length;
    const indicator = <any>document.querySelectorAll('.el-tree__drop-indicator')[1];
    indicator.style.top = dropNode.data.index * itemHeight + 'px';
}

function handleDragEnd(before: any, after: any, inner: string) {
    if (inner === 'none') {
        return;
    }
    const tmpFiles = [...files.value];
    const tmpFile = tmpFiles[before.data.index];
    tmpFiles.splice(before.data.index, 1);
    tmpFiles.splice(after.data.index + (inner === 'before' ? 0 : -1), 0, tmpFile);
    files.value = tmpFiles;
}
</script>

<style scoped>
.el-tree :deep(.el-tree-node__expand-icon) {
    display: none;
}
</style>
