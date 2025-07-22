// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    css: ["~/assets/css/main.css"],
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/tailwindcss",
        "@pinia/nuxt",
        "pinia-plugin-persistedstate/nuxt",
    ],
    experimental: {
        defaults: {
            nuxtLink: {
                componentName: "NuxtLink",
                externalRelAttribute: "noopener noreferrer",
                activeClass: "router-link-active",
            },
        },
    },
});
