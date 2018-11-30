<template>
  <div>
    <!-- 顶部 -->
    <header id="topheader">
      <div class="background">
      </div>
    </header>

    <!--描述-->
    <section class="product-detials-section">
      <div class="container">
        <div class="nothome">
          <h1 class="h1-title animated fadeIn delay-1s">お前は奴隷だ。解放を望むか？</h1>
        </div>
        <div class="row">
          <div class="col-lg-4 details-left aboutme">
            <img src="../../assets/myhead.jpg" alt="学姐"  whisper="“你不用刻意的去改变，因为无论你变成什么样子，我都会一直喜欢你，也会一直陪在你的身边的。”">
            <ul>
              <li><span>昵称:</span> xxx</li>
              <li><span>学校:</span> xxxxxxxxxxxxxx</li>
              <li><span>兴趣:</span>xxxxxxxxxxxxxxxxxxxxxxxxx</li>
              <li><span>近期:xxxxxxxx</span></li>
            </ul>
            <p>
              To shewing another demands to. Marianne property cheerful informed at striking at.
            </p>
            <p>
              Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple county stairs do
              should praise as. Drawings sir gay together landlord had law smallest. Formerly welcomed attended declared
              met say unlocked. Jennings outlived no dwelling denoting in peculiar.
            </p>
          </div>
          <div class="col-lg-8 details-right aboutinfo">
              <h1>时间轴</h1>
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
    background: url('../../assets/p5.jpg') center top;
    background-size: cover;
  }

  .aboutme,.aboutinfo {
    background: rgba(255, 255, 255, 0.5);
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
    background: url("https://i.loli.net/2018/11/30/5c013820a9e78.jpg") center;
    background-size: cover;

  }
</style>
