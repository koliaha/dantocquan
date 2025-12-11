<template>
    <div class="container foodlist foodlist-page">
        <router-link to="/" class="foodlist-page-link">
            <img src="@/assets/arrow_left.svg" alt="arrow_left">  
            <span>{{ t('common.menu') }}</span>  
        </router-link>
        <div class="loader" v-if="store.getters.getItemList.length == 0">
            <LoaderCircle />
        </div>
        <FoodPage v-else :data="dataItem" />
    </div>
</template> 
<script setup>
import { onMounted, ref, computed } from 'vue'
import store from "@/store/index";
import LoaderCircle from '@/components/LoaderCircle.vue'
import FoodPage from '@/components/FoodPage.vue'
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
const router = useRouter()
const id = ref(router.currentRoute.value.params.id)
const { t } = useI18n({ useScope: 'global' })
onMounted(() => {
    if (store.getters.getItemList.length == 0) {
        store.dispatch('GET_DATA_API')
    }
})
const dataItem = computed(() => {
    const data = store.getters.getItemList.filter((el)=> el.id == id.value)
    return data[0]
})
</script>
<style lang="scss">
.foodlist-page{
    padding: 10px 20px;
}
.foodlist-page-link{
    width: 100%;
    font-weight: bold;
    font-size: 30px;
    line-height: 30px;
    margin: 10px 0  40px;
    display: flex;
    align-items: center;
    img{
        margin-right: 10px;
        max-width: 20px;
    }
}
</style>