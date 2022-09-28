exports.ids = [69];
exports.modules = {

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Input.vue?vue&type=template&id=513c36f8&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "sc-input-wrapper",
    class: {
      'sc-input-wrapper-outline': _vm.mode === 'outline',
      'sc-input-wrapper-disabled': _vm.disabled,
      'sc-input-wrapper-danger': _vm.errorState,
      'sc-input-wrapper-success': _vm.successState,
      'sc-input-filled': _vm.value !== '' || _vm.state === 'fixed',
      'sc-input-focus': _vm.inputFocused
    }
  }, [_vm._t("icon"), _vm._ssrNode(" "), _vm._t("default"), _vm._ssrNode(" <input" + _vm._ssrAttr("id", _vm.id) + _vm._ssrAttr("name", _vm.name) + _vm._ssrAttr("placeholder", _vm.placeholder) + _vm._ssrAttr("type", _vm.type) + _vm._ssrAttr("disabled", _vm.disabled) + _vm._ssrAttr("readonly", _vm.readOnly) + _vm._ssrAttr("value", _vm.value) + _vm._ssrClass(null, ['uk-input', 'sc-vue-input', _vm.modeClass, _vm.inputErrorClass, _vm.inputSuccessClass, _vm.extraClasses]) + "> <span class=\"sc-input-bar\"" + _vm._ssrStyle(null, null, {
    display: _vm.mode !== 'outline' ? '' : 'none'
  }) + "></span> "), _vm._t("help-inline")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Input.vue?vue&type=template&id=513c36f8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Input.vue?vue&type=script&lang=js&
/* harmony default export */ var Inputvue_type_script_lang_js_ = ({
  name: 'ScInput',
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Object, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: ''
    },
    state: {
      type: String,
      default: ''
    },
    extraClasses: {
      type: String,
      default: ''
    },
    successState: {
      type: Boolean,
      default: false
    },
    errorState: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
    },
    ukTooltip: {
      type: Object,
      default: null
    },
    focus: {
      type: Function,
      default: null
    },
    blur: {
      type: Function,
      default: null
    },
    change: {
      type: Function,
      default: null
    },
    keyUp: {
      type: Function,
      default: null
    },
    validator: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    inputFocused: false
  }),
  computed: {
    modeClass() {
      return this.$props.mode === 'outline' ? 'sc-input-outline' : '';
    },

    inputErrorClass() {
      return this.$props.errorState ? 'uk-form-danger' : '';
    },

    inputSuccessClass() {
      return this.$props.successState ? 'uk-form-success' : '';
    }

  },

  mounted() {
    var self = this;

    if (self.ukTooltip) {
      UIkit.tooltip(self.$refs.input, self.ukTooltip);
    }
  },

  methods: {
    inputBlur() {
      this.inputFocused = false;

      if (this.blur) {
        this.blur();
      }

      if (this.validator) {
        this.validator.$touch();
      }

      this.$emit('blur');
    },

    inputFocus() {
      this.inputFocused = true;

      if (this.focus) {
        this.focus();
      }

      this.$emit('focus');
    },

    inputChange() {
      if (this.change) {
        this.change();
      }

      this.$emit('change');
    },

    inputKeyUp(event) {
      if (this.keyUp) {
        this.keyUp();
      }

      this.$emit('keyUp', event);
    }

  },
  watch: {}
});
// CONCATENATED MODULE: ./components/Input.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Inputvue_type_script_lang_js_ = (Inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Input.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Inputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4fe89bca"
  
)

