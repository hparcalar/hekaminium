exports.ids = [71];
exports.modules = {

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(597);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("49120fc6", content, true, context)
};

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_wizard_vue_vue_type_style_index_0_id_1cfa7d8f_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(471);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_wizard_vue_vue_type_style_index_0_id_1cfa7d8f_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_wizard_vue_vue_type_style_index_0_id_1cfa7d8f_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_wizard_vue_vue_type_style_index_0_id_1cfa7d8f_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_wizard_vue_vue_type_style_index_0_id_1cfa7d8f_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".tabcontrol,.wizard{display:block;width:100%}.tabcontrol a,.wizard a{outline:0}.tabcontrol ul,.wizard ul{list-style:none!important;padding:0;margin:0}.tabcontrol ul>li,.wizard ul>li{display:block;padding:0}.tabcontrol>.content>.title,.tabcontrol>.steps .current-info,.wizard>.content>.title,.wizard>.steps .current-info{position:absolute;left:-999em}.tabcontrol{overflow:hidden}.wizard>.steps{position:relative;display:block}.wizard>.steps:before{content:\"\";display:table-cell}.wizard>.steps:after{content:\"\";display:table;clear:both}.wizard>.steps>ul{border-radius:3px;overflow:hidden;display:inline-flex;background:#fff}@media (max-width:959px){.wizard>.steps>ul{flex-wrap:wrap}}@media (max-width:959px){.wizard>.steps>ul>li{width:100%}}.wizard>.steps>ul>li>a{position:relative;display:block;width:auto;padding:12px 24px;text-decoration:none;color:rgba(0,0,0,.87);font-size:14px;font-size:.875rem;font-weight:500;border:2px solid #e8e8e8}.wizard>.steps>ul>li>a:after{display:block;right:-2px;border-color:#e8e8e8;z-index:20}.wizard>.steps>ul>li>a:after,.wizard>.steps>ul>li>a:before{content:\"\";position:absolute;top:50%;border-style:solid;border-width:0 2px 2px 0;background:#fff;width:12px;height:12px;transform:translateY(-50%) translateX(50%) rotate(-45deg)}.wizard>.steps>ul>li>a:before{display:block;left:-14px;border-color:#00acc1;z-index:30;display:none}@media (max-width:959px){.wizard>.steps>ul>li>a:after,.wizard>.steps>ul>li>a:before{display:none!important}}.wizard>.steps>ul>li>a>.step-icon{float:left;margin-right:12px;color:rgba(0,0,0,.54);font-size:24px;font-size:1.5rem}.wizard>.steps>ul>li>a>span{overflow:hidden;display:block}.wizard>.steps>ul>li>a .sub-text{display:block;font-size:13px;font-size:.8125rem;color:rgba(0,0,0,.54);font-weight:400}.wizard>.steps>ul>li:first-child>a{border-radius:3px 0 0 3px}.wizard>.steps>ul>li:first-child>a:before{display:none!important}@media (max-width:959px){.wizard>.steps>ul>li:first-child>a{border-radius:3px 3px 0 0}}.wizard>.steps>ul>li:last-child{border-right:none}.wizard>.steps>ul>li:last-child>a{border-radius:0 3px 3px 0}.wizard>.steps>ul>li:last-child>a:after{display:none}@media (max-width:959px){.wizard>.steps>ul>li:last-child>a{border-radius:0 0 3px 3px}}.wizard>.steps>ul>li.current{cursor:default}.wizard>.steps>ul>li.current a{color:#00acc1;z-index:50;background:#fff}.wizard>.steps>ul>li.current a,.wizard>.steps>ul>li.current a:after{border-color:#00acc1!important}.wizard>.steps>ul>li.current a:after{background:#fff!important}.wizard>.steps>ul>li.current a:before{display:block}.wizard>.steps>ul>li.error a,.wizard>.steps>ul>li.error a:active,.wizard>.steps>ul>li.error a:hover{background:transparent!important;color:#e53935;border-color:#e53935!important}.wizard>.steps>ul>li.error a:after,.wizard>.steps>ul>li.error a:before{background:#fff;border-color:#e53935!important}.wizard>.steps>ul>li.done a,.wizard>.steps>ul>li.done a:active,.wizard>.steps>ul>li.done a:after,.wizard>.steps>ul>li.done a:hover{background:#fff;color:#7cb342}.wizard>.steps>ul>li.done a:after{background:#fff}.wizard>.steps>ul>li.disabled a,.wizard>.steps>ul>li.disabled a .sub-text,.wizard>.steps>ul>li.disabled a:active,.wizard>.steps>ul>li.disabled a:hover{color:rgba(0,0,0,.4)!important;cursor:default}.wizard>.steps>ul>li.disabled a:before{display:none}.wizard>.steps>ul>li+li>a{margin-left:-2px}@media (max-width:959px){.wizard>.steps>ul>li+li>a{margin-left:0;margin-top:-2px}}.wizard>.steps .number{display:none}.wizard>.actions>ul>li,.wizard>.steps>ul>li{float:left}@media (max-width:959px){.wizard>.actions>ul>li,.wizard>.steps>ul>li{float:none}}.wizard>.content{display:flex;overflow:hidden;position:relative;width:auto;margin:20px 0}.wizard>.content>div{width:100%;flex-shrink:0}.wizard>.content>.body,.wizard>.content>div>.body{float:left;position:absolute;width:100%;padding:20px 20px 40px;box-sizing:border-box;border-radius:3px;background:#fff}.wizard>.content>.body>iframe,.wizard>.content>div>.body>iframe{border:0;width:100%;height:100%}.wizard>.content>.body.border,.wizard>.content>div>.body.border{border:1px solid rgba(0,0,0,.08)}.wizard>.content>.body.border-dark,.wizard>.content>div>.body.border-dark{border:1px solid rgba(0,0,0,.12)}.wizard>.actions{position:relative;display:block}.wizard>.actions>ul{display:flex;justify-content:space-between;padding:0;margin:0}.wizard>.actions>ul>li{padding:0}.wizard>.actions>ul>li+li{margin-left:14px}.wizard>.actions>ul>li.disabled{opacity:.4}.wizard>.actions>ul>li.disabled>a{cursor:default!important}.wizard.minimal>.steps>ul{overflow:hidden;display:inline-flex;border-radius:3px;padding:8px;margin-left:-8px}@media (max-width:959px){.wizard.minimal>.steps>ul{overflow:visible;padding:0;margin:0;display:flex;flex-direction:column}}@media (max-width:1199px){.wizard.minimal>.steps>ul{display:flex;align-items:flex-start}}.wizard.minimal>.steps>ul>li{border-right:none}@media (max-width:1199px){.wizard.minimal>.steps>ul>li{flex:1}}.wizard.minimal>.steps>ul>li>a{position:relative;display:block;width:auto;padding:8px 24px;text-decoration:none;color:rgba(0,0,0,.54);font-size:14px;font-size:.875rem;text-align:center;max-width:120px;font-weight:500;border:1px solid #e8e8e8;transition:all .14s cubic-bezier(.55,0,.1,1);box-sizing:border-box}@media (max-width:1199px){.wizard.minimal>.steps>ul>li>a{padding:8px 16px;max-width:100%;text-align:center}}@media (max-width:959px){.wizard.minimal>.steps>ul>li>a{display:flex;align-items:center;justify-content:left;align-content:center;text-align:left}}.wizard.minimal>.steps>ul>li>a:hover{border:1px solid rgba(0,0,0,.36)!important}.wizard.minimal>.steps>ul>li>a:hover,.wizard.minimal>.steps>ul>li>a:hover .step-icon{color:inherit}.wizard.minimal>.steps>ul>li>a:after,.wizard.minimal>.steps>ul>li>a:before{display:none}.wizard.minimal>.steps>ul>li>a>.step-icon{display:block;float:none;margin:0 auto 4px;height:36px;position:relative;color:rgba(0,0,0,.54);z-index:10;font-size:24px;font-size:1.5rem}@media (max-width:1199px){.wizard.minimal>.steps>ul>li>a>.step-icon{margin:0 auto;margin:0 8px 0 0}}.wizard.minimal>.steps>ul>li+li a{border-left:1px solid transparent}@media (max-width:959px){.wizard.minimal>.steps>ul>li+li a{border-left:1px solid #e8e8e8;border-top:1px solid transparent}}.wizard.minimal>.steps>ul>li:first-child a{margin-left:0!important}.wizard.minimal>.steps>ul .current a,.wizard.minimal>.steps>ul .current a:active,.wizard.minimal>.steps>ul .current a:hover{cursor:default;background:#00acc1;color:#fff;border-color:transparent!important}.wizard.minimal>.steps>ul .current a:after{background:#00acc1!important}.wizard.minimal>.steps>ul .current a>.step-icon{color:#fff!important}.wizard.minimal>.steps>ul .current+li a{border-left:1px solid #e8e8e8}.wizard.minimal>.steps>ul .done a{color:rgba(0,0,0,.87);background:inherit}.wizard.minimal>.steps>ul .done a>.step-icon{color:rgba(0,0,0,.87)}.wizard.minimal>.content{margin:40px 0}.wizard.minimal>.content>.body{border:none;padding:0}.wizard.vertical>.steps{float:left;width:280px;margin-right:24px}@media (max-width:1199px){.wizard.vertical>.steps{width:100%;float:none;margin-right:0;margin-bottom:24px}}.wizard.vertical>.steps>ul{display:block}.wizard.vertical>.steps>ul>li{float:none;width:100%;border-right:none}.wizard.vertical>.steps>ul>li>a{padding:16px 16px 16px 56px;position:relative}@media (max-width:959px){.wizard.vertical>.steps>ul>li>a{padding:8px 16px}}.wizard.vertical>.steps>ul>li>a:after{top:auto;bottom:-12px}.wizard.vertical>.steps>ul>li>a:after,.wizard.vertical>.steps>ul>li>a:before{width:8px;height:8px;left:18px;right:auto;transform:translateY(-50%) translateX(50%) rotate(45deg)}.wizard.vertical>.steps>ul>li>a:before{top:0;bottom:auto}.wizard.vertical>.steps>ul>li>a>.step-icon{position:absolute;left:17px;top:18px}.wizard.vertical>.steps>ul>li:first-child>a{border-radius:3px 3px 0 0}.wizard.vertical>.steps>ul>li:last-child{border-bottom:none}.wizard.vertical>.steps>ul>li:last-child>a{border-radius:0 0 3px 3px}.wizard.vertical>.steps>ul>li+li a{margin-top:-2px;margin-left:0}.wizard.vertical>.content{overflow:hidden;margin:0}.wizard.vertical>.actions{display:block;margin-top:32px;padding-left:304px}@media (max-width:1199px){.wizard.vertical>.actions{padding-left:0}}.wizard.vertical>.actions>ul{text-align:right}.wizard.vertical>.actions>ul>li{display:inline-block;float:none}.wizard.vertical.minimal>.steps{width:120px}@media (max-width:1199px){.wizard.vertical.minimal>.steps{width:100%}}.wizard.vertical.minimal>.steps>ul{display:block}@media (max-width:1199px){.wizard.vertical.minimal>.steps>ul{display:flex;align-items:flex-start}}@media (max-width:959px){.wizard.vertical.minimal>.steps>ul{flex-direction:column}}.wizard.vertical.minimal>.steps>ul>li{display:block;float:none;border:none}@media (max-width:959px){.wizard.vertical.minimal>.steps>ul>li{flex:1}}.wizard.vertical.minimal>.steps>ul>li>a{padding:8px;overflow:hidden}@media (max-width:959px){.wizard.vertical.minimal>.steps>ul>li>a{padding:8px 16px;display:flex;align-items:center}}.wizard.vertical.minimal>.steps>ul>li>a .step-icon{margin:0;position:static}@media (min-width:960px) and (max-width:1199px){.wizard.vertical.minimal>.steps>ul>li>a .step-icon{margin:0}}.wizard.vertical.minimal>.steps>ul>li+li a{border-top:1px solid transparent;border-left:1px solid #e8e8e8}@media (max-width:1199px){.wizard.vertical.minimal>.steps>ul>li+li a{border-top:1px solid #e8e8e8;border-left:1px solid transparent;margin-top:0}}@media (max-width:959px){.wizard.vertical.minimal>.steps>ul>li+li a{border-top:1px solid transparent;border-left:1px solid #e8e8e8}}.wizard.vertical.minimal>.steps>ul>li:first-child a{margin-top:0!important}@media (min-width:960px) and (max-width:1199px){.wizard.vertical.minimal>.steps>ul>li:first-child a{border-radius:3px 0 0 3px}}.wizard.vertical.minimal>.steps>ul>li:last-child a{margin-bottom:0!important}@media (min-width:960px) and (max-width:1199px){.wizard.vertical.minimal>.steps>ul>li:last-child a{border-radius:0 3px 3px 0}}.wizard.vertical.minimal>.steps>ul>li.current+li a{border-top:1px solid #e8e8e8}.wizard.vertical.minimal>.actions{padding-left:144px}@media (max-width:1199px){.wizard.vertical.minimal>.actions{padding-left:0}}.tabcontrol>.steps{position:relative;display:block;width:100%}.tabcontrol>.steps>ul{position:relative;margin:6px 0 0;top:1px;z-index:1;padding:0}.tabcontrol>.steps>ul>li{padding:0;float:left;margin:5px 2px 0 0;padding:1px;border-radius:4px 4px 0 0}.tabcontrol>.steps>ul>li:hover{background:#edecec;border:1px solid #bbb;padding:0}.tabcontrol>.steps>ul>li.current{border:1px solid #bbb;border-bottom:0;padding:0 0 1px;margin-top:0}.tabcontrol>.steps>ul>li.current>a{padding:15px 30px 10px}.tabcontrol>.steps>ul>li>a{color:#5f5f5f;display:inline-block;border:0;margin:0;padding:10px 30px;text-decoration:none}.tabcontrol>.steps>ul>li>a:hover{text-decoration:none}.tabcontrol>.content{position:relative;display:inline-block;width:100%;height:35em;overflow:hidden;border-top:1px solid #bbb;padding-top:20px}.tabcontrol>.content>.body{float:left;position:absolute;width:95%;height:95%;padding:2.5%}.tabcontrol>.content>.body ul{list-style:disc!important}.tabcontrol>.content>.body ul>li{display:list-item}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/forms/wizard.vue?vue&type=template&id=1cfa7d8f&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_vm._ssrNode("<div data-uk-grid class=\"uk-flex-center uk-grid\">", "</div>", [_vm._ssrNode("<div class=\"uk-width-4-5@l\">", "</div>", [_c('ScCard', [_c('ScCardBody', [_c('client-only', [_c('FormWizard', {
    on: {
      "on-complete": _vm.onComplete
    }
  }, [_c('TabContent', {
    attrs: {
      "title": "Billing",
      "sub-title": "Enter your billing information.",
      "before-change": () => _vm.validateStep('step1')
    }
  }, [_c('Step1', {
    ref: "step1",
    on: {
      "on-validate": _vm.mergePartialModels
    }
  })], 1), _vm._v(" "), _c('TabContent', {
    attrs: {
      "title": "Payment",
      "sub-title": "Choose your payment method",
      "icon": "mdi mdi-credit-card",
      "before-change": () => _vm.validateStep('step2')
    }
  }, [_c('Step2', {
    ref: "step2",
    on: {
      "on-validate": _vm.mergePartialModels
    }
  })], 1), _vm._v(" "), _c('TabContent', {
    attrs: {
      "title": "Confirm Order",
      "sub-title": "Verify order details"
    }
  }, [_c('Step3', {
    attrs: {
      "data": _vm.finalModel
    }
  })], 1)], 1)], 1)], 1)], 1)], 1)])])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/forms/wizard.vue?vue&type=template&id=1cfa7d8f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/wizard/components/FormWizard.vue?vue&type=template&id=449fa029&
