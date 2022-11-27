import { createRouter, createWebHashHistory } from 'vue-router'
import { defineAsyncComponent } from "vue"

const routes = [
    {
        path: '/',
        name: 'home',
        component: defineAsyncComponent(() => import('@/pages/HomePage'))
    },
    {
        path: '/projects',
        name: 'projects',
        component: defineAsyncComponent(() => import('@/pages/ProjectsPage'))
    },
    {
        path: '/pricing',
        name: 'pricing',
        component: defineAsyncComponent(() => import('@/pages/PricingPage'))
    },
    {
        path: '/news',
        name: 'news',
        component: defineAsyncComponent(() => import('@/pages/NewsPage'))
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: defineAsyncComponent(() => import('@/pages/ContactsPage'))
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    // eslint-disable-next-line no-unused-vars
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
})

export default router