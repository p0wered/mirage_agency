import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import Vuesax from 'vuesax3'
import 'vuesax3/dist/vuesax.css' //Vuesax styles

const app = createApp(App)
    app.use(router)
    app.use(Vuesax, {})
    app.mount('#app')
