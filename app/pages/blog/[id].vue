<template>
    <div class="container">
        <div v-if="pending" class="loading">
            <p>Chargement de l'article.....</p>
        </div>

        <div v-else-if="error" class="error">
            <h2>Article introuvable</h2>
            <p>
                {{
                    error.message ||
                    "L'article demandé n'existe pas ou n'a pas pu être chargé"
                }}
            </p>
            <NuxtLink to="/blog"> Retour au blog </NuxtLink>
        </div>

        <div v-else class="lg:grid lg:grid-cols-4 lg:gap-8">
            <article class="col-span-3">
                <header class="mb-6">
                    <h1 class="text-3xl font-bold mb-4">{{ post?.title }}</h1>
                </header>

                <div class="prose max-w-none">
                    <p class="text-lg leading-relaxed">{{ post?.body }}</p>
                </div>

                <section class="mt-8">
                    <h2 class="text-2xl font-semibold mb-4">
                        Commentaires
                        <span v-if="comments" class="text-sm text-gray-500">
                            ({{ comments.length }})
                        </span>
                    </h2>

                    <div v-if="commentsError" class="text-red-500 mb-4">
                        Impossible de charger les commentaires
                    </div>

                    <div
                        v-else-if="comments?.length"
                        class="lg:grid lg:grid-cols-1 lg:gap-4"
                    >
                        <Comment
                            v-for="comment in comments"
                            :key="comment.id"
                            :comment="comment"
                        />
                    </div>

                    <p v-else class="text-gray-500 italic">
                        Aucun commentaire pour cet article
                    </p>
                </section>
            </article>

            <aside class="mt-8 lg:mt-0">
                <h2 class="text-xl font-semibold mb-4">Articles recommandés</h2>

                <div v-if="recommendedPostsError" class="text-red-500 text-sm">
                    Impossible de charger les articles recommandés
                </div>

                <div v-else-if="recommendedPosts?.length" class="space-y-4">
                    <Post
                        v-for="recommendedPost in recommendedPosts"
                        :key="recommendedPost.id"
                        :post="recommendedPost"
                        class="text-sm"
                    />
                </div>

                <p v-else class="text-gray-500 text-sm italic">
                    Aucun article recommandé disponible
                </p>
            </aside>
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
const postId = Number(route.params.id);

const {
    data: post,
    pending,
    error,
} = useFetch<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    key: `post-${postId}`,
    transform: (data: Post) => {
        // Utiliser nextTick pour s'assurer que le composant est monté
        nextTick(() => {
            useSeoMeta({
                title: data.title,
                ogTitle: data.title,
                description: data.body.substring(0, 160) + "...",
                ogDescription: data.body.substring(0, 160) + "...",
                ogImage: "https://example.com/image.png",
                twitterCard: "summary_large_image",
            });
        });
        return data;
    },
});

const { data: comments, error: commentsError } = useFetch<Comments[]>(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    {
        key: `comments-${postId}`,
        server: false,
    }
);

const { data: recommendedPosts, error: recommendedPostsError } = useFetch<
    Post[]
>(`https://jsonplaceholder.typicode.com/posts?_start=${postId}&_limit=5`, {
    key: `recommended-${postId}`,
    server: false,
});
</script>
