exports.ids = [6];
exports.modules = {

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
// highlight.js


var hljs = __webpack_require__(106);

__webpack_require__(186);

hljs.registerLanguage('xml', __webpack_require__(107));
hljs.registerLanguage('sql', __webpack_require__(108));
hljs.registerLanguage('javascript', __webpack_require__(109));
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

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(187);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("0efaf680", content, true)

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hljs{display:block;overflow-x:auto;padding:.5em;color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/components/animations.vue?vue&type=template&id=cf8f5f5a&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_c('client-only', [_c('div', {
    staticClass: "sc-top-bar",
    attrs: {
      "id": "sc-page-top-bar",
      "data-uk-sticky": "offset:48; show-on-up: true; animation: uk-animation-slide-top-medium"
    }
  }, [_c('div', {
    staticClass: "sc-top-bar-content uk-flex uk-flex-1"
  }, [_c('h1', {
    staticClass: "sc-top-bar-title uk-text-uppercase uk-flex-1"
  }, [_vm._v("\r\n\t\t\t\t\t\tAnimations\r\n\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "uk-width-1-2 uk-width-1-3@s uk-width-1-5@m"
  }, [_c('client-only', [_c('Select2', {
    attrs: {
      "options": _vm.durations,
      "settings": {
        'width': '100%',
        'minimumResultsForSearch': -1,
        'placeholder': 'Select duration...'
      }
    },
    on: {
      "change": function ($event) {
        return _vm.changeDuration($event);
      }
    },
    model: {
      value: _vm.animationDuration,
      callback: function ($$v) {
        _vm.animationDuration = $$v;
      },
      expression: "animationDuration"
    }
  })], 1)], 1)])])]), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"sc-page-content\" class=\"uk-flex uk-flex-center\">", "</div>", [_vm._ssrNode("<div class=\"uk-width-2-3@l\">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass(null, {
    'sc-animation-slow': _vm.animationSlow,
    'sc-animation-fast': _vm.animationFast,
    'sc-animation-very-slow': _vm.animationVerySlow
  }) + ">", "</div>", [_vm._ssrNode("<div data-uk-grid class=\"uk-child-width-1-2 uk-child-width-1-6@s uk-grid-match uk-grid-medium uk-grid\">", "</div>", [_vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-fade"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tFade\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-scale-up"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tScale Up\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-scale-down"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tScale Down\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-shake"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tShake\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-left"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Left\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-top"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Top\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-bottom"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Bottom\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-right"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Right\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-left-small"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Left Small\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-top-small"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Top Small\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-bottom-small"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Bottom Small\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-right-small"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Right Small\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-left-medium"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Left Medium\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-top-medium"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Top Medium\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-bottom-medium"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Bottom Medium\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-right-medium"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Right Medium\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1)], 2)]), _vm._ssrNode(" "), _c('pre', {
    directives: [{
      name: "highlightjs",
      rawName: "v-highlightjs"
    }]
  }, [_vm._ssrNode("<code>&lt;div class=&quot;uk-animation-fade&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-scale-up&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-scale-down&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-shake&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-slide-left&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-slide-top&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-slide-bottom&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-slide-right&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-slide-left-small&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-slide-top-small&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-slide-bottom-small&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-slide-right-small&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-slide-left-medium&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-slide-top-medium&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-slide-bottom-medium&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-slide-right-medium&quot;&gt;&lt;/div&gt;\r\n</code>")]), _vm._ssrNode(" <h5 class=\"uk-margin-medium-top\">\r\n\t\t\t\t\tReverse modifier\r\n\t\t\t\t</h5> "), _vm._ssrNode("<div" + _vm._ssrClass(null, {
    'sc-animation-slow': _vm.animationSlow,
    'sc-animation-fast': _vm.animationFast,
    'sc-animation-very-slow': _vm.animationVerySlow
  }) + ">", "</div>", [_vm._ssrNode("<div data-uk-grid class=\"uk-child-width-1-2 uk-child-width-1-6@s uk-grid-match sc-js-animations-grid uk-grid-medium uk-grid\">", "</div>", [_vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-fade uk-animation-reverse"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tFade\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-scale-up uk-animation-reverse"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tScale Up\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-scale-down uk-animation-reverse"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tScale Down\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-shake uk-animation-reverse"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tShake\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-left uk-animation-reverse"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Left\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-top uk-animation-reverse"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Top\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-bottom uk-animation-reverse"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Bottom\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-right uk-animation-reverse"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Right\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-left-small uk-animation-reverse"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Left Small\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-top-small uk-animation-reverse"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Top Small\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-bottom-small uk-animation-reverse"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Bottom Small\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-right-small uk-animation-reverse"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Right Small\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-left-medium uk-animation-reverse"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Left Medium\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-top-medium uk-animation-reverse"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Top Medium\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-bottom-medium uk-animation-reverse"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Bottom Medium\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-animation-toggle\">", "</div>", [_c('ScCard', {
    staticClass: "uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-right-medium uk-animation-reverse"
  }, [_c('ScCardBody', [_c('p', {
    staticClass: "uk-text-center uk-text-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Right Medium\r\n\t\t\t\t\t\t\t\t\t")])])], 1)], 1)], 2)]), _vm._ssrNode(" "), _c('pre', {
    directives: [{
      name: "highlightjs",
      rawName: "v-highlightjs"
    }]
  }, [_vm._ssrNode("<code>&lt;div class=&quot;uk-animation-fade uk-animation-reverse&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-scale-up uk-animation-reverse&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-scale-down uk-animation-reverse&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-shake uk-animation-reverse&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-slide-left uk-animation-reverse&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-slide-top uk-animation-reverse&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-slide-bottom uk-animation-reverse&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-slide-right uk-animation-reverse&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-slide-left-small uk-animation-reverse&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-slide-top-small uk-animation-reverse&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-slide-bottom-small uk-animation-reverse&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-slide-right-small uk-animation-reverse&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-slide-left-medium uk-animation-reverse&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-slide-top-medium uk-animation-reverse&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-slide-bottom-medium uk-animation-reverse&quot;&gt;&lt;/div&gt;\r\n&lt;div class=&quot;uk-animation-slide-right-medium uk-animation-reverse&quot;&gt;&lt;/div&gt;\r\n</code>")])], 2)])], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/components/animations.vue?vue&type=template&id=cf8f5f5a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/components/animations.vue?vue&type=script&lang=js&
__webpack_require__(185);

/* harmony default export */ var animationsvue_type_script_lang_js_ = ({
  name: 'ComponentsAnimations',
  components: {
    Select2:  false ? undefined : null
  },
  data: () => ({
    animationDuration: '',
    animationFast: false,
    animationSlow: false,
    animationVerySlow: false,
    durations: [{
      id: 'animation-default',
      text: 'Default'
    }, {
      id: 'animation-fast',
      text: 'Fast'
    }, {
      id: 'animation-slow',
      text: 'Slow'
    }, {
      id: 'animation-very-slow',
      text: 'Very Slow'
    }]
  }),
  methods: {
    changeDuration(val) {
      this.animationFast = false;
      this.animationSlow = false;
      this.animationVerySlow = false;

      if (val === 'animation-fast') {
        this.animationFast = true;
      }

      if (val === 'animation-slow') {
        this.animationSlow = true;
      }

      if (val === 'animation-very-slow') {
        this.animationVerySlow = true;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/components/animations.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_animationsvue_type_script_lang_js_ = (animationsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/components/animations.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_animationsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5dc13337"
  
)

/* harmony default export */ var animations = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=animations.js.map