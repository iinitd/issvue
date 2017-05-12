<template>
  <div>
    <router-view></router-view>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from './components/main-header.vue';
import MainFooter from './components/main-footer.vue';
import axios from 'axios';



export default {
  name: 'app',
  components: {
    MainHeader,
    MainFooter
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #2196F3;
  font-family: "Lucida Grande", Lucida Sans Unicode, Hiragino Sans GB, WenQuanYi Micro Hei, Verdana, Aril, sans-serif;
  font-size: 15px;
  color: #262626;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a,
a:hover {
  color: #262626;
  text-decoration: none;
  transition: opacity .5s ease;
  -webkit-transition: opacity .5s ease;
  -moz-transition: opacity .5s ease;
}

a:hover {
  opacity: 0.6
}

.container {
  margin: 0 auto;
  margin-top: 50px;
  max-width: 80%;
  background-color: #2196F3;
  border-radius: 6px;
}
</style>
