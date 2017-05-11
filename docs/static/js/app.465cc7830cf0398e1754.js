webpackJsonp([1],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = timeFormat;
function timeFormat(_date) {
    const date = new Date(_date);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun ', 'Jul ', 'Aug ', 'Sep ', 'Oct', 'Nov', 'Dec'];
    return year + '-' + month + '-' + day;
    //return return months[date.getMonth()] +' '+ day+ ', ' +  year;
}

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(48)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(231),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(46)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(229),
  /* scopeId */
  "data-v-616645ae",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(45)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(228),
  /* scopeId */
  "data-v-1966b86a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(49)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(232),
  /* scopeId */
  "data-v-aeb149d6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('main-header', {
    attrs: {
      "mytitle": _vm.post.title,
      "mydes": _vm.post.created_at
    }
  }), _vm._v(" "), _c('article', [_c('p', {
    staticClass: "content markdown-body",
    domProps: {
      "innerHTML": _vm._s(_vm.post.body)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "coms"
  }, [_c('div', {
    staticClass: "leave"
  }, [_c('a', {
    attrs: {
      "href": _vm.post.html_url
    }
  }, [_vm._v("leave a comment")])]), _vm._v(" "), _vm._l((_vm.coms), function(c) {
    return _c('div', {
      staticClass: "com"
    }, [_c('a', {
      attrs: {
        "href": c.html_url,
        "target": "_blank"
      }
    }, [_c('img', {
      attrs: {
        "src": c.user.avatar_url
      }
    })]), _vm._v(" "), _c('p', [_vm._v(_vm._s(c.body) + "\n                ")])])
  })], 2)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('main-header'), _vm._v(" "), _c('div', {
    staticClass: "home"
  }, _vm._l((_vm.posts), function(p) {
    return _c('div', {
      staticClass: "post"
    }, [_c('div', {
      staticClass: "meta"
    }, [_c('span', {
      staticClass: "date"
    }, [_vm._v(_vm._s(p.date))]), _vm._v(" "), _c('span', {
      staticClass: "labels"
    }, _vm._l((p.labels), function(label) {
      return _c('a', [_vm._v(_vm._s(label.name))])
    }))]), _vm._v(" "), _c('router-link', {
      attrs: {
        "to": {
          path: '/post/' + p.number
        }
      }
    }, [_vm._v(_vm._s(p.title))])], 1)
  }))], 1)
},staticRenderFns: []}

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', [_c('nav', [_c('ul', _vm._l((_vm.nav), function(item) {
    return _c('li', [_c('a', {
      attrs: {
        "href": item.url,
        "target": "_blank"
      }
    }, [_vm._v(_vm._s(item.name))])])
  })), _vm._v(" "), _c('router-link', {
    staticClass: "logo",
    attrs: {
      "to": "/"
    }
  }, [_vm._v(_vm._s(_vm.blog.title))])], 1), _vm._v(" "), _c('section', {
    staticClass: "meta"
  }, [(_vm.mytitle) ? _c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('h1', [_vm._v(_vm._s(_vm.mytitle))])]) : _c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('h1', [_vm._v(_vm._s(_vm.blog.welcome))])]), _vm._v(" "), (_vm.mydes) ? _c('p', [_vm._v(_vm._s(_vm.mydes))]) : _c('p', [_vm._v(_vm._s(_vm.blog.detail))])], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('router-view'), _vm._v(" "), _c('main-footer')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', [_vm._v("\n  Presented by "), _c('a', {
    attrs: {
      "href": "https://github.com/cogons/issvue"
    }
  }, [_vm._v("issvue")]), _vm._v(" & "), _c('a', {
    attrs: {
      "href": _vm.url
    }
  }, [_vm._v(_vm._s(_vm.owner))])])
},staticRenderFns: []}

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({

    blog: {
        title: 'Cogons', // display on upper left corner
        welcome: 'Welcome to issvue', // display on homepage
        detail: 'This is a client-side github-issue blog generator.' // display on homepage
    },
    repo: {
        user: 'cogons',
        repo: 'blog',
        token: '6c1f1612f103c435991969309947995904f4451c' // place a read-only token here
    },
    nav: [{ name: 'social', url: 'https://www.zhihu.com/people/mustaxu' }, { name: 'github', url: 'https://github.com/cogons' }, { name: 'Star&Fork', url: 'https://github.com/cogons/issvue' }]

});

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_github__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_main_header_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_main_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_main_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main_footer_vue__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main_footer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_main_footer_vue__);
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  components: {
    MainHeader: __WEBPACK_IMPORTED_MODULE_1__components_main_header_vue___default.a,
    MainFooter: __WEBPACK_IMPORTED_MODULE_2__components_main_footer_vue___default.a
  }
});

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(3);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'main-footer',
  data: function () {
    return {
      owner: __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].repo.user,
      url: 'https://github.com/' + __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].repo.user
    };
  }
});

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'main-header',
  props: ['mytitle', 'mydes'],
  data: function () {
    return {
      nav: __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].nav,
      blog: __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].blog
    };
  }
});

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_github__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main_header_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_main_header_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'home',
  components: {
    MainHeader: __WEBPACK_IMPORTED_MODULE_2__components_main_header_vue___default.a
  },
  data() {
    return {
      posts: []

    };
  },

  created: function () {
    const vm = this;
    __WEBPACK_IMPORTED_MODULE_0__utils_github__["a" /* getIssue */]().then(function (res) {
      vm.posts = res.data.map(p => {
        return {
          title: p.title,
          number: p.number,
          date: __WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* timeFormat */](p.created_at),
          labels: p.labels
        };
      });
    });
  }
});

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getIssue;
/* harmony export (immutable) */ __webpack_exports__["b"] = getComs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session__ = __webpack_require__(42);




