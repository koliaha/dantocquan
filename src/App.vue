<template>
  <div class="mainpage">
    <div class="lang-switch-wrapper">
      <LocalizionBtn />
    </div>
    <MainPage />
    <router-view />
  </div>
</template>
<script setup>
import MainPage from '@/components/MainPage.vue'
import LocalizionBtn from '@/components/LocalizionBtn.vue'
</script>