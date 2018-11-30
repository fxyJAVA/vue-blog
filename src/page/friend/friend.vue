<template>
  <div>
    <!--顶部图片-->
    <header id="topheader">
      <div class="background"></div>
    </header>

    <div class="container">

      <div class="nothome">
        <h1 class="h1-title animated fadeIn delay-1s">刚好遇见你</h1>
      </div>
      <div class="friends">
        <h1>友情链接</h1>
        <p><em>ps:此处推荐的是让我很受用或者有一定意义的链接，可以去那边看看(✿◡‿◡)s</em></p>
        <hr>
        <ul class="clearfix row friends">
          <li class="col-md-4 col-sm-6">
            <div class="friend">
              <a href="#">
                <div class="float-left">
                  <img src="../../assets/test1.png" alt="">
                </div>
                <div class="float-left">
                  <h1>樱花庄的白猫</h1>
                  <p>
                    缘于p站，让我知道博客原来可以写的这么漂亮。
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li class="col-md-4 col-sm-6">
            <div class="friend">
              <a href="#">
                <div class="float-left">
                  <img src="../../assets/test1.png" alt="">
                </div>
                <div class="float-left">
                  <h1>樱花庄的白猫</h1>
                  <p>
                    缘于p站，让我知道博客原来可以写的这么漂亮。
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li class="col-md-4 col-sm-6">
            <div class="friend">
              <a href="#">
                <div class="float-left">
                  <img src="../../assets/test1.png" alt="">
                </div>
                <div class="float-left">
                  <h1>樱花庄的白猫</h1>
                  <p>
                    缘于p站，让我知道博客原来可以写的这么漂亮。
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li class="col-md-4 col-sm-6">
            <div class="friend">
              <a href="#">
                <div class="float-left">
                  <img src="../../assets/test1.png" alt="">
                </div>
                <div class="float-left">
                  <h1>樱花庄的白猫</h1>
                  <p>
                    缘于p站，让我知道博客原来可以写的这么漂亮。
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li class="col-md-4 col-sm-6">
            <div class="friend">
              <a href="#">
                <div class="float-left">
                  <img src="../../assets/test1.png" alt="">
                </div>
                <div class="float-left">
                  <h1>樱花庄的白猫</h1>
                  <p>
                    缘于p站，让我知道博客原来可以写的这么漂亮。
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li class="col-md-4 col-sm-6">
            <div class="friend">
              <a href="#" title="缘于p站，让我知道博客原来可以写的这么漂亮。">
                <div class="float-left">
                  <img src="../../assets/test1.png" alt="">
                </div>
                <div class="float-left">
                  <h1>樱花庄的白猫</h1>
                  <p>
                    缘于p站，让我知道博客原来可以写的这么漂亮。
                  </p>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div class="youknow">
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
  }

  .friend a {
  display: block;
  width: 13rem;
  height: 5rem;
  color: #000;
  margin: 0 auto;
  }

  .friend a:hover {
    background: rgba(200, 201, 200, .3);
  }

  .friend a img {
    width: 3rem;
    height: 3rem;
    margin-top: 5px;
    border-radius: 50%;
    object-fit: cover;
  }

  .friends ul {
    min-height: 285px;
    margin: 20px 0 0;
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
      padding: 20px 0;
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
    width: 100%;
    height: 100%;
    position: relative;
    background: url("https://i.loli.net/2018/11/30/5c0137e164c03.jpg") center;
    background-size: cover;

  }

  .background h1 {
    position: absolute;
    color: rgba(51, 51, 51, 1);
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
  }

  .friends {
    padding: 20px;
    border-radius: 10px;
    background: url("../../assets/huawen7.jpg");
  }

  .friends h1 {
    font-size: 25px;
  }
  .youknow {
    margin-top: 45px;
    padding: 10px;
    background: url("../../assets/huanwen7.jpg");
  }
  .youknow p{
    font-size: 16px;
  }
</style>
