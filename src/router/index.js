import Vue from 'vue'
import Router from 'vue-router'
import test from '@/components/test'
import ceshi from '@/components/ceshi'
import home from '@/page/home/home'
import board from '@/page/board/board'
import article from '@/page/article/article'
import about from '@/page/about/about'
import friend from '@/page/friend/friend'
import archive from '@/page/archive/archive'
import group from '@/page/group/group'

Vue.use(Router)

export default new Router({
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
      path: '/article',
      name: 'articles',
      component: article
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/ceshi',
      name: 'ceshi',
      component: ceshi
    },
    {
      path: '/board',
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
      path: '/archive',
      name: 'archive',
      component: archive
    },
    {
      path: '/group',
      name: 'group',
      component: group
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {y: 0}
    }
  }
})
