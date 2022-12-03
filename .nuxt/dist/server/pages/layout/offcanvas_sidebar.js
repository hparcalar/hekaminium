exports.ids = [84];
exports.modules = {

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/layout/offcanvas_sidebar.vue?vue&type=template&id=49567d84&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">\n\t\t\tSidebar Offcanvas example\n\t\t</div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/layout/offcanvas_sidebar.vue?vue&type=template&id=49567d84&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/layout/offcanvas_sidebar.vue?vue&type=script&lang=js&
/* harmony default export */ var offcanvas_sidebarvue_type_script_lang_js_ = ({
  name: 'LayoutMiniSidebar',

  mounted() {
    this.$store.commit('setSidebarOffcanvasActive', true);
    this.$store.commit('sidebarMainToggle', false);
  },

  beforeDestroy() {
    UIkit.offcanvas('#sc-sidebar-main').hide().then(function () {
      UIkit.offcanvas('#sc-sidebar-main').$destroy();
      document.getElementById('sc-sidebar-main').classList.remove('uk-offcanvas');
    });
    this.$store.commit('setSidebarOffcanvasActive', false);
  }

});
// CONCATENATED MODULE: ./pages/layout/offcanvas_sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_offcanvas_sidebarvue_type_script_lang_js_ = (offcanvas_sidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/layout/offcanvas_sidebar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layout_offcanvas_sidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3d867dfa"
  
)

/* harmony default export */ var offcanvas_sidebar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=offcanvas_sidebar.js.map