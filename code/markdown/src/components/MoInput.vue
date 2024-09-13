<template>
    <div class="mo-input">
        <input
            class="mo-input__inner"
            type="text"
            v-model="value"
            :readonly="readonly ? 'readonly' : false"
            @click.native="emits('click')"
        />
    </div>
</template>

<script setup>
import { computed } from 'vue';

// 参数
const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    readonly: {
        type: Boolean,
        default: false
    }
});

// 输入框值
const value = computed({
    get: () => props.modelValue,
    set: (newValue) => emits('update:modelValue', newValue)
});

// 回调
const emits = defineEmits(['update:modelValue', 'click']);
</script>

<style scoped>
.mo-input {
    display: inline-flex;
    align-items: center;
    flex: 1;
    flex-grow: 1;
    justify-content: center;
    padding: 1px 11px;
    transition: box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    border-radius: 4px;
    background-color: #fff;
    background-image: none;
    box-shadow: 0 0 0 1px #dcdfe6 inset;
}

.mo-input:hover {
    box-shadow: 0 0 0 1px #c0c4cc inset;
}

.mo-input__inner {
    font-size: inherit;
    line-height: 30px;
    flex-grow: 1;
    box-sizing: border-box;
    width: 100%;
    height: 30px;
    padding: 0;
    color: #606266;
    border: none;
    outline: 0;
    background: 0 0;
}
</style>
