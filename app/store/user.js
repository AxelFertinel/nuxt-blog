import { defineStore } from "pinia";
export const userStore = defineStore(
    "user",
    () => {
        const user = ref(null);
        const auth = (nom, prenom) => {
            user.value = {
                username: nom + " " + prenom,
            };
        };
        return { user, auth };
    },
    {
        persist: true,
    }
);

