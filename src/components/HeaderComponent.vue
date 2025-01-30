<script setup>
import NavMenu from './header/NavbarMenu.vue'
import SearchBar from './header/SearchBar.vue'
import JoinBar from './header/JoinBar.vue'
import TopicsBar from './header/TopicsBar.vue'

import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isMenuOpen = ref(false)
const isSearchOpen = ref(false)
const isNewsPage = computed(() => route.name === 'news')
const isWindowL = ref(window.innerWidth > 768)

window.addEventListener('resize', () => {
  isWindowL.value = window.innerWidth > 768
})

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
      <NavMenu v-if="!isSearchOpen" :isOpen="isMenuOpen" @toggle-menu="handleToggleMenu" />

      <SearchBar v-if="!isMenuOpen" :isOpen="isSearchOpen" @toggle-search="handleToggleSearch" />
    </div>
    <TopicsBar v-if="isNewsPage && isWindowL" />
  </header>
</template>