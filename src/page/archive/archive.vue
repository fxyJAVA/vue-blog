<template>
  <div>
    <header id="topheader">
      <div v-lazy:background-image="bg" class="background">
      </div>
    </header>

    <!--文章列表-->
    <section class="blog-lists-section section-gap-full">
      <div class="container">
        <h1 style="font-size: 1.5rem;text-align: center">{{title}}</h1>
        <p style="text-align: center;">{{p}}</p>
        <div class="blog-lists">
          <div class="single-blog-post" v-for="article in articleList">
            <div class="post-details">
              <router-link :to="{name:'article',params:{articleid: article.articleid,pageNum:1}}">
                <h1 style="margin-bottom: 8px;">{{article.title}} </h1>
                <ul class="tags">
                  <li v-for="tag in article.tagList">
                    <v-icon name="regular/bookmark"></v-icon>
                    <a href="#">{{tag.tagName}}</a>
                  </li>

                  <li>
                    <v-icon name="regular/bookmark"></v-icon>
                    <a href="#">{{article.category.cateName}}</a>
                  </li>
                </ul>
                <div class="post-thumb relative">
                  <img v-lazy="article.thumbnail">
                </div>
                <p style="margin-top: 5px;margin-bottom: 0;">{{article.summary}}</p>
              </router-link>
              <hr>
              <div class="user-details d-flex align-items-center">
                <div class="details">
                  <ul class="tags">
                    <li>
                      <v-icon name="eye"></v-icon>
                      &nbsp{{article.view}}
                    </li>
                    <li>
                      <v-icon name="regular/comment"></v-icon>
                      {{article.comments}}
                    </li>
                    <li>
                      <h4 style="text-align: right">{{article.postDate|formatDate}}</h4>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>

          <nav>
            <!--TODO 分页-->
            <ul class="pagination"></ul>
          </nav>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "archive",
    created() {
      if(this.$route.params.cateid === 985) {
        this.title = '男子大学生的日常'
        this.p = '感想,随笔,记录'
        this.bg = 'https://i.loli.net/2018/12/16/5c15dfb8b44dd.jpg'
      } else if(this.$route.params.cateid === 11) {
        this.title = '第三方收容站'
        this.p = '无处可归之归处',
        this.bg = 'https://i.loli.net/2018/12/16/5c15d9259e4c9.jpg'
      }
      this.$axios('/api/crow/categories/'+this.$route.params.cateid).then(res => {
        this.articleList = res.data.data
      }).catch(error => {
        console.log(error)
      })
    },
    data() {
      return {
        articleList: [],
        title: 'Geek文章归档',
        p: '笔记,思考,总结',
        bg: 'https://i.loli.net/2018/12/10/5c0e626a0b345.jpeg'
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
        return y + '-' + MM + '-' + d
        // return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
      }
    }
  }
</script>

<style scoped>
  .container {
    max-width: 800px;
    padding: 25px;
  }
  #topheader .background {
    width: 100%;
    height: 100%;
    position: relative;
    background-position: center;
    background-size: cover;
  }
  .single-blog-post .post-details:hover {
    box-shadow: 0 5px 10px 5px rgba(110,110,110,.4);
  }

  /*文章列表*/
@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
}
</style>
