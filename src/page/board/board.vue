<template>
  <div>
    <!--顶部图片-->
    <header id="topheader">
      <div v-lazy:background-image="'https://i.loli.net/2018/11/30/5c01202809fe7.jpg'" class="background">
      </div>
    </header>


    <div class="container">
      <!--诗歌-->
      <div class="nothome">
        <h1 class="h1-title animated fadeIn delay-1s">正因为有了词汇，最重要的东西才能留在我们心中。</h1>
      </div>
      <div class="relative poem">
        <h1 style="padding: 20px 10px 10px 25px;font-size: 20px;">
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
        <h3>
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
              <h5><a target="_blank" :href="board.messageUrl">{{board.messageName}}</a><span class="blog-owner">博主</span></h5>
              <div class="info">
                <time datetime="2018-11-22">2018-9-9</time>
                <span data-v-49843f54="" class="useragent-info">
                  {{board.messageAgent}}
                </span>
                &nbsp;广东省广州市 联通{{board.messageIp}}
              </div>
            </div>
            <p v-html="board.messageContent" class="content" style="padding-left: 10px;">

            </p>
            <div class="comment-buttons">
              <button class="btn-sm" @click="reply(index)">Replay</button>
            </div>

            <!--回复部分-->
            <div class="media replay-comment" v-for="(reply,childIndex) in board.childList" :key="reply.messageid"
                 :id="'Breply-'+reply.messageid">

              <div class="media-body">
                <div class="head-info">
                  <div class="float-left clearfix">
                    <img v-lazy="reply.messageAvatarMd5">
                  </div>
                  <h5><a href="#">{{reply.messageName}}</a><span class="blog-owner">博主</span></h5>
                  <div class="info">
                    <time datetime="2018-11-22">2018-9-9</time>
                    <span data-v-49843f54="" class="useragent-info">
                        {{reply.messageAgent}}
                    </span>
                    &nbsp;广东省广州市 联通 {{reply.messageIp}}
                  </div>
                </div>
                <p v-html="reply.messageContent" class="content">
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
        <div class="yourimg"><img :src="this.imgUrl"/></div>
        <div class="row form-col-wrap">
          <div class="col-lg-4 form-cols">
            <input v-model="messageName" type="text" class="form-control" placeholder="Name"
                   onfocus="this.placeholder=''"
                   onblur="this.placeholder='Name*'"
            @blur="getQQInfo">
          </div>
          <div class="col-lg-4 form-cols">
            <input v-model="messageEmail" type="email" class="form-control" placeholder="Email"
                   onfocus="this.placeholder=''"
                   onblur="this.placeholder='Email*'" @blur="getMd5">
          </div>
          <div class="col-lg-4 form-cols">
            <input v-model="messageUrl" type="url" class="form-control" placeholder="web" onfocus="this.placeholder=''"
                   onblur="this.placeholder='web*'">
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
                <textarea @blur="focusState = false" name="comment" class="form-control" placeholder="Comment" cols="30"
                          rows="10"
                          v-model="longText" onfocus="this.placeholder=''" onblur="this.placeholder='Comment*'"
                          id="longText"></textarea>
          </div>
        </div>
        <input type="submit" class="primary-btn" style="outline: none!important;border: none" @click="submitBoard"/>
      </div>
    </div>
  </div>
</template>

