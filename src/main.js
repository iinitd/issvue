import Vue from 'vue';
import App from './app';
import VueRouter from 'vue-router'
import Index from './pages/index.vue'
import Post from './pages/post.vue'
import {init} from './utils/config';
import axios from 'axios';


Vue.use(VueRouter);







const routes = [
  { path: '/', component: Index },
  { path: '/post/:id', component: Post }
]

const router = new VueRouter({
  routes
})

init()
  .then((cfg) => global.cfg = cfg)
  .then(function(){
      new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
  })


