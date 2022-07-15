import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Search from '@/views/Search'
import News from '@/views/News'
import My from '@/views/My'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/layout/my' },
  {
    path: '/layout/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/layout',
    component: Layout,
    children: [
      {
        path: '/layout/home',
        component: Home
      },
      {
        path: '/layout/search',
        component: Search
      },
      {
        path: '/layout/news',
        component: News
      },
      {
        path: '/layout/my',
        component: My
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
