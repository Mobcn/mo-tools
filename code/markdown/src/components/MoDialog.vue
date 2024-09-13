<template>
    <div class="mo-dialog">
        <div class="mo-dialog__container">
            <div class="mo-dialog__wrapper">
                <div class="mo-dialog__title">
                    <span>{{ title }}</span>
                </div>
                <div class="mo-dialog__body">
                    <slot />
                </div>
                <div class="mo-dialog__footer">
                    <slot name="footer">
                        <mo-button @click="emits('cancel')">取消</mo-button>
                        <mo-button type="primary" @click="emits('comfirm')">确定</mo-button>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import MoButton from './MoButton.vue';

// 参数
const props = defineProps({
    // 标题
    title: {
        type: String,
        default: '对话框'
    },
    // 宽度
    width: {
        type: String,
        default: '50%'
    }
});

// 回调
const emits = defineEmits(['cancel', 'comfirm']);
</script>

<style scoped>
.mo-dialog {
    --mo-dialog-z-index: 20000;
    --mo-dialog-background-color: #0008;
    --mo-dialog-wrapper-width: v-bind(props.width);
    --mo-dialog-wrapper-border-radius: 2px;
    --mo-dialog-wrapper-background-color: #fff;
    --mo-dialog-wrapper-box-shadow: 0 12px 32px 4px rgba(0, 0, 0, 0.04), 0 8px 20px rgba(0, 0, 0, 0.08);
    --mo-dialog-title-font-size: 18px;
    --mo-dialog-title-padding: 20px 20px 10px 20px;
    --mo-dialog-title-color: #303133;
    --mo-dialog-body-font-size: 14px;
    --mo-dialog-body-padding: 20px 20px 10px 20px;
    --mo-dialog-body-color: #606266;
    --mo-dialog-footer-font-size: 14px;
    --mo-dialog-footer-font-weight: 500;
    --mo-dialog-footer-padding: 0 20px 20px 20px;
}

.mo-dialog__container {
    position: fixed;
    z-index: var(--mo-dialog-z-index);
    top: 0;
    left: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #0008;
}

.mo-dialog__wrapper {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    width: var(--mo-dialog-wrapper-width);
    margin-top: 20vh;
    border-radius: var(--mo-dialog-wrapper-border-radius);
    background-color: var(--mo-dialog-wrapper-background-color);
    box-shadow: var(--mo-dialog-wrapper-box-shadow);
}

.mo-dialog__title {
    font-size: var(--mo-dialog-title-font-size);
    box-sizing: border-box;
    width: 100%;
    padding: var(--mo-dialog-title-padding);
    color: var(--mo-dialog-title-color);
}

.mo-dialog__body {
    font-size: var(--mo-dialog-body-font-size);
    box-sizing: border-box;
    width: 100%;
    padding: var(--mo-dialog-body-padding);
    color: var(--mo-dialog-body-color);
}

.mo-dialog__footer {
    font-size: var(--mo-dialog-footer-font-size);
    font-weight: var(--mo-dialog-footer-font-weight);
    box-sizing: border-box;
    width: 100%;
    padding: var(--mo-dialog-footer-padding);
    text-align: right;
}
</style>
