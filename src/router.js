import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signup from './views/Users/Signup.vue'
import Login from './views/Users/Login.vue'
import Logout from './views/Users/Logout.vue'
import ActorsIndex from './views/Actors/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/actors',
      name: 'actors-index',
      component: ActorsIndex
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/',
      name: 'index',
      component: () => import('./views/index.vue')
    },
    {
      path: '/movies/new',
      name: 'new',
      component: () => import('./views/new.vue')
    },
    {
      path: '/movies/:id',
      name: 'show',
      component: () => import('./views/show.vue')
    },
    {
      path: '/movies/:id/edit',
      name: 'edit',
      component: () => import('./views/edit.vue')
    }
  ]
})
