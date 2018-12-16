<template xmlns:v-lazy="http://www.w3.org/1999/xhtml">
  <section class="blog-lists-section">
    <header id="topheader">
      <div v-lazy:background-image="bg" class="background"></div>
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
              <div class="read-imgContainer-img"><img v-lazy="article.prev.thumbnail" alt=""></div>
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
              <div class="read-imgContainer-img"><img v-lazy="article.next.thumbnail" alt=""></div>
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

      <div v-if="!showComment"><a @click="letShow" style="display: block;width:100px;height: 36px;line-height: 36px;border: 1px solid #909090;background: #ffffff;color: #9090ad;text-align: center;margin: 0 auto;" href="javascript:;">查看评论</a></div>

      <!--评论-->
      <div class="animated zoomInUp" v-if="showComment">
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
                <img v-lazy="comment.commentAvatarMd5">
              </div>
              <h5><a target="_blank" :href="comment.commentUrl">{{comment.commentName}}</a><span v-if="comment.isAdmin" class="blog-owner">博主</span></h5>
              <div class="info">
                <time datetime="2018-11-22">{{comment.commentDate|formatDate}}</time>
                <!--<span class="useragent-info">-->
                  <!--{{comment.commentAgent}}-->
                <!--</span>-->
                &nbsp;广东省广州市 联通{{comment.commentIp}}
              </div>
            </div>
            <p v-html="comment.commentContent" class="content">

            </p>
            <div class="comment-buttons">
              <a href="javascript:;" class="btn-sm" @click="reply(index)">Replay</a>
            </div>

            <div class="media replay-comment" v-for="(reply,childIndex) in comment.childComment" :key="reply.commentid"
                 :id="'reply-'+reply.commentid">

              <div class="media-body">
                <div class="head-info">
                  <div class="float-left clearfix">
                    <img v-lazy="reply.commentAvatarMd5">
                  </div>
                  <h5><a href="#">{{reply.commentName}}</a><span class="blog-owner" v-if="reply.isAdmin">博主</span></h5>
                  <div class="info">
                    <time datetime="2018-11-22">{{reply.commentDate|formatDate}}</time>
                    <!--<span class="useragent-info">-->
                        <!--{{reply.commentAgent}}-->
                    <!--</span>-->
                    &nbsp;广东省广州市 联通 {{reply.commentIp}}
                  </div>
                </div>
                <p v-html="reply.commentContent" class="content">
                </p>
                <div class="comment-buttons">
                  <a href="javacript:;" class="btn-sm" @click="replyIn(index,childIndex)">Replay</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <!--表单-->
      <div class="comment-form">
        <h3>{{formWhat}}</h3>
        <div class="yourimg"><img :src="this.imgUrl"/></div>
        <div class="row form-col-wrap">
          <div class="col-lg-4 form-cols">
            <input type="text" v-model="commentName" required="required" class="form-control" placeholder="Name"
                   onfocus="this.placeholder=''"
                   data-toggle="tooltip" data-placement="top" title="输入QQ号将拉取qq头像和昵称"
                   onblur="this.placeholder='Name*'" @blur="getQQInfo">
          </div>
          <div class="col-lg-4 form-cols">
            <input type="email" v-model="commentEmail" required="required" class="form-control" placeholder="Email"
                   onfocus="this.placeholder=''"
                   data-toggle="tooltip" data-placement="top" title="接收回复通知以及获取gravatar头像"
                   onblur="this.placeholder='Email*'" @blur="getMd5">
          </div>
          <div class="col-lg-4 form-cols">
            <input type="url" v-model="commentUrl" class="form-control" placeholder="web" onfocus="this.placeholder=''"
                   data-toggle="tooltip" data-placement="top" title="请勿填写违法链接"
                   onblur="this.placeholder='web*'">
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
                <textarea :onblur="focusState = false" name="comment" class="form-control"
                          placeholder="Comment" cols="30" rows="10"
                          v-model="longText"
                          onfocus="this.placeholder=''" onblur="this.placeholder='Comment*'" id="longText"></textarea>
          </div>
        </div>
        <input type="submit" class="primary-btn" style="outline: none!important;border: none" @click="submitComment"
               value="Submit"/>
        <input v-show="this.parentCommentId" type="button" class="primary-btn" style="outline: none!important;border: none" @click="cancelReply" value="取消回复"/>
      </div>
    </div>
  </section>
