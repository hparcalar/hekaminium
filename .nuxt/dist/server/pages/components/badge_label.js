exports.ids = [8];
exports.modules = {

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

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/components/badge_label.vue?vue&type=template&id=2ac9654b&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_vm._ssrNode("<div data-uk-grid class=\"uk-child-width-1-2@l uk-grid\">", "</div>", [_vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardTitle', [_vm._v("\r\n\t\t\t\t\t\t\tBadges\r\n\t\t\t\t\t\t")]), _vm._v(" "), _c('ScCardBody', [_c('div', [_c('span', {
    staticClass: "uk-badge"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t28\r\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "uk-badge md-bg-red-600"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t152\r\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "uk-badge md-bg-green-600"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t336\r\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "uk-badge md-bg-orange-600"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t335\r\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "uk-badge md-bg-teal-600"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t390\r\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "uk-badge md-bg-blue-600"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t49\r\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "uk-badge md-bg-gray-600"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t390\r\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "uk-badge md-bg-purple-600"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t316\r\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "uk-badge md-bg-indigo-600"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t398\r\n\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('pre', {
    directives: [{
      name: "highlightjs",
      rawName: "v-highlightjs"
    }]
  }, [_c('code', [_vm._v("<span class=\"uk-badge\">28</span>\r\n<span class=\"uk-badge md-bg-red-600\">152</span>\r\n<span class=\"uk-badge md-bg-green-600\">336</span>\r\n<span class=\"uk-badge md-bg-orange-600\">335</span>\r\n<span class=\"uk-badge md-bg-teal-600\">390</span>\r\n<span class=\"uk-badge md-bg-blue-600\">49</span>\r\n<span class=\"uk-badge md-bg-gray-600\">390</span>\r\n<span class=\"uk-badge md-bg-purple-600\">316</span>\r\n<span class=\"uk-badge md-bg-indigo-600\">398</span>")])])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardTitle', [_vm._v("\r\n\t\t\t\t\t\t\tLabels\r\n\t\t\t\t\t\t")]), _vm._v(" "), _c('ScCardBody', [_c('div', [_c('span', {
    staticClass: "uk-label"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\tDefault\r\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "uk-label uk-label-success"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\tSuccess\r\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "uk-label uk-label-warning"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\tWarning\r\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "uk-label uk-label-danger"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\tDanger\r\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "uk-label uk-label-outline"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\tOutline\r\n\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('pre', {
    directives: [{
      name: "highlightjs",
      rawName: "v-highlightjs"
    }]
  }, [_c('code', [_vm._v("<span class=\"uk-label\">Default</span>\r\n<span class=\"uk-label uk-label-success\">Success</span>\r\n<span class=\"uk-label uk-label-warning\">Warning</span>\r\n<span class=\"uk-label uk-label-danger\">Danger</span>\r\n<span class=\"uk-label uk-label-outline\">Outline</span>")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', [_c('span', {
    staticClass: "uk-label md-bg-orange-600"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t.md-bg-orange-600\r\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "uk-label md-bg-indigo-600"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t.md-bg-indigo-600\r\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "uk-label md-bg-green-600"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t.md-bg-green-600\r\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "uk-label md-bg-cyan-600"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t.md-bg-cyan-600\r\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "uk-label md-bg-pink-600"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t.md-bg-pink-600\r\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "uk-label md-bg-grey-600"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t.md-bg-grey-600\r\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "uk-label md-bg-light-blue-100 sc-color-primary"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t.md-bg-light-blue-100\r\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "uk-label md-bg-green-100 sc-color-primary"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t.md-bg-green-100\r\n\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('pre', {
    directives: [{
      name: "highlightjs",
      rawName: "v-highlightjs"
    }]
  }, [_c('code', [_vm._v("<span class=\"uk-label md-bg-orange-600\">.md-bg-orange-600</span>\r\n<span class=\"uk-label md-bg-indigo-600\">.md-bg-indigo-600</span>\r\n<span class=\"uk-label md-bg-green-600\">.md-bg-green-600</span>\r\n<span class=\"uk-label md-bg-cyan-600\">.md-bg-cyan-600</span>\r\n<span class=\"uk-label md-bg-pink-600\">.md-bg-pink-600</span>\r\n<span class=\"uk-label md-bg-grey-600\">.md-bg-grey-600</span>\r\n<span class=\"uk-label md-bg-light-blue-100 sc-color-primary\">.md-bg-light-blue-100</span>\r\n<span class=\"uk-label md-bg-green-100 sc-color-primary\">.md-bg-green-100</span>")])])])], 1)], 1)], 2)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/components/badge_label.vue?vue&type=template&id=2ac9654b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/components/badge_label.vue?vue&type=script&lang=js&
__webpack_require__(182);

/* harmony default export */ var badge_labelvue_type_script_lang_js_ = ({
  name: 'ComponentsBadgeLabel'
});
// CONCATENATED MODULE: ./pages/components/badge_label.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_badge_labelvue_type_script_lang_js_ = (badge_labelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/components/badge_label.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_badge_labelvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2de81940"
  
)

/* harmony default export */ var badge_label = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=badge_label.js.map