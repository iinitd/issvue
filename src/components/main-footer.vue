<template>
  <footer>
    Presented by <a href="https://github.com/cogons/issvue">issvue</a> & <a :href="url">{{owner}}</a>
  </footer>
</template>

<script>
//import config from '../config'
export default {
  name: 'main-footer',
  data: function() {
    return {
      owner: 'issvue',
      url: 'https://github.com/'
    }
  },
  created:function(){

    const vm = this
    const cfg = global.cfg


    vm.owner = cfg.repo.user
    vm.url += cfg.repo.user


}};
</script>
<style scoped>
footer {
  text-align: center;
  font-size: 14px;
  padding: 50px 0;
  color: #FFF;
}

footer a {
  font-weight: bold;
  color: #FFF;
}
</style>