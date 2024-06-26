exports.ids = [92];
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

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

if (false) {}

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_01_sm.f998161.png";

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_01_sm@2x.6649141.png";

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_06_sm.b0047ea.png";

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_03_sm@2x.9f5d47e.png";

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_04_sm@2x.61057ef.png";

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_05_sm.5b5ea5a.png";

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_06_sm@2x.b177b92.png";

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_07_sm@2x.5701d61.png";

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/alex-guillaume-769172-unsplash_md.e5ab78a.jpg";

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avantgarde-concept-763896-unsplash_md.27954a3.jpg";

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pietro-mattia-764559-unsplash_md.1588c89.jpg";

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rachel-park-366508-unsplash.784fc00.jpg";

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rachel-park-366508-unsplash_md.510c07d.jpg";

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rodion-kutsaev-760882-unsplash_md.af2e022.jpg";

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/wynand-van-poortvliet-761831-unsplash_md.accc494.jpg";

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_010_sm.77b4bcf.png";

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_010_sm@2x.a55fa15.png";

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_02_sm@2x.e94193b.png";

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_05_md@2x.e8b8026.png";

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_05_sm@2x.255a6c7.png";

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_08_sm.ef65222.png";

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_08_sm@2x.dc8caa9.png";

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_09_sm.8bbca6f.png";

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_09_sm@2x.e046f9a.png";

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/alex-guillaume-769172-unsplash_md@2x.48f36b8.jpg";

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avantgarde-concept-763896-unsplash_md@2x.9383b48.jpg";

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/briana-tozour-756151-unsplash_md.2f2aeb8.jpg";

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/briana-tozour-756151-unsplash_md@2x.e10ece4.jpg";

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/casey-horner-768005-unsplash_md.acff0fa.jpg";

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/casey-horner-768005-unsplash_md@2x.c97a5f7.jpg";

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ciaran-o-brien-769402-unsplash_md.741d25f.jpg";

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ciaran-o-brien-769402-unsplash_md@2x.5afb6f0.jpg";

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/daria-kopylova-766667-unsplash_md.bc46dfb.jpg";

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/daria-kopylova-766667-unsplash_md@2x.1ea0f43.jpg";

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/eiliv-aceron-765897-unsplash_md.2cbf168.jpg";

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/eiliv-aceron-765897-unsplash_md@2x.f9d99a7.jpg";

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/paula-brustur-766878-unsplash_md.569a586.jpg";

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/paula-brustur-766878-unsplash_md@2x.d2e2357.jpg";

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pietro-mattia-764559-unsplash_md@2x.a5cabb0.jpg";

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rachel-park-366508-unsplash@2x.2283064.jpg";

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rachel-park-366508-unsplash_md@2x.ad9a010.jpg";

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ray-hennessy-763310-unsplash.cdff1eb.jpg";

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ray-hennessy-763310-unsplash_md.b92470d.jpg";

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ray-hennessy-763310-unsplash_md@2x.ec91835.jpg";

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rodion-kutsaev-760882-unsplash_md@2x.c5c749d.jpg";

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/san-fermin-pamplona-navarra-768251-unsplash_md.c2c866f.jpg";

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/san-fermin-pamplona-navarra-768251-unsplash_md@2x.6cbd21a.jpg";

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/shane-young-768821-unsplash_md.b91a285.jpg";

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/shane-young-768821-unsplash_md@2x.0f7512c.jpg";

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/steve-roe-763192-unsplash_md.5fb10e5.jpg";

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/steve-roe-763192-unsplash_md@2x.12a9c84.jpg";

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/urban-sanden-768851-unsplash_md.8521579.jpg";

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/urban-sanden-768851-unsplash_md@2x.7ec5701.jpg";

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/wynand-van-poortvliet-761831-unsplash_md@2x.470a287.jpg";

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/briana-tozour-756151-unsplash.f4508bb.jpg";

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./avatar_01.png": 189,
	"./avatar_010.png": 190,
	"./avatar_010@2x.png": 191,
	"./avatar_010_lg.png": 192,
	"./avatar_010_lg@2x.png": 193,
	"./avatar_010_md.png": 194,
	"./avatar_010_md@2x.png": 195,
	"./avatar_010_sm.png": 145,
	"./avatar_010_sm@2x.png": 146,
	"./avatar_01@2x.png": 196,
	"./avatar_01_lg.png": 197,
	"./avatar_01_lg@2x.png": 198,
	"./avatar_01_md.png": 199,
	"./avatar_01_md@2x.png": 200,
	"./avatar_01_sm.png": 130,
	"./avatar_01_sm@2x.png": 131,
	"./avatar_02.png": 201,
	"./avatar_02@2x.png": 202,
	"./avatar_02_lg.png": 203,
	"./avatar_02_lg@2x.png": 204,
	"./avatar_02_md.png": 205,
	"./avatar_02_md@2x.png": 206,
	"./avatar_02_sm.png": 50,
	"./avatar_02_sm@2x.png": 147,
	"./avatar_03.png": 207,
	"./avatar_03@2x.png": 208,
	"./avatar_03_lg.png": 209,
	"./avatar_03_lg@2x.png": 210,
	"./avatar_03_md.png": 211,
	"./avatar_03_md@2x.png": 212,
	"./avatar_03_sm.png": 48,
	"./avatar_03_sm@2x.png": 133,
	"./avatar_04.png": 213,
	"./avatar_04@2x.png": 214,
	"./avatar_04_lg.png": 215,
	"./avatar_04_lg@2x.png": 216,
	"./avatar_04_md.png": 217,
	"./avatar_04_md@2x.png": 218,
	"./avatar_04_sm.png": 49,
	"./avatar_04_sm@2x.png": 134,
	"./avatar_05.png": 219,
	"./avatar_05@2x.png": 220,
	"./avatar_05_lg.png": 221,
	"./avatar_05_lg@2x.png": 222,
	"./avatar_05_md.png": 223,
	"./avatar_05_md@2x.png": 148,
	"./avatar_05_sm.png": 135,
	"./avatar_05_sm@2x.png": 149,
	"./avatar_06.png": 224,
	"./avatar_06@2x.png": 225,
	"./avatar_06_lg.png": 226,
	"./avatar_06_lg@2x.png": 227,
	"./avatar_06_md.png": 228,
	"./avatar_06_md@2x.png": 229,
	"./avatar_06_sm.png": 132,
	"./avatar_06_sm@2x.png": 136,
	"./avatar_07.png": 230,
	"./avatar_07@2x.png": 231,
	"./avatar_07_lg.png": 232,
	"./avatar_07_lg@2x.png": 233,
	"./avatar_07_md.png": 234,
	"./avatar_07_md@2x.png": 235,
	"./avatar_07_sm.png": 47,
	"./avatar_07_sm@2x.png": 137,
	"./avatar_08.png": 236,
	"./avatar_08@2x.png": 237,
	"./avatar_08_lg.png": 238,
	"./avatar_08_lg@2x.png": 239,
	"./avatar_08_md.png": 240,
	"./avatar_08_md@2x.png": 241,
	"./avatar_08_sm.png": 150,
	"./avatar_08_sm@2x.png": 151,
	"./avatar_09.png": 242,
	"./avatar_09@2x.png": 243,
	"./avatar_09_lg.png": 244,
	"./avatar_09_lg@2x.png": 245,
	"./avatar_09_md.png": 246,
	"./avatar_09_md@2x.png": 247,
	"./avatar_09_sm.png": 152,
	"./avatar_09_sm@2x.png": 153
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 188;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_01.1eb7c9a.png";

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_010.082c45d.png";

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_010@2x.2fdefdd.png";

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_010_lg.953997a.png";

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_010_lg@2x.72c3064.png";

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_010_md.91ccf0d.png";

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_010_md@2x.0484465.png";

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_01@2x.8aae108.png";

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_01_lg.f324e39.png";

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_01_lg@2x.09a7177.png";

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_01_md.e5ef723.png";

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_01_md@2x.35b024c.png";

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_02.88885a7.png";

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_02@2x.fc2816a.png";

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_02_lg.61a0613.png";

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_02_lg@2x.eb51277.png";

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_02_md.ec42b19.png";

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_02_md@2x.874168c.png";

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_03.44b4097.png";

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_03@2x.3bc63d1.png";

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_03_lg.390d2f8.png";

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_03_lg@2x.4965071.png";

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_03_md.1ecd497.png";

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_03_md@2x.9d92182.png";

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_04.4fa3271.png";

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_04@2x.eac7398.png";

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_04_lg.529b5fc.png";

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_04_lg@2x.571f0b4.png";

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_04_md.275e0ae.png";

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_04_md@2x.a211a8b.png";

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_05.ab963be.png";

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_05@2x.04bff13.png";

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_05_lg.a22ff26.png";

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_05_lg@2x.71651b7.png";

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_05_md.7c2ff7f.png";

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_06.9da1f77.png";

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_06@2x.c5389d5.png";

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_06_lg.7214645.png";

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_06_lg@2x.285c443.png";

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_06_md.4ef543e.png";

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_06_md@2x.f871714.png";

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_07.03b8b3d.png";

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_07@2x.9148935.png";

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_07_lg.f82ea02.png";

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_07_lg@2x.346769e.png";

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_07_md.1a9fa22.png";

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_07_md@2x.8c22866.png";

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_08.5db169a.png";

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_08@2x.3199af7.png";

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_08_lg.8849eb2.png";

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_08_lg@2x.768b5d8.png";

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_08_md.db8f72f.png";

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_08_md@2x.4538886.png";

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_09.7e43146.png";

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_09@2x.a4203b0.png";

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_09_lg.25b213f.png";

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_09_lg@2x.34e30da.png";

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_09_md.396b8fa.png";

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_09_md@2x.f1f0d46.png";

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Avatar.vue?vue&type=template&id=715a157e&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "uk-display-inline-block"
  }, [_vm._ssrNode("<div" + _vm._ssrClass("sc-avatar-wrapper", _vm.wrapperClass) + _vm._ssrStyle(null, null, {
    display: _vm.status ? '' : 'none'
  }) + "><span" + _vm._ssrClass("sc-user-status", _vm.status) + "></span> <img" + _vm._ssrAttr("src", _vm.avatarSrc) + _vm._ssrAttr("alt", _vm.alt) + _vm._ssrClass("sc-avatar", _vm.extraClass) + "></div> <img" + _vm._ssrAttr("src", _vm.avatarSrc) + _vm._ssrAttr("alt", _vm.alt) + _vm._ssrClass("sc-avatar", _vm.extraClass) + _vm._ssrStyle(null, null, {
    display: !_vm.status ? '' : 'none'
  }) + ">")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Avatar.vue?vue&type=template&id=715a157e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Avatar.vue?vue&type=script&lang=js&
/* harmony default export */ var Avatarvue_type_script_lang_js_ = ({
  name: 'ScAvatar',
  props: {
    avatarId: {
      type: Number,
      default: 1,
      required: true
    },
    size: {
      type: String,
      default: 'sm'
    },
    alt: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: null
    },
    extraClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    'avatarSrc'() {
      return __webpack_require__(188)("./avatar_0" + this.avatarId + (this.size === '_default' ? '' : '_' + this.size) + ".png");
    },

    'wrapperClass'() {
      return 'sc-avatar-wrapper-' + (this.size === '_default' ? '' : this.size);
    }

  }
});
// CONCATENATED MODULE: ./components/Avatar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Avatarvue_type_script_lang_js_ = (Avatarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Avatar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Avatarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "bc13dc4e"
  
)

