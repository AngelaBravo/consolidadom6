import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OpinionView from '@/views/OpinionView.vue'
import Error404View from '@/views/Error404View.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/opinion/:miidentificador',
    name: 'opinion',
    component: OpinionView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error404',
    component: Error404View,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
