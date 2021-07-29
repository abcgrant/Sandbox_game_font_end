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
    component: () => import(/* webpackChunkName: "about" */ '../views/GameInitial/Team.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/GameInitial/Login.vue')
  }
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
          console.log('dispatch(\'autoLogin\')',store.state.userinfo.token)
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
