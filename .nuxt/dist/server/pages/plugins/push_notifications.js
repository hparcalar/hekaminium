exports.ids = [128];
exports.modules = {

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar_05_md@2x.e8b8026.png";

/***/ }),

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/plugins/push_notifications.vue?vue&type=template&id=7e1d4dd6&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_vm._ssrNode("<div data-uk-alert class=\"uk-alert-warning uk-alert\">\r\n\t\t\t\tTo use this feature you need to run this example on LOCALHOST or use HTTPS protocol.\r\n\t\t\t</div> "), _c('ScCard', [_c('ScCardBody', [_c('button', {
    staticClass: "sc-button sc-button-primary",
    on: {
      "click": _vm.sendNotification
    }
  }, [_vm._v("\r\n\t\t\t\t\t\tSend notification\r\n\t\t\t\t\t")]), _vm._v(" "), _c('button', {
    staticClass: "sc-button sc-button-primary uk-margin-left",
    on: {
      "click": _vm.sendAnotherNotification
    }
  }, [_vm._v("\r\n\t\t\t\t\t\tSend another notification\r\n\t\t\t\t\t")])])], 1)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/plugins/push_notifications.vue?vue&type=template&id=7e1d4dd6&

// EXTERNAL MODULE: external "push.js"
var external_push_js_ = __webpack_require__(118);
var external_push_js_default = /*#__PURE__*/__webpack_require__.n(external_push_js_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/plugins/push_notifications.vue?vue&type=script&lang=js&

/* harmony default export */ var push_notificationsvue_type_script_lang_js_ = ({
  name: 'PluginsPushNotifications',
  methods: {
    sendNotification() {
      external_push_js_default.a.create("Hello from Scutum template.", {
        body: "How's it hangin'?",
        icon: __webpack_require__(145),
        timeout: 8000,

        onClick() {
          window.focus();
          this.close();
        }

      });
    },

    sendAnotherNotification() {
      external_push_js_default.a.create("Hello, this is a simple notification :)");
    }

  }
});
// CONCATENATED MODULE: ./pages/plugins/push_notifications.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_push_notificationsvue_type_script_lang_js_ = (push_notificationsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/plugins/push_notifications.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  plugins_push_notificationsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "58542326"
  
)

/* harmony default export */ var push_notifications = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=push_notifications.js.map