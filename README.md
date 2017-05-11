# 有话说

一直都觉得用issue写blog简直是懒人福音。
但是github issue的层级太深，一直不大像一个blog。
于是有了这个idea。

# 用户手册

1. fork [issvue-to-go](https://github.com/cogons/issvue-to-go)

2. 在 ./static/app.js 中定位到 `hello world`，修改配置。

3. 开启github-pages。

4. 你的博客就做好了。


## 开发者说明

1. 你需要有node。

2. 你需要把[本项目](https://github.com/cogons/issvue)clone到本地。

`$ git clone https://github.com/cogons/issvue.git`

3. 安装相关包。

`$ cd issvue && npm install`。

4. 修改 ./src/config.js 中相关配置。
`$ vi ./src/config.js`

5. 随便改改。

6. 重新打包blog。
`$ npm run build`。

7. 生成的blog将存放在docs目录中。

# 项目你所能了解的

- vue-cli
- axios
- Promise
- sessionStorage
- Other minor things ..
