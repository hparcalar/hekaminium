exports.ids = [105];
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
  "837b940c"
  
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
  "0a37958c"
  
)

/* harmony default export */ var Textarea = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/mailbox/compose.vue?vue&type=template&id=36887ad2&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "uk-height-1-1"
  }, [_c('transition', {
    attrs: {
      "name": "scale-up",
      "appear": ""
    }
  }, [_c('div', {
    staticClass: "sc-message-compose sc-message-compose-single"
  }, [_c('div', {
    staticClass: "uk-flex uk-height-1-1 sc-message-compose-wrapper"
  }, [_c('div', {
    staticClass: "uk-width-expand uk-flex uk-flex-column"
  }, [_c('div', {
    staticClass: "sc-message-head"
  }, [_c('client-only', [_c('Select2', {
    attrs: {
      "options": _vm.emails,
      "settings": {
        'width': '100%',
        'placeholder': 'Insert valid email address...',
        'tags': true,
        'tokenSeparators': [',', ' '],
        'createTag': 'emailAddress'
      },
      "multiple": ""
    },
    model: {
      value: _vm.message.to,
      callback: function ($$v) {
        _vm.$set(_vm.message, "to", $$v);
      },
      expression: "message.to"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-top"
  }, [_c('ScInput', {
    model: {
      value: _vm.message.subject,
      callback: function ($$v) {
        _vm.$set(_vm.message, "subject", $$v);
      },
      expression: "message.subject"
    }
  }, [_c('label', [_vm._v("Subject")])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "sc-message-body"
  }, [_c('ScTextarea', {
    attrs: {
      "cols": 30,
      "rows": 4
    },
    model: {
      value: _vm.message.content,
      callback: function ($$v) {
        _vm.$set(_vm.message, "content", $$v);
      },
      expression: "message.content"
    }
  }, [_c('label', [_vm._v("Message")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "sc-message-footer uk-margin-top"
  }, [_c('div', [_c('span', {
    staticClass: "uk-display-block uk-margin-small-bottom uk-text-muted uk-text-medium"
  }, [_vm._v("Attachments:")]), _vm._v(" "), _c('ul', {
    staticClass: "sc-message-attachments"
  }, [_c('li', {
    staticClass: "sc-flex-no-shrink"
  }, [_c('div', {
    staticClass: "sc-attachment"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("file1.png "), _c('span', [_vm._v("(241KB)")])]), _c('a', {
    staticClass: "mdi mdi-close sc-attachment-remove",
    attrs: {
      "href": "#"
    }
  })])]), _vm._v(" "), _c('li', {
    staticClass: "sc-flex-no-shrink"
  }, [_c('div', {
    staticClass: "sc-attachment"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("file2.pdf "), _c('span', [_vm._v("(1240KB)")])]), _c('a', {
    staticClass: "mdi mdi-close sc-attachment-remove",
    attrs: {
      "href": "#"
    }
  })])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', [_c('button', {
    staticClass: "sc-button sc-button-primary"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\tSend\r\n\t\t\t\t\t\t\t\t")])])])]), _vm._v(" "), _c('div', [_c('a', {
    staticClass: "uk-margin-left mdi mdi-close sc-icon-square",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function ($event) {
        return _vm.backToMailbox($event);
      }
    }
  })])])])])], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/pages/mailbox/compose.vue?vue&type=template&id=36887ad2&

// EXTERNAL MODULE: ./components/Input.vue + 4 modules
var Input = __webpack_require__(122);

// EXTERNAL MODULE: ./components/Textarea.vue + 4 modules
var Textarea = __webpack_require__(123);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/mailbox/compose.vue?vue&type=script&lang=js&


/* harmony default export */ var composevue_type_script_lang_js_ = ({
  name: 'PagesMailboxCompose',
  components: {
    Select2:  false ? undefined : null,
    ScInput: Input["a" /* default */],
    ScTextarea: Textarea["a" /* default */]
  },
  data: () => ({
    message: {
      to: [],
      subject: '',
      content: ''
    },
    emails: [{
      id: '1',
      text: 'ldare@gmail.com'
    }, {
      id: '2',
      text: 'jonathon.mueller@yundt.com'
    }, {
      id: '3',
      text: 'icummings@gmail.com'
    }]
  }),
  methods: {
    backToMailbox(e) {
      e.preventDefault();
      this.$router.push({
        name: 'pages-mailbox'
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/pages/mailbox/compose.vue?vue&type=script&lang=js&
 /* harmony default export */ var mailbox_composevue_type_script_lang_js_ = (composevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/pages/mailbox/compose.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mailbox_composevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3e5a2114"
  
)

/* harmony default export */ var compose = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=compose.js.map