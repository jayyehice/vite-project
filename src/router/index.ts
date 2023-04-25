import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path: '/learning/', name: 'home', component: () => import('../components/home/Index.vue')},
  {path: '/learning/multiplication', name: 'Multiplication', component: () => import('../components/Multiplication.vue')},
  {path: '/learning/test', name: 'test', component: () => import('../components/HelloWorld.vue')},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router