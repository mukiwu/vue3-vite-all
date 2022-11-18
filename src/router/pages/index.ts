import { AddRouteRecordRaw } from '../index'

export default [
  {
    path: '/login',
    name: 'login',
    hidden: false, // 自訂添加的屬性
    meta: {
      title: '登錄'
    },
    component: () => import('@/pages/Login.vue')
  },
  {
    path: '/:pathMath(.*)', // 或 /:pathMatch(.*)*
    name: '404',
    hidden: false, // 自訂添加的屬性
    meta: {
      title: '404'
    },
    component: () => import('@/pages/NotFound-404.vue')
  }
] as AddRouteRecordRaw[]
