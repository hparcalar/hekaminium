exports.ids = [118];
exports.modules = {

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(656);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("35f7bfc8", content, true, context)
};

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_events_vue_vue_type_style_index_0_id_4d362cb7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(494);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_events_vue_vue_type_style_index_0_id_4d362cb7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_events_vue_vue_type_style_index_0_id_4d362cb7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_events_vue_vue_type_style_index_0_id_4d362cb7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_events_vue_vue_type_style_index_0_id_4d362cb7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".vc-container{border:none}.vc-calendar-events{padding:8px 16px}.vc-calendar-events>div{padding:8px;background:rgba(0,0,0,.05);border-radius:3px;margin:0 0 8px}.vc-calendar-events>div .vc-calendar-events-description{font-size:1rem;font-weight:500;margin:0}.vc-calendar-events>div span{color:rgba(0,0,0,.54);font-size:.875rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/plugins/calendar_events.vue?vue&type=template&id=4d362cb7&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_vm._ssrNode("<div class=\"uk-margin-auto uk-width-1-3@l\">", "</div>", [_c('ScCard', [_c('client-only', [_c('v-calendar', {
    attrs: {
      "attributes": _vm.attributes,
      "title-position": "left",
      "is-expanded": ""
    },
    on: {
      "dayclick": _vm.onDayClick,
      "transition-start": function ($event) {
        _vm.dayEvents = () => [];
      }
    }
  })], 1), _vm._v(" "), _c('ScTransition', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.dayEvents.length,
      expression: "dayEvents.length"
    }],
    staticClass: "vc-calendar-events",
    attrs: {
      "group": "",
      "stagger": "",
      "name": "slideBottom",
      "speed": 5,
      "appear": ""
    }
  }, _vm._l(_vm.dayEvents, function (event) {
    return _c('div', {
      key: event.customData.id
    }, [_c('h4', {
      staticClass: "vc-calendar-events-description"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(event.customData.description) + "\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.formatDate(event.customData.dates)))])]);
  }), 0)], 1)], 1)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/plugins/calendar_events.vue?vue&type=template&id=4d362cb7&

// EXTERNAL MODULE: external "@babel/runtime/helpers/toConsumableArray"
var toConsumableArray_ = __webpack_require__(38);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/plugins/calendar_events.vue?vue&type=script&lang=js&


if (false) {}

/* harmony default export */ var calendar_eventsvue_type_script_lang_js_ = ({
  name: 'PluginsCalendarEvents',

  data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    return {
      pageForThisMonth: null,
      todos: [{
        id: 1,
        description: 'Take Noah to basketball practice.',
        dates: new Date(year, month, 1),
        color: 'blue'
      }, {
        id: 2,
        description: 'Get some milks.',
        dates: new Date(year, month, 5),
        color: 'red'
      }, {
        id: 3,
        description: 'Pay the utility bill.',
        dates: new Date(year, month, 19),
        color: 'orange'
      }, {
        id: 4,
        description: 'Pick up clothes from the cleaners.',
        dates: new Date(year, month, 19),
        color: 'purple'
      }, {
        id: 5,
        description: 'Lunch with Leo.',
        dates: new Date(year, month, 22),
        color: 'green'
      }],
      dayEvents: []
    };
  },

  computed: {
    attributes() {
      return toConsumableArray_default()(this.todos.map(todo => ({
        key: todo.id,
        dates: todo.dates,
        customData: todo,
        order: todo.id,
        dot: {
          color: todo.color
        }
      })));
    }

  },
  methods: {
    onDayClick(day) {
      if (!day.attributes.length) {
        return;
      }

      this.dayEvents = day.attributes;
    },

    formatDate(d) {
      return this.$moment(d).format('dddd, DD-MM-YYYY ');
    }

  }
});
// CONCATENATED MODULE: ./pages/plugins/calendar_events.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_calendar_eventsvue_type_script_lang_js_ = (calendar_eventsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/plugins/calendar_events.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(655)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  plugins_calendar_eventsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "77a08d77"
  
)

/* harmony default export */ var calendar_events = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=calendar_events.js.map