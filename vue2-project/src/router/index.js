import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let importMyViews = file=> () => import(/* webpackChunkName: "about" */ `../views/${file}.vue`)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: importMyViews('Home')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
