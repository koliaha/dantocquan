import { createRouter, createWebHashHistory } from 'vue-router'
const HomeView = () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
const FoodView = () => import(/* webpackChunkName: "food" */ '../views/FoodView.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/food/:id',
    name: 'food',
    component: FoodView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router