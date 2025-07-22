<template>
    <div>
        <Nav />
        <div class="container">
            <button @click="$router.back()">Retour à la liste des posts</button>
        </div>
        <slot />
    </div>
</template>

<script>
const router = useRouter();
</script>
