<template>
  <div>
    <!-- 顶部 -->
    <section class="page-top-banner section-gap-full relative" data-stellar-background-ratio="0.5">
      <div class="overlay overlay-bg"></div>
      <div class="container">
        <div class="row section-gap-half">
          <div class="col-lg-12 text-center">
            <h1>关于我</h1>
            <h4>一个有着前端心做着后端的程序员</h4>
          </div>
        </div>
      </div>
    </section>


    <!--描述-->
    <section class="product-detials-section section-gap-full">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 details-left aboutinfo">
              <h1>时间轴</h1>
          </div>
          <div class="col-lg-4 details-right aboutme">
            <img src="../../assets/myhead.jpg" alt="">
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

  .page-top-banner .overlay-bg {
    background: url('../../assets/p5.jpg');
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
</style>
