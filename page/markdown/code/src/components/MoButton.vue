<template>
    <div class="mo-button">
        <button :class="`mo-button__inner ${typeClass}`" @click.native="emits('click')">
            <slot>按钮</slot>
        </button>
    </div>
</template>

<script setup>
import { computed } from 'vue';

// 参数
const props = defineProps({
    // 类型
    type: {
        type: String,
        default: ''
    }
});

// 按钮类型
const typeClass = computed(() => {
    const currentType = props.type.trim();
    return currentType ? `mo-button__inner--${currentType}` : '';
});

// 回调
const emits = defineEmits(['click']);
</script>

<style scoped>
.mo-button {
    display: inline-block;
    --mo-button-margin: 0 0 0 10px;
    --mo-button-padding: 8px 15px;
    --mo-button-color: #606266;
    --mo-button-border: 1px solid #dcdfe6;
    --mo-button-border-radius: 4px;
    --mo-button-background-color: #fff;
    --mo-button-color-hover: #409eff;
    --mo-button-border-color-hover: #c6e2ff;
    --mo-button-background-color-hover: #ecf5ff;
}

.mo-button__inner {
    line-height: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    height: 32px;
    margin: var(--mo-button-margin);
    padding: var(--mo-button-padding);
    cursor: pointer;
    user-select: none;
    transition: 0.1s;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    color: var(--mo-button-color);
    border: var(--mo-button-border);
    border-radius: var(--mo-button-border-radius);
    outline: 0;
    background-color: var(--mo-button-background-color);
}

.mo-button__inner:hover {
    color: var(--mo-button-color-hover);
    border-color: var(--mo-button-border-color-hover);
    background-color: var(--mo-button-background-color-hover);
}

.mo-button__inner--primary {
    --mo-button-color: #fff;
    --mo-button-background-color: #409eff;
}

.mo-button__inner--primary:hover {
    --mo-button-color-hover: #fff;
    --mo-button-border-color-hover: #79bbff;
    --mo-button-background-color-hover: #79bbff;
}
</style>
