<script setup>
import { RouterView, useRoute } from 'vue-router'
import HeaderComp from './components/HeaderComponent.vue'
import FooterComp from './components/FooterComponent.vue'
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
  <HeaderComp />
  <main :class="mainClass">
    <RouterView />
    <FooterComp />
  </main>
</template>

<!-- Stopping at 5hrs, only 3 left :/ -->