import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import IndexView from '@/modules/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  // {
  //   path: '/codemirror',
  //   name: 'codemirror',
  //   component: () => import('@/modules/codemirror.vue')
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
