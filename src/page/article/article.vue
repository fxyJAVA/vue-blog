<template>
  <section class="blog-lists-section">
    <header id="topheader">
      <div class="background" :style="{backgroundImage: 'url('+bg+')'}"></div>
    </header>
    <div class="onlyarticle container">

      <div class="blog-details">
        <div class="blog-info">
          <h1 style="">{{article.title}}</h1>
          <ul class="tags">
            <li>
              <v-icon name="regular/eye" scale="1.1"/>
              浏览&nbsp;{{article.view}}
            </li>
            <li v-for="tag in article.tagList">
              <v-icon name="regular/bookmark" scale="1.1"/>
              <a href="#">{{tag.tagName}}</a>
            </li>
            <li>
              <v-icon name="regular/folder" scale="1.1"/>
              <a href="#">{{article.category.cateName}}</a>
            </li>
          </ul>
          <h2>
            发布于{{publish}}
          </h2>
        </div>
        <div class="post-details">
          <div v-html="article.contentHtml"></div>
          <center>
            <v-icon name="pencil-alt" scale="1.4"/>
            <strong>由
              <router-link to="/about">黑鸦</router-link>
              最后编辑于2018-10-10</strong></center>
        </div>
      </div>

      <!--前一篇，后一篇,v-if="this.article.previd !== 0 && this.article.nextid !== 0"-->
      <div class="row" style="margin:20px auto 120px auto;">
        <div class="col-md-6 prev-next" v-if="this.article.previd !== 0"
             :class="this.article.nextid===0?'col-md-12':'col-md-6'">
          <router-link :to="{name:'article',params:{articleid:article.prev.articleid,pageNum:1}}" class="readmore">
            <div class="read-cover"></div>
            <div class="read-imgContainer">
              <div class="read-imgContainer-img"><img :src="article.prev.thumbnail" alt=""></div>
            </div>
            <div class="read-cover read-second"></div>
            <div class="read-inner">
              <div class="read-text" :style="{textAlign: this.article.nextid ===0 ?'center' :'left'}">
                <p>previous</p>
                <h2 class="read-title">{{article.prev.title}}</h2>
              </div>
            </div>
          </router-link>
        </div>
        <div class="prev-next" v-if="this.article.nextid !== 0"
             :class="this.article.previd ===0?'col-md-12':'col-md-6'">
          <router-link :to="{name:'article',params: {articleid:article.next.articleid,pageNum:1}}" class="readmore">
            <div class="read-cover"></div>
            <div class="read-imgContainer">
              <div class="read-imgContainer-img"><img :src="article.next.thumbnail" alt=""></div>
            </div>
            <div class="read-cover read-second"></div>
            <div class="read-inner">
              <div class="read-text" :style="{textAlign: this.article.previd ===0 ?'center' :'right'}">
                <p>next</p>
                <h2 class="read-title">{{article.next.title}}</h2>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <!--评论-->
      <div>
        <pagination :total="total" :current-page="current" :display="display" @pagechange="pagechange"></pagination>
      </div>
      <div class="comment-wrap animated" id="div-comments">
        <h3>
          <v-icon name="regular/comment" scale="1.1"/>
          评论&nbsp;{{article.comments}}
        </h3>
        <div class="media comments" v-for="(comment,index) in article.commentList" :key="comment.commentid"
             :id="'comment-'+comment.commentid">

          <div class="media-body">
            <div class="head-info">
              <div class="float-left clearfix">
                <img src="../../assets/2.jpg">
              </div>
              <h5><a target="_blank" :href="comment.commentUrl">{{comment.commentName}}</a></h5>
              <div class="info">
                <time datetime="2018-11-22">2018-9-9</time>
                <span class="useragent-info">
                  {{comment.commentAgent}}
                </span>
                &nbsp;广东省广州市 联通{{comment.commentIp}}
              </div>
            </div>
            <p v-html="comment.commentContent">

            </p>
            <div class="comment-buttons">
              <button href="#" class="btn-sm" @click="reply(index)">Replay</button>
            </div>

            <div class="media replay-comment" v-for="(reply,childIndex) in comment.childComment" :key="childIndex"
                 :id="'reply-'+reply.commentid">

              <div class="media-body">
                <div class="head-info">
                  <div class="float-left clearfix">
                    <img src="../../assets/5.jpg">
                  </div>
                  <h5><a href="#">{{reply.commentName}}</a></h5>
                  <div class="info">
                    <time datetime="2018-11-22">2018-9-9</time>
                    <span data-v-49843f54="" class="useragent-info">
                        {{reply.commentAgent}}
                    </span>
                    &nbsp;广东省广州市 联通 {{reply.commentIp}}
                  </div>
                </div>
                <p v-html="reply.commentContent">
                </p>
                <div class="comment-buttons">
                  <button class="btn-sm" @click="replyIn(index,childIndex)">Replay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--表单-->
      <div class="comment-form">
        <h3>Your Comment</h3>
        <div class="row form-col-wrap">
          <div class="col-lg-4 form-cols">
            <input type="text" v-model="commentName" required="required" class="form-control" placeholder="Name"
                   onfocus="this.placeholder=''"
                   onblur="this.placeholder='Name*'">
          </div>
          <div class="col-lg-4 form-cols">
            <input type="email" v-model="commentEmail" required="required" class="form-control" placeholder="Email"
                   onfocus="this.placeholder=''"
                   onblur="this.placeholder='Email*'">
          </div>
          <div class="col-lg-4 form-cols">
            <input type="url" v-model="commentUrl" class="form-control" placeholder="web" onfocus="this.placeholder=''"
                   onblur="this.placeholder='web*'">
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
                <textarea @blur="focusState = false" name="comment" class="form-control"
                          placeholder="Comment" cols="30" rows="10"
                          v-model="longText"
                          onfocus="this.placeholder=''" onblur="this.placeholder='Comment*'" id="longText"></textarea>
          </div>
        </div>
        <input type="submit" class="primary-btn" style="outline: none!important;border: none" @click="submitComment"
               value="Submit"/>
      </div>
    </div>
  </section>
