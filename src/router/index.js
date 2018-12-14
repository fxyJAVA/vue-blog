import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
      }
    }else {
      return {y:0}
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: resolve => require(['@/page/home/home'],resolve)
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/page/home/home'],resolve)
    },
    {
      path: '/article/:articleid/:pageNum',
      name: 'article',
      component: resolve => require(['@/page/article/article'],resolve)
    },
    {
      path: '/board/:pageNum',
      name: 'board',
      component: resolve => require(['@/page/board/board'],resolve)
    },
    {
      path: '/about',
      name: 'about',
      component: resolve => require(['@/page/about/about'],resolve)
    },
    {
      path: '/friend',
      name: 'friend',
      component: resolve => require(['@/page/friend/friend'],resolve)
    },
    {
      path: '/archive/:cateid',
      name: 'archive',
      component: resolve => require(['@/page/archive/archive'],resolve)
    }
  ]
})
