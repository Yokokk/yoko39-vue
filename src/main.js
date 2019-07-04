import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './assets/css/index.css'

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  // console.log('导航守卫工作！') //被守卫拦截
  // next() 方法用来进行页面跳转  不用next页面不会进入
  // next() //表示放行
  // console.log(to, from) //从哪来到哪去

  if (to.path === '/login') {
    next()
    return
  }

  //判断是否有token有就放行
  if (localStorage.getItem('token')) {
    next()
  } else {
    router.push('/login')
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
