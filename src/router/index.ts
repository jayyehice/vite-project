import { createRouter, createWebHistory } from 'vue-router'
import Multiplication from '../components/Multiplication.vue'

const routes = [
  {path: '/multiplication', name: 'Multiplication', component: Multiplication},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router