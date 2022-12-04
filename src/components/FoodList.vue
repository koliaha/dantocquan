<template>
    <div class="container foodlist">
        <div class="loader" v-if="store.getters.getItemList.length == 0">
            <LoaderCircle />
        </div>
        <CategoryList />
        <FoodCard v-for="(i, index) in store.getters.getItemList" :key="index" :data="i" />
        <FooterSection/>
    </div>
</template>
<script setup>
import FoodCard from '@/components/FoodCard.vue'
import LoaderCircle from '@/components/LoaderCircle.vue'
import CategoryList from '@/components/CategoryList.vue'
import FooterSection from '@/components/FooterSection.vue'
import { onMounted } from 'vue'
import store from "@/store/index";
onMounted(() => {
    if(store.getters.getItemList.length == 0){
        store.dispatch('GET_DATA_API')
    }
})
</script>
