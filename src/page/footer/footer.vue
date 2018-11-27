<template>
  <span class="scroll-top" @click="toTop">
    <v-icon name="angle-up" scale="2"></v-icon>
  </span>
</template>

<script>
  import jQuery from 'jquery'
  let $ = jQuery
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 600) {
      $('.scroll-top').fadeIn(600);
    } else {
      $('.scroll-top').fadeOut(600);
    }
  });
  export default {
    name: "last",
    methods: {
      toTop() {
        $("html,body").animate({
          scrollTop: 0
        }, 700);
        return false;
      }
    }
  }
</script>

<style scoped>
  @import '../../style/style.css';
  @import '../../style/responsive.css';
</style>
