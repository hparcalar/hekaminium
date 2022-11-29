exports.ids = [130];
exports.modules = {

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(678);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("f8261430", content, true, context)
};

/***/ }),

/***/ 673:
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Books\",\"expanded\":true,\"folder\":true,\"children\":[{\"title\":\"Art of War\",\"type\":\"book\",\"author\":\"Sun Tzu\",\"year\":-500,\"qty\":21,\"price\":5.95},{\"title\":\"The Hobbit\",\"type\":\"book\",\"author\":\"J.R.R. Tolkien\",\"year\":1937,\"qty\":32,\"price\":8.97},{\"title\":\"The Little Prince\",\"type\":\"book\",\"author\":\"Antoine de Saint-Exupery\",\"year\":1943,\"qty\":2946,\"price\":6.82},{\"title\":\"Don Quixote\",\"type\":\"book\",\"author\":\"Miguel de Cervantes\",\"year\":1615,\"qty\":932,\"price\":15.99}]},{\"title\":\"Music\",\"folder\":true,\"children\":[{\"title\":\"Nevermind\",\"type\":\"music\",\"author\":\"Nirvana\",\"year\":1991,\"qty\":916,\"price\":15.95},{\"title\":\"Autobahn\",\"type\":\"music\",\"author\":\"Kraftwerk\",\"year\":1974,\"qty\":2261,\"price\":23.98},{\"title\":\"Kind of Blue\",\"type\":\"music\",\"author\":\"Miles Davis\",\"year\":1959,\"qty\":9735,\"price\":21.9},{\"title\":\"Back in Black\",\"type\":\"music\",\"author\":\"AC/DC\",\"year\":1980,\"qty\":3895,\"price\":17.99},{\"title\":\"The Dark Side of the Moon\",\"type\":\"music\",\"author\":\"Pink Floyd\",\"year\":1973,\"qty\":263,\"price\":17.99},{\"title\":\"Sgt. Pepper's Lonely Hearts Club Band\",\"type\":\"music\",\"author\":\"The Beatles\",\"year\":1967,\"qty\":521,\"price\":13.98}]},{\"title\":\"Electronics & Computers\",\"expanded\":true,\"folder\":true,\"children\":[{\"title\":\"Cell Phones\",\"folder\":true,\"children\":[{\"title\":\"Moto G\",\"type\":\"phone\",\"author\":\"Motorola\",\"year\":2014,\"qty\":332,\"price\":224.99},{\"title\":\"Galaxy S8\",\"type\":\"phone\",\"author\":\"Samsung\",\"year\":2016,\"qty\":952,\"price\":509.99},{\"title\":\"iPhone SE\",\"type\":\"phone\",\"author\":\"Apple\",\"year\":2016,\"qty\":444,\"price\":282.75},{\"title\":\"G6\",\"type\":\"phone\",\"author\":\"LG\",\"year\":2017,\"qty\":951,\"price\":309.99},{\"title\":\"Lumia\",\"type\":\"phone\",\"author\":\"Microsoft\",\"year\":2014,\"qty\":32,\"price\":205.95},{\"title\":\"Xperia\",\"type\":\"phone\",\"author\":\"Sony\",\"year\":2014,\"qty\":77,\"price\":195.95},{\"title\":\"3210\",\"type\":\"phone\",\"author\":\"Nokia\",\"year\":1999,\"qty\":3,\"price\":85.99}]},{\"title\":\"Computers\",\"folder\":true,\"children\":[{\"title\":\"ThinkPad\",\"type\":\"computer\",\"author\":\"IBM\",\"year\":1992,\"qty\":16,\"price\":749.9},{\"title\":\"C64\",\"type\":\"computer\",\"author\":\"Commodore\",\"year\":1982,\"qty\":83,\"price\":595},{\"title\":\"MacBook Pro\",\"type\":\"computer\",\"author\":\"Apple\",\"year\":2006,\"qty\":482,\"price\":1949.95},{\"title\":\"Sinclair ZX Spectrum\",\"type\":\"computer\",\"author\":\"Sinclair Research\",\"year\":1982,\"qty\":1,\"price\":529},{\"title\":\"Apple II\",\"type\":\"computer\",\"author\":\"Apple\",\"year\":1977,\"qty\":17,\"price\":1298},{\"title\":\"PC AT\",\"type\":\"computer\",\"author\":\"IBM\",\"year\":1984,\"qty\":3,\"price\":1235}]}]},{\"title\":\"More...\",\"folder\":true,\"lazy\":true}]");

/***/ }),

/***/ 674:
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Sub item\",\"lazy\":true},{\"title\":\"Sub folder\",\"folder\":true,\"lazy\":true}]");

/***/ }),

/***/ 675:
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"/\",\"expanded\":true,\"folder\":true,\"children\":[{\"title\":\"dev\",\"folder\":true},{\"title\":\"etc\",\"folder\":true,\"children\":[{\"title\":\"cups\"},{\"title\":\"httpd\"},{\"title\":\"init.d\"}]},{\"title\":\"sbin\",\"folder\":true},{\"title\":\"tmp\",\"folder\":true},{\"title\":\"Users\",\"expanded\":true,\"folder\":true,\"children\":[{\"title\":\"jdoe\",\"folder\":true},{\"title\":\"jmiller\",\"folder\":true},{\"title\":\"mysql\",\"folder\":true}]},{\"title\":\"usr\",\"expanded\":true,\"folder\":true,\"children\":[{\"title\":\"bin\",\"folder\":true},{\"title\":\"lib\",\"folder\":true},{\"title\":\"local\",\"folder\":true}]},{\"title\":\"var\",\"expanded\":true,\"folder\":true,\"children\":[{\"title\":\"log\",\"folder\":true},{\"title\":\"spool\",\"folder\":true},{\"title\":\"yp\",\"folder\":true}]}]}]");

