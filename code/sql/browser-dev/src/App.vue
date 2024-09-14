<template>
    <SQL />
</template>

<script setup>
import SQL from './components/SQL.vue';
</script>

<style>
#app {
    box-sizing: border-box;
    height: 100vh;
}

/* 滚动条样式 */
::-webkit-scrollbar {
    width: 0.375rem;
}
::-webkit-scrollbar-thumb {
    transition: all 0.2s ease-in-out;
    border-radius: 0.625rem;
    background-color: #0003;
}
::-webkit-scrollbar-track {
    border-radius: 0.625rem;
}
</style>
