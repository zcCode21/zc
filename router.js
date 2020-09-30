import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8eae8f52 = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "pages/home/index" */))
const _14cc6b16 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _8067714e = () => interopDefault(import('..\\pages\\_child\\index.vue' /* webpackChunkName: "pages/_child/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/home",
    component: _8eae8f52,
    name: "home"
  }, {
    path: "/",
    component: _14cc6b16,
    name: "index"
  }, {
    path: "/:child",
    component: _8067714e,
    name: "child"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
