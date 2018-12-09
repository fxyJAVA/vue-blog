import ToastComponent  from './toast'

const toast = {}

toast.install = function (Vue) {
  const  ToastConstructor = Vue.extend(ToastComponent)
  const instance = new ToastConstructor();

  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  Vue.prototype.$toast = (msg,duration = 1250)=> {
    instance.msg = msg;
    instance.theToast = true;
    setTimeout(()=>{
      instance.theToast = false;
    },duration)
  }
}
export default  toast