/***/ }),

/***/ 676:
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Books\",\"expanded\":true,\"folder\":true,\"icon\":\"mdi mdi-book-open-page-variant\",\"children\":[{\"title\":\"Art of War\",\"type\":\"book\",\"author\":\"Sun Tzu\",\"year\":-500,\"qty\":21,\"price\":5.95,\"icon\":\"mdi mdi-book\"},{\"title\":\"The Hobbit\",\"type\":\"book\",\"author\":\"J.R.R. Tolkien\",\"year\":1937,\"qty\":32,\"price\":8.97,\"icon\":\"mdi mdi-book\"},{\"title\":\"The Little Prince\",\"type\":\"book\",\"author\":\"Antoine de Saint-Exupery\",\"year\":1943,\"qty\":2946,\"price\":6.82,\"icon\":\"mdi mdi-book\"},{\"title\":\"Don Quixote\",\"type\":\"book\",\"author\":\"Miguel de Cervantes\",\"year\":1615,\"qty\":932,\"price\":15.99,\"icon\":\"mdi mdi-book\"}]},{\"title\":\"Music\",\"folder\":true,\"icon\":\"mdi mdi-music-circle-outline\",\"children\":[{\"title\":\"Nevermind\",\"type\":\"music\",\"author\":\"Nirvana\",\"year\":1991,\"qty\":916,\"price\":15.95,\"icon\":\"mdi mdi-file-music\"},{\"title\":\"Autobahn\",\"type\":\"music\",\"author\":\"Kraftwerk\",\"year\":1974,\"qty\":2261,\"price\":23.98,\"icon\":\"mdi mdi-file-music\"},{\"title\":\"Kind of Blue\",\"type\":\"music\",\"author\":\"Miles Davis\",\"year\":1959,\"qty\":9735,\"price\":21.9,\"icon\":\"mdi mdi-file-music\"},{\"title\":\"Back in Black\",\"type\":\"music\",\"author\":\"AC/DC\",\"year\":1980,\"qty\":3895,\"price\":17.99,\"icon\":\"mdi mdi-file-music\"},{\"title\":\"The Dark Side of the Moon\",\"type\":\"music\",\"author\":\"Pink Floyd\",\"year\":1973,\"qty\":263,\"price\":17.99,\"icon\":\"mdi mdi-file-music\"},{\"title\":\"Sgt. Pepper's Lonely Hearts Club Band\",\"type\":\"music\",\"author\":\"The Beatles\",\"year\":1967,\"qty\":521,\"price\":13.98,\"icon\":\"mdi mdi-file-music\"}]},{\"title\":\"Electronics & Computers\",\"expanded\":true,\"folder\":true,\"icon\":\"mdi mdi-cellphone-link\",\"children\":[{\"title\":\"Cell Phones\",\"folder\":true,\"icon\":\"mdi mdi-cellphone\",\"children\":[{\"title\":\"Moto G\",\"type\":\"phone\",\"author\":\"Motorola\",\"year\":2014,\"qty\":332,\"price\":224.99,\"icon\":\"mdi mdi-cellphone-android\"},{\"title\":\"Galaxy S8\",\"type\":\"phone\",\"author\":\"Samsung\",\"year\":2016,\"qty\":952,\"price\":509.99,\"icon\":\"mdi mdi-cellphone-android\"},{\"title\":\"iPhone SE\",\"type\":\"phone\",\"author\":\"Apple\",\"year\":2016,\"qty\":444,\"price\":282.75,\"icon\":\"mdi mdi-cellphone-iphone\"},{\"title\":\"G6\",\"type\":\"phone\",\"author\":\"LG\",\"year\":2017,\"qty\":951,\"price\":309.99,\"icon\":\"mdi mdi-cellphone-android\"},{\"title\":\"Lumia\",\"type\":\"phone\",\"author\":\"Microsoft\",\"year\":2014,\"qty\":32,\"price\":205.95,\"icon\":\"mdi mdi-cellphone\"},{\"title\":\"Xperia\",\"type\":\"phone\",\"author\":\"Sony\",\"year\":2014,\"qty\":77,\"price\":195.95,\"icon\":\"mdi mdi-cellphone-android\"},{\"title\":\"3210\",\"type\":\"phone\",\"author\":\"Nokia\",\"year\":1999,\"qty\":3,\"price\":85.99,\"icon\":\"mdi mdi-cellphone-basic\"}]},{\"title\":\"Computers\",\"folder\":true,\"icon\":\"mdi mdi-laptop\",\"children\":[{\"title\":\"ThinkPad\",\"type\":\"computer\",\"author\":\"IBM\",\"year\":1992,\"qty\":16,\"price\":749.9,\"icon\":\"mdi mdi-laptop-windows\"},{\"title\":\"C64\",\"type\":\"computer\",\"author\":\"Commodore\",\"year\":1982,\"qty\":83,\"price\":595,\"icon\":\"mdi mdi-desktop-classic\"},{\"title\":\"MacBook Pro\",\"type\":\"computer\",\"author\":\"Apple\",\"year\":2006,\"qty\":482,\"price\":1949.95,\"icon\":\"mdi mdi-laptop-mac\"},{\"title\":\"Sinclair ZX Spectrum\",\"type\":\"computer\",\"author\":\"Sinclair Research\",\"year\":1982,\"qty\":1,\"price\":529,\"icon\":\"mdi mdi-desktop-classic\"},{\"title\":\"Apple II\",\"type\":\"computer\",\"author\":\"Apple\",\"year\":1977,\"qty\":17,\"price\":1298,\"icon\":\"mdi mdi-desktop-classic\"},{\"title\":\"PC AT\",\"type\":\"computer\",\"author\":\"IBM\",\"year\":1984,\"qty\":3,\"price\":1235,\"icon\":\"mdi mdi-desktop-classic\"}]}]}]");

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_style_index_0_id_4067fd55_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(499);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_style_index_0_id_4067fd55_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_style_index_0_id_4067fd55_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_style_index_0_id_4067fd55_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_style_index_0_id_4067fd55_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".pretty *{box-sizing:border-box}.pretty input:not([type=checkbox]):not([type=radio]){display:none}.pretty{position:relative;display:inline-block;margin-right:1em;white-space:nowrap;line-height:1}.pretty input{position:absolute;left:0;top:0;min-width:1em;width:100%;height:100%;z-index:2;opacity:0;margin:0;padding:0;cursor:pointer}.pretty .state label{position:static;display:inline-block;font-weight:400;margin:0;text-indent:1.5em;min-width:calc(1em + 2px)}.pretty .state label:after,.pretty .state label:before{content:\"\";width:calc(1em + 2px);height:calc(1em + 2px);display:block;box-sizing:border-box;border-radius:0;border:1px solid transparent;z-index:0;position:absolute;left:0;top:calc(-108% + 1em);background-color:transparent}.pretty .state label:before{border-color:#bdc3c7}.pretty .state.p-is-hover,.pretty .state.p-is-indeterminate{display:none}@-webkit-keyframes zoom{0%{opacity:0;transform:scale(0)}}@keyframes zoom{0%{opacity:0;transform:scale(0)}}@-webkit-keyframes tada{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;transform:scale(7)}38%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;transform:scale(1)}55%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.5)}72%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}81%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.24)}89%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}95%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.04)}to{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}}@keyframes tada{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;transform:scale(7)}38%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;transform:scale(1)}55%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.5)}72%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}81%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.24)}89%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}95%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.04)}to{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}}@-webkit-keyframes jelly{0%{transform:scaleX(1)}30%{transform:scale3d(.75,1.25,1)}40%{transform:scale3d(1.25,.75,1)}50%{transform:scale3d(.85,1.15,1)}65%{transform:scale3d(1.05,.95,1)}75%{transform:scale3d(.95,1.05,1)}to{transform:scaleX(1)}}@keyframes jelly{0%{transform:scaleX(1)}30%{transform:scale3d(.75,1.25,1)}40%{transform:scale3d(1.25,.75,1)}50%{transform:scale3d(.85,1.15,1)}65%{transform:scale3d(1.05,.95,1)}75%{transform:scale3d(.95,1.05,1)}to{transform:scaleX(1)}}@-webkit-keyframes rotate{0%{opacity:0;transform:translateZ(-200px) rotate(-45deg)}to{opacity:1;transform:translateZ(0) rotate(0)}}@keyframes rotate{0%{opacity:0;transform:translateZ(-200px) rotate(-45deg)}to{opacity:1;transform:translateZ(0) rotate(0)}}@-webkit-keyframes pulse{0%{box-shadow:0 0 0 0 #bdc3c7}to{box-shadow:0 0 0 1.5em rgba(189,195,199,0)}}@keyframes pulse{0%{box-shadow:0 0 0 0 #bdc3c7}to{box-shadow:0 0 0 1.5em rgba(189,195,199,0)}}.pretty.p-default.p-fill .state label:after{transform:scale(1)}.pretty.p-default .state label:after{transform:scale(.6)}.pretty.p-default input:checked~.state label:after{background-color:#bdc3c7!important}.pretty.p-default.p-thick .state label:after,.pretty.p-default.p-thick .state label:before{border-width:.14286em}.pretty.p-default.p-thick .state label:after{transform:scale(.4)!important}.pretty.p-icon .state .icon{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc(-108% + 1em);border:1px solid transparent;opacity:0}.pretty.p-icon .state .icon:before{margin:0;width:100%;height:100%;text-align:center;display:flex;flex:1;justify-content:center;align-items:center;line-height:1}.pretty.p-icon input:checked~.state .icon{opacity:1}.pretty.p-icon input:checked~.state label:before{border-color:#5a656b}.pretty.p-svg .state .svg{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc(-108% + 1em);border:1px solid transparent;opacity:0}.pretty.p-svg .state svg{margin:0;width:100%;height:100%;text-align:center;display:flex;flex:1;justify-content:center;align-items:center;line-height:1}.pretty.p-svg input:checked~.state .svg{opacity:1}.pretty.p-image .state img{opacity:0;position:absolute;width:calc(1em + 2px);height:calc(1em + 2px);top:0;top:calc(-108% + 1em);left:0;z-index:0;text-align:center;line-height:normal;transform:scale(.8)}.pretty.p-image input:checked~.state img{opacity:1}.pretty.p-switch input{min-width:2em}.pretty.p-switch .state{position:relative}.pretty.p-switch .state:before{content:\"\";border:1px solid #bdc3c7;border-radius:60px;width:2em;box-sizing:unset;height:calc(1em + 2px);position:absolute;top:0;top:calc(-116% + 1em);z-index:0;transition:all .5s ease}.pretty.p-switch .state label{text-indent:2.5em}.pretty.p-switch .state label:after,.pretty.p-switch .state label:before{transition:all .5s ease;border-radius:100%;left:0;border-color:transparent;transform:scale(.8)}.pretty.p-switch .state label:after{background-color:#bdc3c7!important}.pretty.p-switch input:checked~.state:before{border-color:#5a656b}.pretty.p-switch input:checked~.state label:before{opacity:0}.pretty.p-switch input:checked~.state label:after{background-color:#5a656b!important;left:1em}.pretty.p-switch.p-fill input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}.pretty.p-switch.p-fill input:checked~.state label:before{opacity:0}.pretty.p-switch.p-fill input:checked~.state label:after{background-color:#fff!important;left:1em}.pretty.p-switch.p-slim .state:before{height:.1em;background:#bdc3c7!important;top:calc(50% - .1em)}.pretty.p-switch.p-slim input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}.pretty.p-has-hover input:hover~.state:not(.p-is-hover){display:none}.pretty.p-has-hover input:hover~.state.p-is-hover,.pretty.p-has-hover input:hover~.state.p-is-hover .icon{display:block}.pretty.p-has-focus input:focus~.state label:before{box-shadow:0 0 3px 0 #bdc3c7}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state:not(.p-is-indeterminate){display:none}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate{display:block}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate .icon{display:block;opacity:1}.pretty.p-toggle .state.p-on{opacity:0;display:none}.pretty.p-toggle .state .icon,.pretty.p-toggle .state.p-off,.pretty.p-toggle .state .svg,.pretty.p-toggle .state img{opacity:1;display:inherit}.pretty.p-toggle .state.p-off .icon{color:#bdc3c7}.pretty.p-toggle input:checked~.state.p-on{opacity:1;display:inherit}.pretty.p-toggle input:checked~.state.p-off{opacity:0;display:none}.pretty.p-plain.p-toggle .state label:before,.pretty.p-plain input:checked~.state label:before{content:none}.pretty.p-plain.p-plain .icon{transform:scale(1.1)}.pretty.p-round .state label:after,.pretty.p-round .state label:before{border-radius:100%}.pretty.p-round.p-icon .state .icon{border-radius:100%;overflow:hidden}.pretty.p-round.p-icon .state .icon:before{transform:scale(.8)}.pretty.p-curve .state label:after,.pretty.p-curve .state label:before{border-radius:20%}.pretty.p-smooth .icon,.pretty.p-smooth .svg,.pretty.p-smooth label:after,.pretty.p-smooth label:before{transition:all .5s ease}.pretty.p-smooth input:checked+.state label:after{transition:all .3s ease}.pretty.p-smooth.p-default input:checked+.state label:after,.pretty.p-smooth input:checked+.state .icon,.pretty.p-smooth input:checked+.state .svg,.pretty.p-smooth input:checked+.state img{-webkit-animation:zoom .2s ease;animation:zoom .2s ease}.pretty.p-smooth.p-plain input:checked+.state label:before{content:\"\";transform:scale(0);transition:all .5s ease}.pretty.p-tada:not(.p-default) input:checked+.state .icon,.pretty.p-tada:not(.p-default) input:checked+.state .svg,.pretty.p-tada:not(.p-default) input:checked+.state img,.pretty.p-tada:not(.p-default) input:checked+.state label:after,.pretty.p-tada:not(.p-default) input:checked+.state label:before{-webkit-animation:tada .7s cubic-bezier(.25,.46,.45,.94) 1 alternate;animation:tada .7s cubic-bezier(.25,.46,.45,.94) 1 alternate;opacity:1}.pretty.p-jelly:not(.p-default) input:checked+.state .icon,.pretty.p-jelly:not(.p-default) input:checked+.state .svg,.pretty.p-jelly:not(.p-default) input:checked+.state img,.pretty.p-jelly:not(.p-default) input:checked+.state label:after,.pretty.p-jelly:not(.p-default) input:checked+.state label:before{-webkit-animation:jelly .7s cubic-bezier(.25,.46,.45,.94);animation:jelly .7s cubic-bezier(.25,.46,.45,.94);opacity:1}.pretty.p-jelly:not(.p-default) input:checked+.state label:before{border-color:transparent}.pretty.p-rotate:not(.p-default) input:checked~.state .icon,.pretty.p-rotate:not(.p-default) input:checked~.state .svg,.pretty.p-rotate:not(.p-default) input:checked~.state img,.pretty.p-rotate:not(.p-default) input:checked~.state label:after,.pretty.p-rotate:not(.p-default) input:checked~.state label:before{-webkit-animation:rotate .7s cubic-bezier(.25,.46,.45,.94);animation:rotate .7s cubic-bezier(.25,.46,.45,.94);opacity:1}.pretty.p-rotate:not(.p-default) input:checked~.state label:before{border-color:transparent}.pretty.p-pulse:not(.p-switch) input:checked~.state label:before{-webkit-animation:pulse 1s;animation:pulse 1s}.pretty input[disabled]{cursor:not-allowed;display:none}.pretty input[disabled]~*{opacity:.5}.pretty.p-locked input{display:none;cursor:not-allowed}.pretty.p-toggle .state.p-primary label:after,.pretty input:checked~.state.p-primary label:after{background-color:#428bca!important}.pretty.p-toggle .state.p-primary .icon,.pretty.p-toggle .state.p-primary .svg,.pretty input:checked~.state.p-primary .icon,.pretty input:checked~.state.p-primary .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-primary-o label:before,.pretty input:checked~.state.p-primary-o label:before{border-color:#428bca}.pretty.p-toggle .state.p-primary-o label:after,.pretty input:checked~.state.p-primary-o label:after{background-color:transparent}.pretty.p-toggle .state.p-primary-o .icon,.pretty.p-toggle .state.p-primary-o .svg,.pretty.p-toggle .state.p-primary-o svg,.pretty input:checked~.state.p-primary-o .icon,.pretty input:checked~.state.p-primary-o .svg,.pretty input:checked~.state.p-primary-o svg{color:#428bca;stroke:#428bca}.pretty.p-default:not(.p-fill) input:checked~.state.p-primary-o label:after{background-color:#428bca!important}.pretty.p-switch input:checked~.state.p-primary:before{border-color:#428bca}.pretty.p-switch.p-fill input:checked~.state.p-primary:before{background-color:#428bca!important}.pretty.p-switch.p-slim input:checked~.state.p-primary:before{border-color:#245682;background-color:#245682!important}.pretty.p-toggle .state.p-info label:after,.pretty input:checked~.state.p-info label:after{background-color:#5bc0de!important}.pretty.p-toggle .state.p-info .icon,.pretty.p-toggle .state.p-info .svg,.pretty input:checked~.state.p-info .icon,.pretty input:checked~.state.p-info .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-info-o label:before,.pretty input:checked~.state.p-info-o label:before{border-color:#5bc0de}.pretty.p-toggle .state.p-info-o label:after,.pretty input:checked~.state.p-info-o label:after{background-color:transparent}.pretty.p-toggle .state.p-info-o .icon,.pretty.p-toggle .state.p-info-o .svg,.pretty.p-toggle .state.p-info-o svg,.pretty input:checked~.state.p-info-o .icon,.pretty input:checked~.state.p-info-o .svg,.pretty input:checked~.state.p-info-o svg{color:#5bc0de;stroke:#5bc0de}.pretty.p-default:not(.p-fill) input:checked~.state.p-info-o label:after{background-color:#5bc0de!important}.pretty.p-switch input:checked~.state.p-info:before{border-color:#5bc0de}.pretty.p-switch.p-fill input:checked~.state.p-info:before{background-color:#5bc0de!important}.pretty.p-switch.p-slim input:checked~.state.p-info:before{border-color:#2390b0;background-color:#2390b0!important}.pretty.p-toggle .state.p-success label:after,.pretty input:checked~.state.p-success label:after{background-color:#5cb85c!important}.pretty.p-toggle .state.p-success .icon,.pretty.p-toggle .state.p-success .svg,.pretty input:checked~.state.p-success .icon,.pretty input:checked~.state.p-success .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-success-o label:before,.pretty input:checked~.state.p-success-o label:before{border-color:#5cb85c}.pretty.p-toggle .state.p-success-o label:after,.pretty input:checked~.state.p-success-o label:after{background-color:transparent}.pretty.p-toggle .state.p-success-o .icon,.pretty.p-toggle .state.p-success-o .svg,.pretty.p-toggle .state.p-success-o svg,.pretty input:checked~.state.p-success-o .icon,.pretty input:checked~.state.p-success-o .svg,.pretty input:checked~.state.p-success-o svg{color:#5cb85c;stroke:#5cb85c}.pretty.p-default:not(.p-fill) input:checked~.state.p-success-o label:after{background-color:#5cb85c!important}.pretty.p-switch input:checked~.state.p-success:before{border-color:#5cb85c}.pretty.p-switch.p-fill input:checked~.state.p-success:before{background-color:#5cb85c!important}.pretty.p-switch.p-slim input:checked~.state.p-success:before{border-color:#357935;background-color:#357935!important}.pretty.p-toggle .state.p-warning label:after,.pretty input:checked~.state.p-warning label:after{background-color:#f0ad4e!important}.pretty.p-toggle .state.p-warning .icon,.pretty.p-toggle .state.p-warning .svg,.pretty input:checked~.state.p-warning .icon,.pretty input:checked~.state.p-warning .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-warning-o label:before,.pretty input:checked~.state.p-warning-o label:before{border-color:#f0ad4e}.pretty.p-toggle .state.p-warning-o label:after,.pretty input:checked~.state.p-warning-o label:after{background-color:transparent}.pretty.p-toggle .state.p-warning-o .icon,.pretty.p-toggle .state.p-warning-o .svg,.pretty.p-toggle .state.p-warning-o svg,.pretty input:checked~.state.p-warning-o .icon,.pretty input:checked~.state.p-warning-o .svg,.pretty input:checked~.state.p-warning-o svg{color:#f0ad4e;stroke:#f0ad4e}.pretty.p-default:not(.p-fill) input:checked~.state.p-warning-o label:after{background-color:#f0ad4e!important}.pretty.p-switch input:checked~.state.p-warning:before{border-color:#f0ad4e}.pretty.p-switch.p-fill input:checked~.state.p-warning:before{background-color:#f0ad4e!important}.pretty.p-switch.p-slim input:checked~.state.p-warning:before{border-color:#c77c11;background-color:#c77c11!important}.pretty.p-toggle .state.p-danger label:after,.pretty input:checked~.state.p-danger label:after{background-color:#d9534f!important}.pretty.p-toggle .state.p-danger .icon,.pretty.p-toggle .state.p-danger .svg,.pretty input:checked~.state.p-danger .icon,.pretty input:checked~.state.p-danger .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-danger-o label:before,.pretty input:checked~.state.p-danger-o label:before{border-color:#d9534f}.pretty.p-toggle .state.p-danger-o label:after,.pretty input:checked~.state.p-danger-o label:after{background-color:transparent}.pretty.p-toggle .state.p-danger-o .icon,.pretty.p-toggle .state.p-danger-o .svg,.pretty.p-toggle .state.p-danger-o svg,.pretty input:checked~.state.p-danger-o .icon,.pretty input:checked~.state.p-danger-o .svg,.pretty input:checked~.state.p-danger-o svg{color:#d9534f;stroke:#d9534f}.pretty.p-default:not(.p-fill) input:checked~.state.p-danger-o label:after{background-color:#d9534f!important}.pretty.p-switch input:checked~.state.p-danger:before{border-color:#d9534f}.pretty.p-switch.p-fill input:checked~.state.p-danger:before{background-color:#d9534f!important}.pretty.p-switch.p-slim input:checked~.state.p-danger:before{border-color:#a02622;background-color:#a02622!important}.pretty.p-bigger .icon,.pretty.p-bigger .img,.pretty.p-bigger .svg,.pretty.p-bigger label:after,.pretty.p-bigger label:before{font-size:1.2em!important;top:calc(-135% + 1em)!important}.pretty.p-bigger label{text-indent:1.7em}@media print{.pretty .state .icon,.pretty .state:before,.pretty .state label:after,.pretty .state label:before{color-adjust:exact;-webkit-print-color-adjust:exact;print-color-adjust:exact}}body .pretty{margin:0;line-height:normal}body .pretty.p-smooth .icon,body .pretty.p-smooth .svg{transition:all .14s cubic-bezier(.55,0,.1,1)}body .pretty label a{position:relative;z-index:10}body .pretty:not(.p-switch):not(.p-radio),body .pretty:not(.p-switch):not(.p-radio) .state{height:18px}body .pretty:not(.p-switch):not(.p-radio) .state{display:flex;align-items:center}body .pretty:not(.p-switch):not(.p-radio).p-icon .state .icon{border-radius:4px;left:0;top:-1px;width:18px;height:18px}body .pretty:not(.p-switch):not(.p-radio).p-icon .state .icon,body .pretty:not(.p-switch):not(.p-radio).p-icon .state .icon:before{font-size:18px}body .pretty:not(.p-switch):not(.p-radio) .state label{min-width:18px;text-indent:26px;min-height:18px}body .pretty:not(.p-switch):not(.p-radio) .state label:after,body .pretty:not(.p-switch):not(.p-radio) .state label:before{width:18px;height:18px;top:0}body .pretty:not(.p-switch):not(.p-radio) .state label:before{background:transparent;border-radius:50%;transition:all .14s cubic-bezier(.55,0,.1,1)}body .pretty:not(.p-switch):not(.p-radio) .state label:after{background:#fff;border-radius:2px;border:2px solid rgba(0,0,0,.54);transition:all .24s cubic-bezier(.55,0,.1,1)}body .pretty:not(.p-switch):not(.p-radio) input:checked~.state label:after{border-color:#1976d2;background:#1976d2}body .pretty:not(.p-switch):not(.p-radio).p-custom input:checked~.state label:after{background:var(--color);border-color:var(--color)}body .pretty:not(.p-switch):not(.p-radio) input:checked[disabled]~.state label:after{border-color:#757575;background:#757575}body .pretty:not(.p-switch):not(.p-radio) input[disabled]~*{opacity:.6}body .pretty:not(.p-switch):not(.p-radio).p-icon input:checked~.state .icon{color:#fff}body .pretty:not(.p-switch):not(.p-radio) .state.p-is-indeterminate .icon{top:0;color:#fff}body .pretty:not(.p-switch):not(.p-radio) .state.p-is-indeterminate .icon,body .pretty:not(.p-switch):not(.p-radio) .state.p-is-indeterminate .icon:before{font-size:18px}body .pretty:not(.p-switch):not(.p-radio) .state.p-is-indeterminate label:after{border-color:#1976d2;background-color:#1976d2}body .pretty.p-radio,body .pretty.p-radio .state{min-height:20px}body .pretty.p-radio .state{display:flex;align-items:center;position:relative}body .pretty.p-radio .state:before{content:\"\";position:absolute;left:0;top:50%;width:20px;height:20px;border:2px solid rgba(0,0,0,.54);transition:all .24s cubic-bezier(.55,0,.1,1);border-radius:50%;box-sizing:border-box;margin-top:-10px;background:#fff}body .pretty.p-radio .state label{min-width:20px;text-indent:26px}body .pretty.p-radio .state label:before{background:transparent;border-radius:50%;border-color:transparent;transition:all .14s cubic-bezier(.55,0,.1,1);width:18px;height:18px;top:0}body .pretty.p-radio .state label:after{border-radius:50%;transition:all .24s cubic-bezier(.55,0,.1,1);width:10px;height:10px;top:50%;margin-top:-5px;left:5px}body .pretty.p-radio input:checked~.state:before{border-color:#1976d2}body .pretty.p-radio input:checked~.state label:after{background:#1976d2}body .pretty.p-radio input:checked[disabled]~.state:before{border-color:rgba(0,0,0,.54)}body .pretty.p-radio input:checked[disabled]~.state label:after{background:rgba(0,0,0,.54)}body .pretty.p-radio input[disabled]~*{opacity:.6}body .pretty.p-switch .state{height:26px}body .pretty.p-switch .state:before{border-radius:20px;height:14px;width:36px;background-color:rgba(0,0,0,.26);border:none;top:50%;margin-top:-7px;left:2px;transition:all .14s cubic-bezier(.55,0,.1,1)}body .pretty.p-switch .state label{text-indent:48px;line-height:28px;height:28px;min-width:38px}body .pretty.p-switch .state label:after,body .pretty.p-switch .state label:before{width:20px;height:20px;top:3px;box-shadow:0 1px 4px rgba(0,0,0,.55);transition:all .14s cubic-bezier(.55,0,.1,1);border:none;transform:none}body .pretty.p-switch .state label:after{background-color:#fff!important}body .pretty.p-switch input:checked~.state:before{background-color:#92c2f2}body .pretty.p-switch input:checked~.state label:after{left:20px;background-color:#1976d2!important}body .pretty.p-switch input:checked~.state.p-primary:before{background-color:#5cf1ff}body .pretty.p-switch input:checked~.state.p-primary label:after{background-color:#00838f!important}body .pretty.p-switch input:checked~.state.p-danger:before{background-color:#f6bebd}body .pretty.p-switch input:checked~.state.p-danger label:after{background-color:#e53935!important}body .pretty.p-switch input:checked~.state.p-success:before{background-color:#c8e1ad}body .pretty.p-switch input:checked~.state.p-success label:after{background-color:#7cb342!important}body .pretty.p-switch input:checked~.state.p-warning:before{background-color:#ffe199}body .pretty.p-switch input:checked~.state.p-warning label:after{background-color:#ffb300!important}body .pretty.uk-flex{display:flex}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/plugins/tree.vue?vue&type=template&id=4067fd55&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_vm._ssrNode("<div data-uk-grid class=\"uk-child-width-1-3@l uk-grid\">", "</div>", [_vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardTitle', [_vm._v("\r\n\t\t\t\t\t\t\tMultiple selection\r\n\t\t\t\t\t\t")]), _vm._v(" "), _c('ScCardBody', [_c('client-only', [_c('FancyTree', {
    attrs: {
      "options": _vm.treeMSel
    },
    on: {
      "select": _vm.logSelected
    }
  })], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardTitle', [_vm._v("\r\n\t\t\t\t\t\t\tSingle selection\r\n\t\t\t\t\t\t")]), _vm._v(" "), _c('ScCardBody', [_c('client-only', [_c('FancyTree', {
    attrs: {
      "options": _vm.treeSSel
    }
  })], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardTitle', [_vm._v("\r\n\t\t\t\t\t\t\tDrag & Drop\r\n\t\t\t\t\t\t")]), _vm._v(" "), _c('ScCardBody', [_c('client-only', [_c('FancyTree', {
    attrs: {
      "options": _vm.treeDnD
    }
  })], 1)], 1)], 1)], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div data-uk-grid class=\"uk-child-width-1-1 uk-grid\">", "</div>", [_vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardTitle', [_vm._v("\r\n\t\t\t\t\t\t\tTable\r\n\t\t\t\t\t\t")]), _vm._v(" "), _c('ScCardBody', [_c('div', {
    staticClass: "uk-overflow-auto"
  }, [_c('client-only', [_c('FancyTree', {
    ref: "treeTable",
    attrs: {
      "options": _vm.treeTable,
      "table": true
    }
  }, [_c('table', {
    staticClass: "uk-table uk-table-striped uk-margin-remove",
    attrs: {
      "id": "sc-tree-table"
    }
  }, [_c('colgroup', [_c('col', {
    staticClass: "uk-table-shrink"
  }), _vm._v(" "), _c('col'), _vm._v(" "), _c('col', {
    staticClass: "uk-table-shrink"
  }), _vm._v(" "), _c('col', {
    staticClass: "uk-table-shrink"
  }), _vm._v(" "), _c('col', {
    staticClass: "uk-table-shrink"
  })]), _vm._v(" "), _c('thead', [_c('tr', [_c('th', {
    staticClass: "uk-text-center"
  }, [_c('div', {
    staticClass: "uk-flex uk-flex-center"
  }, [_c('PrettyCheck', {
    staticClass: "p-icon",
    on: {
      "change": _vm.toggleItems
    }
  }, [_c('i', {
    staticClass: "icon mdi mdi-check",
    attrs: {
      "slot": "extra"
    },
    slot: "extra"
  })])], 1)]), _vm._v(" "), _c('th', [_vm._v("Item")]), _vm._v(" "), _c('th', [_vm._v("Author")]), _vm._v(" "), _c('th', {
    staticClass: "uk-text-nowrap"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tYear\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('th', {
    staticClass: "uk-text-nowrap"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUnit price\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td'), _vm._v(" "), _c('td', {
    staticClass: "uk-text-nowrap"
  }), _vm._v(" "), _c('td', {
    staticClass: "uk-text-nowrap"
  }), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', {
    staticClass: "uk-text-right"
  })])])])])], 1)], 1)])], 1)], 1)])], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/plugins/tree.vue?vue&type=template&id=4067fd55&

