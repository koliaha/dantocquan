<template>
    <div class="lang-switch">
        <!-- :class="{ active: isActive(RU) }"  -->
        <button @click="setLang('ru')" class="lang-button">RU</button>
        <button @click="setLang('vn')" class="lang-button">VN</button>
        <button @click="setLang('en')" class="lang-button">ENG</button>
        <p>{{ t("message.hello") }}</p>
    </div>
</template>
<script>

// import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
export default {
    setup() {
        const { t } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
        const setLang = (lang) =>{

            console.log(this.$store);
            console.log(lang);
        }
        return { t,setLang } // return render context that included `t`
    }
}
</script>