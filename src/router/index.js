import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import How from '../pages/How.vue'
import Faq from '../pages/Faq.vue'
import Pro from '../pages/Pro.vue'
import About from '../pages/About.vue'
import Free from '../pages/Free.vue'
import Paid from '../pages/Paid.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/how',
    name: 'how',
    component: How
  },
  {
    path: '/faq',
    name: 'faq',
    component: Faq
  },
  {
    path: '/pro',
    name: 'pro',
    component: Pro
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/free',
    name: 'free',
    component: Free
  },
  {
    path: '/paid',
    name: 'paid',
    component: Paid
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})

export default router
