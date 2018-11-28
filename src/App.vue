<template>
  <div id="app">
    <navbar :screenWidth="width"/>
    <transition mode="out-in" enter-active-class="bounceInLeft" leave-active-class="bounceOutLeft">
      <router-view :screenWidth="width" class="animated"/>
    </transition>
    <live2d/>
    <last/>
  </div>
</template>

<script>
  import navbar from '@/components/nav/navbar'
  import last from './page/footer/footer'
  import live2d from '@/components/live2d/live2d'
  import POWERMODE from 'html-activate-power-mode'

  document.body.addEventListener('input', POWERMODE);
  export default {
    name: 'App',
    components: {
      navbar,
      last,
      live2d
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

  .slide-fade{
    position: absolute;left:0;right: 0;
  }
  .slide-fade-enter-active {
    transition: all 1.2s ease;
  }
  .slide-fade-leave-active {

    transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  {
    left:0;right: 0;
    transform: translateX(50px);
    opacity: 0;
  }

  body {
    background: url("assets/little-monster.png");
  }
</style>
