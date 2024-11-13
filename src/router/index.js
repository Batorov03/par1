import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/main.vue'
import CounterView from "@/views/Counter";
import Courses__1 from "@/views/Courses__1";
import Courses__2 from "@/views/Courses__2";
import Courses__3 from "@/views/Courses__3";
import Courses__4 from "@/views/Courses__4";
import Courses__5 from "@/views/Courses__5";
import Courses__6 from "@/views/Courses__6";




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/counter',
    name: 'counter',
    component: CounterView
  },
  {
    path: '/courses',
    name: 'courses',
    component: Courses__1
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/courses__2',
    name: 'courses__2',
    component: Courses__2
  },
  {
    path: '/courses__3',
    name: 'courses__3',
    component: Courses__3
  },
  {
    path: '/courses__4',
    name: 'courses__4',
    component: Courses__4
  },
  {
    path: '/courses__5',
    name: 'courses__5',
    component: Courses__5
  },
  {
    path: '/courses__6',
    name: 'courses__6',
    component: Courses__6
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
