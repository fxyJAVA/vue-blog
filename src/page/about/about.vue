<template xmlns:v-lazy="http://www.w3.org/1999/xhtml">
  <div>
    <!-- 顶部 -->
    <header id="topheader">
      <div v-lazy:background-image="'https://www.blacklotus.fun/head/2018010906194.jpg'" class="background">
        <div class="nothome">
          <h1 class="h1-title animated fadeIn delay-1s">我我我</h1>
        </div>
      </div>
    </header>

    <!--描述-->
    <section class="product-detials-section">
      <div class="container">

        <div class="row">
          <div class="col-lg-4 details-left aboutme">
            <h2 style="margin-bottom: 15px;margin-top: 10px;color:#222"><em>关于</em></h2>
            <img v-lazy="'https://i.loli.net/2018/12/12/5c10cd6859af9.jpg'" alt="学姐"
                 whisper="“你不用刻意的去改变，因为无论你变成什么样子，我都会一直喜欢你，也会一直陪在你的身边的。”">
            <ul>
              <li><p><span>学校:</span> GDUT(宇宙工大)</p></li>
              <li><p><span>兴趣:</span> ACG相关，深度剧情控，JRPG爱好者</p></li>
              <li><p><span>摘要:</span></p></li>
            </ul>
          </div>
          <div class="col-lg-4 details-right aboutinfo">
            <h2 style="margin-bottom: 15px;margin-top: 10px;color: #222;"><em>时间轴</em></h2>
            <p>2016年9月入学GDUT</p>
            <p>2017年4月开始学习java后台开发</p>
            <p>2017年11月租了第一台服务器</p>
            <p>2018年5，6月学习前端</p>
            <p>2018年11月底开始筹备</p>
            <p>2019年1月个人博客上线</p>
            <p>...</p>
          </div>
          <div class="col-lg-4 aboutlast">
            <h2 style="margin-bottom: 15px;margin-top: 10px;color: #222;"><em>最近</em></h2>
            <p>在看：《剑指offer》</p>
            <p>在玩：任天堂全明星大乱斗</p>
            <p>在做：后台开发相关</p>
            <p>在听：宇多田光</p>
            <aplayer
                     :music="music[0]"
                     :float="true"
                     :list="music"

            ></aplayer>
          </div>
        </div>
      </div>
    </section>

    <!--<section class="stat-section section-gap-half">-->
    <!--<div class="container">-->
    <!--<div class="row">-->
    <!--<div class="col-lg-3 col-md-6 col-sm-6">-->
    <!--<div class="single-stat">-->
    <!--<v-icon name="cog" scale="3" spin/>-->
    <!--<h1>-->
    <!--<span class="counter">{{day}}天</span></h1>-->
    <!--<h4>网站运行</h4>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="col-lg-3 col-md-6 col-sm-6">-->
    <!--<div class="single-stat">-->
    <!--<v-icon name="eye" scale="3"/>-->
    <!--<h1>-->
    <!--<span class="counter">{{visit}}</span></h1>-->
    <!--<h4>访问</h4>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="col-lg-3 col-md-6 col-sm-6">-->
    <!--<div class="single-stat">-->
    <!--<v-icon name="regular/comment-dots" scale="3"/>-->
    <!--<h1>-->
    <!--<span class="counter">{{note}}</span></h1>-->
    <!--<h4>留言</h4>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="col-lg-3 col-md-6 col-sm-6">-->
    <!--<div class="single-stat">-->
    <!--<v-icon name="regular/file-alt" scale="3"/>-->
    <!--<h1>-->
    <!--<span class="counter">{{article}}篇</span></h1>-->
    <!--<h4>博文</h4>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</section>-->
  </div>
</template>

<script>
  import Aplayer from 'vue-aplayer'
  export default {
    components: { Aplayer },
    name: "about",
    data() {
      return {
        day: 100,
        visit: 100,
        note: 100,
        article: 100,
        music:[{
          title: 'Beautiful World',
          artist: '宇多田ヒカル',
          theme: '#41b883',
          src: 'https://www.blacklotus.fun/music/beautifulworld.mp3',
          pic: 'http://p2.music.126.net/0dD1op9wHdWIdO6gk1OQlQ==/18298072510006687.jpg?param=130y130'
        },{
          title: '誓い',
          artist: '宇多田ヒカル',
          theme: '#41b883',
          src: 'https://www.blacklotus.fun/music/誓い.mp3',
          pic: 'http://p1.music.126.net/vmdlo92xK3dSbkyjWQ7pKA==/109951163798447008.jpg?param=130y130'
        },
          {
            title: '光',
            artist: '宇多田ヒカル',
            theme: '#41b883',
            src: 'https://www.blacklotus.fun/music/光.mp3',
            pic: 'http://p1.music.126.net/nhLBRqY-DgzbUPWcxO3FeQ==/18365142719545516.jpg?param=130y130'
          }]
      }
    }
  }
</script>

<style scoped>

  .container {
    padding: 70px 0;
  }

  .page-top-banner .overlay-bg {
    background-size: cover;
  }

  .aboutme, .aboutinfo, .aboutlast {
    background: rgba(255, 255, 255, 0.5);
    /*border: 2px solid #27bef3;*/
    /*margin-left: -1px;*/
  }

  .aboutinfo p, .aboutlast p {
    font-size: 20px;
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

  .aboutme ul li p {
    font-size: 16px;
    font-weight: 600;
  }

  @media (max-width: 576px) {
    .aboutme, .aboutinfo, .aboutlast {
      margin-left: 10px;
    }
  }
</style>
