<template>
  <div class="container">
    <div></div>
    <h1>友情链接</h1>
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
</template>

<script>
  export default {
    name: "friend"
  }
</script>

<style scoped>
  .container {
    padding: 0;
    padding-top: 70px;
    max-width: 900px;
    height: 2000px;
  }

  ul.friends {
    background: rgba(255,255,255,1);
    padding: 0;
    padding-top: 20px;
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
    background: rgba(200,201,200,.1);
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

  @media (max-width: 576px) {
    ul.friends li {
      padding: 20px 0;
    }
    .friend a {
      width: 60%;
    }
    .friend a img {
      width: 75px;
      height: 75px;
    }
  }
</style>
