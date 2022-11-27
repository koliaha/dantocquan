<template>
    <div class="container foodlist">
            <div class="loader" v-if="data.length == 0">
                <LoaderCircle />
            </div>
            <FoodCard v-for="(i, index) in data" :key="index" :data="i" />
        </div>
</template>
<script setup>
import FoodCard from '@/components/FoodCard.vue'
import LoaderCircle from '@/components/LoaderCircle.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'
const data = ref([])
onMounted(() => {
    console.log('dasdas');
    axios.get('https://script.google.com/macros/s/AKfycbxP2ychaEYefQ9p_V9liFboUH3Y5CiJsB_ujT5zcjSeQCz0GC6obZh7ECio0ulK2X1y/exec').then((el) => {
        console.log(el);
        data.value = el.data
    })
})
</script>
<style lang="scss">
.loader {
    width: 100%;
    display: flex;
    justify-content: center;
}
.foodlist{
    background: white;
    border-radius: 20px;
    box-shadow: 0 0 30px rgb(206 215 224 / 25%);
    z-index: 2;
    margin: 65vh auto 0px;
}
</style>