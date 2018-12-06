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
      <div class="row" style="margin:20px auto 120px auto;" >
        <div class="col-md-6 prev-next" v-if="this.article.previd !== 0" :class="this.article.nextid===0?'col-md-12':'col-md-6'">
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
        <div class="prev-next" v-if="this.article.nextid !== 0" :class="this.article.previd ===0?'col-md-12':'col-md-6'">
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
      <div class="comment-wrap">
        <h3>
          <v-icon name="regular/comment" scale="1.1"/>
          评论&nbsp;{{article.comments}}
        </h3>
        <div class="media comments" v-for="(comment,index) in article.commentList" :key="comment.commentid" :id="'comment-'+comment.commentid">

          <div class="media-body">
            <div class="head-info">
              <div class="float-left clearfix">
                <img src="../../assets/2.jpg">
              </div>
              <h5><a target="_blank" :href="comment.commentUrl">{{comment.commentName}}</a></h5>
              <div class="info">
                <time datetime="2018-11-22">2018-9-9</time>
                <span data-v-49843f54="" class="useragent-info">
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

            <div class="media replay-comment" v-for="(reply,childIndex) in comment.childComment" :key="childIndex" :id="'reply-'+reply.commentid">

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
                <textarea @blur="focusState = false" v-focus="focusState" name="comment" class="form-control"
                          placeholder="Comment" cols="30" rows="10"
                          v-model="longText"
                          onfocus="this.placeholder=''" onblur="this.placeholder='Comment*'" id="longText"></textarea>
            <button class="primary-btn" style="outline: none!important;border: none" @click="submitComment">Submit
            </button>
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
        publish: '2018-10-10',
        article: '',
        focusState: false,
        longText: '',
        prefix: '',
        bg: ''
      }
    },
    created() {
      this.$axios('/api/crow/articles/' + this.$route.params.articleid+'/'+this.$route.params.pageNum).then(res => {
        this.article = res.data.data
        this.bg = this.article.thumbnail
        console.log(this.article)
      }).catch(error => {
        console.log(error)
      })
    },
    methods: {
      reply(key) {
        this.focusState = true
        console.log(this.article.commentList[key])
        this.prefix = '<a href="' + this.article.commentList[key].commentUrl + '">' + '@' + this.article.commentList[key].commentName + '</a>&nbsp;'
      },
      replyIn(parent, child) {
        this.focusState = true
        //前缀，回复内容之前一定要包含这个内容
        this.prefix = '<a href="' + this.article.commentList[parent].childComment[child].commentUrl + '">' + '@' + this.article.commentList[parent].childComment[child].commentName + '</a>&nbsp;'
        alert(this.prefix)
      },
      submitComment() {
        this.longText = this.htmlEncodeJQ(this.longText)
        this.longText = this.prefix + this.longText
        console.log(this.longText)
      },
      htmlEncodeJQ(str) {
        return $('<span/>').text(str).html();
      },
      htmlDecodeJQ(str) {
        return $('<span/>').html(str).text();
      }
    },
    directives: {
      focus: {
        //根据focusState的状态改变是否聚焦focus
        update: function (el, value) {    //第二个参数传进来的是个json
          if (value) {
            el.focus()
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
