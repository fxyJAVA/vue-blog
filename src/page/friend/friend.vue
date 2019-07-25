<template xmlns:v-lazy="http://www.w3.org/1999/xhtml">
  <div>
    <!--顶部图片-->
    <header id="topheader">
      <div v-lazy:background-image="'https://i.loli.net/2018/12/17/5c173737cabed.jpg'" class="background">
        <div class="nothome">
          <h1 class="h1-title animated fadeIn delay-1s">刚好遇见你</h1>
        </div>
      </div>
    </header>
    <div class="container">

      <div class="friends">
        <h1 style="text-align: center">友情链接</h1>
        <!--<p><em>ps:目前推荐的是让我很受用或者有一定意义的链接，可以去那边看看</em></p>-->
        <hr>
        <ul class="clearfix row friends">
          <li class="col-md-4 col-sm-6">
            <div class="friend">
              <a href="https://2heng.xin">
                <div class="float-left">
                  <img v-lazy="'https://static.mashiro.top/avatar.jpg'" alt="">
                </div>
                <div class="float-left">
                  <h1>樱花庄的白猫</h1>
                  <p>
                    博客页面写的非常漂亮，我也学到了很多
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li class="col-md-4 col-sm-6">
            <div class="friend">
              <a href="http://yangzicong.com">
                <div class="float-left">
                  <img v-lazy="'https://www.blacklotus.fun/friend/yangzicong.jpg'" alt="">
                </div>
                <div class="float-left">
                  <h1>TWOPOINTHOLE</h1>
                  <p>
                    已毕业的师兄，算是我有做博客想法的契机
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li class="col-md-4 col-sm-6">
            <div class="friend">
              <a href="http://www.peipeiq.cn/">
                <div class="float-left">
                  <img v-lazy="'https://www.blacklotus.fun/friend/peipei.png'" alt="">
                </div>
                <div class="float-left">
                  <h1>peipeiq</h1>
                  <p>
                    同校ios开发师兄
                  </p>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <hr>
      <div class="youknow" style="display: none;">
        <h2 style="font-size: 20px;padding-bottom: 10px">申请链接须知</h2>
        <p>*1.xxxxxxxxxxxxxxxxxxxxxxxx</p>
        <p>*2.xxxxxxxxxxxxxxxxxxxxxx</p>
        <p>*3.xxxxxxxxxxxxxxxxxxxxx</p>
        <p>*4.xxxxxxxxxxxxxxxxxxxxxx</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "friend"
  }
</script>

<style scoped>
  .container {
    padding: 70px 0;
    max-width: 900px;
    background: #ffffff;
    margin-top: 70px;
    border-radius: 10px;
    /*background-image: url("https://view.moezx.cc/images/2018/01/24/kyotoanimation.png");*/
  }

  .friend a {
    display: block;
    width: 13.5rem;
    height: 5rem;
    border: 1px solid #f0f0f0;
    border-radius: 5px;
    color: #000;
    background: rgba(255, 255, 255, 0.9);
    margin: 0 auto 10px;
    overflow: hidden;
    position: relative;
  }

  /*.friend a:hover {*/
  /*background: rgba(200, 201, 200, .3);*/
  /*}*/

  .friend a img {
    width: 3rem;
    height: 3rem;
    margin-top: 15px;
    margin-left: 3px;
    border-radius: 50%;
    object-fit: cover;
    transition: all .5s;
  }

  .friends ul {
    min-height: 285px;
    margin: 20px 0 0;
  }

  @media (min-width: 576px ) {
    .friend a:before {
      content: "";
      background-color: orange;
      opacity: 0.2;
      -webkit-transform: skew(45deg, 0);
      transform: skew(45deg, 0);
      width: 0;
      height: 5rem;
      position: absolute;
      top: 0;
      left: -40px;
      z-index: -1;
      -webkit-transition: all .5s;
      transition: all .5s;
      z-index: 99;
    }

    .friend a:hover:before {
      width: 140%;
    }

    .friend a:hover div > img {
      transform: rotate(360deg);
    }
  }

  .friend a h1 {
    font-size: 1.1rem !important;
    font-weight: 900;
  }

  .friend a p {
    margin: 0;
    font-size: 14px;
    height: 2.8rem;
    color: rgba(150, 143, 168, 1);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .friend a div:last-child {
    padding: 5px 0 10px 10px;
    height: 40px;
    width: 10rem;
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

  .top h2 {
    opacity: 0;
    transition: all 1s ease-out;
  }

  .top h2:hover {
    opacity: 1;
  }

  @media (max-width: 576px) {
    .friends ul li {
      padding: 5px 0;
    }

    .top > header > h1 {
      font-size: 28px;
      margin-bottom: 2px;
    }

    .top > header > h2 {
      font-size: 18px;
    }

    .friend a {
      width: 100%;
    }

    .friends ul {
      padding: 10px;
    }

    .friend a div:last-child {
      width: 70%;
    }

    .friend a img {
      width: 50px;
      height: 50px;
    }
  }

  #topheader .background {
    background-position: center;
  }

  .friends {
    padding: 10px;
    border-radius: 10px;
  }

  .friends h1 {
    font-size: 25px;
  }

  .youknow {
    margin-top: 45px;
    padding: 10px;
  }

  .youknow p {
    font-size: 16px;
  }

  hr {
    width: 80%;
    margin: 40px auto;
    height: 3px;
    border: none;
    background-color: #ddd;
    background-image: repeating-linear-gradient(-45deg, #fff, #fff 4px, transparent 4px, transparent 8px);
  }
</style>
