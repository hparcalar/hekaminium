exports.ids = [48];
exports.modules = {

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/forms/advanced_elements/color_picker.vue?vue&type=template&id=cb83c160&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_c('ScCard', [_c('ScCardTitle', [_vm._v("\n\t\t\t\t\tColorpicker\n\t\t\t\t")]), _vm._v(" "), _c('ScCardBody', [_c('div', {
    staticClass: "uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', {
    staticClass: "uk-width-1-3@m"
  }, [_c('label', [_vm._v("Default")]), _vm._v(" "), _c('div', [_c('client-only', [_c('ScColorpicker', {
    attrs: {
      "size": "large",
      "close-on-select": false
    },
    model: {
      value: _vm.cpColor1,
      callback: function ($$v) {
        _vm.cpColor1 = $$v;
      },
      expression: "cpColor1"
    }
  })], 1)], 1), _vm._v(" "), _c('span', {
    staticClass: "uk-form-help-block uk-margin-remove-left"
  }, [_vm._v("\n\t\t\t\t\t\t\t\tcloseOnSelect: false\n\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-width-1-3@m"
  }, [_c('label', [_vm._v("Selected color")]), _vm._v(" "), _c('div', [_c('client-only', [_c('ScColorpicker', {
    attrs: {
      "size": "large"
    },
    model: {
      value: _vm.cpColor2,
      callback: function ($$v) {
        _vm.cpColor2 = $$v;
      },
      expression: "cpColor2"
    }
  })], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "uk-width-1-3@m"
  }, [_c('label', [_vm._v("Right aligned")]), _vm._v(" "), _c('div', {
    staticClass: "uk-flex uk-flex-right"
  }, [_c('client-only', [_c('ScColorpicker', {
    attrs: {
      "size": "large"
    },
    model: {
      value: _vm.cpColor2,
      callback: function ($$v) {
        _vm.cpColor2 = $$v;
      },
      expression: "cpColor2"
    }
  })], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "uk-width-1-2@m"
  }, [_c('label', [_vm._v("Inline")]), _vm._v(" "), _c('div', [_c('client-only', [_c('ScColorpicker', {
    attrs: {
      "inline": true
    },
    model: {
      value: _vm.cpColor3,
      callback: function ($$v) {
        _vm.cpColor3 = $$v;
      },
      expression: "cpColor3"
    }
  })], 1)], 1)])])])], 1)], 1)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/forms/advanced_elements/color_picker.vue?vue&type=template&id=cb83c160&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/forms/advanced_elements/color_picker.vue?vue&type=script&lang=js&
/* harmony default export */ var color_pickervue_type_script_lang_js_ = ({
  name: 'FormsAdvancedElementsColorPicker',
  components: {
    ScColorpicker:  false ? undefined : null
  },
  data: () => ({
    cpColor1: '',
    cpColor2: '#039be5',
    cpColor3: ''
  })
});
// CONCATENATED MODULE: ./pages/forms/advanced_elements/color_picker.vue?vue&type=script&lang=js&
 /* harmony default export */ var advanced_elements_color_pickervue_type_script_lang_js_ = (color_pickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/forms/advanced_elements/color_picker.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  advanced_elements_color_pickervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "017324ee"
  
)

/* harmony default export */ var color_picker = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=color_picker.js.map