<template>
    <div class="card">
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
</template>

<script setup lang="ts">
import type { Comments } from "~/types/comments";
const props = defineProps<{
    comment: Comments;
}>();
</script>
