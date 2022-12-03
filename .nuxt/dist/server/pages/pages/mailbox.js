exports.ids = [104];
exports.modules = {

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(622);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6c0a6115", content, true, context)
};

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mailbox_vue_vue_type_style_index_0_id_333cbd3c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(484);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mailbox_vue_vue_type_style_index_0_id_333cbd3c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mailbox_vue_vue_type_style_index_0_id_333cbd3c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mailbox_vue_vue_type_style_index_0_id_333cbd3c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_mailbox_vue_vue_type_style_index_0_id_333cbd3c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".pretty *{box-sizing:border-box}.pretty input:not([type=checkbox]):not([type=radio]){display:none}.pretty{position:relative;display:inline-block;margin-right:1em;white-space:nowrap;line-height:1}.pretty input{position:absolute;left:0;top:0;min-width:1em;width:100%;height:100%;z-index:2;opacity:0;margin:0;padding:0;cursor:pointer}.pretty .state label{position:static;display:inline-block;font-weight:400;margin:0;text-indent:1.5em;min-width:calc(1em + 2px)}.pretty .state label:after,.pretty .state label:before{content:\"\";width:calc(1em + 2px);height:calc(1em + 2px);display:block;box-sizing:border-box;border-radius:0;border:1px solid transparent;z-index:0;position:absolute;left:0;top:calc(-108% + 1em);background-color:transparent}.pretty .state label:before{border-color:#bdc3c7}.pretty .state.p-is-hover,.pretty .state.p-is-indeterminate{display:none}@-webkit-keyframes zoom{0%{opacity:0;transform:scale(0)}}@keyframes zoom{0%{opacity:0;transform:scale(0)}}@-webkit-keyframes tada{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;transform:scale(7)}38%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;transform:scale(1)}55%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.5)}72%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}81%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.24)}89%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}95%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.04)}to{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}}@keyframes tada{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;transform:scale(7)}38%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;transform:scale(1)}55%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.5)}72%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}81%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.24)}89%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}95%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.04)}to{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}}@-webkit-keyframes jelly{0%{transform:scaleX(1)}30%{transform:scale3d(.75,1.25,1)}40%{transform:scale3d(1.25,.75,1)}50%{transform:scale3d(.85,1.15,1)}65%{transform:scale3d(1.05,.95,1)}75%{transform:scale3d(.95,1.05,1)}to{transform:scaleX(1)}}@keyframes jelly{0%{transform:scaleX(1)}30%{transform:scale3d(.75,1.25,1)}40%{transform:scale3d(1.25,.75,1)}50%{transform:scale3d(.85,1.15,1)}65%{transform:scale3d(1.05,.95,1)}75%{transform:scale3d(.95,1.05,1)}to{transform:scaleX(1)}}@-webkit-keyframes rotate{0%{opacity:0;transform:translateZ(-200px) rotate(-45deg)}to{opacity:1;transform:translateZ(0) rotate(0)}}@keyframes rotate{0%{opacity:0;transform:translateZ(-200px) rotate(-45deg)}to{opacity:1;transform:translateZ(0) rotate(0)}}@-webkit-keyframes pulse{0%{box-shadow:0 0 0 0 #bdc3c7}to{box-shadow:0 0 0 1.5em rgba(189,195,199,0)}}@keyframes pulse{0%{box-shadow:0 0 0 0 #bdc3c7}to{box-shadow:0 0 0 1.5em rgba(189,195,199,0)}}.pretty.p-default.p-fill .state label:after{transform:scale(1)}.pretty.p-default .state label:after{transform:scale(.6)}.pretty.p-default input:checked~.state label:after{background-color:#bdc3c7!important}.pretty.p-default.p-thick .state label:after,.pretty.p-default.p-thick .state label:before{border-width:.14286em}.pretty.p-default.p-thick .state label:after{transform:scale(.4)!important}.pretty.p-icon .state .icon{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc(-108% + 1em);border:1px solid transparent;opacity:0}.pretty.p-icon .state .icon:before{margin:0;width:100%;height:100%;text-align:center;display:flex;flex:1;justify-content:center;align-items:center;line-height:1}.pretty.p-icon input:checked~.state .icon{opacity:1}.pretty.p-icon input:checked~.state label:before{border-color:#5a656b}.pretty.p-svg .state .svg{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc(-108% + 1em);border:1px solid transparent;opacity:0}.pretty.p-svg .state svg{margin:0;width:100%;height:100%;text-align:center;display:flex;flex:1;justify-content:center;align-items:center;line-height:1}.pretty.p-svg input:checked~.state .svg{opacity:1}.pretty.p-image .state img{opacity:0;position:absolute;width:calc(1em + 2px);height:calc(1em + 2px);top:0;top:calc(-108% + 1em);left:0;z-index:0;text-align:center;line-height:normal;transform:scale(.8)}.pretty.p-image input:checked~.state img{opacity:1}.pretty.p-switch input{min-width:2em}.pretty.p-switch .state{position:relative}.pretty.p-switch .state:before{content:\"\";border:1px solid #bdc3c7;border-radius:60px;width:2em;box-sizing:unset;height:calc(1em + 2px);position:absolute;top:0;top:calc(-116% + 1em);z-index:0;transition:all .5s ease}.pretty.p-switch .state label{text-indent:2.5em}.pretty.p-switch .state label:after,.pretty.p-switch .state label:before{transition:all .5s ease;border-radius:100%;left:0;border-color:transparent;transform:scale(.8)}.pretty.p-switch .state label:after{background-color:#bdc3c7!important}.pretty.p-switch input:checked~.state:before{border-color:#5a656b}.pretty.p-switch input:checked~.state label:before{opacity:0}.pretty.p-switch input:checked~.state label:after{background-color:#5a656b!important;left:1em}.pretty.p-switch.p-fill input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}.pretty.p-switch.p-fill input:checked~.state label:before{opacity:0}.pretty.p-switch.p-fill input:checked~.state label:after{background-color:#fff!important;left:1em}.pretty.p-switch.p-slim .state:before{height:.1em;background:#bdc3c7!important;top:calc(50% - .1em)}.pretty.p-switch.p-slim input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}.pretty.p-has-hover input:hover~.state:not(.p-is-hover){display:none}.pretty.p-has-hover input:hover~.state.p-is-hover,.pretty.p-has-hover input:hover~.state.p-is-hover .icon{display:block}.pretty.p-has-focus input:focus~.state label:before{box-shadow:0 0 3px 0 #bdc3c7}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state:not(.p-is-indeterminate){display:none}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate{display:block}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate .icon{display:block;opacity:1}.pretty.p-toggle .state.p-on{opacity:0;display:none}.pretty.p-toggle .state .icon,.pretty.p-toggle .state.p-off,.pretty.p-toggle .state .svg,.pretty.p-toggle .state img{opacity:1;display:inherit}.pretty.p-toggle .state.p-off .icon{color:#bdc3c7}.pretty.p-toggle input:checked~.state.p-on{opacity:1;display:inherit}.pretty.p-toggle input:checked~.state.p-off{opacity:0;display:none}.pretty.p-plain.p-toggle .state label:before,.pretty.p-plain input:checked~.state label:before{content:none}.pretty.p-plain.p-plain .icon{transform:scale(1.1)}.pretty.p-round .state label:after,.pretty.p-round .state label:before{border-radius:100%}.pretty.p-round.p-icon .state .icon{border-radius:100%;overflow:hidden}.pretty.p-round.p-icon .state .icon:before{transform:scale(.8)}.pretty.p-curve .state label:after,.pretty.p-curve .state label:before{border-radius:20%}.pretty.p-smooth .icon,.pretty.p-smooth .svg,.pretty.p-smooth label:after,.pretty.p-smooth label:before{transition:all .5s ease}.pretty.p-smooth input:checked+.state label:after{transition:all .3s ease}.pretty.p-smooth.p-default input:checked+.state label:after,.pretty.p-smooth input:checked+.state .icon,.pretty.p-smooth input:checked+.state .svg,.pretty.p-smooth input:checked+.state img{-webkit-animation:zoom .2s ease;animation:zoom .2s ease}.pretty.p-smooth.p-plain input:checked+.state label:before{content:\"\";transform:scale(0);transition:all .5s ease}.pretty.p-tada:not(.p-default) input:checked+.state .icon,.pretty.p-tada:not(.p-default) input:checked+.state .svg,.pretty.p-tada:not(.p-default) input:checked+.state img,.pretty.p-tada:not(.p-default) input:checked+.state label:after,.pretty.p-tada:not(.p-default) input:checked+.state label:before{-webkit-animation:tada .7s cubic-bezier(.25,.46,.45,.94) 1 alternate;animation:tada .7s cubic-bezier(.25,.46,.45,.94) 1 alternate;opacity:1}.pretty.p-jelly:not(.p-default) input:checked+.state .icon,.pretty.p-jelly:not(.p-default) input:checked+.state .svg,.pretty.p-jelly:not(.p-default) input:checked+.state img,.pretty.p-jelly:not(.p-default) input:checked+.state label:after,.pretty.p-jelly:not(.p-default) input:checked+.state label:before{-webkit-animation:jelly .7s cubic-bezier(.25,.46,.45,.94);animation:jelly .7s cubic-bezier(.25,.46,.45,.94);opacity:1}.pretty.p-jelly:not(.p-default) input:checked+.state label:before{border-color:transparent}.pretty.p-rotate:not(.p-default) input:checked~.state .icon,.pretty.p-rotate:not(.p-default) input:checked~.state .svg,.pretty.p-rotate:not(.p-default) input:checked~.state img,.pretty.p-rotate:not(.p-default) input:checked~.state label:after,.pretty.p-rotate:not(.p-default) input:checked~.state label:before{-webkit-animation:rotate .7s cubic-bezier(.25,.46,.45,.94);animation:rotate .7s cubic-bezier(.25,.46,.45,.94);opacity:1}.pretty.p-rotate:not(.p-default) input:checked~.state label:before{border-color:transparent}.pretty.p-pulse:not(.p-switch) input:checked~.state label:before{-webkit-animation:pulse 1s;animation:pulse 1s}.pretty input[disabled]{cursor:not-allowed;display:none}.pretty input[disabled]~*{opacity:.5}.pretty.p-locked input{display:none;cursor:not-allowed}.pretty.p-toggle .state.p-primary label:after,.pretty input:checked~.state.p-primary label:after{background-color:#428bca!important}.pretty.p-toggle .state.p-primary .icon,.pretty.p-toggle .state.p-primary .svg,.pretty input:checked~.state.p-primary .icon,.pretty input:checked~.state.p-primary .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-primary-o label:before,.pretty input:checked~.state.p-primary-o label:before{border-color:#428bca}.pretty.p-toggle .state.p-primary-o label:after,.pretty input:checked~.state.p-primary-o label:after{background-color:transparent}.pretty.p-toggle .state.p-primary-o .icon,.pretty.p-toggle .state.p-primary-o .svg,.pretty.p-toggle .state.p-primary-o svg,.pretty input:checked~.state.p-primary-o .icon,.pretty input:checked~.state.p-primary-o .svg,.pretty input:checked~.state.p-primary-o svg{color:#428bca;stroke:#428bca}.pretty.p-default:not(.p-fill) input:checked~.state.p-primary-o label:after{background-color:#428bca!important}.pretty.p-switch input:checked~.state.p-primary:before{border-color:#428bca}.pretty.p-switch.p-fill input:checked~.state.p-primary:before{background-color:#428bca!important}.pretty.p-switch.p-slim input:checked~.state.p-primary:before{border-color:#245682;background-color:#245682!important}.pretty.p-toggle .state.p-info label:after,.pretty input:checked~.state.p-info label:after{background-color:#5bc0de!important}.pretty.p-toggle .state.p-info .icon,.pretty.p-toggle .state.p-info .svg,.pretty input:checked~.state.p-info .icon,.pretty input:checked~.state.p-info .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-info-o label:before,.pretty input:checked~.state.p-info-o label:before{border-color:#5bc0de}.pretty.p-toggle .state.p-info-o label:after,.pretty input:checked~.state.p-info-o label:after{background-color:transparent}.pretty.p-toggle .state.p-info-o .icon,.pretty.p-toggle .state.p-info-o .svg,.pretty.p-toggle .state.p-info-o svg,.pretty input:checked~.state.p-info-o .icon,.pretty input:checked~.state.p-info-o .svg,.pretty input:checked~.state.p-info-o svg{color:#5bc0de;stroke:#5bc0de}.pretty.p-default:not(.p-fill) input:checked~.state.p-info-o label:after{background-color:#5bc0de!important}.pretty.p-switch input:checked~.state.p-info:before{border-color:#5bc0de}.pretty.p-switch.p-fill input:checked~.state.p-info:before{background-color:#5bc0de!important}.pretty.p-switch.p-slim input:checked~.state.p-info:before{border-color:#2390b0;background-color:#2390b0!important}.pretty.p-toggle .state.p-success label:after,.pretty input:checked~.state.p-success label:after{background-color:#5cb85c!important}.pretty.p-toggle .state.p-success .icon,.pretty.p-toggle .state.p-success .svg,.pretty input:checked~.state.p-success .icon,.pretty input:checked~.state.p-success .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-success-o label:before,.pretty input:checked~.state.p-success-o label:before{border-color:#5cb85c}.pretty.p-toggle .state.p-success-o label:after,.pretty input:checked~.state.p-success-o label:after{background-color:transparent}.pretty.p-toggle .state.p-success-o .icon,.pretty.p-toggle .state.p-success-o .svg,.pretty.p-toggle .state.p-success-o svg,.pretty input:checked~.state.p-success-o .icon,.pretty input:checked~.state.p-success-o .svg,.pretty input:checked~.state.p-success-o svg{color:#5cb85c;stroke:#5cb85c}.pretty.p-default:not(.p-fill) input:checked~.state.p-success-o label:after{background-color:#5cb85c!important}.pretty.p-switch input:checked~.state.p-success:before{border-color:#5cb85c}.pretty.p-switch.p-fill input:checked~.state.p-success:before{background-color:#5cb85c!important}.pretty.p-switch.p-slim input:checked~.state.p-success:before{border-color:#357935;background-color:#357935!important}.pretty.p-toggle .state.p-warning label:after,.pretty input:checked~.state.p-warning label:after{background-color:#f0ad4e!important}.pretty.p-toggle .state.p-warning .icon,.pretty.p-toggle .state.p-warning .svg,.pretty input:checked~.state.p-warning .icon,.pretty input:checked~.state.p-warning .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-warning-o label:before,.pretty input:checked~.state.p-warning-o label:before{border-color:#f0ad4e}.pretty.p-toggle .state.p-warning-o label:after,.pretty input:checked~.state.p-warning-o label:after{background-color:transparent}.pretty.p-toggle .state.p-warning-o .icon,.pretty.p-toggle .state.p-warning-o .svg,.pretty.p-toggle .state.p-warning-o svg,.pretty input:checked~.state.p-warning-o .icon,.pretty input:checked~.state.p-warning-o .svg,.pretty input:checked~.state.p-warning-o svg{color:#f0ad4e;stroke:#f0ad4e}.pretty.p-default:not(.p-fill) input:checked~.state.p-warning-o label:after{background-color:#f0ad4e!important}.pretty.p-switch input:checked~.state.p-warning:before{border-color:#f0ad4e}.pretty.p-switch.p-fill input:checked~.state.p-warning:before{background-color:#f0ad4e!important}.pretty.p-switch.p-slim input:checked~.state.p-warning:before{border-color:#c77c11;background-color:#c77c11!important}.pretty.p-toggle .state.p-danger label:after,.pretty input:checked~.state.p-danger label:after{background-color:#d9534f!important}.pretty.p-toggle .state.p-danger .icon,.pretty.p-toggle .state.p-danger .svg,.pretty input:checked~.state.p-danger .icon,.pretty input:checked~.state.p-danger .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-danger-o label:before,.pretty input:checked~.state.p-danger-o label:before{border-color:#d9534f}.pretty.p-toggle .state.p-danger-o label:after,.pretty input:checked~.state.p-danger-o label:after{background-color:transparent}.pretty.p-toggle .state.p-danger-o .icon,.pretty.p-toggle .state.p-danger-o .svg,.pretty.p-toggle .state.p-danger-o svg,.pretty input:checked~.state.p-danger-o .icon,.pretty input:checked~.state.p-danger-o .svg,.pretty input:checked~.state.p-danger-o svg{color:#d9534f;stroke:#d9534f}.pretty.p-default:not(.p-fill) input:checked~.state.p-danger-o label:after{background-color:#d9534f!important}.pretty.p-switch input:checked~.state.p-danger:before{border-color:#d9534f}.pretty.p-switch.p-fill input:checked~.state.p-danger:before{background-color:#d9534f!important}.pretty.p-switch.p-slim input:checked~.state.p-danger:before{border-color:#a02622;background-color:#a02622!important}.pretty.p-bigger .icon,.pretty.p-bigger .img,.pretty.p-bigger .svg,.pretty.p-bigger label:after,.pretty.p-bigger label:before{font-size:1.2em!important;top:calc(-135% + 1em)!important}.pretty.p-bigger label{text-indent:1.7em}@media print{.pretty .state .icon,.pretty .state:before,.pretty .state label:after,.pretty .state label:before{color-adjust:exact;-webkit-print-color-adjust:exact;print-color-adjust:exact}}body .pretty{margin:0;line-height:normal}body .pretty.p-smooth .icon,body .pretty.p-smooth .svg{transition:all .14s cubic-bezier(.55,0,.1,1)}body .pretty label a{position:relative;z-index:10}body .pretty:not(.p-switch):not(.p-radio),body .pretty:not(.p-switch):not(.p-radio) .state{height:18px}body .pretty:not(.p-switch):not(.p-radio) .state{display:flex;align-items:center}body .pretty:not(.p-switch):not(.p-radio).p-icon .state .icon{border-radius:4px;left:0;top:-1px;width:18px;height:18px}body .pretty:not(.p-switch):not(.p-radio).p-icon .state .icon,body .pretty:not(.p-switch):not(.p-radio).p-icon .state .icon:before{font-size:18px}body .pretty:not(.p-switch):not(.p-radio) .state label{min-width:18px;text-indent:26px;min-height:18px}body .pretty:not(.p-switch):not(.p-radio) .state label:after,body .pretty:not(.p-switch):not(.p-radio) .state label:before{width:18px;height:18px;top:0}body .pretty:not(.p-switch):not(.p-radio) .state label:before{background:transparent;border-radius:50%;transition:all .14s cubic-bezier(.55,0,.1,1)}body .pretty:not(.p-switch):not(.p-radio) .state label:after{background:#fff;border-radius:2px;border:2px solid rgba(0,0,0,.54);transition:all .24s cubic-bezier(.55,0,.1,1)}body .pretty:not(.p-switch):not(.p-radio) input:checked~.state label:after{border-color:#1976d2;background:#1976d2}body .pretty:not(.p-switch):not(.p-radio).p-custom input:checked~.state label:after{background:var(--color);border-color:var(--color)}body .pretty:not(.p-switch):not(.p-radio) input:checked[disabled]~.state label:after{border-color:#757575;background:#757575}body .pretty:not(.p-switch):not(.p-radio) input[disabled]~*{opacity:.6}body .pretty:not(.p-switch):not(.p-radio).p-icon input:checked~.state .icon{color:#fff}body .pretty:not(.p-switch):not(.p-radio) .state.p-is-indeterminate .icon{top:0;color:#fff}body .pretty:not(.p-switch):not(.p-radio) .state.p-is-indeterminate .icon,body .pretty:not(.p-switch):not(.p-radio) .state.p-is-indeterminate .icon:before{font-size:18px}body .pretty:not(.p-switch):not(.p-radio) .state.p-is-indeterminate label:after{border-color:#1976d2;background-color:#1976d2}body .pretty.p-radio,body .pretty.p-radio .state{min-height:20px}body .pretty.p-radio .state{display:flex;align-items:center;position:relative}body .pretty.p-radio .state:before{content:\"\";position:absolute;left:0;top:50%;width:20px;height:20px;border:2px solid rgba(0,0,0,.54);transition:all .24s cubic-bezier(.55,0,.1,1);border-radius:50%;box-sizing:border-box;margin-top:-10px;background:#fff}body .pretty.p-radio .state label{min-width:20px;text-indent:26px}body .pretty.p-radio .state label:before{background:transparent;border-radius:50%;border-color:transparent;transition:all .14s cubic-bezier(.55,0,.1,1);width:18px;height:18px;top:0}body .pretty.p-radio .state label:after{border-radius:50%;transition:all .24s cubic-bezier(.55,0,.1,1);width:10px;height:10px;top:50%;margin-top:-5px;left:5px}body .pretty.p-radio input:checked~.state:before{border-color:#1976d2}body .pretty.p-radio input:checked~.state label:after{background:#1976d2}body .pretty.p-radio input:checked[disabled]~.state:before{border-color:rgba(0,0,0,.54)}body .pretty.p-radio input:checked[disabled]~.state label:after{background:rgba(0,0,0,.54)}body .pretty.p-radio input[disabled]~*{opacity:.6}body .pretty.p-switch .state{height:26px}body .pretty.p-switch .state:before{border-radius:20px;height:14px;width:36px;background-color:rgba(0,0,0,.26);border:none;top:50%;margin-top:-7px;left:2px;transition:all .14s cubic-bezier(.55,0,.1,1)}body .pretty.p-switch .state label{text-indent:48px;line-height:28px;height:28px;min-width:38px}body .pretty.p-switch .state label:after,body .pretty.p-switch .state label:before{width:20px;height:20px;top:3px;box-shadow:0 1px 4px rgba(0,0,0,.55);transition:all .14s cubic-bezier(.55,0,.1,1);border:none;transform:none}body .pretty.p-switch .state label:after{background-color:#fff!important}body .pretty.p-switch input:checked~.state:before{background-color:#92c2f2}body .pretty.p-switch input:checked~.state label:after{left:20px;background-color:#1976d2!important}body .pretty.p-switch input:checked~.state.p-primary:before{background-color:#5cf1ff}body .pretty.p-switch input:checked~.state.p-primary label:after{background-color:#00838f!important}body .pretty.p-switch input:checked~.state.p-danger:before{background-color:#f6bebd}body .pretty.p-switch input:checked~.state.p-danger label:after{background-color:#e53935!important}body .pretty.p-switch input:checked~.state.p-success:before{background-color:#c8e1ad}body .pretty.p-switch input:checked~.state.p-success label:after{background-color:#7cb342!important}body .pretty.p-switch input:checked~.state.p-warning:before{background-color:#ffe199}body .pretty.p-switch input:checked~.state.p-warning label:after{background-color:#ffb300!important}body .pretty.uk-flex{display:flex}.sc-list-messages,.sc-list-messages>li{margin:0;padding:0;list-style:none}.sc-list-messages{border-bottom:1px solid rgba(0,0,0,.08);overflow:hidden}.sc-list-messages>li{background:#fff;min-height:68px;cursor:pointer}.sc-list-messages>li .sc-message-card:not(.sc-message-expanded),.sc-list-messages>li:not(.sc-disable-transition){transition:all .14s ease}.sc-list-messages>li+li{border-top:1px solid rgba(0,0,0,.08)}.sc-list-messages>li.sc-item-checked{background:#fffde7}.sc-list-messages>li:hover{z-index:10;position:relative}.sc-list-messages>li:hover .sc-message-card:not(.sc-message-expanded){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.sc-list-messages>li:hover .sc-message-card:not(.sc-message-expanded) .sc-message-date{display:none}.sc-list-messages>li:hover .sc-message-card:not(.sc-message-expanded) .sc-message-actions{display:flex;align-items:center}.sc-message-card{padding:12px 24px;box-sizing:border-box;display:flex;flex-flow:column;width:100%;overflow-x:hidden}.sc-message-title{font-weight:400;font-size:16px;font-size:1rem;font-family:\"Roboto\",Arial,Helvetica,sans-serif;margin:0;padding-right:24px}.sc-message-date{font-size:14px;font-size:.875rem;color:rgba(0,0,0,.54)}.sc-message-close{font-size:24px;font-size:1.5rem;margin:0 0 0 24px;transition:all .28s cubic-bezier(.55,0,.1,1);color:rgba(0,0,0,.54)}.sc-message-close:hover{color:rgba(0,0,0,.87)}.sc-message-actions{display:none}.sc-message-actions .mdi{height:32px;width:32px;text-align:center;text-decoration:none;color:rgba(0,0,0,.54)}.sc-message-actions .mdi:before{line-height:32px}.sc-message-actions .mdi+.mdi{margin-left:8px}.sc-message-actions .mdi.uk-open:after,.sc-message-actions .mdi:hover:after{transform:scale3d(1.2,1.2,1.2)}.sc-message-expanded{position:absolute;z-index:1300;width:100%;margin-top:-12px}.sc-message-expanded,.sc-message-expanded-single{background:#fff;padding:24px;align-self:flex-start;align-items:normal;cursor:default;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}@media (max-width:959px){.sc-message-expanded-single .sc-message-head,.sc-message-expanded .sc-message-head{flex-direction:column!important;justify-content:left;align-items:flex-start}.sc-message-expanded-single .sc-message-head .uk-text-truncate,.sc-message-expanded .sc-message-head .uk-text-truncate{width:auto;overflow:visible;white-space:normal}.sc-message-expanded-single .sc-message-head .sc-message-title,.sc-message-expanded .sc-message-head .sc-message-title{line-height:1.5}.sc-message-expanded-single .sc-message-head .sc-message-date,.sc-message-expanded .sc-message-head .sc-message-date{padding-top:8px}}.sc-message-expanded-single{height:100%}.sc-message-head{align-self:flex-start;width:100%}.sc-message-content{margin-top:24px;overflow-y:auto;flex:1;-webkit-overflow-scrolling:touch}.sc-message-attachments{list-style:none;margin:-8px 0 0;padding:0;display:flex;flex-wrap:wrap}.sc-message-attachments li{padding:0;margin:8px 8px 0 0;display:inline-flex;list-style-image:url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)}.sc-message-attachments li .sc-attachment{padding:8px 8px 8px 12px;background-color:#f5f5f5;display:flex;position:relative;font-weight:500;font-size:14px;font-size:.875rem;border-radius:4px;align-items:center}.sc-message-attachments li .sc-attachment a{text-decoration:none}.sc-message-attachments li .sc-attachment a span{color:rgba(0,0,0,.54)}.sc-message-attachments li .sc-attachment-remove{font-size:20px;font-size:1.25rem;width:30px;height:30px;text-align:center;margin-left:8px}.sc-message-attachments li .sc-attachment-remove:before{line-height:30px;padding:0}.sc-message-footer{box-sizing:border-box;align-self:flex-end;width:100%;flex-shrink:0}.sc-message-reply{border-radius:3px;box-sizing:border-box;width:100%;padding:12px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);margin-top:24px}.sc-message-unreaded{background:rgba(0,0,0,.04)}.sc-message-unreaded .sc-message-title{font-weight:500}.sc-message-compose{background:#fff;height:100%}.sc-message-compose:not(.sc-message-compose-single){position:absolute;top:0;left:0;display:none;transform-origin:0 36px;z-index:1400;width:100%;transition:all .28s cubic-bezier(.55,0,.1,1);opacity:0}@media (max-width:959px){.sc-message-compose:not(.sc-message-compose-single){transform-origin:88% 88%}}.sc-message-compose>.sc-message-compose-wrapper{box-sizing:border-box;padding:24px;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}.sc-message-compose .sc-message-body{flex:1}.sc-message-compose .sc-message-body .sc-input-wrapper{margin-top:16px;height:100%}.sc-message-compose .sc-message-body .sc-input-wrapper,.sc-message-compose .sc-message-body textarea{height:calc(100% - 22px)}.sc-message-compose .sc-message-body textarea{align-self:flex-start}.sc-message-compose-visible .sc-message-compose{opacity:1;display:flex;transform:scale(0)}.sc-message-compose-expanded .sc-message-compose{transform:scale(1)}.sc-js-expand-message>li{cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/mailbox.vue?vue&type=template&id=333cbd3c&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "uk-flex uk-flex-column",
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-top-bar\" class=\"sc-top-bar\">", "</div>", [_vm._ssrNode("<div class=\"sc-top-bar-aside uk-visible@l\"></div> "), _vm._ssrNode("<div class=\"sc-top-bar-content uk-flex-1\">", "</div>", [_c('PrettyCheck', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.$route.name === 'pages-mailbox',
      expression: "$route.name === 'pages-mailbox'"
    }],
    staticClass: "p-icon",
    attrs: {
      "indeterminate": _vm.mailbox.checkAllInd
    },
    on: {
      "update:indeterminate": function ($event) {
        return _vm.$set(_vm.mailbox, "checkAllInd", $event);
      },
      "change": function ($event) {
        return _vm.toggleAllMessages($event);
      }
    },
    model: {
      value: _vm.mailbox.checkAll,
      callback: function ($$v) {
        _vm.$set(_vm.mailbox, "checkAll", $$v);
      },
      expression: "mailbox.checkAll"
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
  })]), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("sc-actions", {
    'uk-margin-medium-left': _vm.$route.name === 'pages-mailbox'
  }) + _vm._ssrStyle(null, null, {
    display: _vm.$route.name !== 'pages-mailbox-compose' ? '' : 'none'
  }) + ">", "</div>", [_c('a', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.$route.name === 'pages-mailbox-message-id',
      expression: "$route.name === 'pages-mailbox-message-id'"
    }, {
      name: "waves",
      rawName: "v-waves.block",
      modifiers: {
        "block": true
      }
    }],
    staticClass: "sc-actions-icon",
    attrs: {
      "href": "javascript:void(0)",
      "data-uk-tooltip": "",
      "title": "Close message"
    },
    on: {
      "click": function ($event) {
        return _vm.closeMessage($event);
      }
    }
  }, [_vm._ssrNode("<i class=\"mdi mdi-arrow-left\"></i>")]), _vm._ssrNode(" "), _c('a', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.$route.name === 'pages-mailbox',
      expression: "$route.name === 'pages-mailbox'"
    }, {
      name: "waves",
      rawName: "v-waves.block",
      modifiers: {
        "block": true
      }
    }],
    staticClass: "sc-actions-icon",
    attrs: {
      "href": "javascript:void(0)",
      "data-uk-tooltip": "",
      "title": "Reply"
    }
  }, [_vm._ssrNode("<i class=\"mdi mdi-reply\"></i>")]), _vm._ssrNode(" "), _c('a', {
    directives: [{
      name: "waves",
      rawName: "v-waves.block",
      modifiers: {
        "block": true
      }
    }],
    staticClass: "sc-actions-icon",
    attrs: {
      "href": "javascript:void(0)",
      "data-uk-tooltip": "",
      "title": "Archive"
    }
  }, [_vm._ssrNode("<i class=\"mdi mdi-archive\"></i>")]), _vm._ssrNode(" "), _c('a', {
    directives: [{
      name: "waves",
      rawName: "v-waves.block",
      modifiers: {
        "block": true
      }
    }],
    staticClass: "sc-actions-icon sc-js-block-wave",
    attrs: {
      "href": "javascript:void(0)",
      "data-uk-tooltip": "",
      "title": "Delete"
    }
  }, [_vm._ssrNode("<i class=\"mdi mdi-delete-outline\"></i>")])], 2)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"sc-page-wrapper-inner\" class=\"uk-flex\">", "</div>", [_vm._ssrNode("<div id=\"sc-page-aside\" class=\"uk-visible@m\"><div class=\"sc-page-aside-body\"><button class=\"sc-button sc-button-block sc-button-danger\"" + _vm._ssrStyle(null, null, {
    display: _vm.$route.name !== 'pages-mailbox-compose' ? '' : 'none'
  }) + ">\n\t\t\t\t\t\tCompose\n\t\t\t\t\t</button> <ul data-uk-accordion=\"multiple: true\" class=\"uk-margin-top uk-accordion\"" + _vm._ssrStyle(null, null, {
    display: _vm.$route.name === 'pages-mailbox' ? '' : 'none'
  }) + "><li class=\"uk-open\"><a href=\"javascript:void(0)\" class=\"uk-accordion-title\">\n\t\t\t\t\t\t\t\tFolders\n\t\t\t\t\t\t\t</a> <div class=\"uk-accordion-content\"><ul class=\"uk-list\"><li><a href=\"javascript:void(0)\"><i class=\"mdi mdi-inbox uk-margin-small-right\"></i>Inbox (24)\n\t\t\t\t\t\t\t\t\t\t</a></li> <li><a href=\"javascript:void(0)\"><i class=\"mdi mdi-inbox-arrow-up uk-margin-small-right\"></i>Sent\n\t\t\t\t\t\t\t\t\t\t</a></li> <li><a href=\"javascript:void(0)\"><i class=\"mdi mdi-block-helper uk-margin-small-right sc-icon-22\"></i>Spam\n\t\t\t\t\t\t\t\t\t\t</a></li> <li><a href=\"javascript:void(0)\"><i class=\"mdi mdi-delete uk-margin-small-right\"></i>Trash\n\t\t\t\t\t\t\t\t\t\t</a></li></ul></div></li> <li class=\"uk-open\"><a href=\"javascript:void(0)\" class=\"uk-accordion-title\">\n\t\t\t\t\t\t\t\tTags\n\t\t\t\t\t\t\t</a> <div class=\"uk-accordion-content\"><ul class=\"uk-list\"><li data-uk-filter-control class=\"sc-js-filter-clear\"><a href=\"javascript:void(0)\"><span class=\"sc-color-label md-bg-white sc-color-label-clear\"></span>All Folders\n\t\t\t\t\t\t\t\t\t\t</a></li> " + _vm._ssrList(_vm.tags, function (tag) {
    return "<li" + _vm._ssrAttr("data-uk-filter-control", 'filter: .' + _vm.tagName(tag.name)) + "><a href=\"javascript:void(0)\"><span" + _vm._ssrClass("sc-color-label", [tag.color]) + "></span>" + _vm._ssrEscape("\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(tag.name) + "\n\t\t\t\t\t\t\t\t\t\t") + "</a></li>";
  }) + "</ul></div></li></ul></div></div> "), _vm._ssrNode("<div id=\"sc-page-content\" class=\"sc-padding-remove uk-height-1-1\">", "</div>", [_c('nuxt-child', {
    key: _vm.$route.path
  }), _vm._ssrNode(" <ul hidden=\"hidden\" class=\"sc-js-message-filter\"></ul>")], 2)], 2), _vm._ssrNode(" "), _c('client-only', [_c('ScOffcanvas', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.$route.name === 'pages-mailbox',
      expression: "$route.name === 'pages-mailbox'"
    }],
    key: _vm.mailboxOffcanvas
  }, [_c('p', {
    staticClass: "uk-text-large uk-margin-small"
  }, [_vm._v("\n\t\t\t\t\tFolders\n\t\t\t\t")]), _vm._v(" "), _c('ul', {
    staticClass: "uk-list uk-margin-remove sc-list-align"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "mdi mdi-inbox uk-margin-small-right"
  }), _vm._v("Inbox (24)")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "mdi mdi-inbox-arrow-up uk-margin-small-right"
  }), _vm._v("Sent")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "mdi mdi-block-helper uk-margin-small-right sc-icon-22"
  }), _vm._v("Spam")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "mdi mdi-delete uk-margin-small-right"
  }), _vm._v("Trash")])])])])], 1), _vm._ssrNode(" <div class=\"sc-fab-page-wrapper uk-hidden@l\"" + _vm._ssrStyle(null, null, {
    display: _vm.$route.name === 'pages-mailbox' ? '' : 'none'
  }) + "><a href=\"javascript:void(0)\" class=\"sc-fab sc-fab-large sc-fab-danger\"><i class=\"mdi mdi-plus\"></i></a></div>")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/pages/mailbox.vue?vue&type=template&id=333cbd3c&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "pretty-checkbox-vue/check"
