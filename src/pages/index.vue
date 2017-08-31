<template>
  <div class="container">
    <main-header></main-header>
    <div class="home">
      <div v-for="p in pin_posts"
           class="post">
        <div class="meta"><span class="date">{{p.date}}</span>
          <span class="labels">
              <a v-for="label in p.labels">{{label.name}}</a>
            </span> </div>
        <div>
          <span class="top">pin!</span>
          <router-link :to="{ path: '/post/'+p.number }">{{p.title}}</router-link>
        </div>
      </div>
      <hr>
      <div v-for="p in posts"
           class="post">
        <div class="meta"><span class="date">{{p.date}}</span>
          <span class="labels">
              <a v-for="label in p.labels">{{label.name}}</a>
            </span> </div>
        <router-link :to="{ path: '/post/'+p.number }">{{p.title}}</router-link>
  
      </div>
    </div>
  </div>
</template>

<script>
import * as github from '../io';
import * as utils from '../utils/utils';
import MainHeader from '../components/main-header.vue';

export default {
  name: 'home',
  components: {
    MainHeader
  },
  data: function () {
    return {
      posts: [],
      pin_posts: []

    }
  },
  beforeCreate: function () {
    document.title = global.cfg.blog.title
  },
  mounted: function () {
    const vm = this;
    const cfg = global.cfg
    github.getIssue()
      .then(this.filter)

  },
  methods: {

    getPin: function (posts, pos) {
      let l = pos.length
      return posts.filter((p) => {
        if (p.number == pos[l - 1]) {
          return l--
        }
        else return false
      })
    },
    getAuthor: function () {
      var author = {}
      cfg.repo.authors.map(function (x) {
        author[x] = true
      })
      return author
    },
    format: function (p) {
      var obj = {
        title: p.title,
        number: p.number,
        date: utils.timeFormat(p.created_at),
        labels: p.labels
      }
      return obj
    },
    filter: function (posts) {
      const vm = this;
      const cfg = global.cfg
      var res = []
      const author = this.getAuthor()
      const pin = cfg.pin
      var l = pin.length
      posts.map(function (p) {
        if (author[p.user.login]) {
          if (p.number == cfg.pin[l - 1]) {
            vm.pin_posts.push({
              title: p.title,
              number: p.number,
              date: utils.timeFormat(p.created_at),
              labels: p.labels
            })
            l--
          }
          else {
            vm.posts.push({
              title: p.title,
              number: p.number,
              date: utils.timeFormat(p.created_at),
              labels: p.labels
            })
          }
        }
      })
    }
  }
};
</script>
<style scoped>
.home {
  padding: 30px;
  border-radius: 8px;
  background: #FFF;
}

.post {
  padding: 20px 30px;
  border-bottom: 0px solid #eee;
  border-radius: 8px;
}

.post:hover {
  background: #f7f9fb;
  ;
  -webkit-transition: .5s;
  transition: .5s;
  -moz-transition: .5s;
}

.post a {
  color: #333;
}

.post a:hover {
  color: #000;
  opacity: 1;
  -webkit-transition: .5s;
  transition: .5s;
  -moz-transition: .5s;
}

.meta {
  margin-bottom: 8px;
  font-size: 13px;
}

.date {
  color: #999;
}

.labels {
  float: right;
}

.labels a {
  display: inline-block;
  padding: 4px;
  color: #00c853;
}

.top {
  display: inline-block;
  background: #FFF;
  margin: 3px 6px 3px 0;
  padding: 2px 4px;
  font-size: 12px;
  border-radius: 3px;
  color: #f05f5a;
  border: 1px solid #f05f5a;
}

hr {
  border: 1px solid #efefef;
  margin: 30px;
}
</style>