<script setup>
import MyMenu from './MyMenu.vue'
import SearchBar from './SearchBar.vue'
import JoinBar from './JoinBar.vue'
import TopicsBar from './TopicsBar.vue'

import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isMenuOpen = ref(false)
const isSearchOpen = ref(false)
const isNewsPage = computed(() => route.name === 'news')

function handleToggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function handleToggleSearch() {
  isSearchOpen.value = !isSearchOpen.value
}
</script>

<template>
  <header>
    <JoinBar />
    <div class="menu-searchContainer">
      <MyMenu v-if="!isSearchOpen" :isOpen="isMenuOpen" @toggle-menu="handleToggleMenu" />

      <SearchBar v-if="!isMenuOpen" :isOpen="isSearchOpen" @toggle-search="handleToggleSearch" />
    </div>
    <TopicsBar v-if="isNewsPage" />
  </header>
</template>