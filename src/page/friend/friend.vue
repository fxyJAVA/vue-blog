<template>
  <div>
    <!--顶部图片-->
    <header id="topheader">
      <div class="background">
        <h1>刚好遇见你</h1>
      </div>
    </header>

    <div class="container">
      <h1>xxxxxxxxxxxxxxx</h1>
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
      <div>
        <h1>申请友链</h1>
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
    padding: 95px 0;
    max-width: 900px;
    background: rgba(255, 255, 255, .5);
  }

  ul.friends {
    background: rgba(255, 255, 255, 1);
    min-height: 285px;
    padding: 20px 0 0;

    margin: 40px 10px 0;
    border: 2px solid #0c5460;
    border-radius: 10px;
  }

  ul.friends li {
    list-style: none;
    padding: 0;
    margin-bottom: 18px;
  }

  .friend a {
    display: block;
    width: 13rem;
    height: 5rem;
    color: #000;
    margin: 0 auto;
  }

  .friend a:hover {
    background: rgba(200, 201, 200, .1);
  }

  .friend a img {
    width: 3rem;
    height: 3rem;
    margin-top: 5px;
    border-radius: 50%;
    object-fit: cover;
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
    ul.friends li {
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
      width: 60%;
    }

    .friend a img {
      width: 65px;
      height: 65px;
    }
  }

  #topheader {
    height: 70vh;
    position: relative;
  }

  #topheader .background {
    width: 100%;
    height: 100%;
    position: relative;
    background: url("../../assets/king.jpg") center;
    background-size: cover;

  }
  .background h1 {
    position: absolute;
    color: rgba(51, 51, 51,1);
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%,-50%);
  }
</style>
