<template>
    <div class="card-item">
        <div class="card-item-image" :style="{ 'background-image': 'url(' + data.photo + ')' }">
        </div>
        <div class="card-item-content">
            <h2 class="title">{{ data.name }}</h2>
            <p class="description">{{ truncate(data.description) }}</p>
            <div class="item-content-footer">
                <router-link :to="`/${data.id}`">Перейти</router-link>
                <span class="price">{{ data.price }} ₽</span>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    props: {
        data: {
            type: Object,
            default: () => { }
        },
    },
    setup() {
        const descrip_length = ref(50)
        const truncate = (str) => {
            return (str.length > descrip_length.value) ? str.slice(0, descrip_length.value - 1) + '...' : str;
        }
        return {
            truncate
        }
    }
}
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
}

.card-item-image {
    min-width: 150px;
    max-width: 150px;
    height: 170px;
    background: rgb(211, 211, 211);
    margin-right: 10px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    overflow: hidden;
    border-radius: 20px;
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
    }
}
</style>