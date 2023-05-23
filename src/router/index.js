import { createRouter, createWebHistory } from 'vue-router'
import MainMap from '../components/MainMap.vue'
import HomeComponent from '../components/HomeComponent.vue'

const routes = [
  { path: '/',component:HomeComponent},
  { path: '/map', component: MainMap }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router