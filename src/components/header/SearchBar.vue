<script setup>
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['toggle-search'])

function toggleSearch() {
    emit('toggle-search')
}
</script>

<template>
    <div class="searchContainer" :class="{ 'open': props.isOpen }">
        <div class="searchField">
            <input type="text" placeholder="Search.." />
        </div>
        <div class="searchIcon" @click.stop="toggleSearch">
            <font-awesome-icon :icon="['fas', props.isOpen ? 'times' : 'magnifying-glass']" color="red" />
        </div>
    </div>
</template>