var api = 'https://api.github.com/repos/';
var token = __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].repo.token;

function getIssue() {
    const url = api + __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].repo.user + '/' + __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].repo.repo + '/issues' + '?token=' + token;
    if (!__WEBPACK_IMPORTED_MODULE_2__session__["a" /* get */]('res')) {
        return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(url).then(res => {
            console.dir('from axios');
            __WEBPACK_IMPORTED_MODULE_2__session__["b" /* set */]('res', res);
            return res;
        }).catch(error => {
            console.log(error);
        });
    } else {
        return new Promise(function (resolve, reject) {
            console.dir('from ss');
            resolve(__WEBPACK_IMPORTED_MODULE_2__session__["a" /* get */]('res'));
        });
    }
}

function getComs(id) {
    const url = api + __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].repo.user + '/' + __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].repo.repo + '/issues/' + id + '/comments' + '?token=' + token;
    if (!__WEBPACK_IMPORTED_MODULE_2__session__["a" /* get */]('c' + id)) {
        return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(url).then(res => {
            console.dir('from axios');
            __WEBPACK_IMPORTED_MODULE_2__session__["b" /* set */]('c' + id, res);
            return res;
        }).catch(error => {
            console.log(error);
        });
    } else {
        return new Promise(function (resolve, reject) {
            console.dir('from ss');
            resolve(__WEBPACK_IMPORTED_MODULE_2__session__["a" /* get */]('c' + id));
        });
    }
}

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_github__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_css_github_markdown_css__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_css_github_markdown_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_css_github_markdown_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_marked__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_marked__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highlight_js__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highlight_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highlight_js_styles_googlecode_css__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highlight_js_styles_googlecode_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_highlight_js_styles_googlecode_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_main_header_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_main_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_main_header_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'post',
    components: {
        MainHeader: __WEBPACK_IMPORTED_MODULE_6__components_main_header_vue___default.a
    },
    data() {
        return {
            post: {},
            coms: []
        };
    },
    created: function () {
        const vm = this;
        const id = vm.$route.params.id;
        __WEBPACK_IMPORTED_MODULE_3_marked___default.a.setOptions({
            highlight: code => __WEBPACK_IMPORTED_MODULE_4_highlight_js___default.a.highlightAuto(code).value
        });
        __WEBPACK_IMPORTED_MODULE_0__utils_github__["a" /* getIssue */](id).then(function (res) {
            vm.post = res.data.filter(p => {
                return p.number == id;
            })[0];
            vm.post.body = __WEBPACK_IMPORTED_MODULE_3_marked___default()(vm.post.body);
            vm.post.created_at = __WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* timeFormat */](vm.post.created_at);
        });
        __WEBPACK_IMPORTED_MODULE_0__utils_github__["b" /* getComs */](id).then(function (res) {
            vm.coms = res.data;
        });
    }
});

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pages_home_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_post_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_post_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__pages_post_vue__);






__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]);

const routes = [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_3__pages_home_vue___default.a }, { path: '/post/:id', component: __WEBPACK_IMPORTED_MODULE_4__pages_post_vue___default.a }];

const router = new __WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]({
  routes
});

new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router,
  render: h => h(__WEBPACK_IMPORTED_MODULE_1__app___default.a)
});

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = set;
/* harmony export (immutable) */ __webpack_exports__["a"] = get;
function set(key, val) {
    return sessionStorage.setItem(key, JSON.stringify(val));
}

function get(key) {
    return JSON.parse(sessionStorage.getItem(key));
}

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(47)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(230),
  /* scopeId */
  "data-v-6c4c81f2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

},[41]);
//# sourceMappingURL=app.465cc7830cf0398e1754.js.map