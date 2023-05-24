import { createRouter, createWebHistory } from 'vue-router'
import MainMap from '../components/MainMap.vue'
import HomeComponent from '../components/HomeComponent.vue'
import PlacesComponent from '../components/PlacesComponent.vue'
import PeopleComponent from '../components/PeopleComponent.vue'
import DocumentsComponent from '../components/DocumentsComponent.vue'
import SeeDocument from '../components/SeeDocument.vue'


const routes = [
  { path: '/',component:HomeComponent},
  { path: '/map', component: MainMap },
  { path: '/places',component:PlacesComponent},
  { path: '/people',component:PeopleComponent},
  { path: '/documents',component:DocumentsComponent},
  { path: '/document/:id',name:'document',component:SeeDocument,props:true}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router