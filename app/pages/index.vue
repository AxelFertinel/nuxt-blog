<template>
    <div class="container">
        <h1>Accueil de mon blog</h1>
        <p class="bold mb-2">
            Ce projet à pour but de m'entrainer à manipuler Nuxt.Js
        </p>
        <ul class="list-disc pl-4">
            <li>J'utilise Jsonplaceholder pour les fakes posts/comments</li>
            <li>Création d'un layout default et custom pour les posts</li>
            <li>Création de composant réutilisable pour post/comment</li>
            <li>Style basique avec tailwind CSS</li>
            <li>Route dynamic avec blog/[id]</li>
        </ul>
        <form action="" class="shadow p-2 rounded w-64 mt-2">
            <div>
                <label for="" class="font-bold">Nom</label>
                <input
                    type="text"
                    name="nom"
                    class="border block rounded w-full"
                    v-model="nom"
                />
            </div>
            <div>
                <label for="" class="font-bold">Prénom</label>
                <input
                    type="text"
                    name="prenom"
                    class="border block rounded w-full"
                    v-model="prenom"
                />
            </div>
            <button
                type="submit"
                @click.prevent="login"
                class="bg-green-500 hover:bg-green-700 p-2 rounded text-white mt-2"
            >
                Envoyer
            </button>
        </form>
    </div>
</template>
<script setup>
import { userStore } from "~/store/user";

const store = userStore();
const nom = ref("");
const prenom = ref("");

const login = () => {
    store.auth(nom.value, prenom.value);
};

useHead({
    title: "Accueil",
});
</script>
