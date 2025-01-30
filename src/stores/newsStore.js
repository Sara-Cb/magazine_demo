import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useNewsStore = defineStore('news', () => {
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

    const currentTopicId = ref('all')

    const articles = ref([])

    const currentTopicTitle = computed(() => {
        const t = topics.value.find(item => item.id === currentTopicId.value)
        return t ? t.title : 'Sconosciuto'
    })

    function getTopicIdByName(title) {
        const found = topics.value.find(t => t.title.toLowerCase() === title.toLowerCase())
        return found ? found.id : null
    }

    function getTopicNameById(id) {
        const found = topics.value.find(t => t.id === id)
        return found ? found.title : null
    }

    async function setTopic(newTopicId) {
        currentTopicId.value = newTopicId
        await fetchNews(newTopicId)
    }

    async function fetchNews(topicId) {
        try {
            const url = topicId && topicId !== 'all'
                ? `https://api.example.com/news?topic=${topicId}`
                : `https://api.example.com/news`

            const response = await fetch(url)
            const data = await response.json()
            articles.value = data.articles || []
        } catch (error) {
            console.error('Errore fetch news:', error)
            articles.value = []
        }
    }

    return {
        topics,
        currentTopicId,
        articles,
        currentTopicTitle,
        setTopic,
        fetchNews,
        getTopicIdByName,
        getTopicNameById
    }
})
