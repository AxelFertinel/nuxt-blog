// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    css: ["~/assets/css/main.css"],
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss"],
    experimental: {
        defaults: {
            nuxtLink: {
                // default values
                componentName: "NuxtLink",
                externalRelAttribute: "noopener noreferrer",
                activeClass: "router-link-active",

                prefetchedClass: undefined, // can be any valid string class name
                trailingSlash: undefined,
                prefetchOn: { visibility: true },
            },
        },
    },
});
