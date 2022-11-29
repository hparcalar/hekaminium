exports.ids = [111];
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

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

if (false) {}

/***/ }),

/***/ 278:
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Afghanistan\",\"dial_code\":\"+93\",\"code\":\"AF\"},{\"name\":\"Aland Islands\",\"dial_code\":\"+358\",\"code\":\"AX\"},{\"name\":\"Albania\",\"dial_code\":\"+355\",\"code\":\"AL\"},{\"name\":\"Algeria\",\"dial_code\":\"+213\",\"code\":\"DZ\"},{\"name\":\"American Samoa\",\"dial_code\":\"+1684\",\"code\":\"AS\"},{\"name\":\"Andorra\",\"dial_code\":\"+376\",\"code\":\"AD\"},{\"name\":\"Angola\",\"dial_code\":\"+244\",\"code\":\"AO\"},{\"name\":\"Anguilla\",\"dial_code\":\"+1264\",\"code\":\"AI\"},{\"name\":\"Antarctica\",\"dial_code\":\"+672\",\"code\":\"AQ\"},{\"name\":\"Antigua and Barbuda\",\"dial_code\":\"+1268\",\"code\":\"AG\"},{\"name\":\"Argentina\",\"dial_code\":\"+54\",\"code\":\"AR\"},{\"name\":\"Armenia\",\"dial_code\":\"+374\",\"code\":\"AM\"},{\"name\":\"Aruba\",\"dial_code\":\"+297\",\"code\":\"AW\"},{\"name\":\"Australia\",\"dial_code\":\"+61\",\"code\":\"AU\"},{\"name\":\"Austria\",\"dial_code\":\"+43\",\"code\":\"AT\"},{\"name\":\"Azerbaijan\",\"dial_code\":\"+994\",\"code\":\"AZ\"},{\"name\":\"Bahamas\",\"dial_code\":\"+1242\",\"code\":\"BS\"},{\"name\":\"Bahrain\",\"dial_code\":\"+973\",\"code\":\"BH\"},{\"name\":\"Bangladesh\",\"dial_code\":\"+880\",\"code\":\"BD\"},{\"name\":\"Barbados\",\"dial_code\":\"+1246\",\"code\":\"BB\"},{\"name\":\"Belarus\",\"dial_code\":\"+375\",\"code\":\"BY\"},{\"name\":\"Belgium\",\"dial_code\":\"+32\",\"code\":\"BE\"},{\"name\":\"Belize\",\"dial_code\":\"+501\",\"code\":\"BZ\"},{\"name\":\"Benin\",\"dial_code\":\"+229\",\"code\":\"BJ\"},{\"name\":\"Bermuda\",\"dial_code\":\"+1441\",\"code\":\"BM\"},{\"name\":\"Bhutan\",\"dial_code\":\"+975\",\"code\":\"BT\"},{\"name\":\"Bolivia, Plurinational State of\",\"dial_code\":\"+591\",\"code\":\"BO\"},{\"name\":\"Bosnia and Herzegovina\",\"dial_code\":\"+387\",\"code\":\"BA\"},{\"name\":\"Botswana\",\"dial_code\":\"+267\",\"code\":\"BW\"},{\"name\":\"Brazil\",\"dial_code\":\"+55\",\"code\":\"BR\"},{\"name\":\"British Indian Ocean Territory\",\"dial_code\":\"+246\",\"code\":\"IO\"},{\"name\":\"Brunei Darussalam\",\"dial_code\":\"+673\",\"code\":\"BN\"},{\"name\":\"Bulgaria\",\"dial_code\":\"+359\",\"code\":\"BG\"},{\"name\":\"Burkina Faso\",\"dial_code\":\"+226\",\"code\":\"BF\"},{\"name\":\"Burundi\",\"dial_code\":\"+257\",\"code\":\"BI\"},{\"name\":\"Cambodia\",\"dial_code\":\"+855\",\"code\":\"KH\"},{\"name\":\"Cameroon\",\"dial_code\":\"+237\",\"code\":\"CM\"},{\"name\":\"Canada\",\"dial_code\":\"+1\",\"code\":\"CA\"},{\"name\":\"Cape Verde\",\"dial_code\":\"+238\",\"code\":\"CV\"},{\"name\":\"Cayman Islands\",\"dial_code\":\"+ 345\",\"code\":\"KY\"},{\"name\":\"Central African Republic\",\"dial_code\":\"+236\",\"code\":\"CF\"},{\"name\":\"Chad\",\"dial_code\":\"+235\",\"code\":\"TD\"},{\"name\":\"Chile\",\"dial_code\":\"+56\",\"code\":\"CL\"},{\"name\":\"China\",\"dial_code\":\"+86\",\"code\":\"CN\"},{\"name\":\"Christmas Island\",\"dial_code\":\"+61\",\"code\":\"CX\"},{\"name\":\"Cocos (Keeling) Islands\",\"dial_code\":\"+61\",\"code\":\"CC\"},{\"name\":\"Colombia\",\"dial_code\":\"+57\",\"code\":\"CO\"},{\"name\":\"Comoros\",\"dial_code\":\"+269\",\"code\":\"KM\"},{\"name\":\"Congo\",\"dial_code\":\"+242\",\"code\":\"CG\"},{\"name\":\"Congo, The Democratic Republic of the Congo\",\"dial_code\":\"+243\",\"code\":\"CD\"},{\"name\":\"Cook Islands\",\"dial_code\":\"+682\",\"code\":\"CK\"},{\"name\":\"Costa Rica\",\"dial_code\":\"+506\",\"code\":\"CR\"},{\"name\":\"Cote d'Ivoire\",\"dial_code\":\"+225\",\"code\":\"CI\"},{\"name\":\"Croatia\",\"dial_code\":\"+385\",\"code\":\"HR\"},{\"name\":\"Cuba\",\"dial_code\":\"+53\",\"code\":\"CU\"},{\"name\":\"Cyprus\",\"dial_code\":\"+357\",\"code\":\"CY\"},{\"name\":\"Czech Republic\",\"dial_code\":\"+420\",\"code\":\"CZ\"},{\"name\":\"Denmark\",\"dial_code\":\"+45\",\"code\":\"DK\"},{\"name\":\"Djibouti\",\"dial_code\":\"+253\",\"code\":\"DJ\"},{\"name\":\"Dominica\",\"dial_code\":\"+1767\",\"code\":\"DM\"},{\"name\":\"Dominican Republic\",\"dial_code\":\"+1849\",\"code\":\"DO\"},{\"name\":\"Ecuador\",\"dial_code\":\"+593\",\"code\":\"EC\"},{\"name\":\"Egypt\",\"dial_code\":\"+20\",\"code\":\"EG\"},{\"name\":\"El Salvador\",\"dial_code\":\"+503\",\"code\":\"SV\"},{\"name\":\"Equatorial Guinea\",\"dial_code\":\"+240\",\"code\":\"GQ\"},{\"name\":\"Eritrea\",\"dial_code\":\"+291\",\"code\":\"ER\"},{\"name\":\"Estonia\",\"dial_code\":\"+372\",\"code\":\"EE\"},{\"name\":\"Ethiopia\",\"dial_code\":\"+251\",\"code\":\"ET\"},{\"name\":\"Falkland Islands (Malvinas)\",\"dial_code\":\"+500\",\"code\":\"FK\"},{\"name\":\"Faroe Islands\",\"dial_code\":\"+298\",\"code\":\"FO\"},{\"name\":\"Fiji\",\"dial_code\":\"+679\",\"code\":\"FJ\"},{\"name\":\"Finland\",\"dial_code\":\"+358\",\"code\":\"FI\"},{\"name\":\"France\",\"dial_code\":\"+33\",\"code\":\"FR\"},{\"name\":\"French Guiana\",\"dial_code\":\"+594\",\"code\":\"GF\"},{\"name\":\"French Polynesia\",\"dial_code\":\"+689\",\"code\":\"PF\"},{\"name\":\"Gabon\",\"dial_code\":\"+241\",\"code\":\"GA\"},{\"name\":\"Gambia\",\"dial_code\":\"+220\",\"code\":\"GM\"},{\"name\":\"Georgia\",\"dial_code\":\"+995\",\"code\":\"GE\"},{\"name\":\"Germany\",\"dial_code\":\"+49\",\"code\":\"DE\"},{\"name\":\"Ghana\",\"dial_code\":\"+233\",\"code\":\"GH\"},{\"name\":\"Gibraltar\",\"dial_code\":\"+350\",\"code\":\"GI\"},{\"name\":\"Greece\",\"dial_code\":\"+30\",\"code\":\"GR\"},{\"name\":\"Greenland\",\"dial_code\":\"+299\",\"code\":\"GL\"},{\"name\":\"Grenada\",\"dial_code\":\"+1473\",\"code\":\"GD\"},{\"name\":\"Guadeloupe\",\"dial_code\":\"+590\",\"code\":\"GP\"},{\"name\":\"Guam\",\"dial_code\":\"+1671\",\"code\":\"GU\"},{\"name\":\"Guatemala\",\"dial_code\":\"+502\",\"code\":\"GT\"},{\"name\":\"Guernsey\",\"dial_code\":\"+44\",\"code\":\"GG\"},{\"name\":\"Guinea\",\"dial_code\":\"+224\",\"code\":\"GN\"},{\"name\":\"Guinea-Bissau\",\"dial_code\":\"+245\",\"code\":\"GW\"},{\"name\":\"Guyana\",\"dial_code\":\"+595\",\"code\":\"GY\"},{\"name\":\"Haiti\",\"dial_code\":\"+509\",\"code\":\"HT\"},{\"name\":\"Holy See (Vatican City State)\",\"dial_code\":\"+379\",\"code\":\"VA\"},{\"name\":\"Honduras\",\"dial_code\":\"+504\",\"code\":\"HN\"},{\"name\":\"Hong Kong\",\"dial_code\":\"+852\",\"code\":\"HK\"},{\"name\":\"Hungary\",\"dial_code\":\"+36\",\"code\":\"HU\"},{\"name\":\"Iceland\",\"dial_code\":\"+354\",\"code\":\"IS\"},{\"name\":\"India\",\"dial_code\":\"+91\",\"code\":\"IN\"},{\"name\":\"Indonesia\",\"dial_code\":\"+62\",\"code\":\"ID\"},{\"name\":\"Iran, Islamic Republic of Persian Gulf\",\"dial_code\":\"+98\",\"code\":\"IR\"},{\"name\":\"Iraq\",\"dial_code\":\"+964\",\"code\":\"IQ\"},{\"name\":\"Ireland\",\"dial_code\":\"+353\",\"code\":\"IE\"},{\"name\":\"Isle of Man\",\"dial_code\":\"+44\",\"code\":\"IM\"},{\"name\":\"Israel\",\"dial_code\":\"+972\",\"code\":\"IL\"},{\"name\":\"Italy\",\"dial_code\":\"+39\",\"code\":\"IT\"},{\"name\":\"Jamaica\",\"dial_code\":\"+1876\",\"code\":\"JM\"},{\"name\":\"Japan\",\"dial_code\":\"+81\",\"code\":\"JP\"},{\"name\":\"Jersey\",\"dial_code\":\"+44\",\"code\":\"JE\"},{\"name\":\"Jordan\",\"dial_code\":\"+962\",\"code\":\"JO\"},{\"name\":\"Kazakhstan\",\"dial_code\":\"+77\",\"code\":\"KZ\"},{\"name\":\"Kenya\",\"dial_code\":\"+254\",\"code\":\"KE\"},{\"name\":\"Kiribati\",\"dial_code\":\"+686\",\"code\":\"KI\"},{\"name\":\"Korea, Democratic People's Republic of Korea\",\"dial_code\":\"+850\",\"code\":\"KP\"},{\"name\":\"Korea, Republic of South Korea\",\"dial_code\":\"+82\",\"code\":\"KR\"},{\"name\":\"Kuwait\",\"dial_code\":\"+965\",\"code\":\"KW\"},{\"name\":\"Kyrgyzstan\",\"dial_code\":\"+996\",\"code\":\"KG\"},{\"name\":\"Laos\",\"dial_code\":\"+856\",\"code\":\"LA\"},{\"name\":\"Latvia\",\"dial_code\":\"+371\",\"code\":\"LV\"},{\"name\":\"Lebanon\",\"dial_code\":\"+961\",\"code\":\"LB\"},{\"name\":\"Lesotho\",\"dial_code\":\"+266\",\"code\":\"LS\"},{\"name\":\"Liberia\",\"dial_code\":\"+231\",\"code\":\"LR\"},{\"name\":\"Libyan Arab Jamahiriya\",\"dial_code\":\"+218\",\"code\":\"LY\"},{\"name\":\"Liechtenstein\",\"dial_code\":\"+423\",\"code\":\"LI\"},{\"name\":\"Lithuania\",\"dial_code\":\"+370\",\"code\":\"LT\"},{\"name\":\"Luxembourg\",\"dial_code\":\"+352\",\"code\":\"LU\"},{\"name\":\"Macao\",\"dial_code\":\"+853\",\"code\":\"MO\"},{\"name\":\"Macedonia\",\"dial_code\":\"+389\",\"code\":\"MK\"},{\"name\":\"Madagascar\",\"dial_code\":\"+261\",\"code\":\"MG\"},{\"name\":\"Malawi\",\"dial_code\":\"+265\",\"code\":\"MW\"},{\"name\":\"Malaysia\",\"dial_code\":\"+60\",\"code\":\"MY\"},{\"name\":\"Maldives\",\"dial_code\":\"+960\",\"code\":\"MV\"},{\"name\":\"Mali\",\"dial_code\":\"+223\",\"code\":\"ML\"},{\"name\":\"Malta\",\"dial_code\":\"+356\",\"code\":\"MT\"},{\"name\":\"Marshall Islands\",\"dial_code\":\"+692\",\"code\":\"MH\"},{\"name\":\"Martinique\",\"dial_code\":\"+596\",\"code\":\"MQ\"},{\"name\":\"Mauritania\",\"dial_code\":\"+222\",\"code\":\"MR\"},{\"name\":\"Mauritius\",\"dial_code\":\"+230\",\"code\":\"MU\"},{\"name\":\"Mayotte\",\"dial_code\":\"+262\",\"code\":\"YT\"},{\"name\":\"Mexico\",\"dial_code\":\"+52\",\"code\":\"MX\"},{\"name\":\"Micronesia, Federated States of Micronesia\",\"dial_code\":\"+691\",\"code\":\"FM\"},{\"name\":\"Moldova\",\"dial_code\":\"+373\",\"code\":\"MD\"},{\"name\":\"Monaco\",\"dial_code\":\"+377\",\"code\":\"MC\"},{\"name\":\"Mongolia\",\"dial_code\":\"+976\",\"code\":\"MN\"},{\"name\":\"Montenegro\",\"dial_code\":\"+382\",\"code\":\"ME\"},{\"name\":\"Montserrat\",\"dial_code\":\"+1664\",\"code\":\"MS\"},{\"name\":\"Morocco\",\"dial_code\":\"+212\",\"code\":\"MA\"},{\"name\":\"Mozambique\",\"dial_code\":\"+258\",\"code\":\"MZ\"},{\"name\":\"Myanmar\",\"dial_code\":\"+95\",\"code\":\"MM\"},{\"name\":\"Namibia\",\"dial_code\":\"+264\",\"code\":\"NA\"},{\"name\":\"Nauru\",\"dial_code\":\"+674\",\"code\":\"NR\"},{\"name\":\"Nepal\",\"dial_code\":\"+977\",\"code\":\"NP\"},{\"name\":\"Netherlands\",\"dial_code\":\"+31\",\"code\":\"NL\"},{\"name\":\"Netherlands Antilles\",\"dial_code\":\"+599\",\"code\":\"AN\"},{\"name\":\"New Caledonia\",\"dial_code\":\"+687\",\"code\":\"NC\"},{\"name\":\"New Zealand\",\"dial_code\":\"+64\",\"code\":\"NZ\"},{\"name\":\"Nicaragua\",\"dial_code\":\"+505\",\"code\":\"NI\"},{\"name\":\"Niger\",\"dial_code\":\"+227\",\"code\":\"NE\"},{\"name\":\"Nigeria\",\"dial_code\":\"+234\",\"code\":\"NG\"},{\"name\":\"Niue\",\"dial_code\":\"+683\",\"code\":\"NU\"},{\"name\":\"Norfolk Island\",\"dial_code\":\"+672\",\"code\":\"NF\"},{\"name\":\"Northern Mariana Islands\",\"dial_code\":\"+1670\",\"code\":\"MP\"},{\"name\":\"Norway\",\"dial_code\":\"+47\",\"code\":\"NO\"},{\"name\":\"Oman\",\"dial_code\":\"+968\",\"code\":\"OM\"},{\"name\":\"Pakistan\",\"dial_code\":\"+92\",\"code\":\"PK\"},{\"name\":\"Palau\",\"dial_code\":\"+680\",\"code\":\"PW\"},{\"name\":\"Palestinian Territory, Occupied\",\"dial_code\":\"+970\",\"code\":\"PS\"},{\"name\":\"Panama\",\"dial_code\":\"+507\",\"code\":\"PA\"},{\"name\":\"Papua New Guinea\",\"dial_code\":\"+675\",\"code\":\"PG\"},{\"name\":\"Paraguay\",\"dial_code\":\"+595\",\"code\":\"PY\"},{\"name\":\"Peru\",\"dial_code\":\"+51\",\"code\":\"PE\"},{\"name\":\"Philippines\",\"dial_code\":\"+63\",\"code\":\"PH\"},{\"name\":\"Pitcairn\",\"dial_code\":\"+872\",\"code\":\"PN\"},{\"name\":\"Poland\",\"dial_code\":\"+48\",\"code\":\"PL\"},{\"name\":\"Portugal\",\"dial_code\":\"+351\",\"code\":\"PT\"},{\"name\":\"Puerto Rico\",\"dial_code\":\"+1939\",\"code\":\"PR\"},{\"name\":\"Qatar\",\"dial_code\":\"+974\",\"code\":\"QA\"},{\"name\":\"Romania\",\"dial_code\":\"+40\",\"code\":\"RO\"},{\"name\":\"Russia\",\"dial_code\":\"+7\",\"code\":\"RU\"},{\"name\":\"Rwanda\",\"dial_code\":\"+250\",\"code\":\"RW\"},{\"name\":\"Reunion\",\"dial_code\":\"+262\",\"code\":\"RE\"},{\"name\":\"Saint Barthelemy\",\"dial_code\":\"+590\",\"code\":\"BL\"},{\"name\":\"Saint Helena, Ascension and Tristan Da Cunha\",\"dial_code\":\"+290\",\"code\":\"SH\"},{\"name\":\"Saint Kitts and Nevis\",\"dial_code\":\"+1869\",\"code\":\"KN\"},{\"name\":\"Saint Lucia\",\"dial_code\":\"+1758\",\"code\":\"LC\"},{\"name\":\"Saint Martin\",\"dial_code\":\"+590\",\"code\":\"MF\"},{\"name\":\"Saint Pierre and Miquelon\",\"dial_code\":\"+508\",\"code\":\"PM\"},{\"name\":\"Saint Vincent and the Grenadines\",\"dial_code\":\"+1784\",\"code\":\"VC\"},{\"name\":\"Samoa\",\"dial_code\":\"+685\",\"code\":\"WS\"},{\"name\":\"San Marino\",\"dial_code\":\"+378\",\"code\":\"SM\"},{\"name\":\"Sao Tome and Principe\",\"dial_code\":\"+239\",\"code\":\"ST\"},{\"name\":\"Saudi Arabia\",\"dial_code\":\"+966\",\"code\":\"SA\"},{\"name\":\"Senegal\",\"dial_code\":\"+221\",\"code\":\"SN\"},{\"name\":\"Serbia\",\"dial_code\":\"+381\",\"code\":\"RS\"},{\"name\":\"Seychelles\",\"dial_code\":\"+248\",\"code\":\"SC\"},{\"name\":\"Sierra Leone\",\"dial_code\":\"+232\",\"code\":\"SL\"},{\"name\":\"Singapore\",\"dial_code\":\"+65\",\"code\":\"SG\"},{\"name\":\"Slovakia\",\"dial_code\":\"+421\",\"code\":\"SK\"},{\"name\":\"Slovenia\",\"dial_code\":\"+386\",\"code\":\"SI\"},{\"name\":\"Solomon Islands\",\"dial_code\":\"+677\",\"code\":\"SB\"},{\"name\":\"Somalia\",\"dial_code\":\"+252\",\"code\":\"SO\"},{\"name\":\"South Africa\",\"dial_code\":\"+27\",\"code\":\"ZA\"},{\"name\":\"South Sudan\",\"dial_code\":\"+211\",\"code\":\"SS\"},{\"name\":\"South Georgia and the South Sandwich Islands\",\"dial_code\":\"+500\",\"code\":\"GS\"},{\"name\":\"Spain\",\"dial_code\":\"+34\",\"code\":\"ES\"},{\"name\":\"Sri Lanka\",\"dial_code\":\"+94\",\"code\":\"LK\"},{\"name\":\"Sudan\",\"dial_code\":\"+249\",\"code\":\"SD\"},{\"name\":\"Suriname\",\"dial_code\":\"+597\",\"code\":\"SR\"},{\"name\":\"Svalbard and Jan Mayen\",\"dial_code\":\"+47\",\"code\":\"SJ\"},{\"name\":\"Swaziland\",\"dial_code\":\"+268\",\"code\":\"SZ\"},{\"name\":\"Sweden\",\"dial_code\":\"+46\",\"code\":\"SE\"},{\"name\":\"Switzerland\",\"dial_code\":\"+41\",\"code\":\"CH\"},{\"name\":\"Syrian Arab Republic\",\"dial_code\":\"+963\",\"code\":\"SY\"},{\"name\":\"Taiwan\",\"dial_code\":\"+886\",\"code\":\"TW\"},{\"name\":\"Tajikistan\",\"dial_code\":\"+992\",\"code\":\"TJ\"},{\"name\":\"Tanzania, United Republic of Tanzania\",\"dial_code\":\"+255\",\"code\":\"TZ\"},{\"name\":\"Thailand\",\"dial_code\":\"+66\",\"code\":\"TH\"},{\"name\":\"Timor-Leste\",\"dial_code\":\"+670\",\"code\":\"TL\"},{\"name\":\"Togo\",\"dial_code\":\"+228\",\"code\":\"TG\"},{\"name\":\"Tokelau\",\"dial_code\":\"+690\",\"code\":\"TK\"},{\"name\":\"Tonga\",\"dial_code\":\"+676\",\"code\":\"TO\"},{\"name\":\"Trinidad and Tobago\",\"dial_code\":\"+1868\",\"code\":\"TT\"},{\"name\":\"Tunisia\",\"dial_code\":\"+216\",\"code\":\"TN\"},{\"name\":\"Turkey\",\"dial_code\":\"+90\",\"code\":\"TR\"},{\"name\":\"Turkmenistan\",\"dial_code\":\"+993\",\"code\":\"TM\"},{\"name\":\"Turks and Caicos Islands\",\"dial_code\":\"+1649\",\"code\":\"TC\"},{\"name\":\"Tuvalu\",\"dial_code\":\"+688\",\"code\":\"TV\"},{\"name\":\"Uganda\",\"dial_code\":\"+256\",\"code\":\"UG\"},{\"name\":\"Ukraine\",\"dial_code\":\"+380\",\"code\":\"UA\"},{\"name\":\"United Arab Emirates\",\"dial_code\":\"+971\",\"code\":\"AE\"},{\"name\":\"United Kingdom\",\"dial_code\":\"+44\",\"code\":\"GB\"},{\"name\":\"United States\",\"dial_code\":\"+1\",\"code\":\"US\"},{\"name\":\"Uruguay\",\"dial_code\":\"+598\",\"code\":\"UY\"},{\"name\":\"Uzbekistan\",\"dial_code\":\"+998\",\"code\":\"UZ\"},{\"name\":\"Vanuatu\",\"dial_code\":\"+678\",\"code\":\"VU\"},{\"name\":\"Venezuela, Bolivarian Republic of Venezuela\",\"dial_code\":\"+58\",\"code\":\"VE\"},{\"name\":\"Vietnam\",\"dial_code\":\"+84\",\"code\":\"VN\"},{\"name\":\"Virgin Islands, British\",\"dial_code\":\"+1284\",\"code\":\"VG\"},{\"name\":\"Virgin Islands, U.S.\",\"dial_code\":\"+1340\",\"code\":\"VI\"},{\"name\":\"Wallis and Futuna\",\"dial_code\":\"+681\",\"code\":\"WF\"},{\"name\":\"Yemen\",\"dial_code\":\"+967\",\"code\":\"YE\"},{\"name\":\"Zambia\",\"dial_code\":\"+260\",\"code\":\"ZM\"},{\"name\":\"Zimbabwe\",\"dial_code\":\"+263\",\"code\":\"ZW\"}]");

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(125);
/* harmony import */ var _jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_js_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



