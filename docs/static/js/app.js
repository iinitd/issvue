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
__webpack_require__(49)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(234),
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
__webpack_require__(48)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(233),
  /* scopeId */
  "data-v-6e8c0b78",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(46)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(231),
  /* scopeId */
  "data-v-1966b86a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(50)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(235),
  /* scopeId */
  "data-v-aeb149d6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 231:
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
  }, [_vm._v("leave a comment")])]), _vm._v(" "), _c('div', {
    staticClass: "com_area"
  }, _vm._l((_vm.coms), function(c) {
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
  }))])])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 232:
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
  }, [(_vm.mytitle) ? [_c('h1', [_vm._v(_vm._s(_vm.mytitle))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.mydes))])] : [_c('h1', [_vm._v(_vm._s(_vm.blog.welcome))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.blog.detail))])]], 2)])
},staticRenderFns: []}

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('main-header'), _vm._v(" "), _c('div', {
    staticClass: "home"
  }, [_vm._l((_vm.pin_posts), function(p) {
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
    }))]), _vm._v(" "), _c('div', [_c('span', {
      staticClass: "top"
    }, [_vm._v("pin!")]), _vm._v(" "), _c('router-link', {
      attrs: {
        "to": {
          path: '/post/' + p.number
        }
      }
    }, [_vm._v(_vm._s(p.title))])], 1)])
  }), _vm._v(" "), _c('hr'), _vm._v(" "), _vm._l((_vm.posts), function(p) {
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
  })], 2)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('router-view'), _vm._v(" "), _c('main-footer')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 235:
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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_main_header_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_main_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_main_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_main_footer_vue__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_main_footer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_main_footer_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
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
    MainHeader: __WEBPACK_IMPORTED_MODULE_0__components_main_header_vue___default.a,
    MainFooter: __WEBPACK_IMPORTED_MODULE_1__components_main_footer_vue___default.a
  }
});

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {//
//
//
//
//
//

//import config from '../config'
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'main-footer',
  data: function () {
    return {
      owner: 'issvue',
      url: 'https://github.com/'
    };
  },
  created: function () {

    const vm = this;
    const cfg = global.cfg;

    vm.owner = cfg.repo.user;
    vm.url += cfg.repo.user;
  } });
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {//
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
      nav: {},
      blog: {}
    };
  },
  created: function () {

    const vm = this;
    const cfg = global.cfg;

    vm.nav = cfg.nav;
    vm.blog = cfg.blog;
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__io__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main_header_vue__ = __webpack_require__(6);
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
  data: function () {
    return {
      posts: [],
      pin_posts: []

    };
  },
  beforeCreate: function () {
    document.title = global.cfg.blog.title;
  },
  mounted: function () {
    const vm = this;
    const cfg = global.cfg;
    __WEBPACK_IMPORTED_MODULE_0__io__["b" /* getIssue */]().then(this.filter);
  },
  methods: {

    getPin: function (posts, pos) {
      let l = pos.length;
      return posts.filter(p => {
        if (p.number == pos[l - 1]) {
          return l--;
        } else return false;
      });
    },
    getAuthor: function () {
      var author = {};
      cfg.repo.authors.map(function (x) {
        author[x] = true;
      });
      return author;
    },
    format: function (p) {
      var obj = {
        title: p.title,
        number: p.number,
        date: __WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* timeFormat */](p.created_at),
        labels: p.labels
      };
      return obj;
    },
    filter: function (posts) {
      const vm = this;
      const cfg = global.cfg;
      var res = [];
      const author = this.getAuthor();
      const pin = cfg.pin;
      var l = pin.length;
      posts.map(function (p) {
        if (author[p.user.login]) {
          if (p.number == cfg.pin[l - 1]) {

            vm.pin_posts.push({
              title: p.title,
              number: p.number,
              date: __WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* timeFormat */](p.created_at),
              labels: p.labels
            });
            l--;
          } else {
            vm.posts.push({
              title: p.title,
              number: p.number,
              date: __WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* timeFormat */](p.created_at),
              labels: p.labels
            });
          }
        }
      });
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__io__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_css_github_markdown_css__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_css_github_markdown_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_css_github_markdown_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_marked__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_marked__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highlight_js__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highlight_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highlight_js_styles_googlecode_css__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highlight_js_styles_googlecode_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_highlight_js_styles_googlecode_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_main_header_vue__ = __webpack_require__(6);
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
//









