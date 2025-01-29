<script setup>
import { RouterView, useRoute } from 'vue-router'
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import { computed } from 'vue'

const route = useRoute()

const mainClass = computed(() => {
  if (route.name === 'news') return 'newsPage'
  if (route.name === 'about') return 'aboutPage'
  // ...
  return ''
})
</script>

<template>
  <MyHeader />
  <main :class="mainClass">
    <RouterView />
    <MyFooter />
  </main>
</template>

<!-- Stopping at 5hrs, only 3 left :/ -->