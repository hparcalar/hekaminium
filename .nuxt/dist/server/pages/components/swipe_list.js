exports.ids = [33];
exports.modules = {

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(583);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("539aefe5", content, true, context)
};

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(581);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(7).default("1a9ff9fe", content, true)

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * vue-swipe-actions v2.0.0-beta.20\n * (c) 2016-present eCollect\n * Released under the MIT License.\n */.swipeout{position:relative;overflow:hidden;display:flex}.swipeout .swipeout-left,.swipeout .swipeout-right{position:absolute;height:100%;display:flex;z-index:1}.swipeout .swipeout-left{left:0;transform:translateX(-100%)}.swipeout .swipeout-right{right:0;transform:translateX(100%)}.swipeout .swipeout-action,.swipeout .swipeout-content{transition:transform .2s;will-change:transform}.swipeout.swipeout--no-transition .swipeout-action,.swipeout.swipeout--no-transition .swipeout-content{transition:none!important}.swipeout .swipeout-content{width:100%}.swipeout-non-selectable{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.swipeout-no-pointer-events{pointer-events:none!important}.swipeout-list{display:flex;flex-direction:column}.swipeout-list-item{flex:1}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_swipe_list_vue_vue_type_style_index_0_id_19b6a9ee_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(464);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_swipe_list_vue_vue_type_style_index_0_id_19b6a9ee_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_swipe_list_vue_vue_type_style_index_0_id_19b6a9ee_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_swipe_list_vue_vue_type_style_index_0_id_19b6a9ee_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_swipe_list_vue_vue_type_style_index_0_id_19b6a9ee_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swipeout-action{padding:0 2rem;display:flex;justify-content:center;align-items:center;cursor:pointer}.sc-list-swiped .swipeout-content{padding:16px}.sc-list-swiped .swipeout-list-item+.swipeout-list-item{border-top:1px solid rgba(0,0,0,.12)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/components/swipe_list.vue?vue&type=template&id=19b6a9ee&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_c('ScCard', [_c('SwipeList', {
    ref: "list",
    staticClass: "sc-list-swiped",
    attrs: {
      "disabled": !_vm.enabled,
      "items": _vm.listA,
      "item-key": "id"
    },
    on: {
      "swipeout:click": _vm.itemClick
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        item
      }) {
        return [_c('div', [_c('span', {
          staticClass: "sc-text-semibold"
        }, [_vm._v("\r\n\t\t\t\t\t\t\t\t" + _vm._s(item.user) + " (" + _vm._s(item.email) + ")\r\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('p', {
          staticClass: "uk-margin-remove"
        }, [_vm._v("\r\n\t\t\t\t\t\t\t\t" + _vm._s(item.text) + "\r\n\t\t\t\t\t\t\t")])])];
      }
    }, {
      key: "left",
      fn: function ({
        item,
        close
      }) {
        return [_c('div', {
          staticClass: "swipeout-action md-bg-red-800 md-color-white",
          attrs: {
            "title": "remove"
          },
          on: {
            "click": function ($event) {
              return _vm.remove('listA', item);
            }
          }
        }, [_c('i', {
          staticClass: "mdi mdi-trash-can"
        })]), _vm._v(" "), _c('div', {
          staticClass: "swipeout-action md-bg-grey-100 uk-margin-right",
          on: {
            "click": close
          }
        }, [_c('i', {
          staticClass: "mdi mdi-close"
        })])];
      }
    }, {
      key: "right",
      fn: function ({}) {
        return [_c('div', {
          staticClass: "swipeout-action md-bg-blue-800 md-color-white"
        }, [_c('i', {
          staticClass: "mdi mdi-heart"
        })]), _vm._v(" "), _c('div', {
          staticClass: "swipeout-action md-bg-green-800 md-color-white"
        }, [_c('i', {
          staticClass: "mdi mdi-archive"
        })])];
      }
    }, {
      key: "empty",
      fn: function () {
        return [_c('div', [_vm._v("\r\n\t\t\t\t\t\t\tlist is empty ( filtered or just empty )\r\n\t\t\t\t\t\t")])];
      },
      proxy: true
    }])
  })], 1), _vm._ssrNode(" "), _c('ScCard', {
    staticClass: "uk-margin-top"
  }, [_c('SwipeList', {
    ref: "list",
    staticClass: "sc-list-swiped",
    attrs: {
      "disabled": !_vm.enabled,
      "items": _vm.listB,
      "item-key": "id"
    },
    on: {
      "swipeout:click": _vm.itemClick
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        item
      }) {
        return [_c('div', [_c('span', {
          staticClass: "sc-text-semibold"
        }, [_vm._v("\r\n\t\t\t\t\t\t\t\t" + _vm._s(item.user) + " (" + _vm._s(item.email) + ")\r\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('p', {
          staticClass: "uk-margin-remove"
        }, [_vm._v("\r\n\t\t\t\t\t\t\t\t" + _vm._s(item.text) + "\r\n\t\t\t\t\t\t\t")])])];
      }
    }, {
      key: "left",
      fn: function ({
        item,
        close
      }) {
        return [_c('div', {
          staticClass: "swipeout-action md-color-red-800 sc-padding-left sc-padding-right",
          attrs: {
            "title": "remove"
          },
          on: {
            "click": function ($event) {
              return _vm.remove('listB', item);
            }
          }
        }, [_c('i', {
          staticClass: "mdi mdi-trash-can"
        })]), _vm._v(" "), _c('div', {
          staticClass: "swipeout-action sc-padding-left sc-padding-right",
          on: {
            "click": close
          }
        }, [_c('i', {
          staticClass: "mdi mdi-close"
        })])];
      }
    }, {
      key: "right",
      fn: function ({}) {
        return [_c('div', {
          staticClass: "swipeout-action md-color-green-800 sc-padding-left sc-padding-right",
          on: {
            "click": _vm.likeClick
          }
        }, [_c('i', {
          staticClass: "mdi mdi-thumb-up"
        })])];
      }
    }, {
      key: "empty",
      fn: function () {
        return [_c('div', [_vm._v("\r\n\t\t\t\t\t\t\tlist is empty ( filtered or just empty )\r\n\t\t\t\t\t\t")])];
      },
      proxy: true
    }])
  })], 1)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/components/swipe_list.vue?vue&type=template&id=19b6a9ee&

