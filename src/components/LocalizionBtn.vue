<template>
    <div class="lang-switch">
        <button @click="setLang('ru')" :class="['lang-button', { active: isActive('ru') }]">RU</button>
        <button @click="setLang('en')" :class="['lang-button', { active: isActive('en') }]">EN</button>
        <button @click="setLang('zh')" :class="['lang-button', { active: isActive('zh') }]">中文</button>
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })
const setLang = (lang) =>{
    locale.value = lang;
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('lang', lang)
    }
}
const isActive = (lang) =>{
    return locale.value === lang
}
</script>
<style lang="scss">
    .lang-switch{
        display: flex;
        align-items: center;
        button{
            background: #ee5253;
            outline: none;
            cursor: pointer;
            margin: 0 10px;
            border: 1px solid #ee5253;
            border-radius: 15px;
            color: white;
            padding: 5px 10px;
            font-size: 18px;
            line-height: 20px;
            transition: all .2s ease;
            &.active{
                background: white;
                color: #ee5253;
            }
        }
    }
</style>