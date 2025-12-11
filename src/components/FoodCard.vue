<template>
    <div class="card-item">
        <div class="card-item-image">
            <img v-lazy="{ src: `https://cafevn.ru/img/${data.url}.jpg`, loading: require('@/assets/dantoc.jpg'), error: require('@/assets/dantoc.jpg') }">
        </div>
        <div class="card-item-content">
            <h2 class="title">{{ titleName }}</h2>
            <p class="description">{{ truncate(descriptionText) }}</p>
            <div class="item-content-footer">
                <router-link :to="`/food/${data.id}`" class="item-content-link">
                    <span>{{ t('common.go') }}</span> 
                    <img src="@/assets/arrow_black.svg" alt="arrow_left">  
                </router-link>
                <span class="price">{{ data.price }} ₽</span>
            </div>
        </div>
    </div>
</template>
<script setup>
/* global defineProps */
import { ref,computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
    data: {
        type: Object,
        default: () => ({})
    },
})

const descrip_length = ref(50)
const truncate = (str) => {
    return (str.length > descrip_length.value) ? str.slice(0, descrip_length.value - 1) + '...' : str;
}

const { t, locale } = useI18n({ useScope: 'global' })
const titleName = computed(() =>{
    return props.data?.name_i18n?.[locale.value] || props.data?.name_i18n?.ru || props.data?.name || ''
} )
const descriptionText = computed(() =>{
    return props.data?.description_i18n?.[locale.value] || props.data?.description_i18n?.ru || props.data?.description || ''
} )
</script>
<style lang="scss">
.card-item {
    display: flex;
    max-width: 100%;
    width: 100%;
    margin-bottom: 10px;
    padding: 15px 15px 20px;
    border-bottom: 2px solid #F7F7F7;
    box-shadow: 0 4px 0px -2px #F7F7F7;
    border-radius: 18px;
    background: #fff;
    transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-fast);
    &:hover {
        transform: translateY(-6px);
        box-shadow: var(--shadow-soft);
        border-color: rgba(0,0,0,0.04);
    }
}

.card-item-image {
    min-width: 150px;
    max-width: 150px;
    height: 170px;
    background: rgb(211, 211, 211);
    margin-right: 10px;
    overflow: hidden;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 100%;
        transition: transform var(--transition-normal), filter var(--transition-normal);
    }
    .card-item:hover & img {
        transform: scale(1.05);
    }
}

.card-item-content {
    max-width: 100%;
    padding: 10px 0;
    width: 100%;

    .title {
        font-size: 18px;
    }

    .description {
        min-height: 60px;
        max-height: 60px;
        overflow: hidden;
        margin: 15px 0;
    }
}

.item-content-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .price {
        height: 45px;
        min-width: 90px;
        font-size: 20px;
        line-height: 45px;
        font-weight: 700;
        border-radius: 22.5px;
        padding: 0px 20px;
        box-shadow: 0px 4px 10px rgba(252, 213, 97, 0.5);
        background: rgb(252, 213, 97);
        transition: transform var(--transition-fast), box-shadow var(--transition-fast);
    }
}
.item-content-link{
    display: flex;
    align-items: center;
    transition: color var(--transition-fast);
    img{
        max-width: 10px;
        margin-left: 10px;
        transition: transform var(--transition-fast);
    }
    &:hover img{
        transform: translateX(4px);
    }
}
.card-item:hover .price{
    transform: translateY(-2px);
    box-shadow: 0px 6px 12px rgba(252, 213, 97, 0.6);
}
</style>