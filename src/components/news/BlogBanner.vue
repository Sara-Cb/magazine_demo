<script setup>
import { ref } from 'vue'
const blogs = ref([
    {
        title: 'Il Becco dell\'oca',
        author: 'Paolo Dell\'Oca',
        avatar: 'https://www.placekittens.com/200/200',
        address: '#'
    },
    {
        title: 'Disarmato',
        author: 'Pasquale Pugliese',
        avatar: 'https://www.placekittens.com/200/200',
        address: '#'
    },
    {
        title: 'Battitiperminuto',
        author: 'Lorenzo Maria Alvaro',
        avatar: 'https://www.placekittens.com/200/200',
        address: '#'
    },
    {
        title: 'La Zanzarella',
        author: 'Elena Zanzarella',
        avatar: 'https://www.placekittens.com/200/200',
        address: '#'
    },
    {
        title: 'Impact Q&A',
        author: 'Laura Orestano',
        avatar: 'https://www.placekittens.com/200/200',
        address: '#'
    }
])
</script>

<template>
    <div class="blogBanner">
        <h2 class="title">Il Blog</h2>
        <a :href="blog.address" v-for="(blog, index) in blogs" :key="index" class="blogCard">
            <img :src="blog.avatar" alt="Avatar" class="avatar" />
            <h3 class="blogTitle">{{ blog.title }}</h3>
            <p class="author">Di {{ blog.author }}</p>
        </a>
    </div>
</template>