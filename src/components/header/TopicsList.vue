<script setup>
import { RouterLink } from 'vue-router'
import { useNewsStore } from '@/stores/newsStore'

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})

const store = useNewsStore()

const topics = store.topics

</script>

<template>
    <nav class="topicsContainer" :class="{ open: props.isOpen }">
        <RouterLink v-for="(item) in topics" :to="'/news/' + item.id" class="topic">
            <h5>{{ item.title }}</h5>
        </RouterLink>
    </nav>
</template>