/* harmony default export */ var Avatar = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/alex-guillaume-769172-unsplash.704e8ed.jpg";

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avantgarde-concept-763896-unsplash.5ee7fa4.jpg";

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pietro-mattia-764559-unsplash.4cf3950.jpg";

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rodion-kutsaev-760882-unsplash.b27f3ee.jpg";

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/wynand-van-poortvliet-761831-unsplash.67caa04.jpg";

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/alex-guillaume-769172-unsplash@2x.f2b4b48.jpg";

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avantgarde-concept-763896-unsplash@2x.44e4600.jpg";

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/briana-tozour-756151-unsplash@2x.6847485.jpg";

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/casey-horner-768005-unsplash.2b37af5.jpg";

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/casey-horner-768005-unsplash@2x.1ecbd19.jpg";

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ciaran-o-brien-769402-unsplash.b37b7bc.jpg";

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ciaran-o-brien-769402-unsplash@2x.a163d34.jpg";

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/daria-kopylova-766667-unsplash.794801f.jpg";

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/daria-kopylova-766667-unsplash@2x.a0a71b4.jpg";

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/eiliv-aceron-765897-unsplash.2311f74.jpg";

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/eiliv-aceron-765897-unsplash@2x.9452038.jpg";

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/paula-brustur-766878-unsplash.b247bb9.jpg";

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/paula-brustur-766878-unsplash@2x.c6537ca.jpg";

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pietro-mattia-764559-unsplash@2x.efbe906.jpg";

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ray-hennessy-763310-unsplash@2x.89ac6cd.jpg";

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rodion-kutsaev-760882-unsplash@2x.b749ec3.jpg";

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/san-fermin-pamplona-navarra-768251-unsplash.33cd666.jpg";

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/san-fermin-pamplona-navarra-768251-unsplash@2x.472955e.jpg";

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/shane-young-768821-unsplash.41638b6.jpg";

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/shane-young-768821-unsplash@2x.7572756.jpg";

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/steve-roe-763192-unsplash.eb2f44d.jpg";

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/steve-roe-763192-unsplash@2x.a24d539.jpg";

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/urban-sanden-768851-unsplash.6937a3d.jpg";

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/urban-sanden-768851-unsplash@2x.0df1dd0.jpg";

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/wynand-van-poortvliet-761831-unsplash@2x.e750c34.jpg";

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./alex-guillaume-769172-unsplash.jpg": 250,
	"./alex-guillaume-769172-unsplash@2x.jpg": 255,
	"./alex-guillaume-769172-unsplash_md.jpg": 138,
	"./alex-guillaume-769172-unsplash_md@2x.jpg": 154,
	"./avantgarde-concept-763896-unsplash.jpg": 251,
	"./avantgarde-concept-763896-unsplash@2x.jpg": 256,
	"./avantgarde-concept-763896-unsplash_md.jpg": 139,
	"./avantgarde-concept-763896-unsplash_md@2x.jpg": 155,
	"./briana-tozour-756151-unsplash.jpg": 184,
	"./briana-tozour-756151-unsplash@2x.jpg": 257,
	"./briana-tozour-756151-unsplash_md.jpg": 156,
	"./briana-tozour-756151-unsplash_md@2x.jpg": 157,
	"./casey-horner-768005-unsplash.jpg": 258,
	"./casey-horner-768005-unsplash@2x.jpg": 259,
	"./casey-horner-768005-unsplash_md.jpg": 158,
	"./casey-horner-768005-unsplash_md@2x.jpg": 159,
	"./ciaran-o-brien-769402-unsplash.jpg": 260,
	"./ciaran-o-brien-769402-unsplash@2x.jpg": 261,
	"./ciaran-o-brien-769402-unsplash_md.jpg": 160,
	"./ciaran-o-brien-769402-unsplash_md@2x.jpg": 161,
	"./daria-kopylova-766667-unsplash.jpg": 262,
	"./daria-kopylova-766667-unsplash@2x.jpg": 263,
	"./daria-kopylova-766667-unsplash_md.jpg": 162,
	"./daria-kopylova-766667-unsplash_md@2x.jpg": 163,
	"./eiliv-aceron-765897-unsplash.jpg": 264,
	"./eiliv-aceron-765897-unsplash@2x.jpg": 265,
	"./eiliv-aceron-765897-unsplash_md.jpg": 164,
	"./eiliv-aceron-765897-unsplash_md@2x.jpg": 165,
	"./paula-brustur-766878-unsplash.jpg": 266,
	"./paula-brustur-766878-unsplash@2x.jpg": 267,
	"./paula-brustur-766878-unsplash_md.jpg": 166,
	"./paula-brustur-766878-unsplash_md@2x.jpg": 167,
	"./pietro-mattia-764559-unsplash.jpg": 252,
	"./pietro-mattia-764559-unsplash@2x.jpg": 268,
	"./pietro-mattia-764559-unsplash_md.jpg": 140,
	"./pietro-mattia-764559-unsplash_md@2x.jpg": 168,
	"./rachel-park-366508-unsplash.jpg": 141,
	"./rachel-park-366508-unsplash@2x.jpg": 169,
	"./rachel-park-366508-unsplash_md.jpg": 142,
	"./rachel-park-366508-unsplash_md@2x.jpg": 170,
	"./ray-hennessy-763310-unsplash.jpg": 171,
	"./ray-hennessy-763310-unsplash@2x.jpg": 269,
	"./ray-hennessy-763310-unsplash_md.jpg": 172,
	"./ray-hennessy-763310-unsplash_md@2x.jpg": 173,
	"./rodion-kutsaev-760882-unsplash.jpg": 253,
	"./rodion-kutsaev-760882-unsplash@2x.jpg": 270,
	"./rodion-kutsaev-760882-unsplash_md.jpg": 143,
	"./rodion-kutsaev-760882-unsplash_md@2x.jpg": 174,
	"./san-fermin-pamplona-navarra-768251-unsplash.jpg": 271,
	"./san-fermin-pamplona-navarra-768251-unsplash@2x.jpg": 272,
	"./san-fermin-pamplona-navarra-768251-unsplash_md.jpg": 175,
	"./san-fermin-pamplona-navarra-768251-unsplash_md@2x.jpg": 176,
	"./shane-young-768821-unsplash.jpg": 273,
	"./shane-young-768821-unsplash@2x.jpg": 274,
	"./shane-young-768821-unsplash_md.jpg": 177,
	"./shane-young-768821-unsplash_md@2x.jpg": 178,
	"./steve-roe-763192-unsplash.jpg": 275,
	"./steve-roe-763192-unsplash@2x.jpg": 276,
	"./steve-roe-763192-unsplash_md.jpg": 179,
	"./steve-roe-763192-unsplash_md@2x.jpg": 180,
	"./urban-sanden-768851-unsplash.jpg": 277,
	"./urban-sanden-768851-unsplash@2x.jpg": 278,
	"./urban-sanden-768851-unsplash_md.jpg": 181,
	"./urban-sanden-768851-unsplash_md@2x.jpg": 182,
	"./wynand-van-poortvliet-761831-unsplash.jpg": 254,
	"./wynand-van-poortvliet-761831-unsplash@2x.jpg": 279,
	"./wynand-van-poortvliet-761831-unsplash_md.jpg": 144,
	"./wynand-van-poortvliet-761831-unsplash_md@2x.jpg": 183
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 280;

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Photo.vue?vue&type=template&id=c77413d4&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('img', {
    attrs: {
      "src": _vm.imageSrc,
      "alt": _vm.imageAlt
    }
  }, []);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Photo.vue?vue&type=template&id=c77413d4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Photo.vue?vue&type=script&lang=js&
