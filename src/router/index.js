import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home'
import board from '@/page/board/board'
import article from '@/page/article/article'
import about from '@/page/about/about'
import friend from '@/page/friend/friend'
import archive from '@/page/archive/archive'
import group from '@/page/group/group'

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
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/article/:articleid/:pageNum',
      name: 'article',
      component: article
    },
    {
      path: '/board/:pageNum',
      name: 'board',
      component: board
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/friend',
      name: 'friend',
      component: friend
    },
    {
      path: '/archive/:cateid',
      name: 'archive',
      component: archive
    },
    {
      path: '/group',
      name: 'group',
      component: group
    }
  ]
})
