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
    padding:  10px;
    background: rgb(255, 255, 255);
    position: sticky;
    top: 0;
}
</style>