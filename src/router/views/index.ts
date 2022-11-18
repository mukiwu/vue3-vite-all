import { AddRouteRecordRaw } from '../index'
import Layout from '@/views/Layout.vue'

export default [
  {
    path: '/',
    component: Layout,
    name: 'Layout',
    meta: {
      title: '天地'
    },
    redirect: { path: '/home' },
    children: [
      {
        path: 'home',
        name: 'Home',
        meta: {
          title: '首頁'
        },
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/setting',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Setting',
        meta: {
          title: '設定'
        },
        component: () => import('@/views/Setting.vue')
      }
    ]
  }
] as AddRouteRecordRaw[]
