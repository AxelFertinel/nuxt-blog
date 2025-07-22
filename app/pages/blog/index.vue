<template>
    <div class="container">
        <h1>Blog</h1>
        <div class="post_grid">
            <Post v-for="post in posts" :key="post.id" :post="post" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Post } from "~/types/posts";
useHead({
    title: "Blog",
});
const posts = await $fetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts?_limit=20"
);
</script>
