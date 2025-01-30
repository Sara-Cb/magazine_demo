<script setup>
import TopicsList from '@/components/header/TopicsList.vue';
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNewsStore } from '@/stores/newsStore'

const store = useNewsStore()
const route = useRoute()
const router = useRouter()
let currentTopic = ref(store.currentTopicTitle)

onMounted(() => {
    if (!route.params.topic) {
        router.replace('/news/all')
    }

    store.setTopic(route.params.topic);
    currentTopic.value = store.currentTopicTitle
})

const isMenuOpen = ref(false)

function handleToggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
    <div class="newsView">
        <div class="topic">
            <h1 class="title">News</h1>
            <div class="menu">
                <font-awesome-icon :icon="['fas', 'chevron-down']" @click="handleToggleMenu" />
                <TopicsList @current-topic="handleToggleSearch" />
            </div>
        </div>
    </div>
</template>
