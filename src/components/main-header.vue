<template>
  <header>
    <nav>
      <ul>
        <li v-for="item in nav">
          <a :href="item.url"
             target="_blank">{{item.name}}</a>
        </li>
      </ul>
      <router-link class="logo"
                   to="/">{{blog.title}}</router-link>
    </nav>
    <section class="meta">
      <template v-if="mytitle">
        <h1>{{mytitle}}</h1>
        <p>{{mydes}}</p>
      </template>
      <template v-else>
        <h1>{{blog.welcome}}</h1>
        <p>{{blog.detail}}</p>
      </template>
  
    </section>
  </header>
</template>

<script>

export default {
  name: 'main-header',
  props: ['mytitle', 'mydes'],
  data: function () {
    return {
      nav: {},
      blog: {}
    }
  },
  created: function () {

    const vm = this
    const cfg = global.cfg


    vm.nav = cfg.nav
    vm.blog = cfg.blog


  }
};
</script>
<style scoped>
header {
  border-radius: 6px 6px 0 0;
  background: #2196F3;
  color: #FFF;
  padding: 20px 0;
}

header a {
  color: #fff;
}

.meta {
  text-align: center;
  min-height: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-self: center;
}

.meta h1 {
  font-size: 30px;
}

.meta p {
  margin-top: 40px;
  font-size: 16px;
}

nav {
  top: 30px;
  margin: 0 auto;
  display: block;
  width: 80%;
  overflow: auto;
  z-index: 10;
  position: absolute;
}

.logo {
  float: left;
  padding: 4px;
  margin: 4px 6px;
}

nav ul {
  float: right;
}

nav li {
  display: inline-block;


}


nav li a{
  padding: 10px;
  margin: 10px 10px;
  border-bottom: 3px solid transparent;
    -webkit-transition: all .5s ease;
transition: all .5s ease;
background:  #2196F3;


}

nav li a:hover{
  border-bottom:3px solid #FFF;
  padding-bottom: 12px;
  opacity: 1;
}


</style>
