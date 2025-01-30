<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const topics = ref([
    { title: 'Tutti i temi', id: 'all' },
    { title: 'Ambiente', id: 'environment' },
    { title: 'Economia', id: 'economy' },
    { title: 'Mondo', id: 'world' },
    { title: 'Non Profit', id: 'non-profit' },
    { title: 'Politica', id: 'politics' },
    { title: 'Società', id: 'society' },
    { title: 'Welfare', id: 'welfare' }
])

</script>

<template>
    <nav class="topicsContainer">
        <RouterLink v-for="(item) in topics" :to="'/news/' + item.id" class="topic">
            <h5>{{ item.title }}</h5>
        </RouterLink>
    </nav>
</template>