// store/post.ts
import { defineStore } from "pinia";
import type { Post } from "~/types/posts";

export const usePostStore = defineStore("post", () => {
    // État réactif
    const posts = ref<Post[]>([]);
    const pending = ref(false);
    const error = ref<Error | null>(null);

    // Actions
    const fetchPosts = async () => {
        try {
            pending.value = true;
            error.value = null;

            const data = await $fetch<Post[]>(
                "https://jsonplaceholder.typicode.com/posts?_limit=20"
            );
            posts.value = data || [];
        } catch (err) {
            error.value = err as Error;
            console.error("Erreur lors du chargement des posts:", err);
        } finally {
            pending.value = false;
        }
    };

    // Getters
    const hasPosts = computed(() => posts.value.length > 0);
    const postsCount = computed(() => posts.value.length);

    // Actions supplémentaires
    const getPostById = (id: number) => {
        return posts.value.find((post) => post.id === id);
    };

    return {
        // État
        posts: readonly(posts),
        pending: readonly(pending),
        error: readonly(error),

        // Getters
        hasPosts,
        postsCount,

        // Actions
        fetchPosts,
        getPostById,
    };
});
