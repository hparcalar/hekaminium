exports.ids = [90];
exports.modules = {

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Input.vue?vue&type=template&id=967aacc8&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "sc-input-wrapper",
    class: {
      'sc-input-wrapper-outline': _vm.mode === 'outline',
      'sc-input-wrapper-disabled': _vm.disabled,
      'sc-input-wrapper-danger': _vm.errorState,
      'sc-input-wrapper-success': _vm.successState,
      'sc-input-filled': _vm.value !== '' || _vm.state === 'fixed',
      'sc-input-focus': _vm.inputFocused
    }
  }, [_vm._t("icon"), _vm._ssrNode(" "), _vm._t("default"), _vm._ssrNode(" <input" + _vm._ssrAttr("id", _vm.id) + _vm._ssrAttr("name", _vm.name) + _vm._ssrAttr("placeholder", _vm.placeholder) + _vm._ssrAttr("type", _vm.type) + _vm._ssrAttr("disabled", _vm.disabled) + _vm._ssrAttr("readonly", _vm.readOnly) + _vm._ssrAttr("value", _vm.value) + _vm._ssrClass(null, ['uk-input', 'sc-vue-input', _vm.modeClass, _vm.inputErrorClass, _vm.inputSuccessClass, _vm.extraClasses]) + "> <span class=\"sc-input-bar\"" + _vm._ssrStyle(null, null, {
    display: _vm.mode !== 'outline' ? '' : 'none'
  }) + "></span> "), _vm._t("help-inline")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Input.vue?vue&type=template&id=967aacc8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Input.vue?vue&type=script&lang=js&
/* harmony default export */ var Inputvue_type_script_lang_js_ = ({
  name: 'ScInput',
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Object, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: ''
    },
    state: {
      type: String,
      default: ''
    },
    extraClasses: {
      type: String,
      default: ''
    },
    successState: {
      type: Boolean,
      default: false
    },
    errorState: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
    },
    ukTooltip: {
      type: Object,
      default: null
    },
    focus: {
      type: Function,
      default: null
    },
    blur: {
      type: Function,
      default: null
    },
    change: {
      type: Function,
      default: null
    },
    keyUp: {
      type: Function,
      default: null
    },
    validator: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    inputFocused: false
  }),
  computed: {
    modeClass() {
      return this.$props.mode === 'outline' ? 'sc-input-outline' : '';
    },

    inputErrorClass() {
      return this.$props.errorState ? 'uk-form-danger' : '';
    },

    inputSuccessClass() {
      return this.$props.successState ? 'uk-form-success' : '';
    }

  },

  mounted() {
    var self = this;

    if (self.ukTooltip) {
      UIkit.tooltip(self.$refs.input, self.ukTooltip);
    }
  },

  methods: {
    inputBlur() {
      this.inputFocused = false;

      if (this.blur) {
        this.blur();
      }

      if (this.validator) {
        this.validator.$touch();
      }

      this.$emit('blur');
    },

    inputFocus() {
      this.inputFocused = true;

      if (this.focus) {
        this.focus();
      }

      this.$emit('focus');
    },

    inputChange() {
      if (this.change) {
        this.change();
      }

      this.$emit('change');
    },

    inputKeyUp() {
      if (this.keyUp) {
        this.keyUp();
      }

      this.$emit('keyUp');
    }

  },
  watch: {}
});
// CONCATENATED MODULE: ./components/Input.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Inputvue_type_script_lang_js_ = (Inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Input.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Inputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4fe89bca"
  
)

/* harmony default export */ var Input = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


if (!vue__WEBPACK_IMPORTED_MODULE_0___default.a.moment) {
  vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(__webpack_require__(100));
}

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_01_sm.f998161.png";

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_01_sm@2x.6649141.png";

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_06_sm.b0047ea.png";

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_03_sm@2x.9f5d47e.png";

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_04_sm@2x.61057ef.png";

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_05_sm.5b5ea5a.png";

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_06_sm@2x.b177b92.png";

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_07_sm@2x.5701d61.png";

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_010_sm.77b4bcf.png";

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_010_sm@2x.a55fa15.png";

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_02_sm@2x.e94193b.png";

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_05_sm@2x.255a6c7.png";

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_08_sm.ef65222.png";

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_08_sm@2x.dc8caa9.png";

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_09_sm.8bbca6f.png";

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_09_sm@2x.e046f9a.png";

