<template>
  <div class="container">
    <main-header></main-header>
    <div class="home">
      <div v-for="p in tops"
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
import * as github from '../utils/github';
import * as utils from '../utils/utils';
import MainHeader from '../components/main-header.vue';

export default {
  name: 'home',
  components: {
    MainHeader
  },
  data: function() {
    return {
      posts: [],
      tops:[]

    }
  },
  create:function(){

    cfg2 = global.cfg

  },

  mounted: function () {
    const vm = this;
    const cfg = global.cfg
    github.getIssue()
      .then(this.put)

  },
  methods:{

   getTops: function (posts, pos) {
     let l = pos.length
      return posts.filter((p) => {
        if (p.number == pos[l - 1]) {
          l--
          return true
        }
        else return false
      })
    },
    put:function(res){
      const vm = this;
      const cfg = global.cfg
      vm.tops = vm.getTops(res, cfg.tops).map((p) => {
          return {
            title: p.title,
            number: p.number,
            date: utils.timeFormat(p.created_at),
            labels: p.labels
          }
        })
      vm.posts = res.map((p) => {
          return {
            title: p.title,
            number: p.number,
            date: utils.timeFormat(p.created_at),
            labels: p.labels
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
  border-radius:8px;
}

.post:hover{
  background: #f7f9fb;;
  -webkit-transition: .5s;
transition: .5s;
  -moz-transition: .5s;
}

.post a{
  color:#333;
}

.post a:hover{
  color: #000;
  opacity:1;
  -webkit-transition: .5s;
transition: .5s;
  -moz-transition: .5s;

}

.meta {
  margin-bottom:8px;
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

.top{
  display:inline-block;
  background: #FFF;
  margin:3px 6px 3px 0;
  padding:2px 4px;
  font-size: 12px;
  border-radius: 3px;
  color:#f05f5a;
  border:1px solid #f05f5a;
}

hr{
  border: 1px solid #efefef;
  margin:30px;
}
</style>