const photos = ['alex-guillaume-769172-unsplash', 'avantgarde-concept-763896-unsplash', 'briana-tozour-756151-unsplash', 'casey-horner-768005-unsplash', 'ciaran-o-brien-769402-unsplash', 'daria-kopylova-766667-unsplash', 'eiliv-aceron-765897-unsplash', 'paula-brustur-766878-unsplash', 'pietro-mattia-764559-unsplash', 'rachel-park-366508-unsplash', 'ray-hennessy-763310-unsplash', 'rodion-kutsaev-760882-unsplash', 'san-fermin-pamplona-navarra-768251-unsplash', 'shane-young-768821-unsplash', 'steve-roe-763192-unsplash', 'urban-sanden-768851-unsplash', 'wynand-van-poortvliet-761831-unsplash'];
/* harmony default export */ var Photovue_type_script_lang_js_ = ({
  name: 'ScPhoto',
  props: {
    imageId: {
      type: Number,
      default: 1
    },
    size: {
      type: String,
      default: ''
    },
    imageAlt: {
      type: String,
      default: ''
    }
  },
  computed: {
    'imageSrc'() {
      let size = this.size ? '_' + this.size : '';
      return __webpack_require__(280)("./" + photos[this.imageId] + size + ".jpg");
    }

  }
});
// CONCATENATED MODULE: ./components/Photo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Photovue_type_script_lang_js_ = (Photovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Photo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Photovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "25f8a862"
  
)

