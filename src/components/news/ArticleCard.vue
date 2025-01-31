<script setup>
import { onMounted } from 'vue';

const props = defineProps({
    article: {
        type: Object,
        default: () => { }
    }
});

onMounted(() => {
    console.log('Card montata con: ' + props.article.title);
});

const colors = ['red', 'black', 'grey'];

const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

</script>

<template>
    <div v-if="!article.title">Nessuna notizia disponibile.</div>
    <div class="articleCard card">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
        <a :href="article.link" target="_blank">Leggi di più</a>
        <div class="cardImage" :class="randomColor()">
            <img :src="article.image" alt="article.title" />
        </div>
    </div>
</template>
