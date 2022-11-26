<template>
  <div class="container">
    <MainPage msg="Welcome to Your Vue.js App" />
    <h1 v-if="data.length == 0">Загрузка...</h1>
    <div v-else >
      <FoodCard v-for="(i,index) in data" :key="index" :data="i"/>
    </div>
  </div>
</template>

<script setup>
import { onMounted,ref } from 'vue'
import axios from 'axios'
import MainPage from '@/components/MainPage.vue'
import FoodCard from '@/components/FoodCard.vue'
const data = ref([])
onMounted(() => {
  console.log('dasdas');
  axios.get('https://script.google.com/macros/s/AKfycbxP2ychaEYefQ9p_V9liFboUH3Y5CiJsB_ujT5zcjSeQCz0GC6obZh7ECio0ulK2X1y/exec').then((el)=>{
    console.log(el);
    data.value = el.data
  })
})

</script>
