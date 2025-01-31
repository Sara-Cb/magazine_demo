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
    ]);

    const currentTopicId = ref('all');
    const articles = ref([]);
    const loading = ref(false);

    const currentTopicTitle = computed(() => {
        const t = topics.value.find(item => item.id === currentTopicId.value);
        return t ? t.title : 'Sconosciuto';
    });

    async function setTopic(newTopicId) {
        currentTopicId.value = newTopicId;
        loading.value = true;
        await fetchNews(newTopicId);
    }

    async function fetchNews(topicId) {
        articles.value = [];
        try {
            const url = topicId && topicId !== 'all'
                ? `https://newsdata.io/api/1/news?apikey=${myAPIKey}&language=it&q=${topicId}`
                : `https://newsdata.io/api/1/news?apikey=${myAPIKey}&language=it`;

            const response = await fetch(url);
            const data = await response.json();

            console.log('Dati ricevuti:', data);

            if (!data || !data.results || !Array.isArray(data.results)) {
                console.error('Errore: data.results non è un array valido!', data.results);
                loading.value = false;
                return;
            }

            articles.value = data.results.map(article => ({
                title: article.title || 'Senza titolo',
                description: article.description || 'Nessuna descrizione disponibile',
                link: article.link || '#',
                source: article.source_id || 'Sconosciuto',
                image_url: article.image_url || null,
                tags: article.keywords || [],
                creator: article.creator || [],
                creatorImage: 'https://www.placekittens.com/300/' || null,
                content: article.content || 'Nessun contenuto disponibile',
                date: article.pubDate || new Date().toISOString(),
                category: article.category || [],
                country: article.country || 'Sconosciuto',
            }));

            articles.value.sort((a, b) => new Date(b.date) - new Date(a.date));

            console.log('Articles aggiornato:', articles.value);
            loading.value = false;

        } catch (error) {
            console.error('Errore fetch news:', error);
            loading.value = false;
        }
    }

    return {
        topics,
        currentTopicId,
        currentTopicTitle,
        articles,
        loading,
        setTopic,
        fetchNews,
    };
});
