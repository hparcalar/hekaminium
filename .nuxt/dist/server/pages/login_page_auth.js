exports.ids = [87];
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

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo_alt.73e0e43.png";

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo_alt@2x.3214a8d.png";

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/login_page_auth.vue?vue&type=template&id=55c49b0e&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "uk-flex uk-flex-center uk-flex-middle sc-login-page-wrapper"
  }, [_vm._ssrNode("<div class=\"uk-width-2-3@s uk-width-1-2@m uk-width-1-3@l uk-width-1-4@xl uk-margin-auto-vertical\">", "</div>", [_c('ScCard', [_c('ScCardBody', [_c('div', {
    staticClass: "sc-login-page-logo"
  }, [_c('img', {
    directives: [{
      name: "rjs",
      rawName: "v-rjs",
      value: __webpack_require__(300),
      expression: "require('~/assets/img/logo_alt@2x.png')"
    }],
    attrs: {
      "src": _vm.appLogo,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "sc-login-page-logo sc-login-page-logo-light"
  }, [_c('img', {
    directives: [{
      name: "rjs",
      rawName: "v-rjs",
      value: __webpack_require__(299),
      expression: "require('~/assets/img/logo_alt.png')"
    }],
    attrs: {
      "src": _vm.appLogoLight,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "sc-toggle-login-register sc-toggle-login-password",
    attrs: {
      "id": "sc-login-form"
    }
  }, [_c('div', {
    staticClass: "sc-login-page-inner"
  }, [_c('div', {
    staticClass: "uk-margin-medium"
  }, [_c('ScInput', {
    attrs: {
      "name": "email"
    },
    model: {
      value: _vm.loginData.email,
      callback: function ($$v) {
        _vm.$set(_vm.loginData, "email", $$v);
      },
      expression: "loginData.email"
    }
  }, [_c('label', [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tEmail/Login\r\n\t\t\t\t\t\t\t\t\t")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-medium"
  }, [_c('ScInput', {
    attrs: {
      "type": "password",
      "name": "password"
    },
    model: {
      value: _vm.loginData.password,
      callback: function ($$v) {
        _vm.$set(_vm.loginData, "password", $$v);
      },
      expression: "loginData.password"
    }
  }, [_c('label', [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tPassword\r\n\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-small-top uk-text-small uk-text-right@s"
  }, [_c('a', {
    staticClass: "sc-link",
    attrs: {
      "href": "javascript:void(0)",
      "data-uk-toggle": "target: .sc-toggle-login-password; animation: uk-animation-scale-up"
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tForgot Password?\r\n\t\t\t\t\t\t\t\t\t")])])], 1), _vm._v(" "), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.authError,
      expression: "authError"
    }],
    staticClass: "sc-vue-errors uk-display-block"
  }, [_c('li', [_vm._v("\r\n\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.authError) + "\r\n\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-large-top"
  }, [_c('a', {
    staticClass: "sc-button sc-button-large sc-button-block sc-button-danger",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.login();
      }
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\tSign In\r\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "uk-child-width-1-3 uk-grid-medium uk-margin-medium-top uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', [_c('a', {
    staticClass: "sc-button sc-button-social sc-button-facebook uk-width-1-1 uk-flex-center",
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "mdi mdi-facebook"
  })])]), _vm._v(" "), _c('div', [_c('a', {
    staticClass: "sc-button sc-button-social sc-button-twitter uk-width-1-1 uk-flex-center",
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "mdi mdi-twitter"
  })])]), _vm._v(" "), _c('div', [_c('a', {
    staticClass: "sc-button sc-button-social sc-button-linkedin uk-width-1-1 uk-flex-center",
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "mdi mdi-linkedin"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-large-top uk-text-center"
  }, [_c('span', {
    staticClass: "sc-color-secondary"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tDon't have an account?\r\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', [_c('a', {
    staticClass: "sc-text-semibold",
    attrs: {
      "href": "javascript:void(0)",
      "data-uk-toggle": "target: .sc-toggle-login-register; animation: uk-animation-scale-up"
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\tSign Up\r\n\t\t\t\t\t\t\t\t\t\t")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "sc-toggle-login-register",
    attrs: {
      "id": "sc-register-form",
      "hidden": ""
    }
  }, [_c('div', {
    staticClass: "sc-login-page-inner"
  }, [_c('div', {
    staticClass: "uk-margin-medium"
  }, [_c('ScInput', {
    model: {
      value: _vm.registerData.name,
      callback: function ($$v) {
        _vm.$set(_vm.registerData, "name", $$v);
      },
      expression: "registerData.name"
    }
  }, [_c('label', [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tName\r\n\t\t\t\t\t\t\t\t\t")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-medium"
  }, [_c('ScInput', {
    model: {
      value: _vm.registerData.email,
      callback: function ($$v) {
        _vm.$set(_vm.registerData, "email", $$v);
      },
      expression: "registerData.email"
    }
  }, [_c('label', [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tEmail\r\n\t\t\t\t\t\t\t\t\t")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-medium"
  }, [_c('ScInput', {
    model: {
      value: _vm.registerData.password,
      callback: function ($$v) {
        _vm.$set(_vm.registerData, "password", $$v);
      },
      expression: "registerData.password"
    }
  }, [_c('label', [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tPassword\r\n\t\t\t\t\t\t\t\t\t")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-large-top"
  }, [_c('button', {
    staticClass: "sc-button sc-button-large sc-button-block sc-button-secondary"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\tSign Up\r\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-large-top uk-flex uk-flex-middle uk-flex-center"
  }, [_c('a', {
    staticClass: "sc-text-semibold",
    attrs: {
      "href": "javascript:void(0)",
      "data-uk-toggle": "target: .sc-toggle-login-register; animation: uk-animation-scale-up"
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tBack to login form\r\n\t\t\t\t\t\t\t\t\t")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "sc-toggle-login-password",
    attrs: {
      "id": "sc-password-form",
      "hidden": ""
    }
  }, [_c('div', {
    staticClass: "sc-login-page-inner"
  }, [_c('div', {
    staticClass: "uk-margin-medium"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\tPlease enter your email address. You will receive a link to reset your password.\r\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-medium"
  }, [_c('ScInput', {
    model: {
      value: _vm.recoverPassEmail,
      callback: function ($$v) {
        _vm.recoverPassEmail = $$v;
      },
      expression: "recoverPassEmail"
    }
  }, [_c('label', [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tEmail\r\n\t\t\t\t\t\t\t\t\t")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-large-top"
  }, [_c('button', {
    staticClass: "sc-button sc-button-large sc-button-block sc-button-primary"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\tReset Password\r\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-large-top uk-flex uk-flex-middle uk-flex-center"
  }, [_c('a', {
    staticClass: "sc-text-semibold",
    attrs: {
      "href": "javascript:void(0)",
      "data-uk-toggle": "target: .sc-toggle-login-password; animation: uk-animation-scale-up"
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tBack to login form\r\n\t\t\t\t\t\t\t\t\t")])])])])])])], 1)], 1)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/login_page_auth.vue?vue&type=template&id=55c49b0e&

// EXTERNAL MODULE: ./components/Input.vue + 4 modules
var Input = __webpack_require__(127);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login_page_auth.vue?vue&type=script&lang=js&

/* harmony default export */ var login_page_authvue_type_script_lang_js_ = ({
  name: 'LoginPage',
  components: {
    ScInput: Input["a" /* default */]
  },
  layout: 'login_page',

  middleware({
    store,
    redirect
  }) {
    if (store.state.authenticated) {
      return redirect('/account');
    }
  },

  auth: 'guest',
  data: () => ({
    loginData: {
      email: '',
      password: ''
    },
    registerData: {
      name: '',
      email: '',
      password: ''
    },
    recoverPassEmail: '',
    authError: null
  }),

  head() {
    return {
      'title': 'Scutum Admin Login Page'
    };
  },

  computed: {
    appLogo() {
      return __webpack_require__(299);
    },

    appLogoLight() {
      return __webpack_require__(52);
    }

  },

  mounted() {
    if (this.$auth.$state.loggedIn) {
      this.$router.push({
        path: '/'
      });
    }
  },

  methods: {
    async csrf() {
      const axios = await this.$axios.$get('/sanctum/csrf-cookie');
      return {
        axios
      };
    },

    async login() {
      this.authError = {};
      var data = {
        email: this.loginData.email,
        password: this.loginData.password
      };

      try {
        await this.$auth.loginWith('laravelSanctum', {
          data: data
        }); // Redirect user after login

        this.$router.push({
          path: '/account'
        });
      } catch (err) {
        this.authError = err.response.data; // console.log(err.response.data)
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login_page_auth.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_login_page_authvue_type_script_lang_js_ = (login_page_authvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/login_page_auth.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_login_page_authvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6f269644"
  
)

/* harmony default export */ var login_page_auth = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=login_page_auth.js.map