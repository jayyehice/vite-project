import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
  {path: '/', name: 'home', component: () => import('../components/home/Index.vue')},
  {path: '/multiplication', name: 'Multiplication', component: () => import('../components/Multiplication.vue')},
  {path: '/test', name: 'test', component: () => import('../components/HelloWorld.vue')},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router