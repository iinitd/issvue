<template>
<div>
  <div class="container">
    <main-header></main-header>
    <router-view></router-view>
  </div>
      <main-footer></main-footer>
    </div>
  
</template>

<script>
import * as github from './utils/github';
import MainHeader from './components/main-header.vue';
import MainFooter from './components/main-footer.vue';

export default {
  name: 'app',
  components:{
    MainHeader,
    MainFooter
  }
};
</script>

<style>
*{
  box-sizing: border-box;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
}
body{
  background-color: #f7f9fb;
font-family: "Lucida Grande", Lucida Sans Unicode, Hiragino Sans GB, WenQuanYi Micro Hei, Verdana, Aril, sans-serif;
font-size: 15px;
color: #262626;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
a,a:hover{
  color:#262626;
text-decoration: none;
transition: opacity .5s ease;
-webkit-transition: opacity .5s ease;
-moz-transition: opacity .5s ease;
}
a:hover{
  opacity: 0.6
}
.container{
  margin:0 auto;
  margin-top: 50px;
  max-width: 55%;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 20px 150px #d6dee4;
}
</style>
