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
      <router-link to="/"
                   v-if="mytitle">
        <h1>{{mytitle}}</h1></router-link>
      <router-link to="/"
                   v-else>
        <h1>{{blog.welcome}}</h1></router-link>
      <p v-if="mydes">{{mydes}}</p>
      <p v-else>{{blog.detail}}</p>
    </section>
  </header>
</template>

<script>
import config from '../config'
export default {
  name: 'main-header',
  props: ['mytitle', 'mydes'],
  data: function() {
    return {
      nav: config.nav,
      blog: config.blog
    }
  },
};
</script>
<style scoped>
header {
  border-radius: 6px 6px 0 0;
  min-height: 200px;
  background: #2196F3;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
}

header a {
  color: #fff;
}

.meta {
  text-align: center;
  margin: 40px 0;
}

.meta p {
  margin-top: 20px;
}

nav {
  width: 90%;
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
  padding: 4px;
  margin: 4px 6px;
}
</style>
