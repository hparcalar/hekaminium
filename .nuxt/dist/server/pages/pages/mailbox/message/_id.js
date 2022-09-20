exports.ids = [107];
exports.modules = {

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

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


if (!vue__WEBPACK_IMPORTED_MODULE_0___default.a.moment) {
  vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(__webpack_require__(100));
}

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/mailbox/message/_id.vue?vue&type=template&id=281d9252&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.message ? _c('div', {
    staticClass: "sc-message-card sc-message-expanded-single"
  }, [_c('transition', {
    attrs: {
      "name": "fadeUp",
      "appear": ""
    },
    on: {
      "enter": function ($event) {
        return _vm.delayTransition($event, 140);
      }
    }
  }, [_c('div', {
    staticClass: "uk-flex uk-flex-middle sc-message-head uk-grid-collapse",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', {
    staticClass: "uk-flex-1 uk-text-truncate"
  }, [_c('h2', {
    staticClass: "sc-message-title uk-text-truncate",
    attrs: {
      "title": _vm.message.title
    }
  }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.message.title) + "\n\t\t\t\t\t")]), _vm._v(" "), _vm.message.tag ? _c('span', {
    staticClass: "uk-label uk-margin-small-right",
    class: [_vm.$parent.messageTagColor(_vm.message.tag)]
  }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.message.tag) + "\n\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "uk-text-small uk-text-muted"
  }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.message.sender) + "\n\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "sc-message-date"
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm._f("moment")(_vm.message.date, "ddd, MMM Do HH:mm")) + "\n\t\t\t\t")])])]), _vm._ssrNode(" "), _c('transition', {
    attrs: {
      "name": "fadeUp",
      "appear": ""
    },
    on: {
      "enter": function ($event) {
        return _vm.delayTransition($event, 300);
      }
    }
  }, [_c('div', {
    staticClass: "sc-message-content"
  }, [_c('p', [_vm._v(_vm._s(_vm.message.content))])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"sc-message-footer\">", "</div>", [_c('transition', {
    attrs: {
      "name": "fadeUp",
      "appear": ""
    },
    on: {
      "enter": function ($event) {
        return _vm.delayTransition($event, 450);
      }
    }
  }, [_c('div', [_c('span', {
    staticClass: "uk-display-block uk-margin-small-bottom uk-text-muted uk-text-medium uk-margin-small-left"
  }, [_vm._v("\n\t\t\t\t\t\tAttachments:\n\t\t\t\t\t")]), _vm._v(" "), _c('ul', {
    staticClass: "sc-message-attachments"
  }, [_c('li', {
    staticClass: "sc-flex-no-shrink"
  }, [_c('div', {
    staticClass: "sc-attachment"
  }, [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("file1.png "), _c('span', [_vm._v("(241KB)")])]), _c('a', {
    staticClass: "mdi mdi-close sc-attachment-remove",
    attrs: {
      "href": "javascript:void(0)"
    }
  })])]), _vm._v(" "), _c('li', {
    staticClass: "sc-flex-no-shrink"
  }, [_c('div', {
    staticClass: "sc-attachment"
  }, [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("file2.pdf "), _c('span', [_vm._v("(1240KB)")])]), _c('a', {
    staticClass: "mdi mdi-close sc-attachment-remove",
    attrs: {
      "href": "javascript:void(0)"
    }
  })])])])])]), _vm._ssrNode(" "), _c('transition', {
    attrs: {
      "name": "fadeUp",
      "appear": ""
    },
    on: {
      "enter": function ($event) {
        return _vm.delayTransition($event, 600);
      }
    }
  }, [_c('div', {
    staticClass: "sc-message-reply uk-visible@m"
  }, [_c('div', [_c('client-only', [_c('Select2', {
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
      value: _vm.replay.to,
      callback: function ($$v) {
        _vm.$set(_vm.replay, "to", $$v);
      },
      expression: "replay.to"
    }
  })], 1)], 1), _vm._v(" "), _c('ScTextarea', {
    attrs: {
      "cols": 30,
      "rows": 4,
      "placeholder": "Reply message...",
      "extra-classes": "uk-margin-top"
    },
    model: {
      value: _vm.replay.message,
      callback: function ($$v) {
        _vm.$set(_vm.replay, "message", $$v);
      },
      expression: "replay.message"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-small-top"
  }, [_c('button', {
    staticClass: "sc-button sc-button-primary"
  }, [_vm._v("\n\t\t\t\t\t\t\tSend\n\t\t\t\t\t\t")])])], 1)])], 2)], 2) : _vm._e();
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/pages/mailbox/message/_id.vue?vue&type=template&id=281d9252&

// EXTERNAL MODULE: ./components/Textarea.vue + 4 modules
var Textarea = __webpack_require__(123);

// EXTERNAL MODULE: ./plugins/moment.js
var moment = __webpack_require__(126);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/mailbox/message/_id.vue?vue&type=script&lang=js&


/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  name: 'PagesMailboxId',
  components: {
    Select2:  false ? undefined : null,
    ScTextarea: Textarea["a" /* default */]
  },

  validate({
    params
  }) {
    return typeof params.id !== 'undefined';
  },

  data: () => ({
    replay: {
      to: []
    }
  }),

  head() {
    return {
      'title': 'Scutum Admin - pages/mailbox/ - ' + this.$route.params.id
    };
  },

  computed: {
    message() {
      let id = this.$route.params.id;
      let message = this.$parent.messages.filter(k => {
        return k.id === id;
      });
      return message[0];
    },

    emails() {
      return [{
        id: '0',
        text: this.message.sender
      }, {
        id: '1',
        text: 'ldare@gmail.com'
      }, {
        id: '2',
        text: 'jonathon.mueller@yundt.com'
      }, {
        id: '3',
        text: 'icummings@gmail.com'
      }];
    },

    id() {
      return this.$route.params.id;
    }

  },

  created() {
    // if no message found back to mailbox
    if (!this.message) {
      this.$router.push({
        name: 'pages-mailbox'
      });
    } // select sender email address (select2)


    this.replay.to.push(0);
  },

  mounted() {
    this.$parent.showMessages = false;
  },

  methods: {
    delayTransition(el, delay) {
      el.style.transitionDelay = delay + "ms";
    }

  }
});
// CONCATENATED MODULE: ./pages/pages/mailbox/message/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var message_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/pages/mailbox/message/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  message_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4f8ee190"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map