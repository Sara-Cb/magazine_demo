<script setup>
import { RouterLink } from 'vue-router'
import { useNewsStore } from '@/stores/newsStore'

const store = useNewsStore()

const topics = store.topics

</script>

<template>
    <nav class="topicsContainer">
        <RouterLink v-for="(item) in topics" :to="'/news/' + item.id" class="topic" :class="item.id">
            <h5>{{ item.title }}</h5>
        </RouterLink>
    </nav>
</template>