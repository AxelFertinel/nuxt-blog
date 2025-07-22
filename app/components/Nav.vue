<template>
    <nav class="flex justify-between">
        <ul class="menu flex-1">
            <li v-for="item in items" :key="item.label">
                <NuxtLink :to="item.to" :class="{ active: item.active }">
                    {{ item.label }}
                </NuxtLink>
            </li>
        </ul>
        <div class="flex items-center justify-center mr-5 font-bold">
            <p v-if="store.user === null">se connecter</p>
            <p v-else>{{ store.user?.username }}</p>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import type { NavigationMenuItem } from "@nuxt/ui";
import { userStore } from "~/store/user";
const store = userStore();

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
    {
        label: "Accueil",
        to: "/",
    },
    {
        label: "Blog",
        to: "/blog",
        active: route.path.startsWith("/blog"),
    },
]);
</script>