var FormWizardvue_type_template_id_449fa029_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "wizard",
    class: [_vm.stepSize, {
      vertical: _vm.isVertical
    }],
    on: {
      "keyup": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "right", 39, $event.key, ["Right", "ArrowRight"])) return null;
        if ('button' in $event && $event.button !== 2) return null;
        return _vm.focusNextTab.apply(null, arguments);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "left", 37, $event.key, ["Left", "ArrowLeft"])) return null;
        if ('button' in $event && $event.button !== 0) return null;
        return _vm.focusPrevTab.apply(null, arguments);
      }]
    }
  }, [_vm._ssrNode("<div class=\"steps\">", "</div>", [_vm._ssrNode("<ul role=\"tablist\"" + _vm._ssrClass(null, _vm.stepsClasses) + ">", "</ul>", [_vm._l(_vm.tabs, function (tab, index) {
    return _vm._t("step", function () {
      return [_c('WizardStep', {
        attrs: {
          "tab": tab,
          "index": index
        },
        nativeOn: {
          "click": function ($event) {
            return _vm.navigateToTab(index);
          },
          "keyup": function ($event) {
            if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
            return _vm.navigateToTab(index);
          }
        }
      })];
    }, {
      "tab": tab,
      "index": index,
      "navigateToTab": _vm.navigateToTab
    });
  })], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._t("default", null, {
    "transition": _vm.transition
  }, _vm.slotProps)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"actions\">", "</div>", [_vm._ssrNode("<ul" + _vm._ssrStyle(null, null, {
    display: !_vm.hideButtons ? '' : 'none'
  }) + ">", "</ul>", [_vm._t("footer", function () {
    return [_c('li', {
      staticClass: "wizard-button-prev"
    }, [_c('span', {
      attrs: {
        "role": "button",
        "tabindex": "0"
      },
      on: {
        "click": _vm.prevTab,
        "keyup": function ($event) {
          if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
          return _vm.prevTab.apply(null, arguments);
        }
      }
    }, [_vm._t("prev", function () {
      return [_c('WizardButton', {
        attrs: {
          "disabled": _vm.loading || _vm.displayPrevButton
        }
      }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.backButtonText) + "\r\n\t\t\t\t\t\t\t\t")])];
    }, null, _vm.slotProps)], 2), _vm._v(" "), _vm._t("custom-buttons-left", null, null, _vm.slotProps)], 2), _vm._v(" "), _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.isLastStep,
        expression: "!isLastStep"
      }],
      staticClass: "wizard-button-next"
    }, [_vm._t("custom-buttons-right", null, null, _vm.slotProps), _vm._v(" "), _c('span', {
      attrs: {
        "role": "button",
        "tabindex": "0"
      },
      on: {
        "click": _vm.nextTab,
        "keyup": function ($event) {
          if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
          return _vm.nextTab.apply(null, arguments);
        }
      }
    }, [_vm._t("finish", function () {
      return [_c('WizardButton', [_vm._v("\r\n\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.nextButtonText) + "\r\n\t\t\t\t\t\t\t\t")])];
    }, null, _vm.slotProps)], 2)], 2), _vm._v(" "), _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.isLastStep,
        expression: "isLastStep"
      }],
      staticClass: "wizard-button-finish"
    }, [_vm._t("custom-buttons-right", null, null, _vm.slotProps), _vm._v(" "), _c('span', {
      attrs: {
        "role": "button",
        "tabindex": "0"
      },
      on: {
        "click": _vm.nextTab,
        "keyup": function ($event) {
          if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
          return _vm.nextTab.apply(null, arguments);
        }
      }
    }, [_vm._t("next", function () {
      return [_c('WizardButton', [_vm._v("\r\n\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.finishButtonText) + "\r\n\t\t\t\t\t\t\t\t")])];
    }, null, _vm.slotProps)], 2)], 2)];
  }, null, _vm.slotProps)], 2)])], 2);
};

