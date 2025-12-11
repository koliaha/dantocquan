<template>
    <div class="card-item-page">
        <div class="card-item-page-image">
            <img
                v-lazy="{ src: `https://cafevn.ru/img/${data.url}.jpg`, loading: require('@/assets/dantoc.jpg'), error: require('@/assets/dantoc.jpg') }">
        </div>
        <div class="card-item-page-content">
            <h2 class="title">{{ titleName }}</h2>
            <p class="description">{{ data.description }}</p>
            <div class="item-content-footer">
                <span class="price">{{ data.price }} ₽</span>
            </div>
        </div>
    </div>
</template>
<script>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
export default {
    props: {
        data: {
            type: Object,
            default: () => { }
        },
    },
    setup(props) {

        const imageUrlAlt = (event) => {
            event.target.src = require('@/assets/dantoc.jpg')
        }
        const { locale } = useI18n({ useScope: 'global' })
        const titleName = computed(() => {
            if (locale.value == 'vn') {
                return props.data.vn
            }
            return props.data.name
        })
        return {
            imageUrlAlt, titleName
        }
    }
}
</script>
<style lang="scss">
.card-item-page {
    max-width: 100%;
    width: 100%;
}

.card-item-page-image {
    max-width: 100%;
    width: 100%;
    background: rgb(211, 211, 211);
    overflow: hidden;
    border-radius: 35px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        transition: transform .9s;
        &:hover{
            transform: scale(1.1);
        }
    }
}

.card-item-page-content{
    max-width: 100%;
    width: 100%;
    margin-top: 20px;
    .title {
        font-size: 38px;
       margin-bottom: 20px;
        line-height: 40px;
    }
    .description {
       font-size: 30px;
       line-height: 35px;
       margin-bottom: 20px;
    }
}


</style>