<template>
  <div>
    <!--顶部图片-->
    <header id="topheader">
      <div class="background" :style="{backgroundImage: 'url('+randomBg[Math.floor(Math.random()*randomBg.length)]+')'}">
        <div class="text">
          <h1 id="hometitle">Nega Nebulus</h1>
          <p id="homep">{{hitokoto}}</p>
        </div>
      </div>
    </header>

    <!--文章-->
    <section class="blog-lists-section section-gap-full">
      <div class="container">
        <div class="row">

          <div class="col-lg-8">
            <div class="blog-lists">
              <div class="single-blog-post" v-for="article in articleList">
                <div class="post-details">
                  <router-link :to="{name:'article',params:{articleid: article.articleid,pageNum:1}}">
                    <h1>{{article.title}} </h1>
                    <ul class="tags">
                      <li>
                        <v-icon name="eye"></v-icon>
                        &nbsp{{article.view}}
                      </li>
                      <li>
                        <v-icon name="regular/comment"></v-icon>
                        {{article.comments}}
                      </li>

                      <li v-for="tag in article.tagList">
                        <v-icon name="regular/bookmark"></v-icon>
                        <a href="#">{{tag.tagName}}</a>
                      </li>

                      <li>
                        <v-icon name="regular/bookmark"></v-icon>
                        <a href="#">{{article.category.cateName}}</a>
                      </li>
                    </ul>
                    <p>{{article.summary}}</p>
                    <div class="post-thumb relative">
                      <img :src="article.thumbnail">
                    </div>
                  </router-link>
                  <hr>
                    <div class="user-details d-flex align-items-center">
                      <div class="details">
                        <h4 style="text-align: right">黑鸦 {{article.postDate|formatDate}}</h4>
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
                    <a href="mailto:2974187202@qq.com" style="background: #92d027;" @mouseenter="addClass($event)"
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
        randomBg: ['https://i.loli.net/2018/12/05/5c072c8e6b8d5.png',
        'https://i.loli.net/2018/12/11/5c0fd7d200ea7.jpg',
        'https://i.loli.net/2018/12/11/5c0fd7d4c9ec4.jpg',
        'https://i.loli.net/2018/12/11/5c0fd7e9ef7d2.jpg',
        'https://i.loli.net/2018/12/11/5c0fd7fa1d4db.png',
        'https://i.loli.net/2018/12/11/5c0fd822a20fe.png',
        'https://i.loli.net/2018/12/11/5c0fd82a2885e.jpg',
        'https://i.loli.net/2018/12/05/5c072c8e6b8d5.png'],
        heightFlag: document.body.clientHeight,
        articleList: [],
        hitokoto: ''
      }
    },
    created() {
      this.$axios.get('https://v1.hitokoto.cn/').then(res=>{
        this.hitokoto =  res.data.hitokoto
      }).catch(err=>{
        console.log(err)
      })
      if (this.screenWidth < 991) {
        this.heightFlag = true
      }
      this.$axios('/api/crow/articles?pageNum=1').then(res=>{
        this.articleList = res.data.data
      }).catch(error=>{
        console.log(error)
      })
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
    },
    filters: {
      formatDate: function(time) {
        let date = new Date(time);
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return y + '-' + MM + '-' + d
        // return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
      }
    }
  }
</script>

<style scoped>

  .container {
    padding-right: 7px;
    padding-left: 7px;
  }
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

  #hometitle,#homep {
    color: rgba(255,255,255,.8);
    text-shadow: 0 0 5px #c3c3c3;
  }
  #hometitle {
    font-size: 5rem;
    width: 100%;
    font-weight: 300;
  }
  #homep {
    font-size: 1.5rem;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
  }
</style>
