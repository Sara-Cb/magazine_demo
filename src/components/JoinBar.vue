<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="join smallText">
        <RouterLink to="/contribute" class="contribute">Contribuisci</RouterLink>
        <RouterLink to="/subscribe" class="subscribe">Abbonati</RouterLink>

        <RouterLink to="/sign-in" class="signIn">
            <font-awesome-icon :icon="['fas', 'user']" />
            <span>Accedi</span>
        </RouterLink>
    </div>
</template>