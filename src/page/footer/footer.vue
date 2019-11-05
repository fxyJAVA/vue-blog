<template>
  <div>
  <span class="scroll-top" @click="toTop">
    <v-icon name="angle-up" scale="2"></v-icon>
  </span>
    <div style="text-align: center;">
      © 2019&nbsp;<a href="http://beian.miit.gov.cn">粤ICP备17149317号</a>
    </div>
  </div>
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
</style>