/* harmony default export */ var Input = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Textarea.vue?vue&type=template&id=648d350a&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "sc-input-wrapper",
    class: {
      'sc-input-wrapper-outline': _vm.mode === 'outline',
      'sc-input-wrapper-disabled': _vm.disabled,
      'sc-input-wrapper-danger': _vm.errorState,
      'sc-input-wrapper-success': _vm.successState,
      'sc-input-filled': _vm.value !== '' || _vm.state === 'fixed',
      'sc-input-focus': _vm.txtFocused
    }
  }, [_vm._t("default"), _vm._ssrNode(" "), _c('textarea', {
    directives: [{
      name: "autosize",
      rawName: "v-autosize"
    }],
    ref: "textarea",
    class: ['uk-textarea', 'sc-vue-input', _vm.modeClass, _vm.dangerClass, _vm.successClass, _vm.extraClasses],
    attrs: {
      "id": _vm.id,
      "name": _vm.name,
      "placeholder": _vm.placeholder,
      "rows": _vm.rows,
      "disabled": _vm.disabled,
      "readonly": _vm.readOnly
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "focus": _vm.txtFocus,
      "blur": _vm.txtBlur,
      "change": _vm.txtChange,
      "input": function ($event) {
        return _vm.$emit('input', $event.target.value);
      },
      "keyup": _vm.txtKeyUp
    }
  }, []), _vm._ssrNode(" <span class=\"sc-input-bar\"" + _vm._ssrStyle(null, null, {
    display: _vm.mode !== 'outline' ? '' : 'none'
  }) + "></span>")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Textarea.vue?vue&type=template&id=648d350a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Textarea.vue?vue&type=script&lang=js&
var autosize = __webpack_require__(98);

/* harmony default export */ var Textareavue_type_script_lang_js_ = ({
  name: 'ScTextarea',
  directives: {
    autosize: {
      bind(el, binding, vnode) {
        if (vnode.context.$props.autosize) {
          vnode.context.$nextTick(() => {
            autosize(el);
          });
        }
      },

      componentUpdated(el, binding, vnode) {
        if (vnode.context.$props.autosize) {
          autosize.update(el);
        }
      },

      unbind(el) {
        autosize.destroy(el);
      }

    }
  },
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: ''
    },
    state: {
      type: String,
      default: ''
    },
    extraClasses: {
      type: String,
      default: ''
    },
    successState: {
      type: Boolean,
      default: false
    },
    errorState: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
    },
    rows: {
      type: Number,
      default: 5
    },
    cols: {
      type: Number,
      default: 10
    },
    autosize: {
      type: Boolean,
      default: false
    },
    ukTooltip: {
      type: Object,
      default: null
    },
    focus: {
      type: Function,
      default: null
    },
    blur: {
      type: Function,
      default: null
    },
    change: {
      type: Function,
      default: null
    },
    keyUp: {
      type: Function,
      default: null
    },
    validator: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    txtFocused: false
  }),
  computed: {
    modeClass() {
      return this.$props.mode === 'outline' ? 'sc-textarea-outline' : '';
    },

    dangerClass() {
      return this.$props.errorState ? 'uk-form-danger' : '';
    },

    successClass() {
      return this.$props.successState ? 'uk-form-success' : '';
    }

  },

  mounted() {
    var self = this;

    if (this.ukTooltip) {
      UIkit.tooltip(self.$refs.teaxtarea, self.ukTooltip);
    }
  },

  methods: {
    txtBlur() {
      this.txtFocused = false;

      if (this.blur) {
        this.blur();
      }

      if (this.validator) {
        this.validator.$touch();
      }

      this.$emit('blur');
    },

    txtFocus() {
      this.txtFocused = true;

      if (this.focus) {
        this.focus();
      }

      this.$emit('focus');
    },

    txtChange() {
      if (this.change) {
        this.change();
      }

      this.$emit('change');
    },

    txtKeyUp() {
      if (this.keyUp) {
        this.keyUp();
      }

      this.$emit('keyUp');
    }

  }
});
// CONCATENATED MODULE: ./components/Textarea.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Textareavue_type_script_lang_js_ = (Textareavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Textarea.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Textareavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6dc63d6a"
  
)

