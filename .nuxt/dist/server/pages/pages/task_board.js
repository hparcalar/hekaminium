exports.ids = [112];
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
  "837b940c"
  
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
  "0a37958c"
  
)

/* harmony default export */ var Textarea = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_01_sm.f998161.png";

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_01_sm@2x.6649141.png";

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_04_sm@2x.61057ef.png";

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_07_sm@2x.5701d61.png";

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/ColumnToggle.vue?vue&type=template&id=fd4557b6&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "uk-flex uk-flex-center",
    class: {
      'uk-flex-1': _vm.columnCollapsed
    }
  }, [_vm._ssrNode("<a href=\"javascript:void(0)\" data-uk-tooltip" + _vm._ssrAttr("title", _vm.hideTitle) + _vm._ssrClass("sc-column-hide sc-actions-icon mdi", [_vm.hideIcon]) + _vm._ssrStyle(null, null, {
    display: !_vm.columnCollapsed ? '' : 'none'
  }) + "></a> <a href=\"javascript:void(0)\" data-uk-tooltip" + _vm._ssrAttr("title", _vm.showTitle) + _vm._ssrClass("sc-column-show sc-actions-icon mdi", [_vm.showIcon]) + _vm._ssrStyle(null, null, {
    display: _vm.columnCollapsed ? '' : 'none'
  }) + "></a>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ColumnToggle.vue?vue&type=template&id=fd4557b6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ColumnToggle.vue?vue&type=script&lang=js&
/* harmony default export */ var ColumnTogglevue_type_script_lang_js_ = ({
  props: {
    hideTitle: {
      type: String,
      default: 'Hide List'
    },
    hideIcon: {
      type: String,
      default: 'mdi-arrow-collapse-horizontal'
    },
    showTitle: {
      type: String,
      default: 'Show List'
    },
    showIcon: {
      type: String,
      default: 'mdi-arrow-expand-horizontal'
    },
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    columnCollapsed: {
      get() {
        return this.collapsed;
      },

      set(value) {
        this.$emit('columnCollapsing', value);
        setTimeout(() => {
          this.$emit(value ? 'columnHidden' : 'columnShown');
        }, 300);
        return value;
      }

    }
  },
  methods: {
    columnToggle() {
      this.columnCollapsed = !this.columnCollapsed;
    }

  }
});
// CONCATENATED MODULE: ./components/ColumnToggle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ColumnTogglevue_type_script_lang_js_ = (ColumnTogglevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ColumnToggle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ColumnTogglevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ca1bb76c"
  
)

/* harmony default export */ var ColumnToggle = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Offcanvas.vue?vue&type=template&id=3714a0db&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.vxOffcanvasPresent,
      expression: "vxOffcanvasPresent"
    }],
    attrs: {
      "id": "sc-offcanvas",
      "data-uk-offcanvas": "flip: true; container: '#nuxt-wrapper'"
    }
  }, [_vm._ssrNode("<div" + _vm._ssrClass("uk-offcanvas-bar", _vm.extraClass) + ">", "</div>", [_vm._t("default")], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Offcanvas.vue?vue&type=template&id=3714a0db&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./assets/js/utils.js + 5 modules
var utils = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Offcanvas.vue?vue&type=script&lang=js&


/* harmony default export */ var Offcanvasvue_type_script_lang_js_ = ({
  name: 'ScOffcanvas',
  props: {
    extraClass: {
      type: String,
      default: ''
    }
  },
  computed: { ...Object(external_vuex_["mapState"])(['vxOffcanvasPresent', 'vxOffcanvasExpanded'])
  },
  watch: {
    'vxOffcanvasExpanded'(state) {
      if (utils["e" /* scMq */].mediumMax()) {
        if (state) {
          UIkit.offcanvas('#sc-offcanvas').show();

          if (this.$store.getters.sidebarMainState) {
            this.$store.commit('sidebarMainToggle', false);
          }
        } else {
          UIkit.offcanvas('#sc-offcanvas').hide();
        }
      }
    },

    $route() {
      if (this.$store.getters.offcanvasState) {
        this.$store.commit('offcanvasToggle', false);
      }
    }

  },

  mounted() {
    const self = this;

    if (utils["e" /* scMq */].mediumMax()) {
      self.$nextTick(() => {
        self.$store.commit('setOffcanvasPresent', true);
      });
    }
  },

  beforeDestroy() {
    this.$store.commit('offcanvasToggle', false);
    this.$store.commit('setOffcanvasPresent', false);
  },

  methods: {
    hide() {
      this.$store.commit('offcanvasToggle', false);
    }

  }
});
// CONCATENATED MODULE: ./components/Offcanvas.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Offcanvasvue_type_script_lang_js_ = (Offcanvasvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Offcanvas.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Offcanvasvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "117e8192"
  
)

/* harmony default export */ var Offcanvas = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(638);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7f426abf", content, true, context)
};

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_task_board_vue_vue_type_style_index_0_id_6924f849_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(489);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_task_board_vue_vue_type_style_index_0_id_6924f849_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_task_board_vue_vue_type_style_index_0_id_6924f849_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_task_board_vue_vue_type_style_index_0_id_6924f849_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_task_board_vue_vue_type_style_index_0_id_6924f849_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sc-task-list-cards,.sc-task-list-cards>li,.sc-task-list-cards>li>li{margin:0;padding:0;list-style:none}.sc-task-board{padding:12px 0}.sc-task-board,.sc-task-board-wrapper{height:100%;box-sizing:border-box;display:flex}.sc-task-board-wrapper{flex-wrap:nowrap;overflow-y:hidden;overflow-x:auto;max-width:100%;-webkit-overflow-scrolling:touch;padding:0 12px}.sc-task-list{width:320px;background:#eee;display:flex;flex:1 0 auto;flex-direction:column;transition:width .28s cubic-bezier(.55,0,.1,1)}.sc-task-list-head{display:flex;align-items:center;padding:8px 24px;box-sizing:border-box;min-height:52px}.sc-task-list-head .sc-task-list-header{flex:1;margin:0}.sc-task-list+.sc-task-list{margin-left:12px}.sc-task-list:last-child{margin-right:12px}.sc-task-list-collapsed{width:64px;display:block}.sc-task-list-collapsed .sc-js-el-hide,.sc-task-list-collapsed .sc-task-list-cards{display:none}.sc-task-list-collapsed .sc-js-el-show{display:block}.sc-task-list-collapsed .sc-task-list-head{transform:rotate(-90deg);justify-content:flex-end;padding:8px 16px}.sc-task-list-collapsed .sc-actions{margin:0!important}.sc-task-list-collapsed .sc-actions .sc-column-show{transform:rotate(90deg)}.sc-task-list-collapsed .sc-task-list-header{white-space:nowrap;padding-right:16px;max-width:inherit;overflow:visible}@media screen and (-ms-high-contrast:none){.sc-task-list-collapsed .sc-task-list-head{transform:rotate(-270deg);padding-left:0}.sc-task-list-collapsed .sc-actions{margin:0!important}.sc-task-list-collapsed .sc-actions .sc-js-el-show{transform:rotate(-270deg)}.sc-task-list-collapsed .sc-task-list-header{padding-right:0;position:absolute;left:64px;bottom:16px}}.sc-task-list-header{margin:0 0 12px;font-family:\"Roboto\",Arial,Helvetica,sans-serif;font-size:14px;font-size:.875rem;text-transform:uppercase;font-weight:500}.sc-task-list-cards{margin:8px 4px 0 12px;padding:0 12px 8px 4px;overflow-x:hidden;overflow-y:auto;flex:1;flex-shrink:0;min-height:24px}.sc-task-list-cards *{-webkit-user-select:none}.sc-task-list-cards>li{cursor:pointer}.sc-task-list-cards>li+li{margin-top:12px}.sc-task-card,.sc-task-list-cards .sc-mirror-el{border-radius:3px}.sc-task-card{padding:8px 12px;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);cursor:pointer}.sc-task-card-title{margin:0;font-family:\"Roboto\",Arial,Helvetica,sans-serif;font-size:14px;font-size:.875rem;font-weight:400;line-height:1.4}.sc-task-card-assignee{display:flex;align-items:center;margin-top:8px}.sc-task-card-assignee>a{margin-right:4px;font-size:14px;font-size:.875rem}.sc-task-card-assignee>a,.sc-task-card-assignee>a img{border-radius:50%}#sc-page-aside .sc-task-list-head{margin-top:12px;margin-bottom:8px}#sc-page-aside .sc-task-list-cards{height:100%;margin-top:0}#sc-page-aside .sc-task-list-cards :first-child[style*=\"display: none\"]+li{margin-top:0}#sc-page-aside .sc-task-list-cards .sortable-ghost{border-radius:3px}.sc-task-board>[style*=\"display: none\"]:first-child+.sc-task-list{margin-left:0}.sc-task-list-cards :first-child[style*=\"display: none\"]+li,.sc-task-list :first-child[style*=\"display: none\"]+li{margin-top:0}.sc-task-list-cards .sc-task-list-cards .sortable-ghost,.sc-task-list .sc-task-list-cards .sortable-ghost{border-radius:3px}.sortable-handle-el{cursor:move;cursor:-webkit-grabbing}.sortable-ghost{background:rgba(0,0,0,.1)}.sortable-ghost>*{visibility:hidden}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/task_board.vue?vue&type=template&id=6924f849&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "uk-flex uk-flex-column",
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-top-bar\" class=\"sc-top-bar\">", "</div>", [_vm._ssrNode("<div class=\"sc-top-bar-content uk-flex uk-flex-1\"><h1 class=\"sc-top-bar-title uk-flex-1\">\r\n\t\t\t\t\tProduct Roadmap\r\n\t\t\t\t</h1> <span class=\"uk-text-muted\">\r\n\t\t\t\t\tPublic\r\n\t\t\t\t</span> <div class=\"sc-actions uk-margin-left\"><a href=\"javascript:void(0)\" data-uk-toggle=\"target: #sc-page-top-bar; cls: sc-top-bar-expanded\" class=\"sc-actions-icon mdi mdi-filter-variant sc-js-el-hide md-color-red-800 uk-animation-shake\"></a> <a href=\"javascript:void(0)\" data-uk-toggle=\"target: #sc-page-top-bar; cls: sc-top-bar-expanded\" class=\"sc-actions-icon mdi mdi-close sc-js-el-show\"></a></div></div> "), _vm._ssrNode("<div class=\"sc-top-bar-content-expanded\">", "</div>", [_vm._ssrNode("<p class=\"uk-text-medium uk-text-uppercase sc-text-semibold md-color-light-blue-700 uk-margin-remove\">\r\n\t\t\t\t\tFilters:\r\n\t\t\t\t</p> "), _vm._ssrNode("<div data-uk-grid class=\"uk-flex uk-flex-bottom uk-grid\">", "</div>", [_vm._ssrNode("<div class=\"uk-width-1-4@m\">", "</div>", [_c('ScInput', {
    model: {
      value: _vm.filterData.taskName,
      callback: function ($$v) {
        _vm.$set(_vm.filterData, "taskName", $$v);
      },
      expression: "filterData.taskName"
    }
  }, [_c('label', [_vm._v("Task name")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-width-1-4@m\">", "</div>", [_c('client-only', [_c('Select2', {
    attrs: {
      "options": _vm.tags,
      "settings": {
        'width': '100%',
        'placeholder': 'Select tags...',
        closeOnSelect: false
      },
      "multiple": ""
    },
    model: {
      value: _vm.filterData.tags,
      callback: function ($$v) {
        _vm.$set(_vm.filterData, "tags", $$v);
      },
      expression: "filterData.tags"
    }
  })], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-width-1-4@m\">", "</div>", [_c('client-only', [_c('Select2', {
    attrs: {
      "options": _vm.users,
      "settings": {
        'width': '100%',
        'placeholder': 'Select user...',
        'minimumResultsForSearch': -1
      }
    },
    model: {
      value: _vm.filterData.assignee,
      callback: function ($$v) {
        _vm.$set(_vm.filterData, "assignee", $$v);
      },
      expression: "filterData.assignee"
    }
  })], 1)], 1), _vm._ssrNode(" <div class=\"uk-flex-none\"><button class=\"sc-button sc-button-secondary\">\r\n\t\t\t\t\t\t\tFilter\r\n\t\t\t\t\t\t</button></div>")], 2)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"sc-page-wrapper-inner\" class=\"uk-flex\">", "</div>", [_vm._ssrNode("<div id=\"sc-page-aside\" class=\"uk-flex-column sc-page-aside-large sc-page-aside-overflow\">", "</div>", [_vm._ssrNode("<div class=\"sc-page-aside-body uk-flex uk-flex-column sc-padding-remove\">", "</div>", [_vm._ssrNode("<div class=\"sc-task-list-head\"><h3 class=\"sc-task-list-header\">\r\n\t\t\t\t\t\t\tTasks\r\n\t\t\t\t\t\t</h3></div> "), _c('client-only', [_c('Draggable', {
    staticClass: "sc-task-list-cards sc-task-js-list-cards",
    attrs: {
      "tag": "ul",
      "group": "tasks",
      "animation": 40
    },
    on: {
      "change": function ($event) {
        return _vm.updateTasks($event, 'others');
      }
    },
    model: {
      value: _vm.dragModel.others,
      callback: function ($$v) {
        _vm.$set(_vm.dragModel, "others", $$v);
      },
      expression: "dragModel.others"
    }
  }, _vm._l(_vm.dragModel.others, function (task) {
    return _c('li', {
      key: task.id
    }, [_c('div', {
      staticClass: "sc-task-card",
      on: {
        "click": function ($event) {
          return _vm.showTask(task);
        }
      }
    }, [_c('h2', {
      staticClass: "sc-task-card-title"
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(task.title) + "\r\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: task.tags.length,
        expression: "task.tags.length"
      }]
    }, _vm._l(task.tags, function (tag) {
      return _c('span', {
        key: tag,
        staticClass: "uk-badge uk-margin-mini-right",
        class: [_vm.tagColor(tag)]
      }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(tag) + "\r\n\t\t\t\t\t\t\t\t\t\t")]);
    }), 0), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: task.assignee.length,
        expression: "task.assignee.length"
      }],
      staticClass: "sc-task-card-assignee"
    }, [_vm._l(task.assignee.slice(0, 3), function (assignee) {
      return _c('a', {
        key: assignee,
        staticClass: "sc-task-card-assignee-avatar",
        attrs: {
          "href": "javascript:void(0)",
          "title": _vm.assigneeName(assignee)
        }
      }, [_c('img', {
        directives: [{
          name: "rjs",
          rawName: "v-rjs",
          value: _vm.assigneeAvatar(assignee, true),
          expression: "assigneeAvatar(assignee, true)"
        }],
        attrs: {
          "src": _vm.assigneeAvatar(assignee),
          "alt": ""
        }
      })]);
    }), _vm._v(" "), _c('a', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: task.assignee.length > 3,
        expression: "task.assignee.length > 3"
      }],
      attrs: {
        "href": "javascript:void(0)"
      }
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t+" + _vm._s(task.assignee.length - 3) + " more\r\n\t\t\t\t\t\t\t\t\t\t")])], 2), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: task.progress,
        expression: "task.progress"
      }],
      staticClass: "sc-progress sc-progress-small uk-margin-small-top",
      attrs: {
        "title": task.progress + '%'
      }
    }, [_c('div', {
      staticClass: "sc-progress-bar",
      class: [_vm.progressColor(task.progress)],
      style: {
        'width': task.progress + '%'
      }
    })])])]);
  }), 0)], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"sc-page-content\" class=\"sc-padding-remove\">", "</div>", [_vm._ssrNode("<div class=\"sc-task-board-wrapper\">", "</div>", [_c('client-only', [_c('Draggable', {
    staticClass: "sc-task-board",
    attrs: {
      "id": "sc-task-board",
      "group": "columns",
      "animation": 40,
      "handle": ".sc-task-list-header"
    },
    model: {
      value: _vm.taskBoardColumns,
      callback: function ($$v) {
        _vm.taskBoardColumns = $$v;
      },
      expression: "taskBoardColumns"
    }
  }, _vm._l(_vm.taskBoardColumns, function (column) {
    return _c('div', {
      key: column.id,
      staticClass: "sc-task-list sc-column-transition",
      class: {
        'sc-task-list-collapsed': column.collapsed,
        'sc-js-el-transform': column.transform
      }
    }, [_c('div', {
      staticClass: "sc-task-list-head sortable-handle-el"
    }, [_c('h3', {
      staticClass: "sc-task-list-header"
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(column.name) + "\r\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
      staticClass: "sc-actions"
    }, [_c('client-only', [_c('ColumnToggle', {
      attrs: {
        "collapsed": column.collapsed
      },
      on: {
        "columnCollapsing": function ($event) {
          return _vm.onColumnCollapsing(column);
        },
        "columnShown": function ($event) {
          column.transform = false;
        },
        "columnHidden": function ($event) {
          column.transform = false;
        }
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "sc-dropdown sc-js-el-hide"
    }, [_c('a', {
      staticClass: "sc-actions-icon mdi mdi-dots-vertical",
      attrs: {
        "href": "javascript:void(0)"
      }
    }), _vm._v(" "), _c('div', {
      attrs: {
        "data-uk-dropdown": "mode:click"
      }
    }, [_c('ul', {
      staticClass: "uk-nav uk-dropdown-nav"
    }, [_c('li', [_c('a', {
      attrs: {
        "href": "javascript:void(0)"
      },
      on: {
        "click": function ($event) {
          $event.preventDefault();
          return _vm.addTaskModal(column);
        }
      }
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAdd Card\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('li', [_c('a', {
      attrs: {
        "href": "javascript:void(0)"
      }
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCopy List…\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('li', [_c('a', {
      attrs: {
        "href": "javascript:void(0)"
      }
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMove List…\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('li', {
      staticClass: "uk-nav-divider"
    }), _vm._v(" "), _c('li', [_c('a', {
      attrs: {
        "href": "javascript:void(0)"
      }
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tClose This List\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])])])])])], 1)]), _vm._v(" "), _c('Draggable', {
      staticClass: "sc-task-list-cards sc-task-js-list-cards uk-height-1-1",
      attrs: {
        "tag": "ul",
        "group": "tasks",
        "animation": 40
      },
      on: {
        "change": function ($event) {
          return _vm.updateTasks($event, column.list);
        }
      },
      model: {
        value: _vm.dragModel[column.list],
        callback: function ($$v) {
          _vm.$set(_vm.dragModel, column.list, $$v);
        },
        expression: "dragModel[column.list]"
      }
    }, _vm._l(_vm.dragModel[column.list], function (task) {
      return _c('li', {
        key: task.id
      }, [_c('div', {
        staticClass: "sc-task-card",
        on: {
          "click": function ($event) {
            return _vm.showTask(task);
          }
        }
      }, [_c('h2', {
        staticClass: "sc-task-card-title"
      }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(task.title) + "\r\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: task.tags.length,
          expression: "task.tags.length"
        }],
        staticClass: "uk-flex uk-margin-small-top"
      }, _vm._l(task.tags, function (tag) {
        return _c('span', {
          key: tag,
          staticClass: "uk-badge uk-margin-mini-right",
          class: [_vm.tagColor(tag)]
        }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(tag) + "\r\n\t\t\t\t\t\t\t\t\t\t\t\t")]);
      }), 0), _vm._v(" "), _c('div', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: task.assignee.length,
          expression: "task.assignee.length"
        }],
        staticClass: "sc-task-card-assignee"
      }, [_vm._l(task.assignee.slice(0, 3), function (assignee) {
        return _c('a', {
          key: assignee,
          staticClass: "sc-task-card-assignee-avatar",
          attrs: {
            "href": "javascript:void(0)",
            "title": _vm.assigneeName(assignee)
          }
        }, [_c('img', {
          directives: [{
            name: "rjs",
            rawName: "v-rjs",
            value: _vm.assigneeAvatar(assignee, true),
            expression: "assigneeAvatar(assignee, true)"
          }],
          attrs: {
            "src": _vm.assigneeAvatar(assignee),
            "alt": ""
          }
        })]);
      }), _vm._v(" "), _c('a', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: task.assignee.length > 3,
          expression: "task.assignee.length > 3"
        }],
        attrs: {
          "href": "javascript:void(0)"
        }
      }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t+" + _vm._s(task.assignee.length - 3) + " more\r\n\t\t\t\t\t\t\t\t\t\t\t\t")])], 2), _vm._v(" "), _c('div', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: task.progress,
          expression: "task.progress"
        }],
        staticClass: "sc-progress sc-progress-small uk-margin-small-top",
        attrs: {
          "title": task.progress + '%'
        }
      }, [_c('div', {
        staticClass: "sc-progress-bar",
        class: [_vm.progressColor(task.progress)],
        style: {
          'width': task.progress + '%'
        }
      })])])]);
    }), 0)], 1);
  }), 0)], 1)], 1)])], 2), _vm._ssrNode(" <div class=\"sc-fab-page-wrapper\"><a href=\"javascript:void(0)\" class=\"sc-fab sc-fab-large sc-fab-danger\"><i class=\"mdi mdi-plus\"></i></a></div> "), _vm._ssrNode("<div id=\"sc-task-modal\" data-uk-modal class=\"uk-flex-top uk-modal\">", "</div>", [_vm._ssrNode("<div class=\"uk-modal-dialog uk-modal-body uk-margin-auto-vertical\">", "</div>", [_vm._ssrNode("<button type=\"button\" data-uk-close class=\"uk-modal-close-default\"></button> "), _vm._ssrNode("<div" + _vm._ssrStyle(null, null, {
    display: _vm.modalData ? '' : 'none'
  }) + ">", "</div>", [_vm._ssrNode("<h2 class=\"uk-modal-title\">" + _vm._ssrEscape("\r\n\t\t\t\t\t\t" + _vm._s(_vm.modalData.title) + "\r\n\t\t\t\t\t") + "</h2> <div class=\"uk-flex uk-flex-middle\"" + _vm._ssrStyle(null, null, {
    display: _vm.modalData.tags.length ? '' : 'none'
  }) + ">" + _vm._ssrList(_vm.modalData.tags, function (tag) {
    return "<span" + _vm._ssrClass("uk-badge uk-margin-mini-right", [_vm.tagColor(tag)]) + ">" + _vm._ssrEscape("\r\n\t\t\t\t\t\t\t" + _vm._s(tag) + "\r\n\t\t\t\t\t\t") + "</span>";
  }) + "</div> "), _vm._ssrNode("<div data-uk-grid class=\"uk-margin-medium-top\">", "</div>", [_vm._ssrNode("<div class=\"uk-flex-1\"><div class=\"sc-task-modal-description\"" + _vm._ssrStyle(null, null, {
    display: _vm.modalData.description !== '' ? '' : 'none'
  }) + "><p>" + _vm._ssrEscape(_vm._s(_vm.modalData.description)) + "</p></div></div> "), _vm._ssrNode("<div class=\"uk-width-1-4@m\">", "</div>", [_vm._ssrNode("<div class=\"uk-text-medium md-bg-grey-100 sc-padding-medium\">", "</div>", [_vm._ssrNode("<div" + _vm._ssrStyle(null, null, {
    display: _vm.modalData.date ? '' : 'none'
  }) + "><span class=\"uk-text-muted uk-margin-small-right\">\r\n\t\t\t\t\t\t\t\t\t\tdate:\r\n\t\t\t\t\t\t\t\t\t</span>" + _vm._ssrEscape(" " + _vm._s(_vm.modalData.date) + "\r\n\t\t\t\t\t\t\t\t") + "</div> <hr class=\"uk-margin-small\"" + _vm._ssrStyle(null, null, {
    display: _vm.modalData.list !== '' ? '' : 'none'
  }) + "> <div" + _vm._ssrStyle(null, null, {
    display: _vm.modalData.list !== '' ? '' : 'none'
  }) + "><span class=\"uk-text-muted uk-margin-small-right\">\r\n\t\t\t\t\t\t\t\t\t\tin list:\r\n\t\t\t\t\t\t\t\t\t</span> <a href=\"javascript:void(0)\">" + _vm._ssrEscape("\r\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.modalData.list_long) + "\r\n\t\t\t\t\t\t\t\t\t") + "</a></div> <hr class=\"uk-margin-small\"" + _vm._ssrStyle(null, null, {
    display: _vm.modalData.progress ? '' : 'none'
  }) + "> <div" + _vm._ssrStyle(null, null, {
    display: _vm.modalData.progress ? '' : 'none'
  }) + "><span class=\"uk-text-muted\">\r\n\t\t\t\t\t\t\t\t\t\tprogress:\r\n\t\t\t\t\t\t\t\t\t</span> <div" + _vm._ssrAttr("title", _vm.modalData.progress + '%') + " class=\"uk-margin-small-top sc-progress sc-progress-small\"><div" + _vm._ssrClass("sc-progress-bar", [_vm.progressColor(_vm.modalData.progress)]) + _vm._ssrStyle(null, {
    'width': _vm.modalData.progress + '%'
  }, null) + "></div></div></div> <hr class=\"uk-margin-small\"" + _vm._ssrStyle(null, null, {
    display: _vm.modalData.assignee.length ? '' : 'none'
  }) + "> "), _vm._ssrNode("<div" + _vm._ssrStyle(null, null, {
    display: _vm.modalData.assignee.length ? '' : 'none'
  }) + ">", "</div>", [_vm._ssrNode("<span class=\"uk-text-muted\">\r\n\t\t\t\t\t\t\t\t\t\tassignees:\r\n\t\t\t\t\t\t\t\t\t</span> "), _vm._ssrNode("<div class=\"uk-margin-small-top uk-flex uk-flex-middle\">", "</div>", _vm._l(_vm.modalData.assignee.slice(0, 3), function (assignee) {
    return _vm._ssrNode("<a href=\"javascript:void(0)\"" + _vm._ssrAttr("title", _vm.assigneeName(assignee)) + " class=\"uk-margin-small-right\">", "</a>", [_c('img', {
      directives: [{
        name: "rjs",
        rawName: "v-rjs",
        value: _vm.assigneeAvatar(assignee, true),
        expression: "assigneeAvatar(assignee, true)"
      }],
      staticClass: "uk-border-circle",
      attrs: {
        "src": _vm.assigneeAvatar(assignee),
        "alt": ""
      }
    }, [])]);
  }), 0), _vm._ssrNode(" <a href=\"javascript:void(0)\" class=\"uk-text-small uk-margin-small-top uk-display-inline-block\"" + _vm._ssrStyle(null, null, {
    display: _vm.modalData.assignee.length > 3 ? '' : 'none'
  }) + ">" + _vm._ssrEscape("\r\n\t\t\t\t\t\t\t\t\t\t+" + _vm._s(_vm.modalData.assignee.length - 3) + " more\r\n\t\t\t\t\t\t\t\t\t") + "</a>")], 2)], 2)])], 2)], 2)], 2)]), _vm._ssrNode(" "), _c('client-only', [_c('div', {
    staticClass: "uk-flex-top uk-modal",
    attrs: {
      "id": "sc-task-board-card-add-modal"
    }
  }, [_c('div', {
    staticClass: "uk-modal-dialog uk-margin-auto-vertical"
  }, [_c('div', {
    staticClass: "uk-modal-body"
  }, [_c('button', {
    staticClass: "uk-modal-close-default",
    attrs: {
      "type": "button",
      "data-uk-close": ""
    }
  }), _vm._v(" "), _c('h2', {
    staticClass: "uk-modal-title"
  }, [_vm._v("\r\n\t\t\t\t\t\t\tAdd Card\r\n\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin"
  }, [_c('ScInput', {
    attrs: {
      "mode": "outline"
    },
    model: {
      value: _vm.cardAdd.title,
      callback: function ($$v) {
        _vm.$set(_vm.cardAdd, "title", $$v);
      },
      expression: "cardAdd.title"
    }
  }, [_c('label', [_vm._v("Title")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-small"
  }, [_c('ScTextarea', {
    attrs: {
      "mode": "outline"
    },
    model: {
      value: _vm.cardAdd.description,
      callback: function ($$v) {
        _vm.$set(_vm.cardAdd, "description", $$v);
      },
      expression: "cardAdd.description"
    }
  }, [_c('label', [_vm._v("Description")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-small"
  }, [_c('label', {
    staticClass: "uk-form-label",
    attrs: {
      "for": "card-add-tags"
    }
  }, [_vm._v("Tags")]), _vm._v(" "), _c('Select2', {
    attrs: {
      "options": _vm.cardAddData.tags,
      "settings": {
        'width': '100%',
        'placeholder': 'Select tags...',
        closeOnSelect: false
      },
      "multiple": ""
    },
    model: {
      value: _vm.cardAdd.tags,
      callback: function ($$v) {
        _vm.$set(_vm.cardAdd, "tags", $$v);
      },
      expression: "cardAdd.tags"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-small"
  }, [_c('label', {
    staticClass: "uk-form-label",
    attrs: {
      "for": "card-add-assignee"
    }
  }, [_vm._v("Assignee")]), _vm._v(" "), _c('Select2', {
    attrs: {
      "options": _vm.cardAddData.assignee,
      "settings": {
        'width': '100%',
        'placeholder': 'Select assignee...',
        closeOnSelect: false
      },
      "multiple": ""
    },
    model: {
      value: _vm.cardAdd.assignee,
      callback: function ($$v) {
        _vm.$set(_vm.cardAdd, "assignee", $$v);
      },
      expression: "cardAdd.assignee"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-child-width-1-2@m uk-grid uk-margin",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', [_c('ScInput', {
    directives: [{
      name: "flatpickr",
      rawName: "v-flatpickr",
      value: _vm.addCardDp,
      expression: "addCardDp"
    }],
    attrs: {
      "mode": "outline"
    },
    model: {
      value: _vm.cardAdd.date,
      callback: function ($$v) {
        _vm.$set(_vm.cardAdd, "date", $$v);
      },
      expression: "cardAdd.date"
    }
  }, [_c('label', [_vm._v("Due Date")])])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "uk-modal-footer uk-text-right"
  }, [_c('button', {
    staticClass: "sc-button sc-button-flat sc-button-flat-danger uk-modal-close",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\tCancel\r\n\t\t\t\t\t\t")]), _vm._v(" "), _c('button', {
    staticClass: "sc-button",
    attrs: {
      "id": "sc-js-card-add",
      "type": "button"
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.addTask();
      }
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\tAdd Task\r\n\t\t\t\t\t\t")])])])])]), _vm._ssrNode(" "), _c('client-only', [_c('ScOffcanvas', [_c('div', {
    staticClass: "sc-task-list-head"
  }, [_c('h3', {
    staticClass: "sc-task-list-header"
  }, [_vm._v("\r\n\t\t\t\t\t\tTasks\r\n\t\t\t\t\t")])]), _vm._v(" "), _c('Draggable', {
    staticClass: "sc-task-list-cards sc-task-js-list-cards",
    attrs: {
      "tag": "ul",
      "group": "tasks",
      "animation": 40
    },
    on: {
      "change": function ($event) {
        return _vm.updateTasks($event, 'others');
      }
    },
    model: {
      value: _vm.dragModel.others,
      callback: function ($$v) {
        _vm.$set(_vm.dragModel, "others", $$v);
      },
      expression: "dragModel.others"
    }
  }, _vm._l(_vm.dragModel.others, function (task) {
    return _c('li', {
      key: task.id
    }, [_c('div', {
      staticClass: "sc-task-card",
      on: {
        "click": function ($event) {
          return _vm.showTask(task);
        }
      }
    }, [_c('h2', {
      staticClass: "sc-task-card-title"
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t" + _vm._s(task.title) + "\r\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: task.tags.length,
        expression: "task.tags.length"
      }]
    }, _vm._l(task.tags, function (tag) {
      return _c('span', {
        key: tag,
        staticClass: "uk-badge uk-margin-mini-right",
        class: [_vm.tagColor(tag)]
      }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t" + _vm._s(tag) + "\r\n\t\t\t\t\t\t\t\t")]);
    }), 0), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: task.assignee.length,
        expression: "task.assignee.length"
      }],
      staticClass: "sc-task-card-assignee"
    }, [_vm._l(task.assignee.slice(0, 3), function (assignee) {
      return _c('a', {
        key: assignee,
        staticClass: "sc-task-card-assignee-avatar",
        attrs: {
          "href": "javascript:void(0)",
          "title": _vm.assigneeName(assignee)
        }
      }, [_c('img', {
        directives: [{
          name: "rjs",
          rawName: "v-rjs",
          value: _vm.assigneeAvatar(assignee, true),
          expression: "assigneeAvatar(assignee, true)"
        }],
        attrs: {
          "src": _vm.assigneeAvatar(assignee),
          "alt": ""
        }
      })]);
    }), _vm._v(" "), _c('a', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: task.assignee.length > 3,
        expression: "task.assignee.length > 3"
      }],
      attrs: {
        "href": "javascript:void(0)"
      }
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t+" + _vm._s(task.assignee.length - 3) + " more\r\n\t\t\t\t\t\t\t\t")])], 2), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: task.progress,
        expression: "task.progress"
      }],
      staticClass: "sc-progress sc-progress-small uk-margin-small-top",
      attrs: {
        "title": task.progress + '%'
      }
    }, [_c('div', {
      staticClass: "sc-progress-bar",
      class: [_vm.progressColor(task.progress)],
      style: {
        'width': task.progress + '%'
      }
    })])])]);
  }), 0)], 1)], 1)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/pages/task_board.vue?vue&type=template&id=6924f849&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/Input.vue + 4 modules
var Input = __webpack_require__(127);

// EXTERNAL MODULE: ./components/Textarea.vue + 4 modules
var Textarea = __webpack_require__(128);

// EXTERNAL MODULE: ./components/ColumnToggle.vue + 4 modules
var ColumnToggle = __webpack_require__(290);

// EXTERNAL MODULE: ./components/Offcanvas.vue + 4 modules
var Offcanvas = __webpack_require__(292);

// EXTERNAL MODULE: ./plugins/moment.js
var moment = __webpack_require__(46);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/task_board.vue?vue&type=script&lang=js&








if (false) {}

/* harmony default export */ var task_boardvue_type_script_lang_js_ = ({
  name: 'PagesTaskBoard',
  components: {
    Select2:  false ? undefined : null,
    ScInput: Input["a" /* default */],
    ScTextarea: Textarea["a" /* default */],
    ColumnToggle: ColumnToggle["a" /* default */],
    ScOffcanvas: Offcanvas["a" /* default */],
    Draggable:  false ? undefined : null
  },
  data: () => ({
    tags: [{
      id: 0,
      text: 'Integrations',
      color: 'md-bg-blue-400'
    }, {
      id: 1,
      text: 'Idea',
      color: 'md-bg-amber-400'
    }, {
      id: 2,
      text: 'Feature',
      color: 'md-bg-purple-400'
    }, {
      id: 3,
      text: 'Bug',
      color: 'md-bg-red-400'
    }],
    filterData: {},
    modalData: null,
    taskModal: null,
    taskBoardColumns: [{
      id: 0,
      name: 'To Do',
      list: 'todo',
      collapsed: false,
      transform: false
    }, {
      id: 1,
      name: 'In Progress',
      list: 'inProgress',
      collapsed: false,
      transform: false
    }, {
      id: 2,
      name: 'Testing',
      list: 'testing',
      collapsed: true,
      transform: false
    }, {
      id: 3,
      name: 'Done',
      list: 'done',
      collapsed: false,
      transform: false
    }],
    dragModel: {
      'others': [],
      'todo': [],
      'inProgress': [],
      'testing': [],
      'done': []
    },
    cardAdd: {
      id: '',
      list: '',
      list_long: '',
      title: '',
      description: '',
      date: '',
      tags: '',
      assignee: ''
    },
    cardAddModal: null,
    cardAddData: {
      tags: [{
        id: 'Integrations',
        text: 'Integrations'
      }, {
        id: 'Idea',
        text: 'Idea',
        color: 'md-bg-amber-400'
      }, {
        id: 'Feature',
        text: 'Feature',
        color: 'md-bg-purple-400'
      }, {
        id: 'Bug',
        text: 'Bug',
        color: 'md-bg-red-400'
      }],
      assignee: [{
        id: 'user_1',
        text: 'carey.rice'
      }, {
        id: 'user_2',
        text: 'ian.wiza'
      }, {
        id: 'user_3',
        text: 'telly07'
      }]
    }
  }),
  computed: { ...Object(external_vuex_["mapGetters"])({
      tasks: 'task_board/tasks'
    }),

    users() {
      return [{
        id: '0',
        jsonName: 'user_1',
        text: 'carey.rice',
        avatar: __webpack_require__(130),
        avatar2x: __webpack_require__(131)
      }, {
        id: '1',
        jsonName: 'user_2',
        text: 'ian.wiza',
        avatar: __webpack_require__(49),
        avatar2x: __webpack_require__(134)
      }, {
        id: '2',
        jsonName: 'user_3',
        text: 'telly07',
        avatar: __webpack_require__(47),
        avatar2x: __webpack_require__(137)
      }];
    },

    addCardDp() {
      return {
        dateFormat: "d/m/Y",
        minDate: this.$moment().format('DD/MM/YYYY')
      };
    }

  },

  mounted() {
    // set fixed page
    this.$store.commit('setPageFixed', true); // modal

    this.taskModal = UIkit.modal(document.getElementById('sc-task-modal')); // update dragModel from store

    this.dragModel.others = this.tasks.others;
    this.dragModel.todo = this.tasks.todo;
    this.dragModel.inProgress = this.tasks.inProgress;
    this.dragModel.testing = this.tasks.testing;
    this.dragModel.done = this.tasks.done;
    this.$nextTick(() => {
      this.cardAddModal = UIkit.modal('#sc-task-board-card-add-modal', {
        bgClose: false
      });
    });
  },

  beforeDestroy() {
    // unset fixed page
    this.$store.commit('setPageFixed', false);
  },

  methods: {
    showTask(task) {
      this.modalData = task;
      this.taskModal.show();
    },

    tagColor(tag) {
      let _tag = this.tags.filter(obj => {
        return obj.text === tag;
      });

      return _tag[0].color;
    },

    assigneeAvatar(name, retina) {
      let _user = this.users.filter(obj => {
        return obj.jsonName === name;
      });

      return retina ? _user[0].avatar2x : _user[0].avatar;
    },

    assigneeName(name) {
      let _user = this.users.filter(obj => {
        return obj.jsonName === name;
      });

      return _user[0].text;
    },

    progressColor(value) {
      return value <= 20 ? 'md-bg-red-400' : value <= 60 ? 'md-bg-amber-400' : 'md-bg-green-400';
    },

    updateTasks(e, list) {
      if (e['added']) {
        let data = {
          el: e['added'].element,
          list: list,
          dragList: this.dragModel[list]
        };
        this.$store.commit('task_board/replaceList', data);
      }

      if (e['removed']) {
        let data = {
          id: e['removed'].element.id,
          list: list
        };
        this.$store.commit('task_board/removeTaskFromList', data);
      }

      return false;
    },

    onColumnCollapsing(column) {
      column.collapsed = !column.collapsed;
      column.transform = true;
    },

    addTaskModal(column) {
      this.cardAdd.id = Math.floor(Math.random() * 1000 + 100);
      this.cardAdd.list = column.list;
      this.cardAdd.list_long = column.name;
      this.cardAddModal.show();
    },

    addTask() {
      const data = { ...this.cardAdd
      };
      this.$store.commit('task_board/addTask', data);
      this.cardAddModal.hide(); // cleanup

      Object.keys(this.cardAdd).forEach(key => {
        this.cardAdd[key] = '';
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/pages/task_board.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_task_boardvue_type_script_lang_js_ = (task_boardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/pages/task_board.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(637)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_task_boardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "cd0ec81c"
  
)

/* harmony default export */ var task_board = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=task_board.js.map