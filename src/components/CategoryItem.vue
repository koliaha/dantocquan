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
    background: var(--color-accent);
    color: #fff;
    font-weight: 700;
    padding: 6px 12px;
    margin-left: 6px;
    margin-bottom: 6px;
    border-radius: 14px;
    cursor: pointer;
    transition: transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast), opacity var(--transition-fast);
    user-select: none;
    &:hover{
        opacity: 0.95;
        transform: translateY(-2px);
        box-shadow: var(--shadow-soft);
    }
    &.isActive {
        background: #d63031;
        box-shadow: 0 12px 28px rgba(214, 48, 49, 0.35);
        transform: translateY(-2px);
    }
}
</style>