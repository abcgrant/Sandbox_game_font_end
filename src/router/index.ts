import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '@/store'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/team',
    name: 'Team',
    component: () => import('../views/GameInitial/Team.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/GameInitial/Login.vue')
  },
  {
    path: '/Purchasing',
    name: 'Purchasing',
    component: () => import('../views/Game/Purchasing.vue')
  },
  {
    path: '/HRM',
    name: 'HRM',
    component: () => import('../views/Game/HRM.vue')
  },
  {
    path: '/Marketing',
    name: 'Marketing',
    component: () => import('../views/Game/Marketing.vue')
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.name !== 'Login'){
    if (store.state.userinfo.token) {
      NProgress.start()
      next()
    }
    else {
      store.dispatch('autoLogin').then(r => {
        if (store.state.userinfo.token) {
          NProgress.start()
          next()
        } else {
          NProgress.start()
          next('/login')
        }
      })
    }
  }
  else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done();
});

export default router
