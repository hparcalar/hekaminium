exports.ids = [3];
exports.modules = {

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/account_auth.vue?vue&type=template&id=332b7244&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_c('ScCard', [_c('ScCardBody', [_c('div', [_vm._v("\n\t\t\t\t\t\tName: " + _vm._s(_vm.user.name) + "\n\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-small-top uk-margin-bottom"
  }, [_vm._v("\n\t\t\t\t\t\tEmail: " + _vm._s(_vm.user.email) + "\n\t\t\t\t\t")]), _vm._v(" "), _c('a', {
    staticClass: "sc-button sc-button-default sc-button-outline",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function ($event) {
        return _vm.$auth.logout();
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\tLogout\n\t\t\t\t\t")])])], 1)], 1)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/account_auth.vue?vue&type=template&id=332b7244&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account_auth.vue?vue&type=script&lang=js&
/* harmony default export */ var account_authvue_type_script_lang_js_ = ({
  async asyncData({
    params,
    $axios
  }) {
    const user = await await $axios.$get('/api/user');
    return {
      user
    };
  },

  data: () => ({
    user: {}
  })
});
// CONCATENATED MODULE: ./pages/account_auth.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_account_authvue_type_script_lang_js_ = (account_authvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/account_auth.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_account_authvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "032a0efe"
  
)

/* harmony default export */ var account_auth = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=account_auth.js.map