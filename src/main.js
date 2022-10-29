import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import Vue from 'vue'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
    // options here
})

createApp(App).use(router).mount('#app')
