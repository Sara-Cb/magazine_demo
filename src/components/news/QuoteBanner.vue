<script setup>
import { ref } from 'vue'

const quotes = ref([
    {
        quote: 'La vita è come una scatola di cioccolatini, non sai mai quello che ti capita.',
        author: 'Forrest Gump'
    },
    {
        quote: 'La vita è un sogno, e i sogni sono sogni.',
        author: 'William Shakespeare'
    },
    {
        quote: 'Essere troppo seri non è cosa molto seria',
        author: 'Detto Africano'
    },
    {
        quote: 'La vita è un\'arte, e come tale va vissuta.'
    }
])

const randomIndex = Math.floor(Math.random() * quotes.value.length)
const quote = quotes.value[randomIndex].quote
const author = quotes.value[randomIndex].author

</script>

<template>
    <div class="quoteBanner">
        <div class="quoteContainer">
            <font-awesome-icon :icon="['fas', 'quote-left']" />
            <h3 class="quote">{{ quote }}</h3>
            <h4 class="author">{{
                author
                    ? `[ ${author} ]`
                    : '[ Anonimo ]'
                }}</h4>
        </div>
    </div>
</template>