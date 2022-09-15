exports.ids = [85];
exports.modules = {

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/layout/top_menu.vue?vue&type=template&id=a55c46cc&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">\n\t\t\tTop Menu example\n\t\t</div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/layout/top_menu.vue?vue&type=template&id=a55c46cc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/layout/top_menu.vue?vue&type=script&lang=js&
/* harmony default export */ var top_menuvue_type_script_lang_js_ = ({
  name: 'LayoutTopMenu',

  mounted() {
    this.$store.commit('setTopMenuActive', true);
    this.$store.commit('setFullwidthActive', true);
  },

  beforeDestroy() {
    this.$store.commit('setTopMenuActive', false);
    this.$store.commit('setFullwidthActive', false);
  }

});
// CONCATENATED MODULE: ./pages/layout/top_menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_top_menuvue_type_script_lang_js_ = (top_menuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/layout/top_menu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layout_top_menuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b1926b0c"
  
)

/* harmony default export */ var top_menu = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=top_menu.js.map