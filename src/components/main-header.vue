<template>
  <header>
    <nav>
      <li v-for="item in nav">
      <a :href="item.url">{{item.name}}</a>
      </li>
    </nav>
    <router-link to="/"><h1>issvue</h1></router-link>
    <p>A client-side github-issue site generator.</p>
  </header>
</template>

<script>
import config from '../config'
export default {
  name: 'main-header',
    data(){
    return{
      nav:config.nav
    }},
};
</script>
<style scoped>
header{
    border-radius: 6px 6px 0 0;
    min-height: 200px;
  background: #2196F3;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
header a{
  color: #fff;
}
nav{
 align-self: flex-end;
 margin-right: 30px;
 display: flex;
  
}
nav li{
  display: inline-block;
  padding:4px;
  margin:4px 6px;
}
nav li:first{
  align-self: flex-start;
}
</style>
