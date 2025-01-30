<script setup>
import TopicsList from './TopicsList.vue';

</script>

<template>
    <div class="topicsBar">
        <TopicsList />
        <div class="accessibilityIcons">
            <font-awesome-icon :icon="['fas', 'a']" />
            <font-awesome-icon :icon="['fas', 'image']" />
        </div>

    </div>
</template>