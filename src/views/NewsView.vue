<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// 1) Recuperiamo route e router
const route = useRoute()
const router = useRouter()

// 2) Hook onMounted
onMounted(() => {
    // Se topic non è definito, reindirizziamo a /news/all
    if (!route.params.topic) {
        router.replace('/news/all')
    }
})
</script>

<template>
    <h1>this is the body now</h1>
    <h1>this is the body now</h1>
    <h1>this is the body now</h1>
    <h1>this is the body now</h1>
    <h1>this is the body now</h1>
    <h1>this is the body now</h1>
    <h1>this is the body now</h1>
    <h1>this is the body now</h1>
    <h1>this is the body now</h1>
    <h1>this is the body now</h1>
    <h1>this is the body now</h1>
    <h1>this is the body now</h1>
    <h1>this is the body now</h1>
    <h1>this is the body now</h1>
    <h1>this is the body now</h1>
    <h1>this is the body now</h1>
    <h2>this is the body now</h2>
    <h3>this is the body now</h3>
    <h4>this is the body now</h4>
    <h5>this is the body now</h5>
    <p>this is the body now</p>
</template>