/***/ }),

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

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(584);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("68847ad9", content, true, context)
};

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./avatar_010_sm@2x.png": 143,
	"./avatar_01_sm@2x.png": 128,
	"./avatar_02_sm@2x.png": 144,
	"./avatar_03_sm@2x.png": 130,
	"./avatar_04_sm@2x.png": 131,
	"./avatar_05_sm@2x.png": 146,
	"./avatar_06_sm@2x.png": 133,
	"./avatar_07_sm@2x.png": 134,
	"./avatar_08_sm@2x.png": 148,
	"./avatar_09_sm@2x.png": 150,
	"./avatar_default_sm@2x.png": 51
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 581;

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./avatar_010_sm.png": 142,
	"./avatar_01_sm.png": 127,
	"./avatar_02_sm.png": 46,
	"./avatar_03_sm.png": 44,
	"./avatar_04_sm.png": 45,
	"./avatar_05_sm.png": 132,
	"./avatar_06_sm.png": 129,
	"./avatar_07_sm.png": 43,
	"./avatar_08_sm.png": 147,
	"./avatar_09_sm.png": 149,
	"./avatar_default_sm.png": 52
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 582;

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_id_9edce796_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(472);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_id_9edce796_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_id_9edce796_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_id_9edce796_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_id_9edce796_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sc-chat-messages,.sc-chat-messages>li,.sc-chat-user-list-inline,.sc-chat-user-list-inline>li{margin:0;padding:0;list-style:none}.sc-chat-body{display:flex;flex-direction:column;padding:16px 24px;min-height:100%;box-sizing:border-box;-webkit-overflow-scrolling:touch}.sc-chat-header{border-bottom:1px solid rgba(0,0,0,.12);background:#fff}.sc-chat-user-input{border-top:1px solid rgba(0,0,0,.08);background:#fff;padding:16px 24px}.sc-chat-user-input .uk-input,.sc-chat-user-input [data-sc-input]{border-width:0;padding:0}.sc-chat-user-input .uk-input:not(:focus),.sc-chat-user-input [data-sc-input]:not(:focus){border-color:rgba(0,0,0,.12)}.sc-chat-user-list-inline{margin:0 0 0 -8px;display:flex;flex-wrap:wrap}.sc-chat-user-list-inline li{font-size:12px;font-size:.75rem;float:left;margin:8px 0 0 8px;background:#eee;padding:2px 8px;border-radius:4px;position:relative}.sc-chat-user-list-inline li a{color:rgba(0,0,0,.87)}.sc-chat-messages{max-width:75%;float:left}.sc-chat-messages>li{background:#009688;display:block;clear:both;padding:8px 16px;font-size:14px;font-size:.875rem;float:left;border-radius:4px;position:relative;box-shadow:0 1px 2px rgba(0,0,0,.12)}.sc-chat-messages>li+li{margin-top:4px}.sc-chat-messages .sc-chat-message-content{margin:0;color:rgba(0,0,0,.87)}.sc-chat-messages time{font-size:12px;color:rgba(0,0,0,.54)}.sc-chat-messages-wrapper{margin:8px 0;display:flex;flex-shrink:0}.sc-chat-messages-wrapper.my{flex-direction:row-reverse}.sc-chat-messages-wrapper.my .sc-chat-message-avatar{margin-left:8px;margin-right:0}.sc-chat-messages-wrapper.my .sc-chat-message-avatar>img,.sc-chat-messages-wrapper.my .sc-chat-message-avatar>span{background:#fff}.sc-chat-messages-wrapper.my .sc-chat-message-meta{text-align:right}.sc-chat-messages-wrapper.my>ul{float:right}.sc-chat-messages-wrapper.my>ul>li{float:right;background:#fff;text-align:right}.sc-chat-message-avatar{width:32px;height:32px;margin-right:8px;color:rgba(0,0,0,.54)}.sc-chat-message-username{text-align:left;clear:both;font-weight:500;font-size:11px;font-size:.6875rem;text-transform:uppercase;padding-bottom:4px}.sc-chat-message-username a{color:rgba(0,0,0,.54)}.sc-light .sc-chat-messages-wrapper:not(.my) .sc-chat-message-content,.sc-light .sc-chat-messages-wrapper:not(.my) time{color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/chat.vue?vue&type=template&id=9edce796&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\" class=\"uk-height-1-1 uk-flex uk-flex-center sc-page-over-header\">", "</div>", [_vm._ssrNode("<div class=\"uk-width-5-6@l\">", "</div>", [_c('ScCard', {
    staticClass: "sc-chat-card uk-height-1-1"
  }, [_c('div', {
    staticClass: "uk-grid-divider uk-grid-collapse uk-height-1-1 uk-grid",
    attrs: {
      "data-uk-grid": "",
      "data-uk-height-match": "target: > div > div > .uk-card-header"
    }
  }, [_vm._l(_vm.chatRooms(_vm.activeRoom), function (room) {
    return _c('div', {
      key: room.id,
      staticClass: "uk-flex-1 uk-height-1-1 uk-width-expand"
    }, [_c('div', {
      staticClass: "uk-flex uk-flex-column uk-height-1-1 md-bg-grey-200"
    }, [_c('ScCardHeader', {
      staticClass: "sc-chat-header sc-padding sc-padding-medium-ends"
    }, [_c('div', {
      staticClass: "uk-flex uk-flex-middle"
    }, [_c('div', {
      staticClass: "uk-flex-1"
    }, [_c('ScCardTitle', [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(room.title) + "\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('ul', {
      staticClass: "sc-chat-user-list-inline"
    }, _vm._l(room.users, function (user) {
      return _c('li', {
        key: user
      }, [_c('a', {
        attrs: {
          "href": "javascript:void(0)"
        }
      }, [_c('span', {
        staticClass: "sc-user-status",
        class: [_vm.userStatus(user)]
      }), _vm._v(" "), _c('strong', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: user === 0,
          expression: "user === 0"
        }]
      }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.userName(user)) + "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: user != 0,
          expression: "user != 0"
        }]
      }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.userName(user)) + "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])])]);
    }), 0)], 1), _vm._v(" "), _c('div', {
      staticClass: "sc-actions uk-margin-remove"
    }, [_c('div', {
      staticClass: "sc-dropdown"
    }, [_c('a', {
      staticClass: "sc-actions-icon mdi mdi-dots-vertical",
      attrs: {
        "href": "javascript:void(0)"
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "uk-width-small uk-dropdown",
      attrs: {
        "data-uk-dropdown": "mode:click"
      }
    }, [_c('ul', {
      staticClass: "uk-nav uk-dropdown-nav"
    }, [_c('li', [_c('a', {
      attrs: {
        "href": "javascript:void(0)"
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tInfo\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('li', [_c('a', {
      attrs: {
        "href": "javascript:void(0)"
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSettings\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('li', [_c('a', {
      attrs: {
        "href": "javascript:void(0)"
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tClear chat\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('li', {
      staticClass: "uk-nav-divider"
    }), _vm._v(" "), _c('li', [_c('a', {
      staticClass: "md-color-red-500",
      attrs: {
        "href": "javascript:void(0)"
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])])])])])])])]), _vm._v(" "), _c('ScCardBody', {
      staticClass: "sc-padding-remove",
      attrs: {
        "id": "sc-chat-wrapper"
      }
    }, [_c('TransitionGroup', {
      staticClass: "sc-chat-body sc-light",
      attrs: {
        "id": "sc-chat",
        "name": "fadeUp",
        "tag": "div"
      }
    }, _vm._l(room.groups, function (group) {
      return _c('div', {
        key: group.id,
        staticClass: "sc-chat-messages-wrapper",
        class: {
          'my': group.own
        }
      }, [[_c('a', {
        staticClass: "sc-chat-message-avatar",
        attrs: {
          "href": "javascript:void(0)"
        }
      }, [_c('img', {
        directives: [{
          name: "rjs",
          rawName: "v-rjs",
          value: _vm.userAvatar(group.user, true),
          expression: "userAvatar(group.user, true)"
        }],
        staticClass: "sc-avatar",
        attrs: {
          "src": _vm.userAvatar(group.user),
          "alt": ""
        }
      })]), _vm._v(" "), _c('TransitionGroup', {
        staticClass: "sc-chat-messages",
        attrs: {
          "name": "fadeUp",
          "tag": "ul"
        }
      }, _vm._l(group.messages, function (message) {
        return _c('li', {
          key: message.id
        }, [_c('p', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: message.content,
            expression: "message.content"
          }],
          staticClass: "sc-chat-message-content"
        }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(message.content) + "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('time', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: message.time !== '',
            expression: "message.time !== ''"
          }]
        }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(message.time) + "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]);
      }), 0)], _vm._v(" "), _c('div', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !_vm.users[group.user].avatar,
          expression: "!users[group.user].avatar"
        }]
      }, [_c('div', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !group.own,
          expression: "!group.own"
        }],
        staticClass: "sc-chat-message-username"
      }, [_c('a', {
        attrs: {
          "href": "javascript:void(0)"
        }
      }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.userName(group.user)) + "\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('TransitionGroup', {
        staticClass: "sc-chat-messages",
        attrs: {
          "name": "fadeUp",
          "tag": "ul"
        }
      }, _vm._l(group.messages, function (message) {
        return _c('li', {
          key: message.id
        }, [_c('p', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: message.content,
            expression: "message.content"
          }],
          staticClass: "sc-chat-message-content"
        }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(message.content) + "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('time', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: message.time !== '',
            expression: "message.time !== ''"
          }]
        }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(message.time) + "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]);
      }), 0)], 1)], 2);
    }), 0)], 1), _vm._v(" "), _c('div', {
      staticClass: "sc-chat-user-input uk-flex uk-flex-middle"
    }, [_c('div', {
      staticClass: "uk-flex-1"
    }, [_c('ScInput', {
      attrs: {
        "placeholder": "Write something...",
        "mode": "outline"
      },
      nativeOn: {
        "keyup": function ($event) {
          if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
          return _vm.sendMessage.apply(null, arguments);
        }
      },
      model: {
        value: _vm.lastMessage.message,
        callback: function ($$v) {
          _vm.$set(_vm.lastMessage, "message", typeof $$v === 'string' ? $$v.trim() : $$v);
        },
        expression: "lastMessage.message"
      }
    })], 1), _vm._v(" "), _c('a', {
      staticClass: "mdi mdi-send sc-icon-square uk-margin-left",
      attrs: {
        "href": "javascript:void(0)"
      },
      on: {
        "click": function ($event) {
          $event.preventDefault();
          return _vm.sendMessage.apply(null, arguments);
        }
      }
    })])], 1)]);
  }), _vm._v(" "), _c('div', {
    staticClass: "uk-width-1-3@m uk-width-1-3@l uk-width-1-4@xl uk-height-1-1 sc-column-transition uk-visible@l",
    class: {
      'sc-column-collapsed': _vm.columnCollapsed,
      'sc-js-el-transform': _vm.columnTransform
    }
  }, [_c('div', {
    staticClass: "uk-flex uk-flex-column uk-height-1-1"
  }, [_c('ScCardHeader', {
    staticClass: "uk-flex uk-flex-middle sc-border-bottom"
  }, [_c('div', {
    staticClass: "uk-flex-1 sc-js-el-hide"
  }, [_c('ScCardTitle', {
    staticClass: "sc-actions-match"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\tUsers / Rooms\n\t\t\t\t\t\t\t\t\t\t")])], 1), _vm._v(" "), _c('client-only', [_c('ColumnToggle', {
    attrs: {
      "show-icon": "mdi-account-multiple",
      "hide-title": "Hide users",
      "show-title": "Show users",
      "collapsed": _vm.columnCollapsed
    },
    on: {
      "columnCollapsing": _vm.onColumnCollapsing,
      "columnShown": _vm.onColumnToggle,
      "columnHidden": _vm.onColumnToggle
    }
  })], 1), _vm._v(" "), _c('ScCardActions', {
    staticClass: "sc-js-el-hide"
  }, [_c('div', {
    staticClass: "sc-dropdown"
  }, [_c('a', {
    staticClass: "sc-actions-icon mdi mdi-dots-vertical",
    attrs: {
      "href": "javascript:void(0)"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "uk-width-small uk-dropdown",
    attrs: {
      "data-uk-dropdown": "mode:click"
    }
  }, [_c('ul', {
    staticClass: "uk-nav uk-dropdown-nav"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSettings\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew chat group\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('li', {
    staticClass: "uk-nav-divider"
  }), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAdd User\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSearch User\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])])])])])])], 1), _vm._v(" "), _c('ScCardBody', {
    staticClass: "sc-js-el-hide uk-flex uk-flex-1 uk-flex-column uk-height-1-1"
  }, [_c('div', {
    staticClass: "uk-margin-top"
  }, [_c('h5', {
    staticClass: "uk-margin-remove"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\tUsers (" + _vm._s(_vm.users.length) + ")\n\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('ul', {
    staticClass: "uk-list uk-list-divider uk-margin-small-top sc-list-clickable sc-list-align"
  }, _vm._l(_vm.users, function (user) {
    return _c('li', {
      key: user.id,
      staticClass: "sc-list-group uk-visible-toggle",
      attrs: {
        "tabindex": "-1"
      }
    }, [_c('div', {
      staticClass: "sc-list-addon"
    }, [_c('div', {
      staticClass: "sc-avatar-wrapper"
    }, [_c('span', {
      staticClass: "sc-user-status",
      class: [user.status]
    }), _vm._v(" "), _c('img', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: user.avatar,
        expression: "user.avatar"
      }, {
        name: "rjs",
        rawName: "v-rjs",
        value: _vm.userAvatar(user.avatar, true),
        expression: "userAvatar(user.avatar, true)"
      }],
      staticClass: "sc-avatar",
      attrs: {
        "src": _vm.userAvatar(user.avatar),
        "alt": ""
      }
    }), _vm._v(" "), _c('img', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !user.avatar,
        expression: "!user.avatar"
      }],
      staticClass: "sc-avatar",
      attrs: {
        "alt": ""
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "sc-list-body"
    }, [_c('div', {
      staticClass: "uk-flex uk-flex-middle"
    }, [_c('div', {
      staticClass: "uk-width-expand"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(user.firstName) + " " + _vm._s(user.lastName) + "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), _c('div', {
      staticClass: "sc-list-secondary-text"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(user.moodMessage) + "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
      staticClass: "uk-width-auto"
    }, [_c('ul', {
      staticClass: "uk-hidden-hover uk-flex uk-flex-middle sc-padding-remove-left uk-margin-small-left"
    }, [_c('li', [_c('a', {
      staticClass: "sc-actions-icon mdi mdi-pencil-outline icon sc-icon-24 sc-icon-square",
      attrs: {
        "href": "#"
      }
    })]), _vm._v(" "), _c('li', [_c('a', {
      staticClass: "sc-actions-icon mdi mdi-dots-vertical icon sc-icon-24 sc-icon-square",
      attrs: {
        "href": "#"
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "uk-dropdown-small uk-dropdown",
      attrs: {
        "data-uk-dropdown": ""
      }
    }, [_c('ul', {
      staticClass: "uk-nav uk-dropdown-nav sc-padding-remove-left"
    }, [_c('li', [_c('a', {
      attrs: {
        "href": "javascript:void(0)"
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tItem\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('li', [_c('a', {
      attrs: {
        "href": "javascript:void(0)"
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tItem\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])])])])])])])])])]);
  }), 0)]), _vm._v(" "), _c('div', [_c('h5', {
    staticClass: "uk-margin-remove"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\tRooms (" + _vm._s(_vm.rooms.length) + ")\n\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('ul', {
    staticClass: "uk-subnav uk-subnav-pill uk-flex uk-flex-column uk-margin-small-top"
  }, _vm._l(_vm.rooms, function (room) {
    return _c('li', {
      key: room.id,
      staticClass: "uk-margin-small-top",
      class: {
        'uk-active': _vm.activeRoom === room.name
      },
      on: {
        "click": function ($event) {
          return _vm.changeRoom(room.name);
        }
      }
    }, [_c('a', {
      staticClass: "uk-flex uk-flex-middle",
      attrs: {
        "href": "javascript:void(0)"
      }
    }, [_c('span', {
      staticClass: "uk-flex-1"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(room.title) + "\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
      staticClass: "uk-margin-small-left uk-text-small"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(" + _vm._s(room.users.length) + " users)\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])])]);
  }), 0)])])], 1)])], 2)])], 1)]), _vm._ssrNode(" "), _c('client-only', [_c('ScOffcanvas', [_c('h5', {
    staticClass: "uk-margin-remove"
  }, [_vm._v("\n\t\t\t\t\tUsers (" + _vm._s(_vm.users.length) + ")\n\t\t\t\t")]), _vm._v(" "), _c('ul', {
    staticClass: "uk-list uk-list-divider uk-margin-small-top sc-list-clickable sc-list-align"
  }, _vm._l(_vm.users, function (user) {
    return _c('li', {
      key: user.id,
      staticClass: "sc-list-group"
    }, [_c('div', {
      staticClass: "sc-list-addon"
    }, [_c('div', {
      staticClass: "sc-avatar-wrapper"
    }, [_c('span', {
      staticClass: "sc-user-status",
      class: [user.status]
    }), _vm._v(" "), _c('img', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: user.avatar,
        expression: "user.avatar"
      }, {
        name: "rjs",
        rawName: "v-rjs",
        value: _vm.userAvatar(user.avatar, true),
        expression: "userAvatar(user.avatar, true)"
      }],
      staticClass: "sc-avatar",
      attrs: {
        "src": _vm.userAvatar(user.avatar),
        "alt": ""
      }
    }), _vm._v(" "), _c('img', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !user.avatar,
        expression: "!user.avatar"
      }],
      staticClass: "sc-avatar",
      attrs: {
        "alt": ""
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "sc-list-body"
    }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(user.firstName) + " " + _vm._s(user.lastName) + "\n\t\t\t\t\t\t\t"), _c('div', {
      staticClass: "sc-list-secondary-text"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(user.moodMessage) + "\n\t\t\t\t\t\t\t")])])]);
  }), 0)])], 1)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/pages/chat.vue?vue&type=template&id=9edce796&

