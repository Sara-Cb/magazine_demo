<script setup>
import { ref, onMounted } from 'vue';
import ArticleCard from './ArticleCard.vue';

const props = defineProps({
    news: {
        type: Array,
        default: () => []
    },
    lastMinute: {
        type: Boolean,
        default: false
    }
});

// fake trending article
const trending = Math.floor(Math.random() * 4);
const trendingArticle = props.news[trending];

const maxNews = ref(props.lastMinute ? 4 : 5);
const articles = ref(props.news.slice(0, maxNews.value));

onMounted(() => {
    maxNews.value = props.lastMinute ? 4 : 5;
    articles.value = props.news.slice(0, maxNews.value);
});

</script>

<template>
    <div v-if="props.news.length === 0">Nessuna notizia disponibile.</div>
    <div v-else class="newsHero" :class="props.lastMinute ? 'lastMinute' : 'secondary'">
        <div v-for="(article, index) in articles" :key="article.link" :class="`article${index + 1}`">
            <ArticleCard :article="article" :trending="article === trendingArticle" />
        </div>
    </div>
</template>
