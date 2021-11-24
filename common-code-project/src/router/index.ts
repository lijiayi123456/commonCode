import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/web',
    name: 'web',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "web" */ '../views/webs/Webs.vue')
  },
  {
    path: '/tencent',
    name: 'Tencent',
    component: () => import(/* webpackChunkName: "web" */ '../views/webs/Tencent.vue')
  },
  {
    path: '/vueHome',
    name: 'vueHome',
    component: () => import(/* webpackChunkName: "vue" */ '../views/vueDemo/vueHome.vue')
  },
  {
    path: '/carouselDemo',
    name: 'carouselDemo',
    component: () => import(/* webpackChunkName: "vue" */ '../views/vueDemo/carouselDemo.vue')
  },
  {
    path: '/cssHome',
    name: 'cssHome',
    component: () => import(/* webpackChunkName: "css" */ '../views/cssPages/cssHome.vue')
  },
  {
    path: '/verticalAlign',
    name: 'verticalAlign',
    component: () => import(/* webpackChunkName: "css" */ '../views/cssPages/verticalAlign.vue')
  },
  {
    path: '/cssSlider',
    name: 'cssSlider',
    component: () => import(/* webpackChunkName: "css" */ '../views/cssPages/cssSlider.vue')
  },
  {
    path: '/jsHome',
    name: 'jsHome',
    component: () => import(/* webpackChunkName: "css" */ '../views/JSPages/JsHome.vue')
  },
  {
    path: '/JsComAlgorithm',
    name: 'JsComAlgorithm',
    component: () => import(/* webpackChunkName: "css" */ '../views/JSPages/JsComAlgorithm.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