// EXTERNAL MODULE: ./assets/js/utils.js + 5 modules
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./components/Input.vue + 4 modules
var Input = __webpack_require__(122);

// EXTERNAL MODULE: ./plugins/moment.js
var moment = __webpack_require__(126);

// EXTERNAL MODULE: ./components/ColumnToggle.vue + 4 modules
var ColumnToggle = __webpack_require__(287);

// EXTERNAL MODULE: ./components/Offcanvas.vue + 4 modules
var Offcanvas = __webpack_require__(289);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/chat.vue?vue&type=script&lang=js&

const {
  uniqueID
} = utils["d" /* scHelpers */];
const {
  first,
  last,
  sentence
} = utils["c" /* scFakeData */];


const chance = __webpack_require__(47).Chance();




/* harmony default export */ var chatvue_type_script_lang_js_ = ({
  name: 'PagesChat',
  components: {
    ScInput: Input["a" /* default */],
    ColumnToggle: ColumnToggle["a" /* default */],
    ScOffcanvas: Offcanvas["a" /* default */]
  },
  data: () => ({
    myUser: {
      id: 0,
      firstName: 'Mark',
      lastName: 'Fisher',
      avatar: 0,
      status: 'online',
      moodMessage: 'Happy :)'
    },
    activeRoom: 'room_0',
    lastMessage: {
      id: null,
      date: '',
      message: ''
    },
    rooms: [{
      id: uniqueID(),
      name: 'room_0',
      title: 'General',
      users: [0, 1, 2, 5, 8],
      groups: [{
        id: uniqueID(),
        own: true,
        user: 0,
        messages: [{
          id: uniqueID(10),
          content: 'Ei tota maluisset ius. Sea ne partiendo assentior adolescens. Iisque accusam ex vel, mea ferri lorem menandri eu',
          time: '10:21'
        }]
      }, {
        id: uniqueID(),
        own: false,
        user: 1,
        messages: [{
          id: uniqueID(10),
          content: 'Aliquid deserunt excepturi fugiat fugit incidunt neque officiis quae quidem sapiente',
          time: '10:23'
        }]
      }, {
        id: uniqueID(),
        own: false,
        user: 5,
        messages: [{
          id: uniqueID(10),
          content: 'Splendide forensibus ut ius. Solum nominavi adipiscing eam et, ius falli phaedrum ut. Has mandamus salutandi scriptorem ne. Usu et illum quaerendum mediocritatem',
          time: '10:24'
        }]
      }, {
        id: uniqueID(),
        own: true,
        user: 0,
        messages: [{
          id: uniqueID(10),
          content: 'Primis gubergren ex mel, te aperiam suscipit efficiantur mel',
          time: '10:34'
        }]
      }]
    }, {
      id: uniqueID(),
      name: 'room_1',
      title: 'Designers',
      users: [0, 2, 5, 7],
      groups: [{
        id: uniqueID(),
        own: false,
        user: 2,
        messages: [{
          id: uniqueID(10),
          content: 'Ei tota maluisset ius. Sea ne partiendo assentior adolescens. Iisque accusam ex vel, mea ferri lorem menandri eu',
          time: '19:41'
        }]
      }, {
        id: uniqueID(),
        own: true,
        user: 0,
        messages: [{
          id: uniqueID(10),
          content: 'Sea ne partiendo assentior adolescens. Iisque accusam ex vel ;)',
          time: '19:58'
        }]
      }, {
        id: uniqueID(),
        own: false,
        user: 7,
        messages: [{
          id: uniqueID(10),
          content: 'Aliquid deserunt excepturi fugiat fugit incidunt neque officiis quae quidem sapiente',
          time: '19:55'
        }]
      }]
    }],
    statuses: ['online', 'offline', 'busy', 'away'],
    columnCollapsed: false,
    columnTransform: false
  }),
  computed: {
    users() {
      let users = [];

      for (let i = 1; i <= 10; i++) {
        let _user = {
          id: uniqueID(),
          firstName: first(),
          lastName: last(),
          status: this.statuses[Math.floor(Math.random() * this.statuses.length)],
          moodMessage: sentence({
            words: 4
          })
        };

        if (i !== 2 && i !== 5) {
          _user.avatar = i;
        }

        users.push(_user);
      }

      return users;
    }

  },

  mounted() {
    this.$store.commit('setCardFixed', true);
    this.$store.commit('setHeaderExpanded', true);
    let group = {
      id: uniqueID(),
      own: false,
      user: 8,
      messages: [{
        id: uniqueID(10),
        content: 'His persius assentior intellegebat ea. Modo quaeque ad vim. Ut has nostro recusabo. Nihil mandamus adversarium cum eu, an his assum virtute, vix an vide altera adolescens. Delectus volutpat assentior ne quo, cum an aliquam iracundia. Mei ei nobis molestiae, an doctus debitis interesset sea. Est ut enim dolor, vidisse propriae vis no :)',
        time: '10:43'
      }]
    };
    setTimeout(() => {
      this.rooms[0].groups.push(group);
    }, 2000);
  },

  beforeDestroy() {
    this.$store.commit('setCardFixed', false);
    this.$store.commit('setHeaderExpanded', false);
  },

  methods: {
    chatRooms(room) {
      return this.rooms.filter(obj => {
        return obj.name === room;
      });
    },

    userAvatar(number, retina) {
      let avatar = number == 0 ? 'default' : '0' + number;

      if (retina) {
        return __webpack_require__(581)("./avatar_" + avatar + "_sm@2x.png");
      } else {
        return __webpack_require__(582)("./avatar_" + avatar + "_sm.png");
      }
    },

    userStatus(user) {
      if (user == 0) {
        return this.myUser.status;
      } else {
        return this.users[user].status;
      }
    },

    userName(user) {
      if (user == 0) {
        return this.myUser.firstName;
      } else {
        return this.users[user].firstName;
      }
    },

    changeRoom(room) {
      this.activeRoom = room;
      setTimeout(() => {
        document.getElementById('sc-chat-wrapper').scrollTop = document.getElementById('sc-chat').scrollHeight;
      }, 80);
    },

    sendMessage() {
      if (this.lastMessage.message !== '') {
        let self = this;
        let now = self.$moment().format('HH:mm');
        let room = this.rooms.filter(obj => {
          return obj.name === this.activeRoom;
        });

        if (this.lastMessage.date !== now) {
          let id = uniqueID();

          if (room.length) {
            room[0].groups.push({
              id: id,
              own: true,
              user: 0,
              messages: [{
                id: uniqueID(10),
                content: this.lastMessage.message,
                time: now
              }]
            });
            this.lastMessage.id = id;
          }
        } else {
          let group = room[0].groups.filter(obj => {
            return obj.id === this.lastMessage.id;
          });

          if (group.length) {
            group[0].messages.push({
              id: uniqueID(10),
              content: this.lastMessage.message,
              time: ''
            });
          }
        }

        setTimeout(() => {
          document.getElementById('sc-chat-wrapper').scrollTop = document.getElementById('sc-chat').scrollHeight;
        }, 10);
        this.lastMessage.date = now;
        this.lastMessage.message = '';
      }
    },

    onColumnCollapsing(value) {
      this.columnCollapsed = value;
      this.columnTransform = true;
    },

    onColumnToggle() {
      this.columnTransform = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/pages/chat.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_chatvue_type_script_lang_js_ = (chatvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/pages/chat.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(583)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_chatvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "63704872"
  
)

/* harmony default export */ var chat = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=chat.js.map