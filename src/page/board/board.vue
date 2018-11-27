<template>
  <div class="container">

    <!--顶部图片-->
    <div class="top clearfix">
      <img src="../../assets/board.jpg" alt="">
      <header class="">
        <h1>留言板</h1>
      </header>
    </div>

    <!--诗歌-->
    <div class="relative">
      <div class="poem-wrap">
        <div class="poem-border poem-left"></div>
        <div class="poem-border poem-right"></div>
        <h1>一首好诗</h1>
        <p id="info">【宋代】范仲淹《苏幕遮·怀旧》</p>
        <p>碧云天，黄叶地，秋色连波，波上寒烟翠。</p>
        <p>山映斜阳天接水，芳草无情，更在斜阳外。</p>
        <p>黯乡魂，追旅思。夜夜除非，好梦留人睡。</p>
        <p>明月楼高休独倚，酒入愁肠，化作相思泪。</p>
      </div>
    </div>

    <!--留言-->
    <section class="comments">
      <div class="comments-main">
        <h3 id="comments-list-title">Comments | <span class="noticom">100 条评论 </span></h3>
        <div id="loading-comments"><span></span></div>
        <ul class="commentwrap ">
          <li class="comment">
            <div class="contents">
              <div class="comment-arrow">
                <div class="main">
                  <div class="profile">
                    <a href="#" rel="nofollow">
                      <img alt="David"
                           src="https://cn.gravatar.com/avatar/f0de7f12d75c1ca2d49b27020c487c47?s=80&amp;d=mm&amp;r=g"
                           height="80" width="80">
                    </a>
                  </div>
                  <div class="commentinfo">
                    <section class="commeta">
                      <div class="left">
                        <a href="#" target="_blank" rel="nofollow">鲁鲁修</a>
                      </div>
                      <a href="#" class="comment-reply-link">Replay</a>
                      <div class="right">
                        <div class="info">
                          <time datetime="2018-11-22">2018-9-9</time>
                          <span class="useragent-info">
                          ( <img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.4.5/img/Sakura/images/ua/svg/chrome.svg">&nbsp;Google Chrome 127.0.0.1&nbsp;&nbsp;
                          <img
                            src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.4.5/img/Sakura/images/ua/svg/windows_win10.svg">&nbsp;Windows 10 )
                        </span>
                          &nbsp;广东省广州市 联通
                        </div>
                      </div>
                    </section>
                  </div>
                  <div class="body"><p>阔哇啊阔哇阔哇阔哇阔哇阔哇阔哇</p></div>
                </div>
                <div class="arrow-left"></div>
              </div>
            </div>
            <hr>
            <ul class="children">
              <li class="comment">
                <div class="contents">
                  <div class="comment-arrow">
                    <div class="main">
                      <div class="profile">
                        <a href="#" rel="nofollow">
                          <img alt="Mashiro"
                               src="https://cn.gravatar.com/avatar/cd2b3a164c977539712929f66cad335c?s=80&amp;d=mm&amp;r=g"
                               height="80" width="80">
                        </a>
                      </div>
                      <div class="commentinfo">
                        <section class="commeta">
                          <div class="left">
                            <h4 class="author">
                              <a href="" target="_blank" rel="nofollow">cc</a>
                            </h4>
                          </div>
                          <a rel="nofollow" class="comment-reply-link" href="#" aria-label="Reply to Mashiro">Replay</a>
                          <div class="right">
                            <div class="info">
                              <time datetime="2018-11-22">2018-10-10</time>&nbsp;&nbsp;
                              <span class="useragent-info">( <img
                                src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.4.5/img/Sakura/images/ua/svg/chrome.svg">&nbsp;Google Chrome 127.0.0.1&nbsp;&nbsp;<img
                                src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.4.5/img/Sakura/images/ua/svg/windows_win10.svg">&nbsp;Windows 10 )</span>&nbsp;来自:
                              广东省广州市 移动
                            </div>
                          </div>
                        </section>
                        <div class="body">
                          <p><a href="#" class="comment-at">@David</a>&nbsp;😀</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <!--回复-->
    <div class="comment-form">
      <h3>Your Comment</h3>
      <div class="row form-col-wrap">
        <div class="col-lg-4 form-cols">
          <input type="text" class="form-control" placeholder="Name" onfocus="this.placeholder=''"
                 onblur="this.placeholder='Name*'">
        </div>
        <div class="col-lg-4 form-cols">
          <input type="email" class="form-control" placeholder="Email" onfocus="this.placeholder=''"
                 onblur="this.placeholder='Email*'">
        </div>
        <div class="col-lg-4 form-cols">
          <input type="url" class="form-control" placeholder="web" onfocus="this.placeholder=''"
                 onblur="this.placeholder='web*'">
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
                <textarea name="comment" class="form-control" placeholder="Comment" cols="30" rows="10"
                          onfocus="this.placeholder=''" onblur="this.placeholder='Comment*'"></textarea>
          <a href="#" class="primary-btn">Submit</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "board"
  }
</script>

<style scoped>
  @import '../../style/style.css';
  @import '../../style/responsive.css';
  .container {
    padding: 0;
    max-width: 900px;
    margin-top: 95px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.7);
  }

  /*图片部分样式*/
  .top {
    position: relative;
    top: 0;
    left: 0;
    overflow: hidden;
    margin: 0 auto;
  }

  .top img {
    margin: 0;
    width: 100%;
    object-fit: cover;
  }

  .top header {
    position: absolute;
    top: 45%;
    left: 0;
    right: 0;
    text-align: center;
    color: #fff;
    text-shadow: 2px 2px 10px #000;
    z-index: 1;
  }

  .top > header > h1 {
    color: #fff;
    font-size: 40px;
    font-weight: 500;
    width: 80%;
    margin: auto;
    padding: 0;
    border: 0;
  }

  /*诗歌部分样式*/
  .poem-wrap {
    position: relative;
    width: 730px;
    max-width: 80%;
    border: 3px solid #797979;
    border-top: 0;
    text-align: center;
    margin: 80px auto;
  }

  .poem-border {
    position: absolute;
    height: 2px;
    width: 27%;
    background-color: #777777;
  }

  .poem-left {
    left: 0;
  }

  #info {
    color: #000;
  }

  .poem-wrap p {
    font-size: 20px;
    color: #111111;
  }

  .poem-right {
    right: 0;
  }

  /*留言部分样式*/
  .comments {
    clear: both;
    overflow: hidden;
    width: 100%;
    padding: 60px 0 80px;
    list-style: none;
    background: rgba(255, 255, 255, .5);
    padding: 0 10px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
  }

  .comment .body {
    line-height: 32px;
    color: #63686d;
    border-bottom: 1px solid rgba(0, 0, 0, .5);
    position: relative;
  }

  .comment .body p {
    font-size: 14px;
    line-height: 30px;
    margin-top: 15px;
    padding-bottom: 30px;
    padding-left: 3px;
    color: #63686d;
  }

  .comments .comments-main {
    overflow: hidden;
    -webkit-transition: height 0s ease-out;
    -moz-transition: height 0s ease-out;
    transition: height 0s ease-out;
  }

  h3#comments-list-title {
    max-width: 860px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 40px;
    color: #7d7d7d;
    font-weight: 400;
  }

  #loading-comments {
    display: none;
    max-width: 860px;
    margin: 0 auto;
    height: 40px;
    text-align: center;
    line-height: 45px;
    background-image: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/disqus-preloader.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }

  .comments ul.commentwrap {
    margin: 0 auto 30px;
  }

  .comments .commentwrap {
    width: 100%;
    max-width: 860px;
    margin: 0 auto;
    padding: 0;
  }

  .comment {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .comment .contents {
    width: 100%;
    float: left;
  }

  .comments .main.shadow img.avatar {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transition: all ease 1s;
    -webkit-transition: all ease 1s;
    -moz-transition: all ease 1s;
    -o-transition: all ease 1s;
    box-shadow: 0 1px 10px -6px rgba(0, 0, 0, .5);
    margin-left: 3px;
  }

  .comment .profile {
    float: left;
    margin-right: 10px;
    margin-top: 5px;
  }

  .comment .profile img {
    width: 100%;
    max-width: 40px;
    height: 40px;
    border-radius: 100%;
    -webkit-transition: opacity .15s ease-out;
    -moz-transition: opacity .15s ease-out;
    transition: all 0.5s ease-out;
  }

  .comment .comment-reply-link {
    font-size: 12px;
    display: block;
    margin-left: 10px;
    float: right;
    text-transform: uppercase;
    color: #fff;
    background-color: #e2684a;
    line-height: 20px;
    padding: 0 6px;
    border-radius: 3px;
    opacity: 1;
  }

  .comment h4 {
    font-size: 18px;
    font-weight: 400;
    margin: 0;
    letter-spacing: 0;
    text-transform: none;
    line-height: 20px;
  }

  .comment .info {
    margin-top: 2px;
    font-size: 12px;
    letter-spacing: 0;
    text-transform: none;
    color: rgba(0, 0, 0, .35);
  }

  .comment .info .useragent-info img {
    vertical-align: sub;
    width: 14px;
    height: 14px;
    border: 0;
  }

  .comment .commeta {
    font-size: 16px;
    overflow: hidden;
    margin-bottom: 5px;
    text-transform: uppercase;
    color: #9499a8;
    margin-left: 50px;
  }

  /*回复部分*/
  .comment .children {
    padding-left: 40px;
    margin: 0;
  }

  .comment .body .comment-at {
    color: #99ce00;
    text-decoration: none;
  }

  .comments .commentwrap hr {
    height: 0;
    width: 100%;
    background: #eee;
    border: 0;
    margin: 40px 0;
  }
  /*响应式*/
  @media (max-width: 768px) {

    .poem-wrap > p {
      font-size: 12px;
    }

    .poem-wrap > h1 {
      font-size: 19px;
    }

    .poem-border {
      display: none;
    }

    .poem-wrap {
      border-top: 3px solid #797979;
    }
  }

  @media (max-width: 860px) {
    .top > header > h1 {
      font-size: 26px;
    }
  }

  /*动画*/
   .comment .profile img:hover{
      transform: rotate(360deg);
  }
</style>
