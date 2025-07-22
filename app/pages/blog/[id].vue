<template>
    <div class="container">
        <div class="lg:grid lg:grid-cols-4 lg:gap-4">
            <div class="col-span-3">
                <h1>{{ post.title }}</h1>
                <p>{{ post.body }}</p>
                <div class="mt-4">
                    <h2>Commentaires</h2>
                    <div class="lg:grid lg:grid-cols-3 lg:gap-4">
                        <Comment
                            v-for="comment in comments"
                            :key="comment.id"
                            :comment="comment"
                        />
                    </div>
                </div>
            </div>
            <div class="lg:grid lg:gap-4">
                <h2>Articles recommandé</h2>
                <Post v-for="post in posts" :key="post.id" :post="post" />
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

useSeoMeta({
    title: post.title,
    ogTitle: post.title,
    description: post.body,
    ogDescription: post.body,
    ogImage: "https://example.com/image.png",
    twitterCard: "summary_large_image",
});

const posts = await $fetch<Post[]>(
    `https://jsonplaceholder.typicode.com/posts?_start=${id}&_limit=3`
);

const comments = await $fetch<Comments[]>(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments?_limit=3`
);
</script>

<style lang="scss" scoped></style>
