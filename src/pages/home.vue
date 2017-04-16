<template>
  <div class="home">
    <div v-for="p in posts"
         class="post">
      <div class="meta"><span class="date">{{p.date}}</span>
        <span class="labels">
        <a v-for="label in p.labels">{{label.name}}</a>
      </span> </div>
      <router-link :to="{ path: '/post/'+p.number }">{{p.title}}</router-link>
  
    </div>
  </div>
</template>

<script>
import * as github from '../utils/github';
export default {
  name: 'home',
  data() {
    return {
      posts: []
    }
  },

  created: function () {
    const vm = this;
    github.getIssue()
      .then(function (res) {
        vm.posts = res.data.map((p) => {
          return {
            title: p.title,
            number: p.number,
            date: vm.timeFormat(p.created_at),
            labels: p.labels
          }
        })
      })

  },
  methods: {
    timeFormat: (_date) => {
      const date = new Date(_date);
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2)
      const day = ('0' + date.getDate()).slice(-2)
      return year + '-' + month + '-' + day
    }
  }
};
</script>
<style scoped>
.home {
  padding: 30px;
}

.post {
  padding: 20px 0;
  border-bottom: 0px solid #eee;
}

.meta {
  padding: 10px 0;
  font-size: 13px;
}

.date {
  color: #000;
}

.labels {
  float: right;
}

.labels a {
  display: block;
  padding: 4px;
  color: #00c853;
}
</style>