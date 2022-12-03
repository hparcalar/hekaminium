exports.ids = [63];
exports.modules = {

/***/ 127:
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
  "7039386c"
  
)

/* harmony default export */ var Input = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 128:
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
var autosize = __webpack_require__(104);

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
  "d313152c"
  
)

/* harmony default export */ var Textarea = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/forms/examples/contact_forms.vue?vue&type=template&id=d22d4c84&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_vm._ssrNode("<div data-uk-grid class=\"uk-child-width-1-2@m\">", "</div>", [_vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardHeader', {
    attrs: {
      "separator": ""
    }
  }, [_c('div', {
    staticClass: "uk-flex uk-flex-middle"
  }, [_c('i', {
    staticClass: "mdi mdi-message-outline uk-margin-medium-right sc-icon-24"
  }), _vm._v(" "), _c('ScCardTitle', [_vm._v("\n\t\t\t\t\t\t\t\t\tContact Us\n\t\t\t\t\t\t\t\t")])], 1), _vm._v(" "), _c('ScCardMeta', {
    staticClass: "uk-text-medium"
  }, [_vm._v("\n\t\t\t\t\t\t\t\tWe will respond as soon as possible, generally within a few hours.\n\t\t\t\t\t\t\t")])], 1), _vm._v(" "), _c('ScCardBody', [_c('form', {
    staticClass: "uk-form-stacked"
  }, [_c('div', {
    staticClass: "uk-child-width-1-2@m uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', [_c('ScInput', {
    model: {
      value: _vm.userData.form1.name,
      callback: function ($$v) {
        _vm.$set(_vm.userData.form1, "name", $$v);
      },
      expression: "userData.form1.name"
    }
  }, [_c('label', [_vm._v("Name")])])], 1), _vm._v(" "), _c('div', [_c('ScInput', {
    attrs: {
      "error-state": true
    },
    model: {
      value: _vm.userData.form1.email,
      callback: function ($$v) {
        _vm.$set(_vm.userData.form1, "email", $$v);
      },
      expression: "userData.form1.email"
    }
  }, [_c('label', [_vm._v("Email")])]), _vm._v(" "), _c('span', {
    staticClass: "sc-form-error-block"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\tThis field is required.\n\t\t\t\t\t\t\t\t\t\t")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin"
  }, [_c('ScInput', {
    model: {
      value: _vm.userData.form1.subject,
      callback: function ($$v) {
        _vm.$set(_vm.userData.form1, "subject", $$v);
      },
      expression: "userData.form1.subject"
    }
  }, [_c('label', [_vm._v("Subject")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-margin"
  }, [_c('ScTextarea', {
    attrs: {
      "cols": 30,
      "rows": 6
    },
    model: {
      value: _vm.userData.form1.message,
      callback: function ($$v) {
        _vm.$set(_vm.userData.form1, "message", $$v);
      },
      expression: "userData.form1.message"
    }
  }, [_c('label', [_vm._v("Message")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-medium-top"
  }, [_c('button', {
    staticClass: "sc-button sc-button-primary"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tSend message\n\t\t\t\t\t\t\t\t\t")])])])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardHeader', {
    staticClass: "sc-padding"
  }, [_c('div', {
    staticClass: "sc-padding-medium sc-round uk-flex uk-flex-middle sc-border md-bg-grey-100"
  }, [_c('i', {
    staticClass: "mdi mdi-message-outline uk-margin-medium-right sc-icon-24"
  }), _vm._v(" "), _c('ScCardTitle', [_vm._v("\n\t\t\t\t\t\t\t\t\tContact Us\n\t\t\t\t\t\t\t\t")])], 1)]), _vm._v(" "), _c('ScCardBody', [_c('form', {
    staticClass: "uk-form-horizontal"
  }, [_c('div', {
    staticClass: "sc-padding-small"
  }, [_c('label', {
    staticClass: "uk-form-label",
    attrs: {
      "for": "f-h-name"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tName"), _c('sup', [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-form-controls"
  }, [_c('ScInput', {
    attrs: {
      "id": "f-h-name",
      "mode": "outline"
    },
    model: {
      value: _vm.userData.form2.name,
      callback: function ($$v) {
        _vm.$set(_vm.userData.form2, "name", $$v);
      },
      expression: "userData.form2.name"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-medium-top sc-padding-small"
  }, [_c('label', {
    staticClass: "uk-form-label",
    attrs: {
      "for": "f-h-email"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tEmail"), _c('sup', [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-form-controls"
  }, [_c('ScInput', {
    attrs: {
      "id": "f-h-email",
      "mode": "outline"
    },
    model: {
      value: _vm.userData.form2.email,
      callback: function ($$v) {
        _vm.$set(_vm.userData.form2, "email", $$v);
      },
      expression: "userData.form2.email"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-medium-top sc-padding-small"
  }, [_c('label', {
    staticClass: "uk-form-label",
    attrs: {
      "for": "f-h-subject"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tSubject\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "uk-form-controls"
  }, [_c('ScInput', {
    attrs: {
      "id": "f-h-subject",
      "mode": "outline"
    },
    model: {
      value: _vm.userData.form2.subject,
      callback: function ($$v) {
        _vm.$set(_vm.userData.form2, "subject", $$v);
      },
      expression: "userData.form2.subject"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-medium-top sc-padding-small"
  }, [_c('label', {
    staticClass: "uk-form-label",
    attrs: {
      "for": "f-h-message"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tMessage\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "uk-form-controls"
  }, [_c('ScTextarea', {
    attrs: {
      "id": "f-h-message",
      "cols": 30,
      "rows": 6,
      "mode": "outline"
    },
    model: {
      value: _vm.userData.form2.message,
      callback: function ($$v) {
        _vm.$set(_vm.userData.form2, "message", $$v);
      },
      expression: "userData.form2.message"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-medium-top sc-padding-small"
  }, [_c('div', {
    staticClass: "uk-form-controls"
  }, [_c('button', {
    staticClass: "sc-button sc-button-primary"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\tSend message\n\t\t\t\t\t\t\t\t\t\t")])])])])])], 1)], 1)], 2)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/forms/examples/contact_forms.vue?vue&type=template&id=d22d4c84&

// EXTERNAL MODULE: ./components/Input.vue + 4 modules
var Input = __webpack_require__(127);

// EXTERNAL MODULE: ./components/Textarea.vue + 4 modules
var Textarea = __webpack_require__(128);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/forms/examples/contact_forms.vue?vue&type=script&lang=js&


/* harmony default export */ var contact_formsvue_type_script_lang_js_ = ({
  name: 'FormsExamplesContact',
  components: {
    ScInput: Input["a" /* default */],
    ScTextarea: Textarea["a" /* default */]
  },
  data: () => ({
    userData: {
      form1: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      form2: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  })
});
// CONCATENATED MODULE: ./pages/forms/examples/contact_forms.vue?vue&type=script&lang=js&
 /* harmony default export */ var examples_contact_formsvue_type_script_lang_js_ = (contact_formsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/forms/examples/contact_forms.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  examples_contact_formsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c04fbf24"
  
)

/* harmony default export */ var contact_forms = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact_forms.js.map