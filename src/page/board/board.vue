<template xmlns:v-lazy="http://www.w3.org/1999/xhtml">
  <div>
    <!--顶部图片-->
    <header id="topheader">
      <div v-lazy:background-image="'https://i.loli.net/2018/11/30/5c01202809fe7.jpg'" class="background">
        <div class="nothome">
          <h1 class="h1-title animated fadeIn delay-1s">正因为有了词汇，最重要的东西才能留在我们心中。</h1>
        </div>
      </div>
    </header>


    <div class="container">
      <!--诗歌-->
      <div class="relative poem">
        <h1 style="padding: 20px 10px 10px 25px;font-size: 20px;color:#222222">
          <v-icon name="book-open" scale="1.6"/>
          今日诗词
        </h1>
        <div class="poem-wrap">
          <p id="info">{{poem.title}}</p>
          <p><em>【{{poem.dynasty}}】{{poem.author}}</em></p>
          <div class="main">
            <p v-for="(item,index) in poem.content.slice(0,4)" :key="index">{{item}}</p>
            <p v-if="poem.content.length>4">...</p>
          </div>
        </div>
      </div>


      <!--留言-->
      <div>
        <pagination :total="total" :current-page="current" :display="display" @pagechange="pagechange"></pagination>
      </div>
      <div class="comment-wrap animated" id="div-board">
        <h3 style="font-size: 24px;color: #222222;">
          <v-icon name="regular/comment" scale="1.1"/>
          留言&nbsp;{{total}}
        </h3>
        <div class="media comments" v-for="(board,index) in boards" :key="board.messageid"
             :id="'board-'+board.messageid">
          <div class="media-body">
            <div class="head-info">
              <div class="float-left clearfix">
                <img v-lazy="board.messageAvatarMd5">
              </div>
              <h5><a target="_blank" :href="board.messageUrl">{{board.messageName}}</a><span v-if="board.isAdmin" class="blog-owner">博主</span></h5>
              <div class="info">
                <time datetime="2018-11-22">{{board.messageDate|formatDate}}</time>
                <!--<span data-v-49843f54="" class="useragent-info">-->
                <!--{{board.messageAgent}}-->
                <!--</span>-->
                &nbsp;***
              </div>
            </div>
            <p v-html="board.messageContent" class="content" style="padding-left: 10px;"></p>
            <div class="onlyMyMain comment-buttons">
              <a class="btn-sm" @click="reply(index)">Replay</a>
            </div>

            <!--回复部分-->
            <div class="media replay-comment" v-for="(reply,childIndex) in board.childList" :key="reply.messageid"
                 :id="'Breply-'+reply.messageid" @mouseover="delYou" @mouseleave="addYou">

              <div class="media-body">
                <div class="head-info">
                  <div class="float-left clearfix">
                    <img v-lazy="reply.messageAvatarMd5">
                  </div>
                  <h5><a href="#">{{reply.messageName}}</a><span v-if="reply.isAdmin" class="blog-owner">博主</span></h5>
                  <div class="info">
                    <time datetime="2018-11-22">{{reply.messageDate|formatDate}}</time>
                    <!--<span data-v-49843f54="" class="useragent-info">-->
                    <!--{{reply.messageAgent}}-->
                    <!--</span>-->
                     ***
                  </div>
                </div>
                <p v-html="reply.messageContent" class="content">
                </p>
                <div class="onlyMyReplyIn comment-buttons">
                  <a class="btn-sm" @click="replyIn(index,childIndex)">Replay</a>
                </div>
              </div>
            </div>
            <hr>
          </div>
        </div>
      </div>

      <!--表单-->
      <div class="comment-form">
        <h3>{{formWhat}}</h3>
        <div class="yourimg"><img :src="this.imgUrl"/></div>
        <div class="row form-col-wrap">
          <div class="col-lg-4 form-cols">
            <input v-model="messageName" type="text" class="form-control" placeholder="Name"
                   onfocus="this.placeholder=''"
                   data-toggle="tooltip" data-placement="top" title="输入QQ号将拉取qq头像和昵称"
                   onblur="this.placeholder='Name*'"
                   @blur="getQQInfo">
          </div>
          <div class="col-lg-4 form-cols">
            <input v-model="messageEmail" type="email" class="form-control" placeholder="Email"
                   onfocus="this.placeholder=''"
                   data-toggle="tooltip" data-placement="top" title="接收回复通知以及获取gravatar头像"
                   onblur="this.placeholder='Email*'" @blur="getMd5">
          </div>
          <div class="col-lg-4 form-cols">
            <input data-toggle="tooltip" data-placement="top" title="请勿填写违法链接"
                   v-model="messageUrl" type="url" class="form-control" placeholder="web" onfocus="this.placeholder=''"
                   onblur="this.placeholder='web*'">
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
                <textarea :onblur="focusState=false" name="comment" class="form-control" placeholder="Comment" cols="30"
                          rows="10"
                          v-model="longText" onfocus="this.placeholder=''" onblur="this.placeholder='Comment*'"
                          id="longText"></textarea>
          </div>
        </div>
        <input type="submit" class="primary-btn" style="outline: none!important;border: none" @click="submitBoard"/>
        <input type="button" class="primary-btn" style="outline: none!important;border: none" @click="cancelReply"
               v-show="this.parentBoard" value="取消回复"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "board",
    components: {
      pagination: resolve => {
        require(['../../components/pagination/pagination'], resolve)
      },
    },
    created() {
      if (window.localStorage.getItem('Day') != new Date().getDay()) {
        //如果当前不是今天，更新时间
        window.localStorage.Day = new Date().getDay()
        //诗词清空
        window.localStorage.Poem = null
      }
      if (window.localStorage.getItem('Poem') == 'null' || window.localStorage.getItem('Poem') == '') {
        //诗词过期,重新载入诗词
        window.localStorage.Day = new Date().getDay()
        const jinrishici = this.$axios.create({
          baseURL: "https://v2.jinrishici.com/one.json",
          withCredentials: true
        })
        jinrishici.get('').then(response => {
          this.poem = response.data.data.origin
          window.localStorage.setItem('Poem', JSON.stringify(this.poem))
        })
      } else {
        //本地缓存有诗词，且没有过期
        var logg = JSON.parse(window.localStorage.getItem('Poem'))
        this.poem = logg
      }
      this.pageNum = this.$route.params.pageNum
      this.current = parseInt(this.pageNum)
      this.messageUrl = window.localStorage.getItem('Url')
      this.messageEmail = window.localStorage.getItem('Email')
      this.messageName = window.localStorage.getItem('Name')
      this.imgUrl = window.localStorage.getItem('ImgUrl')
      this.$axios.get('/api/crow/boards/' + this.pageNum).then(res => {
        this.boards = res.data.data
      }).catch(err => {
        console.log(err)
      })
      this.$axios.get('/api/crow/boards/nums').then(res => {
        this.total = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    mounted() {
      var arr = window.location.href.split('#')
      setTimeout(function () {
        if (arr.length === 2) {
          $('html, body').animate({scrollTop: $('#' + arr[1]).offset().top - 100}, 1000)
        }
      }, 1000)
      var options = {
        animation: true,
        trigger: 'focus'
      }
      $('[data-toggle="tooltip"]').tooltip(options)
    },
    data() {
      return {
        boards: [],
        pageNum: 0,
        total: 0,
        display: 15,
        current: 1,
        focusState: false,
        longText: '',
        messageName: '',
        messageEmail: '',
        messageUrl: '',
        messageContent: '',
        parentBoard: 0,
        poem: null,
        father: 0,
        emailMd5: '',
        qq: '',
        imgUrl: '',
        imgflag: true,
        formWhat: '留言'
      }
    },
    methods: {
      delYou() {
        $('.onlyMyMain>a').css('opacity','0')
      },
      addYou(){
        $('.onlyMyMain>a').css('opacity','')
      },
      reply(key) {
        this.focusState = true
        this.parentBoard = this.boards[key].messageid
        this.father = this.boards[key].messageid
        this.formWhat = '回复' + this.boards[key].messageName
      },
      replyIn(parent, child) {
        this.focusState = true
        this.parentBoard = this.boards[parent].childList[child].messageid
        this.father = this.boards[parent].messageid
        this.formWhat = '回复' + this.boards[parent].childList[child].messageName
      },
      cancelReply() {
        this.formWhat = '留言'
        this.parentBoard = 0
        this.father = 0
      },
      htmlEncodeJQ(str) {
        return $('<span/>').text(str).html();
      },
      pagechange(currentPage) {
        this.pageNum = currentPage
        $('#div-board').addClass('bounceInUp')
        setTimeout(function () {
          $('#div-board').removeClass('bounceInUp')
        }, 500)
        this.$axios.get('/api/crow/boards/' + this.pageNum)
          .then(res => {
            this.boards = res.data.data
          }).catch(err => {
          console.log('error:' + err)
        })
      },
      getMd5() {
        var MD5 = require('md5.js')
        this.imgUrl = 'https://cdn.v2ex.com/gravatar/' + new MD5().update(this.messageEmail).digest('hex') + '?s=50'
      },
      submitBoard() {
        const rexEmail = new RegExp('\\w[-\\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\\.)+[A-Za-z]{2,14}')
        const rexChar = /^[\u4e00-\u9fa5_a-zA-Z0-9]{1,10}$/;
        const rexUrl = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
        if (this.messageName === '') {
          this.$toast('昵称不能为空')
          return false
        } else if (!rexChar.test(this.messageName)) {
          this.$toast('昵称仅支持2~10位的中文，数字和字母组合')
          this.messageName = ''
          return false
        }
        if (this.messageEmail === '') {
          this.$toast('邮箱不能为空')
          return false
        } else if (!rexEmail.test(this.messageEmail)) {
          this.$toast('邮箱不合法，请重试')
          this.messageEmail = ''
          return false
        }
        if (this.messageUrl != '' && this.messageUrl != null  && !rexUrl.test(this.messageUrl)) {
          this.$toast('url不合法')
          this.messageUrl = ''
          return false
        }

        if (this.longText === '') {
          this.$toast('文本不能为空')
          return false
        }
        this.longText = this.htmlEncodeJQ(this.longText)
        this.messageContent = this.longText


        var formData = new FormData()
        formData.append('messageName', this.messageName)
        formData.append('messageEmail', this.messageEmail)
        formData.append('messageUrl', this.messageUrl)
        formData.append('messageContent', this.messageContent)
        formData.append('parentBoard', this.parentBoard)
        formData.append('pageNum', this.pageNum)
        formData.append('messageAvatarMd5', this.imgUrl)
        this.$axios.post('/api/crow/boards', formData).then(res => {
          if (this.parentBoard !== 0) {
            $('html, body').animate({scrollTop: $('#board-' + this.father).offset().top - 100}, 1000)
          } else {
            $('html, body').animate({scrollTop: $('#div-board').offset().top - 100}, 1000)
          }
          window.localStorage.Name = this.messageName
          window.localStorage.Email = this.messageEmail
          window.localStorage.Url = this.messageUrl
          window.localStorage.ImgUrl = this.imgUrl
          this.longText = ''
          this.current = 1
          this.pagechange(this.pageNum)
          this.parentBoard = 0
        }).catch(err => {
          console.log(err)
        })
      },
      getQQInfo() {
        var reg = /^[1-9][0-9]{5,}$/
        if (reg.test(this.messageName)) {
          this.$toast('正在获取qq头像和昵称', 3000)
          this.$axios.get('/api/crow/qq?qq='+this.messageName ).then(res=>{
            this.imgUrl = res.data.imgurl
            this.messageEmail = this.messageName+'@qq.com'
            this.messageName = res.data.name
            this.$toast('获取成功')
          }).catch(error=>{console.log(error)
            this.$toast('获取失败')
          })
        }
      },
    },
    watch: {
      focusState: function f() {
        if (this.focusState) {
          $("#longText").focus()
        }
      }
    },
    filters: {
      formatDate: function (time) {
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

  .container {
    padding: 0;
    max-width: 900px;
    margin-top: 95px;
    overflow: hidden;
    background: none;
    background: #ffffff;
    border-radius: 10px;
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
  .poem {
    border-radius: 20px;

    /*background: url(../../assets/huawen1.jpg);*/
    -webkit-background-size: cover;
    background-size: cover;
    margin: 40px auto 120px;
  }

  .poem-wrap {
    position: relative;
    width: 730px;
    max-width: 80%;
    border-top: 0;
    text-align: center;
    margin: 0 auto;
    padding: 20px 0;
  }

  #info {
    color: #797979;
  }

  .poem-wrap p {
    font-size: 20px;
    color: #797979;
  }

  .poem-wrap #info {
    font-weight: 700;
    font-size: 30px;
  }

  .poem-wrap .main {
    font-weight: 600;
  }

  .comment-wrap {
    background: none;
  }

  #topheader .background {
    width: 100%;
    height: 100%;
    position: relative;
    background-position: center;
    background-size: cover;
  }

</style>
