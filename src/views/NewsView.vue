<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useNewsStore } from '@/stores/newsStore';
import TitleBanner from '@/components/news/TitleBanner.vue';
import ActionBanner from '@/components/news/ActionBanner.vue';
import NewsHero from '@/components/news/NewsHero.vue';
import QuoteBanner from '@/components/news/QuoteBanner.vue';
import BlogBanner from '@/components/news/BlogBanner.vue';

const store = useNewsStore();
const route = useRoute();
const router = useRouter();

const topic = ref('all');

let lastMinute = ref([]);
let otherNews = ref([]);

async function loadNews() {
    console.log('Caricamento notizie per il topic:', topic.value);
    await store.setTopic(topic.value);
}

onMounted(async () => {
    if (!route.params.topic) {
        router.replace({ name: 'news', params: { topic: 'all' } });
        return;
    }
    topic.value = route.params.topic;
    await loadNews();

    lastMinute.value = store.articles.slice(0, 5);
    otherNews.value = store.articles.slice(5);

});



</script>

<template>
    <div class="newsView">
        <TitleBanner :title="store.currentTopicTitle" />

        <div v-if="store.loading">
            <p>Caricamento delle notizie in corso...</p>
        </div>
        <div v-else-if="lastMinute.length > 0">
            <NewsHero :news="lastMinute" />
        </div>
        <div v-else>
            <p>Nessuna notizia disponibile.</p>
        </div>
        <ActionBanner text="Il tuo supporto è fondamentale" link="#" linkTitle="Dai il tuo contributo" />
        <div v-if="store.loading">
            <p>Caricamento delle notizie in corso...</p>
        </div>
        <div v-else-if="otherNews.length > 0">
            <NewsHero :news="otherNews" />
        </div>
        <div v-else>
            <p>Nessuna notizia disponibile.</p>
        </div>
        <QuoteBanner />
        <BlogBanner />
    </div>
</template>
