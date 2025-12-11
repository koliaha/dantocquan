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
            transition: all var(--transition-fast);
            box-shadow: 0 8px 18px rgba(238, 82, 83, 0.18);
            &.active{
                background: white;
                color: #ee5253;
                box-shadow: 0 10px 24px rgba(238, 82, 83, 0.22);
            }
            &:hover{
                transform: translateY(-2px);
                box-shadow: 0 10px 24px rgba(238, 82, 83, 0.28);
            }
        }
    }
</style>