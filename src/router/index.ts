import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '@/store'
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
    path: '/login',
    name: 'Login',
    component: () => import('../views/GameInitial/Login.vue')
  },
  {
    path: '/t',
    name: 'T',
    component: () => import('../views/test.vue')
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.name !== 'Login'){
    if (store.state.user.userinfo.token) {
      NProgress.start()
      next()
    }
    else {
      store.dispatch('autoLogin').then(r => {
        if (store.state.user.userinfo.token) {
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
