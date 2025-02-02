<script setup>

const props = defineProps({
    article: {
        type: Object,
        default: () => { }
    },
    trending: {
        type: Boolean,
        default: false
    },
    position: {
        type: Number,
        default: 0
    }
});

</script>

<template>
    <div v-if="!article.title">Nessuna notizia disponibile.</div>
    <a :href="article.link" target="_blank" class="articleCard card" :class="'article-' + position"
        :style="{ 'background-image': 'url(' + article.image_url + ')' }">
        <div class="overlay" :class="trending && 'trending'"></div>
        <div class="contentWrapper">
            <div class="tags" v-if="article.tags && article.tags.length > 0">
                <span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <div class="details">
                <h3 class="title">{{ article.title }}</h3>
                <p class="description">{{ article.description }}</p>
                <div class="creator" v-if="article.creator || article.creatorImage">
                    <img :src="article.creatorImage || '/default-avatar.jpg'" alt="Creator" />
                    <span class="name">Di {{ article.creator }}</span>
                </div>
                <span class="date smallText">
                    {{ new Date(article.date).toLocaleDateString('it-IT', {
                        day: '2-digit', month: 'long', year:
                            'numeric'
                    }) }}
                </span>
            </div>
        </div>
    </a>
</template>
