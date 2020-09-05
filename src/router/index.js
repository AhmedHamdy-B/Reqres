import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import resourceList from '../views/resourceList.vue'
import resourceDetail from '../views/resourceDetail.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/resourceList',
    name: 'resourceList',
    component: resourceList
  },
  {
    path: '/resourceList/:slug',
    name: 'resourceDetail',
    component: resourceDetail
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
