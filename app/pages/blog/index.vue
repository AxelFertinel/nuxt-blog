<template>
    <div class="container">
        <h1>Blog</h1>

        <div v-if="pending" class="loading">
            <p>Chargement des articles...</p>
        </div>

        <div v-else-if="error" class="error">
            <h2>Oups ! Une erreur est survenue</h2>
            <p>Impossible de charger les articles</p>
        </div>

        <div v-else-if="posts && posts.length > 0" class="post_grid">
            <Post v-for="post in posts" :key="post.id" :post="post" />
        </div>

        <div v-else class="no-posts">
            <p>Aucun article disponible pour le moment.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Post } from "~/types/posts";

useHead({
    title: "Blog",
});

const {
    data: posts,
    pending,
    error,
} = useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts?_limit=20");
</script>
