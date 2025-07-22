<template>
    <div class="card group">
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
</template>

<script setup lang="ts">
import type { Post } from "~/types/posts";

defineProps<{
    post: Post;
}>();
</script>