var FormWizardvue_type_template_id_449fa029_staticRenderFns = [];

// CONCATENATED MODULE: ./components/wizard/components/FormWizard.vue?vue&type=template&id=449fa029&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/wizard/components/WizardButton.vue?vue&type=template&id=f39b3702&
var WizardButtonvue_type_template_id_f39b3702_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('button', {
    staticClass: "sc-button",
    attrs: {
      "tabindex": "-1",
      "type": "button"
    }
  }, [_vm._t("default")], 2);
};

var WizardButtonvue_type_template_id_f39b3702_staticRenderFns = [];

// CONCATENATED MODULE: ./components/wizard/components/WizardButton.vue?vue&type=template&id=f39b3702&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/wizard/components/WizardButton.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  WizardButtonvue_type_template_id_f39b3702_render,
  WizardButtonvue_type_template_id_f39b3702_staticRenderFns,
  false,
  null,
  null,
  "35e6e7dc"
  
)

/* harmony default export */ var WizardButton = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/wizard/components/WizardStep.vue?vue&type=template&id=69aa7605&
var WizardStepvue_type_template_id_69aa7605_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('li', {
    class: {
      'current': _vm.tab.active,
      'error': _vm.tab.validationError,
      'disabled': !_vm.tab.active && !_vm.tab.checked,
      'done': _vm.tab.checked && !_vm.tab.active
    }
  }, [_vm._ssrNode("<a" + _vm._ssrAttr("id", `step-${_vm.tab.tabId}`) + " href=\"javascript:void(0)\" role=\"tab\"" + _vm._ssrAttr("tabindex", _vm.tab.checked ? 0 : '') + _vm._ssrAttr("aria-controls", _vm.tab.tabId) + _vm._ssrAttr("aria-disabled", _vm.tab.active) + _vm._ssrAttr("aria-selected", _vm.tab.active) + ">", "</a>", [_vm._t("title", function () {
    return [_c('i', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.tab.icon !== '',
        expression: "tab.icon !== ''"
      }],
      staticClass: "step-icon",
      class: _vm.tab.icon
    }), _vm._v(" "), _c('span', [_vm._v("\r\n\t\t\t\t\t" + _vm._s(_vm.tab.title) + "\r\n\t\t\t\t\t"), _c('span', {
      staticClass: "sub-text"
    }, [_vm._v("\r\n\t\t\t\t\t\t" + _vm._s(_vm.tab.subTitle) + "\r\n\t\t\t\t\t")])])];
  })], 2)]);
};

