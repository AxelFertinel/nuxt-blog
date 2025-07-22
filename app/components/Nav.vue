<template>
    <nav>
        <ul class="menu">
            <li v-for="item in items" :key="item.label">
                <NuxtLink :to="item.to" :class="{ active: item.active }">
                    {{ item.label }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import type { NavigationMenuItem } from "@nuxt/ui";

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
