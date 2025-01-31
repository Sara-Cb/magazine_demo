<script setup>
import { ref } from 'vue'

const colors = ref(['yellow', 'red', 'blue', 'grey'])

const props = defineProps({
    text: {
        type: String,
        default: 'Il tuo supporto è fondamentale'
    },
    link: {
        type: String,
        default: '#'
    },
    linkTitle: {
        type: String,
        default: 'Dai il tuo contributo'
    }
})
</script>

<template>
    <div class="actionBanner" :class="{ [colors[Math.floor(Math.random() * colors.length)]]: true }">
        <h4 class="callToAction">{{ props.text }}</h4>
        <a class="link" :href="props.link" target="_blank">{{ props.linkTitle }}</a>
    </div>
</template>