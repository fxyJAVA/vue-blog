<template>
  <header class="header-area" id="header-area">
    <div class="scroll-line"></div>
    <div :class="[menu,flag4]" class="dope-nav-container">
      <div class="container">
        <div class="row">
          <!-- dope Menu -->
          <nav class="animated 1 bounce dope-navbar justify-content-between" id="dopeNav">

            <!-- Logo -->
            <a class="nav-brand" href="#">
              <img src="@/assets/logo.png" alt="">
            </a>

            <!-- Navbar Toggler -->
            <div class="dope-navbar-toggler" @click="navbarToggler">
                            <span class="navbarToggler" :class="flag2?'active':''">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
            </div>

            <!-- Menu -->
            <div class="dope-menu" :class="flag2?'menu-on':''">

              <!-- close btn -->
              <div class="dopecloseIcon" @click="dopecloseIcon">
                <div class="cross-wrap">
                  <span class="top"></span>
                  <span class="bottom"></span>
                </div>
              </div>
              <!--我-->
              <div class="myinfo" v-if="flag2">
                <img src="../../assets/myhead.jpg" alt="">
                <p><img src="../../assets/feather.png">黑鸦</p>
                <p>“BURST LINK！”</p>
              </div>
              <!-- Nav Start -->
              <div class="dopenav">
                <ul id="nav">
                  <li>
                    <router-link to="/home"><v-icon name="home" scale="1.2"/>&nbsp;首页</router-link>
                  </li>
                  <li class="cn-dropdown-item has-down" :class="flag31?'active':''">

                    <a href="#" @click="ddtrigger1"><v-icon name="cannabis" scale="1.2"/>&nbsp;归档</a>
                    <ul class="dropdown" :style="{display: flag31?'none':'block'}">
                      <li><a href="#">技术</a></li>
                      <li><a href="#">日常</a></li>
                      <li><a href="#">杂谈</a></li>
                      <span class="dd-trigger"></span>
                    </ul>
                  </li>
                  <li class="cn-dropdown-item has-down" :class="flag32?'active':''">
                    <a href="#" @click="ddtrigger2"><v-icon name="regular/list-alt" scale="1.2"></v-icon>&nbsp;清单</a>
                    <ul class="dropdown" :style="{display: flag32?'none':'block'}">
                      <li><a href="#">Blog List</a></li>
                      <li><a href="#">Single Blog</a></li>
                      <span class="dd-trigger"></span>
                    </ul>

                  </li>
                  <li>
                    <router-link to="/board"><v-icon name="edit" scale="1.2"></v-icon>&nbsp;留言板</router-link>
                  </li>
                  <li>
                    <router-link to="/friend"><v-icon name="link" scale="1.2"></v-icon>&nbsp;友链</router-link>
                  </li>
                  <li>
                    <router-link to="/about"><v-icon name="regular/sun" scale="1.2"></v-icon>&nbsp;关于</router-link>
                  </li>
                </ul>
              </div>
              <hr v-if="flag2"/>
              <!--互动-->
              <div class="interaction" v-if="flag2">
                <ul>
                  <li>
                    <a href="https://github.com/fxyJAVA" style="background: #000;">
                      <v-icon name="brands/github" scale="2"/>
                    </a>
                  </li>
                  <li>
                    <a href="#" style="background: #92d027;">
                      <v-icon name="regular/envelope" scale="2" />
                    </a>
                  </li>
                  <li>
                    <a href="#" style="background: #0068bf;">
                      <v-icon name="brands/playstation" scale="2"/>
                    </a>
                  </li>
                  <li>
                    <a href="#" style="background: #e30514;">
                      <v-icon name="brands/nintendo-switch" aria-hidden="true" scale="2"/>
                    </a>
                  </li>
                </ul>
              </div>
              <!-- Nav End -->
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import jQuery from 'jquery'
  let $ = jQuery
  $(window).scroll(function(){
    var wintop = $(window).scrollTop(),docheight = $(document).height(), winheight = $(window).height();
    var scrolled = (wintop/(docheight-winheight))*100;

    $('.scroll-line').css('width', (scrolled + '%'));
  });
  $(window).scroll(function(){
    var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
    var scrolled = (wintop/(docheight-winheight))*100;

    $('.goTOP').each(function () {
      var gotop = scrolled.toFixed(0)
      $(this).html(gotop + '%');
    });
    $('.goTOP').click(function () {
      if ($('html').scrollTop()) {
        $('html').animate({ scrollTop: 0 }, 1500);
        return false;
      }
      $('body').animate({ scrollTop: 0 }, 1000);
      return false;
    })
  });
  (function ($) {
    $.fn.dopeNav = function (options) {
      // Variables
      var navContainer = $('.dope-nav-container');
      var dope_nav = $('.dopenav ul');

      // default options
      var defaultOpt = $.extend({
        breakpoint: 800,
        openCloseSpeed: 350,
        megaopenCloseSpeed: 700,
        alwaysHidden: false,
        openMobileMenu: 'left',
        dropdownRtl: false,
        stickyNav: true,
        stickyFooterNav: true
      }, options);

      return this.each(function () {
        // 控制打开方向
        if (defaultOpt.openMobileMenu === 'left' || defaultOpt.openMobileMenu === 'right') {
          navContainer.addClass(defaultOpt.openMobileMenu);
        }

        // 控制左右
        if (defaultOpt.dropdownRtl === true) {
          navContainer.addClass('dropdown-rtl');
        }


        //给含有子目录的标签添加cn-dropdown-item


        // 给含有子目录的标签添加has-down



        // expands the megamenu on each click
        dope_nav.find('li .dd-trigger').on('click', function (e) {
          e.preventDefault();
          $(this).parent('li').children('.megamenu').slideToggle(defaultOpt.megaopenCloseSpeed);
        });

        // 是否始终做汉堡折叠菜单
        if (defaultOpt.alwaysHidden === true) {
          navContainer.addClass('breakpoint-on').removeClass('breakpoint-off');
        }
      });
    };
  }(jQuery));

  export default {
    name: "navbar",
    props: ['screenWidth'],
    data() {
      return {
        openCloseSpeed: 350,
        megaopenCloseSpeed: 700,
        alwaysHidden: false,
        openMobileMenu: 'left',
        dropdownRtl: false,
        stickyNav: true,
        stickyFooterNav: true,
        breakpoint: 800,
        menu: '',
        flag1: true,
        flag2: false,
        flag31: false,
        flag32: false,
        flag4: false
      }
    },
    created() {
      if (this.screenWidth <= this.breakpoint) {
        this.menu = 'breakpoint-on'
      } else {
        this.menu = 'breakpoint-off'
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
      const that = this
    },
    watch: {
      screenWidth: function () {
        if (this.screenWidth < this.breakpoint) {
          this.menu = 'breakpoint-on'
          this.flag31 = true
          this.flag32 = true
        } else {
          this.menu = 'breakpoint-off'
          this.flag31 = false
          this.flag32 = false
        }
      }
    },
    methods: {
      navbarToggler() {
        this.flag2 = !this.flag2
      },
      dopecloseIcon() {
        this.flag2 = false
      },
      ddtrigger1() {
        if(this.menu === 'breakpoint-on') {
          this.flag31 = !this.flag31
        }
      },
      ddtrigger2() {
        if(this.menu === 'breakpoint-on') {
          this.flag32 = !this.flag32
        }
      },
      handleScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop > 0) {
          this.flag4 = 'dope-sticky'
        } else {
          this.flag4 = ''
        }
      }
    }
  }
