<script setup>
import TopicsList from '@/components/header/TopicsList.vue';
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNewsStore } from '@/stores/newsStore'

const store = useNewsStore()
const route = useRoute()
const router = useRouter()

const isMenuOpen = ref(false)
const news = ref([])

async function loadNews(topicId) {
    await store.setTopic(topicId)
    news.value = store.articles
}

onMounted(async () => {
    if (!route.params.topic) {
        router.replace('/news/all')
    }
    await loadNews(route.params.topic)
})

watch(() => route.params.topic, async (newTopic) => {
    if (newTopic) {
        await loadNews(newTopic)
    }
})

function handleToggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
    <div class="newsView">
        <div class="topic">
            <h1 class="title">{{ store.currentTopicTitle }}</h1>
            <div class="menu">
                <font-awesome-icon :icon="['fas', 'chevron-down']" @click="handleToggleMenu" />
                <TopicsList :isOpen="isMenuOpen" />
            </div>
        </div>

        <div class="articles">
            <div v-if="news.length === 0">Nessuna notizia disponibile.</div>
            <div v-for="article in news" :key="article.link" class="article">
                <h2>{{ article.title }}</h2>
                <p>{{ article.description }}</p>
                <a :href="article.link" target="_blank">Leggi di più</a>
            </div>
        </div>
    </div>
</template>
