import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/case',
    name: 'Case',
    component: () => import('@/views/case/index.vue')
  },
  {
    path: '/case/detail',
    name: 'CaseDetail',
    component: () => import('@/views/case/detail.vue')
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: () => import('@/views/about-us/index.vue')
  },
  {
    path: '/contract-us',
    name: 'ContractUs',
    component: () => import('@/views/contract-us/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  }
})

export default router
