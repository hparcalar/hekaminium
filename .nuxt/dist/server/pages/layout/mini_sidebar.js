exports.ids = [83];
exports.modules = {

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/layout/mini_sidebar.vue?vue&type=template&id=0c314a9b&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">\r\n\t\t\tMini Sidebar example\r\n\t\t</div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/layout/mini_sidebar.vue?vue&type=template&id=0c314a9b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/layout/mini_sidebar.vue?vue&type=script&lang=js&
/* harmony default export */ var mini_sidebarvue_type_script_lang_js_ = ({
  name: 'LayoutMiniSidebar',

  mounted() {
    this.$store.commit('sidebarMainToggle', true);
    this.$store.commit('setSidebarMiniActive', true);
  },

  beforeDestroy() {
    this.$store.commit('setSidebarMiniActive', false);
  }

});
// CONCATENATED MODULE: ./pages/layout/mini_sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_mini_sidebarvue_type_script_lang_js_ = (mini_sidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/layout/mini_sidebar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layout_mini_sidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b339e3b0"
  
)

/* harmony default export */ var mini_sidebar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=mini_sidebar.js.map