<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <footer class="smallText">
        <nav>
            <RouterLink to="/group" class="link">Il Gruppo</RouterLink>
            <RouterLink to="/legal" class="link">Note Legali</RouterLink>
            <RouterLink to="/contact" class="link">Chi Siamo</RouterLink>
            <RouterLink to="/conditions" class="link">Condizioni d'uso</RouterLink>
            <RouterLink to="/privacy" class="link">Privacy</RouterLink>
            <RouterLink to="/contact" class="link">Scrivici</RouterLink>
            <RouterLink to="/advertising" class="link">Pubblicità</RouterLink>
        </nav>

        <span>&copy; 1994-2022 Vita Società Editoriale S.p.A.</span>
    </footer>
</template>

<style scoped lang="scss">
footer {
    padding: 1rem;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        justify-content: flex-start;
        gap: 1rem;

        .link {
            text-decoration: none;

            &:hover {
                text-decoration: underline;
                text-decoration-color: red;
            }
        }
    }
}
</style>