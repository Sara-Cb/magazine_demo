<script setup>
import TopicsList from '@/components/header/TopicsList.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false)
const isWindowL = ref(window.innerWidth > 768)

const props = defineProps({
    title: {
        type: String,
        default: 'News'
    }
})

function handleToggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}

function updateWindowSize() {
    isWindowL.value = window.innerWidth > 768
}

function handleClickOutside(event) {
    if (isMenuOpen.value) {
        const menu = document.querySelector('.menu')
        if (menu && !menu.contains(event.target)) {
            isMenuOpen.value = false
        }
    }
}

onMounted(() => {
    window.addEventListener('resize', updateWindowSize)
    document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateWindowSize)
    document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
    <div class="titleBanner">
        <h1 class="title">{{ title }}</h1>
        <div class="menu" :hidden="isWindowL" :class="{ open: isMenuOpen }">
            <font-awesome-icon :icon="['fas', isMenuOpen ? 'chevron-up' : 'chevron-down']" @click="handleToggleMenu" />
            <TopicsList />
        </div>
        <div class="tags" :hidden="!isWindowL">
            <TopicsList />
        </div>
    </div>
</template>