// EXTERNAL MODULE: external "pretty-checkbox-vue/check"
var check_ = __webpack_require__(97);
var check_default = /*#__PURE__*/__webpack_require__.n(check_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/plugins/tree.vue?vue&type=script&lang=js&


const treeMSelSource = __webpack_require__(673);

const treeMSelLazy = __webpack_require__(674);

const treeDnDSource = __webpack_require__(675);

const treeTableSource = __webpack_require__(676);

/* harmony default export */ var treevue_type_script_lang_js_ = ({
  name: 'PluginsTree',
  components: {
    FancyTree:  false ? undefined : null,
    PrettyCheck: check_default.a
  },
  data: () => ({
    treeMSel: {
      extensions: ["glyph"],
      checkbox: true,
      selectMode: 3,
      debugLevel: 0,
      glyph: true,
      source: treeMSelSource,

      lazyLoad(event, data) {
        data.result = treeMSelLazy;
      }

    },
    treeSSel: {
      extensions: ["glyph"],
      checkbox: "radio",
      selectMode: 1,
      debugLevel: 0,
      glyph: true,
      source: [{
        title: "n1",
        expanded: true,
        checkbox: "radio",
        radiogroup: true,
        children: [{
          title: "n1.1"
        }, {
          title: "n1.2 (selected)",
          selected: true
        }, {
          title: "n1.3"
        }]
      }, {
        title: "n2",
        expanded: true,
        checkbox: "radio",
        radiogroup: true,
        children: [{
          title: "n2.1"
        }, {
          title: "n2.2"
        }, {
          title: "n2.3"
        }]
      }, {
        title: "n3",
        expanded: true,
        checkbox: "radio",
        radiogroup: true,
        children: [{
          title: "n3.1"
        }, {
          title: "n3.2"
        }, {
          title: "n3.3"
        }, {
          title: "n3.4"
        }]
      }]
    },
    treeDnD: {
      extensions: ["glyph", "dnd5"],
      debugLevel: 0,
      glyph: true,
      source: treeDnDSource,
      dnd5: {
        dragStart(node, data) {
          return true;
        },

        dragDrag(node, data) {
          data.dataTransfer.dropEffect = "move";
        },

        dragEnd(node, data) {},

        dragEnter(node, data) {
          data.dataTransfer.dropEffect = "move";
          return true;
        },

        dragOver(node, data) {
          data.dataTransfer.dropEffect = "move";
        },

        dragLeave(node, data) {},

        dragDrop(node, data) {
          var transfer = data.dataTransfer;
          node.debug("drop", data);

          if (data.otherNode) {
            data.otherNode.moveTo(node, data.hitMode);
          } else if (data.otherNodeData) {
            node.addChild(data.otherNodeData, data.hitMode);
          } else {
            node.addNode({
              title: transfer.getData("text")
            }, data.hitMode);
          }

          node.setExpanded();
        }

      }
    },
    treeTable: {
      extensions: ["glyph", "table", "wide"],
      checkbox: true,
      selectMode: 3,
      glyph: true,
      table: {
        checkboxColumnIdx: 0,
        nodeColumnIdx: 1
      },
      source: treeTableSource,

      renderColumns(event, data) {
        var node = data.node;
        var _data = node.data;
        var $tdList = $(node.tr).find(">td");
        $tdList.eq(2).text(_data.author);
        $tdList.eq(3).text(_data.year);
        $tdList.eq(4).text(_data.price ? _data.price.toFixed(2) : "");
      }

    }
  }),
  methods: {
    toggleItems(e) {
      if (e) {
        this.$refs.treeTable.tree.visit(function (node) {
          node.setSelected(true);
        });
      } else {
        this.$refs.treeTable.tree.visit(function (node) {
          node.setSelected(false);
        });
      }
    },

    logSelected(val) {
      console.log(val);
    }

  }
});
// CONCATENATED MODULE: ./pages/plugins/tree.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_treevue_type_script_lang_js_ = (treevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/plugins/tree.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(677)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  plugins_treevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5a7e98f0"
  
)

/* harmony default export */ var tree = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=tree.js.map