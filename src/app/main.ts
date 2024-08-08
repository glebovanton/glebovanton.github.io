import '../assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueGtag from "vue-gtag"
import App from '../App.vue'
import router from '../router'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)

if (import.meta.env.MODE !== "development") {
    app.use(VueGtag,
        {
            appName: "glebovanton.github.io",
            pageTrackerScreenviewEnabled: true,
            config: {
                id: "G-8STX2NJWYH"
            },
        },
        router
    )
}

app.mount('#app')