// EXTERNAL MODULE: external "vue-swipe-actions"
var external_vue_swipe_actions_ = __webpack_require__(113);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/components/swipe_list.vue?vue&type=script&lang=js&


__webpack_require__(580);

/* harmony default export */ var swipe_listvue_type_script_lang_js_ = ({
  name: 'ComponentsSwipeList',
  components: {
    SwipeList: external_vue_swipe_actions_["SwipeList"]
  },

  data() {
    return {
      enabled: true,
      listA: [{
        id: 0,
        user: 'Liana Kerluke',
        email: 'alize.kuvalis@gmail.com',
        text: 'Ipsam aut commodi quibusdam.'
      }, {
        id: 1,
        user: 'Emelia D\'Amore',
        email: 'hbruen@yahoo.com',
        text: 'Nihil omnis natus mollitia adipisci deleniti exercitationem.'
      }, {
        id: 2,
        user: 'Robbie Kub',
        email: 'neal.hodkiewicz@gmail.com',
        text: 'Et rerum quam eligendi mollitia consequuntur.'
      }, {
        id: 3,
        user: 'Tara Ratke',
        email: 'kreiger.elian@frami.net',
        text: 'Hic voluptatem quod eveniet magnam.'
      }, {
        id: 4,
        user: 'Enoch Pagac',
        email: 'samantha.torphy@blick.com',
        text: 'Ut neque doloribus officia autem.'
      }],
      listB: [{
        id: 0,
        user: 'Liana Kerluke',
        email: 'alize.kuvalis@gmail.com',
        text: 'Ipsam aut commodi quibusdam.'
      }, {
        id: 1,
        user: 'Emelia D\'Amore',
        email: 'hbruen@yahoo.com',
        text: 'Nihil omnis natus mollitia adipisci deleniti exercitationem.'
      }, {
        id: 2,
        user: 'Robbie Kub',
        email: 'neal.hodkiewicz@gmail.com',
        text: 'Et rerum quam eligendi mollitia consequuntur.'
      }, {
        id: 3,
        user: 'Tara Ratke',
        email: 'kreiger.elian@frami.net',
        text: 'Hic voluptatem quod eveniet magnam.'
      }, {
        id: 4,
        user: 'Enoch Pagac',
        email: 'samantha.torphy@blick.com',
        text: 'Ut neque doloribus officia autem.'
      }]
    };
  },

  methods: {
    remove(list, item) {
      this[list] = this[list].filter(i => i !== item);
    },

    itemClick(e) {
      console.log(e, "item click");
    },

    likeClick(e) {
      alert("Like clicked!");
    }

  }
});
// CONCATENATED MODULE: ./pages/components/swipe_list.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_swipe_listvue_type_script_lang_js_ = (swipe_listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/components/swipe_list.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(582)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_swipe_listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0affd24b"
  
)

/* harmony default export */ var swipe_list = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=swipe_list.js.map