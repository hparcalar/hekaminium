exports.ids = [99];
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

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/invoices/new.vue?vue&type=template&id=1786a79c&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "uk-flex uk-flex-column uk-height-1-1"
  }, [_vm._ssrNode("<div class=\"uk-card-body uk-flex-1\">", "</div>", [_vm._ssrNode("<div class=\"uk-margin-medium-bottom sc-padding-left sc-padding-right\">", "</div>", [_vm._ssrNode("<p class=\"sc-text-semibold uk-margin-remove-bottom\">\n\t\t\t\t\tInvoice number:\n\t\t\t\t</p> "), _c('ScInput', {
    attrs: {
      "placeholder": "in format: xxx/xxxxxx/year"
    },
    model: {
      value: _vm.invoice.number,
      callback: function ($$v) {
        _vm.$set(_vm.invoice, "number", $$v);
      },
      expression: "invoice.number"
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"md-bg-grey-100 sc-padding\">", "</div>", [_vm._ssrNode("<div data-uk-grid class=\"uk-grid\">", "</div>", [_vm._ssrNode("<div class=\"uk-width-1-3@l\">", "</div>", [_vm._ssrNode("<p class=\"sc-text-semibold\">\n\t\t\t\t\t\t\tIssue date:\n\t\t\t\t\t\t</p> "), _c('ScInput', {
    directives: [{
      name: "flatpickr",
      rawName: "v-flatpickr"
    }],
    model: {
      value: _vm.invoice.date,
      callback: function ($$v) {
        _vm.$set(_vm.invoice, "date", $$v);
      },
      expression: "invoice.date"
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-width-2-3@l\">", "</div>", [_vm._ssrNode("<p class=\"sc-text-semibold\">\n\t\t\t\t\t\t\tDue date:\n\t\t\t\t\t\t</p> "), _vm._ssrNode("<div class=\"uk-flex sc-padding-small-top\">", "</div>", [_vm._ssrNode("<div class=\"uk-margin-right\">", "</div>", [_c('PrettyRadio', {
    staticClass: "p-radio",
    attrs: {
      "value": "7",
      "name": "p-radio-group"
    },
    model: {
      value: _vm.invoice.dueDate,
      callback: function ($$v) {
        _vm.$set(_vm.invoice, "dueDate", $$v);
      },
      expression: "invoice.dueDate"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t7 days\n\t\t\t\t\t\t\t\t")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-margin-right\">", "</div>", [_c('PrettyRadio', {
    staticClass: "p-radio",
    attrs: {
      "value": "14",
      "name": "p-radio-group"
    },
    model: {
      value: _vm.invoice.dueDate,
      callback: function ($$v) {
        _vm.$set(_vm.invoice, "dueDate", $$v);
      },
      expression: "invoice.dueDate"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t14 days\n\t\t\t\t\t\t\t\t")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('PrettyRadio', {
    staticClass: "p-radio",
    attrs: {
      "value": "21",
      "name": "p-radio-group"
    },
    model: {
      value: _vm.invoice.dueDate,
      callback: function ($$v) {
        _vm.$set(_vm.invoice, "dueDate", $$v);
      },
      expression: "invoice.dueDate"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t21 days\n\t\t\t\t\t\t\t\t")])], 1)], 2)], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"sc-padding\">", "</div>", [_vm._ssrNode("<div data-uk-grid class=\"uk-child-width-1-2@l uk-grid uk-grid-divider\">", "</div>", [_vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<p class=\"sc-text-semibold\">\n\t\t\t\t\t\t\tFrom:\n\t\t\t\t\t\t</p> "), _vm._ssrNode("<div class=\"uk-margin-medium-bottom\">", "</div>", [_c('ScInput', {
    model: {
      value: _vm.invoice.from.company,
      callback: function ($$v) {
        _vm.$set(_vm.invoice.from, "company", $$v);
      },
      expression: "invoice.from.company"
    }
  }, [_c('label', [_vm._v("Company Name")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-margin-medium-bottom\">", "</div>", [_c('ScInput', {
    model: {
      value: _vm.invoice.from.address1,
      callback: function ($$v) {
        _vm.$set(_vm.invoice.from, "address1", $$v);
      },
      expression: "invoice.from.address1"
    }
  }, [_c('label', [_vm._v("Address 1")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('ScInput', {
    model: {
      value: _vm.invoice.from.address2,
      callback: function ($$v) {
        _vm.$set(_vm.invoice.from, "address2", $$v);
      },
      expression: "invoice.from.address2"
    }
  }, [_c('label', [_vm._v("Address 2")])])], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<p class=\"sc-text-semibold\">\n\t\t\t\t\t\t\tTo:\n\t\t\t\t\t\t</p> "), _vm._ssrNode("<div class=\"uk-margin-medium-bottom\">", "</div>", [_c('ScInput', {
    model: {
      value: _vm.invoice.to.company,
      callback: function ($$v) {
        _vm.$set(_vm.invoice.to, "company", $$v);
      },
      expression: "invoice.to.company"
    }
  }, [_c('label', [_vm._v("Company Name")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-margin-medium-bottom\">", "</div>", [_c('ScInput', {
    model: {
      value: _vm.invoice.to.address1,
      callback: function ($$v) {
        _vm.$set(_vm.invoice.to, "address1", $$v);
      },
      expression: "invoice.to.address1"
    }
  }, [_c('label', [_vm._v("Address 1")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('ScInput', {
    model: {
      value: _vm.invoice.to.address2,
      callback: function ($$v) {
        _vm.$set(_vm.invoice.to, "address2", $$v);
      },
      expression: "invoice.to.address2"
    }
  }, [_c('label', [_vm._v("Address 2")])])], 1)], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"sc-padding md-bg-grey-100\">", "</div>", [_vm._ssrNode("<p class=\"sc-text-semibold uk-margin-remove\">\n\t\t\t\t\tItems:\n\t\t\t\t</p> "), _vm._l(_vm.invoice.items, function (item, index) {
    return _vm._ssrNode("<div class=\"uk-flex uk-flex-middle uk-margin-medium-top sc-padding-medium-top sc-border-top\">", "</div>", [_vm._ssrNode("<div data-uk-grid class=\"uk-flex-bottom uk-grid-small uk-grid uk-flex-1\">", "</div>", [_vm._ssrNode("<div class=\"uk-width-2-5@l\">", "</div>", [_c('ScInput', {
      attrs: {
        "extra-classes": "uk-form-small"
      },
      model: {
        value: item.description,
        callback: function ($$v) {
          _vm.$set(item, "description", $$v);
        },
        expression: "item.description"
      }
    }, [_c('label', {
      staticClass: "uk-label-small"
    }, [_vm._v("Description")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-width-1-5@l\">", "</div>", [_c('ScInput', {
      attrs: {
        "extra-classes": "uk-form-small"
      },
      model: {
        value: item.quantity,
        callback: function ($$v) {
          _vm.$set(item, "quantity", $$v);
        },
        expression: "item.quantity"
      }
    }, [_c('label', {
      staticClass: "uk-label-small"
    }, [_vm._v("Quantity")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-width-1-5@l\">", "</div>", [_c('ScInput', {
      attrs: {
        "extra-classes": "uk-form-small"
      },
      model: {
        value: item.rate,
        callback: function ($$v) {
          _vm.$set(item, "rate", $$v);
        },
        expression: "item.rate"
      }
    }, [_c('span', {
      staticClass: "uk-form-icon"
    }, [_c('i', {
      staticClass: "mdi mdi-currency-usd"
    })]), _vm._v(" "), _c('label', {
      staticClass: "uk-label-small"
    }, [_vm._v("Rate")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-width-1-5@l\">", "</div>", [_c('ScInput', {
      attrs: {
        "extra-classes": "uk-form-small",
        "read-only": true,
        "disabled": true
      },
      model: {
        value: item.amount,
        callback: function ($$v) {
          _vm.$set(item, "amount", $$v);
        },
        expression: "item.amount"
      }
    }, [_c('label', {
      staticClass: "uk-label-small"
    }, [_vm._v("Amount")])])], 1)], 2), _vm._ssrNode(" <div class=\"uk-margin-left\"><a href=\"javascript:void(0)\" class=\"sc-button sc-button-icon sc-button-outline sc-button-outline-square sc-button-outline-primary\"" + _vm._ssrStyle(null, null, {
      display: _vm.invoice.items.length === index + 1 ? '' : 'none'
    }) + "><i class=\"mdi mdi-plus\"></i></a> <a href=\"javascript:void(0)\" class=\"sc-button sc-button-icon sc-button-outline sc-button-outline-square sc-button-outline-danger\"" + _vm._ssrStyle(null, null, {
      display: _vm.invoice.items.length !== index + 1 ? '' : 'none'
    }) + "><i class=\"mdi mdi-trash-can-outline\"></i></a></div>")], 2);
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"sc-padding\">", "</div>", [_vm._ssrNode("<p class=\"sc-text-semibold\">\n\t\t\t\t\tNotes:\n\t\t\t\t</p> "), _c('ScTextarea', {
    attrs: {
      "placeholder": "Notes - any relevant information not already covered"
    },
    model: {
      value: _vm.invoice.notes,
      callback: function ($$v) {
        _vm.$set(_vm.invoice, "notes", $$v);
      },
      expression: "invoice.notes"
    }
  })], 2)], 2), _vm._ssrNode(" <div class=\"sc-padding-medium-ends sc-padding sc-border-top\"><button class=\"sc-button sc-button-primary\">\n\t\t\t\tSave Invoice\n\t\t\t</button></div>")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/pages/invoices/new.vue?vue&type=template&id=1786a79c&

// EXTERNAL MODULE: ./assets/js/utils.js + 5 modules
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./components/Input.vue + 4 modules
var Input = __webpack_require__(122);

// EXTERNAL MODULE: ./components/Textarea.vue + 4 modules
var Textarea = __webpack_require__(123);

// EXTERNAL MODULE: external "pretty-checkbox-vue/radio"
var radio_ = __webpack_require__(99);
var radio_default = /*#__PURE__*/__webpack_require__.n(radio_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/invoices/new.vue?vue&type=script&lang=js&

const {
  uniqueID
} = utils["d" /* scHelpers */];




if (false) {}

/* harmony default export */ var newvue_type_script_lang_js_ = ({
  name: 'PagesInvoicesNew',
  components: {
    ScInput: Input["a" /* default */],
    ScTextarea: Textarea["a" /* default */],
    PrettyRadio: radio_default.a
  },
  data: () => ({
    invoice: {
      number: '',
      date: '',
      dueDate: '',
      from: {
        company: '',
        address1: '',
        address2: ''
      },
      to: {
        company: '',
        address1: '',
        address2: ''
      },
      items: [{
        id: uniqueID(),
        description: '',
        quantity: '',
        rate: '',
        amount: '$0.00'
      }],
      notes: ''
    },
    prettyRadioGroupItems: {
      a: 'item 1',
      b: 'item 2',
      c: 'item 3'
    }
  }),
  watch: {
    'invoice.items': {
      handler: function (val, oldVal) {
        val.forEach(function (obj) {
          if (obj.quantity && obj.rate) {
            obj.amount = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(obj.quantity * obj.rate);
          }
        });
      },
      deep: true
    }
  },
  methods: {
    addItem() {
      this.invoice.items.push({
        id: uniqueID(),
        description: '',
        quantity: '',
        rate: '',
        amount: '$0.00'
      });
    },

    removeItem(e, id) {
      e.preventDefault();
      var index = this.invoice.items.map(function (item) {
        return item.id;
      }).indexOf(id);
      console.log(index);

      if (index || index === 0) {
        this.invoice.items.splice(index, 1);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/pages/invoices/new.vue?vue&type=script&lang=js&
 /* harmony default export */ var invoices_newvue_type_script_lang_js_ = (newvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/pages/invoices/new.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  invoices_newvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "91fc3e34"
  
)

/* harmony default export */ var invoices_new = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=new.js.map