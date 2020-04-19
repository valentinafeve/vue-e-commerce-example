import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from './views/Cart'
import Checkout from './views/Checkout'
import History from './views/History'
import Home from './views/Home'
import Login from './views/Login'
import Signup from './views/Signup'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
  },
  {
    path: '/history',
    name: 'history',
    component: History
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
]

const  router  =  new  VueRouter({
  routes
})

export default router;
