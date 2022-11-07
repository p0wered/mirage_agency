import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import Vuesax from 'vuesax3'
import 'vuesax3/dist/vuesax.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const app = createApp(App)
    app.use(router)
    app.use(Vuesax, {})
    app.mount('#app')
