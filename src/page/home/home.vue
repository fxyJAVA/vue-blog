<template xmlns:v-lazy="http://www.w3.org/1999/xhtml">
  <div>
    <!--顶部图片-->
    <header id="topheader">
      <div v-lazy:background-image="randomBg[Math.floor(Math.random()*randomBg.length)]" class="background">
        <div class="text">
          <h1 id="hometitle">Nega Nebulus</h1>
          <p id="homep">{{hitokoto}}</p>
        </div>
      </div>
    </header>

    <section class="blog-lists-section section-gap-full">
      <div class="container">
        <div class="row"
             style="margin-bottom: 40px;background: rgba(232, 232, 232);padding-left: 15px;margin-left: -2px;">
          <!--<h5><v-icon name="tag"></v-icon><em>公告: 秋招之后重构下前端页面代码，遗留的一些问题比较棘手,短时间应该是没法搞定的</em></h5>-->
        </div>
        <div class="row">
          <div class="col-lg-8">
            <div class="blog-lists">
              <div class="single-blog-post" v-for="(article,index) in articleList" :key="index">
                <div class="post-details">
                  <router-link :to="{name:'article',params:{articleid: article.articleid,pageNum:1}}">
                    <h1>{{article.title}} </h1>
                    <ul class="tags">
                      <li>
                        <v-icon name="eye"></v-icon>
                        <!--&nbsp{{article.view}}-->
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
                        <v-icon name="regular/folder"></v-icon>
                        <a href="#">{{article.category.cateName}}</a>
                      </li>
                    </ul>
                    <p>{{article.summary}}</p>
                    <div class="post-thumb relative">
                      <img v-lazy="article.thumbnail">
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
              <audio src="https://www.blacklotus.fun/home/burstlink.mp3" autoplay="autoplay">
              </audio>
              <div v-show="showBottomContent">{{bottomContent}}</div>
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
                <h4 class="widget-title;" style="color: #222222;font-size: 18px;">唠一唠</h4>
                <ul>
                  <li class="d-flex flex-row align-items-center" v-for="item of say">
                    <div class="details">
                      <h5>{{item.p}}</h5>
                      <p>{{item.h}}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="single-widget social-widget">
                <h4 class="widget-title" style="color: #222222;">互动</h4>
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
                <h4 class="widget-title" style="color: #222222;">Tags</h4>
                <ul>
                  <li style="margin-left: 10px;margin-top: 10px;" v-for="item in tags"><a href="#">{{item.tagName}}</a>
                  </li>
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
        articleTotal: 0,
        pageNum: -1,
        visit: 100,
        comment: 100,
        bottomContent: "正在加载更多文章",
        showBottomContent: false,
        randomBg: ['https://i.loli.net/2018/12/05/5c072c8e6b8d5.png',
          'https://i.loli.net/2018/12/12/5c1094c86de85.jpg',
          'https://i.loli.net/2018/12/11/5c0fd7d4c9ec4.jpg',
          'https://i.loli.net/2018/12/11/5c0fd7fa1d4db.png',
          'https://i.loli.net/2018/12/11/5c0fd822a20fe.png',
          'https://i.loli.net/2018/12/11/5c0fd82a2885e.jpg',
          'https://i.loli.net/2018/12/05/5c072c8e6b8d5.png'],
        heightFlag: document.body.clientHeight,
        pageIndex: 1,
        pageSize: 4,
        articleList: [],
        hitokoto: '',
        isLoading: false,
        say: [],
        tags: []
      }
    },
    beforeCreate() {
      this.$axios('/api/crow/articles?pageNum=1').then(res => {
        this.articleList = res.data.data
        this.articleTotal = res.data.total
        this.pageNum = Math.ceil(this.articleTotal/this.pageSize)
        console.log(this.articleList)
      }).catch(error => {
        console.log(error)
      })
      this.$axios('/api/crow/tags').then(res => {
        this.tags = res.data.data
      }).catch(error => {
        console.log(error)
      })
      this.$axios.get('https://www.blacklotus.fun/json/say.json').then(res => {
        this.say = res.data
      })
    },
    created() {
      this.$axios.get('https://v1.hitokoto.cn/').then(res => {
        this.hitokoto = res.data.hitokoto
      }).catch(err => {
        console.log(err)
      })
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
      },
      scroll() {
        let isLoading = false
        let _that = this
        this.showBottomContent = true
        window.onscroll = function() {
          //变量scrollTop是滚动条滚动时，距离顶部的距离
          let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
          //变量windowHeight是可视区的高度
          let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
          //变量scrollHeight是滚动条的总高度
          let scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
          //滚动条到底部的条件
          if(_that.pageIndex == _that.pageNum) {
            isLoading = true
            _that.bottomContent = "到底部啦，暂无更多文章..."
          }
          if(Math.ceil(scrollTop)+windowHeight>=scrollHeight && !isLoading && _that.pageIndex<_that.pageNum) {
            _that.pageIndex++
            _that.showBottomContent = false
            isLoading = true
            _that.$axios.get('/api/crow/articles?pageNum='+_that.pageIndex).then(response => {
              isLoading = true
              let newArr = response.data.data
              for(let i =0;i<newArr.length;i++) {
                _that.articleList.push(response.data.data[i])
              }
              isLoading = false
              setTimeout(function () {
                console.log("防止刷新速度过快")
              },1000)
            })
          }
        }
      }
    },
    mounted() {
      window.addEventListener('scroll',this.scroll,true)
    },
    filters: {
      formatDate: function (time) {
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
    background-attachment: fixed;
  }

  .post-details > a {
    color: #000;
  }

  .single-blog-post .post-details:hover {
    box-shadow: 0 5px 10px 5px rgba(110, 110, 110, .4);
  }

  @media (max-width: 768px) {
    .blog-lists {
      width: 100%;
    }
  }

  #hometitle, #homep {
    color: rgba(255, 255, 255, .8);
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
