<template>
    <div class="container">
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
        <div class="mt-4">
            <h2>Commentaires</h2>
            <div class="post_grid">
                <div v-for="comment in comments" :key="comment.id" class="card">
                    <h3>
                        {{ comment.name }}
                    </h3>
                    <p>
                        {{ comment.email }}
                    </p>
                    <p>
                        {{ comment.body }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Comments } from "~/types/comments";
import type { Post } from "~/types/posts";

const route = useRoute();
const id = route.params.id;
const post = await $fetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
);

const comments = await $fetch<Comments[]>(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
);
</script>

<style lang="scss" scoped></style>
