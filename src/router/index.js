import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Redundant/Home.vue'
import About from '../components/Redundant/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
