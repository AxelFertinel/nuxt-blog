<template>
    <div class="container">
        <h1>Blog</h1>

        <div v-if="postStore.pending" class="loading">
            <p>Chargement des articles...</p>
        </div>

        <div v-else-if="postStore.error" class="error">
            <h2>Oups ! Une erreur est survenue</h2>
            <p>{{ postStore.error.message }}</p>
            <button @click="retryLoading" class="retry-btn">Réessayer</button>
        </div>

        <div v-else-if="postStore.hasPosts" class="post_grid">
            <Post v-for="post in postStore.posts" :key="post.id" :post="post" />
        </div>

        <div v-else class="no-posts">
            <p>Aucun article disponible pour le moment.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePostStore } from "~/store/post";

const postStore = usePostStore();

// Charger les posts au montage du composant
onMounted(async () => {
    // Ne charger que si pas déjà en cache
    if (!postStore.hasPosts) {
        await postStore.fetchPosts();
    }
});

// Fonction pour réessayer en cas d'erreur
const retryLoading = async () => {
    await postStore.fetchPosts();
};

// SEO
useHead({
    title: "Blog",
    meta: [
        {
            name: "description",
            content: `Découvrez nos ${postStore.postsCount} articles de blog`,
        },
    ],
});
</script>
