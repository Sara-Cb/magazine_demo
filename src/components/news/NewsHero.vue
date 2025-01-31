<script setup>
import { onMounted } from 'vue';

const props = defineProps({
    news: {
        type: Array,
        default: () => []
    }
});

onMounted(() => {
    console.log('NewsHero montato con', props.news.length, 'notizie');
});

</script>

<template>
    <div class="newsHero">
        <div class="articles">
            <div v-if="props.news.length === 0">Nessuna notizia disponibile.</div>
            <div v-for="article in props.news" :key="article.link" class="article">
                <h2>{{ article.title }}</h2>
                <p>{{ article.description }}</p>
                <a :href="article.link" target="_blank">Leggi di più</a>
            </div>
        </div>
    </div>
</template>
