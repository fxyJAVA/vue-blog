<template>
  <transition name="demo">
    <div class="toast" v-show="theToast">
      {{msg}}
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        theToast: false,
        msg: ""
      };
    }
  };
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    padding: 1vw;
    max-width: 30vw;
    font-size: 22px;
    color: #fff;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 1vw;
    z-index: 999;
  }

  @media (max-width: 567px) {
    .toast {
      font-size: 14px;
    }
  }

  .demo-enter-active,
  .demo-leave-active {
    transition: 0.3s ease-out;
  }

  .demo-enter {
    opacity: 0;
    transform: scale(1.2);
  }

  .demo-leave-to {
    opacity: 0;
    transform: scale(0.8);
  }
</style>
