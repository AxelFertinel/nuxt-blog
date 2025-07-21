<template>
    <div class="container">
        <h1>Blog</h1>
        <div class="post_grid">
            <div v-for="post in posts" :key="post.id" class="card group">
                <div class="content">
                    <h2>{{ post.title }}</h2>
                    <p>{{ post.body.substring(0, 100) }}...</p>
                </div>
                <NuxtLink
                    :to="`/blog/${post.id}`"
                    class="btn bg-blue-500 group-hover:bg-blue-600 block ml-auto mt-auto"
                >
                    Lire plus
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";
import type { Post } from "~/types/posts";

const posts = await $fetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts?_limit=20"
);
console.log("⚖ posts:", posts);
</script>
