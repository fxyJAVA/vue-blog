<template>
  <section class="blog-lists-section">
    <header id="topheader">
      <div class="background"></div>
    </header>
    <div class="container">

      <div class="blog-details">
        <div class="blog-info">
          <h1 style="">Awesome Design</h1>
          <ul class="tags">
            <li>
              <v-icon name="regular/eye" scale="1.2"/>
              浏览&nbsp;{{visit}}
            </li>
            <li>
              <v-icon name="regular/comment" scale="1.2"/>
              评论&nbsp;{{comment}}
            </li>
            <li>
              <v-icon name="regular/bookmark" scale="1.2"/>
              <a href="#">Fashion</a></li>
            <li>
              <v-icon name="regular/folder" scale="1.2"/>
              <a href="#">Music</a></li>
          </ul>
          <h2>
            发布于{{publish}}
          </h2>
        </div>
        <div class="post-details">
          <center><strong>- I -</strong></center>
          <p>
            <img src="https://view.moezx.cc/images/2018/06/19/v2-3edf80b35ca66b12b2a79c54126f3015_r.jpg"
                 class="clearfix"
                 style="width: 130px;float: right;margin-right: 20px;border: 3px solid #ddd;border-radius: 3px;">
            那天偶然看到一位好漂亮的姐姐，可惜看到歌手资料，她已经在十一年前很不幸地离开了。仔细听了她的TOP 50，
            真的几乎每一首都能让人沉迷。就音乐口味说，自己最喜欢的似乎确实大部分是90-00年代的歌，
            那种五分现代，三分沧桑，还有两分惋惜的感觉。的确，那个时代，音乐经历了太多遗憾，邓丽君、黄家驹、张国荣、梅艳芳，如果可以的话还应该算上 MJ，或许人类真的是只有在失去后才会意识到存在之珍贵的生物吧。.
          </p>
          <center><strong>- II -</strong></center>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
            mollitia animi, id est laborum et dolorum fuga.
          </p>
          <blockquote class="blockquote">
            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod teminc ididunt ut labore et dolore.Lorem ipsum
              dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod temporSed ut perspiciatis unde omnis natus error sit voluptatem accusantium
              doloremque laudantium.</p>
          </blockquote>
          <center><strong>- III -</strong></center>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.

            On the other hand, we denounce with righteous indignation and dislike men who are so
            beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire,
            that they cannot foresee the pain and trouble that are bound to ensue; and equal blame
            belongs to those who fail in their duty through weakness
          </p>
          <center>
            <v-icon name="pencil-alt" scale="1.4"/>
            <strong>由
              <router-link to="/about">黑鸦</router-link>
              最后编辑于2018-10-10</strong></center>
        </div>
      </div>
      <div class="comment-wrap">
        <h3>Recent Comments</h3>
        <div class="media comments">

          <div class="media-body">
            <div class="head-info">
              <div class="float-left clearfix">
                <img src="../../assets/2.jpg">
              </div>
              <h5><a href="#">黑雪姬</a></h5>
              <div class="info">
                <time datetime="2018-11-22">2018-9-9</time>
                <span data-v-49843f54="" class="useragent-info">
                        ( <img data-v-49843f54=""
                               src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.4.5/img/Sakura/images/ua/svg/chrome.svg">&nbsp;Google Chrome 127.0.0.1&nbsp;&nbsp;
                        <img data-v-49843f54=""
                             src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.4.5/img/Sakura/images/ua/svg/windows_win10.svg">&nbsp;Windows 10 )
                      </span>
                &nbsp;广东省广州市 联通
              </div>
            </div>
            <p>
              你好呀
            </p>
            <div class="comment-buttons">
              <a href="#" class="btn-sm">Replay</a>
            </div>
            <div class="media mt-3 replay-comment">

              <div class="media-body">
                <div class="head-info">
                  <div class="float-left clearfix">
                    <img src="../../assets/5.jpg">
                  </div>
                  <h5><a href="#">有田春雪</a></h5>
                  <div class="info">
                    <time datetime="2018-11-22">2018-9-9</time>
                    <span data-v-49843f54="" class="useragent-info">
                        ( <img data-v-49843f54=""
                               src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.4.5/img/Sakura/images/ua/svg/chrome.svg">&nbsp;Google Chrome 127.0.0.1&nbsp;&nbsp;
                        <img data-v-49843f54=""
                             src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.4.5/img/Sakura/images/ua/svg/windows_win10.svg">&nbsp;Windows 10 )
                      </span>
                    &nbsp;广东省广州市 联通
                  </div>
                </div>
                <p>
                  <a href="#">@黑雪姬</a>&nbsp;你好呀
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                  sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                  fringilla.
                  Donec lacinia congue felis in faucibus.
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                  sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                  fringilla.
                  Donec lacinia congue felis in faucibus.
                </p>
                <div class="comment-buttons">
                  <a href="#" class="btn-sm">Replay</a>
                </div>
              </div>
            </div>
            <div class="media replay-comment">
              <div class="media-body">
                <div class="head-info">
                  <div class="float-left clearfix">
                    <img src="../../assets/5.jpg">
                  </div>
                  <h5><a href="#">Justin Doe</a></h5>
                  <div class="info">
                    <time datetime="2018-11-22">2018-9-9</time>
                    <span data-v-49843f54="" class="useragent-info">
                        ( <img data-v-49843f54=""
                               src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.4.5/img/Sakura/images/ua/svg/chrome.svg">&nbsp;Google Chrome 127.0.0.1&nbsp;&nbsp;
                        <img data-v-49843f54=""
                             src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.4.5/img/Sakura/images/ua/svg/windows_win10.svg">&nbsp;Windows 10 )
                      </span>
                    &nbsp;广东省广州市 联通
                  </div>
                </div>
                <p>
                  <a href="#">@黑雪姬</a>&nbsp;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis.
                </p>
                <div class="comment-buttons">
                  <a href="#" class="btn-sm">Replay</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="media comments">
          <div class="media-body">
            <div class="head-info">
              <div class="float-left clearfix">
                <img src="../../assets/7.png" alt="Generic placeholder image">
              </div>
            <h5><a href="#">Jon Doe</a></h5>
            <div class="info">
              <time datetime="2018-11-22">2018-9-9</time>
              <span data-v-49843f54="" class="useragent-info">
                        ( <img data-v-49843f54=""
                               src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.4.5/img/Sakura/images/ua/svg/chrome.svg">&nbsp;Google Chrome 127.0.0.1&nbsp;&nbsp;
                        <img data-v-49843f54=""
                             src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.4.5/img/Sakura/images/ua/svg/windows_win10.svg">&nbsp;Windows 10 )
                      </span>
              &nbsp;广东省广州市 联通
            </div>
            </div>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
              sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
              fringilla.
              Donec lacinia congue felis in faucibus.
            </p>
            <div class="comment-buttons">
              <a href="#" class="btn-sm">Replay</a>
            </div>
          </div>
        </div>
      </div>
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
  </section>
</template>

<script>
  export default {
    name: "articles",
    data() {
      return {
        visit: 0,
        comment: 0,
        publish: '2018-10-10'
      }
    }
  }
</script>

<style scoped>

  .post-details p {
    font-size: 20px;
  }

  .container {
    overflow: hidden;
    padding: 0;
    max-width: 900px;
    margin-top: 120px;
  }

  #topheader .background {
    background-image: url("../../assets/test5.png");
    background-position: center;
  }

  .post-thumb img {
    -webkit-transform: scale(1.0);
    -ms-transform: scale(1.0);
    transform: scale(1.0);
  }

  .blog-details:hover .post-thumb img {
    -webkit-transform: scale(1.0);
    -ms-transform: scale(1.0);
    transform: scale(1.0);
  }

  .blog-details .post-thumb .overlay-bg {
    background: transparent;
  }

  .blog-info h1, .blog-info h2, .blog-info ul {
    text-align: center;
  }

  .blog-info h2 {
    padding: 10px 0;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    .post-details p {
      font-size: 16px;
    }
  }


</style>
