<template>
  <div id="app">
    <navbar :screenWidth="width"/>
    <transition mode="out-in" enter-active-class="bounceInLeft" leave-active-class="bounceOutLeft">
      <keep-alive>
        <router-view :screenWidth="width" class="animated fast" :key="new Date().getTime()"/>
      </keep-alive>
    </transition>
    <last/>
  </div>
</template>

<script>
  import navbar from '@/components/nav/navbar'
  import last from './page/footer/footer'
  import POWERMODE from 'html-activate-power-mode'

  document.body.addEventListener('input', POWERMODE);
  export default {
    name: 'App',
    components: {
      navbar,
      last,
    },
    data() {
      return {
        width: 0
      }
    },
    created() {
      this.width = document.body.clientWidth
    },
    mounted() {
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          this.width = window.screenWidth
        })()
      }
    }
  }
</script>

<style>
  @import './style/responsive.css';
  @import "./style/article.css";
  @import './font/siyuan.css';
  @import './font/Poppins.css';
  @import './style/style.css';
  #app {
    background: rgba(242, 242, 242, 1) !important;
    font-family: "Poppins","SiYuanHeiTi";
  }
  a {
    color: #000;
    text-decoration: none !important;
  }
</style>
