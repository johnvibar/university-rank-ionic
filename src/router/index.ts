import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import '../../public/assets/css/style.css';
import Tabs from '../layouts/Tabs.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/profile',
    name: 'profile',
    component: Tabs
  },
  {
    path: '/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/profile'
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/pages/Profile.vue'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
