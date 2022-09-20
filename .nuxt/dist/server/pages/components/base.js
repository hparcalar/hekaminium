exports.ids = [9];
exports.modules = {

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
// highlight.js


var hljs = __webpack_require__(101);

__webpack_require__(183);

hljs.registerLanguage('xml', __webpack_require__(102));
hljs.registerLanguage('sql', __webpack_require__(103));
hljs.registerLanguage('javascript', __webpack_require__(104));
vue__WEBPACK_IMPORTED_MODULE_0___default.a.directive('highlightjs', {
  deep: true,
  bind: function bind(el, binding) {
    // on first bind, highlight all targets
    var targets = el.querySelectorAll('code');
    var target;
    var i;

    for (i = 0; i < targets.length; i += 1) {
      target = targets[i];

      if (typeof binding.value === 'string') {
        // if a value is directly assigned to the directive, use this
        // instead of the element content.
        target.textContent = binding.value;
      }

      hljs.highlightBlock(el);
    }
  },
  componentUpdated: function componentUpdated(el, binding) {
    // after an update, re-fill the content and then highlight
    var targets = el.querySelectorAll('code');
    var target;
    var i;

    for (i = 0; i < targets.length; i += 1) {
      target = targets[i];

      if (typeof binding.value === 'string') {
        target.textContent = binding.value;
        hljs.highlightBlock(el);
      }
    }
  }
});

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(184);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(7).default("0efaf680", content, true)

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hljs{display:block;overflow-x:auto;padding:.5em;color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/components/base.vue?vue&type=template&id=fcc13828&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_vm._ssrNode("<div data-uk-grid class=\"uk-child-width-1-2@l uk-grid\">", "</div>", [_vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardTitle', [_vm._v("\n\t\t\t\t\t\t\tHeadings\n\t\t\t\t\t\t")]), _vm._v(" "), _c('ScCardBody', [_c('h1', [_vm._v("h1 Heading 1")]), _vm._v(" "), _c('h2', [_vm._v("h2 Heading 2")]), _vm._v(" "), _c('h3', [_vm._v("h3 Heading 3")]), _vm._v(" "), _c('h4', [_vm._v("h4 Heading 4")]), _vm._v(" "), _c('h5', [_vm._v("h5 Heading 5")]), _vm._v(" "), _c('h6', [_vm._v("h6 Heading 6")]), _vm._v(" "), _c('div', {
    staticClass: "uk-margin-large"
  }, [_c('h4', {
    staticClass: "uk-heading-line"
  }, [_c('span', [_vm._v("Heading line")])]), _vm._v(" "), _c('h4', {
    staticClass: "uk-heading-line uk-text-center"
  }, [_c('span', [_vm._v("Heading line")])]), _vm._v(" "), _c('h4', {
    staticClass: "uk-heading-line uk-text-right"
  }, [_c('span', [_vm._v("Heading line")])]), _vm._v(" "), _c('h4', {
    staticClass: "uk-heading-divider"
  }, [_c('span', [_vm._v("Heading divider")])])])])], 1), _vm._ssrNode(" "), _c('ScCard', {
    staticClass: "uk-margin-top"
  }, [_c('ScCardTitle', [_vm._v("\n\t\t\t\t\t\t\tPreformatted text\n\t\t\t\t\t\t")]), _vm._v(" "), _c('ScCardBody', [_c('pre', {
    directives: [{
      name: "highlightjs",
      rawName: "v-highlightjs"
    }]
  }, [_c('code', [_vm._v("<!-- HTML -->\n------------------------------\n<!DOCTYPE html>\n<title>Title</title>\n\n<style>body {width: 500px;}</style>\n\n<script type=\"application/javascript\">\n\tfunction $init() {return true;}\n</script>\n\n<body>\n\t<p checked class=\"title\" id='title'>Title</p>\n\t<!-- here goes the rest of the page -->\n</body>")])]), _vm._v(" "), _c('pre', {
    directives: [{
      name: "highlightjs",
      rawName: "v-highlightjs"
    }]
  }, [_c('code', [_vm._v("/* JS */\n------------------------------\nfunction $initHighlight(block, cls) {\n\ttry {\n\t\tif (cls.search(/\\bno\\-highlight\\b/) != -1)\n\t\treturn process(block, true, 0x0F) +\n\t\t` class=\"${cls}\"`;\n\t} catch (e) {\n\t\t/* handle exception */\n\t}\n\tfor (var i = 0 / 2; i < classes.length; i++) {\n\t\tif (checkCondition(classes[i]) === undefined)\n\t\tconsole.log('undefined');\n\t}\n}\n\nexport  $initHighlight;")])]), _vm._v(" "), _c('pre', {
    directives: [{
      name: "highlightjs",
      rawName: "v-highlightjs"
    }]
  }, [_c('code', [_vm._v("/* SQL */\n------------------------------\nCREATE TABLE \"topic\" (\n\t\"id\" serial NOT NULL PRIMARY KEY,\n\t\"forum_id\" integer NOT NULL,\n\t\"subject\" varchar(255) NOT NULL\n);\nALTER TABLE \"topic\"\nADD CONSTRAINT forum_id FOREIGN KEY (\"forum_id\")\nREFERENCES \"forum\" (\"id\");\n\n-- Initials\ninsert into \"topic\" (\"forum_id\", \"subject\")\nvalues (2, 'D''artagnian');")])])])], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardTitle', [_vm._v("\n\t\t\t\t\t\t\tText-level semantics\n\t\t\t\t\t\t")]), _vm._v(" "), _c('ScCardBody', [_c('table', {
    staticClass: "uk-table uk-table-small"
  }, [_c('thead', [_c('tr', [_c('th', {
    staticClass: "uk-table-shrink"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\tElement\n\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('th', [_vm._v("Description")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_c('code', [_vm._v("<abbr>")])]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\tDefine an abbreviation using the "), _c('abbr', {
    attrs: {
      "title": "Title Text"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tabbr element with a title\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(".\n\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("<b>")])]), _vm._v(" "), _c('td', [_vm._v("Create bold text with the "), _c('b', [_vm._v("b element")]), _vm._v(".")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("<cite>")])]), _vm._v(" "), _c('td', [_vm._v("Define the title of a work with the "), _c('cite', [_vm._v("cite element")]), _vm._v(".")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("<code>")])]), _vm._v(" "), _c('td', [_vm._v("Define inline code snippets using the "), _c('code', [_vm._v("code element")]), _vm._v(".")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("<del>")])]), _vm._v(" "), _c('td', [_vm._v("Mark document changes as deleted text using the "), _c('del', [_vm._v("del element")]), _vm._v(".")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("<dfn>")])]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\tCreate a definition term using the "), _c('dfn', {
    attrs: {
      "title": "Defines a definition term"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tdfn element with a title\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(".\n\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("<em>")])]), _vm._v(" "), _c('td', [_vm._v("Emphasize text using the "), _c('em', [_vm._v("em element")]), _vm._v(".")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("<i>")])]), _vm._v(" "), _c('td', [_vm._v("Set off part of a text by using the "), _c('i', [_vm._v("i element")]), _vm._v(".")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("<ins>")])]), _vm._v(" "), _c('td', [_vm._v("Mark document changes as inserted text using the "), _c('ins', [_vm._v("ins element")]), _vm._v(".")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("<kbd>")])]), _vm._v(" "), _c('td', [_vm._v("Use a "), _c('kbd', [_vm._v("keybord input element")]), _vm._v(" to display input in the browser's default monospace font.")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("<mark>")])]), _vm._v(" "), _c('td', [_vm._v("Highlight text with no semantic meaning using the "), _c('mark', [_vm._v("mark element")]), _vm._v(".")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("<q>")])]), _vm._v(" "), _c('td', [_vm._v("Define inline quotations using a "), _c('q', [_vm._v("q element "), _c('q', [_vm._v("inside")]), _vm._v(" a q element")]), _vm._v(".")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("<s>")])]), _vm._v(" "), _c('td', [_vm._v("Define text with a strikethrough using the "), _c('s', [_vm._v("s element")]), _vm._v(".")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("<samp>")])]), _vm._v(" "), _c('td', [_vm._v("Define sample output with a "), _c('samp', [_vm._v("samp element")]), _vm._v(".")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("<small>")])]), _vm._v(" "), _c('td', [_vm._v("De-emphasize text for small print using the "), _c('small', [_vm._v("small element")]), _vm._v(".")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("<span>")])]), _vm._v(" "), _c('td', [_vm._v("Define an inline-container using the "), _c('span', [_vm._v("span element")]), _vm._v(".")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("<strong>")])]), _vm._v(" "), _c('td', [_vm._v("Imply extra importance using the "), _c('strong', [_vm._v("strong element")]), _vm._v(".")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("<sub>")])]), _vm._v(" "), _c('td', [_vm._v("Define subscript text using the "), _c('sub', [_vm._v("sub element.")]), _vm._v(".")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("<sup>")])]), _vm._v(" "), _c('td', [_vm._v("Define superscript text using the "), _c('sup', [_vm._v("sup element.")])])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("<u>")])]), _vm._v(" "), _c('td', [_vm._v("Define underlined text using the "), _c('u', [_vm._v("u element")]), _vm._v(".")])]), _vm._v(" "), _c('tr', [_c('td', [_c('code', [_vm._v("<var>")])]), _vm._v(" "), _c('td', [_vm._v("Define a variable using the "), _c('var', [_vm._v("var element")]), _vm._v(".")])])])])])], 1)], 1)], 2)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/components/base.vue?vue&type=template&id=fcc13828&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/components/base.vue?vue&type=script&lang=js&
__webpack_require__(182);

/* harmony default export */ var basevue_type_script_lang_js_ = ({
  name: 'ComponentsBase'
});
// CONCATENATED MODULE: ./pages/components/base.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_basevue_type_script_lang_js_ = (basevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/components/base.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_basevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "925d4154"
  
)

/* harmony default export */ var base = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=base.js.map