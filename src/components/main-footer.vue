<template>
  <footer>
    Presented by <a href="https://github.com/cogons/issvue">issvue</a> & <a :href="url">{{owner}}</a>
  </footer>
</template>

<script>
import config from '../config'
export default {
  name: 'main-footer',
    data() {
        return {
            owner:config.user,
            url:'https://github.com/'+config.user
        }
    },
};
</script>
<style scoped>

footer{
  text-align: center;
  font-size: 11px;
  padding:30px 0;
  color:#999;
}
footer a{
  font-weight: bold;
  color:#999;
}

</style>