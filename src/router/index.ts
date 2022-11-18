import { createRouter, Router, createWebHistory, RouteRecordRaw } from 'vue-router'
import pageRouter from './pages'
import viewRouter from './views'

// 對 RouteRecordRaw 類型進行擴展
export type AddRouteRecordRaw = RouteRecordRaw & {
  hidden?: boolean
}

const router: Router = createRouter({
  history: createWebHistory(),
  routes: [...pageRouter, ...viewRouter]
})

export default router