/* harmony default export */ var Photo = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(129);
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

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/contact_list_single.vue?vue&type=template&id=0af1c0c4&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "uk-flex uk-flex-column",
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div class=\"uk-flex uk-height-1-1\">", "</div>", [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_vm._ssrNode("<div class=\"sc-js-sticky-parent\">", "</div>", [_c('client-only', [_c('ScCard', {
    directives: [{
      name: "box-gradient",
      rawName: "v-box-gradient",
      value: _vm.selectedUser.colors,
      expression: "selectedUser.colors"
    }, {
      name: "sc-sticky",
      rawName: "v-sc-sticky",
      value: _vm.stickyUserCard,
      expression: "stickyUserCard"
    }],
    staticClass: "sc-light sc-card-user-profile"
  }, [_c('div', {
    staticClass: "sc-card-user-profile-body"
  }, [_c('transition', {
    attrs: {
      "name": "scale-up",
      "mode": "out-in"
    }
  }, [_c('ScAvatar', {
    key: _vm.selectedUser.id,
    staticClass: "uk-margin-right",
    attrs: {
      "avatar-id": _vm.selectedUser.avatar,
      "size": "md"
    }
  })], 1), _vm._v(" "), _c('div', [_c('transition', {
    attrs: {
      "name": "slide-bottom-medium",
      "mode": "out-in"
    }
  }, [_c('ScCardTitle', {
    key: _vm.selectedUser.id
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.selectedUser.fName) + " " + _vm._s(_vm.selectedUser.lName) + "\r\n\t\t\t\t\t\t\t\t\t\t")])], 1), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "slide-bottom-medium",
      "mode": "out-in"
    }
  }, [_c('div', {
    key: _vm.selectedUser.id,
    staticClass: "sc-color-secondary uk-flex uk-flex-middle"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.selectedUser.company) + "\r\n\t\t\t\t\t\t\t\t\t\t")])])], 1)], 1), _vm._v(" "), _c('ScCardActions', {
    staticClass: "uk-visible@m"
  }, [_c('a', {
    staticClass: "sc-actions-icon mdi mdi-pencil",
    attrs: {
      "href": "javascript:void(0)"
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "sc-actions-icon mdi mdi-message-outline",
    attrs: {
      "href": "javascript:void(0)"
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "sc-actions-icon mdi mdi-information-outline",
    attrs: {
      "href": "javascript:void(0)"
    }
  })])], 1)], 1), _vm._ssrNode(" "), _c('ScCard', {
    staticClass: "uk-margin-top"
  }, [_c('ScCardTitle', [_vm._v("\r\n\t\t\t\t\t\t\tAddress\r\n\t\t\t\t\t\t")]), _vm._v(" "), _c('client-only', [_c('GmapMap', {
    staticClass: "sc-gmap",
    attrs: {
      "center": _vm.gmaps.center,
      "zoom": _vm.gmaps.zoom
    }
  }, _vm._l(_vm.gmaps.markers, function (m) {
    return _c('GmapMarker', {
      key: m.id,
      attrs: {
        "position": m.position,
        "clickable": true
      },
      on: {
        "click": function ($event) {
          _vm.center = m.position;
        }
      }
    });
  }), 1)], 1), _vm._v(" "), _c('ScCardBody', [_c('address', [_c('span', [_vm._v(_vm._s(_vm.selectedUser.address))]), _c('br'), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.selectedUser.city))]), _c('br'), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.selectedUser.country))])])])], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div data-uk-grid class=\"uk-child-width-1-2@l uk-grid uk-margin-top\">", "</div>", [_vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardBody', [_c('h5', {
    staticClass: "uk-heading-line"
  }, [_c('span', [_vm._v("Personal informations")])]), _vm._v(" "), _c('ul', {
    staticClass: "uk-list uk-list-divider"
  }, [_c('li', {
    staticClass: "sc-list-group"
  }, [_c('div', {
    staticClass: "sc-list-addon"
  }, [_c('i', {
    staticClass: "mdi mdi-email"
  })]), _vm._v(" "), _c('div', {
    staticClass: "sc-list-body"
  }, [_c('div', {
    staticClass: "sc-list-body-inner"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.selectedUser.email) + "\r\n\t\t\t\t\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c('li', {
    staticClass: "sc-list-group"
  }, [_c('div', {
    staticClass: "sc-list-addon"
  }, [_c('i', {
    staticClass: "mdi mdi-phone"
  })]), _vm._v(" "), _c('div', {
    staticClass: "sc-list-body"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.selectedUser.phone) + "\r\n\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('li', {
    staticClass: "sc-list-group"
  }, [_c('div', {
    staticClass: "sc-list-addon"
  }, [_c('i', {
    staticClass: "mdi mdi-office-building"
  })]), _vm._v(" "), _c('div', {
    staticClass: "sc-list-body"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.selectedUser.company) + "\r\n\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('li', {
    staticClass: "sc-list-group"
  }, [_c('div', {
    staticClass: "sc-list-addon"
  }, [_c('i', {
    staticClass: "mdi mdi-earth"
  })]), _vm._v(" "), _c('div', {
    staticClass: "sc-list-body"
  }, [_c('span', [_vm._v(_vm._s(_vm.selectedUser.address))]), _vm._v(" "), _c('span', {
    staticClass: "sc-list-secondary-text"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.selectedUser.city) + "\r\n\t\t\t\t\t\t\t\t\t\t\t")])])])])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardBody', [_c('h5', {
    staticClass: "uk-heading-line"
  }, [_c('span', [_vm._v("Timeline")])]), _vm._v(" "), _c('div', {
    staticClass: "sc-timeline"
  }, _vm._l(_vm.timeline, function (item) {
    return _c('div', {
      key: item.id,
      staticClass: "sc-timeline-item"
    }, [_c('div', {
      staticClass: "sc-timeline-date"
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(item.dateAlt1) + "\r\n\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: item.icon !== '',
        expression: "item.icon !== ''"
      }],
      staticClass: "sc-timeline-icon",
      class: [item.colorAlt1]
    }, [_c('i', {
      class: ['mdi', item.icon]
    })]), _vm._v(" "), _c('div', {
      class: ['sc-timeline-body', item.extraClass]
    }, [_c('h4', {
      staticClass: "sc-timeline-header"
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("capitalize")(item.title)) + "\r\n\t\t\t\t\t\t\t\t\t\t\t\t"), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: item.category,
        expression: "item.category"
      }]
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tin\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t"), _c('a', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: item.titleLink !== '',
        expression: "item.titleLink !== ''"
      }],
      attrs: {
        "href": item.titleLink
      }
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("capitalize")(item.category)) + "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: item.titleLink === '',
        expression: "item.titleLink === ''"
      }]
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("capitalize")(item.category)) + "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tcategory\r\n\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: item.user,
        expression: "item.user"
      }]
    }, [_c('a', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: item.user !== '',
        expression: "item.user !== ''"
      }],
      attrs: {
        "href": item.titleLink
      }
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("capitalize")(item.user)) + "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: item.titleLink === '',
        expression: "item.titleLink === ''"
      }]
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("capitalize")(item.category)) + "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: item.tasks.length,
        expression: "item.tasks.length"
      }]
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\thave completed 4 tasks\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: item.meta,
        expression: "item.meta"
      }],
      staticClass: "sc-timeline-meta"
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t23 comments; 14 pingbacks\r\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('hr', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.images.length || item.content !== '') && !item.tasks.length,
        expression: "(item.images.length || item.content !== '') && !item.tasks.length"
      }]
    }), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: item.images.length || item.content !== '' || item.tasks.length,
        expression: "item.images.length || item.content !== '' || item.tasks.length"
      }],
      staticClass: "sc-timeline-content"
    }, [_c('p', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: item.content !== '',
        expression: "item.content !== '' "
      }],
      staticClass: "uk-margin-remove"
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(item.content) + "\r\n\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('ul', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: item.images,
        expression: "item.images"
      }],
      staticClass: "sc-list-images uk-list uk-list-inline"
    }, _vm._l(item.images, function (image) {
      return _c('li', {
        key: image
      }, [_c('ScPhoto', {
        attrs: {
          "image-id": image,
          "size": "md"
        }
      })], 1);
    }), 0), _vm._v(" "), _c('ul', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: item.tasks.length,
        expression: "item.tasks.length"
      }],
      staticClass: "sc-list-shadow uk-margin-top"
    }, _vm._l(item.tasks, function (task) {
      return _c('li', {
        key: task.id
      }, [_c('a', {
        attrs: {
          "href": "javascript:void(0)"
        }
      }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(task.title) + "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('p', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: task.loggedTime !== '',
          expression: "task.loggedTime !== '' "
        }],
        staticClass: "sc-list-secondary-text uk-text-small"
      }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLoged time: " + _vm._s(task.loggedTime) + "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]);
    }), 0)])])]);
  }), 0)])], 1)], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"sc-page-aside\" class=\"sc-page-aside-large md-bg-white sc-padding-remove uk-visible@m\">", "</div>", [_vm._ssrNode("<div class=\"sc-page-aside-header md-bg-grey-100 sc-border-bottom sc-padding\">", "</div>", [_c('ScInput', {
    attrs: {
      "placeholder": "Find user...",
      "mode": "outline"
    },
    model: {
      value: _vm.findUser,
      callback: function ($$v) {
        _vm.findUser = $$v;
      },
      expression: "findUser"
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div data-sc-scrollbar class=\"sc-page-aside-body sc-padding-remove\">", "</div>", [_vm._ssrNode("<ul class=\"uk-list uk-list-divider sc-list-clickable sc-padding-medium\">", "</ul>", _vm._l(_vm.filteredUsers, function (user) {
    return _vm._ssrNode("<li" + _vm._ssrClass("sc-list-group", {
      'uk-active': _vm.selectedUser.id === user.id
    }) + ">", "</li>", [_vm._ssrNode("<div class=\"sc-list-addon\">", "</div>", [_vm._ssrNode("<div class=\"sc-avatar-wrapper sc-avatar-wrapper-sm\">", "</div>", [_c('ScAvatar', {
      staticClass: "sc-avatar",
      attrs: {
        "avatar-id": user.avatar
      }
    })], 1)]), _vm._ssrNode(" <div class=\"sc-list-body\"><div><span class=\"sc-js-list-fName\">" + _vm._ssrEscape("\r\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(user.fName) + "\r\n\t\t\t\t\t\t\t\t\t") + "</span> <span class=\"sc-js-list-lName\">" + _vm._ssrEscape("\r\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(user.lName) + "\r\n\t\t\t\t\t\t\t\t\t") + "</span></div> <div class=\"sc-list-secondary-text sc-js-list-company\">" + _vm._ssrEscape("\r\n\t\t\t\t\t\t\t\t\t" + _vm._s(user.company) + "\r\n\t\t\t\t\t\t\t\t") + "</div></div>")], 2);
  }), 0)])], 2)], 2), _vm._ssrNode(" "), _c('client-only', [_c('ScOffcanvas', [_c('div', {
    staticClass: "sc-page-aside-body",
    attrs: {
      "data-sc-scrollbar": ""
    }
  }, [_c('ul', {
    staticClass: "uk-list uk-list-divider sc-list-clickable"
  }, _vm._l(_vm.users, function (user) {
    return _c('li', {
      key: user.id,
      staticClass: "sc-list-group"
    }, [_c('div', {
      staticClass: "sc-list-addon"
    }, [_c('div', {
      staticClass: "sc-avatar-wrapper sc-avatar-wrapper-sm"
    }, [_c('ScAvatar', {
      staticClass: "sc-avatar",
      attrs: {
        "avatar-id": _vm.randAvatar()
      }
    })], 1)]), _vm._v(" "), _c('div', {
      staticClass: "sc-list-body"
    }, [_c('div', [_c('span', {
      staticClass: "sc-js-list-fName"
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(user.fName) + "\r\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
      staticClass: "sc-js-list-lName"
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(user.lName) + "\r\n\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
      staticClass: "sc-list-secondary-text sc-js-list-company"
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t" + _vm._s(user.company) + "\r\n\t\t\t\t\t\t\t\t")])])]);
  }), 0)])])], 1)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/pages/contact_list_single.vue?vue&type=template&id=0af1c0c4&

// EXTERNAL MODULE: ./assets/js/utils.js + 5 modules
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./components/Avatar.vue + 4 modules
var Avatar = __webpack_require__(249);

// EXTERNAL MODULE: ./components/Photo.vue + 4 modules
var Photo = __webpack_require__(289);

// EXTERNAL MODULE: ./components/Input.vue + 4 modules
var Input = __webpack_require__(127);

// EXTERNAL MODULE: ./plugins/moment.js
var moment = __webpack_require__(46);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/contact_list_single.vue?vue&type=script&lang=js&

const {
  uniqueID
} = utils["d" /* scHelpers */];




__webpack_require__(291);



const chance = __webpack_require__(51).Chance();

if (false) {}

/* harmony default export */ var contact_list_singlevue_type_script_lang_js_ = ({
  name: 'PagesContactListSingle',
  components: {
    ScAvatar: Avatar["a" /* default */],
    ScPhoto: Photo["a" /* default */],
    ScInput: Input["a" /* default */],
    ScOffcanvas:  false ? undefined : null
  },
  data: () => ({
    users: [{
      id: "0MfWPD7Q",
      fName: "Lillie",
      lName: "Bird",
      company: "Reader's Digest Association Inc.",
      avatar: 9,
      colors: ['#7B1FA2', '#4527A0']
    }, {
      id: "THEqYNkT",
      fName: "Louis",
      lName: "Mazzuoli",
      company: "C. H. Robinson Worldwide Inc.",
      avatar: 5,
      colors: ['#4b6cb7', '#182848']
    }, {
      id: "T7Uymkr2",
      fName: "Micheal",
      lName: "Fiaschi",
      company: "Praxair Inc",
      avatar: 1,
      colors: ['#d53369', '#cbad6d']
    }, {
      id: "ycGS7pDn",
      fName: "Tony",
      lName: "Mallet",
      company: "Farmland Industries Inc.",
      avatar: 1,
      colors: ['#C04848', '#480048']
    }, {
      id: "N3HDfC4u",
      fName: "Barry",
      lName: "Magrini",
      company: "American Power Conversion Corporation",
      avatar: 6
    }, {
      id: "iQgU6k1-",
      fName: "Maude",
      lName: "Stewart",
      company: "R.R. Donnelley & Sons Company",
      avatar: 6
    }, {
      id: "KV5qnJaJ",
      fName: "Jose",
      lName: "Castagnoli",
      company: "Premcor Inc.",
      avatar: 4
    }, {
      id: "n4a6YJc1",
      fName: "Mike",
      lName: "Fossati",
      company: "Fortune Brands Inc.",
      avatar: 9
    }, {
      id: "x8_eQ0Fg",
      fName: "Violet",
      lName: "Bonciani",
      company: "Reliant Energy Inc.",
      avatar: 5
    }, {
      id: "Zda95NqE",
      fName: "Milton",
      lName: "Degl'Innocenti",
      company: "Siebel Systems Inc",
      avatar: 3
    }, {
      id: "NcLmV3y_",
      fName: "Keith",
      lName: "Floyd",
      company: "La-Z-Boy Inc.",
      avatar: 4
    }, {
      id: "oAOhDH2a",
      fName: "Micheal",
      lName: "Soto",
      company: "Veritas Software Corporation",
      avatar: 9
    }, {
      id: "Rnlimm6r",
      fName: "Jay",
      lName: "Fleury",
      company: "Atmos Energy Corporation",
      avatar: 5
    }, {
      id: "-j28hXMM",
      fName: "Nellie",
      lName: "Hart",
      company: "A.G. Edwards Inc.",
      avatar: 7
    }, {
      id: "2YuLPMVA",
      fName: "Minnie",
      lName: "Frullini",
      company: "Lennox International Inc.",
      avatar: 3
    }, {
      id: "4xOobRbr",
      fName: "Randy",
      lName: "Cheli",
      company: "EOG Resources, Inc.",
      avatar: 1
    }, {
      id: "8ihEQQNx",
      fName: "Leon",
      lName: "Hoekstra",
      company: "Enterprise Products Partners L.P.",
      avatar: 4
    }, {
      id: "LuA86WWJ",
      fName: "Olive",
      lName: "Pratellesi",
      company: "Texas Instruments Incorporated",
      avatar: 7
    }, {
      id: "72U7hNsr",
      fName: "Bill",
      lName: "Bonanni",
      company: "Apache Corporation",
      avatar: 1
    }, {
      id: "6PEZpApZ",
      fName: "Evelyn",
      lName: "Zhou",
      company: "Guidant Corporation",
      avatar: 1
    }, {
      id: "Eet9U621",
      fName: "Tom",
      lName: "Jaspers",
      company: "Safeway Inc",
      avatar: 9
    }, {
      id: "TXHFOVgA",
      fName: "Frank",
      lName: "Torres",
      company: "Popular Inc",
      avatar: 4
    }, {
      id: "AM-EYLCh",
      fName: "Lou",
      lName: "Meyer",
      company: "USG Corporation",
      avatar: 6
    }, {
      id: "ji60wt49",
      fName: "Gabriel",
      lName: "Wolf",
      company: "Nordstrom Inc",
      avatar: 2
    }, {
      id: "-CZKvqqs",
      fName: "Millie",
      lName: "Sakai",
      company: "Thomas & Betts Corporation",
      avatar: 5
    }, {
      id: "XMtSviO9",
      fName: "Georgie",
      lName: "Rossetti",
      company: "Universal Forest Products Inc",
      avatar: 9
    }, {
      id: "g_vK9Vqe",
      fName: "Alta",
      lName: "Gabbrielli",
      company: "Motorola Inc.",
      avatar: 10
    }, {
      id: "KWrQR5VU",
      fName: "Ollie",
      lName: "Franklin",
      company: "Newell Rubbermaid Inc",
      avatar: 7
    }, {
      id: "KOF4GFiB",
      fName: "Susie",
      lName: "Taylor",
      company: "Solutia Inc",
      avatar: 4
    }, {
      id: "Sj9kBFMw",
      fName: "Henrietta",
      lName: "Renzi",
      company: "The Goodyear Tire & Rubber Company",
      avatar: 7
    }, {
      id: "LGHphSaE",
      fName: "Adeline",
      lName: "Blok",
      company: "J.B. Hunt Transport Services Inc.",
      avatar: 9
    }, {
      id: "e97CVd3X",
      fName: "Jacob",
      lName: "Stokes",
      company: "Georgia-Pacific Corporation",
      avatar: 7
    }],
    selectedUser: {
      id: "0MfWPD7Q",
      avatar: 9,
      fName: "Lillie",
      lName: "Bird",
      company: "Reader's Digest Association Inc.",
      address: "624 Jekbe Boulevard",
      email: "pava@ec.tt",
      phone: "(837) 398-7632",
      city: "Rewnenew",
      country: "Isle of Man",
      colors: '#7B1FA2, #4527A0'
    },
    stickyUserCard: {
      media: 'mediumMin',
      options: {
        'container': '#sc-page-content'
      },
      on: {
        'sticky_kit:stick'(e) {// /console.log("has stuck!", e.target);
        },

        'sticky_kit:unstick'(e) {// console.log("has unstuck!", e.target);
        }

      }
    },
    gmaps: {
      center: {
        lat: 32.67,
        lng: -16.9421801
      },
      zoom: 12,
      markers: [{
        id: 1,
        position: {
          lat: 32.6600766,
          lng: -16.9421801
        },
        title: 'Madeira'
      }]
    },
    findUser: '',
    defaultColors: '#7B1FA2, #4527A0'
  }),
  computed: {
    timeline() {
      return [{
        id: 1,
        date: this.$moment().format('DD MMM'),
        dateAlt1: this.$moment().format('ddd'),
        dateAlt2: this.$moment().format('MMM YYYY'),
        icon: 'mdi-image',
        iconAvatar: 5,
        iconColor: '',
        color: 'md-bg-red-500 sc-light',
        colorAlt1: 'md-bg-purple-500 sc-light',
        title: 'New Album',
        titleLink: '',
        user: '',
        meta: '',
        category: '',
        content: '',
        images: [1, 6, 7, 5, 4],
        tasks: [],
        extraClass: 'sc-timeline-body-border'
      }, {
        id: 2,
        date: this.$moment().subtract(1, 'day').format('DD MMM'),
        dateAlt1: this.$moment().subtract(1, 'day').format('ddd'),
        dateAlt2: this.$moment().subtract(1, 'month').format('MMM YYYY'),
        icon: 'mdi-file-document',
        iconAvatar: '',
        iconColor: 'md-color-green-800 sc-icon-32',
        color: 'md-bg-green-500 sc-light',
        colorAlt1: 'md-bg-amber-500 sc-light',
        title: 'New posts',
        titleLink: 'javascript:void(0)',
        user: '',
        meta: '23 comments; 14 pingbacks',
        category: 'travel',
        content: 'Velit aut sit ab blanditiis sint ut tenetur repellendus deleniti quisquam reiciendis maiores sit sed adipisci consequatur et autem eos repellendus.',
        images: [],
        tasks: [],
        extraClass: 'sc-timeline-body-border'
      }, {
        id: 3,
        date: this.$moment().subtract(2, 'day').format('DD MMM'),
        dateAlt1: this.$moment().subtract(2, 'day').format('ddd'),
        dateAlt2: this.$moment().subtract(2, 'month').format('MMM YYYY'),
        icon: 'mdi-comment',
        iconAvatar: '',
        iconColor: 'md-color-red-800 sc-icon-32',
        color: 'md-bg-light-blue-500 sc-light',
        colorAlt1: 'md-bg-light-green-500 sc-light',
        title: '14 new commments',
        titleLink: '',
        user: '',
        meta: '',
        category: '',
        content: '',
        images: [],
        tasks: [],
        extraClass: 'uk-box-shadow-small'
      }, {
        id: 4,
        date: this.$moment().subtract(4, 'day').format('DD MMM'),
        dateAlt1: this.$moment().subtract(4, 'day').format('ddd'),
        dateAlt2: this.$moment().subtract(4, 'months').format('MMM YYYY'),
        icon: 'mdi-calendar-check',
        iconAvatar: 3,
        iconColor: '',
        color: 'md-bg-amber-500 sc-light',
        colorAlt1: 'md-bg-cyan-500 sc-light',
        title: 'User',
        titleLink: 'javascript:void(0)',
        user: 'Kiana Hettinger',
        meta: '',
        category: '',
        content: '',
        images: [],
        tasks: [{
          title: 'Neque magnam modi.',
          loggedTime: '2h 21m'
        }, {
          title: 'Id assumenda soluta quos.',
          loggedTime: ''
        }, {
          title: 'Id laudantium consequuntur provident magnam.',
          loggedTime: ''
        }, {
          title: 'Quae qui ipsam et repudiandae.',
          loggedTime: ''
        }],
        extraClass: 'md-bg-grey-100'
      }];
    },

    filteredUsers() {
      return this.users.filter(user => {
        return user.fName.toLowerCase().includes(this.findUser.toLowerCase()) || user.lName.toLowerCase().includes(this.findUser.toLowerCase()) || user.company.toLowerCase().includes(this.findUser.toLowerCase());
      });
    }

  },

  mounted() {
    this.$store.commit('setPageFixed', true);
  },

  beforeDestroy() {
    this.$store.commit('setPageFixed', false);
  },

  methods: {
    randAvatar() {
      return Math.floor(Math.random() * 10) + 1;
    },

    changeUser(user) {
      this.selectedUser.id = user.id;
      this.selectedUser.avatar = user.avatar;
      this.selectedUser.fName = user.fName;
      this.selectedUser.lName = user.lName;
      this.selectedUser.company = user.company;

      if (user.colors) {
        this.selectedUser.colors = user.colors;
      } else {
        this.selectedUser.colors = this.defaultColors;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/pages/contact_list_single.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contact_list_singlevue_type_script_lang_js_ = (contact_list_singlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/pages/contact_list_single.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contact_list_singlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "08207714"
  
)

/* harmony default export */ var contact_list_single = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact_list_single.js.map