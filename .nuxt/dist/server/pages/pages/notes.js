exports.ids = [108];
exports.modules = {

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

if (false) {}

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

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(627);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("41f97b56", content, true, context)
};

/***/ }),

/***/ 625:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"Shop list\",\"body\":\"Consectetur adipisicing elit. Aliquam molestias quidem repellendus saepe vero! Assumenda fugiat perferendis reiciendis repellat.\",\"user\":\"Joey\",\"labels\":[\"tag1\",\"tag2\",\"tag3\",\"tag4\"],\"folder\":\"work\",\"dueDate\":\"23/08/2019\",\"checklist\":[{\"label\":\"Beef Mince (500g)\",\"value\":\"item_1\",\"checked\":true,\"id\":\"checkbox_1\",\"name\":\"checkbox_1\"},{\"label\":\"Fresh Orange Juice (1L)\",\"value\":\"item_2\",\"checked\":false,\"id\":\"checkbox_2\",\"name\":\"checkbox_2\"},{\"label\":\"Cheese (250g)\",\"value\":\"item_3\",\"checked\":false,\"id\":\"checkbox_3\",\"name\":\"checkbox_3\"},{\"label\":\"Tomatoes (1kg)\",\"value\":\"item_4\",\"checked\":false,\"id\":\"checkbox_4\",\"name\":\"checkbox_4\"},{\"label\":\"Apples (pack of 5)\",\"value\":\"item_5\",\"checked\":false,\"id\":\"checkbox_5\",\"name\":\"checkbox_5\"}],\"cardColor\":\"amber\",\"visible\":true},{\"id\":2,\"title\":\"Book Flight to New York\",\"body\":\"Check flights on <a href='https://www.skyscanner.net/transport/flights/pari/nyca'>Skyscanner</a> and also on <a href='https://www.google.com/flights'>Google Flights</a>\",\"user\":\"Eve\",\"labels\":[\"tag1\",\"tag4\"],\"folder\":\"important\",\"cardColor\":\"red\",\"visible\":true},{\"id\":3,\"title\":\"Todo List\",\"body\":\"Consectetur adipisicing elit. Aliquam molestias quidem repellendus saepe vero! Assumenda fugiat perferendis reiciendis repellat.\",\"user\":\"Mark\",\"labels\":[\"tag2\",\"tag4\"],\"checklist\":[{\"label\":\"To Do 1\",\"checked\":true,\"id\":\"todo_1\",\"name\":\"todo_1\"},{\"label\":\"To Do 2\",\"checked\":true,\"id\":\"todo_2\",\"name\":\"todo_2\"},{\"label\":\"To Do 3\",\"checked\":true,\"id\":\"todo_3\",\"name\":\"todo_3\"}],\"folder\":\"work\",\"cardColor\":\"green\",\"visible\":true},{\"id\":4,\"title\":\"Call John\",\"body\":\"Alias blanditiis dolor dolore eius odio possimus, suscipit ullam vel! Alias blanditiis dolor dolore.\",\"user\":\"Alan\",\"labels\":[\"tag3\"],\"folder\":\"todo\",\"cardColor\":\"blue\",\"visible\":true},{\"id\":5,\"title\":\"UIkit and reactive JavaScript frameworks\",\"body\":\"UIkit is listening for DOM manipulations and will automatically initialize, connect and disconnect components as they are inserted or removed from the DOM. That way it can easily be used with JavaScript frameworks like Vue.js and React.\",\"user\":\"Tom\",\"labels\":[\"tag3\"],\"folder\":\"todo\",\"cardColor\":\"brown\",\"visible\":true},{\"id\":6,\"title\":\"Note 5\",\"body\":\"Ab aperiam debitis eius error eveniet itaque placeat praesentium quod. Alias blanditiis dolor dolore eius odio possimus, suscipit ullam vel!\",\"user\":\"Mark\",\"labels\":[\"tag2\",\"tag4\"],\"folder\":\"personal\",\"cardColor\":\"\",\"visible\":true},{\"id\":7,\"title\":\"Important informations\",\"body\":\"A commodi consequatur dicta dolorum ea earum facilis fuga, id maiores obcaecati officia quas quia quis quos ratione reprehenderit rerum, sed sint vero voluptas? Autem consequatur consequuntur cumque doloribus enim laudantium, magnam quibusdam rem repellat sunt?\",\"user\":\"Kate\",\"labels\":[\"tag1\",\"tag2\"],\"folder\":\"important\",\"cardColor\":\"red\",\"visible\":true},{\"id\":8,\"title\":\"Personal informations\",\"body\":\"Alias blanditiis dolor dolore eius odio possimus, suscipit ullam vel! Alias blanditiis dolor dolore.\",\"user\":\"Kate\",\"labels\":[\"tag2\",\"tag4\"],\"folder\":\"personal\",\"cardColor\":\"amber\",\"visible\":true}]");

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_vue_vue_type_style_index_0_id_1c7bd90a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(486);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_vue_vue_type_style_index_0_id_1c7bd90a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_vue_vue_type_style_index_0_id_1c7bd90a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_vue_vue_type_style_index_0_id_1c7bd90a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_vue_vue_type_style_index_0_id_1c7bd90a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".pretty *{box-sizing:border-box}.pretty input:not([type=checkbox]):not([type=radio]){display:none}.pretty{position:relative;display:inline-block;margin-right:1em;white-space:nowrap;line-height:1}.pretty input{position:absolute;left:0;top:0;min-width:1em;width:100%;height:100%;z-index:2;opacity:0;margin:0;padding:0;cursor:pointer}.pretty .state label{position:static;display:inline-block;font-weight:400;margin:0;text-indent:1.5em;min-width:calc(1em + 2px)}.pretty .state label:after,.pretty .state label:before{content:\"\";width:calc(1em + 2px);height:calc(1em + 2px);display:block;box-sizing:border-box;border-radius:0;border:1px solid transparent;z-index:0;position:absolute;left:0;top:calc(-108% + 1em);background-color:transparent}.pretty .state label:before{border-color:#bdc3c7}.pretty .state.p-is-hover,.pretty .state.p-is-indeterminate{display:none}@-webkit-keyframes zoom{0%{opacity:0;transform:scale(0)}}@keyframes zoom{0%{opacity:0;transform:scale(0)}}@-webkit-keyframes tada{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;transform:scale(7)}38%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;transform:scale(1)}55%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.5)}72%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}81%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.24)}89%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}95%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.04)}to{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}}@keyframes tada{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;transform:scale(7)}38%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;transform:scale(1)}55%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.5)}72%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}81%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.24)}89%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}95%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.04)}to{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}}@-webkit-keyframes jelly{0%{transform:scaleX(1)}30%{transform:scale3d(.75,1.25,1)}40%{transform:scale3d(1.25,.75,1)}50%{transform:scale3d(.85,1.15,1)}65%{transform:scale3d(1.05,.95,1)}75%{transform:scale3d(.95,1.05,1)}to{transform:scaleX(1)}}@keyframes jelly{0%{transform:scaleX(1)}30%{transform:scale3d(.75,1.25,1)}40%{transform:scale3d(1.25,.75,1)}50%{transform:scale3d(.85,1.15,1)}65%{transform:scale3d(1.05,.95,1)}75%{transform:scale3d(.95,1.05,1)}to{transform:scaleX(1)}}@-webkit-keyframes rotate{0%{opacity:0;transform:translateZ(-200px) rotate(-45deg)}to{opacity:1;transform:translateZ(0) rotate(0)}}@keyframes rotate{0%{opacity:0;transform:translateZ(-200px) rotate(-45deg)}to{opacity:1;transform:translateZ(0) rotate(0)}}@-webkit-keyframes pulse{0%{box-shadow:0 0 0 0 #bdc3c7}to{box-shadow:0 0 0 1.5em rgba(189,195,199,0)}}@keyframes pulse{0%{box-shadow:0 0 0 0 #bdc3c7}to{box-shadow:0 0 0 1.5em rgba(189,195,199,0)}}.pretty.p-default.p-fill .state label:after{transform:scale(1)}.pretty.p-default .state label:after{transform:scale(.6)}.pretty.p-default input:checked~.state label:after{background-color:#bdc3c7!important}.pretty.p-default.p-thick .state label:after,.pretty.p-default.p-thick .state label:before{border-width:.14286em}.pretty.p-default.p-thick .state label:after{transform:scale(.4)!important}.pretty.p-icon .state .icon{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc(-108% + 1em);border:1px solid transparent;opacity:0}.pretty.p-icon .state .icon:before{margin:0;width:100%;height:100%;text-align:center;display:flex;flex:1;justify-content:center;align-items:center;line-height:1}.pretty.p-icon input:checked~.state .icon{opacity:1}.pretty.p-icon input:checked~.state label:before{border-color:#5a656b}.pretty.p-svg .state .svg{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc(-108% + 1em);border:1px solid transparent;opacity:0}.pretty.p-svg .state svg{margin:0;width:100%;height:100%;text-align:center;display:flex;flex:1;justify-content:center;align-items:center;line-height:1}.pretty.p-svg input:checked~.state .svg{opacity:1}.pretty.p-image .state img{opacity:0;position:absolute;width:calc(1em + 2px);height:calc(1em + 2px);top:0;top:calc(-108% + 1em);left:0;z-index:0;text-align:center;line-height:normal;transform:scale(.8)}.pretty.p-image input:checked~.state img{opacity:1}.pretty.p-switch input{min-width:2em}.pretty.p-switch .state{position:relative}.pretty.p-switch .state:before{content:\"\";border:1px solid #bdc3c7;border-radius:60px;width:2em;box-sizing:unset;height:calc(1em + 2px);position:absolute;top:0;top:calc(-116% + 1em);z-index:0;transition:all .5s ease}.pretty.p-switch .state label{text-indent:2.5em}.pretty.p-switch .state label:after,.pretty.p-switch .state label:before{transition:all .5s ease;border-radius:100%;left:0;border-color:transparent;transform:scale(.8)}.pretty.p-switch .state label:after{background-color:#bdc3c7!important}.pretty.p-switch input:checked~.state:before{border-color:#5a656b}.pretty.p-switch input:checked~.state label:before{opacity:0}.pretty.p-switch input:checked~.state label:after{background-color:#5a656b!important;left:1em}.pretty.p-switch.p-fill input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}.pretty.p-switch.p-fill input:checked~.state label:before{opacity:0}.pretty.p-switch.p-fill input:checked~.state label:after{background-color:#fff!important;left:1em}.pretty.p-switch.p-slim .state:before{height:.1em;background:#bdc3c7!important;top:calc(50% - .1em)}.pretty.p-switch.p-slim input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}.pretty.p-has-hover input:hover~.state:not(.p-is-hover){display:none}.pretty.p-has-hover input:hover~.state.p-is-hover,.pretty.p-has-hover input:hover~.state.p-is-hover .icon{display:block}.pretty.p-has-focus input:focus~.state label:before{box-shadow:0 0 3px 0 #bdc3c7}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state:not(.p-is-indeterminate){display:none}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate{display:block}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate .icon{display:block;opacity:1}.pretty.p-toggle .state.p-on{opacity:0;display:none}.pretty.p-toggle .state .icon,.pretty.p-toggle .state.p-off,.pretty.p-toggle .state .svg,.pretty.p-toggle .state img{opacity:1;display:inherit}.pretty.p-toggle .state.p-off .icon{color:#bdc3c7}.pretty.p-toggle input:checked~.state.p-on{opacity:1;display:inherit}.pretty.p-toggle input:checked~.state.p-off{opacity:0;display:none}.pretty.p-plain.p-toggle .state label:before,.pretty.p-plain input:checked~.state label:before{content:none}.pretty.p-plain.p-plain .icon{transform:scale(1.1)}.pretty.p-round .state label:after,.pretty.p-round .state label:before{border-radius:100%}.pretty.p-round.p-icon .state .icon{border-radius:100%;overflow:hidden}.pretty.p-round.p-icon .state .icon:before{transform:scale(.8)}.pretty.p-curve .state label:after,.pretty.p-curve .state label:before{border-radius:20%}.pretty.p-smooth .icon,.pretty.p-smooth .svg,.pretty.p-smooth label:after,.pretty.p-smooth label:before{transition:all .5s ease}.pretty.p-smooth input:checked+.state label:after{transition:all .3s ease}.pretty.p-smooth.p-default input:checked+.state label:after,.pretty.p-smooth input:checked+.state .icon,.pretty.p-smooth input:checked+.state .svg,.pretty.p-smooth input:checked+.state img{-webkit-animation:zoom .2s ease;animation:zoom .2s ease}.pretty.p-smooth.p-plain input:checked+.state label:before{content:\"\";transform:scale(0);transition:all .5s ease}.pretty.p-tada:not(.p-default) input:checked+.state .icon,.pretty.p-tada:not(.p-default) input:checked+.state .svg,.pretty.p-tada:not(.p-default) input:checked+.state img,.pretty.p-tada:not(.p-default) input:checked+.state label:after,.pretty.p-tada:not(.p-default) input:checked+.state label:before{-webkit-animation:tada .7s cubic-bezier(.25,.46,.45,.94) 1 alternate;animation:tada .7s cubic-bezier(.25,.46,.45,.94) 1 alternate;opacity:1}.pretty.p-jelly:not(.p-default) input:checked+.state .icon,.pretty.p-jelly:not(.p-default) input:checked+.state .svg,.pretty.p-jelly:not(.p-default) input:checked+.state img,.pretty.p-jelly:not(.p-default) input:checked+.state label:after,.pretty.p-jelly:not(.p-default) input:checked+.state label:before{-webkit-animation:jelly .7s cubic-bezier(.25,.46,.45,.94);animation:jelly .7s cubic-bezier(.25,.46,.45,.94);opacity:1}.pretty.p-jelly:not(.p-default) input:checked+.state label:before{border-color:transparent}.pretty.p-rotate:not(.p-default) input:checked~.state .icon,.pretty.p-rotate:not(.p-default) input:checked~.state .svg,.pretty.p-rotate:not(.p-default) input:checked~.state img,.pretty.p-rotate:not(.p-default) input:checked~.state label:after,.pretty.p-rotate:not(.p-default) input:checked~.state label:before{-webkit-animation:rotate .7s cubic-bezier(.25,.46,.45,.94);animation:rotate .7s cubic-bezier(.25,.46,.45,.94);opacity:1}.pretty.p-rotate:not(.p-default) input:checked~.state label:before{border-color:transparent}.pretty.p-pulse:not(.p-switch) input:checked~.state label:before{-webkit-animation:pulse 1s;animation:pulse 1s}.pretty input[disabled]{cursor:not-allowed;display:none}.pretty input[disabled]~*{opacity:.5}.pretty.p-locked input{display:none;cursor:not-allowed}.pretty.p-toggle .state.p-primary label:after,.pretty input:checked~.state.p-primary label:after{background-color:#428bca!important}.pretty.p-toggle .state.p-primary .icon,.pretty.p-toggle .state.p-primary .svg,.pretty input:checked~.state.p-primary .icon,.pretty input:checked~.state.p-primary .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-primary-o label:before,.pretty input:checked~.state.p-primary-o label:before{border-color:#428bca}.pretty.p-toggle .state.p-primary-o label:after,.pretty input:checked~.state.p-primary-o label:after{background-color:transparent}.pretty.p-toggle .state.p-primary-o .icon,.pretty.p-toggle .state.p-primary-o .svg,.pretty.p-toggle .state.p-primary-o svg,.pretty input:checked~.state.p-primary-o .icon,.pretty input:checked~.state.p-primary-o .svg,.pretty input:checked~.state.p-primary-o svg{color:#428bca;stroke:#428bca}.pretty.p-default:not(.p-fill) input:checked~.state.p-primary-o label:after{background-color:#428bca!important}.pretty.p-switch input:checked~.state.p-primary:before{border-color:#428bca}.pretty.p-switch.p-fill input:checked~.state.p-primary:before{background-color:#428bca!important}.pretty.p-switch.p-slim input:checked~.state.p-primary:before{border-color:#245682;background-color:#245682!important}.pretty.p-toggle .state.p-info label:after,.pretty input:checked~.state.p-info label:after{background-color:#5bc0de!important}.pretty.p-toggle .state.p-info .icon,.pretty.p-toggle .state.p-info .svg,.pretty input:checked~.state.p-info .icon,.pretty input:checked~.state.p-info .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-info-o label:before,.pretty input:checked~.state.p-info-o label:before{border-color:#5bc0de}.pretty.p-toggle .state.p-info-o label:after,.pretty input:checked~.state.p-info-o label:after{background-color:transparent}.pretty.p-toggle .state.p-info-o .icon,.pretty.p-toggle .state.p-info-o .svg,.pretty.p-toggle .state.p-info-o svg,.pretty input:checked~.state.p-info-o .icon,.pretty input:checked~.state.p-info-o .svg,.pretty input:checked~.state.p-info-o svg{color:#5bc0de;stroke:#5bc0de}.pretty.p-default:not(.p-fill) input:checked~.state.p-info-o label:after{background-color:#5bc0de!important}.pretty.p-switch input:checked~.state.p-info:before{border-color:#5bc0de}.pretty.p-switch.p-fill input:checked~.state.p-info:before{background-color:#5bc0de!important}.pretty.p-switch.p-slim input:checked~.state.p-info:before{border-color:#2390b0;background-color:#2390b0!important}.pretty.p-toggle .state.p-success label:after,.pretty input:checked~.state.p-success label:after{background-color:#5cb85c!important}.pretty.p-toggle .state.p-success .icon,.pretty.p-toggle .state.p-success .svg,.pretty input:checked~.state.p-success .icon,.pretty input:checked~.state.p-success .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-success-o label:before,.pretty input:checked~.state.p-success-o label:before{border-color:#5cb85c}.pretty.p-toggle .state.p-success-o label:after,.pretty input:checked~.state.p-success-o label:after{background-color:transparent}.pretty.p-toggle .state.p-success-o .icon,.pretty.p-toggle .state.p-success-o .svg,.pretty.p-toggle .state.p-success-o svg,.pretty input:checked~.state.p-success-o .icon,.pretty input:checked~.state.p-success-o .svg,.pretty input:checked~.state.p-success-o svg{color:#5cb85c;stroke:#5cb85c}.pretty.p-default:not(.p-fill) input:checked~.state.p-success-o label:after{background-color:#5cb85c!important}.pretty.p-switch input:checked~.state.p-success:before{border-color:#5cb85c}.pretty.p-switch.p-fill input:checked~.state.p-success:before{background-color:#5cb85c!important}.pretty.p-switch.p-slim input:checked~.state.p-success:before{border-color:#357935;background-color:#357935!important}.pretty.p-toggle .state.p-warning label:after,.pretty input:checked~.state.p-warning label:after{background-color:#f0ad4e!important}.pretty.p-toggle .state.p-warning .icon,.pretty.p-toggle .state.p-warning .svg,.pretty input:checked~.state.p-warning .icon,.pretty input:checked~.state.p-warning .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-warning-o label:before,.pretty input:checked~.state.p-warning-o label:before{border-color:#f0ad4e}.pretty.p-toggle .state.p-warning-o label:after,.pretty input:checked~.state.p-warning-o label:after{background-color:transparent}.pretty.p-toggle .state.p-warning-o .icon,.pretty.p-toggle .state.p-warning-o .svg,.pretty.p-toggle .state.p-warning-o svg,.pretty input:checked~.state.p-warning-o .icon,.pretty input:checked~.state.p-warning-o .svg,.pretty input:checked~.state.p-warning-o svg{color:#f0ad4e;stroke:#f0ad4e}.pretty.p-default:not(.p-fill) input:checked~.state.p-warning-o label:after{background-color:#f0ad4e!important}.pretty.p-switch input:checked~.state.p-warning:before{border-color:#f0ad4e}.pretty.p-switch.p-fill input:checked~.state.p-warning:before{background-color:#f0ad4e!important}.pretty.p-switch.p-slim input:checked~.state.p-warning:before{border-color:#c77c11;background-color:#c77c11!important}.pretty.p-toggle .state.p-danger label:after,.pretty input:checked~.state.p-danger label:after{background-color:#d9534f!important}.pretty.p-toggle .state.p-danger .icon,.pretty.p-toggle .state.p-danger .svg,.pretty input:checked~.state.p-danger .icon,.pretty input:checked~.state.p-danger .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-danger-o label:before,.pretty input:checked~.state.p-danger-o label:before{border-color:#d9534f}.pretty.p-toggle .state.p-danger-o label:after,.pretty input:checked~.state.p-danger-o label:after{background-color:transparent}.pretty.p-toggle .state.p-danger-o .icon,.pretty.p-toggle .state.p-danger-o .svg,.pretty.p-toggle .state.p-danger-o svg,.pretty input:checked~.state.p-danger-o .icon,.pretty input:checked~.state.p-danger-o .svg,.pretty input:checked~.state.p-danger-o svg{color:#d9534f;stroke:#d9534f}.pretty.p-default:not(.p-fill) input:checked~.state.p-danger-o label:after{background-color:#d9534f!important}.pretty.p-switch input:checked~.state.p-danger:before{border-color:#d9534f}.pretty.p-switch.p-fill input:checked~.state.p-danger:before{background-color:#d9534f!important}.pretty.p-switch.p-slim input:checked~.state.p-danger:before{border-color:#a02622;background-color:#a02622!important}.pretty.p-bigger .icon,.pretty.p-bigger .img,.pretty.p-bigger .svg,.pretty.p-bigger label:after,.pretty.p-bigger label:before{font-size:1.2em!important;top:calc(-135% + 1em)!important}.pretty.p-bigger label{text-indent:1.7em}@media print{.pretty .state .icon,.pretty .state:before,.pretty .state label:after,.pretty .state label:before{color-adjust:exact;-webkit-print-color-adjust:exact;print-color-adjust:exact}}body .pretty{margin:0;line-height:normal}body .pretty.p-smooth .icon,body .pretty.p-smooth .svg{transition:all .14s cubic-bezier(.55,0,.1,1)}body .pretty label a{position:relative;z-index:10}body .pretty:not(.p-switch):not(.p-radio),body .pretty:not(.p-switch):not(.p-radio) .state{height:18px}body .pretty:not(.p-switch):not(.p-radio) .state{display:flex;align-items:center}body .pretty:not(.p-switch):not(.p-radio).p-icon .state .icon{border-radius:4px;left:0;top:-1px;width:18px;height:18px}body .pretty:not(.p-switch):not(.p-radio).p-icon .state .icon,body .pretty:not(.p-switch):not(.p-radio).p-icon .state .icon:before{font-size:18px}body .pretty:not(.p-switch):not(.p-radio) .state label{min-width:18px;text-indent:26px;min-height:18px}body .pretty:not(.p-switch):not(.p-radio) .state label:after,body .pretty:not(.p-switch):not(.p-radio) .state label:before{width:18px;height:18px;top:0}body .pretty:not(.p-switch):not(.p-radio) .state label:before{background:transparent;border-radius:50%;transition:all .14s cubic-bezier(.55,0,.1,1)}body .pretty:not(.p-switch):not(.p-radio) .state label:after{background:#fff;border-radius:2px;border:2px solid rgba(0,0,0,.54);transition:all .24s cubic-bezier(.55,0,.1,1)}body .pretty:not(.p-switch):not(.p-radio) input:checked~.state label:after{border-color:#1976d2;background:#1976d2}body .pretty:not(.p-switch):not(.p-radio).p-custom input:checked~.state label:after{background:var(--color);border-color:var(--color)}body .pretty:not(.p-switch):not(.p-radio) input:checked[disabled]~.state label:after{border-color:#757575;background:#757575}body .pretty:not(.p-switch):not(.p-radio) input[disabled]~*{opacity:.6}body .pretty:not(.p-switch):not(.p-radio).p-icon input:checked~.state .icon{color:#fff}body .pretty:not(.p-switch):not(.p-radio) .state.p-is-indeterminate .icon{top:0;color:#fff}body .pretty:not(.p-switch):not(.p-radio) .state.p-is-indeterminate .icon,body .pretty:not(.p-switch):not(.p-radio) .state.p-is-indeterminate .icon:before{font-size:18px}body .pretty:not(.p-switch):not(.p-radio) .state.p-is-indeterminate label:after{border-color:#1976d2;background-color:#1976d2}body .pretty.p-radio,body .pretty.p-radio .state{min-height:20px}body .pretty.p-radio .state{display:flex;align-items:center;position:relative}body .pretty.p-radio .state:before{content:\"\";position:absolute;left:0;top:50%;width:20px;height:20px;border:2px solid rgba(0,0,0,.54);transition:all .24s cubic-bezier(.55,0,.1,1);border-radius:50%;box-sizing:border-box;margin-top:-10px;background:#fff}body .pretty.p-radio .state label{min-width:20px;text-indent:26px}body .pretty.p-radio .state label:before{background:transparent;border-radius:50%;border-color:transparent;transition:all .14s cubic-bezier(.55,0,.1,1);width:18px;height:18px;top:0}body .pretty.p-radio .state label:after{border-radius:50%;transition:all .24s cubic-bezier(.55,0,.1,1);width:10px;height:10px;top:50%;margin-top:-5px;left:5px}body .pretty.p-radio input:checked~.state:before{border-color:#1976d2}body .pretty.p-radio input:checked~.state label:after{background:#1976d2}body .pretty.p-radio input:checked[disabled]~.state:before{border-color:rgba(0,0,0,.54)}body .pretty.p-radio input:checked[disabled]~.state label:after{background:rgba(0,0,0,.54)}body .pretty.p-radio input[disabled]~*{opacity:.6}body .pretty.p-switch .state{height:26px}body .pretty.p-switch .state:before{border-radius:20px;height:14px;width:36px;background-color:rgba(0,0,0,.26);border:none;top:50%;margin-top:-7px;left:2px;transition:all .14s cubic-bezier(.55,0,.1,1)}body .pretty.p-switch .state label{text-indent:48px;line-height:28px;height:28px;min-width:38px}body .pretty.p-switch .state label:after,body .pretty.p-switch .state label:before{width:20px;height:20px;top:3px;box-shadow:0 1px 4px rgba(0,0,0,.55);transition:all .14s cubic-bezier(.55,0,.1,1);border:none;transform:none}body .pretty.p-switch .state label:after{background-color:#fff!important}body .pretty.p-switch input:checked~.state:before{background-color:#92c2f2}body .pretty.p-switch input:checked~.state label:after{left:20px;background-color:#1976d2!important}body .pretty.p-switch input:checked~.state.p-primary:before{background-color:#5cf1ff}body .pretty.p-switch input:checked~.state.p-primary label:after{background-color:#00838f!important}body .pretty.p-switch input:checked~.state.p-danger:before{background-color:#f6bebd}body .pretty.p-switch input:checked~.state.p-danger label:after{background-color:#e53935!important}body .pretty.p-switch input:checked~.state.p-success:before{background-color:#c8e1ad}body .pretty.p-switch input:checked~.state.p-success label:after{background-color:#7cb342!important}body .pretty.p-switch input:checked~.state.p-warning:before{background-color:#ffe199}body .pretty.p-switch input:checked~.state.p-warning label:after{background-color:#ffb300!important}body .pretty.uk-flex{display:flex}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/notes.vue?vue&type=template&id=1c7bd90a&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "uk-flex uk-flex-column",
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_c('client-only', [_c('div', {
    staticClass: "sc-top-bar",
    attrs: {
      "id": "sc-page-top-bar",
      "data-uk-sticky": "offset:48; show-on-up: true; animation: uk-animation-slide-top-medium"
    }
  }, [_c('div', {
    staticClass: "sc-top-bar-content uk-flex uk-flex-1"
  }, [_c('h1', {
    staticClass: "sc-top-bar-title uk-text-uppercase uk-flex-1"
  }, [_vm._v("\n\t\t\t\t\t\tNotes\n\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "sc-actions uk-margin-left"
  }, [_c('a', {
    staticClass: "sc-actions-icon mdi mdi-settings-outline",
    attrs: {
      "href": "javascript:void(0)"
    }
  })])])])]), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"filter-wrapper\">", "</div>", [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_vm._ssrNode("<div data-uk-grid class=\"uk-grid sc-js-sticky-parent\">", "</div>", [_vm._ssrNode("<div class=\"uk-width-1-6@l uk-width-1-4@m uk-visible@m\">", "</div>", [_c('client-only', [_c('ul', {
    directives: [{
      name: "sc-sticky",
      rawName: "v-sc-sticky",
      value: _vm.sideMenu,
      expression: "sideMenu"
    }],
    attrs: {
      "data-uk-accordion": "multiple: true"
    }
  }, [_c('li', {
    staticClass: "uk-open"
  }, [_c('a', {
    staticClass: "uk-accordion-title",
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "mdi mdi-folder-outline"
  }), _vm._v("Folders\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "uk-accordion-content"
  }, [_c('ul', {
    staticClass: "uk-list"
  }, [_c('li', {
    staticClass: "sc-js-filter-clear",
    attrs: {
      "data-uk-filter-control": "filter: [data-folder]; group: folder"
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tAll folders\n\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _vm._l(_vm.folders, function (folder) {
    return _c('li', {
      key: folder,
      attrs: {
        "data-uk-filter-control": 'filter: [data-folder=\'' + _vm.processName(folder) + '\']; group: folder'
      }
    }, [_c('a', {
      attrs: {
        "href": "javascript:void(0)"
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(folder) + "\n\t\t\t\t\t\t\t\t\t\t\t\t")])]);
  })], 2)])]), _vm._v(" "), _c('li', {
    staticClass: "uk-open"
  }, [_c('a', {
    staticClass: "uk-accordion-title",
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "mdi mdi-label-outline"
  }), _vm._v("Tags\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "uk-accordion-content"
  }, [_c('ul', {
    staticClass: "uk-list"
  }, [_c('li', {
    staticClass: "sc-js-filter-clear",
    attrs: {
      "data-uk-filter-control": "filter: .sc-filter-label; group: label"
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('span', {
    staticClass: "sc-color-label md-bg-white sc-color-label-clear"
  }), _vm._v(" All tags\n\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _vm._l(_vm.labels, function (label) {
    return _c('li', {
      key: label.name,
      attrs: {
        "data-uk-filter-control": 'filter: .sc-filter-label-' + _vm.processName(label.name) + '; group: label'
      }
    }, [_c('a', {
      attrs: {
        "href": "javascript:void(0)"
      }
    }, [_c('span', {
      staticClass: "sc-color-label",
      class: ['md-bg-' + label.color]
    }), _vm._v(" " + _vm._s(label.name) + "\n\t\t\t\t\t\t\t\t\t\t\t\t")])]);
  })], 2)])])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-flex-1\">", "</div>", [_vm._ssrNode("<ul id=\"sc-notes\" data-uk-grid=\"masonry: true\" class=\"sc-notes uk-child-width-1-3@l uk-child-width-1-4@xl uk-grid uk-flex-top uk-flex-wrap-top\">", "</ul>", _vm._l(_vm.notes, function (note) {
    return _vm._ssrNode("<li" + _vm._ssrAttr("data-folder", note.folder) + _vm._ssrClass("sc-filter-label", [_vm.filterClass(note.labels)]) + ">", "</li>", [_c('transition', {
      attrs: {
        "name": "scale-up"
      }
    }, [_c('ScCard', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: note.visible,
        expression: "note.visible"
      }],
      staticClass: "sc-el-clickable",
      class: [_vm.noteBgColor(note.cardColor), {
        'sc-theme-dark-inverse': note.cardColor
      }],
      nativeOn: {
        "click": function ($event) {
          return _vm.showNote($event, note.id);
        }
      }
    }, [_c('ScCardHeader', [_c('div', {
      staticClass: "uk-flex uk-flex-top"
    }, [_c('div', {
      staticClass: "uk-flex-1"
    }, [_c('ScCardTitle', [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(note.title) + "\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: note.dueDate,
        expression: "note.dueDate"
      }],
      staticClass: "uk-text-muted uk-text-small"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(note.dueDate) + "\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])], 1), _vm._v(" "), _c('div', {
      staticClass: "sc-actions uk-margin-left"
    }, [_c('a', {
      staticClass: "sc-actions-icon mdi mdi-pencil sc-icon-22",
      attrs: {
        "href": "javascript:void(0)"
      }
    }), _vm._v(" "), _c('a', {
      staticClass: "sc-actions-icon mdi mdi-close",
      attrs: {
        "href": "javascript:void(0)"
      },
      on: {
        "click": function ($event) {
          $event.preventDefault();
          return _vm.hideNote(note);
        }
      }
    })])])]), _vm._v(" "), _c('ScCardBody', [_c('p', {
      staticClass: "uk-margin-remove"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("truncate")(_vm._f("stripHTML")(note.body), 100)) + "\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('ul', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: note.checklist,
        expression: "note.checklist"
      }],
      staticClass: "uk-margin-top uk-list sc-el-clickable-exclude"
    }, _vm._l(note.checklist, function (item) {
      return _c('li', {
        key: item.id,
        staticClass: "uk-width-auto"
      }, [_c('PrettyCheck', {
        staticClass: "p-icon",
        model: {
          value: item.checked,
          callback: function ($$v) {
            _vm.$set(item, "checked", $$v);
          },
          expression: "item.checked"
        }
      }, [_c('i', {
        staticClass: "icon mdi mdi-check",
        attrs: {
          "slot": "extra"
        },
        slot: "extra"
      }), _vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(item.label) + "\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])], 1);
    }), 0), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: note.labels,
        expression: "note.labels"
      }],
      staticClass: "uk-flex uk-flex-middle"
    }, _vm._l(note.labels, function (label) {
      return _c('span', {
        key: label,
        staticClass: "mdi mdi-label sc-icon-24",
        class: ['md-color-' + _vm.labelColor(label)]
      });
    }), 0)])], 1)], 1)], 1);
  }), 0)])], 2)])]), _vm._ssrNode(" <div class=\"sc-fab-page-wrapper\"><a href=\"javascript:void(0)\" class=\"sc-fab sc-fab-large sc-fab-secondary\"><i class=\"mdi mdi-plus\"></i></a></div> "), _vm._ssrNode("<div id=\"sc-note-modal\" data-uk-modal class=\"uk-flex-top uk-modal\">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("uk-modal-dialog uk-modal-body uk-margin-auto-vertical", [_vm.noteBgColor(_vm.singleNote.cardColor)]) + ">", "</div>", [_vm._ssrNode("<button type=\"button\" data-uk-close class=\"uk-modal-close-default\"></button> <h2 class=\"uk-modal-title uk-margin-remove\">" + _vm._ssrEscape("\n\t\t\t\t\t" + _vm._s(_vm.singleNote.title) + "\n\t\t\t\t") + "</h2> <span class=\"uk-text-muted uk-text-small\"" + _vm._ssrStyle(null, null, {
    display: _vm.singleNote.dueDate ? '' : 'none'
  }) + ">" + _vm._ssrEscape("\n\t\t\t\t\t" + _vm._s(_vm.singleNote.dueDate) + "\n\t\t\t\t") + "</span> <div class=\"uk-flex uk-flex-middle\"" + _vm._ssrStyle(null, null, {
    display: _vm.singleNote.labels ? '' : 'none'
  }) + ">" + _vm._ssrList(_vm.singleNote.labels, function (label) {
    return "<span" + _vm._ssrClass("mdi mdi-label sc-icon-24", ['md-color-' + _vm.labelColor(label)]) + "></span>";
  }) + "</div> <p class=\"uk-margin-top\">" + _vm._s(_vm.singleNote.body) + "</p> "), _vm._ssrNode("<ul class=\"uk-margin-top uk-list\"" + _vm._ssrStyle(null, null, {
    display: _vm.singleNote.checklist ? '' : 'none'
  }) + ">", "</ul>", _vm._l(_vm.singleNote.checklist, function (item) {
    return _vm._ssrNode("<li>", "</li>", [_c('PrettyCheck', {
      staticClass: "p-icon",
      model: {
        value: item.checked,
        callback: function ($$v) {
          _vm.$set(item, "checked", $$v);
        },
        expression: "item.checked"
      }
    }, [_c('i', {
      staticClass: "icon mdi mdi-check",
      attrs: {
        "slot": "extra"
      },
      slot: "extra"
    }), _vm._v("\n\t\t\t\t\t\t\t" + _vm._s(item.label) + "\n\t\t\t\t\t\t")])], 1);
  }), 0)], 2)])], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/pages/notes.vue?vue&type=template&id=1c7bd90a&

