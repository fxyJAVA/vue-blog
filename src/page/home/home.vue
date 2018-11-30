<template>
  <div>
    <!--顶部图片-->
    <header id="topheader">
      <div class="background" :style="{backgroundImage: 'url('+bg+')'}">
        <div>
          <h1>黑暗星云</h1>
          <p></p>
        </div>
      </div>
    </header>

    <!--文章-->
    <section class="blog-lists-section section-gap-full">
      <div class="container">
        <div class="row">

          <div class="col-lg-8">
            <div class="blog-lists">
              <div class="single-blog-post">
                <div class="post-details">
                  <router-link to="#">
                    <h1>梦想还是要有的 </h1>
                    <ul class="tags">
                      <li>
                        <v-icon name="eye"></v-icon>
                        &nbsp{{visit}}
                      </li>
                      <li>
                        <v-icon name="regular/comment"></v-icon>
                        {{comment}}
                      </li>
                      <li>
                        <v-icon name="regular/bookmark"></v-icon>
                        <a href="#">Fashion</a></li>
                      <li>
                        <v-icon name="regular/bookmark"></v-icon>
                        <a href="#">Music</a></li>
                    </ul>
                    <p>他说风雨中这点痛算什么，擦干泪不要哭，至少我们还有梦</p>
                    <div class="post-thumb relative">
                      <img src="../../assets/blog.jpg">
                    </div>
                  </router-link>
                    <div class="user-details d-flex align-items-center">
                      <div class="details">
                        <h4>Phil Martinez</h4>
                        <p>April 15,2018</p>
                      </div>
                    </div>
                </div>
              </div>

              <div class="single-blog-post">
                <div class="post-details">
                  <router-link to="#">
                    <h1>梦想还是要有的 </h1>
                    <ul class="tags">
                      <li>
                        <v-icon name="eye"></v-icon>
                        &nbsp{{visit}}
                      </li>
                      <li>
                        <v-icon name="regular/comment"></v-icon>
                        {{comment}}
                      </li>
                      <li>
                        <v-icon name="regular/bookmark"></v-icon>
                        <a href="#">Fashion</a></li>
                      <li>
                        <v-icon name="regular/bookmark"></v-icon>
                        <a href="#">Music</a></li>
                    </ul>
                    <p>他说风雨中这点痛算什么，擦干泪不要哭，至少我们还有梦</p>
                    <div class="post-thumb relative">
                      <img src="../../assets/133.jpg">
                    </div>
                  </router-link>
                  <div class="user-details d-flex align-items-center">
                    <div class="details">
                      <h4>Phil Martinez</h4>
                      <p>April 15,2018</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="single-blog-post">
                <div class="post-details">
                  <router-link to="#">
                    <h1>梦想还是要有的 </h1>
                    <ul class="tags">
                      <li>
                        <v-icon name="eye"></v-icon>
                        &nbsp{{visit}}
                      </li>
                      <li>
                        <v-icon name="regular/comment"></v-icon>
                        {{comment}}
                      </li>
                      <li>
                        <v-icon name="regular/bookmark"></v-icon>
                        <a href="#">Fashion</a></li>
                      <li>
                        <v-icon name="regular/bookmark"></v-icon>
                        <a href="#">Music</a></li>
                    </ul>
                    <p>他说风雨中这点痛算什么，擦干泪不要哭，至少我们还有梦</p>
                    <div class="post-thumb relative">
                      <img src="../../assets/111.jpg">
                    </div>
                  </router-link>
                  <div class="user-details d-flex align-items-center">
                    <div class="details">
                      <h4>Phil Martinez</h4>
                      <p>April 15,2018</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="single-blog-post">
                <div class="post-details">
                  <router-link to="#">
                    <h1>梦想还是要有的 </h1>
                    <ul class="tags">
                      <li>
                        <v-icon name="eye"></v-icon>
                        &nbsp{{visit}}
                      </li>
                      <li>
                        <v-icon name="regular/comment"></v-icon>
                        {{comment}}
                      </li>
                      <li>
                        <v-icon name="regular/bookmark"></v-icon>
                        <a href="#">Fashion</a></li>
                      <li>
                        <v-icon name="regular/bookmark"></v-icon>
                        <a href="#">Music</a></li>
                    </ul>
                    <p>他说风雨中这点痛算什么，擦干泪不要哭，至少我们还有梦</p>
                    <div class="post-thumb relative">
                      <img src="../../assets/test2.jpg">
                    </div>
                  </router-link>
                  <div class="user-details d-flex align-items-center">
                    <div class="details">
                      <h4>Phil Martinez</h4>
                      <p>April 15,2018</p>
                    </div>
                  </div>
                </div>
              </div>
              <nav>
                <!--TODO 分页-->
                <ul class="pagination"></ul>
              </nav>
            </div>
          </div>


          <div class="col-lg-4">
            <div class="sidebar-wrap">
              <div class="single-widget search-widget">
                <h4 class="widget-title">Search Here</h4>
                <div class="sidebar-form">
                  <form action="#" class="relative">
                    <input type="text" placeholder="Search" onfocus="this.placeholder=''"
                           onblur="this.placeholder='Search'">
                    <button type="submit">
                      <v-icon name="search" scale="1.7"/>
                    </button>
                  </form>
                </div>
              </div>
              <div class="single-widget recent-post-widget">
                <h4 class="widget-title">近期</h4>
                <ul>
                  <li class="d-flex flex-row align-items-center">
                    <div class="thumbs">
                      <img class="img-fluid" src="img/blog/small-t1.jpg" alt="">
                    </div>
                    <div class="details">
                      <a href="single-blog.html">
                        <h5>To shewing another demand to Received shutters expenses.</h5>
                      </a>
                      <p class="text-uppercase">
                        DECEMBER 10, 2016
                      </p>
                    </div>
                  </li>
                  <li class="d-flex flex-row align-items-center">
                    <div class="thumbs">
                      <img class="img-fluid" src="img/blog/small-t2.jpg" alt="">
                    </div>
                    <div class="details">
                      <a href="single-blog.html">
                        <h5>To shewing another demand to Received shutters expenses.</h5>
                      </a>
                      <p class="text-uppercase">
                        March 10, 2016
                      </p>
                    </div>
                  </li>
                  <li class="d-flex flex-row align-items-center">
                    <div class="thumbs">
                      <img class="img-fluid" src="img/blog/small-t3.jpg" alt="">
                    </div>
                    <div class="details">
                      <a href="single-blog.html">
                        <h5>To shewing another demand to Received shutters expenses.</h5>
                      </a>
                      <p class="text-uppercase">
                        July 10, 2016
                      </p>
                    </div>
                  </li>
                  <li class="d-flex flex-row align-items-center">
                    <div class="thumbs">
                      <img class="img-fluid" src="img/blog/small-t4.jpg" alt="">
                    </div>
                    <div class="details">
                      <a href="single-blog.html">
                        <h5>To shewing another demand to Received shutters expenses.</h5>
                      </a>
                      <p class="text-uppercase">
                        January 10, 2016
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="single-widget social-widget" v-if="!heightFlag">
                <h4 class="widget-title">互动</h4>
                <ul>
                  <li>
                    <a href="https://github.com/fxyJAVA" @mouseenter="addClass($event)"
                       @mouseleave="removeClass($event)">
                      <v-icon name="brands/github" scale="2"/>
                    </a>
                  </li>
                  <li>
                    <a href="#" style="background: #92d027;" @mouseenter="addClass($event)"
                       @mouseleave="removeClass($event)">
                      <v-icon name="regular/envelope" scale="2"/>
                    </a>
                  </li>
                  <li>
                    <a href="#" style="background: #0068bf;" @mouseenter="addClass($event)"
                       @mouseleave="removeClass($event)">
                      <v-icon name="brands/playstation" scale="2"/>
                    </a>
                  </li>
                  <li>
                    <a href="#" style="background: #e30514;" @mouseenter="addClass($event)"
                       @mouseleave="removeClass($event)">
                      <v-icon name="brands/nintendo-switch" aria-hidden="true" scale="2"/>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="single-widget tags-widget">
                <h4 class="widget-title">Tags</h4>
                <ul>
                  <li><a href="#">时尚</a></li>
                  <li><a href="#">Tech</a></li>
                  <li><a href="#">旅行</a></li>
                  <li><a href="#">回顾</a></li>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Music</a></li>
                  <li><a href="#">Lifestyle</a></li>
                  <li><a href="#">Gadget</a></li>
                  <li><a href="#">Food</a></li>
                  <li><a href="#">Gaming</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script>

  export default {
    name: "home",
    props: ['screenWidth'],
    data() {
      return {
        visit: 100,
        comment: 100,
        bg: 'https://s1.ax1x.com/2018/11/30/FmEqTe.png',
        heightFlag: document.body.clientHeight
      }
    },
    created() {
      if (this.screenWidth < 991) {
        this.heightFlag = true
      }
    },
    watch: {
      screenWidth: function () {
        if (this.screenWidth < 991) {
          this.heightFlag = true
        } else {
          this.heightFlag = false
        }
      }
    },
    methods: {
      addClass(e) {
        var tar = e.currentTarget
        $(tar).addClass('animated tada')
      },
      removeClass(e) {
        var tar = e.currentTarget
        $(tar).removeClass('animated tada')
      }
    }
  }
</script>

<style scoped>

  @import '../../style/style.css';

  #topheader {
    color: #ffffff !important;
    height: 100vh;
  }
  .background {
  }
  .post-details>a {
    color: #000;
  }

  .single-blog-post .post-details:hover {
    box-shadow: 0 5px 10px 5px rgba(110,110,110,.4);
  }


  @media (max-width: 768px) {
    .blog-lists {
      width: 100%;
    }
  }
</style>
