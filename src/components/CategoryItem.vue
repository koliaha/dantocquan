<template>
    <div class="category_item" :class="{ 'isActive': data.id ==  store.getters.getCategory}" @click="setCategory">{{ label }}</div>
</template>
<script setup>
/* global defineProps */
import store from "@/store/index";
import { ref, computed } from 'vue'
import { useI18n } from "vue-i18n";

const props = defineProps({
    data: {
        type: Object,
        default: () => ({})
    }
})

const isActive = ref(false)
const { t } = useI18n({ useScope: 'global' })
const label = computed(() => t(props.data.labelKey))
const setCategory = () => {
    isActive.value = !isActive.value
    if (isActive.value) {
        store.commit('SET_CATEGORY', props.data.id)
    } else {
        store.commit('SET_CATEGORY')
    }
}
</script>
<style lang="scss">
.category_item {
    background: #00b894;
    color: white;
    font-weight: bold;
    padding: 2px 6px;
    margin-left: 5px;
    margin-bottom: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.5s opacity;
    user-select: none;
    &:hover{
        opacity: 0.7;
    }
    &.isActive {
        background: #d63031;
    }
}
</style>