</script>

<style scoped>
  @import '../../style/style.css';
  .nav-brand>img {
    width: 120px;
    height: 33px;
  }
  .scroll-line {
    width: 0%;
    height: 4px;
    background: #ffa500;
    position: fixed;
    z-index: 9999;
  }
  .myinfo {
    padding-top: 40px;
    background: linear-gradient(to right, #f51dac 0%, #691cff 100%);
  }
  .myinfo>img{
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    display: block;
    box-sizing: border-box;
    border: 1px dashed #ffa500;
  }
  .myinfo>p {
    text-align: center;
    padding: 10px 0;
  }
  .myinfo p:nth-child(2) {
    margin-top: 10px;
    margin-bottom: 0;
    padding: 0;
    font-size: 18px;
    font-weight: 600;
  }
  .myinfo p:last-child {
    font-size: 20px;
    font-weight: 900;
    font-style: italic;
  }
  .interaction {
    padding: 10px 10px;
    widoth: 100%;
    height: auto;
    position: relative;
  }

  .dope-nav-container:hover {
    background-color: #fffffff2;
    transition: all 0.5s;
    box-shadow: 0px 9px 40px -13px rgba(0, 0, 0, 0.75);
  }
  .interaction ul li a {
    width: 42px;
    height: 42px;
    text-align: center;
    line-height: 42px;
    float: left;
    margin-left: 20px;
    margin-bottom: 20px;
    color: #ffffff;
    border-radius: 5px;
  }
  /*响应式*/
  @media (max-width: 991px) {
    .dopenav ul li a{
      font-size: 15px;
      line-height: 40px;
    }
  }
</style>
