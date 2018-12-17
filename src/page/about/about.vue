<template>
  <div>
    <!-- 顶部 -->
    <header id="topheader">
      <div v-lazy:background-image="'https://i.loli.net/2018/12/17/5c1738fb83f98.jpg'" class="background">
        <div class="nothome">
          <h1 class="h1-title animated fadeIn delay-1s">/我我我</h1>
        </div>
      </div>
    </header>

    <!--描述-->
    <section class="product-detials-section">
      <div class="container">

        <div class="row">
          <div class="col-lg-4 details-left aboutme">
            <img v-lazy="'https://i.loli.net/2018/12/12/5c10cd6859af9.jpg'" alt="学姐"  whisper="“你不用刻意的去改变，因为无论你变成什么样子，我都会一直喜欢你，也会一直陪在你的身边的。”">
            <ul>
              <li style="text-align: center;font-size: 20px;">关于我</li>
              <li><p><span>学校:</span> GDUT(宇宙工大)</p></li>
              <li><p><span>兴趣:</span> ACG相关，对JRPG游戏情有独钟<s>(好吧，画师要是不给力我还是没法玩下去的)</s>，深度剧情控</p></li>
              <li><p><span>概述:</span>一个看着前端做着后端的瘦宅</p></li>
            </ul>
          </div>
          <div class="col-lg-8 details-right aboutinfo">
            <h2><em>时间轴</em></h2>
            <p>2016年9月入学GDUT</p>
            <p>2017年学习java后台开发</p>
            <p>2017年11月有了自己的服务器</p>
            <p>2018年5，6月看了两个月的前端</p>
            <p>2018年11月底开始写博客</p>
            <p>2018年12月博客上线</p>
            <p>...</p>
          </div>
        </div>
      </div>
    </section>

    <section class="stat-section section-gap-half">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="single-stat">
              <v-icon name="cog" scale="3" spin/>
              <h1>
                <span class="counter">{{day}}天</span></h1>
              <h4>网站运行</h4>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="single-stat">
              <v-icon name="eye" scale="3"/>
              <h1>
                <span class="counter">{{visit}}</span></h1>
              <h4>访问</h4>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="single-stat">
              <v-icon name="regular/comment-dots" scale="3"/>
              <h1>
                <span class="counter">{{note}}</span></h1>
              <h4>留言</h4>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="single-stat">
              <v-icon name="regular/file-alt" scale="3"/>
              <h1>
                <span class="counter">{{article}}篇</span></h1>
              <h4>博文</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "about",
    data() {
      return {
        day: 100,
        visit: 100,
        note: 100,
        article: 100
      }
    }
  }
</script>

<style scoped>
  @import '../../style/style.css';
  @import '../../style/responsive.css';
  .container {
    padding: 70px 0;
  }
  .page-top-banner .overlay-bg {
    background: url('https://i.loli.net/2018/12/15/5c13e01ea495b.jpg') center top;
    background-size: cover;
  }

  .aboutme,.aboutinfo {
    background: rgba(255, 255, 255, 0.5);
    border: 2px solid #cce5ff;
  }

  .aboutme img {
    width: 100%;
    object-fit: cover;
    border-radius: 7%;
    display: block;
  }

  .single-stat {
    text-align: center;
  }

  #topheader .background {
    width: 100%;
    height: 100%;
    position: relative;
    background-position: center;
    background-size: cover;
  }
  .aboutme ul li p{
    font-size: 16px;
    font-weight: 600;
  }
</style>
