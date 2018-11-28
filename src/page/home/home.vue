<template>
  <div>
    <section class="banner-section2" :class="heightFlag?'relative':''" style="overflow: hidden">
      <div class="overlay overlay-bg"></div>
      <div class="container">
        <div class="row align-items-center fullscreen" style="height: 763px;">
          <div class="col-md-6 banner-left">
            <h1>Hi, We Are <br> <span>Dope Agency.</span></h1>
            <p>Ultimate solution to make stunning mobile app landing around the world. Lorem ipsum dolor, sit
              amet consectetur
              adipisicing. </p>
            <a class="video-btn primary-btn" href="#">About More</a>
          </div>
        </div>
      </div>
    </section>

    <!--文章-->
    <section class="blog-lists-section section-gap-full">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="blog-lists">
              <div class="single-blog-post">
                <div class="post-thumb relative">
                  <div class="overlay overlay-bg"></div>
                  <img class="img-fluid" src="../../assets/blog.jpg" alt="">
                </div>
                <div class="post-details">
                  <ul class="tags">
                    <li><v-icon name="eye"></v-icon>浏览&nbsp;{{visit}}</li>
                    <li><v-icon name="regular/comment"></v-icon>评论&nbsp;{{comment}}</li>
                    <li><v-icon name="regular/bookmark"></v-icon><a href="#">Fashion</a></li>
                    <li><v-icon name="regular/bookmark"></v-icon><a href="#">Music</a></li>
                  </ul>
                  <router-link to="article">
                    <h1>To shewing another demands to. </h1>
                  </router-link>
                  <p>
                    Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple
                    county stairs do should praise as. Drawings sir gay together landlord had law
                    smallest. Formerly welcomed attended declared met say unlocked. Jennings outlived
                    no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be
                    as it curiosity departure ourselves.
                  </p>
                  <div class="user-details d-flex align-items-center">
                    <div class="user-img">
                      <img src="img/avatar1.jpg" alt="">
                    </div>
                    <div class="details">
                      <a href="#">
                        <h4>Phil Martinez</h4>
                      </a>
                      <p>April 15,2018</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="single-blog-post">
                <div class="post-thumb relative">
                  <div class="overlay overlay-bg"></div>
                  <img class="img-fluid" src="../../assets/test2.jpg" alt="">
                </div>
                <div class="post-details">
                  <ul class="tags">
                    <li><v-icon name="eye"></v-icon>浏览&nbsp;{{visit}}</li>
                    <li><v-icon name="regular/comment"></v-icon>评论&nbsp;{{comment}}</li>
                    <li><v-icon name="regular/bookmark"></v-icon><a href="#">美食</a></li>
                    <li><v-icon name="regular/bookmark"></v-icon><a href="#">音乐</a></li>
                  </ul>
                  <a href="single-blog.html">
                    <h1>A wonderful serenity has taken possession of my entire soul.</h1>
                  </a>
                  <p>
                    Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple
                    county stairs do should praise as. Drawings sir gay together landlord had law
                    smallest. Formerly welcomed attended declared met say unlocked. Jennings outlived
                    no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be
                    as it curiosity departure ourselves.
                  </p>
                  <div class="user-details d-flex align-items-center">
                    <div class="user-img">
                      <img src="../../assets/blog.jpg" alt="">
                    </div>
                    <div class="details">
                      <a href="#">
                        <h4>Phil Martinez</h4>
                      </a>
                      <p>April 15,2018</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="single-blog-post">
                <div class="post-thumb relative">
                  <div class="overlay overlay-bg"></div>
                  <img class="img-fluid" src="../../assets/test5.png" alt="">
                </div>
                <div class="post-details">
                  <ul class="tags">
                    <li><v-icon name="eye"></v-icon>浏览&nbsp;{{visit}}</li>
                    <li><v-icon name="regular/comment"></v-icon>评论&nbsp;{{comment}}</li>
                    <li><v-icon name="regular/bookmark"></v-icon><a href="#">学习</a></li>
                    <li><v-icon name="regular/bookmark"></v-icon><a href="#">梦想</a></li>
                  </ul>
                  <a href="single-blog.html">
                    <h1>Awesome Design His many legs, pitifully thin compared with.</h1>
                  </a>
                  <p>
                    Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple
                    county stairs do should praise as. Drawings sir gay together landlord had law
                    smallest. Formerly welcomed attended declared met say unlocked. Jennings outlived
                    no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be
                    as it curiosity departure ourselves.
                  </p>
                  <div class="user-details d-flex align-items-center">
                    <div class="user-img">
                      <img src="../../assets/blog.jpg" alt="">
                    </div>
                    <div class="details">
                      <a href="#">
                        <h4>Phil Martinez</h4>
                      </a>
                      <p>April 15,2018</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="single-blog-post">
                <div class="post-thumb relative">
                  <div class="overlay overlay-bg"></div>
                  <img class="img-fluid" src="../../assets/blog.jpg" alt="">
                </div>
                <div class="post-details">
                  <ul class="tags">
                    <ul class="tags">
                      <li><v-icon name="eye"></v-icon>浏览&nbsp;{{visit}}</li>
                      <li><v-icon name="regular/comment"></v-icon>评论&nbsp;{{comment}}</li>
                      <li><v-icon name="regular/bookmark"></v-icon><a href="#">趋势</a></li>
                      <li><v-icon name="regular/bookmark"></v-icon><a href="#">技术</a></li>
                    </ul>
                  </ul>
                  <router-link to="article">
                    <h1>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.</h1>
                  </router-link>
                  <p>
                    Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple
                    county stairs do should praise as. Drawings sir gay together landlord had law
                    smallest. Formerly welcomed attended declared met say unlocked. Jennings outlived
                    no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be
                    as it curiosity departure ourselves.
                  </p>
                  <div class="user-details d-flex align-items-center">
                    <div class="user-img">
                      <img src="../../assets/blog.jpg" alt="">
                    </div>
                    <div class="details">
                      <a href="#">
                        <h4>Phil Martinez</h4>
                      </a>
                      <p>April 15,2018</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="single-blog-post">
                <div class="post-thumb relative">
                  <div class="overlay overlay-bg"></div>
                  <img class="img-fluid" src="../../assets/test2.jpg" alt="">
                </div>
                <div class="post-details">
                  <ul class="tags">
                    <li><v-icon name="eye"></v-icon>浏览&nbsp;{{visit}}</li>
                    <li><v-icon name="regular/comment"></v-icon>评论&nbsp;{{comment}}</li>
                    <li><v-icon name="regular/bookmark"></v-icon><a href="#">电影</a></li>
                    <li><v-icon name="regular/bookmark"></v-icon><a href="#">重温</a></li>
                  </ul>
                  <a href="single-blog.html">
                    <h1>To take a trivial example, which of us ever undertakes.</h1>
                  </a>
                  <p>
                    Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple
                    county stairs do should praise as. Drawings sir gay together landlord had law
                    smallest. Formerly welcomed attended declared met say unlocked. Jennings outlived
                    no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be
                    as it curiosity departure ourselves.
                  </p>
                  <div class="user-details d-flex align-items-center">
                    <div class="user-img">
                      <img src="../../assets/blog.jpg" alt="">
                    </div>
                    <div class="details">
                      <a href="#">
                        <h4>Phil Martinez</h4>
                      </a>
                      <p>April 15,2018</p>
                    </div>
                  </div>
                </div>
              </div>
              <nav>
                <!--TODO-->
                <ul class="pagination">
                  <!--<li class="page-item disabled">-->
                    <!--<a class="page-link" href="#" tabindex="-1">-->
                      <!--<i class="ti ti-angle-left"></i>-->
                    <!--</a>-->
                  <!--</li>-->
                  <!--<li class="page-item"><a class="page-link" href="#">1</a></li>-->
                  <!--<li class="page-item active">-->
                    <!--<a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>-->
                  <!--</li>-->
                  <!--<li class="page-item"><a class="page-link" href="#">3</a></li>-->
                  <!--<li class="page-item"><a class="page-link" href="#">4</a></li>-->
                  <!--<li class="page-item">-->
                    <!--<a class="page-link" href="#">-->
                      <!--<i class="ti ti-angle-right"></i>-->
                    <!--</a>-->
                  <!--</li>-->
                </ul>
              </nav>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="sidebar-wrap">
              <div class="single-widget search-widget">
                <h4 class="widget-title">Search Here</h4>
                <div class="sidebar-form">
                  <form action="#" class="relative">
                    <input type="text" placeholder="Search" onfocus="this.placeholder=''" onblur="this.placeholder='Search'">
                    <button type="submit">
                      <v-icon name="search" scale="1.7"/>
                    </button>
                  </form>
                </div>
              </div>
              <div class="single-widget recent-post-widget">
                <h4 class="widget-title">Recent Posts</h4>
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
                    <a href="https://github.com/fxyJAVA">
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
              <div class="single-widget archive-widget">
                <h4 class="widget-title">Archive</h4>
                <ul>
                  <li class="d-flex justify-content-between">
                    <a href="#">January 2018</a>
                    <span>(29)</span>
                  </li>
                  <li class="d-flex justify-content-between">
                    <a href="#">February 2018</a>
                    <span>(23)</span>
                  </li>
                  <li class="d-flex justify-content-between">
                    <a href="#">March 2018</a>
                    <span>(43)</span>
                  </li>
                  <li class="d-flex justify-content-between">
                    <a href="#">April 2018</a>
                    <span>(12)</span>
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
        heightFlag: false,
        visit: 100,
        comment: 100,
      }
    },
    created() {
      if(this.screenWidth<991) {
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
    }
  }
</script>

<style scoped>
  @import '../../style/style.css';
  @import '../../style/responsive.css';

  .banner-section2 {
    color: #ffffff !important;
  }
</style>
