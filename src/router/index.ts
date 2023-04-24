import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path: '/', name: 'home', component: () => import('../components/home/Index.vue')},
  {path: '/multiplication', name: 'Multiplication', component: () => import('../components/Multiplication.vue')},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router