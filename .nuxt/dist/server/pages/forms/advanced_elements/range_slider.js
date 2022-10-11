exports.ids = [53];
exports.modules = {

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/forms/advanced_elements/range_slider.vue?vue&type=template&id=418db67c&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_c('ScCard', [_c('ScCardBody', [_c('div', {
    staticClass: "uk-child-width-1-3@l uk-child-width-1-2@m uk-grid uk-grid-divider",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', [_c('client-only', [_c('IonRangeSlider', {
    attrs: {
      "settings": {
        min: 100,
        max: 1000
      }
    },
    model: {
      value: _vm.rangeSlider.a,
      callback: function ($$v) {
        _vm.$set(_vm.rangeSlider, "a", $$v);
      },
      expression: "rangeSlider.a"
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "sc-color-secondary uk-text-small"
  }, [_vm._v("Data: " + _vm._s(_vm.rangeSlider.a))])], 1), _vm._v(" "), _c('div', [_c('client-only', [_c('IonRangeSlider', {
    attrs: {
      "settings": {
        type: 'double',
        grid: true,
        min: 0,
        max: 1000,
        prefix: '$'
      }
    },
    model: {
      value: _vm.rangeSlider.b,
      callback: function ($$v) {
        _vm.$set(_vm.rangeSlider, "b", $$v);
      },
      expression: "rangeSlider.b"
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "sc-color-secondary uk-text-small"
  }, [_vm._v("Data: " + _vm._s(_vm.rangeSlider.b))])], 1), _vm._v(" "), _c('div', [_c('client-only', [_c('IonRangeSlider', {
    attrs: {
      "settings": {
        grid: true,
        from: 5,
        values: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
      }
    },
    model: {
      value: _vm.rangeSlider.c,
      callback: function ($$v) {
        _vm.$set(_vm.rangeSlider, "c", $$v);
      },
      expression: "rangeSlider.c"
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "sc-color-secondary uk-text-small"
  }, [_vm._v("Data: " + _vm._s(_vm.rangeSlider.c))])], 1)]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "uk-child-width-1-3@l uk-child-width-1-2@m uk-grid uk-grid-divider",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', [_c('client-only', [_c('IonRangeSlider', {
    attrs: {
      "settings": {
        grid: true,
        min: 18,
        max: 70,
        from: 30,
        prefix: 'Age ',
        max_postfix: '+'
      }
    },
    model: {
      value: _vm.rangeSlider.d,
      callback: function ($$v) {
        _vm.$set(_vm.rangeSlider, "d", $$v);
      },
      expression: "rangeSlider.d"
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "sc-color-secondary uk-text-small"
  }, [_vm._v("Data: " + _vm._s(_vm.rangeSlider.d))])], 1), _vm._v(" "), _c('div', [_c('client-only', [_c('IonRangeSlider', {
    attrs: {
      "settings": {
        type: 'double',
        min: 1000000,
        max: 2000000,
        grid: true,
        force_edges: true
      }
    },
    model: {
      value: _vm.rangeSlider.e,
      callback: function ($$v) {
        _vm.$set(_vm.rangeSlider, "e", $$v);
      },
      expression: "rangeSlider.e"
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "sc-color-secondary uk-text-small"
  }, [_vm._v("Data: " + _vm._s(_vm.rangeSlider.e))])], 1), _vm._v(" "), _c('div', [_c('client-only', [_c('IonRangeSlider', {
    attrs: {
      "settings": {
        type: 'single',
        min: 0,
        max: 10,
        step: 2.34,
        grid: true,
        grid_snap: true
      }
    },
    model: {
      value: _vm.rangeSlider.f,
      callback: function ($$v) {
        _vm.$set(_vm.rangeSlider, "f", $$v);
      },
      expression: "rangeSlider.f"
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "sc-color-secondary uk-text-small"
  }, [_vm._v("Data: " + _vm._s(_vm.rangeSlider.f))])], 1)])])], 1), _vm._ssrNode(" "), _c('ScCard', {
    staticClass: "uk-margin-top"
  }, [_c('ScCardTitle', [_vm._v("\n\t\t\t\t\tUpdate values and settings\n\t\t\t\t")]), _vm._v(" "), _c('ScCardBody', [_c('div', {
    staticClass: "uk-grid uk-margin-bottom",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', {
    staticClass: "uk-width-1-2@m"
  }, [_c('client-only', [_c('IonRangeSlider', {
    ref: "customSlider",
    attrs: {
      "settings": _vm.rangeSlider.customSettings
    },
    model: {
      value: _vm.rangeSlider.custom,
      callback: function ($$v) {
        _vm.$set(_vm.rangeSlider, "custom", $$v);
      },
      expression: "rangeSlider.custom"
    }
  })], 1)], 1)]), _vm._v(" "), _c('div', {
    attrs: {
      "data-uk-margin": ""
    }
  }, [_c('button', {
    staticClass: "sc-button",
    attrs: {
      "disabled": _vm.rangeSlider.custom === 2
    },
    on: {
      "click": function ($event) {
        return _vm.setSliderValue(2);
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\tSet to 2\n\t\t\t\t\t\t")]), _vm._v(" "), _c('button', {
    staticClass: "sc-button",
    attrs: {
      "disabled": _vm.rangeSlider.custom === 4
    },
    on: {
      "click": function ($event) {
        return _vm.setSliderValue(4);
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\tSet to 4\n\t\t\t\t\t\t")]), _vm._v(" "), _c('button', {
    staticClass: "sc-button uk-margin-right",
    attrs: {
      "disabled": _vm.rangeSlider.custom === 8
    },
    on: {
      "click": function ($event) {
        return _vm.setSliderValue(8);
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\tSet to 8\n\t\t\t\t\t\t")]), _vm._v(" "), _c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.setSliderSettings();
      }
    }
  }, [_c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.rangeSlider.defaultCustomSettings,
      expression: "rangeSlider.defaultCustomSettings"
    }]
  }, [_vm._v("Change")]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.rangeSlider.defaultCustomSettings,
      expression: "!rangeSlider.defaultCustomSettings"
    }]
  }, [_vm._v("Restore")]), _vm._v("\n\t\t\t\t\t\t\tsettings\n\t\t\t\t\t\t")])])])], 1)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/forms/advanced_elements/range_slider.vue?vue&type=template&id=418db67c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/forms/advanced_elements/range_slider.vue?vue&type=script&lang=js&
/* harmony default export */ var range_slidervue_type_script_lang_js_ = ({
  name: 'FormsAdvancedElementsRangeSlider',
  components: {
    IonRangeSlider:  false ? undefined : null
  },
  data: () => ({
    rangeSlider: {
      a: 550,
      b: '200;800',
      c: 5,
      d: 30,
      e: '1000000;2000000',
      f: 0,
      custom: 8,
      customSettings: {
        min: 1,
        max: 10
      },
      defaultCustomSettings: true
    }
  }),
  methods: {
    setSliderValue(value) {
      this.rangeSlider.custom = value;
    },

    setSliderSettings() {
      const slider = this.$refs.customSlider;

      if (this.rangeSlider.defaultCustomSettings) {
        slider.changeSettings({
          min: 1,
          max: 20
        });
      } else {
        slider.changeSettings({
          min: 1,
          max: 10
        });
      }

      this.rangeSlider.defaultCustomSettings = !this.rangeSlider.defaultCustomSettings;
    }

  }
});
// CONCATENATED MODULE: ./pages/forms/advanced_elements/range_slider.vue?vue&type=script&lang=js&
 /* harmony default export */ var advanced_elements_range_slidervue_type_script_lang_js_ = (range_slidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/forms/advanced_elements/range_slider.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  advanced_elements_range_slidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "61d4b37c"
  
)

/* harmony default export */ var range_slider = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=range_slider.js.map