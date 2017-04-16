import Vue from 'vue';
import App from './app';
import VueRouter from 'vue-router'
import Home from './pages/home.vue'
import Post from './pages/post.vue'

Vue.use(VueRouter);


const routes = [
  { path: '/', component: Home },
  { path: '/post/:id', component: Post }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
