exports.ids = [26];
exports.modules = {

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/components/notifications.vue?vue&type=template&id=56836c46&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_c('ScCard', [_c('ScCardBody', [_c('div', {
    staticClass: "uk-child-width-1-5@l uk-child-width-1-3@m uk-grid-divider uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', [_c('p', {
    staticClass: "uk-text-large"
  }, [_vm._v("\n\t\t\t\t\t\t\t\tDefault\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.showNotification(_vm.notification.default);
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\tClick\n\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', [_c('p', {
    staticClass: "uk-text-large"
  }, [_vm._v("\n\t\t\t\t\t\t\t\tPersistent\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.showNotification(_vm.notification.persistent, false, false, true);
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\tClick\n\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', [_c('p', {
    staticClass: "uk-text-large"
  }, [_vm._v("\n\t\t\t\t\t\t\t\tWith icon\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.showNotification(_vm.notification.withIcon);
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\tClick\n\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', [_c('p', {
    staticClass: "uk-text-large"
  }, [_vm._v("\n\t\t\t\t\t\t\t\tLong text\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.showNotification(_vm.notification.long);
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\tClick\n\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', [_c('p', {
    staticClass: "uk-text-large"
  }, [_vm._v("\n\t\t\t\t\t\t\t\tWith link\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.showNotification(_vm.notification.withLink);
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\tClick\n\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c('h4', {
    staticClass: "uk-margin-large-top uk-heading-line"
  }, [_c('span', [_vm._v("Posititions")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-child-width-auto@m uk-grid-divider",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', [_c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.showNotification(_vm.notification.default, 'top-left');
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\tTop Left\n\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', [_c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.showNotification(_vm.notification.default, 'top-center');
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\tTop Center\n\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', [_c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.showNotification(_vm.notification.default, 'top-right');
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\tTop Right\n\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', [_c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.showNotification(_vm.notification.default, 'bottom-left');
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\tBottom Left\n\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', [_c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.showNotification(_vm.notification.default, 'bottom-center');
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\tBottom Center\n\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', [_c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.showNotification(_vm.notification.default, 'bottom-right');
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\tBottom Right\n\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c('h4', {
    staticClass: "uk-margin-large-top uk-heading-line"
  }, [_c('span', [_vm._v("Status")])]), _vm._v(" "), _c('div', {
    staticClass: "uk-child-width-auto@m uk-grid-divider",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', [_c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.showNotification(_vm.notification.default, false, 'primary');
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\tPrimary\n\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', [_c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.showNotification(_vm.notification.default, false, 'success');
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\tSuccess\n\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', [_c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.showNotification(_vm.notification.default, false, 'danger');
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\tDanger\n\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', [_c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        return _vm.showNotification(_vm.notification.default, false, 'warning');
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\tWarning\n\t\t\t\t\t\t\t")])])])])], 1)], 1)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/components/notifications.vue?vue&type=template&id=56836c46&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/components/notifications.vue?vue&type=script&lang=js&
/* harmony default export */ var notificationsvue_type_script_lang_js_ = ({
  name: 'ComponentsNotifications',
  data: () => ({
    notification: {
      default: 'My message',
      persistent: 'My persistent message',
      withIcon: '<div class="uk-flex uk-flex-middle"><i class="mdi mdi-check-all uk-margin-right md-color-light-green-400"></i>Message</div>',
      long: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, labore laudantium eaque obcaecati',
      withLink: '<div class="uk-flex uk-flex-middle"><span class="uk-flex-1">Message deleted!</span><a href="javascript:void(0)" class="md-color-amber-500 uk-margin-small-left">undo</a></div>'
    }
  }),
  methods: {
    showNotification(text, pos, status, persistent) {
      var config = {};
      config.timeout = persistent ? !persistent : 3000;

      if (status) {
        config.status = status;
      }

      if (pos) {
        config.pos = pos;
      }

      UIkit.notification(text, config);
    }

  }
});
// CONCATENATED MODULE: ./pages/components/notifications.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_notificationsvue_type_script_lang_js_ = (notificationsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/components/notifications.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_notificationsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9e17f09a"
  
)

/* harmony default export */ var notifications = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=notifications.js.map