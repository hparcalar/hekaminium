exports.ids = [98];
exports.modules = {

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/invoices/index.vue?vue&type=template&id=217628da&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('h5', {
    staticClass: "uk-flex uk-flex-middle md-color-grey-500 uk-height-1-1 uk-flex-center"
  }, [_vm._ssrNode("\n\t\tOpen invoice from the list.\n\t")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/pages/invoices/index.vue?vue&type=template&id=217628da&

// EXTERNAL MODULE: ./assets/js/utils.js + 5 modules
var utils = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/invoices/index.vue?vue&type=script&lang=js&

/* harmony default export */ var invoicesvue_type_script_lang_js_ = ({
  name: 'PagesInvoicesIndex',
  data: () => ({
    notify: null
  }),

  mounted() {
    // show notification
    this.notify = UIkit.notification('<span class="md-color-red-400 mdi mdi-alert-outline uk-margin-small-right"></span> There are 3 unpaid invoices', {
      pos: utils["e" /* scMq */].mediumMin() ? 'bottom-left' : 'top-center'
    });
  },

  beforeDestroy() {
    // close notification
    this.notify.close(true);
  }

});
// CONCATENATED MODULE: ./pages/pages/invoices/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_invoicesvue_type_script_lang_js_ = (invoicesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/pages/invoices/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_invoicesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "30620398"
  
)

/* harmony default export */ var invoices = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map