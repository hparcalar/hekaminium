exports.ids = [161];
exports.modules = {

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(769);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3c89001e", content, true, context)
};

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StyleSwitcher_vue_vue_type_style_index_0_id_772c4e9d_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(546);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StyleSwitcher_vue_vue_type_style_index_0_id_772c4e9d_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StyleSwitcher_vue_vue_type_style_index_0_id_772c4e9d_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StyleSwitcher_vue_vue_type_style_index_0_id_772c4e9d_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StyleSwitcher_vue_vue_type_style_index_0_id_772c4e9d_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".pretty *{box-sizing:border-box}.pretty input:not([type=checkbox]):not([type=radio]){display:none}.pretty{position:relative;display:inline-block;margin-right:1em;white-space:nowrap;line-height:1}.pretty input{position:absolute;left:0;top:0;min-width:1em;width:100%;height:100%;z-index:2;opacity:0;margin:0;padding:0;cursor:pointer}.pretty .state label{position:static;display:inline-block;font-weight:400;margin:0;text-indent:1.5em;min-width:calc(1em + 2px)}.pretty .state label:after,.pretty .state label:before{content:\"\";width:calc(1em + 2px);height:calc(1em + 2px);display:block;box-sizing:border-box;border-radius:0;border:1px solid transparent;z-index:0;position:absolute;left:0;top:calc(-108% + 1em);background-color:transparent}.pretty .state label:before{border-color:#bdc3c7}.pretty .state.p-is-hover,.pretty .state.p-is-indeterminate{display:none}@-webkit-keyframes zoom{0%{opacity:0;transform:scale(0)}}@keyframes zoom{0%{opacity:0;transform:scale(0)}}@-webkit-keyframes tada{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;transform:scale(7)}38%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;transform:scale(1)}55%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.5)}72%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}81%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.24)}89%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}95%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.04)}to{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}}@keyframes tada{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;transform:scale(7)}38%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;transform:scale(1)}55%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.5)}72%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}81%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.24)}89%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}95%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.04)}to{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}}@-webkit-keyframes jelly{0%{transform:scaleX(1)}30%{transform:scale3d(.75,1.25,1)}40%{transform:scale3d(1.25,.75,1)}50%{transform:scale3d(.85,1.15,1)}65%{transform:scale3d(1.05,.95,1)}75%{transform:scale3d(.95,1.05,1)}to{transform:scaleX(1)}}@keyframes jelly{0%{transform:scaleX(1)}30%{transform:scale3d(.75,1.25,1)}40%{transform:scale3d(1.25,.75,1)}50%{transform:scale3d(.85,1.15,1)}65%{transform:scale3d(1.05,.95,1)}75%{transform:scale3d(.95,1.05,1)}to{transform:scaleX(1)}}@-webkit-keyframes rotate{0%{opacity:0;transform:translateZ(-200px) rotate(-45deg)}to{opacity:1;transform:translateZ(0) rotate(0)}}@keyframes rotate{0%{opacity:0;transform:translateZ(-200px) rotate(-45deg)}to{opacity:1;transform:translateZ(0) rotate(0)}}@-webkit-keyframes pulse{0%{box-shadow:0 0 0 0 #bdc3c7}to{box-shadow:0 0 0 1.5em rgba(189,195,199,0)}}@keyframes pulse{0%{box-shadow:0 0 0 0 #bdc3c7}to{box-shadow:0 0 0 1.5em rgba(189,195,199,0)}}.pretty.p-default.p-fill .state label:after{transform:scale(1)}.pretty.p-default .state label:after{transform:scale(.6)}.pretty.p-default input:checked~.state label:after{background-color:#bdc3c7!important}.pretty.p-default.p-thick .state label:after,.pretty.p-default.p-thick .state label:before{border-width:.14286em}.pretty.p-default.p-thick .state label:after{transform:scale(.4)!important}.pretty.p-icon .state .icon{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc(-108% + 1em);border:1px solid transparent;opacity:0}.pretty.p-icon .state .icon:before{margin:0;width:100%;height:100%;text-align:center;display:flex;flex:1;justify-content:center;align-items:center;line-height:1}.pretty.p-icon input:checked~.state .icon{opacity:1}.pretty.p-icon input:checked~.state label:before{border-color:#5a656b}.pretty.p-svg .state .svg{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc(-108% + 1em);border:1px solid transparent;opacity:0}.pretty.p-svg .state svg{margin:0;width:100%;height:100%;text-align:center;display:flex;flex:1;justify-content:center;align-items:center;line-height:1}.pretty.p-svg input:checked~.state .svg{opacity:1}.pretty.p-image .state img{opacity:0;position:absolute;width:calc(1em + 2px);height:calc(1em + 2px);top:0;top:calc(-108% + 1em);left:0;z-index:0;text-align:center;line-height:normal;transform:scale(.8)}.pretty.p-image input:checked~.state img{opacity:1}.pretty.p-switch input{min-width:2em}.pretty.p-switch .state{position:relative}.pretty.p-switch .state:before{content:\"\";border:1px solid #bdc3c7;border-radius:60px;width:2em;box-sizing:unset;height:calc(1em + 2px);position:absolute;top:0;top:calc(-116% + 1em);z-index:0;transition:all .5s ease}.pretty.p-switch .state label{text-indent:2.5em}.pretty.p-switch .state label:after,.pretty.p-switch .state label:before{transition:all .5s ease;border-radius:100%;left:0;border-color:transparent;transform:scale(.8)}.pretty.p-switch .state label:after{background-color:#bdc3c7!important}.pretty.p-switch input:checked~.state:before{border-color:#5a656b}.pretty.p-switch input:checked~.state label:before{opacity:0}.pretty.p-switch input:checked~.state label:after{background-color:#5a656b!important;left:1em}.pretty.p-switch.p-fill input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}.pretty.p-switch.p-fill input:checked~.state label:before{opacity:0}.pretty.p-switch.p-fill input:checked~.state label:after{background-color:#fff!important;left:1em}.pretty.p-switch.p-slim .state:before{height:.1em;background:#bdc3c7!important;top:calc(50% - .1em)}.pretty.p-switch.p-slim input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}.pretty.p-has-hover input:hover~.state:not(.p-is-hover){display:none}.pretty.p-has-hover input:hover~.state.p-is-hover,.pretty.p-has-hover input:hover~.state.p-is-hover .icon{display:block}.pretty.p-has-focus input:focus~.state label:before{box-shadow:0 0 3px 0 #bdc3c7}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state:not(.p-is-indeterminate){display:none}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate{display:block}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate .icon{display:block;opacity:1}.pretty.p-toggle .state.p-on{opacity:0;display:none}.pretty.p-toggle .state .icon,.pretty.p-toggle .state.p-off,.pretty.p-toggle .state .svg,.pretty.p-toggle .state img{opacity:1;display:inherit}.pretty.p-toggle .state.p-off .icon{color:#bdc3c7}.pretty.p-toggle input:checked~.state.p-on{opacity:1;display:inherit}.pretty.p-toggle input:checked~.state.p-off{opacity:0;display:none}.pretty.p-plain.p-toggle .state label:before,.pretty.p-plain input:checked~.state label:before{content:none}.pretty.p-plain.p-plain .icon{transform:scale(1.1)}.pretty.p-round .state label:after,.pretty.p-round .state label:before{border-radius:100%}.pretty.p-round.p-icon .state .icon{border-radius:100%;overflow:hidden}.pretty.p-round.p-icon .state .icon:before{transform:scale(.8)}.pretty.p-curve .state label:after,.pretty.p-curve .state label:before{border-radius:20%}.pretty.p-smooth .icon,.pretty.p-smooth .svg,.pretty.p-smooth label:after,.pretty.p-smooth label:before{transition:all .5s ease}.pretty.p-smooth input:checked+.state label:after{transition:all .3s ease}.pretty.p-smooth.p-default input:checked+.state label:after,.pretty.p-smooth input:checked+.state .icon,.pretty.p-smooth input:checked+.state .svg,.pretty.p-smooth input:checked+.state img{-webkit-animation:zoom .2s ease;animation:zoom .2s ease}.pretty.p-smooth.p-plain input:checked+.state label:before{content:\"\";transform:scale(0);transition:all .5s ease}.pretty.p-tada:not(.p-default) input:checked+.state .icon,.pretty.p-tada:not(.p-default) input:checked+.state .svg,.pretty.p-tada:not(.p-default) input:checked+.state img,.pretty.p-tada:not(.p-default) input:checked+.state label:after,.pretty.p-tada:not(.p-default) input:checked+.state label:before{-webkit-animation:tada .7s cubic-bezier(.25,.46,.45,.94) 1 alternate;animation:tada .7s cubic-bezier(.25,.46,.45,.94) 1 alternate;opacity:1}.pretty.p-jelly:not(.p-default) input:checked+.state .icon,.pretty.p-jelly:not(.p-default) input:checked+.state .svg,.pretty.p-jelly:not(.p-default) input:checked+.state img,.pretty.p-jelly:not(.p-default) input:checked+.state label:after,.pretty.p-jelly:not(.p-default) input:checked+.state label:before{-webkit-animation:jelly .7s cubic-bezier(.25,.46,.45,.94);animation:jelly .7s cubic-bezier(.25,.46,.45,.94);opacity:1}.pretty.p-jelly:not(.p-default) input:checked+.state label:before{border-color:transparent}.pretty.p-rotate:not(.p-default) input:checked~.state .icon,.pretty.p-rotate:not(.p-default) input:checked~.state .svg,.pretty.p-rotate:not(.p-default) input:checked~.state img,.pretty.p-rotate:not(.p-default) input:checked~.state label:after,.pretty.p-rotate:not(.p-default) input:checked~.state label:before{-webkit-animation:rotate .7s cubic-bezier(.25,.46,.45,.94);animation:rotate .7s cubic-bezier(.25,.46,.45,.94);opacity:1}.pretty.p-rotate:not(.p-default) input:checked~.state label:before{border-color:transparent}.pretty.p-pulse:not(.p-switch) input:checked~.state label:before{-webkit-animation:pulse 1s;animation:pulse 1s}.pretty input[disabled]{cursor:not-allowed;display:none}.pretty input[disabled]~*{opacity:.5}.pretty.p-locked input{display:none;cursor:not-allowed}.pretty.p-toggle .state.p-primary label:after,.pretty input:checked~.state.p-primary label:after{background-color:#428bca!important}.pretty.p-toggle .state.p-primary .icon,.pretty.p-toggle .state.p-primary .svg,.pretty input:checked~.state.p-primary .icon,.pretty input:checked~.state.p-primary .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-primary-o label:before,.pretty input:checked~.state.p-primary-o label:before{border-color:#428bca}.pretty.p-toggle .state.p-primary-o label:after,.pretty input:checked~.state.p-primary-o label:after{background-color:transparent}.pretty.p-toggle .state.p-primary-o .icon,.pretty.p-toggle .state.p-primary-o .svg,.pretty.p-toggle .state.p-primary-o svg,.pretty input:checked~.state.p-primary-o .icon,.pretty input:checked~.state.p-primary-o .svg,.pretty input:checked~.state.p-primary-o svg{color:#428bca;stroke:#428bca}.pretty.p-default:not(.p-fill) input:checked~.state.p-primary-o label:after{background-color:#428bca!important}.pretty.p-switch input:checked~.state.p-primary:before{border-color:#428bca}.pretty.p-switch.p-fill input:checked~.state.p-primary:before{background-color:#428bca!important}.pretty.p-switch.p-slim input:checked~.state.p-primary:before{border-color:#245682;background-color:#245682!important}.pretty.p-toggle .state.p-info label:after,.pretty input:checked~.state.p-info label:after{background-color:#5bc0de!important}.pretty.p-toggle .state.p-info .icon,.pretty.p-toggle .state.p-info .svg,.pretty input:checked~.state.p-info .icon,.pretty input:checked~.state.p-info .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-info-o label:before,.pretty input:checked~.state.p-info-o label:before{border-color:#5bc0de}.pretty.p-toggle .state.p-info-o label:after,.pretty input:checked~.state.p-info-o label:after{background-color:transparent}.pretty.p-toggle .state.p-info-o .icon,.pretty.p-toggle .state.p-info-o .svg,.pretty.p-toggle .state.p-info-o svg,.pretty input:checked~.state.p-info-o .icon,.pretty input:checked~.state.p-info-o .svg,.pretty input:checked~.state.p-info-o svg{color:#5bc0de;stroke:#5bc0de}.pretty.p-default:not(.p-fill) input:checked~.state.p-info-o label:after{background-color:#5bc0de!important}.pretty.p-switch input:checked~.state.p-info:before{border-color:#5bc0de}.pretty.p-switch.p-fill input:checked~.state.p-info:before{background-color:#5bc0de!important}.pretty.p-switch.p-slim input:checked~.state.p-info:before{border-color:#2390b0;background-color:#2390b0!important}.pretty.p-toggle .state.p-success label:after,.pretty input:checked~.state.p-success label:after{background-color:#5cb85c!important}.pretty.p-toggle .state.p-success .icon,.pretty.p-toggle .state.p-success .svg,.pretty input:checked~.state.p-success .icon,.pretty input:checked~.state.p-success .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-success-o label:before,.pretty input:checked~.state.p-success-o label:before{border-color:#5cb85c}.pretty.p-toggle .state.p-success-o label:after,.pretty input:checked~.state.p-success-o label:after{background-color:transparent}.pretty.p-toggle .state.p-success-o .icon,.pretty.p-toggle .state.p-success-o .svg,.pretty.p-toggle .state.p-success-o svg,.pretty input:checked~.state.p-success-o .icon,.pretty input:checked~.state.p-success-o .svg,.pretty input:checked~.state.p-success-o svg{color:#5cb85c;stroke:#5cb85c}.pretty.p-default:not(.p-fill) input:checked~.state.p-success-o label:after{background-color:#5cb85c!important}.pretty.p-switch input:checked~.state.p-success:before{border-color:#5cb85c}.pretty.p-switch.p-fill input:checked~.state.p-success:before{background-color:#5cb85c!important}.pretty.p-switch.p-slim input:checked~.state.p-success:before{border-color:#357935;background-color:#357935!important}.pretty.p-toggle .state.p-warning label:after,.pretty input:checked~.state.p-warning label:after{background-color:#f0ad4e!important}.pretty.p-toggle .state.p-warning .icon,.pretty.p-toggle .state.p-warning .svg,.pretty input:checked~.state.p-warning .icon,.pretty input:checked~.state.p-warning .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-warning-o label:before,.pretty input:checked~.state.p-warning-o label:before{border-color:#f0ad4e}.pretty.p-toggle .state.p-warning-o label:after,.pretty input:checked~.state.p-warning-o label:after{background-color:transparent}.pretty.p-toggle .state.p-warning-o .icon,.pretty.p-toggle .state.p-warning-o .svg,.pretty.p-toggle .state.p-warning-o svg,.pretty input:checked~.state.p-warning-o .icon,.pretty input:checked~.state.p-warning-o .svg,.pretty input:checked~.state.p-warning-o svg{color:#f0ad4e;stroke:#f0ad4e}.pretty.p-default:not(.p-fill) input:checked~.state.p-warning-o label:after{background-color:#f0ad4e!important}.pretty.p-switch input:checked~.state.p-warning:before{border-color:#f0ad4e}.pretty.p-switch.p-fill input:checked~.state.p-warning:before{background-color:#f0ad4e!important}.pretty.p-switch.p-slim input:checked~.state.p-warning:before{border-color:#c77c11;background-color:#c77c11!important}.pretty.p-toggle .state.p-danger label:after,.pretty input:checked~.state.p-danger label:after{background-color:#d9534f!important}.pretty.p-toggle .state.p-danger .icon,.pretty.p-toggle .state.p-danger .svg,.pretty input:checked~.state.p-danger .icon,.pretty input:checked~.state.p-danger .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-danger-o label:before,.pretty input:checked~.state.p-danger-o label:before{border-color:#d9534f}.pretty.p-toggle .state.p-danger-o label:after,.pretty input:checked~.state.p-danger-o label:after{background-color:transparent}.pretty.p-toggle .state.p-danger-o .icon,.pretty.p-toggle .state.p-danger-o .svg,.pretty.p-toggle .state.p-danger-o svg,.pretty input:checked~.state.p-danger-o .icon,.pretty input:checked~.state.p-danger-o .svg,.pretty input:checked~.state.p-danger-o svg{color:#d9534f;stroke:#d9534f}.pretty.p-default:not(.p-fill) input:checked~.state.p-danger-o label:after{background-color:#d9534f!important}.pretty.p-switch input:checked~.state.p-danger:before{border-color:#d9534f}.pretty.p-switch.p-fill input:checked~.state.p-danger:before{background-color:#d9534f!important}.pretty.p-switch.p-slim input:checked~.state.p-danger:before{border-color:#a02622;background-color:#a02622!important}.pretty.p-bigger .icon,.pretty.p-bigger .img,.pretty.p-bigger .svg,.pretty.p-bigger label:after,.pretty.p-bigger label:before{font-size:1.2em!important;top:calc(-135% + 1em)!important}.pretty.p-bigger label{text-indent:1.7em}@media print{.pretty .state .icon,.pretty .state:before,.pretty .state label:after,.pretty .state label:before{color-adjust:exact;-webkit-print-color-adjust:exact;print-color-adjust:exact}}#sc-style-switcher{position:fixed;top:20%;right:0;width:220px;transform:translateX(272px);transition:all .28s cubic-bezier(.55,0,.1,1);background:#fff;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:0 0 0 4px;padding:24px;z-index:1200}#sc-style-switcher:before{content:\"\";position:absolute;top:0;left:0;width:20px;height:2.5rem;background:#fff;z-index:20}@media (max-width:959px){#sc-style-switcher{width:180px;transform:translateX(232px)}}#sc-style-switcher.active{transform:translateX(0)}#sc-style-switcher .sc-sSw-toggle{color:#00838f;font-size:24px;font-size:1.5rem;position:absolute;left:-3rem;top:0;width:3rem;height:2.5rem;border-radius:.25rem 0 0 .25rem;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);background:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center}#sc-style-switcher .sc-sSw-toggle .mdi{height:2.25rem}#sc-style-switcher .sc-sSw-theme-switcher{margin-top:-16px!important}#sc-style-switcher .sc-sSw-theme-switcher,#sc-style-switcher .sc-sSw-theme-switcher li{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;justify-content:space-between}#sc-style-switcher .sc-sSw-theme-switcher li{margin-top:16px;opacity:.4;transition:opacity .14s ease;position:relative}#sc-style-switcher .sc-sSw-theme-switcher li:after{content:\"\";position:absolute;top:0;left:50%;margin-left:-12px;display:block;font-family:\"Material Design Icons\";font-size:24px;font-size:1.5rem;color:#fff;line-height:1}#sc-style-switcher .sc-sSw-theme-switcher li a{display:flex;width:64px;height:1.5rem}@media (max-width:959px){#sc-style-switcher .sc-sSw-theme-switcher li a{width:48px}}#sc-style-switcher .sc-sSw-theme-switcher li a span{width:50%}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-default span:first-child{background:#00acc1}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-default span:last-child{background:#e53935}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-a span:first-child{background:#1e88e5}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-a span:last-child{background:#43a047}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-b span:first-child{background:#3949ab}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-b span:last-child{background:#d81b60}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-c span:first-child{background:#757575}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-c span:last-child{background:#039be5}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-d span:first-child{background:#8e24aa}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-d span:last-child{background:#43a047}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-e span:first-child{background:#e53935}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-e span:last-child{background:#3949ab}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-f span:first-child{background:#546e7a}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-f span:last-child{background:#f4511e}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-g span:first-child{background:#5e35b1}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-g span:last-child,#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-h span:first-child{background:#6d4c41}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-h span:last-child{background:#00acc1}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-dark span:first-child{background:#006064}#sc-style-switcher .sc-sSw-theme-switcher li a.sc-sW-theme-dark span:last-child{background:#424242}#sc-style-switcher .sc-sSw-theme-switcher li.active,#sc-style-switcher .sc-sSw-theme-switcher li:hover{opacity:1}#sc-style-switcher .sc-sSw-theme-switcher li.active:after{content:\"\\f12c\"}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 929:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/StyleSwitcher.vue?vue&type=template&id=772c4e9d&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    class: {
      'active': _vm.sSwitchActive
    },
    attrs: {
      "id": "sc-style-switcher"
    }
  }, [_vm._ssrNode("<a id=\"sc-style-switcher-toggle\" href=\"javascript:void(0)\" class=\"sc-sSw-toggle\"><i class=\"mdi mdi-tune\"></i></a> <p class=\"sc-text-semibold uk-margin-top-remove uk-margin-medium-bottom\">\n\t\t\tThemes\n\t\t</p> <ul class=\"sc-sSw-theme-switcher\">" + _vm._ssrList(_vm.themes, function (theme) {
    return "<li" + _vm._ssrClass(null, {
      'active': _vm.vxAppTheme === theme
    }) + "><a href=\"javascript:void(0)\"" + _vm._ssrClass("sc-sSw-theme-switch", ['sc-sW-' + theme]) + "><span class=\"sc-sSw-theme-switch-color-1\"></span> <span class=\"sc-sSw-theme-switch-color-2\"></span></a></li>";
  }) + "</ul> <hr> <p class=\"sc-text-semibold uk-margin-medium-bottom\">\n\t\t\tMain Menu\n\t\t</p> "), _vm._ssrNode("<div class=\"uk-flex uk-flex-middle uk-margin-small-bottom\">", "</div>", [_c('PrettyCheck', {
    staticClass: "p-icon",
    on: {
      "change": _vm.scrollToActiveToggle
    },
    model: {
      value: _vm.scrollToActive,
      callback: function ($$v) {
        _vm.scrollToActive = $$v;
      },
      expression: "scrollToActive"
    }
  }, [_c('i', {
    staticClass: "icon mdi mdi-check",
    attrs: {
      "slot": "extra"
    },
    slot: "extra"
  }), _vm._v("\n\t\t\t\tScroll to active\n\t\t\t")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-flex uk-flex-middle\">", "</div>", [_c('PrettyCheck', {
    staticClass: "p-icon",
    on: {
      "change": _vm.accordionModeToggle
    },
    model: {
      value: _vm.accordionMode,
      callback: function ($$v) {
        _vm.accordionMode = $$v;
      },
      expression: "accordionMode"
    }
  }, [_c('i', {
    staticClass: "icon mdi mdi-check",
    attrs: {
      "slot": "extra"
    },
    slot: "extra"
  }), _vm._v("\n\t\t\t\tAccordion mode\n\t\t\t")])], 1), _vm._ssrNode(" <hr> "), _vm._ssrNode("<div class=\"uk-visible@l\">", "</div>", [_vm._ssrNode("<p class=\"sc-text-semibold uk-margin-medium-bottom\">\n\t\t\t\tLayout\n\t\t\t</p> "), _vm._ssrNode("<div class=\"uk-flex uk-flex-middle\">", "</div>", [_c('PrettyCheck', {
    staticClass: "p-icon",
    on: {
      "change": _vm.boxedLayoutToggle
    },
    model: {
      value: _vm.boxedLayout,
      callback: function ($$v) {
        _vm.boxedLayout = $$v;
      },
      expression: "boxedLayout"
    }
  }, [_c('i', {
    staticClass: "icon mdi mdi-check",
    attrs: {
      "slot": "extra"
    },
    slot: "extra"
  }), _vm._v("\n\t\t\t\t\tBoxed\n\t\t\t\t")])], 1)], 2)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/StyleSwitcher.vue?vue&type=template&id=772c4e9d&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "pretty-checkbox-vue/check"
var check_ = __webpack_require__(103);
var check_default = /*#__PURE__*/__webpack_require__.n(check_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/StyleSwitcher.vue?vue&type=script&lang=js&


/* harmony default export */ var StyleSwitchervue_type_script_lang_js_ = ({
  name: 'ScStyleSwitcher',
  components: {
    PrettyCheck: check_default.a
  },
  data: () => ({
    sSwitchActive: false,
    themes: ['theme-default', 'theme-a', 'theme-b', 'theme-c', 'theme-d', 'theme-e', 'theme-f', 'theme-g', 'theme-h', 'theme-dark'],
    scrollToActive: false,
    accordionMode: false,
    boxedLayout: false
  }),
  computed: { ...Object(external_vuex_["mapState"])(['vxAppTheme', 'vxSidebarMainAccordionMode', 'vxSidebarMainScrollToActive', 'vxLayoutBoxedActive'])
  },
  watch: {
    'vxSidebarMainScrollToActive'(state) {
      this.scrollToActive = state;
    },

    'vxSidebarMainAccordionMode'(state) {
      this.accordionMode = state;
    },

    'vxLayoutBoxedActive': {
      immediate: true,

      handler(state) {
        this.boxedLayout = state;
      }

    },

    $route() {
      if (this.sSwitchActive) {
        this.sSwitchActive = false;
      }
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.accordionMode = this.vxSidebarMainAccordionMode;
      this.scrollToActive = this.vxSidebarMainScrollToActive;
    });
  },

  methods: {
    changeTheme(theme) {
      this.$store.commit('setAppTheme', theme);
    },

    scrollToActiveToggle(state) {
      this.$store.commit('sidebarMainScrollToActiveToggle', state);
    },

    accordionModeToggle(state) {
      this.$store.commit('sidebarMainAccordionModeToggle', state);
    },

    boxedLayoutToggle(state) {
      this.$store.commit('toggleLayoutBoxed', state);
    }

  }
});
// CONCATENATED MODULE: ./components/StyleSwitcher.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_StyleSwitchervue_type_script_lang_js_ = (StyleSwitchervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/StyleSwitcher.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(768)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_StyleSwitchervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "bade109c"
  
)

/* harmony default export */ var StyleSwitcher = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=161.js.map