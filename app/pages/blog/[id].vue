<template>
    <div class="container">
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
        <div class="mt-4">
            <h2>Commentaires</h2>
            <div class="post_grid">
                <Comment
                    v-for="comment in comments"
                    :key="comment.id"
                    :comment="comment"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Comments } from "~/types/comments";
import type { Post } from "~/types/posts";
definePageMeta({
    layout: "custom",
});
const route = useRoute();
const id = route.params.id;
const post = await $fetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
);

const comments = await $fetch<Comments[]>(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments?_limit=4`
);
</script>

<style lang="scss" scoped></style>