if (false) {}


vue__WEBPACK_IMPORTED_MODULE_0___default.a.directive("scSticky", {
  bind: (el, binding, vnode) => {
    var sticky = binding.value || {};
    var options = sticky.options || {};
    var events = sticky.on || {};

    if (typeof sticky.media !== 'undefined') {
      if (!_assets_js_utils__WEBPACK_IMPORTED_MODULE_2__[/* scMq */ "e"][sticky.media]()) {
        return;
      }
    }

    vnode.context.$nextTick(() => {
      var $this = $(el);
      var $header = $('#sc-header');
      var $topBar = $('#sc-page-top-bar');

      if (options.offset_top === 'inPlace') {
        options.offset_top = $this.offset().top;
      } else {
        if ($header.length) {
          options.offset_top = $header.outerHeight();
        }

        if ($topBar.length) {
          options.offset_top += $topBar.outerHeight();
        }
      }

      setTimeout(function () {
        $this.stick_in_parent(options);

        for (var i in events) {
          if (events.hasOwnProperty(i)) {
            $this.on(i, events[i]);
          }
        }
      }, 500);
    });
  },
  unbind: el => {
    $(el).trigger("sticky_kit:detach");
  }
});

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(627);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("4e339c39", content, true, context)
};

/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(633);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("760e20c8", content, true, context)
};

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Colorpicker_vue_vue_type_style_index_0_id_3bdf272a_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(484);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Colorpicker_vue_vue_type_style_index_0_id_3bdf272a_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Colorpicker_vue_vue_type_style_index_0_id_3bdf272a_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Colorpicker_vue_vue_type_style_index_0_id_3bdf272a_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Colorpicker_vue_vue_type_style_index_0_id_3bdf272a_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sc-colorpicker[data-v-3bdf272a]{position:relative;display:inline-flex}.sc-colorpicker:not(.sc-colorpicker-inline) .sc-colorpicker-picker[data-v-3bdf272a]{width:24px;height:24px;border:1px solid rgba(0,0,0,.12);display:inline-flex;cursor:pointer;transition:all .14s cubic-bezier(.55,0,.1,1);border-radius:50%}.sc-colorpicker:not(.sc-colorpicker-inline) .sc-colorpicker-dropdown[data-v-3bdf272a]{position:absolute;opacity:0;visibility:hidden;transform:scale3d(.25,.25,.25);top:100%;transition:all .28s cubic-bezier(.55,0,.1,1);transform-origin:0 0;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);border-radius:3px;z-index:1000;max-width:224px;width:100%;background:#fff;display:flex;padding:4px 6px 8px;flex-wrap:wrap;margin-top:4px}.sc-colorpicker:not(.sc-colorpicker-inline) .sc-colorpicker-dropdown>span[data-v-3bdf272a]{width:24px;height:24px;display:block;cursor:pointer;margin:4px 2px 0;transition:all .14s cubic-bezier(.55,0,.1,1);flex-shrink:0}.sc-colorpicker:not(.sc-colorpicker-inline) .sc-colorpicker-dropdown>span.sc-color-active[data-v-3bdf272a]{border-radius:50%}.sc-colorpicker:not(.sc-colorpicker-inline).sc-colorpicker-active .sc-colorpicker-dropdown[data-v-3bdf272a]{opacity:1;visibility:visible;transform:scaleX(1)}.sc-colorpicker input[data-v-3bdf272a]{visibility:hidden;position:absolute;width:0;height:0}.sc-colorpicker-inline .sc-colorpicker-colors[data-v-3bdf272a]{background:#fff;display:flex;padding:4px 0;flex-wrap:wrap}.sc-colorpicker-inline .sc-colorpicker-colors>span[data-v-3bdf272a]{width:24px;height:24px;display:block;cursor:pointer;margin:4px 2px 0;transition:all .14s cubic-bezier(.55,0,.1,1);flex-shrink:0}.sc-colorpicker-inline .sc-colorpicker-colors>span.sc-color-active[data-v-3bdf272a]{border-radius:50%}.sc-colorpicker-inline .sc-colorpicker-dropdown[data-v-3bdf272a]{width:224px}.sc-colorpicker-right .sc-colorpicker-dropdown[data-v-3bdf272a]{left:auto;right:0;transform-origin:100% 0!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(629);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(7).default("1224c93b", content, true)

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(53);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(630);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(631);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flag{display:inline-block;width:24px;height:24px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:auto auto}@media (-webkit-min-device-pixel-ratio:1.5),all and (-o-min-device-pixel-ratio:3/2),all and (min--moz-device-pixel-ratio:1.5),all and (min-device-pixel-ratio:1.5){.flag{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-size:384px 360px}}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.flag{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-size:384px 360px}}.flag.flag-ad{background-position:-24px 0}.flag.flag-ae{background-position:-48px 0}.flag.flag-af{background-position:-72px 0}.flag.flag-ag{background-position:-96px 0}.flag.flag-ai{background-position:-120px 0}.flag.flag-al{background-position:-144px 0}.flag.flag-am{background-position:-168px 0}.flag.flag-an{background-position:-192px 0}.flag.flag-ao{background-position:-216px 0}.flag.flag-ar{background-position:-240px 0}.flag.flag-as{background-position:-264px 0}.flag.flag-at{background-position:-288px 0}.flag.flag-au{background-position:-312px 0}.flag.flag-aw{background-position:-336px 0}.flag.flag-ax{background-position:-360px 0}.flag.flag-az{background-position:0 -24px}.flag.flag-ba{background-position:-24px -24px}.flag.flag-bb{background-position:-48px -24px}.flag.flag-bd{background-position:-72px -24px}.flag.flag-be{background-position:-96px -24px}.flag.flag-bf{background-position:-120px -24px}.flag.flag-bg{background-position:-144px -24px}.flag.flag-bh{background-position:-168px -24px}.flag.flag-bi{background-position:-192px -24px}.flag.flag-bj{background-position:-216px -24px}.flag.flag-bl{background-position:-240px -24px}.flag.flag-bm{background-position:-264px -24px}.flag.flag-bn{background-position:-288px -24px}.flag.flag-bo{background-position:-312px -24px}.flag.flag-br{background-position:-336px -24px}.flag.flag-bs{background-position:-360px -24px}.flag.flag-bt{background-position:0 -48px}.flag.flag-bw{background-position:-24px -48px}.flag.flag-by{background-position:-48px -48px}.flag.flag-bz{background-position:-72px -48px}.flag.flag-ca{background-position:-96px -48px}.flag.flag-cd{background-position:-120px -48px}.flag.flag-cf{background-position:-144px -48px}.flag.flag-cg{background-position:-168px -48px}.flag.flag-ch{background-position:-192px -48px}.flag.flag-ci{background-position:-216px -48px}.flag.flag-ck{background-position:-240px -48px}.flag.flag-cl{background-position:-264px -48px}.flag.flag-cm{background-position:-288px -48px}.flag.flag-cn{background-position:-312px -48px}.flag.flag-co{background-position:-336px -48px}.flag.flag-cr{background-position:-360px -48px}.flag.flag-cu{background-position:0 -72px}.flag.flag-cv{background-position:-24px -72px}.flag.flag-cw{background-position:-48px -72px}.flag.flag-cy{background-position:-72px -72px}.flag.flag-cz{background-position:-96px -72px}.flag.flag-de{background-position:-120px -72px}.flag.flag-dj{background-position:-144px -72px}.flag.flag-dk{background-position:-168px -72px}.flag.flag-dm{background-position:-192px -72px}.flag.flag-do{background-position:-216px -72px}.flag.flag-dz{background-position:-240px -72px}.flag.flag-ec{background-position:-264px -72px}.flag.flag-ee{background-position:-288px -72px}.flag.flag-eg{background-position:-312px -72px}.flag.flag-eh{background-position:-336px -72px}.flag.flag-er{background-position:-360px -72px}.flag.flag-es{background-position:0 -96px}.flag.flag-et{background-position:-24px -96px}.flag.flag-eu{background-position:-48px -96px}.flag.flag-fi{background-position:-72px -96px}.flag.flag-fj{background-position:-96px -96px}.flag.flag-fk{background-position:-120px -96px}.flag.flag-fm{background-position:-144px -96px}.flag.flag-fo{background-position:-168px -96px}.flag.flag-fr{background-position:-192px -96px}.flag.flag-ga{background-position:-216px -96px}.flag.flag-gb{background-position:-240px -96px}.flag.flag-gd{background-position:-264px -96px}.flag.flag-ge{background-position:-288px -96px}.flag.flag-gg{background-position:-312px -96px}.flag.flag-gh{background-position:-336px -96px}.flag.flag-gi{background-position:-360px -96px}.flag.flag-gl{background-position:0 -120px}.flag.flag-gm{background-position:-24px -120px}.flag.flag-gn{background-position:-48px -120px}.flag.flag-gq{background-position:-72px -120px}.flag.flag-gr{background-position:-96px -120px}.flag.flag-gs{background-position:-120px -120px}.flag.flag-gt{background-position:-144px -120px}.flag.flag-gu{background-position:-168px -120px}.flag.flag-gw{background-position:-192px -120px}.flag.flag-gy{background-position:-216px -120px}.flag.flag-hk{background-position:-240px -120px}.flag.flag-hn{background-position:-264px -120px}.flag.flag-hr{background-position:-288px -120px}.flag.flag-ht{background-position:-312px -120px}.flag.flag-hu{background-position:-336px -120px}.flag.flag-ic{background-position:-360px -120px}.flag.flag-id{background-position:0 -144px}.flag.flag-ie{background-position:-24px -144px}.flag.flag-il{background-position:-48px -144px}.flag.flag-im{background-position:-72px -144px}.flag.flag-in{background-position:-96px -144px}.flag.flag-iq{background-position:-120px -144px}.flag.flag-ir{background-position:-144px -144px}.flag.flag-is{background-position:-168px -144px}.flag.flag-it{background-position:-192px -144px}.flag.flag-je{background-position:-216px -144px}.flag.flag-jm{background-position:-240px -144px}.flag.flag-jo{background-position:-264px -144px}.flag.flag-jp{background-position:-288px -144px}.flag.flag-ke{background-position:-312px -144px}.flag.flag-kg{background-position:-336px -144px}.flag.flag-kh{background-position:-360px -144px}.flag.flag-ki{background-position:0 -168px}.flag.flag-km{background-position:-24px -168px}.flag.flag-kn{background-position:-48px -168px}.flag.flag-kp{background-position:-72px -168px}.flag.flag-kr{background-position:-96px -168px}.flag.flag-kw{background-position:-120px -168px}.flag.flag-ky{background-position:-144px -168px}.flag.flag-kz{background-position:-168px -168px}.flag.flag-la{background-position:-192px -168px}.flag.flag-lb{background-position:-216px -168px}.flag.flag-lc{background-position:-240px -168px}.flag.flag-li{background-position:-264px -168px}.flag.flag-lk{background-position:-288px -168px}.flag.flag-lr{background-position:-312px -168px}.flag.flag-ls{background-position:-336px -168px}.flag.flag-lt{background-position:-360px -168px}.flag.flag-lu{background-position:0 -192px}.flag.flag-lv{background-position:-24px -192px}.flag.flag-ly{background-position:-48px -192px}.flag.flag-ma{background-position:-72px -192px}.flag.flag-mc{background-position:-96px -192px}.flag.flag-md{background-position:-120px -192px}.flag.flag-me{background-position:-144px -192px}.flag.flag-mf{background-position:-168px -192px}.flag.flag-mg{background-position:-192px -192px}.flag.flag-mh{background-position:-216px -192px}.flag.flag-mk{background-position:-240px -192px}.flag.flag-ml{background-position:-264px -192px}.flag.flag-mm{background-position:-288px -192px}.flag.flag-mn{background-position:-312px -192px}.flag.flag-mo{background-position:-336px -192px}.flag.flag-mp{background-position:-360px -192px}.flag.flag-mq{background-position:0 -216px}.flag.flag-mr{background-position:-24px -216px}.flag.flag-ms{background-position:-48px -216px}.flag.flag-mt{background-position:-72px -216px}.flag.flag-mu{background-position:-96px -216px}.flag.flag-mv{background-position:-120px -216px}.flag.flag-mw{background-position:-144px -216px}.flag.flag-mx{background-position:-168px -216px}.flag.flag-my{background-position:-192px -216px}.flag.flag-mz{background-position:-216px -216px}.flag.flag-na{background-position:-240px -216px}.flag.flag-nc{background-position:-264px -216px}.flag.flag-ne{background-position:-288px -216px}.flag.flag-nf{background-position:-312px -216px}.flag.flag-ng{background-position:-336px -216px}.flag.flag-ni{background-position:-360px -216px}.flag.flag-nl{background-position:0 -240px}.flag.flag-no{background-position:-24px -240px}.flag.flag-np{background-position:-48px -240px}.flag.flag-nr{background-position:-72px -240px}.flag.flag-nu{background-position:-96px -240px}.flag.flag-nz{background-position:-120px -240px}.flag.flag-om{background-position:-144px -240px}.flag.flag-pa{background-position:-168px -240px}.flag.flag-pe{background-position:-192px -240px}.flag.flag-pf{background-position:-216px -240px}.flag.flag-pg{background-position:-240px -240px}.flag.flag-ph{background-position:-264px -240px}.flag.flag-pk{background-position:-288px -240px}.flag.flag-pl{background-position:-312px -240px}.flag.flag-pn{background-position:-336px -240px}.flag.flag-pr{background-position:-360px -240px}.flag.flag-ps{background-position:0 -264px}.flag.flag-pt{background-position:-24px -264px}.flag.flag-pw{background-position:-48px -264px}.flag.flag-py{background-position:-72px -264px}.flag.flag-qa{background-position:-96px -264px}.flag.flag-ro{background-position:-120px -264px}.flag.flag-rs{background-position:-144px -264px}.flag.flag-ru{background-position:-168px -264px}.flag.flag-rw{background-position:-192px -264px}.flag.flag-sa{background-position:-216px -264px}.flag.flag-sb{background-position:-240px -264px}.flag.flag-sc{background-position:-264px -264px}.flag.flag-sd{background-position:-288px -264px}.flag.flag-se{background-position:-312px -264px}.flag.flag-sg{background-position:-336px -264px}.flag.flag-sh{background-position:-360px -264px}.flag.flag-si{background-position:0 -288px}.flag.flag-sk{background-position:-24px -288px}.flag.flag-sl{background-position:-48px -288px}.flag.flag-sm{background-position:-72px -288px}.flag.flag-sn{background-position:-96px -288px}.flag.flag-so{background-position:-120px -288px}.flag.flag-sr{background-position:-144px -288px}.flag.flag-ss{background-position:-168px -288px}.flag.flag-st{background-position:-192px -288px}.flag.flag-sv{background-position:-216px -288px}.flag.flag-sy{background-position:-240px -288px}.flag.flag-sz{background-position:-264px -288px}.flag.flag-tc{background-position:-288px -288px}.flag.flag-td{background-position:-312px -288px}.flag.flag-tf{background-position:-336px -288px}.flag.flag-tg{background-position:-360px -288px}.flag.flag-th{background-position:0 -312px}.flag.flag-tj{background-position:-24px -312px}.flag.flag-tk{background-position:-48px -312px}.flag.flag-tl{background-position:-72px -312px}.flag.flag-tm{background-position:-96px -312px}.flag.flag-tn{background-position:-120px -312px}.flag.flag-to{background-position:-144px -312px}.flag.flag-tr{background-position:-168px -312px}.flag.flag-tt{background-position:-192px -312px}.flag.flag-tv{background-position:-216px -312px}.flag.flag-tw{background-position:-240px -312px}.flag.flag-tz{background-position:-264px -312px}.flag.flag-ua{background-position:-288px -312px}.flag.flag-ug{background-position:-312px -312px}.flag.flag-us{background-position:-336px -312px}.flag.flag-uy{background-position:-360px -312px}.flag.flag-uz{background-position:0 -336px}.flag.flag-va{background-position:-24px -336px}.flag.flag-vc{background-position:-48px -336px}.flag.flag-ve{background-position:-72px -336px}.flag.flag-vg{background-position:-96px -336px}.flag.flag-vi{background-position:-120px -336px}.flag.flag-vn{background-position:-144px -336px}.flag.flag-vu{background-position:-168px -336px}.flag.flag-wf{background-position:-192px -336px}.flag.flag-ws{background-position:-216px -336px}.flag.flag-ye{background-position:-240px -336px}.flag.flag-yt{background-position:-264px -336px}.flag.flag-za{background-position:-288px -336px}.flag.flag-zm{background-position:-312px -336px}.flag.flag-zw{background-position:-336px -336px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/flags.9d196f4.png";

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/flags@2x.a5e4515.png";

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_0f9fd43a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(485);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_0f9fd43a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_0f9fd43a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_0f9fd43a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_0f9fd43a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".pretty *{box-sizing:border-box}.pretty input:not([type=checkbox]):not([type=radio]){display:none}.pretty{position:relative;display:inline-block;margin-right:1em;white-space:nowrap;line-height:1}.pretty input{position:absolute;left:0;top:0;min-width:1em;width:100%;height:100%;z-index:2;opacity:0;margin:0;padding:0;cursor:pointer}.pretty .state label{position:static;display:inline-block;font-weight:400;margin:0;text-indent:1.5em;min-width:calc(1em + 2px)}.pretty .state label:after,.pretty .state label:before{content:\"\";width:calc(1em + 2px);height:calc(1em + 2px);display:block;box-sizing:border-box;border-radius:0;border:1px solid transparent;z-index:0;position:absolute;left:0;top:calc(-108% + 1em);background-color:transparent}.pretty .state label:before{border-color:#bdc3c7}.pretty .state.p-is-hover,.pretty .state.p-is-indeterminate{display:none}@-webkit-keyframes zoom{0%{opacity:0;transform:scale(0)}}@keyframes zoom{0%{opacity:0;transform:scale(0)}}@-webkit-keyframes tada{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;transform:scale(7)}38%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;transform:scale(1)}55%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.5)}72%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}81%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.24)}89%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}95%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.04)}to{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}}@keyframes tada{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;transform:scale(7)}38%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;transform:scale(1)}55%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.5)}72%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}81%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.24)}89%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}95%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.04)}to{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}}@-webkit-keyframes jelly{0%{transform:scaleX(1)}30%{transform:scale3d(.75,1.25,1)}40%{transform:scale3d(1.25,.75,1)}50%{transform:scale3d(.85,1.15,1)}65%{transform:scale3d(1.05,.95,1)}75%{transform:scale3d(.95,1.05,1)}to{transform:scaleX(1)}}@keyframes jelly{0%{transform:scaleX(1)}30%{transform:scale3d(.75,1.25,1)}40%{transform:scale3d(1.25,.75,1)}50%{transform:scale3d(.85,1.15,1)}65%{transform:scale3d(1.05,.95,1)}75%{transform:scale3d(.95,1.05,1)}to{transform:scaleX(1)}}@-webkit-keyframes rotate{0%{opacity:0;transform:translateZ(-200px) rotate(-45deg)}to{opacity:1;transform:translateZ(0) rotate(0)}}@keyframes rotate{0%{opacity:0;transform:translateZ(-200px) rotate(-45deg)}to{opacity:1;transform:translateZ(0) rotate(0)}}@-webkit-keyframes pulse{0%{box-shadow:0 0 0 0 #bdc3c7}to{box-shadow:0 0 0 1.5em rgba(189,195,199,0)}}@keyframes pulse{0%{box-shadow:0 0 0 0 #bdc3c7}to{box-shadow:0 0 0 1.5em rgba(189,195,199,0)}}.pretty.p-default.p-fill .state label:after{transform:scale(1)}.pretty.p-default .state label:after{transform:scale(.6)}.pretty.p-default input:checked~.state label:after{background-color:#bdc3c7!important}.pretty.p-default.p-thick .state label:after,.pretty.p-default.p-thick .state label:before{border-width:.14286em}.pretty.p-default.p-thick .state label:after{transform:scale(.4)!important}.pretty.p-icon .state .icon{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc(-108% + 1em);border:1px solid transparent;opacity:0}.pretty.p-icon .state .icon:before{margin:0;width:100%;height:100%;text-align:center;display:flex;flex:1;justify-content:center;align-items:center;line-height:1}.pretty.p-icon input:checked~.state .icon{opacity:1}.pretty.p-icon input:checked~.state label:before{border-color:#5a656b}.pretty.p-svg .state .svg{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc(-108% + 1em);border:1px solid transparent;opacity:0}.pretty.p-svg .state svg{margin:0;width:100%;height:100%;text-align:center;display:flex;flex:1;justify-content:center;align-items:center;line-height:1}.pretty.p-svg input:checked~.state .svg{opacity:1}.pretty.p-image .state img{opacity:0;position:absolute;width:calc(1em + 2px);height:calc(1em + 2px);top:0;top:calc(-108% + 1em);left:0;z-index:0;text-align:center;line-height:normal;transform:scale(.8)}.pretty.p-image input:checked~.state img{opacity:1}.pretty.p-switch input{min-width:2em}.pretty.p-switch .state{position:relative}.pretty.p-switch .state:before{content:\"\";border:1px solid #bdc3c7;border-radius:60px;width:2em;box-sizing:unset;height:calc(1em + 2px);position:absolute;top:0;top:calc(-116% + 1em);z-index:0;transition:all .5s ease}.pretty.p-switch .state label{text-indent:2.5em}.pretty.p-switch .state label:after,.pretty.p-switch .state label:before{transition:all .5s ease;border-radius:100%;left:0;border-color:transparent;transform:scale(.8)}.pretty.p-switch .state label:after{background-color:#bdc3c7!important}.pretty.p-switch input:checked~.state:before{border-color:#5a656b}.pretty.p-switch input:checked~.state label:before{opacity:0}.pretty.p-switch input:checked~.state label:after{background-color:#5a656b!important;left:1em}.pretty.p-switch.p-fill input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}.pretty.p-switch.p-fill input:checked~.state label:before{opacity:0}.pretty.p-switch.p-fill input:checked~.state label:after{background-color:#fff!important;left:1em}.pretty.p-switch.p-slim .state:before{height:.1em;background:#bdc3c7!important;top:calc(50% - .1em)}.pretty.p-switch.p-slim input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}.pretty.p-has-hover input:hover~.state:not(.p-is-hover){display:none}.pretty.p-has-hover input:hover~.state.p-is-hover,.pretty.p-has-hover input:hover~.state.p-is-hover .icon{display:block}.pretty.p-has-focus input:focus~.state label:before{box-shadow:0 0 3px 0 #bdc3c7}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state:not(.p-is-indeterminate){display:none}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate{display:block}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate .icon{display:block;opacity:1}.pretty.p-toggle .state.p-on{opacity:0;display:none}.pretty.p-toggle .state .icon,.pretty.p-toggle .state.p-off,.pretty.p-toggle .state .svg,.pretty.p-toggle .state img{opacity:1;display:inherit}.pretty.p-toggle .state.p-off .icon{color:#bdc3c7}.pretty.p-toggle input:checked~.state.p-on{opacity:1;display:inherit}.pretty.p-toggle input:checked~.state.p-off{opacity:0;display:none}.pretty.p-plain.p-toggle .state label:before,.pretty.p-plain input:checked~.state label:before{content:none}.pretty.p-plain.p-plain .icon{transform:scale(1.1)}.pretty.p-round .state label:after,.pretty.p-round .state label:before{border-radius:100%}.pretty.p-round.p-icon .state .icon{border-radius:100%;overflow:hidden}.pretty.p-round.p-icon .state .icon:before{transform:scale(.8)}.pretty.p-curve .state label:after,.pretty.p-curve .state label:before{border-radius:20%}.pretty.p-smooth .icon,.pretty.p-smooth .svg,.pretty.p-smooth label:after,.pretty.p-smooth label:before{transition:all .5s ease}.pretty.p-smooth input:checked+.state label:after{transition:all .3s ease}.pretty.p-smooth.p-default input:checked+.state label:after,.pretty.p-smooth input:checked+.state .icon,.pretty.p-smooth input:checked+.state .svg,.pretty.p-smooth input:checked+.state img{-webkit-animation:zoom .2s ease;animation:zoom .2s ease}.pretty.p-smooth.p-plain input:checked+.state label:before{content:\"\";transform:scale(0);transition:all .5s ease}.pretty.p-tada:not(.p-default) input:checked+.state .icon,.pretty.p-tada:not(.p-default) input:checked+.state .svg,.pretty.p-tada:not(.p-default) input:checked+.state img,.pretty.p-tada:not(.p-default) input:checked+.state label:after,.pretty.p-tada:not(.p-default) input:checked+.state label:before{-webkit-animation:tada .7s cubic-bezier(.25,.46,.45,.94) 1 alternate;animation:tada .7s cubic-bezier(.25,.46,.45,.94) 1 alternate;opacity:1}.pretty.p-jelly:not(.p-default) input:checked+.state .icon,.pretty.p-jelly:not(.p-default) input:checked+.state .svg,.pretty.p-jelly:not(.p-default) input:checked+.state img,.pretty.p-jelly:not(.p-default) input:checked+.state label:after,.pretty.p-jelly:not(.p-default) input:checked+.state label:before{-webkit-animation:jelly .7s cubic-bezier(.25,.46,.45,.94);animation:jelly .7s cubic-bezier(.25,.46,.45,.94);opacity:1}.pretty.p-jelly:not(.p-default) input:checked+.state label:before{border-color:transparent}.pretty.p-rotate:not(.p-default) input:checked~.state .icon,.pretty.p-rotate:not(.p-default) input:checked~.state .svg,.pretty.p-rotate:not(.p-default) input:checked~.state img,.pretty.p-rotate:not(.p-default) input:checked~.state label:after,.pretty.p-rotate:not(.p-default) input:checked~.state label:before{-webkit-animation:rotate .7s cubic-bezier(.25,.46,.45,.94);animation:rotate .7s cubic-bezier(.25,.46,.45,.94);opacity:1}.pretty.p-rotate:not(.p-default) input:checked~.state label:before{border-color:transparent}.pretty.p-pulse:not(.p-switch) input:checked~.state label:before{-webkit-animation:pulse 1s;animation:pulse 1s}.pretty input[disabled]{cursor:not-allowed;display:none}.pretty input[disabled]~*{opacity:.5}.pretty.p-locked input{display:none;cursor:not-allowed}.pretty.p-toggle .state.p-primary label:after,.pretty input:checked~.state.p-primary label:after{background-color:#428bca!important}.pretty.p-toggle .state.p-primary .icon,.pretty.p-toggle .state.p-primary .svg,.pretty input:checked~.state.p-primary .icon,.pretty input:checked~.state.p-primary .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-primary-o label:before,.pretty input:checked~.state.p-primary-o label:before{border-color:#428bca}.pretty.p-toggle .state.p-primary-o label:after,.pretty input:checked~.state.p-primary-o label:after{background-color:transparent}.pretty.p-toggle .state.p-primary-o .icon,.pretty.p-toggle .state.p-primary-o .svg,.pretty.p-toggle .state.p-primary-o svg,.pretty input:checked~.state.p-primary-o .icon,.pretty input:checked~.state.p-primary-o .svg,.pretty input:checked~.state.p-primary-o svg{color:#428bca;stroke:#428bca}.pretty.p-default:not(.p-fill) input:checked~.state.p-primary-o label:after{background-color:#428bca!important}.pretty.p-switch input:checked~.state.p-primary:before{border-color:#428bca}.pretty.p-switch.p-fill input:checked~.state.p-primary:before{background-color:#428bca!important}.pretty.p-switch.p-slim input:checked~.state.p-primary:before{border-color:#245682;background-color:#245682!important}.pretty.p-toggle .state.p-info label:after,.pretty input:checked~.state.p-info label:after{background-color:#5bc0de!important}.pretty.p-toggle .state.p-info .icon,.pretty.p-toggle .state.p-info .svg,.pretty input:checked~.state.p-info .icon,.pretty input:checked~.state.p-info .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-info-o label:before,.pretty input:checked~.state.p-info-o label:before{border-color:#5bc0de}.pretty.p-toggle .state.p-info-o label:after,.pretty input:checked~.state.p-info-o label:after{background-color:transparent}.pretty.p-toggle .state.p-info-o .icon,.pretty.p-toggle .state.p-info-o .svg,.pretty.p-toggle .state.p-info-o svg,.pretty input:checked~.state.p-info-o .icon,.pretty input:checked~.state.p-info-o .svg,.pretty input:checked~.state.p-info-o svg{color:#5bc0de;stroke:#5bc0de}.pretty.p-default:not(.p-fill) input:checked~.state.p-info-o label:after{background-color:#5bc0de!important}.pretty.p-switch input:checked~.state.p-info:before{border-color:#5bc0de}.pretty.p-switch.p-fill input:checked~.state.p-info:before{background-color:#5bc0de!important}.pretty.p-switch.p-slim input:checked~.state.p-info:before{border-color:#2390b0;background-color:#2390b0!important}.pretty.p-toggle .state.p-success label:after,.pretty input:checked~.state.p-success label:after{background-color:#5cb85c!important}.pretty.p-toggle .state.p-success .icon,.pretty.p-toggle .state.p-success .svg,.pretty input:checked~.state.p-success .icon,.pretty input:checked~.state.p-success .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-success-o label:before,.pretty input:checked~.state.p-success-o label:before{border-color:#5cb85c}.pretty.p-toggle .state.p-success-o label:after,.pretty input:checked~.state.p-success-o label:after{background-color:transparent}.pretty.p-toggle .state.p-success-o .icon,.pretty.p-toggle .state.p-success-o .svg,.pretty.p-toggle .state.p-success-o svg,.pretty input:checked~.state.p-success-o .icon,.pretty input:checked~.state.p-success-o .svg,.pretty input:checked~.state.p-success-o svg{color:#5cb85c;stroke:#5cb85c}.pretty.p-default:not(.p-fill) input:checked~.state.p-success-o label:after{background-color:#5cb85c!important}.pretty.p-switch input:checked~.state.p-success:before{border-color:#5cb85c}.pretty.p-switch.p-fill input:checked~.state.p-success:before{background-color:#5cb85c!important}.pretty.p-switch.p-slim input:checked~.state.p-success:before{border-color:#357935;background-color:#357935!important}.pretty.p-toggle .state.p-warning label:after,.pretty input:checked~.state.p-warning label:after{background-color:#f0ad4e!important}.pretty.p-toggle .state.p-warning .icon,.pretty.p-toggle .state.p-warning .svg,.pretty input:checked~.state.p-warning .icon,.pretty input:checked~.state.p-warning .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-warning-o label:before,.pretty input:checked~.state.p-warning-o label:before{border-color:#f0ad4e}.pretty.p-toggle .state.p-warning-o label:after,.pretty input:checked~.state.p-warning-o label:after{background-color:transparent}.pretty.p-toggle .state.p-warning-o .icon,.pretty.p-toggle .state.p-warning-o .svg,.pretty.p-toggle .state.p-warning-o svg,.pretty input:checked~.state.p-warning-o .icon,.pretty input:checked~.state.p-warning-o .svg,.pretty input:checked~.state.p-warning-o svg{color:#f0ad4e;stroke:#f0ad4e}.pretty.p-default:not(.p-fill) input:checked~.state.p-warning-o label:after{background-color:#f0ad4e!important}.pretty.p-switch input:checked~.state.p-warning:before{border-color:#f0ad4e}.pretty.p-switch.p-fill input:checked~.state.p-warning:before{background-color:#f0ad4e!important}.pretty.p-switch.p-slim input:checked~.state.p-warning:before{border-color:#c77c11;background-color:#c77c11!important}.pretty.p-toggle .state.p-danger label:after,.pretty input:checked~.state.p-danger label:after{background-color:#d9534f!important}.pretty.p-toggle .state.p-danger .icon,.pretty.p-toggle .state.p-danger .svg,.pretty input:checked~.state.p-danger .icon,.pretty input:checked~.state.p-danger .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-danger-o label:before,.pretty input:checked~.state.p-danger-o label:before{border-color:#d9534f}.pretty.p-toggle .state.p-danger-o label:after,.pretty input:checked~.state.p-danger-o label:after{background-color:transparent}.pretty.p-toggle .state.p-danger-o .icon,.pretty.p-toggle .state.p-danger-o .svg,.pretty.p-toggle .state.p-danger-o svg,.pretty input:checked~.state.p-danger-o .icon,.pretty input:checked~.state.p-danger-o .svg,.pretty input:checked~.state.p-danger-o svg{color:#d9534f;stroke:#d9534f}.pretty.p-default:not(.p-fill) input:checked~.state.p-danger-o label:after{background-color:#d9534f!important}.pretty.p-switch input:checked~.state.p-danger:before{border-color:#d9534f}.pretty.p-switch.p-fill input:checked~.state.p-danger:before{background-color:#d9534f!important}.pretty.p-switch.p-slim input:checked~.state.p-danger:before{border-color:#a02622;background-color:#a02622!important}.pretty.p-bigger .icon,.pretty.p-bigger .img,.pretty.p-bigger .svg,.pretty.p-bigger label:after,.pretty.p-bigger label:before{font-size:1.2em!important;top:calc(-135% + 1em)!important}.pretty.p-bigger label{text-indent:1.7em}@media print{.pretty .state .icon,.pretty .state:before,.pretty .state label:after,.pretty .state label:before{color-adjust:exact;-webkit-print-color-adjust:exact;print-color-adjust:exact}}body .pretty{margin:0;line-height:normal}body .pretty.p-smooth .icon,body .pretty.p-smooth .svg{transition:all .14s cubic-bezier(.55,0,.1,1)}body .pretty label a{position:relative;z-index:10}body .pretty:not(.p-switch):not(.p-radio),body .pretty:not(.p-switch):not(.p-radio) .state{height:18px}body .pretty:not(.p-switch):not(.p-radio) .state{display:flex;align-items:center}body .pretty:not(.p-switch):not(.p-radio).p-icon .state .icon{border-radius:4px;left:0;top:-1px;width:18px;height:18px}body .pretty:not(.p-switch):not(.p-radio).p-icon .state .icon,body .pretty:not(.p-switch):not(.p-radio).p-icon .state .icon:before{font-size:18px}body .pretty:not(.p-switch):not(.p-radio) .state label{min-width:18px;text-indent:26px;min-height:18px}body .pretty:not(.p-switch):not(.p-radio) .state label:after,body .pretty:not(.p-switch):not(.p-radio) .state label:before{width:18px;height:18px;top:0}body .pretty:not(.p-switch):not(.p-radio) .state label:before{background:transparent;border-radius:50%;transition:all .14s cubic-bezier(.55,0,.1,1)}body .pretty:not(.p-switch):not(.p-radio) .state label:after{background:#fff;border-radius:2px;border:2px solid rgba(0,0,0,.54);transition:all .24s cubic-bezier(.55,0,.1,1)}body .pretty:not(.p-switch):not(.p-radio) input:checked~.state label:after{border-color:#1976d2;background:#1976d2}body .pretty:not(.p-switch):not(.p-radio).p-custom input:checked~.state label:after{background:var(--color);border-color:var(--color)}body .pretty:not(.p-switch):not(.p-radio) input:checked[disabled]~.state label:after{border-color:#757575;background:#757575}body .pretty:not(.p-switch):not(.p-radio) input[disabled]~*{opacity:.6}body .pretty:not(.p-switch):not(.p-radio).p-icon input:checked~.state .icon{color:#fff}body .pretty:not(.p-switch):not(.p-radio) .state.p-is-indeterminate .icon{top:0;color:#fff}body .pretty:not(.p-switch):not(.p-radio) .state.p-is-indeterminate .icon,body .pretty:not(.p-switch):not(.p-radio) .state.p-is-indeterminate .icon:before{font-size:18px}body .pretty:not(.p-switch):not(.p-radio) .state.p-is-indeterminate label:after{border-color:#1976d2;background-color:#1976d2}body .pretty.p-radio,body .pretty.p-radio .state{min-height:20px}body .pretty.p-radio .state{display:flex;align-items:center;position:relative}body .pretty.p-radio .state:before{content:\"\";position:absolute;left:0;top:50%;width:20px;height:20px;border:2px solid rgba(0,0,0,.54);transition:all .24s cubic-bezier(.55,0,.1,1);border-radius:50%;box-sizing:border-box;margin-top:-10px;background:#fff}body .pretty.p-radio .state label{min-width:20px;text-indent:26px}body .pretty.p-radio .state label:before{background:transparent;border-radius:50%;border-color:transparent;transition:all .14s cubic-bezier(.55,0,.1,1);width:18px;height:18px;top:0}body .pretty.p-radio .state label:after{border-radius:50%;transition:all .24s cubic-bezier(.55,0,.1,1);width:10px;height:10px;top:50%;margin-top:-5px;left:5px}body .pretty.p-radio input:checked~.state:before{border-color:#1976d2}body .pretty.p-radio input:checked~.state label:after{background:#1976d2}body .pretty.p-radio input:checked[disabled]~.state:before{border-color:rgba(0,0,0,.54)}body .pretty.p-radio input:checked[disabled]~.state label:after{background:rgba(0,0,0,.54)}body .pretty.p-radio input[disabled]~*{opacity:.6}body .pretty.p-switch .state{height:26px}body .pretty.p-switch .state:before{border-radius:20px;height:14px;width:36px;background-color:rgba(0,0,0,.26);border:none;top:50%;margin-top:-7px;left:2px;transition:all .14s cubic-bezier(.55,0,.1,1)}body .pretty.p-switch .state label{text-indent:48px;line-height:28px;height:28px;min-width:38px}body .pretty.p-switch .state label:after,body .pretty.p-switch .state label:before{width:20px;height:20px;top:3px;box-shadow:0 1px 4px rgba(0,0,0,.55);transition:all .14s cubic-bezier(.55,0,.1,1);border:none;transform:none}body .pretty.p-switch .state label:after{background-color:#fff!important}body .pretty.p-switch input:checked~.state:before{background-color:#92c2f2}body .pretty.p-switch input:checked~.state label:after{left:20px;background-color:#1976d2!important}body .pretty.p-switch input:checked~.state.p-primary:before{background-color:#5cf1ff}body .pretty.p-switch input:checked~.state.p-primary label:after{background-color:#00838f!important}body .pretty.p-switch input:checked~.state.p-danger:before{background-color:#f6bebd}body .pretty.p-switch input:checked~.state.p-danger label:after{background-color:#e53935!important}body .pretty.p-switch input:checked~.state.p-success:before{background-color:#c8e1ad}body .pretty.p-switch input:checked~.state.p-success label:after{background-color:#7cb342!important}body .pretty.p-switch input:checked~.state.p-warning:before{background-color:#ffe199}body .pretty.p-switch input:checked~.state.p-warning label:after{background-color:#ffb300!important}body .pretty.uk-flex{display:flex}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/settings.vue?vue&type=template&id=0f9fd43a&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_vm._ssrNode("<div class=\"uk-flex uk-flex-center\">", "</div>", [_vm._ssrNode("<div class=\"uk-width-4-5@l\">", "</div>", [_vm._ssrNode("<div data-uk-grid class=\"uk-grid\">", "</div>", [_vm._ssrNode("<div class=\"uk-width-1-4@m uk-width-1-5@l\">", "</div>", [_c('div', {
    directives: [{
      name: "sc-sticky",
      rawName: "v-sc-sticky",
      value: _vm.sideMenu,
      expression: "sideMenu"
    }]
  }, [_vm._ssrNode("<ul data-uk-switcher=\"connect: .sc-settings-container; animation: uk-animation-slide-bottom-small; swiping: false\" class=\"uk-subnav uk-subnav-pill uk-flex-column\"><li class=\"uk-active\"><a href=\"javascript:void(0)\"><span class=\"uk-flex uk-flex-middle uk-text-medium sc-text-semibold\"><i class=\"mdi mdi-cogs uk-margin-medium-right\"></i>Basic Settings\r\n\t\t\t\t\t\t\t\t\t\t\t</span></a></li> <li><a href=\"javascript:void(0)\"><span class=\"uk-flex uk-flex-middle uk-text-medium sc-text-semibold\"><i class=\"mdi mdi-account-group uk-margin-medium-right\"></i>Users\r\n\t\t\t\t\t\t\t\t\t\t\t</span></a></li> <li><a href=\"javascript:void(0)\"><span class=\"uk-flex uk-flex-middle uk-text-medium sc-text-semibold\"><i class=\"mdi mdi-brush uk-margin-medium-right\"></i>Appearance\r\n\t\t\t\t\t\t\t\t\t\t\t</span></a></li> <li><a href=\"javascript:void(0)\"><span class=\"uk-flex uk-flex-middle uk-text-medium sc-text-semibold\"><i class=\"mdi mdi-puzzle-outline uk-margin-medium-right\"></i>Plugins\r\n\t\t\t\t\t\t\t\t\t\t\t</span></a></li></ul>")])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-width-3-4@m\">", "</div>", [_vm._ssrNode("<ul class=\"uk-switcher sc-settings-container\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('ScCard', [_c('ScCardHeader', {
    staticClass: "uk-flex uk-flex-middle sc-theme-bg-dark sc-light",
    attrs: {
      "separator": ""
    }
  }, [_c('div', {
    staticClass: "uk-flex-1"
  }, [_c('ScCardTitle', [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tSettings\r\n\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('ScCardMeta', [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, nulla.\r\n\t\t\t\t\t\t\t\t\t\t\t\t")])], 1), _vm._v(" "), _c('div', [_c('button', {
    staticClass: "sc-button"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tSave\r\n\t\t\t\t\t\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c('ScCardBody', [_c('div', [_c('div', {
    staticClass: "uk-flex-middle uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', {
    staticClass: "uk-width-1-4@m"
  }, [_c('label', {
    staticClass: "sc-color-secondary",
    attrs: {
      "for": "settings-page-online"
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPage Online\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-width-expand uk-flex uk-flex-middle"
  }, [_c('PrettyCheck', {
    staticClass: "p-switch",
    attrs: {
      "id": "settings-page-online"
    },
    model: {
      value: _vm.settings.basic.pageOnline,
      callback: function ($$v) {
        _vm.$set(_vm.settings.basic, "pageOnline", $$v);
      },
      expression: "settings.basic.pageOnline"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-top"
  }, [_c('div', {
    staticClass: "uk-flex-middle uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', {
    staticClass: "uk-width-1-4@m"
  }, [_c('label', {
    staticClass: "sc-color-secondary",
    attrs: {
      "for": "settings-page-title"
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPage Title\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-width-expand"
  }, [_c('ScInput', {
    attrs: {
      "id": "settings-page-title"
    },
    model: {
      value: _vm.settings.basic.pageTitle,
      callback: function ($$v) {
        _vm.$set(_vm.settings.basic, "pageTitle", $$v);
      },
      expression: "settings.basic.pageTitle"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-top"
  }, [_c('div', {
    staticClass: "uk-flex-middle uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', {
    staticClass: "uk-width-1-4@m"
  }, [_c('label', {
    staticClass: "sc-color-secondary",
    attrs: {
      "for": "settings-page-slogan"
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPage Slogan\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-width-expand"
  }, [_c('ScInput', {
    attrs: {
      "id": "settings-page-slogan"
    },
    model: {
      value: _vm.settings.basic.pageSlogan,
      callback: function ($$v) {
        _vm.$set(_vm.settings.basic, "pageSlogan", $$v);
      },
      expression: "settings.basic.pageSlogan"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-top"
  }, [_c('div', {
    staticClass: "uk-grid-small uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', {
    staticClass: "uk-width-1-4@m"
  }, [_c('label', {
    staticClass: "sc-color-secondary uk-margin-small-top uk-display-inline-block",
    attrs: {
      "for": "settings-page-description"
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDescription\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-width-expand"
  }, [_c('ScTextarea', {
    attrs: {
      "id": "settings-page-description",
      "cols": 20,
      "rows": 4
    },
    model: {
      value: _vm.settings.basic.pageDescription,
      callback: function ($$v) {
        _vm.$set(_vm.settings.basic, "pageDescription", $$v);
      },
      expression: "settings.basic.pageDescription"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-top"
  }, [_c('div', {
    staticClass: "uk-grid-small uk-flex-middle uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', {
    staticClass: "uk-width-1-4@m"
  }, [_c('label', {
    staticClass: "sc-color-secondary",
    attrs: {
      "for": "settings-page-keywords"
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tKeywords\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-width-expand"
  }, [_c('client-only', [_c('Select2', {
    attrs: {
      "id": "settings-page-keywords",
      "options": _vm.keywords,
      "settings": {
        'width': '100%',
        'placeholder': 'Select keywords...',
        'tags': true,
        'tokenSeparators': [',', ' ']
      },
      "multiple": ""
    },
    model: {
      value: _vm.settings.basic.pageKeywords,
      callback: function ($$v) {
        _vm.$set(_vm.settings.basic, "pageKeywords", $$v);
      },
      expression: "settings.basic.pageKeywords"
    }
  })], 1)], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin"
  }, [_c('div', {
    staticClass: "uk-grid-small uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', {
    staticClass: "uk-width-1-4@m"
  }, [_c('label', {
    staticClass: "sc-color-secondary uk-margin-small-top uk-display-inline-block",
    attrs: {
      "for": "settings-page-www"
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWebsite's address\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-width-expand"
  }, [_c('ScInput', {
    attrs: {
      "id": "settings-page-www",
      "placeholder": "https://"
    },
    model: {
      value: _vm.settings.basic.websiteAddress,
      callback: function ($$v) {
        _vm.$set(_vm.settings.basic, "websiteAddress", $$v);
      },
      expression: "settings.basic.websiteAddress"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-medium"
  }, [_c('div', {
    staticClass: "uk-grid-small uk-flex-middle uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', {
    staticClass: "uk-width-1-4@m"
  }, [_c('label', {
    staticClass: "sc-color-secondary",
    attrs: {
      "for": "settings-page-lang"
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAllow access from\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-width-expand"
  }, [_c('client-only', [_c('Select2', {
    attrs: {
      "id": "settings-page-lang",
      "options": _vm.countries,
      "settings": {
        'width': '100%',
        'placeholder': 'Select countries...',
        'templateResult': 'formatCountryResult',
        'templateSelection': 'formatCountrySelection'
      },
      "multiple": ""
    },
    model: {
      value: _vm.settings.basic.accessAllow,
      callback: function ($$v) {
        _vm.$set(_vm.settings.basic, "accessAllow", $$v);
      },
      expression: "settings.basic.accessAllow"
    }
  })], 1)], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-medium"
  }, [_c('div', {
    staticClass: "uk-grid-small uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', {
    staticClass: "uk-width-1-4@m"
  }, [_c('label', {
    staticClass: "sc-color-secondary uk-display-inline-block",
    attrs: {
      "for": "settings-page-www"
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUse SSL\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-width-expand"
  }, [_c('span', {
    staticClass: "uk-margin-right"
  }, [_c('PrettyRadio', {
    staticClass: "p-radio",
    attrs: {
      "value": "yes",
      "name": "use-ssl"
    },
    model: {
      value: _vm.settings.basic.SSL,
      callback: function ($$v) {
        _vm.$set(_vm.settings.basic, "SSL", $$v);
      },
      expression: "settings.basic.SSL"
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tYes\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])], 1), _vm._v(" "), _c('span', [_c('PrettyRadio', {
    staticClass: "p-radio",
    attrs: {
      "value": "no",
      "name": "use-ssl"
    },
    model: {
      value: _vm.settings.basic.SSL,
      callback: function ($$v) {
        _vm.$set(_vm.settings.basic, "SSL", $$v);
      },
      expression: "settings.basic.SSL"
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNo\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])], 1)])])])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('ScCard', [_c('ScCardHeader', {
    staticClass: "uk-flex uk-flex-middle sc-theme-bg-dark sc-light",
    attrs: {
      "separator": ""
    }
  }, [_c('div', {
    staticClass: "uk-flex-1"
  }, [_c('ScCardTitle', [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tUsers\r\n\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('ScCardMeta', [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, nulla.\r\n\t\t\t\t\t\t\t\t\t\t\t\t")])], 1), _vm._v(" "), _c('div', [_c('a', {
    staticClass: "sc-actions-icon mdi mdi-trash-can-outline sc-icon-square sc-light",
    attrs: {
      "href": "javascript:void(0)"
    }
  })])]), _vm._v(" "), _c('ScCardBody', [_c('div', {
    staticClass: "uk-overflow-auto"
  }, [_c('table', {
    staticClass: "uk-table uk-table-divider"
  }, [_c('thead', [_c('tr', [_c('th', [_c('div', {
    staticClass: "uk-flex"
  }, [_c('PrettyCheck', {
    staticClass: "p-icon",
    attrs: {
      "indeterminate": _vm.userTable.checkAllInd
    },
    on: {
      "update:indeterminate": function ($event) {
        return _vm.$set(_vm.userTable, "checkAllInd", $event);
      },
      "change": function ($event) {
        return _vm.toggleAllUsers($event);
      }
    },
    model: {
      value: _vm.userTable.checkAll,
      callback: function ($$v) {
        _vm.$set(_vm.userTable, "checkAll", $$v);
      },
      expression: "userTable.checkAll"
    }
  }, [_c('i', {
    staticClass: "icon mdi mdi-check",
    attrs: {
      "slot": "extra"
    },
    slot: "extra"
  }), _vm._v(" "), _c('i', {
    staticClass: "icon mdi mdi-minus",
    attrs: {
      "slot": "indeterminate-extra"
    },
    slot: "indeterminate-extra"
  }), _vm._v(" "), _c('label', {
    attrs: {
      "slot": "indeterminate-label"
    },
    slot: "indeterminate-label"
  })])], 1)]), _vm._v(" "), _c('th', [_vm._v("User Name")]), _vm._v(" "), _c('th', [_vm._v("Email")]), _vm._v(" "), _c('th', [_vm._v("Phone Number")]), _vm._v(" "), _c('th', [_vm._v("Status")]), _vm._v(" "), _c('th', [_vm._v("Actions")])])]), _vm._v(" "), _c('tbody', _vm._l(_vm.settings.users, function (user) {
    return _c('tr', {
      key: user.id,
      staticClass: "uk-table-middle"
    }, [_c('td', {
      staticClass: "uk-table-shrink"
    }, [_c('div', {
      staticClass: "uk-flex"
    }, [_c('PrettyCheck', {
      staticClass: "p-icon",
      on: {
        "change": function ($event) {
          return _vm.toggleUser($event);
        }
      },
      model: {
        value: user.selected,
        callback: function ($$v) {
          _vm.$set(user, "selected", $$v);
        },
        expression: "user.selected"
      }
    }, [_c('i', {
      staticClass: "icon mdi mdi-check",
      attrs: {
        "slot": "extra"
      },
      slot: "extra"
    })])], 1)]), _vm._v(" "), _c('td', {
      staticClass: "sc-text-semibold uk-text-nowrap"
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(user.fName) + " " + _vm._s(user.lName) + "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(user.email))]), _vm._v(" "), _c('td', {
      staticClass: "uk-text-nowrap"
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(user.phone) + "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('td', {
      staticClass: "uk-table-shrink"
    }, [_c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: user.status === 'active',
        expression: "user.status === 'active'"
      }],
      staticClass: "uk-label uk-label-success"
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(user.status) + "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: user.status === 'disabled',
        expression: "user.status === 'disabled'"
      }],
      staticClass: "uk-label uk-label-danger"
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(user.status) + "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('td', {
      staticClass: "uk-text-nowrap uk-table-shrink"
    }, [_c('a', {
      staticClass: "mdi mdi-pencil sc-icon-square",
      attrs: {
        "href": "javascript:void(0)"
      }
    }), _vm._v(" "), _c('a', {
      staticClass: "mdi mdi-trash-can-outline sc-icon-square",
      attrs: {
        "href": "javascript:void(0)"
      }
    })])]);
  }), 0)])])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('ScCard', [_c('ScCardHeader', {
    staticClass: "uk-flex uk-flex-middle sc-theme-bg-dark sc-light",
    attrs: {
      "separator": ""
    }
  }, [_c('div', {
    staticClass: "uk-flex-1"
  }, [_c('ScCardTitle', [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tAppearance\r\n\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('ScCardMeta', [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, nulla.\r\n\t\t\t\t\t\t\t\t\t\t\t\t")])], 1), _vm._v(" "), _c('div', [_c('button', {
    staticClass: "sc-button"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tSave\r\n\t\t\t\t\t\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c('ScCardBody', [_c('div', [_c('div', {
    staticClass: "uk-flex-middle uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', {
    staticClass: "uk-width-1-4@m"
  }, [_c('label', {
    staticClass: "sc-color-secondary",
    attrs: {
      "for": "settings-page-appearance-scheme"
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tColor Scheme\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-width-1-4@l uk-width-1-2@m"
  }, [_c('client-only', [_c('Select2', {
    attrs: {
      "id": "settings-page-appearance-scheme",
      "options": _vm.apperanceScheme,
      "settings": {
        'width': '100%',
        'placeholder': 'Select color scheme...',
        'minimumResultsForSearch': -1,
        'allowClear': true
      }
    },
    model: {
      value: _vm.settings.apperance.colorScheme,
      callback: function ($$v) {
        _vm.$set(_vm.settings.apperance, "colorScheme", $$v);
      },
      expression: "settings.apperance.colorScheme"
    }
  })], 1)], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin"
  }, [_c('div', {
    staticClass: "uk-flex-middle uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', {
    staticClass: "uk-width-1-4@m"
  }, [_c('label', {
    staticClass: "sc-color-secondary",
    attrs: {
      "for": "settings-page-appearance-layout"
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLayout\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-width-1-4@l uk-width-1-2@m"
  }, [_c('client-only', [_c('Select2', {
    attrs: {
      "id": "settings-page-appearance-layout",
      "options": _vm.apperanceLayout,
      "settings": {
        'width': '100%',
        'placeholder': 'Select layout...',
        'minimumResultsForSearch': -1,
        'allowClear': true
      }
    },
    model: {
      value: _vm.settings.apperance.layout,
      callback: function ($$v) {
        _vm.$set(_vm.settings.apperance, "layout", $$v);
      },
      expression: "settings.apperance.layout"
    }
  })], 1)], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-medium"
  }, [_c('div', {
    staticClass: "uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', {
    staticClass: "uk-width-1-4@m"
  }, [_c('label', {
    staticClass: "sc-color-secondary uk-display-inline-block"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSticky Header\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-width-expand@m"
  }, [_c('span', {
    staticClass: "uk-margin-right"
  }, [_c('PrettyRadio', {
    staticClass: "p-radio",
    attrs: {
      "value": "yes",
      "name": "sticky-header"
    },
    model: {
      value: _vm.settings.apperance.stickyHeader,
      callback: function ($$v) {
        _vm.$set(_vm.settings.apperance, "stickyHeader", $$v);
      },
      expression: "settings.apperance.stickyHeader"
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tYes\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])], 1), _vm._v(" "), _c('span', [_c('PrettyRadio', {
    staticClass: "p-radio",
    attrs: {
      "value": "no",
      "name": "sticky-header"
    },
    model: {
      value: _vm.settings.apperance.stickyHeader,
      callback: function ($$v) {
        _vm.$set(_vm.settings.apperance, "stickyHeader", $$v);
      },
      expression: "settings.apperance.stickyHeader"
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNo\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-medium"
  }, [_c('div', {
    staticClass: "uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', {
    staticClass: "uk-width-1-4@m"
  }, [_c('label', {
    staticClass: "sc-color-secondary uk-display-inline-block",
    attrs: {
      "for": "settings-page-appearance-fonts"
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tGlobal Font\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-width-1-2@m"
  }, [_c('client-only', [_c('Select2', {
    attrs: {
      "id": "settings-page-appearance-fonts",
      "options": _vm.apperanceFonts,
      "settings": {
        'width': '100%',
        'placeholder': 'Select font family...',
        'minimumResultsForSearch': -1,
        'allowClear': true
      }
    },
    model: {
      value: _vm.settings.apperance.fontFamily,
      callback: function ($$v) {
        _vm.$set(_vm.settings.apperance, "fontFamily", $$v);
      },
      expression: "settings.apperance.fontFamily"
    }
  })], 1)], 1)])]), _vm._v(" "), _c('h5', {
    staticClass: "uk-heading-line uk-margin-large-top"
  }, [_c('span', [_vm._v("Colors")])]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', {
    staticClass: "uk-width-1-4@m"
  }, [_c('label', {
    staticClass: "sc-color-secondary uk-display-inline-block"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPrimary\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-width-1-2@m"
  }, [_c('client-only', [_c('ScColorpicker', {
    attrs: {
      "size": "large"
    },
    model: {
      value: _vm.settings.apperance.colorPrimary,
      callback: function ($$v) {
        _vm.$set(_vm.settings.apperance, "colorPrimary", $$v);
      },
      expression: "settings.apperance.colorPrimary"
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "uk-form-help-block uk-margin-remove-left uk-margin-mini-top"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, ullam.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-top"
  }, [_c('div', {
    staticClass: "uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', {
    staticClass: "uk-width-1-4@m"
  }, [_c('label', {
    staticClass: "sc-color-secondary uk-display-inline-block"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSecondary\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-width-1-2@m"
  }, [_c('client-only', [_c('ScColorpicker', {
    attrs: {
      "size": "large"
    },
    model: {
      value: _vm.settings.apperance.colorSecondary,
      callback: function ($$v) {
        _vm.$set(_vm.settings.apperance, "colorSecondary", $$v);
      },
      expression: "settings.apperance.colorSecondary"
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "uk-form-help-block uk-margin-remove-left uk-margin-mini-top"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, ullam.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-top"
  }, [_c('div', {
    staticClass: "uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', {
    staticClass: "uk-width-1-4@m"
  }, [_c('label', {
    staticClass: "sc-color-secondary uk-display-inline-block"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLinks\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-width-1-2@m"
  }, [_c('client-only', [_c('ScColorpicker', {
    attrs: {
      "size": "large",
      "pallete": ['#5e35b1', '#689f38', '#1e88e5', '#e53935']
    },
    model: {
      value: _vm.settings.apperance.colorLinks,
      callback: function ($$v) {
        _vm.$set(_vm.settings.apperance, "colorLinks", $$v);
      },
      expression: "settings.apperance.colorLinks"
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "uk-form-help-block uk-margin-remove-left uk-margin-mini-top"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])], 1)])])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('ScCard', [_c('ScCardHeader', {
    staticClass: "uk-flex uk-flex-middle sc-theme-bg-dark sc-light",
    attrs: {
      "separator": ""
    }
  }, [_c('div', {
    staticClass: "uk-flex-1"
  }, [_c('ScCardTitle', [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tPlugins\r\n\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('ScCardMeta', [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, nulla.\r\n\t\t\t\t\t\t\t\t\t\t\t\t")])], 1), _vm._v(" "), _c('div', [_c('a', {
    staticClass: "sc-actions-icon mdi mdi-trash-can-outline sc-icon-square sc-light",
    attrs: {
      "href": "javascript:void(0)"
    }
  })])]), _vm._v(" "), _c('ScCardBody', [_c('div', {
    staticClass: "uk-overflow-auto"
  }, [_c('table', {
    staticClass: "uk-table uk-table-divider"
  }, [_c('thead', [_c('tr', [_c('th', [_c('div', {
    staticClass: "uk-flex"
  }, [_c('PrettyCheck', {
    staticClass: "p-icon",
    attrs: {
      "indeterminate": _vm.pluginTable.checkAllInd
    },
    on: {
      "update:indeterminate": function ($event) {
        return _vm.$set(_vm.pluginTable, "checkAllInd", $event);
      },
      "change": function ($event) {
        return _vm.toggleAllPlugins($event);
      }
    },
    model: {
      value: _vm.pluginTable.checkAll,
      callback: function ($$v) {
        _vm.$set(_vm.pluginTable, "checkAll", $$v);
      },
      expression: "pluginTable.checkAll"
    }
  }, [_c('i', {
    staticClass: "icon mdi mdi-check",
    attrs: {
      "slot": "extra"
    },
    slot: "extra"
  }), _vm._v(" "), _c('i', {
    staticClass: "icon mdi mdi-minus",
    attrs: {
      "slot": "indeterminate-extra"
    },
    slot: "indeterminate-extra"
  }), _vm._v(" "), _c('label', {
    attrs: {
      "slot": "indeterminate-label"
    },
    slot: "indeterminate-label"
  })])], 1)]), _vm._v(" "), _c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Version")]), _vm._v(" "), _c('th', [_vm._v("Description")]), _vm._v(" "), _c('th', [_vm._v("Status")]), _vm._v(" "), _c('th', [_vm._v("Actions")])])]), _vm._v(" "), _c('tbody', _vm._l(_vm.settings.plugins, function (plugin) {
    return _c('tr', {
      key: plugin.id,
      staticClass: "uk-table-middle"
    }, [_c('td', {
      staticClass: "uk-table-shrink"
    }, [_c('div', {
      staticClass: "uk-flex"
    }, [_c('PrettyCheck', {
      staticClass: "p-icon",
      on: {
        "change": function ($event) {
          return _vm.togglePlugin($event);
        }
      },
      model: {
        value: plugin.selected,
        callback: function ($$v) {
          _vm.$set(plugin, "selected", $$v);
        },
        expression: "plugin.selected"
      }
    }, [_c('i', {
      staticClass: "icon mdi mdi-check",
      attrs: {
        "slot": "extra"
      },
      slot: "extra"
    })])], 1)]), _vm._v(" "), _c('td', {
      staticClass: "sc-text-semibold uk-text-nowrap"
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(plugin.name) + "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('td', {
      staticClass: "uk-text-nowrap uk-table-shrink"
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(plugin.version) + "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('td', {
      staticClass: "uk-text-nowrap"
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(plugin.description) + "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('td', {
      staticClass: "uk-table-shrink"
    }, [_c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: plugin.status === 'active',
        expression: "plugin.status === 'active'"
      }],
      staticClass: "uk-label uk-label-success"
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(plugin.status) + "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: plugin.status === 'disabled',
        expression: "plugin.status === 'disabled'"
      }],
      staticClass: "uk-label md-bg-grey-500"
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(plugin.status) + "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('td', {
      staticClass: "uk-text-nowrap uk-table-shrink"
    }, [_c('a', {
      staticClass: "mdi sc-icon-square",
      class: {
        'md-color-green-600': plugin.status === 'active',
        'mdi-toggle-switch': plugin.status === 'active',
        'mdi-toggle-switch-off': plugin.status === 'disabled'
      },
      attrs: {
        "href": "javascript:void(0)",
        "data-uk-tooltip": plugin.status === 'active' ? 'Deactivate' : 'Activate'
      },
      on: {
        "click": function ($event) {
          $event.preventDefault();
          return _vm.togglePluginStatus(plugin);
        }
      }
    }), _vm._v(" "), _c('a', {
      staticClass: "mdi mdi-trash-can-outline sc-icon-square",
      attrs: {
        "href": "javascript:void(0)"
      }
    })])]);
  }), 0)])])])], 1)], 1)], 2), _vm._ssrNode(" <pre>" + _vm._ssrEscape(_vm._s(_vm._f("json")(_vm.settings))) + "</pre>")], 2)], 2)])])])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/pages/settings.vue?vue&type=template&id=0f9fd43a&

// EXTERNAL MODULE: ./assets/js/utils.js + 5 modules
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./components/Input.vue + 4 modules
var Input = __webpack_require__(122);

// EXTERNAL MODULE: ./components/Textarea.vue + 4 modules
var Textarea = __webpack_require__(123);

// EXTERNAL MODULE: external "pretty-checkbox-vue/check"
var check_ = __webpack_require__(97);
var check_default = /*#__PURE__*/__webpack_require__.n(check_);

// EXTERNAL MODULE: external "pretty-checkbox-vue/radio"
var radio_ = __webpack_require__(99);
var radio_default = /*#__PURE__*/__webpack_require__.n(radio_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Colorpicker.vue?vue&type=template&id=3bdf272a&scoped=true&
var Colorpickervue_type_template_id_3bdf272a_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    directives: [{
      name: "closable",
      rawName: "v-closable",
      value: {
        handler: 'closeColorpicker'
      },
      expression: "{ handler: 'closeColorpicker' }"
    }],
    ref: "colorpicker",
    staticClass: "uk-flex",
    class: ['sc-colorpicker', _vm.cpInline, _vm.isActive(_vm.cpActive), {
      'sc-colorpicker-right': _vm.isRight
    }]
  }, [_vm._ssrNode("<div class=\"sc-colorpicker-picker\"" + _vm._ssrStyle(null, {
    'background-color': _vm.selectedColor
  }, {
    display: !_vm.inline ? '' : 'none'
  }) + " data-v-3bdf272a></div> <div class=\"sc-colorpicker-dropdown\"" + _vm._ssrStyle(null, {
    width: _vm.cpWidth
  }, {
    display: !_vm.inline ? '' : 'none'
  }) + " data-v-3bdf272a>" + _vm._ssrList(_vm.pallete, function (color) {
    return "<span" + _vm._ssrClass(null, {
      'sc-color-active': _vm.selectedColor === color
    }) + _vm._ssrStyle(null, {
      'background-color': color
    }, null) + " data-v-3bdf272a></span>";
  }) + "</div> <div class=\"sc-colorpicker-colors\"" + _vm._ssrStyle(null, null, {
    display: _vm.inline ? '' : 'none'
  }) + " data-v-3bdf272a>" + _vm._ssrList(_vm.pallete, function (color) {
    return "<span" + _vm._ssrClass(null, {
      'sc-color-active': _vm.selectedColor === color
    }) + _vm._ssrStyle(null, {
      'background-color': color
    }, null) + " data-v-3bdf272a></span>";
  }) + "</div> <input type=\"hidden\"" + _vm._ssrAttr("value", _vm.selectedColor) + " data-v-3bdf272a>")]);
};

var Colorpickervue_type_template_id_3bdf272a_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Colorpicker.vue?vue&type=template&id=3bdf272a&scoped=true&

// EXTERNAL MODULE: ./assets/js/utils/dom.js
var dom = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Colorpicker.vue?vue&type=script&lang=js&

/* harmony default export */ var Colorpickervue_type_script_lang_js_ = ({
  name: 'ScColorpicker',
  props: {
    pallete: {
      type: Array,

      default() {
        return ['#e53935', '#d81b60', '#8e24aa', '#5e35b1', '#3949ab', '#1e88e5', '#039be5', '#0097a7', '#00897b', '#43a047', '#689f38', '#ef6c00', '#f4511e', '#6d4c41', '#757575', '#546e7a'];
      }

    },
    value: {
      type: String,
      default: ''
    },
    inline: {
      type: Boolean,
      default: false
    },
    closeOnSelect: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    selectedColor: '',
    cpActive: false,
    isRight: false
  }),
  computed: {
    cpInline() {
      return this.inline ? 'sc-colorpicker-inline' : '';
    },

    cpWidth() {
      if (!this.inline) {
        if (this.pallete.length > 8) {
          return this.pallete.length * 28 / 2 + 'px';
        }

        return this.pallete.length * 28 + 'px';
      }

      return '';
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.selectedColor = this.value; // adjust dropdown position

      var dropdown = this.$refs.dropdown;

      if (dropdown) {
        var cpLeftOffset = this.$refs.colorpicker.getBoundingClientRect().left;

        if (cpLeftOffset + 224 > Object(dom["c" /* width */])(window)) {
          this.isRight = true;
        }
      }
    });
  },

  methods: {
    isActive(state) {
      return state ? 'sc-colorpicker-active' : '';
    },

    closeColorpicker(e) {
      this.cpActive = false;
    },

    selectColor(color) {
      this.selectedColor = color;
      this.cpActive = !this.closeOnSelect;
      this.$emit('input', color);
    }

  }
});
// CONCATENATED MODULE: ./components/Colorpicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Colorpickervue_type_script_lang_js_ = (Colorpickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Colorpicker.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(626)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Colorpickervue_type_script_lang_js_,
  Colorpickervue_type_template_id_3bdf272a_scoped_true_render,
  Colorpickervue_type_template_id_3bdf272a_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "3bdf272a",
  "bb5abb3e"
  
)

/* harmony default export */ var Colorpicker = (component.exports);
// EXTERNAL MODULE: ./plugins/stickyKit.js
var stickyKit = __webpack_require__(288);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/settings.vue?vue&type=script&lang=js&

const {
  uniqueID
} = utils["d" /* scHelpers */];
const {
  first,
  last,
  phone,
  email,
  sentence,
  floating
} = utils["c" /* scFakeData */];

const countries = __webpack_require__(278);








__webpack_require__(628);

/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  name: 'PagesSettings',
  components: {
    Select2:  false ? undefined : null,
    ScInput: Input["a" /* default */],
    ScTextarea: Textarea["a" /* default */],
    PrettyCheck: check_default.a,
    PrettyRadio: radio_default.a,
    ScColorpicker: Colorpicker
  },
  data: () => ({
    settings: {
      basic: {
        pageOnline: true,
        pageTitle: 'Scutum Admin Template',
        pageKeywords: [1, 2],
        accessAllow: ['US', 'CN', 'BR', 'PL', 'ES', 'IN'],
        SSL: ''
      },
      users: [],
      apperance: {
        colorScheme: '',
        layout: '',
        stickyHeader: 'no',
        fontFamily: '',
        colorPrimary: '',
        colorSecondary: '',
        colorLinks: '#1e88e5'
      },
      plugins: []
    },
    keywords: [{
      id: 1,
      text: 'Admin template'
    }, {
      id: 2,
      text: 'UIkit'
    }, {
      id: 3,
      text: 'Multipurpose'
    }, {
      id: 4,
      text: 'VueJS'
    }],
    userTable: {
      checkAll: false,
      checkAllInd: false
    },
    pluginTable: {
      checkAll: false,
      checkAllInd: false
    },
    apperanceScheme: [{
      id: 1,
      text: 'Light'
    }, {
      id: 2,
      text: 'Dark'
    }],
    apperanceLayout: [{
      id: 1,
      text: 'Default'
    }, {
      id: 2,
      text: 'Blog'
    }, {
      id: 2,
      text: 'Portfolio'
    }],
    apperanceFonts: [{
      id: 1,
      text: 'Roboto, sans-serif'
    }, {
      id: 2,
      text: 'Helvetica, sans-serif'
    }, {
      id: 3,
      text: 'Trebuchet MS, sans-serif'
    }, {
      id: 4,
      text: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
    }],
    sideMenu: {
      media: 'mediumMin',
      options: {
        'offset_top': 'inPlace'
      },
      on: {
        'sticky_kit:stick'(e) {// console.log("has stuck!", e.target);
        },

        'sticky_kit:unstick'(e) {// console.log("has unstuck!", e.target);
        }

      }
    }
  }),
  computed: {
    tempUsers() {
      let statuses = ['active', 'disabled'];
      let users = [];

      for (let i = 0; i < 8; i++) {
        users.push({
          id: uniqueID(),
          fName: first(),
          lName: last(),
          phone: phone(),
          email: email(),
          status: statuses[Math.floor(Math.random() * statuses.length)],
          selected: false
        });
      }

      return users;
    },

    tempPlugins() {
      let statuses = ['active', 'disabled'];
      let plugins = [];

      for (let i = 0; i < 6; i++) {
        plugins.push({
          id: uniqueID(),
          name: 'Plugin Name ' + (i + 1),
          version: 'ver. ' + floating({
            min: 1,
            max: 4,
            fixed: 1
          }),
          description: sentence({
            words: 20
          }),
          status: statuses[Math.floor(Math.random() * statuses.length)],
          selected: false
        });
      }

      return plugins;
    },

    countries() {
      return countries.map(function (obj) {
        obj.id = obj.id || obj.code;
        obj.text = obj.text || obj.name;
        return obj;
      });
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.tempUsers.forEach(obj => {
        this.settings.users.push(obj);
      });
      this.tempPlugins.forEach(obj => {
        this.settings.plugins.push(obj);
      });
    });
  },

  methods: {
    toggleAllUsers(state) {
      this.settings.users.forEach((k, index) => {
        this.settings.users[index].selected = state;
      });
    },

    toggleUser(value) {
      let users = this.settings.users.map(k => {
        return k.selected;
      });
      let someChecked = users.some(cb => cb === true);
      let allChecked = users.every(cb => cb === true);

      if (allChecked) {
        this.userTable.checkAll = true;
        this.userTable.checkAllInd = false;
      } else if (someChecked) {
        this.userTable.checkAllInd = true;
      } else {
        this.userTable.checkAll = false;
        this.userTable.checkAllInd = false;
      }
    },

    toggleAllPlugins(state) {
      this.settings.plugins.forEach((k, index) => {
        this.settings.plugins[index].selected = state;
      });
    },

    togglePlugin(value) {
      let plugins = this.settings.plugins.map(k => {
        return k.selected;
      });
      let someChecked = plugins.some(cb => cb === true);
      let allChecked = plugins.every(cb => cb === true);

      if (allChecked) {
        this.pluginTable.checkAll = true;
        this.pluginTable.checkAllInd = false;
      } else if (someChecked) {
        this.pluginTable.checkAllInd = true;
      } else {
        this.pluginTable.checkAll = false;
        this.pluginTable.checkAllInd = false;
      }
    },

    togglePluginStatus(plugin) {
      let status = plugin.status;

      if (status === 'active') {
        plugin.status = 'disabled';
      }

      if (status === 'disabled') {
        plugin.status = 'active';
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/pages/settings.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/pages/settings.vue



function settings_injectStyles (context) {
  
  var style0 = __webpack_require__(632)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var settings_component = Object(componentNormalizer["a" /* default */])(
  pages_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  settings_injectStyles,
  null,
  "19fc6f2e"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (settings_component.exports);

/***/ })

};;
//# sourceMappingURL=settings.js.map