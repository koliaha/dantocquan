<template>
  <div class="mainpage">
    <div class="lang-switch-wrapper">
      <LocalizionBtn />
      <ThemeToggle />
    </div>
    <MainPage />
    <router-view />
  </div>
</template>
<script setup>
import MainPage from '@/components/MainPage.vue'
import LocalizionBtn from '@/components/LocalizionBtn.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
</script>