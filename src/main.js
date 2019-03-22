// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery/dist/jquery.min'
import jquery from 'jquery/dist/jquery.min'
import 'vue-awesome/icons/index.js'
import Icon from 'vue-awesome/components/Icon'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import Axios from 'axios'
import toast from './components/toast'
import VueLazyload from 'vue-lazyload'
import router from './router'
Vue.use(toast)

Vue.use(VueLazyload,{
  preLoad: 1.3,
  error: require('../static/error.jpg'),
  loading: require('../static/timg.gif'),
  attempt: 1
})
Vue.prototype.$axios = Axios
Vue.component('v-icon', Icon)

Axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log(response)
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  $,
  jquery,
  components: { App },
  template: '<App/>'
})