/* harmony default export */ var Textarea = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/forms/regular_elements.vue?vue&type=template&id=42dd79db&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_vm._ssrNode("<div data-uk-grid class=\"uk-child-width-1-2@l uk-grid\">", "</div>", [_vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardBody', [_c('h5', {
    staticClass: "uk-heading-line"
  }, [_c('span', [_vm._v("Form Inputs")])]), _vm._v(" "), _c('form', [_c('fieldset', {
    staticClass: "uk-fieldset"
  }, [_c('legend', {
    staticClass: "uk-legend"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tLegend\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin"
  }, [_c('ScInput', {
    attrs: {
      "placeholder": "Input ..."
    },
    model: {
      value: _vm.inputA,
      callback: function ($$v) {
        _vm.inputA = $$v;
      },
      expression: "inputA"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-margin"
  }, [_c('ScTextarea', {
    attrs: {
      "placeholder": "Textarea ..."
    },
    model: {
      value: _vm.textareaA,
      callback: function ($$v) {
        _vm.textareaA = $$v;
      },
      expression: "textareaA"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-margin"
  }, [_c('ScTextarea', {
    attrs: {
      "placeholder": "Autosize textarea ...",
      "autosize": true,
      "rows": 3
    },
    model: {
      value: _vm.textareaB,
      callback: function ($$v) {
        _vm.textareaB = $$v;
      },
      expression: "textareaB"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-margin"
  }, [_c('ScTextarea', {
    attrs: {
      "placeholder": "Autosize textarea ...",
      "autosize": true,
      "rows": 3
    },
    model: {
      value: _vm.textareaF,
      callback: function ($$v) {
        _vm.textareaF = $$v;
      },
      expression: "textareaF"
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "sc-button sc-button-small uk-margin-small-top",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.updateTextarea();
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\tUpdate Content\n\t\t\t\t\t\t\t\t\t\t")])], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-margin"
  }, [_c('select', {
    staticClass: "uk-select"
  }, [_c('option', [_vm._v("Option 01")]), _vm._v(" "), _c('option', [_vm._v("Option 02")])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "uk-child-width-expand@xl uk-grid-divider uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', [_c('p', {
    staticClass: "uk-margin-small-bottom"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tRadio boxes (CSS)\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "uk-grid-small uk-child-width-auto uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('label', [_c('input', {
    staticClass: "uk-radio",
    attrs: {
      "type": "radio",
      "name": "radio2"
    }
  }), _vm._v("A")]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "uk-radio",
    attrs: {
      "type": "radio",
      "name": "radio2",
      "checked": ""
    }
  }), _vm._v("B")]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "uk-radio",
    attrs: {
      "type": "radio",
      "name": "radio2c",
      "disabled": ""
    }
  }), _vm._v("C")]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "uk-radio",
    attrs: {
      "type": "radio",
      "name": "radio2d",
      "checked": "",
      "disabled": ""
    }
  }), _vm._v("D\n\t\t\t\t\t\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c('div', [_c('p', {
    staticClass: "uk-margin-small-bottom"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tCheckboxes (CSS)\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "uk-grid-small uk-child-width-auto uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('label', [_c('input', {
    staticClass: "uk-checkbox",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v("A")]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "uk-checkbox",
    attrs: {
      "type": "checkbox"
    }
  }), _vm._v("B")]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "uk-checkbox",
    attrs: {
      "type": "checkbox",
      "disabled": ""
    }
  }), _vm._v("C")]), _vm._v(" "), _c('label', [_c('input', {
    staticClass: "uk-checkbox",
    attrs: {
      "type": "checkbox",
      "checked": "",
      "disabled": ""
    }
  }), _vm._v("D")])])]), _vm._v(" "), _c('div', [_c('p', {
    staticClass: "uk-margin-mini-bottom"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tSwitch (CSS)\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', [_c('input', {
    staticClass: "sc-switch-input",
    attrs: {
      "id": "switch-css",
      "type": "checkbox"
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "sc-switch-label",
    attrs: {
      "for": "switch-css"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tSwitch\n\t\t\t\t\t\t\t\t\t\t\t\t\t"), _c('span', {
    staticClass: "sc-switch-toggle-on"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tOn\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
    staticClass: "sc-switch-toggle-off"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tOff\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])])])])])])])])], 1), _vm._ssrNode(" "), _c('ScCard', {
    staticClass: "uk-margin-top"
  }, [_c('ScCardBody', [_c('h5', {
    staticClass: "uk-heading-line"
  }, [_c('span', [_vm._v("Outlined Form Inputs")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-child-width-1-2@s uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', [_c('ScInput', {
    attrs: {
      "mode": "outline"
    },
    model: {
      value: _vm.inputB,
      callback: function ($$v) {
        _vm.inputB = $$v;
      },
      expression: "inputB"
    }
  }, [_c('label', [_vm._v("Label")])])], 1), _vm._v(" "), _c('div', [_c('ScTextarea', {
    attrs: {
      "rows": 5,
      "mode": "outline"
    },
    model: {
      value: _vm.textareaC,
      callback: function ($$v) {
        _vm.textareaC = $$v;
      },
      expression: "textareaC"
    }
  }, [_c('label', [_vm._v("Label")])])], 1), _vm._v(" "), _c('div', [_c('ScInput', {
    attrs: {
      "placeholder": "Input ...",
      "mode": "outline"
    },
    model: {
      value: _vm.inputC,
      callback: function ($$v) {
        _vm.inputC = $$v;
      },
      expression: "inputC"
    }
  })], 1), _vm._v(" "), _c('div', [_c('ScTextarea', {
    attrs: {
      "placeholder": "Textarea ...",
      "mode": "outline",
      "rows": 5
    },
    model: {
      value: _vm.textareaD,
      callback: function ($$v) {
        _vm.textareaD = $$v;
      },
      expression: "textareaD"
    }
  })], 1), _vm._v(" "), _c('div', [_c('ScInput', {
    attrs: {
      "placeholder": "Input ...",
      "error-state": true,
      "mode": "outline"
    },
    model: {
      value: _vm.inputD,
      callback: function ($$v) {
        _vm.inputD = $$v;
      },
      expression: "inputD"
    }
  }, [_c('label', [_vm._v("Label")])])], 1), _vm._v(" "), _c('div', [_c('ScInput', {
    attrs: {
      "placeholder": "Input ...",
      "success-state": true,
      "mode": "outline"
    },
    model: {
      value: _vm.inputE,
      callback: function ($$v) {
        _vm.inputE = $$v;
      },
      expression: "inputE"
    }
  }, [_c('label', [_vm._v("Label")])])], 1)])])], 1), _vm._ssrNode(" "), _c('ScCard', {
    staticClass: "uk-margin-top"
  }, [_c('ScCardBody', [_c('h5', {
    staticClass: "uk-heading-line"
  }, [_c('span', [_vm._v("Help text")])]), _vm._v(" "), _c('form', [_c('div', {
    staticClass: "uk-margin"
  }, [_c('ScInput', {
    attrs: {
      "extra-classes": "uk-form-width-medium"
    },
    model: {
      value: _vm.inputF,
      callback: function ($$v) {
        _vm.inputF = $$v;
      },
      expression: "inputF"
    }
  }, [_c('label', [_vm._v("Label")]), _vm._v(" "), _c('span', {
    staticClass: "uk-form-help-inline uk-visible@l",
    attrs: {
      "slot": "help-inline"
    },
    slot: "help-inline"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\tThe "), _c('code', [_vm._v(".uk-form-help-inline")]), _vm._v(" class creates spacing to the left.\n\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('span', {
    staticClass: "uk-form-help-block uk-hidden@l"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tThe "), _c('code', [_vm._v(".uk-form-help-inline")]), _vm._v(" class creates spacing to the left.\n\t\t\t\t\t\t\t\t\t")])], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-top"
  }, [_c('ScTextarea', {
    attrs: {
      "placeholder": "Textarea",
      "rows": 5,
      "cols": 30,
      "extra-classes": "uk-form-width-large"
    },
    model: {
      value: _vm.textareaE,
      callback: function ($$v) {
        _vm.textareaE = $$v;
      },
      expression: "textareaE"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "uk-form-help-block"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tThe "), _c('code', [_vm._v(".uk-form-help-block")]), _vm._v(" class creates an associated paragraph.\n\t\t\t\t\t\t\t\t\t")])], 1)])])], 1), _vm._ssrNode(" "), _c('ScCard', {
    staticClass: "uk-margin-top"
  }, [_c('ScCardBody', [_c('h5', {
    staticClass: "uk-heading-line"
  }, [_c('span', [_vm._v("Icons")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-child-width-1-2@s uk-flex uk-flex-bottom uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', [_c('ScInput', {
    attrs: {
      "error-state": true,
      "placeholder": "form-danger"
    },
    model: {
      value: _vm.inputG,
      callback: function ($$v) {
        _vm.inputG = $$v;
      },
      expression: "inputG"
    }
  }, [_c('span', {
    staticClass: "uk-form-icon uk-form-icon-flip mdi mdi-alert-circle",
    attrs: {
      "slot": "icon"
    },
    slot: "icon"
  })])], 1), _vm._v(" "), _c('div', [_c('ScInput', {
    attrs: {
      "success-state": true
    },
    model: {
      value: _vm.inputH,
      callback: function ($$v) {
        _vm.inputH = $$v;
      },
      expression: "inputH"
    }
  }, [_c('label', [_vm._v("form-success")]), _vm._v(" "), _c('span', {
    staticClass: "uk-form-icon uk-form-icon-flip mdi mdi-thumb-up sc-form-icon",
    attrs: {
      "slot": "icon"
    },
    slot: "icon"
  })])], 1), _vm._v(" "), _c('div', [_c('ScInput', {
    model: {
      value: _vm.inputI,
      callback: function ($$v) {
        _vm.inputI = $$v;
      },
      expression: "inputI"
    }
  }, [_c('span', {
    staticClass: "uk-form-icon",
    attrs: {
      "slot": "icon",
      "data-uk-icon": "icon: user"
    },
    slot: "icon"
  })])], 1), _vm._v(" "), _c('div', [_c('ScInput', {
    model: {
      value: _vm.inputJ,
      callback: function ($$v) {
        _vm.inputJ = $$v;
      },
      expression: "inputJ"
    }
  }, [_c('span', {
    staticClass: "uk-form-icon uk-form-icon-flip",
    attrs: {
      "slot": "icon",
      "data-uk-icon": "icon: lock"
    },
    slot: "icon"
  })])], 1), _vm._v(" "), _c('div', [_c('ScInput', {
    model: {
      value: _vm.inputK,
      callback: function ($$v) {
        _vm.inputK = $$v;
      },
      expression: "inputK"
    }
  }, [_c('label', [_vm._v("Clickable icon")]), _vm._v(" "), _c('a', {
    staticClass: "uk-form-icon",
    attrs: {
      "slot": "icon",
      "href": "javascript:void(0)",
      "data-uk-icon": "icon: pencil"
    },
    slot: "icon"
  })])], 1), _vm._v(" "), _c('div', [_c('ScInput', {
    attrs: {
      "placeholder": "clickable"
    },
    model: {
      value: _vm.inputL,
      callback: function ($$v) {
        _vm.inputL = $$v;
      },
      expression: "inputL"
    }
  }, [_c('a', {
    staticClass: "uk-form-icon uk-form-icon-flip",
    attrs: {
      "slot": "icon",
      "href": "javascript:void(0)",
      "data-uk-icon": "icon: link"
    },
    slot: "icon"
  })])], 1)])])], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardBody', [_c('h5', {
    staticClass: "uk-heading-line"
  }, [_c('span', [_vm._v("States modifiers")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-child-width-1-2@s uk-child-width-1-3@m uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', [_c('ScInput', {
    attrs: {
      "error-state": true,
      "placeholder": "danger state"
    },
    model: {
      value: _vm.inputM,
      callback: function ($$v) {
        _vm.inputM = $$v;
      },
      expression: "inputM"
    }
  })], 1), _vm._v(" "), _c('div', [_c('ScInput', {
    attrs: {
      "success-state": true,
      "placeholder": "success state"
    },
    model: {
      value: _vm.inputN,
      callback: function ($$v) {
        _vm.inputN = $$v;
      },
      expression: "inputN"
    }
  })], 1), _vm._v(" "), _c('div', [_c('ScInput', {
    attrs: {
      "placeholder": "disabled",
      "disabled": true
    },
    model: {
      value: _vm.inputO,
      callback: function ($$v) {
        _vm.inputO = $$v;
      },
      expression: "inputO"
    }
  })], 1), _vm._v(" "), _c('div', [_c('select', {
    staticClass: "uk-select",
    attrs: {
      "disabled": "",
      "data-sc-input": ""
    }
  }, [_c('option', [_vm._v("select disabled")]), _vm._v(" "), _c('option', [_vm._v("Option 02")])])])])])], 1), _vm._ssrNode(" "), _c('ScCard', {
    staticClass: "uk-margin-top"
  }, [_c('ScCardBody', [_c('h5', {
    staticClass: "uk-heading-line"
  }, [_c('span', [_vm._v("Size modifiers")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin"
  }, [_c('ScInput', {
    attrs: {
      "extra-classes": "uk-form-large"
    },
    model: {
      value: _vm.inputP,
      callback: function ($$v) {
        _vm.inputP = $$v;
      },
      expression: "inputP"
    }
  }, [_c('label', {
    staticClass: "uk-label-large"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tform-large\n\t\t\t\t\t\t\t\t\t")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-margin"
  }, [_c('ScInput', {
    model: {
      value: _vm.inputQ,
      callback: function ($$v) {
        _vm.inputQ = $$v;
      },
      expression: "inputQ"
    }
  }, [_c('label', [_vm._v("default")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-margin"
  }, [_c('ScInput', {
    attrs: {
      "extra-classes": "uk-form-small"
    },
    model: {
      value: _vm.inputR,
      callback: function ($$v) {
        _vm.inputR = $$v;
      },
      expression: "inputR"
    }
  }, [_c('label', {
    staticClass: "uk-label-small"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tform-small\n\t\t\t\t\t\t\t\t\t")])])], 1), _vm._v(" "), _c('h5', {
    staticClass: "uk-heading-line uk-margin-large-top"
  }, [_c('span', [_vm._v("Width modifiers")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin"
  }, [_c('form', {
    staticClass: "uk-margin-medium-top"
  }, [_c('div', {
    staticClass: "uk-margin-small"
  }, [_c('ScInput', {
    attrs: {
      "placeholder": "uk-width-1-1",
      "extra-classes": "uk-width-1-1"
    },
    model: {
      value: _vm.inputS,
      callback: function ($$v) {
        _vm.inputS = $$v;
      },
      expression: "inputS"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-small"
  }, [_c('ScInput', {
    attrs: {
      "placeholder": "large",
      "extra-classes": "uk-form-width-large"
    },
    model: {
      value: _vm.inputT,
      callback: function ($$v) {
        _vm.inputT = $$v;
      },
      expression: "inputT"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-small"
  }, [_c('ScInput', {
    attrs: {
      "placeholder": "medium",
      "extra-classes": "uk-form-width-medium"
    },
    model: {
      value: _vm.inputU,
      callback: function ($$v) {
        _vm.inputU = $$v;
      },
      expression: "inputU"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-small"
  }, [_c('ScInput', {
    attrs: {
      "placeholder": "small",
      "extra-classes": "uk-form-width-small"
    },
    model: {
      value: _vm.inputW,
      callback: function ($$v) {
        _vm.inputW = $$v;
      },
      expression: "inputW"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-small"
  }, [_c('ScInput', {
    attrs: {
      "placeholder": "xsmall",
      "extra-classes": "uk-form-width-xsmall"
    },
    model: {
      value: _vm.inputX,
      callback: function ($$v) {
        _vm.inputX = $$v;
      },
      expression: "inputX"
    }
  })], 1)])]), _vm._v(" "), _c('h5', {
    staticClass: "uk-heading-line uk-margin-large-top"
  }, [_c('span', [_vm._v("Form and grid")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin"
  }, [_c('form', {
    staticClass: "uk-grid-small uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', {
    staticClass: "uk-width-1-1"
  }, [_c('ScInput', {
    attrs: {
      "placeholder": "50%"
    },
    model: {
      value: _vm.inputY,
      callback: function ($$v) {
        _vm.inputY = $$v;
      },
      expression: "inputY"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-width-1-2@s"
  }, [_c('ScInput', {
    attrs: {
      "placeholder": "50%"
    },
    model: {
      value: _vm.inputZ,
      callback: function ($$v) {
        _vm.inputZ = $$v;
      },
      expression: "inputZ"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-width-1-4@s"
  }, [_c('ScInput', {
    attrs: {
      "placeholder": "25%"
    },
    model: {
      value: _vm.inputAA,
      callback: function ($$v) {
        _vm.inputAA = $$v;
      },
      expression: "inputAA"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-width-1-4@s"
  }, [_c('ScInput', {
    attrs: {
      "placeholder": "25%"
    },
    model: {
      value: _vm.inputAB,
      callback: function ($$v) {
        _vm.inputAB = $$v;
      },
      expression: "inputAB"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-width-1-2@s"
  }, [_c('ScInput', {
    attrs: {
      "placeholder": "50%"
    },
    model: {
      value: _vm.inputAC,
      callback: function ($$v) {
        _vm.inputAC = $$v;
      },
      expression: "inputAC"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-width-1-2@s"
  }, [_c('ScInput', {
    attrs: {
      "placeholder": "50%"
    },
    model: {
      value: _vm.inputAD,
      callback: function ($$v) {
        _vm.inputAD = $$v;
      },
      expression: "inputAD"
    }
  })], 1)])])])], 1), _vm._ssrNode(" "), _c('ScCard', {
    staticClass: "uk-margin-top"
  }, [_c('ScCardBody', [_c('h5', {
    staticClass: "uk-heading-line"
  }, [_c('span', [_vm._v("Horizontal form")])]), _vm._v(" "), _c('form', {
    staticClass: "uk-form-horizontal"
  }, [_c('div', {
    staticClass: "uk-margin"
  }, [_c('label', {
    staticClass: "uk-form-label",
    attrs: {
      "for": "form-h-text"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tText\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "uk-form-controls"
  }, [_c('ScInput', {
    attrs: {
      "id": "form-h-text",
      "placeholder": "Some text..."
    },
    model: {
      value: _vm.inputAE,
      callback: function ($$v) {
        _vm.inputAE = $$v;
      },
      expression: "inputAE"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin"
  }, [_c('label', {
    staticClass: "uk-form-label",
    attrs: {
      "for": "form-h-select"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tSelect\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "uk-form-controls"
  }, [_c('select', {
    staticClass: "uk-select",
    attrs: {
      "id": "form-h-select",
      "data-sc-input": ""
    }
  }, [_c('option', [_vm._v("Option 01")]), _vm._v(" "), _c('option', [_vm._v("Option 02")])])])])])])], 1), _vm._ssrNode(" "), _c('ScCard', {
    staticClass: "uk-margin-top"
  }, [_c('ScCardBody', [_c('h5', {
    staticClass: "uk-heading-line"
  }, [_c('span', [_vm._v("Custom select")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-child-width-1-auto@m uk-grid uk-flex-middle",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', [_c('div', {
    attrs: {
      "data-uk-form-custom": "target: true"
    }
  }, [_c('select', [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tOption 01\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tOption 02\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tOption 03\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "4"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tOption 04\n\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('span')])]), _vm._v(" "), _c('div', [_c('div', {
    attrs: {
      "data-uk-form-custom": "target: > * > span:last-child"
    }
  }, [_c('select', [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tOption 01\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tOption 02\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tOption 03\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "4"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tOption 04\n\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('span', {
    staticClass: "uk-link"
  }, [_c('span', {
    attrs: {
      "data-uk-icon": "icon: pencil"
    }
  }), _vm._v(" "), _c('span')])])]), _vm._v(" "), _c('div', [_c('div', {
    attrs: {
      "data-uk-form-custom": "target: > * > span:first-child"
    }
  }, [_c('select', [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tPlease select...\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tOption 01\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tOption 02\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tOption 03\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "4"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tOption 04\n\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('button', {
    staticClass: "sc-button sc-button-default sc-button-outline",
    attrs: {
      "type": "button"
    }
  }, [_c('span'), _vm._v(" "), _c('span', {
    attrs: {
      "data-uk-icon": "icon: chevron-down"
    }
  })])])]), _vm._v(" "), _c('div', [_c('div', {
    attrs: {
      "data-uk-form-custom": "target: > * > span:first-child"
    }
  }, [_c('select', [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tSelect user...\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tUser 01\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tUser 02\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tUser 03\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "4"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tUser 04\n\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('button', {
    staticClass: "sc-button sc-button-default sc-button-outline sc-button-flex sc-button-icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', {
    staticClass: "uk-margin-small-left uk-margin-small-right"
  }), _vm._v(" "), _c('span', {
    staticClass: "mdi mdi-account-badge-outline uk-flex-first"
  }), _vm._v(" "), _c('span', {
    attrs: {
      "data-uk-icon": "icon: chevron-down"
    }
  })])])])])])], 1), _vm._ssrNode(" "), _c('ScCard', {
    staticClass: "uk-margin-top"
  }, [_c('ScCardBody', [_c('h5', {
    staticClass: "uk-heading-line"
  }, [_c('span', [_vm._v("Custom controls")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-child-width-auto@m uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', [_c('div', {
    attrs: {
      "data-uk-form-custom": ""
    }
  }, [_c('input', {
    attrs: {
      "type": "file"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "uk-button uk-button-default",
    attrs: {
      "type": "button",
      "tabindex": "-1"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\tSelect\n\t\t\t\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c('div', [_c('span', {
    staticClass: "uk-text-middle"
  }, [_vm._v("Here is a text")]), _vm._v(" "), _c('div', {
    attrs: {
      "data-uk-form-custom": ""
    }
  }, [_c('input', {
    attrs: {
      "type": "file"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "uk-link"
  }, [_vm._v("upload")])])]), _vm._v(" "), _c('div', [_c('div', {
    attrs: {
      "data-uk-form-custom": "target: true"
    }
  }, [_c('input', {
    attrs: {
      "type": "file"
    }
  }), _vm._v(" "), _c('input', {
    staticClass: "uk-visible@s uk-input uk-form-width-medium",
    attrs: {
      "type": "text",
      "placeholder": "Select file",
      "disabled": ""
    }
  }), _vm._v(" "), _c('input', {
    staticClass: "uk-hidden@s uk-input uk-form-width-small",
    attrs: {
      "type": "text",
      "placeholder": "Select file",
      "disabled": ""
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "uk-button uk-button-default"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t\t\t")])])])])], 1)], 2)], 2)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/forms/regular_elements.vue?vue&type=template&id=42dd79db&

// EXTERNAL MODULE: ./assets/js/utils.js + 5 modules
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./components/Input.vue + 4 modules
var Input = __webpack_require__(122);

// EXTERNAL MODULE: ./components/Textarea.vue + 4 modules
var Textarea = __webpack_require__(123);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/forms/regular_elements.vue?vue&type=script&lang=js&



const {
  sentence
} = utils["c" /* scFakeData */];
/* harmony default export */ var regular_elementsvue_type_script_lang_js_ = ({
  name: 'FormsRegularElements',
  components: {
    ScInput: Input["a" /* default */],
    ScTextarea: Textarea["a" /* default */]
  },
  data: () => ({
    'inputA': '',
    'inputB': '',
    'inputC': '',
    'inputD': '',
    'inputE': '',
    'inputF': '',
    'inputG': '',
    'inputH': '',
    'inputI': '',
    'inputJ': '',
    'inputK': '',
    'inputL': '',
    'inputM': '',
    'inputN': '',
    'inputO': '',
    'inputP': '',
    'inputQ': '',
    'inputR': '',
    'inputS': '',
    'inputT': '',
    'inputU': '',
    'inputW': '',
    'inputX': '',
    'inputY': '',
    'inputZ': '',
    'inputAA': '',
    'inputAB': '',
    'inputAC': '',
    'inputAD': '',
    'inputAE': '',
    'textareaA': '',
    'textareaB': '',
    'textareaC': '',
    'textareaD': '',
    'textareaE': '',
    'textareaF': ''
  }),
  methods: {
    updateTextarea() {
      this.textareaF = sentence({
        words: Math.floor(Math.random() * 220 + 100)
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/forms/regular_elements.vue?vue&type=script&lang=js&
 /* harmony default export */ var forms_regular_elementsvue_type_script_lang_js_ = (regular_elementsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/forms/regular_elements.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  forms_regular_elementsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6200839e"
  
)

/* harmony default export */ var regular_elements = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=regular_elements.js.map