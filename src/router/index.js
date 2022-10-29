import { createRouter, createWebHashHistory } from 'vue-router'
import { defineAsyncComponent } from "vue"

const routes = [
    {
        path: '/',
        name: 'home',
        component: defineAsyncComponent(() => import('@/pages/HomePage'))
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router