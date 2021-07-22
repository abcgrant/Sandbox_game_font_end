import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/loading',
    name: 'Loading',
    component: () => import(/* webpackChunkName: "about" */ '../views/GameInitial/Loading.vue'),
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
  if (to.name !== 'Loading'){
    NProgress.start()
    next()
  }
  else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done();
});

export default router