var check_ = __webpack_require__(103);
var check_default = /*#__PURE__*/__webpack_require__.n(check_);

// EXTERNAL MODULE: ./assets/js/utils.js + 5 modules
var utils = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/mailbox.vue?vue&type=script&lang=js&



const {
  closest
} = utils["b" /* scDom */];
/* harmony default export */ var mailboxvue_type_script_lang_js_ = ({
  name: 'PagesMailbox',
  components: {
    PrettyCheck: check_default.a,
    ScOffcanvas:  false ? undefined : null
  },
  data: () => ({
    mailbox: {
      checkAll: false,
      checkAllInd: false
    },
    messageSelected: {},
    showItems: false,
    mailboxOffcanvas: true
  }),
  computed: { ...Object(external_vuex_["mapGetters"])({
      tags: 'mailbox/tags',
      messages: 'mailbox/messages',
      msgIDs: 'mailbox/messageIDs'
    })
  },

  mounted() {
    // set fixed page
    this.$store.commit('setPageFixed', true);
  },

  beforeDestroy() {
    // unset fixed page
    this.$store.commit('setPageFixed', false);
  },

  methods: {
    showMessage(e, message) {
      var excludedEl = closest(e.target, function (el) {
        return el.className ? el.className.includes('pretty') || el.className.includes('sc-message-actions') : null;
      });

      if (!excludedEl) {
        this.$router.push({
          name: 'pages-mailbox-message-id',
          params: {
            id: message.id
          }
        });
        this.$store.commit('mailbox/markAsRead', message);
      }
    },

    closeMessage(e) {
      e.preventDefault();
      this.$router.push({
        name: 'pages-mailbox'
      });
    },

    composeMessage() {
      this.$router.push({
        name: 'pages-mailbox-compose'
      });
    },

    toggleAllMessages(state) {
      this.$store.commit('mailbox/toggleMessages', state);
      this.messages.forEach(k => {
        this.messageSelected[k.id] = state;
      });
    },

    toggleMessage(value, message) {
      let params = {
        id: message.id,
        value: value
      };
      this.$store.commit('mailbox/toggleMessage', params);
      let checkboxes = this.messages.map(k => {
        return k.selected;
      });
      let someChecked = checkboxes.some(cb => cb === true);
      let allChecked = checkboxes.every(cb => cb === true);

      if (allChecked) {
        this.mailbox.checkAll = true;
        this.mailbox.checkAllInd = false;
      } else if (someChecked) {
        this.mailbox.checkAllInd = true;
      } else {
        this.mailbox.checkAll = false;
        this.mailbox.checkAllInd = false;
      }
    },

    messageTagColor(tag) {
      let _tag = this.tags.filter(obj => {
        return obj.name === tag;
      });

      return _tag[0].color;
    },

    tagName(name) {
      if (!name) {
        return;
      } // lowercase + remove whitespaces


      return 'sc-js-tag-' + name.toLowerCase().replace(/ /g, '');
    }

  }
});
// CONCATENATED MODULE: ./pages/pages/mailbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_mailboxvue_type_script_lang_js_ = (mailboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/pages/mailbox.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(621)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_mailboxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7ddd1415"
  
)

/* harmony default export */ var mailbox = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=mailbox.js.map