exports.ids = [126];
exports.modules = {

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/plugins/idle_timeout.vue?vue&type=template&id=13db5c62&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_c('ScCard', [_c('ScCardBody', [_c('h1', [_vm._v("Idle timeout")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('p', {
    staticClass: "uk-margin-remove"
  }, [_vm._v("\n\t\t\t\t\t\tKeep your mouse and keyboard still!\n\t\t\t\t\t")]), _vm._v(" "), _c('p', {
    staticClass: "uk-margin-remove"
  }, [_vm._v("\n\t\t\t\t\t\tThis plugin will display a modal to the user after 5 seconds of idleness.\n\t\t\t\t\t")])])], 1), _vm._ssrNode(" <div id=\"idle-modal\" data-uk-modal container=\"false\"><div class=\"uk-modal-dialog\"><div class=\"uk-modal-body\"><h3 class=\"uk-modal-title\">\n\t\t\t\t\t\t\tYour session is about to expire!\n\t\t\t\t\t\t</h3> <hr> <p class=\"uk-margin-remove\">\n\t\t\t\t\t\t\tYou've been inactive for a while. For your security, we'll log you out automatically.\n\t\t\t\t\t\t</p> <p class=\"uk-margin-remove\">\n\t\t\t\t\t\t\tClick &quot;Stay Online&quot; to continue your session.\n\t\t\t\t\t\t</p> <p>\n\t\t\t\t\t\t\tYour session will expire in\n\t\t\t\t\t\t\t<span id=\"sc-session-timer\" class=\"sc-text-semibold md-color-red-600\">" + _vm._ssrEscape("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.timeleft) + "\n\t\t\t\t\t\t\t") + "</span>\n\t\t\t\t\t\t\tsecond(s).\n\t\t\t\t\t\t</p></div> <div class=\"uk-modal-footer uk-text-right\"><button type=\"button\" class=\"sc-button sc-button-default sc-button-flat uk-modal-close\">\n\t\t\t\t\t\t\tStay Online\n\t\t\t\t\t\t</button> <button type=\"button\" class=\"sc-button sc-button-outline sc-button-outline-primary uk-margin-small-left\">\n\t\t\t\t\t\t\tLogout\n\t\t\t\t\t\t</button></div></div></div>")], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/plugins/idle_timeout.vue?vue&type=template&id=13db5c62&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/plugins/idle_timeout.vue?vue&type=script&lang=js&
if (false) {}

/* harmony default export */ var idle_timeoutvue_type_script_lang_js_ = ({
  name: 'PluginsIdleTimeout',
  data: () => ({
    timeleft: 30,
    warningTimer: null
  }),

  onIdle() {
    UIkit.modal('#idle-modal').show();
    this.countDown();
  },

  onActive() {},

  methods: {
    countDown() {
      this.warningTimer = setInterval(() => {
        this.timeleft -= 1;

        if (this.timeleft <= 0) {
          this.logout();
        }
      }, 1000);
    },

    clearTimer() {
      clearInterval(this.warningTimer);
      UIkit.modal('#idle-modal').hide();
      this.timeleft = 30;
    },

    logout() {
      this.clearTimer();
      this.$router.push({
        path: '/login_page'
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/plugins/idle_timeout.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_idle_timeoutvue_type_script_lang_js_ = (idle_timeoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/plugins/idle_timeout.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  plugins_idle_timeoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "35cf8309"
  
)

/* harmony default export */ var idle_timeout = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=idle_timeout.js.map