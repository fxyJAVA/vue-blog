<template>
  <section class="blog-lists-section section-gap-full">
    <div class="container">
      <div class="row">
        <div>
          <div class="blog-details">
            <div class="post-thumb relative">
              <div class="overlay overlay-bg"></div>
              <img class="img-fluid" src="../../assets/test5.png" alt="">
              <div class="specialTags">
                <h1 style="margin:0;color: #ffffff;">Awesome Design</h1>
                <ul class="tags" style="padding: 18px 0 0">
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
                <h4 style="padding-top: 10px;color: #ffffff;display: inline-flex;">
                  <v-icon name="cat" scale="1.2"/>&nbsp;发布于{{publish}}
                </h4>
              </div>
            </div>
            <div class="post-details">
              <center><strong>- I -</strong></center>
              <p>
                Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple
                county stairs do should praise as. Drawings sir gay together landlord had law
                smallest. Formerly welcomed attended declared met say unlocked. Jennings outlived
                no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be
                as it curiosity departure ourselves.
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
              <img class="mr-3" src="../../assets/2.jpg" alt="Generic placeholder image">
              <div class="media-body">
                <h5 class="mt-0"><a href="#">黑雪姬</a></h5>
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
                <p>
                  你好呀
                </p>
                <div class="comment-buttons">
                  <a href="#" class="btn-sm">Replay</a>
                </div>
                <div class="media mt-3 replay-comment">
                  <img src="../../assets/5.jpg" alt="Generic placeholder image">
                  <div class="media-body">
                    <h5 class="mt-0"><a href="#">有田春雪</a></h5>
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
                <div class="media mt-3 replay-comment">
                    <img src="../../assets/5.jpg" alt="Generic placeholder image">
                  <div class="media-body">
                    <h5 class="mt-0"><a href="#">Justin Doe</a></h5>
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
              <img class="mr-3" src="../../assets/7.png" alt="Generic placeholder image">
              <div class="media-body">
                <h5 class="mt-0"><a href="#">Jon Doe</a></h5>
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
  @import '../../style/style.css';
  @import '../../style/responsive.css';

  .post-details p {
    font-size: 20px;
  }

  .container {
    overflow: hidden;
    max-width: 900px;
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

  .specialTags {
    max-width: 900px;
    font-size: 16px;
    padding: 0 10px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    top: auto;
    bottom: 20px;
    color: #ffffff;
    position: absolute;
  }

</style>
