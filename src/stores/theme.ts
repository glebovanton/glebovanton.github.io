import { defineStore } from "pinia"

import { storageThemeKey, Theme } from "@/types/theme"

export const useThemeStore = defineStore('theme', {
    state: () => {
        return { appTheme: null }
    },
    actions: {
        initTheme() {
            const localTheme = window.localStorage.getItem(storageThemeKey) as Theme | null;

            if (localTheme) {
                this.setTheme(localTheme);

                return;
            }

            if (
                !localTheme &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
            ) {
                this.setTheme(Theme.Dark);
            }
        },
        setTheme(theme: Theme) {
            this.appTheme = theme;

            window.localStorage.setItem(storageThemeKey, theme);

            document.documentElement.classList[theme === Theme.Dark ? "add" : "remove"](Theme.Dark);
        },
        toggleTheme() {
            if (this.appTheme === Theme.Light) {
                this.setTheme(Theme.Dark);
            } else {
                this.setTheme(Theme.Light);
            }
        },
    },
})