exports.ids = [27];
exports.modules = {

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/components/overlay.vue?vue&type=template&id=eeb15bba&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_c('content-overlay', {
    attrs: {
      "active": _vm.contentOverlayActive,
      "animate": true,
      "progress": _vm.progressActive
    }
  }, [_c('ScCard', [_c('ScCardTitle', [_vm._v("\n\t\t\t\t\t\tOverlay\n\t\t\t\t\t")]), _vm._v(" "), _c('ScCardBody', [_c('div', {
    staticClass: "uk-flex uk-height-medium"
  }, [_c('button', {
    staticClass: "sc-button uk-margin-right",
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.showContentOverlay.apply(null, arguments);
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\tContent overlay\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('button', {
    staticClass: "sc-button uk-margin-right",
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.showContentOverlaySpinner.apply(null, arguments);
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\tContent overlay + spinner\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('button', {
    staticClass: "sc-button sc-js-page-overlay uk-margin-right",
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.showPageOverlay.apply(null, arguments);
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\tPage overlay\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('button', {
    staticClass: "sc-button",
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.showPageOverlaySpinner.apply(null, arguments);
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\tPage overlay + spinner\n\t\t\t\t\t\t\t")])])])], 1)], 1)], 1)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/components/overlay.vue?vue&type=template&id=eeb15bba&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Overlay.vue?vue&type=template&id=b92c0260&
var Overlayvue_type_template_id_b92c0260_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "uk-position-relative"
  }, [_vm._t("default"), _vm._ssrNode(" "), [_c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.activeAnimated,
      expression: "activeAnimated"
    }],
    staticClass: "sc-overlay",
    class: {
      'dimmed': _vm.dimmed
    }
  })])], _vm._ssrNode(" <div class=\"sc-overlay dimmed\"" + _vm._ssrStyle(null, null, {
    display: _vm.active ? '' : 'none'
  }) + "></div> "), [_c('ScProgressOverlay', {
    attrs: {
      "active": _vm.active
    }
  })]], 2);
};

var Overlayvue_type_template_id_b92c0260_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Overlay.vue?vue&type=template&id=b92c0260&

// EXTERNAL MODULE: ./components/progress/index.js + 30 modules
var progress = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Overlay.vue?vue&type=script&lang=js&

/* harmony default export */ var Overlayvue_type_script_lang_js_ = ({
  components: {
    ScProgressOverlay: progress["e" /* ScProgressOverlay */]
  },
  props: {
    active: Boolean,
    animate: Boolean,
    progress: Boolean
  },
  data: () => ({
    activeAnimated: false,
    dimmed: false,
    overlayProgress: false,
    progressActive: false
  }),
  watch: {
    active(newVal) {
      if (this.animate) {
        if (newVal) {
          this.activeAnimated = true;
          setTimeout(() => {
            this.dimmed = true;
          }, 10);
        } else {
          this.dimmed = false;
          setTimeout(() => {
            this.activeAnimated = false;
          }, 280);
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Overlay.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Overlayvue_type_script_lang_js_ = (Overlayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Overlay.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Overlayvue_type_script_lang_js_,
  Overlayvue_type_template_id_b92c0260_render,
  Overlayvue_type_template_id_b92c0260_staticRenderFns,
  false,
  null,
  null,
  "3123db50"
  
)

/* harmony default export */ var Overlay = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/components/overlay.vue?vue&type=script&lang=js&

/* harmony default export */ var overlayvue_type_script_lang_js_ = ({
  name: 'ComponentsOverlay',
  components: {
    contentOverlay: Overlay
  },
  data: () => ({
    contentOverlayActive: false,
    progressActive: false
  }),
  methods: {
    showContentOverlay() {
      this.contentOverlayActive = true;
      setTimeout(() => {
        this.contentOverlayActive = false;
      }, 2000);
    },

    showContentOverlaySpinner() {
      this.contentOverlayActive = true;
      this.progressActive = true;
      setTimeout(() => {
        this.contentOverlayActive = false;
        setTimeout(() => {
          this.progressActive = false;
        }, 280);
      }, 2000);
    },

    showPageOverlay() {
      this.$store.commit('togglePageOverlay', true);
      setTimeout(() => {
        this.$store.commit('togglePageOverlay', false);
      }, 2000);
    },

    showPageOverlaySpinner() {
      this.$store.commit('togglePageOverlay', true);
      this.$store.commit('toggleProgressOverlay', true);
      setTimeout(() => {
        this.$store.commit('toggleProgressOverlay', false);
        setTimeout(() => {
          this.$store.commit('togglePageOverlay', false);
        });
      }, 2000);
    }

  }
});
// CONCATENATED MODULE: ./pages/components/overlay.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_overlayvue_type_script_lang_js_ = (overlayvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/components/overlay.vue





/* normalize component */

var overlay_component = Object(componentNormalizer["a" /* default */])(
  components_overlayvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2747a55b"
  
)

/* harmony default export */ var overlay = __webpack_exports__["default"] = (overlay_component.exports);

/***/ })

};;
//# sourceMappingURL=overlay.js.map