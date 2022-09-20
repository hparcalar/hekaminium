exports.ids = [13];
exports.modules = {

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/components/color_palette.vue?vue&type=template&id=1ec7d268&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_vm._ssrNode("<div data-uk-grid class=\"uk-grid\">", "</div>", _vm._l(_vm.colors, function (color) {
    return _vm._ssrNode("<div class=\"uk-width-1-4@l uk-width-1-3@m uk-width-1-2@s\">", "</div>", [_c('ScCard', [_c('ScCardBody', [_c('h5', [_vm._v(_vm._s(color[0]))]), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: color[2],
        expression: "color[2]"
      }]
    }, _vm._l(_vm.variantsAccent, function (variant, index) {
      return _c('div', {
        key: variant,
        class: _vm.setClass(index, color[0], color[1], variant),
        staticStyle: {
          "padding": "12px 8px"
        }
      }, [_c('small', [_vm._v(".md-bg-" + _vm._s(color[0]) + "-" + _vm._s(variant))]), _vm._v(" "), _c('br'), _c('small', [_vm._v(".md-color-" + _vm._s(color[0]) + "-" + _vm._s(variant))])]);
    }), 0), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !color[2],
        expression: "!color[2]"
      }]
    }, _vm._l(_vm.variantsNoAccent, function (variant, index) {
      return _c('div', {
        key: variant,
        class: _vm.setClass(index, color[0], color[1], variant),
        staticStyle: {
          "padding": "12px 8px"
        }
      }, [_c('small', [_vm._v(".md-bg-" + _vm._s(color[0]) + "-" + _vm._s(variant))]), _vm._v(" "), _c('br'), _c('small', [_vm._v(".md-color-" + _vm._s(color[0]) + "-" + _vm._s(variant))])]);
    }), 0)])], 1)], 1);
  }), 0)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/components/color_palette.vue?vue&type=template&id=1ec7d268&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/components/color_palette.vue?vue&type=script&lang=js&
/* harmony default export */ var color_palettevue_type_script_lang_js_ = ({
  name: 'ComponentsColorPalette',
  data: () => ({
    variantsAccent: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'a100', 'a200', 'a400', 'a700'],
    variantsNoAccent: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
    colors: [['red', [1, 2, 3, 4, 11], true], ['pink', [1, 2, 3, 11], true], ['purple', [1, 2, 3, 11], true], ['deep-purple', [1, 2, 3, 11], true], ['indigo', [1, 2, 3, 11], true], ['blue', [1, 2, 3, 4, 5, 11], true], ['light-blue', [1, 2, 3, 4, 5, 6, 11, 12, 13], true], ['cyan', [1, 2, 3, 4, 5, 6, 7, 11, 12, 13, 14], true], ['teal', [1, 2, 3, 4, 5, 11, 12, 13, 14], true], ['green', [1, 2, 3, 4, 5, 6, 11, 12, 13, 14], true], ['light-green', [1, 2, 3, 4, 5, 6, 7, 11, 12, 13, 14], true], ['lime', [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14], true], ['yellow', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], true], ['amber', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], true], ['orange', [1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14], true], ['deep-orange', [1, 2, 3, 4, 5, 11, 12], true], ['brown', [1, 2, 3], false], ['grey', [1, 2, 3, 4, 5, 6], false], ['blue-grey', [1, 2, 3, 4], false]]
  }),
  methods: {
    setClass(index, name, lightTextArray, variant) {
      var lightText = lightTextArray.indexOf(index + 1) > -1 ? '' : ' md-color-white';
      return 'md-bg-' + name + '-' + variant + lightText;
    }

  }
});
// CONCATENATED MODULE: ./pages/components/color_palette.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_color_palettevue_type_script_lang_js_ = (color_palettevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/components/color_palette.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_color_palettevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "11c2ce2c"
  
)

/* harmony default export */ var color_palette = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=color_palette.js.map