var WizardStepvue_type_template_id_69aa7605_staticRenderFns = [];

// CONCATENATED MODULE: ./components/wizard/components/WizardStep.vue?vue&type=template&id=69aa7605&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/wizard/components/WizardStep.vue?vue&type=script&lang=js&
/* harmony default export */ var WizardStepvue_type_script_lang_js_ = ({
  name: 'WizardStep',
  props: {
    tab: {
      type: Object,
      default: () => {}
    },
    transition: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      default: 0
    }
  }
});
// CONCATENATED MODULE: ./components/wizard/components/WizardStep.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WizardStepvue_type_script_lang_js_ = (WizardStepvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/wizard/components/WizardStep.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var WizardStep_component = Object(componentNormalizer["a" /* default */])(
  components_WizardStepvue_type_script_lang_js_,
  WizardStepvue_type_template_id_69aa7605_render,
  WizardStepvue_type_template_id_69aa7605_staticRenderFns,
  false,
  injectStyles,
  null,
  "20d140ac"
  
)

/* harmony default export */ var WizardStep = (WizardStep_component.exports);
// CONCATENATED MODULE: ./components/wizard/components/helpers.js
function getFocusedElementId() {
  return document.activeElement.id;
}
function getFocusedTabIndex(tabs = []) {
  let activeId = getFocusedElementId();
  let tabIndex = tabs.findIndex(tab => tab.tabId === activeId);
  return tabIndex;
}
function findElementAndFocus(elemId) {
  let elem = document.getElementById(elemId);
  elem.focus();
}
function isPromise(func) {
  return func.then && typeof func.then === 'function';
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/wizard/components/FormWizard.vue?vue&type=script&lang=js&



/* harmony default export */ var FormWizardvue_type_script_lang_js_ = ({
  name: 'FormWizard',
  components: {
    WizardButton: WizardButton,
    WizardStep: WizardStep
  },

  provide() {
    return {
      addTab: this.addTab,
      removeTab: this.removeTab
    };
  },

  props: {
    nextButtonText: {
      type: String,
      default: 'Next'
    },
    backButtonText: {
      type: String,
      default: 'Previous'
    },
    finishButtonText: {
      type: String,
      default: 'Finish'
    },
    hideButtons: {
      type: Boolean,
      default: false
    },
    validateOnBack: Boolean,
    layout: {
      type: String,
      default: 'horizontal'
    },
    stepsClasses: {
      type: [String, Array],
      default: ''
    },
    stepSize: {
      type: String,
      default: 'md',
      validator: value => {
        let acceptedValues = ['xs', 'sm', 'md', 'lg'];
        return acceptedValues.indexOf(value) !== -1;
      }
    },

    /**
         * Name of the transition when transition between steps
         * */
    transition: {
      type: String,
      default: ''
    },

    /***
         *
         * Index of the initial tab to display
         */
    startIndex: {
      type: Number,
      default: 0,
      validator: value => {
        return value >= 0;
      }
    }
  },
  data: () => ({
    activeTabIndex: 0,
    beforeChangeTabIndex: 0,
    currentPercentage: 0,
    maxStep: 0,
    loading: false,
    tabs: []
  }),
  computed: {
    slotProps() {
      return {
        nextTab: this.nextTab,
        prevTab: this.prevTab,
        activeTabIndex: this.activeTabIndex,
        beforeChangeTabIndex: this.beforeChangeTabIndex,
        isLastStep: this.isLastStep
      };
    },

    tabCount() {
      return this.tabs.length;
    },

    isLastStep() {
      return this.activeTabIndex === this.tabCount - 1;
    },

    isVertical() {
      return this.layout === 'vertical';
    },

    displayPrevButton() {
      return this.activeTabIndex === 0;
    },

    stepPercentage() {
      return 1 / (this.tabCount * 2) * 100;
    },

    progress() {
      let percentage = 0;

      if (this.activeTabIndex > 0) {
        let stepsToAdd = 1;
        let stepMultiplier = 2;
        percentage = this.stepPercentage * (this.activeTabIndex * stepMultiplier + stepsToAdd);
      } else {
        percentage = this.stepPercentage;
      }

      return percentage;
    },

    enterAnimation() {
      if (this.$parent.activeTabIndex < this.$parent.beforeChangeTabIndex) {
        // console.log('enter <');
        return "uk-animation-slide-left uk-animation-v-slow";
      } else {
        // console.log('enter >');
        return "uk-animation-slide-right uk-animation-v-slow";
      }
    },

    leaveAnimation() {
      if (this.$parent.activeTabIndex > this.$parent.beforeChangeTabIndex) {
        // console.log('leave >');
        return "uk-animation-slide-left uk-animation-reverse uk-animation-v-slow";
      } else {
        // console.log('leave <');
        return "uk-animation-slide-right uk-animation-reverse uk-animation-v-slow";
      }
    }

  },
  watch: {
    '$route.path'(newRoute) {
      this.checkRouteChange(newRoute);
    }

  },

  mounted() {
    this.initializeTabs();
  },

  methods: {
    emitTabChange(prevIndex, nextIndex) {
      this.$emit('on-change', prevIndex, nextIndex);
      this.$emit('update:startIndex', nextIndex);
    },

    addTab(item) {
      const index = this.$slots.default.indexOf(item.$vnode);
      item.tabId = `${item.title.replace(/ /g, '')}${index}`;
      this.tabs.splice(index, 0, item); // if a step is added before the current one, go to it

      if (index < this.activeTabIndex + 1) {
        this.maxStep = index;
        this.changeTab(this.activeTabIndex + 1, index);
      }
    },

    removeTab(item) {
      const tabs = this.tabs;
      const index = tabs.indexOf(item);

      if (index > -1) {
        // Go one step back if the current step is removed
        if (index === this.activeTabIndex) {
          this.maxStep = this.activeTabIndex - 1;
          this.changeTab(this.activeTabIndex, this.activeTabIndex - 1);
        }

        if (index < this.activeTabIndex) {
          this.maxStep = this.activeTabIndex - 1;
          this.activeTabIndex = this.activeTabIndex - 1;
          this.emitTabChange(this.activeTabIndex + 1, this.activeTabIndex);
        }

        tabs.splice(index, 1);
      }
    },

    reset() {
      this.maxStep = 0;
      this.tabs.forEach(tab => {
        tab.checked = false;
      });
      this.navigateToTab(0);
    },

    activateAll() {
      this.maxStep = this.tabs.length - 1;
      this.tabs.forEach(tab => {
        tab.checked = true;
      });
    },

    navigateToTab(index) {
      let validate = index > this.activeTabIndex;

      if (index <= this.maxStep) {
        let cb = () => {
          if (validate && index - this.activeTabIndex > 1) {
            // validate all steps recursively until destination index
            this.changeTab(this.activeTabIndex, this.activeTabIndex + 1);
            this.beforeTabChange(this.activeTabIndex, cb);
          } else {
            this.changeTab(this.activeTabIndex, index);
            this.afterTabChange(this.activeTabIndex);
          }
        };

        if (validate) {
          this.beforeTabChange(this.activeTabIndex, cb);
        } else {
          this.setValidationError(null);
          cb();
        }
      }

      return index <= this.maxStep;
    },

    nextTab() {
      let cb = () => {
        if (this.activeTabIndex < this.tabCount - 1) {
          this.changeTab(this.activeTabIndex, this.activeTabIndex + 1);
          this.afterTabChange(this.activeTabIndex);
        } else {
          this.$emit('on-complete');
        }
      };

      this.beforeChangeTabIndex = this.activeTabIndex;
      this.beforeTabChange(this.activeTabIndex, cb);
    },

    prevTab() {
      let cb = () => {
        if (this.activeTabIndex > 0) {
          this.setValidationError(null);
          this.changeTab(this.activeTabIndex, this.activeTabIndex - 1);
        }
      };

      if (this.validateOnBack) {
        this.beforeChangeTabIndex = this.activeTabIndex;
        this.beforeTabChange(this.activeTabIndex, cb);
      } else {
        cb();
      }
    },

    focusNextTab() {
      let tabIndex = getFocusedTabIndex(this.tabs);

      if (tabIndex !== -1 && tabIndex < this.tabs.length - 1) {
        let tabToFocus = this.tabs[tabIndex + 1];

        if (tabToFocus.checked) {
          findElementAndFocus(tabToFocus.tabId);
        }
      }
    },

    focusPrevTab() {
      let tabIndex = getFocusedTabIndex(this.tabs);

      if (tabIndex !== -1 && tabIndex > 0) {
        let toFocusId = this.tabs[tabIndex - 1].tabId;
        findElementAndFocus(toFocusId);
      }
    },

    setLoading(value) {
      this.loading = value;
      this.$emit('on-loading', value);
    },

    setValidationError(error) {
      this.tabs[this.activeTabIndex].validationError = error;
      this.$emit('on-error', error);
    },

    validateBeforeChange(promiseFn, callback) {
      this.setValidationError(null);
      this.beforeChangeTabIndex = this.activeTabIndex; // we have a promise

      if (isPromise(promiseFn)) {
        this.setLoading(true);
        promiseFn.then(res => {
          this.setLoading(false);
          let validationResult = res === true;
          this.executeBeforeChange(validationResult, callback);
        }).catch(error => {
          this.setLoading(false);
          this.setValidationError(error);
        }); // we have a simple function
      } else {
        let validationResult = promiseFn === true;
        this.executeBeforeChange(validationResult, callback);
      }
    },

    executeBeforeChange(validationResult, callback) {
      this.$emit('on-validate', validationResult, this.activeTabIndex);

      if (validationResult) {
        callback();
      } else {
        this.tabs[this.activeTabIndex].validationError = 'error';
      }
    },

    beforeTabChange(index, callback) {
      if (this.loading) {
        return;
      }

      let oldTab = this.tabs[index];

      if (oldTab && oldTab.beforeChange !== undefined && oldTab.beforeChange) {
        let tabChangeRes = oldTab.beforeChange();
        this.validateBeforeChange(tabChangeRes, callback);
      } else {
        callback();
      }
    },

    afterTabChange(index) {
      if (this.loading) {
        return;
      }

      let newTab = this.tabs[index];

      if (newTab && newTab.afterChange !== undefined && newTab.afterChange) {
        newTab.afterChange();
      }
    },

    changeTab(oldIndex, newIndex, emitChangeEvent = true) {
      let oldTab = this.tabs[oldIndex];
      let newTab = this.tabs[newIndex];

      if (oldTab) {
        oldTab.active = false;
      }

      if (newTab) {
        newTab.active = true;
      }

      if (emitChangeEvent && this.activeTabIndex !== newIndex) {
        this.emitTabChange(oldIndex, newIndex);
      }

      this.activeTabIndex = newIndex;
      this.activateTabAndCheckStep(this.activeTabIndex);
      return true;
    },

    tryChangeRoute(tab) {
      if (this.$router && tab.route) {
        this.$router.push(tab.route);
      }
    },

    checkRouteChange(route) {
      let matchingTabIndex = -1;
      let matchingTab = this.tabs.find((tab, index) => {
        let match = tab.route === route;

        if (match) {
          matchingTabIndex = index;
        }

        return match;
      });

      if (matchingTab && !matchingTab.active) {
        const shouldValidate = matchingTabIndex > this.activeTabIndex;
        this.navigateToTab(matchingTabIndex, shouldValidate);
      }
    },

    deactivateTabs() {
      this.tabs.forEach(tab => {
        tab.active = false;
      });
    },

    activateTab(index) {
      this.deactivateTabs();
      let tab = this.tabs[index];

      if (tab) {
        tab.active = true;
        tab.checked = true;
        this.tryChangeRoute(tab);
      }
    },

    activateTabAndCheckStep(index) {
      this.activateTab(index);

      if (index > this.maxStep) {
        this.maxStep = index;
      }

      this.activeTabIndex = index;
    },

    initializeTabs() {
      if (this.tabs.length > 0 && this.startIndex === 0) {
        this.activateTab(this.activeTabIndex);
      }

      if (this.startIndex < this.tabs.length) {
        this.activateTabAndCheckStep(this.startIndex);
      } else {
        window.console.warn(`Prop startIndex set to ${this.startIndex} is greater than the number of tabs - ${this.tabs.length}. Make sure that the starting index is less than the number of tabs registered`);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/wizard/components/FormWizard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FormWizardvue_type_script_lang_js_ = (FormWizardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/wizard/components/FormWizard.vue





/* normalize component */

var FormWizard_component = Object(componentNormalizer["a" /* default */])(
  components_FormWizardvue_type_script_lang_js_,
  FormWizardvue_type_template_id_449fa029_render,
  FormWizardvue_type_template_id_449fa029_staticRenderFns,
  false,
  null,
  null,
  "daae65b8"
  
)

/* harmony default export */ var FormWizard = (FormWizard_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/wizard/components/TabContent.vue?vue&type=template&id=d64872f8&
var TabContentvue_type_template_id_d64872f8_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('transition', {
    attrs: {
      "enter-active-class": _vm.enterAnimation,
      "leave-active-class": _vm.leaveAnimation
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.active,
      expression: "active"
    }],
    attrs: {
      "id": _vm.tabId,
      "role": "tabpanel",
      "aria-hidden": !_vm.active,
      "aria-labelledby": `step-${_vm.tabId}`
    }
  }, [_vm._t("default", null, {
    "active": _vm.active
  })], 2)]);
};

var TabContentvue_type_template_id_d64872f8_staticRenderFns = [];

// CONCATENATED MODULE: ./components/wizard/components/TabContent.vue?vue&type=template&id=d64872f8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/wizard/components/TabContent.vue?vue&type=script&lang=js&
/* harmony default export */ var TabContentvue_type_script_lang_js_ = ({
  name: 'TabContent',
  inject: ['addTab', 'removeTab'],
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    transition: {
      type: String,
      default: ''
    },

    /***
          * Function to execute before tab switch. Return value must be boolean
          * If the return result is false, tab switch is restricted
          */
    beforeChange: {
      type: Function,
      default: null
    },

    /***
          * Function to execute after tab switch. Return void for now.
          * Safe to assume necessary validation has already occured
          */
    afterChange: {
      type: Function,
      default: null
    },
    route: {
      type: [String, Object],
      default: null
    },
    additionalInfo: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    active: false,
    validationError: null,
    checked: false,
    tabId: ''
  }),
  computed: {
    enterAnimation() {
      if (this.$parent.activeTabIndex <= this.$parent.beforeChangeTabIndex) {
        return "uk-animation-slide-left";
      } else {
        return "uk-animation-slide-right";
      }
    },

    leaveAnimation() {
      if (this.$parent.activeTabIndex > this.$parent.beforeChangeTabIndex) {
        return "uk-animation-slide-left uk-animation-reverse";
      } else {
        return "uk-animation-slide-right uk-animation-reverse";
      }
    }

  },

  mounted() {
    this.addTab(this);
  },

  destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }

    this.removeTab(this);
  }

});
// CONCATENATED MODULE: ./components/wizard/components/TabContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TabContentvue_type_script_lang_js_ = (TabContentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/wizard/components/TabContent.vue