</template>

<script>
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  export default {
    name: "articles",
    components: {
      pagination:resolve =>{require(['../../components/pagination/pagination'],resolve)},
    },
    data() {
      return {
        visit: 0,
        comment: 0,
        publish: '2018-10-10',
        article: '',
        focusState: false,
        longText: '',
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
        pageNum: '',
        father: 0,
        imgUrl: '',
        imgFlag: true,
        formWhat: '发表评论',
        showComment: false
      }
    },
    created() {
      this.change = true
      this.pageNum = this.$route.params.pageNum
      this.commentUrl = window.localStorage.getItem('Url')
      this.commentEmail = window.localStorage.getItem('Email')
      this.commentName = window.localStorage.getItem('Name')
      this.imgUrl = window.localStorage.getItem('ImgUrl')

      this.$axios('/api/crow/articles/' + this.$route.params.articleid + '/' + this.pageNum).then(res => {
        this.article = res.data.data,
        console.log(res.data.data)
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
        this.parentCommentId = this.article.commentList[key].commentid
        this.father = this.article.commentList[key].commentid
        this.formWhat = '回复'+this.article.commentList[key].commentName
      },
      replyIn(parent, child) {
        this.focusState = true
        this.parentCommentId = this.article.commentList[parent].childComment[child].commentid
        this.father = this.article.commentList[parent].commentid
        this.formWhat = '回复'+this.article.commentList[parent].childComment[child].commentName
      },
      cancelReply() {
        this.parentCommentId = 0
        this.father = 0
        this.formWhat = '发表评论'
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
        this.commentContent =  this.longText
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
        formData.append('commentAvatarMd5',this.imgUrl)
        this.$axios.post('/api/crow/comments', formData).then(res => {
          if(!this.showComment) {
            this.$toast('回复成功')
          }else if(this.parentCommentId !== 0) {
            $('html, body').animate({scrollTop: $('#comment-'+this.father).offset().top-100}, 1000)
          }else {
            $('html, body').animate({scrollTop: $('#div-comments').offset().top-100}, 1000)
          }
          window.localStorage.Name = this.commentName
          window.localStorage.Email = this.commentEmail
          window.localStorage.Url = this.commentUrl
          window.localStorage.ImgUrl = this.imgUrl
          this.formWhat = '发表评论'
          this.focusState = false
          this.longText = ''
          this.parentCommentId = 0
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
      },
      getQQInfo() {
        var reg = /^[1-9][0-9]{5,}$/
        if(reg.test(this.commentName)) {
          $.ajax({
            url: 'https://api.mashiro.top/qqinfo/?type=getqqnickname&qq='+this.commentName,
            type: 'get',
            dataType: 'jsonp',
            jsonpCallback:'portraitCallBack',
            success: (data)=> {
              console.log(data[this.commentName][6])
              this.imgUrl = 'http://q1.qlogo.cn/g?b=qq&nk='+this.commentName+'&s=100'
              this.commentEmail = this.commentName+'@qq.com'
              this.commentName = data[this.commentName][6]
              this.$toast('获取成功')
            }
          })
          function portraitCallBack(data){
            console.log(data[6]);
          }
        }
      },
      getMd5() {
        var MD5 = require('md5.js')
        this.imgUrl = 'https://cdn.v2ex.com/gravatar/'+new MD5().update(this.commentEmail).digest('hex')+'?s=50'
      },
      letShow() {
        this.showComment = true
        this.pagechange(1)
      }
    },
    watch: {
      focusState: function f() {
        if (this.focusState) {
          $("#longText").focus()
        }
      }
    },
    filters: {
      formatDate: function(time) {
        let date = new Date(time);
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
      }
    }
  }
</script>

<style scoped>

</style>
