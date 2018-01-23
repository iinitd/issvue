<template>
    <div class="container">
        <main-header :mytitle="post.title"
                     :mydes="post.created_at"></main-header>
        <article>
            <p v-html="post.body"
               class="content markdown-body"></p>
            <div class="coms">
                <div class="leave"><a v-bind:href="post.html_url">leave a comment</a></div>
                <div class="com_area"><div v-for="c in coms"
                     class="com">
                    <a :href="c.html_url"
                       target="_blank"><img :src="c.user.avatar_url"></a>
                    <p>{{c.body}}
                    </p>
                </div></div>
            </div>
        </article>
    </div>
</template>


<script>
import * as github from '../io';
import * as utils from '../utils/utils';
import '../assets/css/github-markdown.css'
import md from 'marked';
import emoji from 'node-emoji'
import highlightjs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'
import MainHeader from '../components/main-header.vue';

let parse = (markdown) => {
  const replacer = (match) => emoji.emojify(match)
  markdown = markdown.replace(/(:.*:)/g, replacer)
	 
  return md(markdown)
}

export default {
    name: 'post',
    components: {
        MainHeader
    },
    beforeCreate:function(){
    document.title = global.cfg.blog.title
  },
    data: function(){
        return {
            post: {},
            coms: []
        }
    },
    mounted: function () {
        const vm = this;
        const id = vm.$route.params.id;
        md.setOptions({
            highlight: (code) => highlightjs.highlightAuto(code).value
        })
        github.getIssue(id)
            .then(function (res) {
                vm.post = res.filter((p) => {
                    return p.number == id
                })[0]
                document.title = vm.post.title+" - "+global.cfg.blog.title
                vm.post.body = parse(vm.post.body);
                vm.post.created_at = utils.timeFormat(vm.post.created_at)
            });
        github.getComs(id)
            .then(function (res) {
                vm.coms = res
            })

    }
};
</script>
<style scoped>
article {
      padding: 60px;
    border-radius: 8px;
    background: #FFF;
}

.meta {
    padding: 30px 0 40px 0;
    text-align: center;
}

.meta span {
    display: block;
}

.title {
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    padding: 20px 0;
}

.leave {
    text-align: center;
    padding: 80px 0 20px 0;
}

.leave a {
    padding: 10px;
    color: #2196F3;
    font-size: 12px;
    border-radius: 6px;
    border: 1px solid #2196F3;
}
.com_area{
    margin-top:20px;

}
.com {
    padding: 10px 0;
    display: flex;
    align-items: center;
}

.com img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
}

.com p {
    padding: 10px 20px;
    background: #f7f9fb;
    width: 100%;
    margin: 0 10px;
}

article .content>h1 {

    font-size: 16px;
}
</style>