</template>

<script>
  import pagination from '../../components/pagination/pagination'

  export default {
    name: "articles",
    components: {pagination},
    data() {
      return {
        visit: 0,
        comment: 0,
        publish: '2018-10-10',
        article: '',
        focusState: false,
        longText: '',
        prefix: '',
        bg: '',
        total: 0,
        display: 10,
        current: 1,
        timeflag: null,
        commentName: '',
        commentEmail: '',
        commentUrl: '',
        commentContent: '',
        parentCommentId: 0,
        pageNum: ''
      }
    },
    created() {
      this.change = true
      this.pageNum = this.$route.params.pageNum

      this.commentUrl = window.localStorage.getItem('Url')
      this.commentEmail = window.localStorage.getItem('Email')
      this.commentName = window.localStorage.getItem('Name')

      this.$axios('/api/crow/articles/' + this.$route.params.articleid + '/' + this.pageNum).then(res => {
        this.article = res.data.data,
          this.bg = this.article.thumbnail
        this.total = this.article.comments
      }).catch(error => {
        console.log(error)
      })
      var arr = window.location.href.split('#')
      setTimeout(function () {
        if (arr.length === 2) {
          $('html, body').animate({scrollTop: $('#' + arr[1]).offset().top}, 1000)
        }
      }, 500)
    },
    methods: {
      reply(key) {
        this.focusState = true
        this.prefix = '<a href="' + this.article.commentList[key].commentUrl + '">' + '@' + this.article.commentList[key].commentName + '</a>&nbsp;'
        this.parentCommentId = this.article.commentList[key].commentid
      },
      replyIn(parent, child) {
        this.focusState = true
        //前缀，回复内容之前一定要包含这个内容
        this.prefix = '<a href="' + this.article.commentList[parent].childComment[child].commentUrl + '">' + '@' + this.article.commentList[parent].childComment[child].commentName + '</a>&nbsp;'
        this.parentCommentId = this.article.commentList[parent].childComment[child].commentid
      },
      submitComment() {
        const rexEmail = new RegExp('\\w[-\\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\\.)+[A-Za-z]{2,14}')
        const rexChar = /^[\u4e00-\u9fa5_a-zA-Z0-9]{2,10}$/;
        const rexUrl = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
        if (this.commentName === '') {
          this.$toast('昵称不能为空')
          return false
        } else if (!rexChar.test(this.commentName)) {
          this.$toast('昵称仅支持2~10位的中文，数字和字母组合')
          this.commentName = ''
          return false
        }
        if (this.commentEmail === '') {
          this.$toast('邮箱不能为空')
          return false
        } else if (!rexEmail.test(this.commentEmail)) {
          this.$toast('邮箱不合法，请重试')
          this.commentEmail = ''
          return false
        }
        if (!rexUrl.test(this.commentUrl) && this.commentUrl !== '') {
          this.$toast('url不合法')
          return false
        }

        this.longText = this.htmlEncodeJQ(this.longText)
        this.commentContent = this.prefix + this.longText
        if (this.commentContent === '') {
          this.$toast('文本不能为空')
          return false
        }
        var formData = new FormData()
        formData.append('commentName', this.commentName)
        formData.append('commentEmail', this.commentEmail)
        formData.append('commentUrl', this.commentUrl)
        formData.append('commentContent', this.commentContent)
        formData.append('parentCommentId', this.parentCommentId)
        formData.append('pageNum', this.pageNum)
        formData.append('articleid', this.article.articleid)
        this.$axios.post('/api/crow/comments', formData).then(res => {
          $('html, body').animate({scrollTop: $('#div-comments').offset().top-100}, 1000)
          window.localStorage.Name = this.commentName
          window.localStorage.Email = this.commentEmail
          window.localStorage.Url = this.commentUrl
          this.longText = ''
          this.current = 1
          this.pagechange(1)
        }).catch(err => {
          console.log(err)
        })
      },
      htmlEncodeJQ(str) {
        return $('<span/>').text(str).html();
      },
      htmlDecodeJQ(str) {
        return $('<span/>').html(str).text();
      },
      pagechange(currentPage) {
        $('#div-comments').addClass('bounceInUp')
        setTimeout(function () {
          $('#div-comments').removeClass('bounceInUp')
        }, 500)
        this.$axios.get('/api/crow/comments', {params: {articleid: this.article.articleid, pageNum: currentPage}})
          .then(res => {
            this.article.commentList = res.data.data
          }).catch(err => {
          console.log('error:' + err)
        })
      }
    },
    watch: {
      focusState: function f() {
        if (this.focusState) {
          $("#longText").focus()
        }
      }
    }
  }
</script>

<style scoped>

</style>
