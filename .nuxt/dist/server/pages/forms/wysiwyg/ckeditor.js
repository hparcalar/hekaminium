exports.ids = [75];
exports.modules = {

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/forms/wysiwyg/ckeditor.vue?vue&type=template&id=240a9060&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_vm._ssrNode("<div class=\"sc-theme-dark-info uk-margin-bottom\">\n\t\t\t\tDark mode for the CKEditor rich text editor - <a href=\"https://ckeditor.com/cke4/addon/moono-dark\">https://ckeditor.com/cke4/addon/moono-dark</a></div> "), _c('client-only', [_c('ckeditor', {
    attrs: {
      "editor": _vm.editor,
      "config": _vm.editorConfig
    },
    model: {
      value: _vm.editorData,
      callback: function ($$v) {
        _vm.editorData = $$v;
      },
      expression: "editorData"
    }
  })], 1), _vm._ssrNode(" "), _c('ScCard', {
    staticClass: "uk-margin-top"
  }, [_c('ScCardBody', [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.editorData)
    }
  })])], 1), _vm._ssrNode(" <pre class=\"uk-margin-top\"><code>" + _vm._ssrEscape(_vm._s(_vm.editorData)) + "</code></pre>")], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/forms/wysiwyg/ckeditor.vue?vue&type=template&id=240a9060&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/forms/wysiwyg/ckeditor.vue?vue&type=script&lang=js&
if (false) {}

/* harmony default export */ var ckeditorvue_type_script_lang_js_ = ({
  name: 'FormsWysiwygCkeditor',
  data: () => ({
    editorData: '<h1>Header</h1>\n' + '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur deleniti ducimus, eos fugit, mollitia neque praesentium quia quisquam quos sapiente voluptatem voluptatibus voluptatum. Assumenda consectetur deleniti doloremque fuga harum illum molestiae nisi possimus quidem vero. A accusantium alias aliquam animi cum doloremque eos est facilis illo, illum inventore ipsam itaque laboriosam maiores modi mollitia necessitatibus nemo non omnis perferendis quam quia, repellendus rerum vel veritatis voluptas voluptate?</p>\n' + '<p><a href="https://themeforest.com">themeforest.com</a></p>',
    editorConfig: {}
  }),
  computed: {
    editor() {
      return  false ? undefined : null;
    }

  }
});
// CONCATENATED MODULE: ./pages/forms/wysiwyg/ckeditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var wysiwyg_ckeditorvue_type_script_lang_js_ = (ckeditorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/forms/wysiwyg/ckeditor.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  wysiwyg_ckeditorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "12bb047b"
  
)

/* harmony default export */ var ckeditor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=ckeditor.js.map