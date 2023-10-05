import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import '../../public/assets/css/auth-style.css';
import '../../public/assets/css/style.css';
import Tabs from '../layouts/Tabs.vue';
import AuthTabs from '../layouts/AuthTabs.vue';

// 1. Login and Register pages
import ArabicLang from '../pages/auth/ArabicLang.vue';
import TurkishLang from '../pages/auth/TurkishLang.vue';
import ChatLogin from '../pages/auth/ChatLogin.vue';
import AppLogin from '../pages/auth/AppLogin.vue';
import ChatSignUp from '../pages/auth/ChatSignUp.vue';
import AppIntro from '../pages/auth/AppIntro.vue';
import ProfileLogin from '../pages/auth/ProfileLogin.vue';

const routes: Array<RouteRecordRaw> = [

  {
    path: '',
    redirect: '/auth/app-intro'
  },
  {
    path: '/auth',
    component: AuthTabs,
    children: [      
      // 1. Login and Register pages
      {
        path: '/auth/chat-login',
        name: 'chat-login',
        component: ChatLogin
      },
      {
        path: '/auth/app-login',
        name: 'app-login',
        component: AppLogin
      },
      {
        path: '/auth/profile-login',
        name: 'profile-login',
        component: ProfileLogin
      },
    ]
  },

  {
    path: '/',
    component: Tabs,
    children: [
      
      //9. Student Profile
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/pages/Profile.vue'),
      },
    ]
  },

  // 1. Login and Register pages  
  {
    path: '/auth/arabic-lang',
    name: 'arabic-lang',
    component: ArabicLang
  },
  {
    path: '/auth/turkish-lang',
    name: 'turkish-lang',
    component: TurkishLang
  },
  {
    path: '/auth/chat-signup',
    name: 'chat-signup',
    component: ChatSignUp
  },
  {
    path: '/auth/app-intro',
    name: 'app-intro',
    component: AppIntro
  },
  
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
