<template>
  <div id="app">
    <navbar :screenWidth="width"/>
    <router-view :screenWidth="width"/>
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
      last
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
  #app {
    /*height: 2000px;*/
  }
  body {
    background: url("assets/little-monster.png");
  }
</style>
