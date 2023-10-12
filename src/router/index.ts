import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import '../../public/assets/css/auth-style.css';
import '../../public/assets/css/style.css';

import Tabs from '../components/Tabs.vue';
import AuthTabs from '../components/AuthTabs.vue';

// 1. Login and Register pages
import ArabicLang from '../pages/auth/ArabicLang.vue';
import TurkishLang from '../pages/auth/TurkishLang.vue';
import ChatLogin from '../pages/auth/ChatLogin.vue';
import AppLogin from '../pages/auth/AppLogin.vue';
import ChatSignUp from '../pages/auth/ChatSignUp.vue';
import AppIntro from '../pages/auth/AppIntro.vue';
import ProfileLogin from '../pages/auth/ProfileLogin.vue';

// 2. Student Profile pages
import Profile from '../pages/Profile.vue';

// 4. Explore Results pages
import ExploreHome from '../pages/explore/ExploreHome.vue';
import ListingCategory from '../pages/explore/ListingCategory.vue';
import RecentSearches from '../pages/explore/RecentSearches.vue';
import NothingFound from '../pages/explore/NothingFound.vue';
import SearchResult from '../pages/explore/SearchResult.vue';
import SearchResultPrograms from '../pages/explore/SearchResultPrograms.vue';
import SearchResultProgramsList from '../pages/explore/SearchResultProgramsList.vue';
import SearchResultInstitutions from '../pages/explore/SearchResultInstitutions.vue';
import SearchResultProInst from '../pages/explore/SearchResultProInst.vue';
import ExploreCountry from '../pages/explore/ExploreCountry.vue';
import ExploreCountryContinent from '../pages/explore/ExploreCountryContinent.vue';
import ExploreCountryInspired from '../pages/explore/ExploreCountryInspired.vue';
import ExploreCountrySecrets from '../pages/explore/ExploreCountrySecrets.vue';
import ExploreCountryTopArticle from '../pages/explore/ExploreCountryTopArticle.vue';

const routes: Array<RouteRecordRaw> = [

  {
    path: '',
    redirect: '/auth/app-intro'
  },

  // AuthTabs Children pages
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

  // Tab Children pages
  {
    path: '/',
    component: Tabs,
    children: [
      
      //9. Student Profile
      {
        path: '/profile',
        name: 'profile',
        component: Profile
      },
      {
        path: '/explore/home',
        name: 'explore-home',
        component: ExploreHome,
      },
      {
        path: '/explore/country',
        name: 'explore-country',
        component: ExploreCountry,
      },
      {
        path: '/explore/country-continent',
        name: 'explore-country-continent',
        component: ExploreCountryContinent,
      },
      {
        path: '/explore/country-inspired',
        name: 'explore-country-inspired',
        component: ExploreCountryInspired,
      },
      {
        path: '/explore/country-secrets',
        name: 'explore-country-secrets',
        component: ExploreCountrySecrets,
      },
      {
        path: '/explore/country-top-article',
        name: 'explore-country-top-article',
        component: ExploreCountryTopArticle,
      },
    ]
  },

  // Without Tabs
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

  // 4. Explore Result
  {
    path: '/explore/listing-category',
    name: 'listing-category',
    component: ListingCategory
  },
  {
    path: '/explore/recent-searches',
    name: 'recent-searches',
    component: RecentSearches
  },
  {
    path: '/explore/nothing-found',
    name: 'nothing-found',
    component: NothingFound
  },
  {
    path: '/explore/search-result',
    name: 'search-result',
    component: SearchResult
  },
  {
    path: '/explore/search-result-programs',
    name: 'search-result-programs',
    component: SearchResultPrograms
  },
  {
    path: '/explore/search-result-programs-list',
    name: 'search-result-programs-list',
    component: SearchResultProgramsList
  },
  {
    path: '/explore/search-result-institutions',
    name: 'search-result-institutions',
    component: SearchResultInstitutions
  },
  {
    path: '/explore/search-result-pro-inst',
    name: 'search-result-pro-inst',
    component: SearchResultProInst
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
