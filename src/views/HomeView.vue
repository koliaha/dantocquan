<template>
  <div class="container">
    <MainPage msg="Welcome to Your Vue.js App" />
    <h1 v-if="data.length == 0">Загрузка...</h1>
    <ul v-else >
      <li v-for="(i,index) in data" :key="index">
        <h3>{{i.name}}</h3>
        <p>{{i.description}}</p>
        <h4>{{i.price}} руб</h4>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted,ref } from 'vue'
import axios from 'axios'
import MainPage from '@/components/MainPage.vue'
const data = ref([])
onMounted(() => {
  console.log('dasdas');
  axios.get('https://script.google.com/macros/s/AKfycbxP2ychaEYefQ9p_V9liFboUH3Y5CiJsB_ujT5zcjSeQCz0GC6obZh7ECio0ulK2X1y/exec').then((el)=>{
    console.log(el);
    data.value = el.data
  })
})

</script>
