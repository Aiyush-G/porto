import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../components/Redundant/Home.vue'
import About from '../components/Redundant/About.vue'
import Create from '../components/Create.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Create,
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
