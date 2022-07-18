import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/layout/home' },
  {
    path: '/layout/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/layout',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '/layout/home',
        component: () => import('@/views/Home')
      },
      {
        path: '/layout/search',
        component: () => import('@/views/Search')
      },
      {
        path: '/layout/news',
        component: () => import('@/views/News')
      },
      {
        path: '/layout/my',
        component: () => import('@/views/My')
      }
    ]
  },
  {
    path: '/favorate',
    component: () => import('@/views/Favorate')
  }
]

const router = new VueRouter({
  routes
})

export default router
