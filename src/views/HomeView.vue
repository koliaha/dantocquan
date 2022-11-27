<template>
  <div class="mainpage">
    <MainPage />
    <FoodList />
  </div>
</template>

<script setup>
import MainPage from '@/components/MainPage.vue'
import FoodList from '@/components/FoodList.vue'
</script>
<style lang="scss">
.mainpage {
  // background: gray;
  min-height: 100vh;
  position: relative;
}
</style>
