<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['toggle-menu'])

function toggleMenu() {
    emit('toggle-menu')
}

const mainItems = ref([
    { title: 'Articoli', subtitle: 'Trend, dati e novità del Terzo Settore.', id: 'news' },
    { title: 'Storie', subtitle: 'Letture ed approfondimenti dei fenomeni complessi.', id: 'stories' },
    { title: 'Interviste', subtitle: 'Racconti reali di persone ed organizzazioni.', id: 'interviews' },
    { title: 'Opinioni', subtitle: 'Riflessioni e confronti dei nostri opinionisti.', id: 'opinions' },
    { title: 'Podcast', subtitle: 'Un luogo per dare voce ai protagonisti della sostenibilità.', id: 'podcast' },
    { title: 'Bookazine', subtitle: 'Una rivista da leggere e un libro da conservare.', id: 'bookazine' }
])

// Array dei "blocchi piccoli" (in basso, 8 elementi)
const subItems = ref([
    { title: 'Chi siamo', id: 'about' },
    { title: 'Comitato editoriale', id: 'editorial' },
    { title: 'Servizi', id: 'services' },
    { title: 'Agenda / Eventi', id: 'agenda' },
    { title: 'Mappa dell\'attivismo', id: 'map' },
    { title: 'Inchieste crowdfunding', id: 'crowdfunding' },
])
</script>

<template>
    <div class="menuContainer" :class="{ open: props.isOpen }">
        <div class="menuIcon" @click.stop="toggleMenu">
            <font-awesome-icon :icon="['fas', props.isOpen ? 'times' : 'bars']" color="red" />
        </div>
        <div class="menuContent">
            <div class="gridsWrapper">
                <div class="gridMain">
                    <RouterLink v-for="(item) in mainItems" :to="'/' + item.id" class="gridItem main"
                        @click="toggleMenu">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.subtitle }}</p>
                    </RouterLink>
                </div>

                <div class="gridSub">
                    <RouterLink v-for="(item) in subItems" :to="'/' + item.id" :key="item.id" class="gridItem sub"
                        @click="toggleMenu">
                        <p>{{ item.title }}</p>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
