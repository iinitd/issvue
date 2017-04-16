<template>
    <article>
        <div class="title">{{post.title}}</div>
        <p v-html="post.body"
           class="content"></p>
        <div class="coms">
            <div class="leave"><a v-bind:href="post.html_url">leave a comment</a></div>
            <div v-for="c in coms"
                 class="com">
                <a :href="c.html_url"
                   target="_blank"><img :src="c.user.avatar_url"></a>
                <p>{{c.body}}
                </p>
            </div>
        </div>
    </article>
</template>

<script>
import * as github from '../utils/github';
import md from 'marked';
export default {
    name: 'post',
    data() {
        return {
            post: {},
            coms: []
        }
    },
    created: function () {
        const vm = this;
        const id = vm.$route.params.id;
        github.getIssue(id)
            .then(function (res) {
                vm.post = res.data.filter((p) => {
                    return p.number == id
                })[0]
                vm.post.body = md(vm.post.body);
            });
        github.getComs(id)
            .then(function (res) {
                vm.coms = res.data
            })

    }
};
</script>
<style scoped>
article {
    padding: 40px;
}

.title {
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    padding: 20px 0;
}

.leave {
    text-align: center;
    padding: 40px 0;
}

.leave a {
    padding: 10px;
    color: #2196F3;
    font-size: 12px;
    border-radius: 6px;
    border: 1px solid #2196F3;
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