/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'post',
    components: {
        MainHeader: __WEBPACK_IMPORTED_MODULE_6__components_main_header_vue___default.a
    },
    beforeCreate: function () {
        document.title = global.cfg.blog.title;
    },
    data: function () {
        return {
            post: {},
            coms: []
        };
    },
    mounted: function () {
        const vm = this;
        const id = vm.$route.params.id;
        __WEBPACK_IMPORTED_MODULE_3_marked___default.a.setOptions({
            highlight: code => __WEBPACK_IMPORTED_MODULE_4_highlight_js___default.a.highlightAuto(code).value
        });
        __WEBPACK_IMPORTED_MODULE_0__io__["b" /* getIssue */](id).then(function (res) {
            vm.post = res.filter(p => {
                return p.number == id;
            })[0];
            document.title = vm.post.title + " - " + global.cfg.blog.title;
            vm.post.body = __WEBPACK_IMPORTED_MODULE_3_marked___default()(vm.post.body);
            vm.post.created_at = __WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* timeFormat */](vm.post.created_at);
        });
        __WEBPACK_IMPORTED_MODULE_0__io__["c" /* getComs */](id).then(function (res) {
            vm.coms = res;
        });
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (immutable) */ __webpack_exports__["a"] = init;
/* harmony export (immutable) */ __webpack_exports__["b"] = getIssue;
/* harmony export (immutable) */ __webpack_exports__["c"] = getComs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


var api = 'https://api.github.com/repos/';

function init() {

    const url = "./static/config.json";

    if (!getSession('conf')) {
        return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(url).then(conf => {
            console.dir('conf from axios');
            setSession('conf', conf.data);
            global.COURSES = 'xxxxx';
            return conf.data;
        }).catch(error => {
            console.log(error);
        });
    } else {
        return new Promise(function (resolve, reject) {
            console.dir('conf from ss');
            resolve(getSession('conf'));
        });
    }
}

function setSession(key, val) {
    return sessionStorage.setItem(key, JSON.stringify(val));
}

function getSession(key) {
    return JSON.parse(sessionStorage.getItem(key));
}

function getIssue() {
    const cfg = global.cfg;
    const url = api + cfg.repo.user + '/' + cfg.repo.repo + '/issues' + '?token=' + cfg.repo.token;
    if (!getSession('res')) {
        return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(url).then(res => {
            console.dir('from axios');
            setSession('res', res.data);
            return res.data;
        }).catch(error => {
            console.log(error);
        });
    } else {
        return new Promise(function (resolve, reject) {
            console.dir('from ss');
            resolve(getSession('res'));
        });
    }
}

function getComs(id) {
    const cfg = global.cfg;
    const url = api + cfg.repo.user + '/' + cfg.repo.repo + '/issues/' + id + '/comments' + '?token=' + cfg.repo.token;
    if (!getSession('c' + id)) {
        return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(url).then(res => {
            console.dir('from axios');
            setSession('c' + id, res.data);
            return res.data;
        }).catch(error => {
            console.log(error);
        });
    } else {
        return new Promise(function (resolve, reject) {
            console.dir('from ss');
            resolve(getSession('c' + id));
        });
    }
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_index_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pages_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_post_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_post_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__pages_post_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__io__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);








__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]);

const routes = [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_3__pages_index_vue___default.a }, { path: '/post/:id', component: __WEBPACK_IMPORTED_MODULE_4__pages_post_vue___default.a }];

const router = new __WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]({
  routes
});

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__io__["a" /* init */])().then(cfg => global.cfg = cfg).then(function () {
  new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
    el: '#app',
    router,
    render: h => h(__WEBPACK_IMPORTED_MODULE_1__app___default.a)
  });
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

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

/***/ 50:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(47)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(232),
  /* scopeId */
  "data-v-6c4c81f2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

},[40]);