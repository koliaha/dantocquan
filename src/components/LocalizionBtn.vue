<template>
    <div class="lang-switch">
        <!-- :class="{ active: isActive(RU) }"  -->
        <button @click="setLang('ru')" class="lang-button">RU</button>
        <button @click="setLang('vn')" class="lang-button">VN</button>
        <button @click="setLang('en')" class="lang-button">ENG</button>
    </div>
</template>
<script>

// import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import i18n from '@/localization/i18n'

export default {
    setup() {
        const { t } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
        const setLang = (lang) =>{
            i18n.global.locale.value = lang;
        }
        return { t,setLang } // return render context that included `t`
    }
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

        }
    }
</style>