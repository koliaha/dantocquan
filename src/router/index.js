import { createRouter, createWebHistory  } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodView from '../views/FoodView.vue'

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
  history: createWebHistory(),
  routes
})

export default router