<script>
  import pagination from '../../components/pagination/pagination'

  export default {
    name: "board",
    components: {pagination},
    created() {
      if(window.localStorage.getItem('Day') != new Date().getDay()) {
        //如果当前不是今天，更新时间
        window.localStorage.Day = new Date().getDay()
        //诗词清空
        window.localStorage.Poem = null
      }

      if(window.localStorage.getItem('Poem') == 'null' || window.localStorage.getItem('Poem') == '') {
        //诗词过期,重新载入诗词
        window.localStorage.Day = new Date().getDay()
        const jinrishici=this.$axios.create({
          baseURL: "https://v2.jinrishici.com/one.json",
          withCredentials: true
        })
        jinrishici.get('').then(response=>{
          this.poem = response.data.data.origin
          console.log(this.poem)
          window.localStorage.setItem('Poem',JSON.stringify( this.poem))
        })
      } else {
        //本地缓存有诗词，且没有过期
        var logg = JSON.parse(window.localStorage.getItem('Poem'))
        this.poem = logg
        console.log(this.poem)
      }
      this.pageNum = this.$route.params.pageNum
      this.pageNum = this.$route.params.pageNum
      this.messageUrl = window.localStorage.getItem('Url')
      this.messageEmail = window.localStorage.getItem('Email')
      this.messageName = window.localStorage.getItem('Name')
      this.imgUrl = window.localStorage.getItem('ImgUrl')
      this.$axios.get('/api/crow/boards/' + this.pageNum).then(res => {
        console.log(res.data.data)
        this.boards = res.data.data
      }).catch(err => {
        console.log(err)
      })
      var arr = window.location.href.split('#')
      setTimeout(function () {
        if (arr.length === 2) {
          $('html, body').animate({scrollTop: $('#' + arr[1]).offset().top}, 1000)
        }
      }, 500)
      this.$axios.get('/api/crow/boards/nums').then(res => {
        this.total = res.data
      }).catch(err => {
        console.log(err)
      })
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
        imgUrl:'',
        imgflag: true
      }
    },
    methods: {
      reply(key) {
        this.focusState = true
        this.prefix = '<a href="' + this.boards[key].messageUrl + '">' + '@' + this.boards[key].messageName + '</a>&nbsp;'
        this.parentBoard = this.boards[key].messageid
        this.father = this.boards[key].messageid
      },
      replyIn(parent, child) {
        this.focusState = true
        //前缀，回复内容之前一定要包含这个内容,上同
        this.prefix = '<a href="' + this.boards[parent].childList[child].messageUrl + '">' + '@' + this.boards[parent].childList[child].messageName + '</a>&nbsp;'
        this.parentBoard = this.boards[parent].childList[child].messageid
        this.father = this.boards[parent].messageid
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
          this.imgUrl = 'https://cdn.v2ex.com/gravatar/'+md5(this.messageEmail)+'?s=50'
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

        if (!rexUrl.test(this.messageUrl) && this.messageUrl !== '') {
          this.$toast('url不合法')
          this.commentUrl = ''
          return false
        }

        if (this.longText === '') {
          this.$toast('文本不能为空')
          return false
        }
        this.longText = this.htmlEncodeJQ(this.longText)
        if(this.prefix) {
          this.messageContent = this.prefix + this.longText
        }else {
          this.messageContent = this.longText
        }


        var formData = new FormData()
        formData.append('messageName', this.messageName)
        formData.append('messageEmail', this.messageEmail)
        formData.append('messageUrl', this.messageUrl)
        formData.append('messageContent', this.messageContent)
        formData.append('parentBoard', this.parentBoard)
        formData.append('pageNum', this.pageNum)
        formData.append('messageAvatarMd5',this.imgUrl)
        this.$axios.post('/api/crow/boards', formData).then(res => {
          if(this.parentBoard !== 0) {
            $('html, body').animate({scrollTop: $('#board-'+this.father).offset().top - 100}, 1000)
          }else {
            $('html, body').animate({scrollTop: $('#div-board').offset().top - 100}, 1000)
          }

          window.localStorage.Name = this.messageName
          window.localStorage.Email = this.messageEmail
          window.localStorage.Url = this.messageUrl
          window.localStorage.ImgUrl = this.imgUrl
          this.longText = ''
          this.current = 1
          this.pagechange(1)
          this.parentBoard = 0
          this.prefix = ''
        }).catch(err => {
          console.log(err)
        })
      },
      getQQInfo() {
        var reg = /^[1-9][0-9]{5,}$/
        if(reg.test(this.messageName)) {
          this.imgUrl ='https://q2.qlogo.cn/headimg_dl?dst_uin='+this.messageName+'&amp;spec=100'
          this.$toast('正在获取qq昵称',3000)
          this.$axios.get('/qq/qqinfo/?type=getqqnickname&qq='+this.messageName).then(res=>{
          var arr = res.data.split('(')
            arr = arr[1].split(')')
            arr = JSON.parse(arr[0])
            this.messageEmail = this.messageName+'@qq.com'
            this.messageName = arr[this.messageName][6]
            this.$toast('获取昵称成功')

            this.imgflag = false
          }).catch(err=>{
            console.log(err)
            this.$toast('获取昵称失败')
          })
        }
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

  .container {
    padding: 0;
    max-width: 900px;
    margin-top: 95px;
    overflow: hidden;
    background: none;
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
    background: url(../../assets/huawen1.jpg);
    -webkit-background-size: cover;
    background-size: cover;
    margin-bottom: 120px;
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

  .poem-border {
    position: absolute;
    height: 2px;
    width: 27%;
    background-color: #777777;
  }

  .poem-left {
    left: 0;
  }

  #info {
    color: #000;
  }

  .poem-wrap p {
    font-size: 20px;
    color: #111111;
  }

  .poem-wrap #info {
    font-weight: 700;
    font-size: 30px;
  }

  .poem-wrap .main {
    font-weight: 600;
  }

  .poem-right {
    right: 0;
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

  .background h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
  }

  .comment-wrap {
    background: url(../../assets/huawen5.jpg);
  }
</style>
