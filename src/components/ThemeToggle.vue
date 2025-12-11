<template>
  <button class="theme-toggle" @click="toggleTheme">
    <span v-if="theme === 'dark'">🌙</span>
    <span v-else>☀️</span>
  </button>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const THEME_KEY = 'theme'
const prefersDark = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(THEME_KEY) : null
const theme = ref(saved || (prefersDark() ? 'dark' : 'light'))

const applyTheme = (val) => {
  const root = document.documentElement
  root.setAttribute('data-theme', val)
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(THEME_KEY, val)
  }
}

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  applyTheme(theme.value)
}

onMounted(() => {
  applyTheme(theme.value)
})
</script>
<style scoped lang="scss">
.theme-toggle {
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text);
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  cursor: pointer;
  box-shadow: var(--shadow-soft);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast);
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-strong);
  }
}
</style>

