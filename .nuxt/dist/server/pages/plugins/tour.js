exports.ids = [129];
exports.modules = {

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Input.vue?vue&type=template&id=513c36f8&
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

// CONCATENATED MODULE: ./components/Input.vue?vue&type=template&id=513c36f8&

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

    inputKeyUp(event) {
      if (this.keyUp) {
        this.keyUp();
      }

      this.$emit('keyUp', event);
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

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

if (false) {}

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
// highlight.js


var hljs = __webpack_require__(101);

__webpack_require__(183);

hljs.registerLanguage('xml', __webpack_require__(102));
hljs.registerLanguage('sql', __webpack_require__(103));
hljs.registerLanguage('javascript', __webpack_require__(104));
vue__WEBPACK_IMPORTED_MODULE_0___default.a.directive('highlightjs', {
  deep: true,
  bind: function bind(el, binding) {
    // on first bind, highlight all targets
    var targets = el.querySelectorAll('code');
    var target;
    var i;

    for (i = 0; i < targets.length; i += 1) {
      target = targets[i];

      if (typeof binding.value === 'string') {
        // if a value is directly assigned to the directive, use this
        // instead of the element content.
        target.textContent = binding.value;
      }

      hljs.highlightBlock(el);
    }
  },
  componentUpdated: function componentUpdated(el, binding) {
    // after an update, re-fill the content and then highlight
    var targets = el.querySelectorAll('code');
    var target;
    var i;

    for (i = 0; i < targets.length; i += 1) {
      target = targets[i];

      if (typeof binding.value === 'string') {
        target.textContent = binding.value;
        hljs.highlightBlock(el);
      }
    }
  }
});

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(184);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(7).default("0efaf680", content, true)

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hljs{display:block;overflow-x:auto;padding:.5em;color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(647);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("8b276db0", content, true, context)
};

/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(645);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(7).default("1fa694fa", content, true)

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "div#driver-popover-item{display:none;position:absolute;background:#fff;color:#2d2d2d;margin:0;padding:15px;border-radius:5px;min-width:250px;max-width:300px;box-shadow:0 1px 10px rgba(0,0,0,.4);z-index:1000000000}div#driver-popover-item .driver-popover-tip{border:5px solid #fff;content:\"\";position:absolute}div#driver-popover-item .driver-popover-tip.bottom{bottom:-10px;border-color:#fff transparent transparent}div#driver-popover-item .driver-popover-tip.bottom.position-center{left:49%}div#driver-popover-item .driver-popover-tip.bottom.position-right{right:20px}div#driver-popover-item .driver-popover-tip.left{left:-10px;top:10px;border-color:transparent #fff transparent transparent}div#driver-popover-item .driver-popover-tip.left.position-center{top:46%}div#driver-popover-item .driver-popover-tip.left.position-bottom{top:auto;bottom:20px}div#driver-popover-item .driver-popover-tip.right{right:-10px;top:10px;border-color:transparent transparent transparent #fff}div#driver-popover-item .driver-popover-tip.right.position-center{top:46%}div#driver-popover-item .driver-popover-tip.right.position-bottom{top:auto;bottom:20px}div#driver-popover-item .driver-popover-tip.top{top:-10px;border-color:transparent transparent #fff}div#driver-popover-item .driver-popover-tip.top.position-center{left:49%}div#driver-popover-item .driver-popover-tip.top.position-right{right:20px}div#driver-popover-item .driver-popover-tip.mid-center{display:none}div#driver-popover-item .driver-popover-footer{display:block;margin-top:10px}div#driver-popover-item .driver-popover-footer button{display:inline-block;padding:3px 10px;border:1px solid #d4d4d4;text-decoration:none;text-shadow:1px 1px 0 #fff;color:#2d2d2d;font:11px/normal sans-serif;cursor:pointer;outline:0;background-color:#f1f1f1;border-radius:2px;zoom:1;line-height:1.3}div#driver-popover-item .driver-popover-footer button.driver-disabled{color:grey;cursor:default;pointer-events:none}div#driver-popover-item .driver-popover-footer .driver-close-btn{float:left}div#driver-popover-item .driver-popover-footer .driver-btn-group,div#driver-popover-item .driver-popover-footer .driver-close-only-btn{float:right}div#driver-popover-item .driver-popover-title{font:19px/normal sans-serif;margin:0 0 5px;font-weight:700;display:block;position:relative;line-height:1.5;zoom:1}div#driver-popover-item .driver-popover-description{margin-bottom:0;font:14px/normal sans-serif;line-height:1.5;color:#2d2d2d;font-weight:400;zoom:1}.driver-clearfix:after,.driver-clearfix:before{content:\"\";display:table}.driver-clearfix:after{clear:both}.driver-stage-no-animation{transition:none!important;background:transparent!important;outline:5000px solid rgba(0,0,0,.75)}div#driver-page-overlay{background:#000;position:fixed;bottom:0;right:0;display:block;width:100%;height:100%;zoom:1;filter:alpha(opacity=75);opacity:.75;z-index:100002!important}div#driver-highlighted-element-stage,div#driver-page-overlay{top:0;left:0;transition:all .3s}div#driver-highlighted-element-stage{position:absolute;height:50px;width:300px;background:#fff;z-index:100003!important;display:none;border-radius:2px}.driver-highlighted-element{z-index:100004!important}.driver-position-relative{position:relative!important}.driver-fix-stacking{z-index:auto!important;opacity:1!important;transform:none!important;-moz-filter:none!important;-ms-filter:none!important;-o-filter:none!important;filter:none!important;-ms-perspective:none!important;-o-perspective:none!important;perspective:none!important;transform-style:flat!important;-webkit-transform-box:border-box!important;-moz-transform-box:border-box!important;-ms-transform-box:border-box!important;-o-transform-box:border-box!important;transform-box:border-box!important;will-change:unset!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tour_vue_vue_type_style_index_0_id_b2637dc8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(494);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tour_vue_vue_type_style_index_0_id_b2637dc8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tour_vue_vue_type_style_index_0_id_b2637dc8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tour_vue_vue_type_style_index_0_id_b2637dc8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tour_vue_vue_type_style_index_0_id_b2637dc8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "div#driver-popover-item{display:none;position:absolute;background:#fff;color:rgba(0,0,0,.87);margin:0;padding:16px;border-radius:4px;min-width:240px;max-width:300px;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);z-index:1000000000}div#driver-popover-item .driver-popover-tip{border:5px solid #fff;content:\"\";position:absolute}div#driver-popover-item .driver-popover-tip.bottom{bottom:-10px;border-color:#fff transparent transparent}div#driver-popover-item .driver-popover-tip.bottom.position-center{left:49%}div#driver-popover-item .driver-popover-tip.bottom.position-right{right:20px}div#driver-popover-item .driver-popover-tip.left{left:-10px;top:10px;border-color:transparent #fff transparent transparent}div#driver-popover-item .driver-popover-tip.left.position-center{top:46%}div#driver-popover-item .driver-popover-tip.left.position-bottom{top:auto;bottom:20px}div#driver-popover-item .driver-popover-tip.right{right:-10px;top:10px;border-color:transparent transparent transparent #fff}div#driver-popover-item .driver-popover-tip.right.position-center{top:46%}div#driver-popover-item .driver-popover-tip.right.position-bottom{top:auto;bottom:20px}div#driver-popover-item .driver-popover-tip.top{top:-10px;border-color:transparent transparent #fff}div#driver-popover-item .driver-popover-tip.top.position-center{left:49%}div#driver-popover-item .driver-popover-tip.top.position-right{right:20px}div#driver-popover-item .driver-popover-footer{display:block;clear:both;padding-top:16px}div#driver-popover-item .driver-popover-footer button{display:inline-block;padding:6px 8px 5px;border:none;text-decoration:none;color:#fff;font-size:12px;font-size:.75rem;font-weight:500;font-family:\"Roboto\",sans-serif;cursor:pointer;outline:0;background-color:#00838f;border-radius:3px;zoom:1;text-transform:uppercase;transition:all .14s cubic-bezier(.55,0,.1,1);text-shadow:none;margin:0;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}div#driver-popover-item .driver-popover-footer button:hover{box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}div#driver-popover-item .driver-popover-footer button+button{margin-left:4px}div#driver-popover-item .driver-popover-footer button.driver-disabled{color:rgba(0,0,0,.26);background:rgba(0,0,0,.06);cursor:default;pointer-events:none;box-shadow:none!important}div#driver-popover-item .driver-popover-footer .driver-close-btn{float:left;background-color:transparent;box-shadow:none!important;color:rgba(0,0,0,.54);position:absolute;top:0;right:0;margin:0}div#driver-popover-item .driver-popover-footer .driver-close-btn:hover{color:rgba(0,0,0,.87)}div#driver-popover-item .driver-popover-footer .driver-close-btn:before{content:\"\\F156\";font-family:\"Material Design Icons\";font-size:20px;font-size:1.25rem}div#driver-popover-item .driver-popover-footer .driver-btn-group{float:right}div#driver-popover-item .driver-popover-title{margin:0 0 4px;font-weight:700;font-size:18px;font-size:1.125rem;font-family:\"Roboto\",sans-serif;display:block;position:relative;line-height:1.5;zoom:1;padding-right:16px}div#driver-popover-item .driver-popover-description{margin-bottom:0;font-size:14px;font-weight:400;font-family:\"Roboto\",sans-serif;color:rgba(0,0,0,.87);zoom:1}.driver-stage-no-animation{transition:none!important;background:transparent!important;outline:5000px solid rgba(0,0,0,.75)}div#driver-page-overlay{background:#000;position:fixed;top:0;left:0;bottom:0;right:0;display:block;width:100%;height:100%;zoom:1;filter:alpha(opacity=75);opacity:.75;z-index:100002!important;transition:all .4s}div#driver-highlighted-element-stage{position:absolute;top:0;left:0;height:50px;width:300px;background:#fff;z-index:100003!important;display:none;border-radius:2px;transition:all .4s}.driver-highlighted-element{z-index:100004!important}.driver-position-relative{position:relative!important}.driver-fix-stacking{z-index:auto!important;opacity:1!important;transform:none!important;filter:none!important;perspective:none!important;transform-style:flat!important;transform-box:border-box!important;will-change:unset!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/plugins/tour.vue?vue&type=template&id=b2637dc8&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_c('ScCard', [_c('ScCardBody', [_c('button', {
    staticClass: "sc-button sc-button-primary",
    attrs: {
      "id": "sc-tour-restart"
    },
    on: {
      "click": _vm.startTour
    }
  }, [_vm._v("\n\t\t\t\t\t\tRestart tour\n\t\t\t\t\t")])])], 1), _vm._ssrNode(" "), _c('ScCard', {
    staticClass: "uk-margin-top"
  }, [_c('ScCardBody', [_c('h5', {
    staticClass: "uk-margin-medium"
  }, [_vm._v("\n\t\t\t\t\t\tHighlighting a Single Element – Without Popover\n\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "uk-child-width-1-2@s uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', [_c('div', {
    attrs: {
      "id": "sc-tour-singleEl-noPopover"
    }
  }, [_c('button', {
    staticClass: "sc-button sc-button-primary",
    on: {
      "click": _vm.highlightEl
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\tShow\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('pre', {
    directives: [{
      name: "highlightjs",
      rawName: "v-highlightjs"
    }]
  }, [_c('code', [_vm._v("this.highlightDriver = new Driver({\n\topacity: 0.6,\n\tcloseBtnText: ''\n});\n\n@click=\"highlightEl\"\n\nhighlightEl () {\n\tthis.highlightDriver.highlight('#sc-tour-singleEl-noPopover');\n}")])])])]), _vm._v(" "), _c('div', [_c('div', {
    ref: "input-a",
    staticClass: "uk-margin-small sc-tour-singleEl-noPopover"
  }, [_c('ScInput', {
    on: {
      "focus": function ($event) {
        return _vm.focusEl('input-a');
      }
    },
    model: {
      value: _vm.tourInputA,
      callback: function ($$v) {
        _vm.tourInputA = $$v;
      },
      expression: "tourInputA"
    }
  }, [_c('label', [_vm._v("Focus any of the input")])])], 1), _vm._v(" "), _c('div', {
    ref: "input-b",
    staticClass: "uk-margin-small sc-tour-singleEl-noPopover"
  }, [_c('ScInput', {
    on: {
      "focus": function ($event) {
        return _vm.focusEl('input-b');
      }
    },
    model: {
      value: _vm.tourInputB,
      callback: function ($$v) {
        _vm.tourInputB = $$v;
      },
      expression: "tourInputB"
    }
  }, [_c('label', [_vm._v("Focus any of the input")])])], 1), _vm._v(" "), _c('div', {
    ref: "input-c",
    staticClass: "uk-margin-small sc-tour-singleEl-noPopover"
  }, [_c('ScInput', {
    on: {
      "focus": function ($event) {
        return _vm.focusEl('input-c');
      }
    },
    model: {
      value: _vm.tourInputC,
      callback: function ($$v) {
        _vm.tourInputC = $$v;
      },
      expression: "tourInputC"
    }
  }, [_c('label', [_vm._v("Focus any of the input")])])], 1), _vm._v(" "), _c('div', {
    ref: "input-d",
    staticClass: "uk-margin-small sc-tour-singleEl-noPopover"
  }, [_c('ScInput', {
    on: {
      "focus": function ($event) {
        return _vm.focusEl('input-d');
      }
    },
    model: {
      value: _vm.tourInputD,
      callback: function ($$v) {
        _vm.tourInputD = $$v;
      },
      expression: "tourInputD"
    }
  }, [_c('label', [_vm._v("Focus any of the input")])])], 1)])])])], 1), _vm._ssrNode(" "), _c('ScCard', {
    staticClass: "uk-margin-top"
  }, [_c('ScCardBody', [_c('div', {
    staticClass: "uk-child-width-1-2@m",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', [_c('h5', {
    staticClass: "uk-margin-large"
  }, [_vm._v("\n\t\t\t\t\t\t\t\tHighlighting a Single Element – With Popover\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', [_c('button', {
    staticClass: "sc-button sc-button-primary",
    on: {
      "click": _vm.popoverEl
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\tShow\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('pre', {
    directives: [{
      name: "highlightjs",
      rawName: "v-highlightjs"
    }]
  }, [_c('code', [_vm._v("this.popoverDriver = new Driver({\n\topacity: 0.6,\n\tcloseBtnText: ''\n});\n\n @click=\"popoverEl\"\n\n popoverEl (e) {\n\tthis.popoverDriver.highlight({\n\t\telement: e.target.closest(\"div\"),\n\t\tpopover: {\n\t\t\ttitle: 'Title for the Popover',\n\t\t\tdescription: 'Description for highlighted element',\n\t\t\tposition: 'top'\n\t\t}\n\t})\n}")])])])]), _vm._v(" "), _c('div', [_c('h5', {
    staticClass: "uk-margin-large"
  }, [_vm._v("\n\t\t\t\t\t\t\t\tPopover Positioning\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "sc-padding-small uk-display-inline-block"
  }, [_c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.popoverElPos($event, 'left');
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tLeft\n\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "sc-padding-small uk-display-inline-block"
  }, [_c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.popoverElPos($event, 'left-center');
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tLeft Center\n\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "sc-padding-small uk-display-inline-block"
  }, [_c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.popoverElPos($event, 'left-bottom');
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tLeft Bottom\n\t\t\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-small-top"
  }, [_c('div', {
    staticClass: "sc-padding-small uk-display-inline-block"
  }, [_c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.popoverElPos($event, 'top');
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tTop\n\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "sc-padding-small uk-display-inline-block"
  }, [_c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.popoverElPos($event, 'top-center');
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tTop Center\n\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "sc-padding-small uk-display-inline-block"
  }, [_c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.popoverElPos($event, 'top-right');
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tTop Right\n\t\t\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-small-top"
  }, [_c('div', {
    staticClass: "sc-padding-small uk-display-inline-block"
  }, [_c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.popoverElPos($event, 'right');
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tRight\n\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "sc-padding-small uk-display-inline-block"
  }, [_c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.popoverElPos($event, 'right-center');
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tRight Center\n\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "sc-padding-small uk-display-inline-block"
  }, [_c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.popoverElPos($event, 'right-bottom');
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tRight Bottom\n\t\t\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-small-top"
  }, [_c('div', {
    staticClass: "sc-padding-small uk-display-inline-block"
  }, [_c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.popoverElPos($event, 'bottom');
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tBottom\n\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "sc-padding-small uk-display-inline-block"
  }, [_c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.popoverElPos($event, 'bottom-center');
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tBottom Center\n\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "sc-padding-small uk-display-inline-block"
  }, [_c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.popoverElPos($event, 'bottom-right');
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tBottom Right\n\t\t\t\t\t\t\t\t\t")])])])])])])], 1)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/plugins/tour.vue?vue&type=template&id=b2637dc8&

// EXTERNAL MODULE: ./assets/js/utils.js + 5 modules
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./components/Input.vue + 4 modules
var Input = __webpack_require__(122);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/plugins/tour.vue?vue&type=script&lang=js&



__webpack_require__(124);

__webpack_require__(182);

__webpack_require__(644);

/* harmony default export */ var tourvue_type_script_lang_js_ = ({
  name: 'PluginsTour',
  components: {
    ScInput: Input["a" /* default */]
  },
  data: () => ({
    tour: null,
    highlightDriver: null,
    focusDriver: null,
    popoverDriver: null,
    popoverPosDriver: null,
    tourInputA: '',
    tourInputB: '',
    tourInputC: '',
    tourInputD: ''
  }),

  mounted() {
    this.$nextTick(() => {
      const Driver = __webpack_require__(119); // page tour


      this.tour = new Driver({
        opacity: 0.6,
        padding: 0,
        allowClose: false,
        closeBtnText: '',
        nextBtnText: 'Next',
        prevBtnText: 'Previous'
      }); // define the steps

      var steps = utils["e" /* scMq */].mediumMax() ? [{
        element: '#sc-header',
        popover: {
          title: 'Main Header',
          description: 'Here is the main header.',
          position: 'bottom-center',
          offset: 0
        }
      }, {
        element: '#sc-sidebar-main-toggle',
        popover: {
          title: 'Main Sidebar',
          description: 'Here you can toggle main sidebar.',
          position: 'bottom-left',
          offset: -8
        }
      }, {
        element: '#sc-search-main-toggle-mobile',
        popover: {
          title: 'Main Search',
          description: 'Here you can toggle search form.',
          position: 'bottom-right',
          offset: 24
        }
      }, {
        element: '#sc-tour-restart',
        popover: {
          title: 'Restart tour',
          description: 'Here you can restart tour.',
          position: 'bottom-left',
          offset: 0
        }
      }] : [{
        element: '#sc-header',
        popover: {
          title: 'Main Header',
          description: 'Here is the main header.',
          position: 'bottom-center',
          offset: 16
        }
      }, {
        element: '#sc-sidebar-main',
        popover: {
          title: 'Main Sidebar',
          description: 'Here is the main sidebar with the main menu.',
          position: 'right',
          offset: 8
        }
      }, {
        element: '#sc-js-fullscreen-toggle',
        popover: {
          title: 'Fullscreen toggle',
          description: 'Here you can toggle fullscreen mode.',
          position: 'bottom-right',
          offset: 8
        }
      }, {
        element: '#sc-tour-restart',
        popover: {
          title: 'Restart tour',
          description: 'Here you can restart tour.',
          position: 'bottom-left',
          offset: 8
        }
      }];
      this.tour.defineSteps(steps);
      setTimeout(() => {
        // start the tour
        this.tour.start();
      }, 200); // highlight

      this.highlightDriver = new Driver({
        opacity: 0.6,
        closeBtnText: ''
      }); // focus

      this.focusDriver = new Driver({
        opacity: 0.6,
        closeBtnText: ''
      }); // popover

      this.popoverDriver = new Driver({
        opacity: 0.6,
        closeBtnText: ''
      }); // popover position

      this.popoverPosDriver = new Driver({
        opacity: 0.6,
        padding: 0,
        closeBtnText: ''
      });
    });
  },

  methods: {
    startTour() {
      this.tour.start(0);
    },

    highlightEl() {
      this.highlightDriver.highlight('#sc-tour-singleEl-noPopover');
    },

    focusEl(el) {
      this.focusDriver.highlight(this.$refs[el]);
    },

    popoverEl(e) {
      this.popoverDriver.highlight({
        element: e.target.closest("div"),
        popover: {
          title: 'Title for the Popover',
          description: 'Description for highlighted element',
          position: 'top'
        }
      });
    },

    popoverElPos(e, pos) {
      this.popoverPosDriver.highlight({
        element: e.target.closest('div'),
        popover: {
          title: 'Title for the Popover',
          description: 'Description for popover.',
          position: pos
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/plugins/tour.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_tourvue_type_script_lang_js_ = (tourvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/plugins/tour.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(646)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  plugins_tourvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2e0d776b"
  
)

/* harmony default export */ var tour = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=tour.js.map