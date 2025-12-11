<template>
    <div class="category_list">
        <CategoryItem v-for="(i, index) in store.getters.getCategoryList" :key="index" :data="i"/>
    </div>
</template>
<script setup>
import CategoryItem from './CategoryItem.vue'
import store from "@/store/index";
</script>
<style lang="scss">
.category_list {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 6px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.06);
    position: sticky;
    top: 0;
    z-index: 3;
}

:root[data-theme="dark"] .category_list{
    background: rgba(17, 24, 39, 0.9);
    box-shadow: 0 10px 26px rgba(0,0,0,0.35);
}
</style>