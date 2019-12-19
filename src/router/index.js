import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/teacherDetail',
    name: 'teacherDetail',
    component: () => import('../views/teacherDetail.vue')
  },
  {
    path: '/teacher',
    name: 'teacher',
    component: () => import('../views/teacher.vue')
  },
  {
    path: '/classTableDay',
    name: 'classTableDay',
    component: () => import('../views/classTableDay.vue')
  },
  {
    path: '/newNotice',
    name: 'newNotice',
    component: () => import('../views/newNotice.vue')
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: () => import('../views/signUp.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
