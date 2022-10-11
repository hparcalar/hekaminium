exports.ids = [120];
exports.modules = {

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/ColumnToggle.vue?vue&type=template&id=fd4557b6&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "uk-flex uk-flex-center",
    class: {
      'uk-flex-1': _vm.columnCollapsed
    }
  }, [_vm._ssrNode("<a href=\"javascript:void(0)\" data-uk-tooltip" + _vm._ssrAttr("title", _vm.hideTitle) + _vm._ssrClass("sc-column-hide sc-actions-icon mdi", [_vm.hideIcon]) + _vm._ssrStyle(null, null, {
    display: !_vm.columnCollapsed ? '' : 'none'
  }) + "></a> <a href=\"javascript:void(0)\" data-uk-tooltip" + _vm._ssrAttr("title", _vm.showTitle) + _vm._ssrClass("sc-column-show sc-actions-icon mdi", [_vm.showIcon]) + _vm._ssrStyle(null, null, {
    display: _vm.columnCollapsed ? '' : 'none'
  }) + "></a>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ColumnToggle.vue?vue&type=template&id=fd4557b6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ColumnToggle.vue?vue&type=script&lang=js&
/* harmony default export */ var ColumnTogglevue_type_script_lang_js_ = ({
  props: {
    hideTitle: {
      type: String,
      default: 'Hide List'
    },
    hideIcon: {
      type: String,
      default: 'mdi-arrow-collapse-horizontal'
    },
    showTitle: {
      type: String,
      default: 'Show List'
    },
    showIcon: {
      type: String,
      default: 'mdi-arrow-expand-horizontal'
    },
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    columnCollapsed: {
      get() {
        return this.collapsed;
      },

      set(value) {
        this.$emit('columnCollapsing', value);
        setTimeout(() => {
          this.$emit(value ? 'columnHidden' : 'columnShown');
        }, 300);
        return value;
      }

    }
  },
  methods: {
    columnToggle() {
      this.columnCollapsed = !this.columnCollapsed;
    }

  }
});
// CONCATENATED MODULE: ./components/ColumnToggle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ColumnTogglevue_type_script_lang_js_ = (ColumnTogglevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ColumnToggle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ColumnTogglevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4034947a"
  
)

/* harmony default export */ var ColumnToggle = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Offcanvas.vue?vue&type=template&id=3714a0db&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.vxOffcanvasPresent,
      expression: "vxOffcanvasPresent"
    }],
    attrs: {
      "id": "sc-offcanvas",
      "data-uk-offcanvas": "flip: true; container: '#nuxt-wrapper'"
    }
  }, [_vm._ssrNode("<div" + _vm._ssrClass("uk-offcanvas-bar", _vm.extraClass) + ">", "</div>", [_vm._t("default")], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Offcanvas.vue?vue&type=template&id=3714a0db&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./assets/js/utils.js + 5 modules
var utils = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Offcanvas.vue?vue&type=script&lang=js&


/* harmony default export */ var Offcanvasvue_type_script_lang_js_ = ({
  name: 'ScOffcanvas',
  props: {
    extraClass: {
      type: String,
      default: ''
    }
  },
  computed: { ...Object(external_vuex_["mapState"])(['vxOffcanvasPresent', 'vxOffcanvasExpanded'])
  },
  watch: {
    'vxOffcanvasExpanded'(state) {
      if (utils["e" /* scMq */].mediumMax()) {
        if (state) {
          UIkit.offcanvas('#sc-offcanvas').show();

          if (this.$store.getters.sidebarMainState) {
            this.$store.commit('sidebarMainToggle', false);
          }
        } else {
          UIkit.offcanvas('#sc-offcanvas').hide();
        }
      }
    },

    $route() {
      if (this.$store.getters.offcanvasState) {
        this.$store.commit('offcanvasToggle', false);
      }
    }

  },

  mounted() {
    const self = this;

    if (utils["e" /* scMq */].mediumMax()) {
      self.$nextTick(() => {
        self.$store.commit('setOffcanvasPresent', true);
      });
    }
  },

  beforeDestroy() {
    this.$store.commit('offcanvasToggle', false);
    this.$store.commit('setOffcanvasPresent', false);
  },

  methods: {
    hide() {
      this.$store.commit('offcanvasToggle', false);
    }

  }
});
// CONCATENATED MODULE: ./components/Offcanvas.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Offcanvasvue_type_script_lang_js_ = (Offcanvasvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Offcanvas.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Offcanvasvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3ec085f2"
  
)

/* harmony default export */ var Offcanvas = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(652);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("477b0fd5", content, true, context)
};

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_code_editor_vue_vue_type_style_index_0_id_0a7799b7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(492);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_code_editor_vue_vue_type_style_index_0_id_0a7799b7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_code_editor_vue_vue_type_style_index_0_id_0a7799b7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_code_editor_vue_vue_type_style_index_0_id_0a7799b7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_code_editor_vue_vue_type_style_index_0_id_0a7799b7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".CodeMirror{z-index:10}.CodeMirror pre{font-family:\"Source Code Pro\",Consolas,monospace;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-size:14px;font-size:.875rem}.CodeMirror-fullscreen{position:fixed;left:0;top:0;right:0;bottom:0;height:100%;z-index:1500}.CodeMirror-fullscreen #sc-code-editor-fs-disable,.CodeMirror-fullscreen+#sc-code-editor-fs-disable{display:block}#sc-code-editor-fs-disable{position:absolute;top:12px;right:20px;display:none;background:hsla(0,0%,100%,.6);color:rgba(0,0,0,.87);padding:8px;border-radius:50%;cursor:pointer;z-index:1550}.CodeMirror-fullscreen-active .uk-card-body{overflow:visible}.CodeMirror+#sc-code-editor-fs-disable{position:fixed}.CodeMirror,.vue-codemirror{height:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/plugins/code_editor.vue?vue&type=template&id=0a7799b7&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\" class=\"uk-height-1-1 uk-flex uk-flex-center sc-page-over-header\">", "</div>", [_vm._ssrNode("<div class=\"uk-width-5-6@l uk-height-1-1\">", "</div>", [_c('ScCard', {
    staticClass: "uk-height-1-1"
  }, [_c('div', {
    staticClass: "uk-grid-collapse uk-grid-divider uk-height-1-1 uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', {
    staticClass: "uk-width-expand@s uk-height-1-1 uk-flex uk-flex-column",
    attrs: {
      "id": "cm-wrapper"
    }
  }, [_c('ScCardHeader', {
    staticClass: "sc-padding sc-padding-medium-ends"
  }, [_c('div', {
    staticClass: "uk-flex uk-flex-middle"
  }, [_c('div', {
    staticClass: "uk-flex-1"
  }, [_c('ScCardTitle', [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\tCode Editor\n\t\t\t\t\t\t\t\t\t\t")])], 1), _vm._v(" "), _c('ScCardActions', [_c('a', {
    staticClass: "sc-actions-icon mdi mdi-content-save",
    attrs: {
      "href": "javascript:void(0)"
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "sc-actions-icon mdi mdi-fullscreen",
    attrs: {
      "id": "sc-code-editor-fs-enable",
      "href": "javascript:void(0)"
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.cmFullScreenEnable();
      }
    }
  })])], 1)]), _vm._v(" "), _c('ScCardBody', {
    staticClass: "sc-padding-remove"
  }, [_c('client-only', [_c('Codemirror', {
    ref: "myCm",
    attrs: {
      "value": _vm.code,
      "options": _vm.cmOptions
    },
    on: {
      "ready": _vm.onCmReady,
      "focus": _vm.onCmFocus,
      "input": _vm.onCmCodeChange
    }
  }, [_c('button', {
    staticClass: "uk-close",
    attrs: {
      "id": "sc-code-editor-fs-disable",
      "type": "button",
      "data-uk-close": ""
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.cmFullScreenDisable();
      }
    }
  })])], 1)], 1), _vm._v(" "), _c('ScProgressOverlay', {
    attrs: {
      "active": _vm.cardProgress
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-width-1-4@m sc-column-transition uk-visible@l",
    class: {
      'sc-column-collapsed': _vm.columnCollapsed,
      'sc-js-el-transform': _vm.columnTransform
    }
  }, [_c('ScCardHeader', {
    staticClass: "sc-padding sc-padding-medium-ends"
  }, [_c('div', {
    staticClass: "uk-flex uk-flex-middle"
  }, [_c('div', {
    staticClass: "uk-flex-1 sc-js-el-hide"
  }, [_c('ScCardTitle', [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\tFiles\n\t\t\t\t\t\t\t\t\t\t")])], 1), _vm._v(" "), _c('client-only', [_c('ColumnToggle', {
    attrs: {
      "show-icon": "mdi-file-outline",
      "hide-title": "Hide files",
      "show-title": "Show files",
      "collapsed": _vm.columnCollapsed
    },
    on: {
      "columnCollapsing": _vm.onColumnCollapsing,
      "columnShown": _vm.onColumnShown,
      "columnHidden": _vm.onColumnHidden
    }
  })], 1)], 1)]), _vm._v(" "), _c('ScCardBody', {
    staticClass: "sc-js-el-hide"
  }, [_c('ul', {
    staticClass: "uk-list uk-list-divider sc-list-hoverable sc-code-editor-files"
  }, [_c('li', {
    staticClass: "sc-list-group",
    class: {
      'uk-active': _vm.activeFile === 'index.html'
    }
  }, [_c('div', {
    staticClass: "sc-list-addon"
  }, [_c('i', {
    staticClass: "mdi mdi-file-outline"
  })]), _vm._v(" "), _c('a', {
    staticClass: "sc-list-body sc-flex-items-left",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.openFile('index.html', 'html');
      }
    }
  }, [_c('span', {
    staticClass: "sc-text-semibold sc-width-expand"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tindex.html\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "sc-list-secondary-text uk-text-small"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tModified: 27/11/2019\n\t\t\t\t\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c('li', {
    staticClass: "sc-list-group",
    class: {
      'uk-active': _vm.activeFile === 'database.php'
    }
  }, [_c('div', {
    staticClass: "sc-list-addon"
  }, [_c('i', {
    staticClass: "mdi mdi-file-outline"
  })]), _vm._v(" "), _c('a', {
    staticClass: "sc-list-body sc-flex-items-left",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.openFile('database.php', 'php');
      }
    }
  }, [_c('span', {
    staticClass: "sc-text-semibold sc-width-expand"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tdatabase.php\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "sc-list-secondary-text uk-text-small"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tModified: 24/11/2019\n\t\t\t\t\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c('li', {
    staticClass: "sc-list-group",
    class: {
      'uk-active': _vm.activeFile === 'helpers.js'
    }
  }, [_c('div', {
    staticClass: "sc-list-addon"
  }, [_c('i', {
    staticClass: "mdi mdi-file-outline"
  })]), _vm._v(" "), _c('a', {
    staticClass: "sc-list-body sc-flex-items-left",
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('span', {
    staticClass: "sc-text-semibold sc-width-expand",
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.openFile('helpers.js', 'js');
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\thelpers.js\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "sc-list-secondary-text uk-text-small"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tModified: 22/11/2019\n\t\t\t\t\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c('li', {
    staticClass: "sc-list-group",
    class: {
      'uk-active': _vm.activeFile === 'data.json'
    }
  }, [_c('div', {
    staticClass: "sc-list-addon"
  }, [_c('i', {
    staticClass: "mdi mdi-file-outline"
  })]), _vm._v(" "), _c('a', {
    staticClass: "sc-list-body sc-flex-items-left",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.openFile('data.json', 'json');
      }
    }
  }, [_c('span', {
    staticClass: "sc-text-semibold sc-width-expand"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tdata.json\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "sc-list-secondary-text uk-text-small"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tModified: 22/11/2019\n\t\t\t\t\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c('li', {
    staticClass: "sc-list-group",
    class: {
      'uk-active': _vm.activeFile === 'app.vue'
    }
  }, [_c('div', {
    staticClass: "sc-list-addon"
  }, [_c('i', {
    staticClass: "mdi mdi-file-alert-outline md-color-red-500"
  })]), _vm._v(" "), _c('a', {
    staticClass: "sc-list-body sc-flex-items-left",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.openFile('app.vue', '');
      }
    }
  }, [_c('span', {
    staticClass: "sc-text-semibold sc-width-expand"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tapp.vue\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "sc-list-secondary-text uk-text-small"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tModified: 14/11/2019\n\t\t\t\t\t\t\t\t\t\t\t")])])])])])], 1)])])], 1)]), _vm._ssrNode(" "), _c('client-only', [_c('ScOffcanvas', {
    ref: "offcanvas"
  }, [_c('ul', {
    staticClass: "uk-list uk-list-divider sc-list-hoverable sc-code-editor-files"
  }, [_c('li', {
    staticClass: "sc-list-group",
    class: {
      'uk-active': _vm.activeFile === 'index.html'
    }
  }, [_c('div', {
    staticClass: "sc-list-addon"
  }, [_c('i', {
    staticClass: "mdi mdi-file-outline"
  })]), _vm._v(" "), _c('a', {
    staticClass: "sc-list-body sc-flex-items-left",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function ($event) {
        return _vm.openFile('index.html', 'html');
      }
    }
  }, [_c('span', {
    staticClass: "sc-text-semibold sc-width-expand"
  }, [_vm._v("\n\t\t\t\t\t\t\t\tindex.html\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "sc-list-secondary-text uk-text-small"
  }, [_vm._v("\n\t\t\t\t\t\t\t\tModified: 27/11/2019\n\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c('li', {
    staticClass: "sc-list-group",
    class: {
      'uk-active': _vm.activeFile === 'database.php'
    }
  }, [_c('div', {
    staticClass: "sc-list-addon"
  }, [_c('i', {
    staticClass: "mdi mdi-file-outline"
  })]), _vm._v(" "), _c('a', {
    staticClass: "sc-list-body sc-flex-items-left",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.openFile('database.php', 'php');
      }
    }
  }, [_c('span', {
    staticClass: "sc-text-semibold sc-width-expand"
  }, [_vm._v("\n\t\t\t\t\t\t\t\tdatabase.php\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "sc-list-secondary-text uk-text-small"
  }, [_vm._v("\n\t\t\t\t\t\t\t\tModified: 24/11/2019\n\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c('li', {
    staticClass: "sc-list-group",
    class: {
      'uk-active': _vm.activeFile === 'helpers.js'
    }
  }, [_c('div', {
    staticClass: "sc-list-addon"
  }, [_c('i', {
    staticClass: "mdi mdi-file-outline"
  })]), _vm._v(" "), _c('a', {
    staticClass: "sc-list-body sc-flex-items-left",
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('span', {
    staticClass: "sc-text-semibold sc-width-expand",
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.openFile('helpers.js', 'js');
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\thelpers.js\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "sc-list-secondary-text uk-text-small"
  }, [_vm._v("\n\t\t\t\t\t\t\t\tModified: 22/11/2019\n\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c('li', {
    staticClass: "sc-list-group",
    class: {
      'uk-active': _vm.activeFile === 'data.json'
    }
  }, [_c('div', {
    staticClass: "sc-list-addon"
  }, [_c('i', {
    staticClass: "mdi mdi-file-outline"
  })]), _vm._v(" "), _c('a', {
    staticClass: "sc-list-body sc-flex-items-left",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.openFile('data.json', 'json');
      }
    }
  }, [_c('span', {
    staticClass: "sc-text-semibold sc-width-expand"
  }, [_vm._v("\n\t\t\t\t\t\t\t\tdata.json\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "sc-list-secondary-text uk-text-small"
  }, [_vm._v("\n\t\t\t\t\t\t\t\tModified: 22/11/2019\n\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c('li', {
    staticClass: "sc-list-group",
    class: {
      'uk-active': _vm.activeFile === 'app.vue'
    }
  }, [_c('div', {
    staticClass: "sc-list-addon"
  }, [_c('i', {
    staticClass: "mdi mdi-file-alert-outline md-color-red-500"
  })]), _vm._v(" "), _c('a', {
    staticClass: "sc-list-body sc-flex-items-left",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.openFile('app.vue', '');
      }
    }
  }, [_c('span', {
    staticClass: "sc-text-semibold sc-width-expand"
  }, [_vm._v("\n\t\t\t\t\t\t\t\tapp.vue\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "sc-list-secondary-text uk-text-small"
  }, [_vm._v("\n\t\t\t\t\t\t\t\tModified: 14/11/2019\n\t\t\t\t\t\t\t")])])])])])], 1)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/plugins/code_editor.vue?vue&type=template&id=0a7799b7&

// EXTERNAL MODULE: ./assets/js/utils.js + 5 modules
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./components/progress/index.js + 30 modules
var progress = __webpack_require__(15);

// EXTERNAL MODULE: ./components/ColumnToggle.vue + 4 modules
var ColumnToggle = __webpack_require__(287);

// EXTERNAL MODULE: ./components/Offcanvas.vue + 4 modules
var Offcanvas = __webpack_require__(289);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/plugins/code_editor.vue?vue&type=script&lang=js&





if (false) {}

/* harmony default export */ var code_editorvue_type_script_lang_js_ = ({
  name: 'PluginsCodeEditor',
  components: {
    Codemirror:  false ? undefined : null,
    ColumnToggle: ColumnToggle["a" /* default */],
    ScOffcanvas: Offcanvas["a" /* default */],
    ScProgressOverlay: progress["e" /* ScProgressOverlay */]
  },
  data: () => ({
    cm: null,
    code: '',
    activeFile: '',
    cmOptions: {
      theme: 'material',
      lineNumbers: true,
      mode: 'text/html',
      matchTags: {
        bothTags: true
      },
      scrollbarStyle: "simple",
      extraKeys: {
        "F11"(cm) {
          cm.setOption("fullScreen", !cm.getOption("fullScreen"));
        },

        "Esc"(cm) {
          if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
        }

      }
    },
    files: {
      'index.html': "<!doctype html>\n" + "<html lang=\"en\">\n" + "<head>\n" + "<meta charset=\"UTF-8\">\n" + " <meta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n" + " <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n" + " <title>Document</title>\n" + "</head>\n" + "<body>\n" + "    <div class=\"uk-overflow-auto\">\n" + "        <table class=\"uk-table uk-table-hover\">\n" + "            <caption>Table caption</caption>\n" + "            <thead>\n" + "                <tr>\n" + "                    <th>Table Heading</th>\n" + "                    <th>Table Heading</th>\n" + "                    <th>Table Heading</th>\n" + "                    <th>Table Heading</th>\n" + "                </tr>\n" + "            </thead>\n" + "            <tfoot>\n" + "                <tr>\n" + "                    <td>Table Footer</td>\n" + "                    <td>Table Footer</td>\n" + "                    <td>Table Footer</td>\n" + "                    <td>Table Footer</td>\n" + "                </tr>\n" + "            </tfoot>\n" + "            <tbody>\n" + "                <tr>\n" + "                    <td>Table Data <a href=\"#\">a element</a> <code>.uk-table</code></td>\n" + "                    <td>Table Data <a class=\"uk-button uk-button-primary\" href=\"#\">Button</a></td>\n" + "                    <td>Table Data <img src=\"images/photo.jpg\" width=\"40\" alt=\"\"></td>\n" + "                    <td>Table Data</td>\n" + "                </tr>\n" + "                <tr>\n" + "                    <td>Table Data</td>\n" + "                    <td>Table Data</td>\n" + "                    <td>Table Data</td>\n" + "                    <td>Table Data</td>\n" + "                </tr>\n" + "                <tr class=\"uk-active\">\n" + "                    <td>Active Row</td>\n" + "                    <td>Active Row</td>\n" + "                    <td>Active Row</td>\n" + "                    <td>Active Row</td>\n" + "                </tr>\n" + "                <tr>\n" + "                    <td>Table Data</td>\n" + "                    <td>Table Data</td>\n" + "                    <td>Table Data</td>\n" + "                    <td>Table Data</td>\n" + "                </tr>\n" + "                <tr>\n" + "                    <th>Table Sub Heading</th>\n" + "                    <th>Table Sub Heading</th>\n" + "                    <th>Table Sub Heading</th>\n" + "                    <th>Table Sub Heading</th>\n" + "                </tr>\n" + "                <tr>\n" + "                    <td>Table Data</td>\n" + "                    <td>Table Data</td>\n" + "                    <td>Table Data</td>\n" + "                    <td>Table Data</td>\n" + "                </tr>\n" + "                <tr>\n" + "                    <td>Table Data</td>\n" + "                    <td>Table Data</td>\n" + "                    <td>Table Data</td>\n" + "                    <td>Table Data</td>\n" + "                </tr>\n" + "            </tbody>\n" + "        </table>\n" + "    </div>\n" + "</body>\n" + "</html>",
      'database.php': "<?php\n" + "return [\n" + "\n" + "    /*\n" + "    |--------------------------------------------------------------------------\n" + "    | Default Database Connection Name\n" + "    |--------------------------------------------------------------------------\n" + "    |\n" + "    | Here you may specify which of the database connections below you wish\n" + "    | to use as your default connection for all database work. Of course\n" + "    | you may use many connections at once using the Database library.\n" + "    |\n" + "    */\n" + "\n" + "    'default' => env('DB_CONNECTION', 'mysql'),\n" + "\n" + "    /*\n" + "    |--------------------------------------------------------------------------\n" + "    | Database Connections\n" + "    |--------------------------------------------------------------------------\n" + "    |\n" + "    | Here are each of the database connections setup for your application.\n" + "    | Of course, examples of configuring each database platform that is\n" + "    | supported by Laravel is shown below to make development simple.\n" + "    |\n" + "    |\n" + "    | All database work in Laravel is done through the PHP PDO facilities\n" + "    | so make sure you have the driver for your particular database of\n" + "    | choice installed on your machine before you begin development.\n" + "    |\n" + "    */\n" + "\n" + "    'connections' => [\n" + "\n" + "        'sqlite' => [\n" + "            'driver' => 'sqlite',\n" + "            'database' => env('DB_DATABASE', database_path('database.sqlite')),\n" + "            'prefix' => '',\n" + "            'foreign_key_constraints' => env('DB_FOREIGN_KEYS', true),\n" + "        ],\n" + "\n" + "        'mysql' => [\n" + "            'driver' => 'mysql',\n" + "            'host' => env('DB_HOST', '127.0.0.1'),\n" + "            'port' => env('DB_PORT', '3306'),\n" + "            'database' => env('DB_DATABASE', 'forge'),\n" + "            'username' => env('DB_USERNAME', 'forge'),\n" + "            'password' => env('DB_PASSWORD', ''),\n" + "            'unix_socket' => env('DB_SOCKET', ''),\n" + "            'charset' => 'utf8mb4',\n" + "            'collation' => 'utf8mb4_unicode_ci',\n" + "            'prefix' => '',\n" + "            'prefix_indexes' => true,\n" + "            'strict' => true,\n" + "            'engine' => null,\n" + "        ],\n" + "\n" + "        'pgsql' => [\n" + "            'driver' => 'pgsql',\n" + "            'host' => env('DB_HOST', '127.0.0.1'),\n" + "            'port' => env('DB_PORT', '5432'),\n" + "            'database' => env('DB_DATABASE', 'forge'),\n" + "            'username' => env('DB_USERNAME', 'forge'),\n" + "            'password' => env('DB_PASSWORD', ''),\n" + "            'charset' => 'utf8',\n" + "            'prefix' => '',\n" + "            'prefix_indexes' => true,\n" + "            'schema' => 'public',\n" + "            'sslmode' => 'prefer',\n" + "        ],\n" + "\n" + "        'sqlsrv' => [\n" + "            'driver' => 'sqlsrv',\n" + "            'host' => env('DB_HOST', 'localhost'),\n" + "            'port' => env('DB_PORT', '1433'),\n" + "            'database' => env('DB_DATABASE', 'forge'),\n" + "            'username' => env('DB_USERNAME', 'forge'),\n" + "            'password' => env('DB_PASSWORD', ''),\n" + "            'charset' => 'utf8',\n" + "            'prefix' => '',\n" + "            'prefix_indexes' => true,\n" + "        ],\n" + "\n" + "    ],\n" + "\n" + "    /*\n" + "    |--------------------------------------------------------------------------\n" + "    | Migration Repository Table\n" + "    |--------------------------------------------------------------------------\n" + "    |\n" + "    | This table keeps track of all the migrations that have already run for\n" + "    | your application. Using this information, we can determine which of\n" + "    | the migrations on disk haven't actually been run in the database.\n" + "    |\n" + "    */\n" + "\n" + "    'migrations' => 'migrations',\n" + "\n" + "    /*\n" + "    |--------------------------------------------------------------------------\n" + "    | Redis Databases\n" + "    |--------------------------------------------------------------------------\n" + "    |\n" + "    | Redis is an open source, fast, and advanced key-value store that also\n" + "    | provides a richer set of commands than a typical key-value systems\n" + "    | such as APC or Memcached. Laravel makes it easy to dig right in.\n" + "    |\n" + "    */\n" + "\n" + "    'redis' => [\n" + "\n" + "        'client' => 'predis',\n" + "\n" + "        'default' => [\n" + "            'host' => env('REDIS_HOST', '127.0.0.1'),\n" + "            'password' => env('REDIS_PASSWORD', null),\n" + "            'port' => env('REDIS_PORT', 6379),\n" + "            'database' => env('REDIS_DB', 0),\n" + "        ],\n" + "\n" + "        'cache' => [\n" + "            'host' => env('REDIS_HOST', '127.0.0.1'),\n" + "            'password' => env('REDIS_PASSWORD', null),\n" + "            'port' => env('REDIS_PORT', 6379),\n" + "            'database' => env('REDIS_CACHE_DB', 1),\n" + "        ],\n" + "\n" + "    ],\n" + "\n" + "];\n" + "?>",
      "helpers.js": "/* @flow */\n" + "\n" + "import { emptyObject } from 'shared/util'\n" + "import { parseFilters } from './parser/filter-parser'\n" + "\n" + "export function baseWarn (msg: string) {\n" + "  console.error(`[Vue compiler]: ${msg}`)\n" + "}\n" + "\n" + "export function pluckModuleFunction<F> (\n" + "  modules: ?Array<Object>,\n" + "  key: string\n" + "): Array<F> {\n" + "  return modules\n" + "    ? modules.map(m => m[key]).filter(_ => _)\n" + "    : []\n" + "}\n" + "\n" + "export function addProp (el: ASTElement, name: string, value: string) {\n" + "  (el.props || (el.props = [])).push({ name, value })\n" + "  el.plain = false\n" + "}\n" + "\n" + "export function addAttr (el: ASTElement, name: string, value: any) {\n" + "  (el.attrs || (el.attrs = [])).push({ name, value })\n" + "  el.plain = false\n" + "}\n" + "\n" + "// add a raw attr (use this in preTransforms)\n" + "export function addRawAttr (el: ASTElement, name: string, value: any) {\n" + "  el.attrsMap[name] = value\n" + "  el.attrsList.push({ name, value })\n" + "}\n" + "\n" + "export function addDirective (\n" + "  el: ASTElement,\n" + "  name: string,\n" + "  rawName: string,\n" + "  value: string,\n" + "  arg: ?string,\n" + "  modifiers: ?ASTModifiers\n" + ") {\n" + "  (el.directives || (el.directives = [])).push({ name, rawName, value, arg, modifiers })\n" + "  el.plain = false\n" + "}\n" + "\n" + "export function addHandler (\n" + "  el: ASTElement,\n" + "  name: string,\n" + "  value: string,\n" + "  modifiers: ?ASTModifiers,\n" + "  important?: boolean,\n" + "  warn?\n" + ") {\n" + "  modifiers = modifiers || emptyObject\n" + "  // warn prevent and passive modifier\n" + "  /* istanbul ignore if */\n" + "  if (\n" + "    process.env.NODE_ENV !== 'production' && warn &&\n" + "    modifiers.prevent && modifiers.passive\n" + "  ) {\n" + "    warn(\n" + "      'passive and prevent can\\'t be used together. ' +\n" + "      'Passive handler can\\'t prevent default event.'\n" + "    )\n" + "  }\n" + "\n" + "  // normalize click.right and click.middle since they don't actually fire\n" + "  // this is technically browser-specific, but at least for now browsers are\n" + "  // the only target envs that have right/middle clicks.\n" + "  if (name === 'click') {\n" + "    if (modifiers.right) {\n" + "      name = 'contextmenu'\n" + "      delete modifiers.right\n" + "    } else if (modifiers.middle) {\n" + "      name = 'mouseup'\n" + "    }\n" + "  }\n" + "\n" + "  // check capture modifier\n" + "  if (modifiers.capture) {\n" + "    delete modifiers.capture\n" + "    name = '!' + name // mark the event as captured\n" + "  }\n" + "  if (modifiers.once) {\n" + "    delete modifiers.once\n" + "    name = '~' + name // mark the event as once\n" + "  }\n" + "  /* istanbul ignore if */\n" + "  if (modifiers.passive) {\n" + "    delete modifiers.passive\n" + "    name = '&' + name // mark the event as passive\n" + "  }\n" + "\n" + "  let events\n" + "  if (modifiers.native) {\n" + "    delete modifiers.native\n" + "    events = el.nativeEvents || (el.nativeEvents = {})\n" + "  } else {\n" + "    events = el.events || (el.events = {})\n" + "  }\n" + "\n" + "  const newHandler: any = {\n" + "    value: value.trim()\n" + "  }\n" + "  if (modifiers !== emptyObject) {\n" + "    newHandler.modifiers = modifiers\n" + "  }\n" + "\n" + "  const handlers = events[name]\n" + "  /* istanbul ignore if */\n" + "  if (Array.isArray(handlers)) {\n" + "    important ? handlers.unshift(newHandler) : handlers.push(newHandler)\n" + "  } else if (handlers) {\n" + "    events[name] = important ? [newHandler, handlers] : [handlers, newHandler]\n" + "  } else {\n" + "    events[name] = newHandler\n" + "  }\n" + "\n" + "  el.plain = false\n" + "}\n" + "\n" + "export function getBindingAttr (\n" + "  el: ASTElement,\n" + "  name: string,\n" + "  getStatic?: boolean\n" + "): ?string {\n" + "  const dynamicValue =\n" + "    getAndRemoveAttr(el, ':' + name) ||\n" + "    getAndRemoveAttr(el, 'v-bind:' + name)\n" + "  if (dynamicValue != null) {\n" + "    return parseFilters(dynamicValue)\n" + "  } else if (getStatic !== false) {\n" + "    const staticValue = getAndRemoveAttr(el, name)\n" + "    if (staticValue != null) {\n" + "      return JSON.stringify(staticValue)\n" + "    }\n" + "  }\n" + "}\n" + "\n" + "// note: this only removes the attr from the Array (attrsList) so that it\n" + "// doesn't get processed by processAttrs.\n" + "// By default it does NOT remove it from the map (attrsMap) because the map is\n" + "// needed during codegen.\n" + "export function getAndRemoveAttr (\n" + "  el: ASTElement,\n" + "  name: string,\n" + "  removeFromMap?: boolean\n" + "): ?string {\n" + "  let val\n" + "  if ((val = el.attrsMap[name]) != null) {\n" + "    const list = el.attrsList\n" + "    for (let i = 0, l = list.length; i < l; i++) {\n" + "      if (list[i].name === name) {\n" + "        list.splice(i, 1)\n" + "        break\n" + "      }\n" + "    }\n" + "  }\n" + "  if (removeFromMap) {\n" + "    delete el.attrsMap[name]\n" + "  }\n" + "  return val\n" + "}",
      "data.json": "[{\n" + "\t\t\"id\": 1,\n" + "\t\t\"first_name\": \"Adella\",\n" + "\t\t\"last_name\": \"Figura\",\n" + "\t\t\"email\": \"afigura0@opera.com\",\n" + "\t\t\"gender\": \"Female\",\n" + "\t\t\"ip_address\": \"205.130.124.144\"\n" + "\t}, {\n" + "\t\t\"id\": 2,\n" + "\t\t\"first_name\": \"Addie\",\n" + "\t\t\"last_name\": \"Vasse\",\n" + "\t\t\"email\": \"avasse1@answers.com\",\n" + "\t\t\"gender\": \"Female\",\n" + "\t\t\"ip_address\": \"76.226.233.169\"\n" + "\t}, {\n" + "\t\t\"id\": 3,\n" + "\t\t\"first_name\": \"Josee\",\n" + "\t\t\"last_name\": \"Birkett\",\n" + "\t\t\"email\": \"jbirkett2@mapy.cz\",\n" + "\t\t\"gender\": \"Female\",\n" + "\t\t\"ip_address\": \"235.147.89.150\"\n" + "\t}, {\n" + "\t\t\"id\": 4,\n" + "\t\t\"first_name\": \"Orville\",\n" + "\t\t\"last_name\": \"Hayler\",\n" + "\t\t\"email\": \"ohayler3@bloomberg.com\",\n" + "\t\t\"gender\": \"Male\",\n" + "\t\t\"ip_address\": \"32.233.217.40\"\n" + "\t}, {\n" + "\t\t\"id\": 5,\n" + "\t\t\"first_name\": \"Mandie\",\n" + "\t\t\"last_name\": \"McDavid\",\n" + "\t\t\"email\": \"mmcdavid4@homestead.com\",\n" + "\t\t\"gender\": \"Female\",\n" + "\t\t\"ip_address\": \"252.94.209.149\"\n" + "\t}, {\n" + "\t\t\"id\": 6,\n" + "\t\t\"first_name\": \"Jarrod\",\n" + "\t\t\"last_name\": \"Heis\",\n" + "\t\t\"email\": \"jheis5@joomla.org\",\n" + "\t\t\"gender\": \"Male\",\n" + "\t\t\"ip_address\": \"184.37.13.87\"\n" + "\t}, {\n" + "\t\t\"id\": 7,\n" + "\t\t\"first_name\": \"Abeu\",\n" + "\t\t\"last_name\": \"Staziker\",\n" + "\t\t\"email\": \"astaziker6@pen.io\",\n" + "\t\t\"gender\": \"Male\",\n" + "\t\t\"ip_address\": \"183.26.126.11\"\n" + "\t}, {\n" + "\t\t\"id\": 8,\n" + "\t\t\"first_name\": \"Jenifer\",\n" + "\t\t\"last_name\": \"Bengle\",\n" + "\t\t\"email\": \"jbengle7@marketwatch.com\",\n" + "\t\t\"gender\": \"Female\",\n" + "\t\t\"ip_address\": \"65.75.112.56\"\n" + "\t}, {\n" + "\t\t\"id\": 9,\n" + "\t\t\"first_name\": \"Gertrudis\",\n" + "\t\t\"last_name\": \"Ashcroft\",\n" + "\t\t\"email\": \"gashcroft8@amazon.de\",\n" + "\t\t\"gender\": \"Female\",\n" + "\t\t\"ip_address\": \"111.129.62.109\"\n" + "\t}, {\n" + "\t\t\"id\": 10,\n" + "\t\t\"first_name\": \"Emmie\",\n" + "\t\t\"last_name\": \"Paulazzi\",\n" + "\t\t\"email\": \"epaulazzi9@lulu.com\",\n" + "\t\t\"gender\": \"Female\",\n" + "\t\t\"ip_address\": \"219.228.186.196\"\n" + "\t}]"
    },
    columnCollapsed: false,
    columnTransform: false,
    cmFullscreen: false,
    cardProgress: false
  }),
  watch: {
    'cmFullscreen'(newVal) {
      this.cm.setOption("fullScreen", newVal);
      this.$store.commit('cmFullscreenToggle', newVal);
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.$store.commit('setCardFixed', true);
      this.$store.commit('setHeaderExpanded', true); // console.log('This is current codemirror object', this.cm);

      this.code = this.files['index.html'];
      this.activeFile = 'index.html';
    });
  },

  beforeDestroy() {
    this.$store.commit('setCardFixed', false);
    this.$store.commit('setHeaderExpanded', false);
    this.$store.commit('cmFullscreenToggle', false);
  },

  methods: {
    onCmReady(cm) {
      this.cm = this.$refs.myCm.codemirror; // console.log(this.cm);

      console.log('The editor is ready!', cm);
    },

    onCmFocus(cm) {
      console.log('The editor is focus!', cm);
    },

    onCmCodeChange(newCode) {// console.log('This is new code', newCode);
      //this.code = newCode
    },

    openFile(file, mode) {
      this.cardProgress = true; // hide offcanvas

      if (utils["e" /* scMq */].mediumMax()) {
        this.$refs.offcanvas.hide();
      }

      setTimeout(() => {
        if (mode === 'html') {
          this.cm.setOption("mode", "text/html");
          this.cm.setOption("matchTags", {
            bothTags: true
          });
        }

        if (mode === 'js') {
          this.cm.setOption("mode", "text/javascript");
          this.cm.setOption("matchBrackets", true);
        }

        if (mode === 'php') {
          this.cm.setOption("mode", "application/x-httpd-php");
          this.cm.setOption("matchTags", false);
          this.cm.setOption("matchBrackets", true);
        }

        if (mode === 'json') {
          this.cm.setOption("mode", "application/ld+json");
        }

        if (file !== '' && file in this.files) {
          this.code = this.files[file];
        } else {
          this.code = 'File "' + file + '" does not exist!';
        }

        this.activeFile = file;
        this.cardProgress = false;
      }, 1000);
    },

    cmFullScreenEnable() {
      this.cmFullscreen = true;
    },

    cmFullScreenDisable() {
      this.cmFullscreen = false;
    },

    onColumnCollapsing(value) {
      this.columnCollapsed = value;
      this.columnTransform = true;
    },

    onColumnShown(value) {
      this.columnTransform = false;
      this.cm.refresh();
    },

    onColumnHidden(value) {
      this.columnTransform = false;
      this.cm.refresh();
    }

  }
});
// CONCATENATED MODULE: ./pages/plugins/code_editor.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_code_editorvue_type_script_lang_js_ = (code_editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/plugins/code_editor.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(651)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  plugins_code_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "07fa803c"
  
)

/* harmony default export */ var code_editor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=code_editor.js.map