/* normalize component */

var TabContent_component = Object(componentNormalizer["a" /* default */])(
  components_TabContentvue_type_script_lang_js_,
  TabContentvue_type_template_id_d64872f8_render,
  TabContentvue_type_template_id_d64872f8_staticRenderFns,
  false,
  null,
  null,
  "23988a79"
  
)

/* harmony default export */ var TabContent = (TabContent_component.exports);
// CONCATENATED MODULE: ./components/wizard/index.js




const VueFormWizard = {
  install(Vue) {
    Vue.component('FormWizard', FormWizard);
    Vue.component('TabContent', TabContent);
    Vue.component('WizardButton', WizardButton);
    Vue.component('WizardStep', WizardStep);
  }

}; // Automatic installation if Vue has been added to the global scope.

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFormWizard);
}

/* harmony default export */ var wizard = (VueFormWizard);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/forms/wizard.vue?vue&type=script&lang=js&

/* harmony default export */ var wizardvue_type_script_lang_js_ = ({
  name: 'FormsWizard',
  components: {
    FormWizard: FormWizard,
    TabContent: TabContent,
    Step1:  false ? undefined : null,
    Step2:  false ? undefined : null,
    Step3:  false ? undefined : null
  },
  data: () => ({
    finalModel: {
      paymentMethod: {}
    }
  }),
  computed: {},
  methods: {
    validateStep(name) {
      var refToValidate = this.$refs[name];
      return refToValidate.validate();
    },

    mergePartialModels(model, isValid) {
      if (isValid) {
        this.finalModel = Object.assign({}, this.finalModel, model);
      }
    },

    onComplete() {
      alert('Done!');
    }

  }
});
// CONCATENATED MODULE: ./pages/forms/wizard.vue?vue&type=script&lang=js&
 /* harmony default export */ var forms_wizardvue_type_script_lang_js_ = (wizardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/forms/wizard.vue



function wizard_injectStyles (context) {
  
  var style0 = __webpack_require__(596)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var wizard_component = Object(componentNormalizer["a" /* default */])(
  forms_wizardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  wizard_injectStyles,
  null,
  "31b263e6"
  
)

/* harmony default export */ var forms_wizard = __webpack_exports__["default"] = (wizard_component.exports);

/***/ })

};;
//# sourceMappingURL=wizard.js.map