// EXTERNAL MODULE: external "pretty-checkbox-vue/check"
var check_ = __webpack_require__(103);
var check_default = /*#__PURE__*/__webpack_require__.n(check_);

// EXTERNAL MODULE: ./plugins/stickyKit.js
var stickyKit = __webpack_require__(291);

// EXTERNAL MODULE: ./assets/js/utils.js + 5 modules
var utils = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/notes.vue?vue&type=script&lang=js&
const notes = __webpack_require__(625);




const {
  closest
} = utils["b" /* scDom */];
/* harmony default export */ var notesvue_type_script_lang_js_ = ({
  name: 'PagesNotes',
  components: {
    PrettyCheck: check_default.a
  },
  data: () => ({
    sideMenu: {
      options: {
        'offset_top': 'inPlace'
      }
    },
    labels: [{
      name: 'Tag 1',
      color: 'blue-400'
    }, {
      name: 'Tag 2',
      color: 'grey-400'
    }, {
      name: 'Tag 3',
      color: 'amber-400'
    }, {
      name: 'Tag 4',
      color: 'red-400'
    }],
    folders: ['Work', 'To Do', 'Important', 'Personal'],
    notes: notes,
    noteModal: null,
    singleNote: {},
    filterOptions: null
  }),

  mounted() {
    this.$nextTick(() => {
      UIkit.filter('#filter-wrapper', {
        target: '.sc-notes'
      }); // modal

      this.noteModal = UIkit.modal(document.getElementById('sc-note-modal'));
    });
  },

  methods: {
    showNote(e, id) {
      const note = this.notes.filter(obj => {
        return obj.id === id;
      });
      this.singleNote = note[0];
      var excludedEl = closest(e.target, function (el) {
        return el.className ? el.className.includes('sc-actions') || el.className.includes('uk-list') : null;
      });

      if (!excludedEl) {
        this.noteModal.show();
      }
    },

    filterClass(labels) {
      let classes = '';
      labels.forEach(k => {
        classes += 'sc-filter-label-' + k + ' ';
      });
      return classes;
    },

    noteBgColor(color) {
      return color ? 'md-bg-' + color + '-50' : '';
    },

    processName(label) {
      return label.toLowerCase().replace(/\s/g, '');
    },

    labelColor(label) {
      let _label = this.labels.filter(obj => {
        let name = obj.name.toLowerCase().replace(/\s/g, '');
        return name === label;
      });

      return _label[0].color;
    },

    hideNote(note) {
      note.visible = false;
      setTimeout(() => {
        let index = this.notes.map(function (item) {
          return item.id;
        }).indexOf(note.id);
        this.notes.splice(index, 1);
      }, 500);
    }

  }
});
// CONCATENATED MODULE: ./pages/pages/notes.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_notesvue_type_script_lang_js_ = (notesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/pages/notes.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(626)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_notesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e157ac3c"
  
)

/* harmony default export */ var pages_notes = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=notes.js.map