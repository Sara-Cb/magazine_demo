import { createRouter, createWebHistory } from 'vue-router'
import NewsView from '../views/NewsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/news/:topic?',
      name: 'news',
      component: NewsView,
    },
    {
      // 404
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router
