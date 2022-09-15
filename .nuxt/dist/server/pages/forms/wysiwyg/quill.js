exports.ids = [76];
exports.modules = {

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(681);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("5d4ebdcf", content, true, context)
};

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_quill_vue_vue_type_style_index_0_id_5e27f1f2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(513);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_quill_vue_vue_type_style_index_0_id_5e27f1f2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_quill_vue_vue_type_style_index_0_id_5e27f1f2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_quill_vue_vue_type_style_index_0_id_5e27f1f2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_quill_vue_vue_type_style_index_0_id_5e27f1f2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ql-editor{min-height:200px;max-height:400px;overflow-y:auto}.ql-container{font-family:\"Roboto\",Arial,Helvetica,sans-serif;font-size:14px}.ql-toolbar{background:#eee}.ql-container{background:#fff}.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4{margin-bottom:8px}.ql-snow.ql-toolbar button,.ql-snow .ql-toolbar button{padding:4px 8px;height:26px;width:34px;transition:all .14s ease}.ql-snow.ql-toolbar .ql-picker-label.ql-active,.ql-snow .ql-toolbar .ql-picker-label.ql-active,.ql-snow.ql-toolbar .ql-picker-label:hover,.ql-snow .ql-toolbar .ql-picker-label:hover,.ql-snow.ql-toolbar button.ql-active,.ql-snow .ql-toolbar button.ql-active,.ql-snow.ql-toolbar button:focus,.ql-snow .ql-toolbar button:focus,.ql-snow.ql-toolbar button:hover,.ql-snow .ql-toolbar button:hover{background:rgba(0,0,0,.05);border-radius:3px}.ql-snow .ql-tooltip{z-index:2000;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);border-radius:3px;border:none;padding:8px 12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/forms/wysiwyg/quill.vue?vue&type=template&id=5e27f1f2&xmlns%3Av-quill=http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_c('client-only', [_c('div', {
    directives: [{
      name: "quill",
      rawName: "v-quill:myQuillEditor",
      value: _vm.editorOption,
      expression: "editorOption",
      arg: "myQuillEditor"
    }],
    staticClass: "quill-editor",
    attrs: {
      "content": _vm.content
    },
    on: {
      "change": function ($event) {
        return _vm.onEditorChange($event);
      },
      "blur": function ($event) {
        return _vm.onEditorBlur($event);
      },
      "focus": function ($event) {
        return _vm.onEditorFocus($event);
      },
      "ready": function ($event) {
        return _vm.onEditorReady($event);
      }
    }
  })]), _vm._ssrNode(" "), _c('ScCard', {
    staticClass: "uk-margin-top"
  }, [_c('ScCardBody', [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  })])], 1), _vm._ssrNode(" <pre class=\"uk-margin-top\"><code>" + _vm._ssrEscape(_vm._s(_vm.content)) + "</code></pre>")], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/forms/wysiwyg/quill.vue?vue&type=template&id=5e27f1f2&xmlns%3Av-quill=http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/forms/wysiwyg/quill.vue?vue&type=script&lang=js&
if (false) {}

/* harmony default export */ var quillvue_type_script_lang_js_ = ({
  name: 'FormsWysiwygQuill',

  data() {
    return {
      content: '<h1>Header</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur deleniti ducimus, eos fugit, mollitia neque praesentium quia quisquam quos sapiente voluptatem voluptatibus voluptatum. Assumenda consectetur deleniti doloremque fuga harum illum molestiae nisi possimus quidem vero. A accusantium alias aliquam animi cum doloremque eos est facilis illo, illum inventore ipsam itaque laboriosam maiores modi mollitia necessitatibus nemo non omnis perferendis quam quia, repellendus rerum vel veritatis voluptas voluptate?</p><p><a href="https://themeforest.com/" target="_blank">themeforest.com</a></p>',
      editorOption: {
        modules: {
          toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
            'header': 1
          }, {
            'header': 2
          }], [{
            'list': 'ordered'
          }, {
            'list': 'bullet'
          }], [{
            'script': 'sub'
          }, {
            'script': 'super'
          }], [{
            'indent': '-1'
          }, {
            'indent': '+1'
          }], [{
            'direction': 'rtl'
          }], [{
            'size': ['small', false, 'large', 'huge']
          }], [{
            'header': [1, 2, 3, 4, 5, 6, false]
          }], [{
            'font': []
          }], [{
            'color': []
          }, {
            'background': []
          }], [{
            'align': []
          }], ['clean'], ['link', 'image', 'video']],
          imageResize: true
        }
      }
    };
  },

  mounted() {
    console.log('app init, my quill instance object is:', this.myQuillEditor);
  },

  methods: {
    onEditorBlur(editor) {
      console.log('editor blur!', editor);
    },

    onEditorFocus(editor) {
      console.log('editor focus!', editor);
    },

    onEditorReady(editor) {
      console.log('editor ready!', editor);
    },

    onEditorChange(event) {
      console.log('editor change!', event.editor, event.html, event.text);
      this.content = event.html;
    }

  }
});
// CONCATENATED MODULE: ./pages/forms/wysiwyg/quill.vue?vue&type=script&lang=js&
 /* harmony default export */ var wysiwyg_quillvue_type_script_lang_js_ = (quillvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/forms/wysiwyg/quill.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(680)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  wysiwyg_quillvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "10b67562"
  
)

/* harmony default export */ var quill = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=quill.js.map