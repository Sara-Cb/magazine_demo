import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useNewsStore = defineStore('news', () => {
    const myAPIKey = 'pub_66923ed10e95a8d55328f2c821542dc402461';

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
                ? `https://newsdata.io/api/1/news?apikey=${myAPIKey}&language=it&q=${topicId}`
                : `https://newsdata.io/api/1/news?apikey=${myAPIKey}&language=it`

            const response = await fetch(url)
            const data = await response.json()

            articles.value = (data.results || []).map(article => ({
                title: article.title || 'Senza titolo',
                description: article.description || 'Nessuna descrizione disponibile',
                link: article.link || '#',
                source: article.source_id || 'Sconosciuto',
                image_url: article.image_url || null,
                tags: article.keywords || [],
                creator: article.creator || [],
                creatorImage: 'http//www.placekittens.com/300/' || null,
                content: article.content || 'Nessun contenuto disponibile',
                date: article.pubDate || 'Sconosciuta',
                category: article.category || [],
                country: article.country || 'Sconosciuto',
            }))

            console.log('News trasformate:', articles.value)
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
