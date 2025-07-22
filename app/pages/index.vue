<template>
    <div class="container">
        <h1>Accueil de mon blog</h1>
        <p class="bold mb-2">
            Ce projet à pour but de m'entrainer à manipuler Nuxt.Js
        </p>
        <ul class="list-disc pl-4">
            <li>J'utilise Jsonplaceholder pour les fakes posts/comments</li>
            <li>Création d'un layout defautl et custom pour les posts</li>
            <li>Création de composant réutilisable pour post/comment</li>
            <li>Style basique avec tailwind CSS</li>
            <li>Route dynamic avec blog/[id]</li>
        </ul>
    </div>
</template>
<script setup>
useHead({
    title: "Accueil",
});
</script>
