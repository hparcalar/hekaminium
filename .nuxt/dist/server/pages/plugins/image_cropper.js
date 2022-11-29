exports.ids = [127];
exports.modules = {

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rachel-park-366508-unsplash.784fc00.jpg";

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rachel-park-366508-unsplash@2x.2283064.jpg";

/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(668);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("fc5d12e2", content, true, context)
};

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_image_cropper_vue_vue_type_style_index_0_id_3ac128fd_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(497);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_image_cropper_vue_vue_type_style_index_0_id_3ac128fd_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_image_cropper_vue_vue_type_style_index_0_id_3ac128fd_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_image_cropper_vue_vue_type_style_index_0_id_3ac128fd_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_image_cropper_vue_vue_type_style_index_0_id_3ac128fd_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.cropper-container img{display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline-color:rgba(51,153,255,.75);outline:1px solid #39f;overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:33.33333%;left:0;top:33.33333%;width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:33.33333%;top:0;width:33.33333%}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:after,.cropper-center:before{background-color:#eee;content:\" \";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width:768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width:992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width:1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:\" \";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC\")}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}.sc-cropper-preview{overflow:hidden;max-width:100%}.sc-cropper-preview-lg{width:264px;height:148px}.sc-cropper-preview-md{width:140px;height:78px}.sc-cropper-preview-sm{width:68px;height:48px}.sc-cropper-preview-xs{width:36px;height:36px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/plugins/image_cropper.vue?vue&type=template&id=3ac128fd&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_vm._ssrNode("<div data-uk-grid class=\"uk-grid\">", "</div>", [_vm._ssrNode("<div class=\"uk-width-2-3@l\">", "</div>", [_c('ScCard', [_c('ScCardBody', [_c('div', {
    attrs: {
      "id": "sc-cropper-container"
    }
  }, [_c('client-only', [_c('VueCropper', {
    ref: "cropper",
    attrs: {
      "src": _vm.imgSrc,
      "alt": "Source Image",
      "drag-mode": _vm.dragMode,
      "cropend": _vm.cropImage,
      "ready": _vm.cropImage
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "sc-cropper-buttons uk-margin-top"
  }, [_c('div', {
    staticClass: "uk-flex uk-flex-wrap uk-flex-top",
    attrs: {
      "data-uk-margin": ""
    }
  }, [_c('div', {
    staticClass: "uk-button-group uk-margin-small-right"
  }, [_c('button', {
    staticClass: "sc-button sc-button-primary sc-button-icon sc-button-radio",
    class: {
      'uk-active': _vm.dragMode === 'move'
    },
    attrs: {
      "type": "button",
      "title": "Move"
    },
    on: {
      "click": function ($event) {
        return _vm.changeDragMode('move');
      }
    }
  }, [_c('span', {
    staticClass: "mdi mdi-arrow-all"
  })]), _vm._v(" "), _c('button', {
    staticClass: "sc-button sc-button-primary sc-button-icon sc-button-radio",
    class: {
      'uk-active': _vm.dragMode === 'crop'
    },
    attrs: {
      "type": "button",
      "title": "Crop"
    },
    on: {
      "click": function ($event) {
        return _vm.changeDragMode('crop');
      }
    }
  }, [_c('span', {
    staticClass: "mdi mdi-crop"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "uk-button-group uk-margin-small-right"
  }, [_c('button', {
    staticClass: "sc-button sc-button-primary sc-button-icon",
    attrs: {
      "type": "button",
      "title": "Zoom In"
    },
    on: {
      "click": function ($event) {
        return _vm.zoom(0.1);
      }
    }
  }, [_c('span', {
    staticClass: "mdi mdi-magnify-plus-outline"
  })]), _vm._v(" "), _c('button', {
    staticClass: "sc-button sc-button-primary sc-button-icon",
    attrs: {
      "type": "button",
      "title": "Zoom Out"
    },
    on: {
      "click": function ($event) {
        return _vm.zoom(-0.1);
      }
    }
  }, [_c('span', {
    staticClass: "mdi mdi-magnify-minus-outline"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "uk-button-group sc-buttons-stacked@s uk-margin-small-right"
  }, [_c('button', {
    staticClass: "sc-button sc-button-primary sc-button-icon",
    attrs: {
      "type": "button",
      "title": "Move Left"
    },
    on: {
      "click": function ($event) {
        return _vm.move(-10, 0);
      }
    }
  }, [_c('span', {
    staticClass: "mdi mdi-arrow-left"
  })]), _vm._v(" "), _c('button', {
    staticClass: "sc-button sc-button-primary sc-button-icon",
    attrs: {
      "type": "button",
      "title": "Move Right"
    },
    on: {
      "click": function ($event) {
        return _vm.move(10, 0);
      }
    }
  }, [_c('span', {
    staticClass: "mdi mdi-arrow-right"
  })]), _vm._v(" "), _c('button', {
    staticClass: "sc-button sc-button-primary sc-button-icon",
    attrs: {
      "type": "button",
      "title": "Move Up"
    },
    on: {
      "click": function ($event) {
        return _vm.move(0, -10);
      }
    }
  }, [_c('span', {
    staticClass: "mdi mdi-arrow-up"
  })]), _vm._v(" "), _c('button', {
    staticClass: "sc-button sc-button-primary sc-button-icon",
    attrs: {
      "type": "button",
      "title": "Move Down"
    },
    on: {
      "click": function ($event) {
        return _vm.move(0, 10);
      }
    }
  }, [_c('span', {
    staticClass: "mdi mdi-arrow-down"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "uk-button-group uk-margin-small-right"
  }, [_c('button', {
    staticClass: "sc-button sc-button-primary sc-button-icon",
    attrs: {
      "type": "button",
      "title": "Rotate Left"
    },
    on: {
      "click": function ($event) {
        return _vm.rotate(-45);
      }
    }
  }, [_c('span', {
    staticClass: "mdi mdi-rotate-left"
  })]), _vm._v(" "), _c('button', {
    staticClass: "sc-button sc-button-primary sc-button-icon",
    attrs: {
      "type": "button",
      "title": "Rotate Right"
    },
    on: {
      "click": function ($event) {
        return _vm.rotate(45);
      }
    }
  }, [_c('span', {
    staticClass: "mdi mdi-rotate-right"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "uk-button-group uk-margin-small-right"
  }, [_c('button', {
    staticClass: "sc-button sc-button-primary sc-button-icon",
    attrs: {
      "type": "button",
      "title": "Flip Horizontal"
    },
    on: {
      "click": function ($event) {
        return _vm.scaleX(_vm.scaleXVal);
      }
    }
  }, [_c('span', {
    staticClass: "mdi mdi-swap-horizontal"
  })]), _vm._v(" "), _c('button', {
    staticClass: "sc-button sc-button-primary sc-button-icon",
    attrs: {
      "type": "button",
      "title": "Flip Vertical"
    },
    on: {
      "click": function ($event) {
        return _vm.scaleY(_vm.scaleYVal);
      }
    }
  }, [_c('span', {
    staticClass: "mdi mdi-swap-vertical"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "uk-button-group uk-margin-small-right"
  }, [_c('button', {
    staticClass: "sc-button sc-button-primary sc-button-icon",
    attrs: {
      "type": "button",
      "title": "Crop"
    },
    on: {
      "click": _vm.initCrop
    }
  }, [_c('span', {
    staticClass: "mdi mdi-check"
  })]), _vm._v(" "), _c('button', {
    staticClass: "sc-button sc-button-primary sc-button-icon",
    attrs: {
      "type": "button",
      "title": "Clear"
    },
    on: {
      "click": _vm.clear
    }
  }, [_c('span', {
    staticClass: "mdi mdi-close"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "uk-button-group uk-margin-small-right"
  }, [_c('button', {
    staticClass: "sc-button sc-button-primary sc-button-icon sc-button-radio",
    class: {
      'uk-active': _vm.disabled
    },
    attrs: {
      "type": "button",
      "title": "Disable"
    },
    on: {
      "click": _vm.disable
    }
  }, [_c('span', {
    staticClass: "mdi mdi-lock-outline"
  })]), _vm._v(" "), _c('button', {
    staticClass: "sc-button sc-button-primary sc-button-icon sc-button-radio",
    class: {
      'uk-active': !_vm.disabled
    },
    attrs: {
      "type": "button",
      "title": "Enable"
    },
    on: {
      "click": _vm.enable
    }
  }, [_c('span', {
    staticClass: "mdi mdi-lock-open-outline"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "uk-button-group"
  }, [_c('button', {
    staticClass: "sc-button sc-button-primary sc-button-icon",
    attrs: {
      "type": "button",
      "title": "Reset"
    },
    on: {
      "click": _vm.reset
    }
  }, [_c('span', {
    staticClass: "mdi mdi-refresh"
  })]), _vm._v(" "), _c('button', {
    staticClass: "sc-button sc-button-primary sc-button-icon",
    attrs: {
      "type": "button",
      "title": "Destroy"
    },
    on: {
      "click": _vm.destroy
    }
  }, [_c('span', {
    staticClass: "mdi mdi-power"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "uk-flex uk-margin-top"
  }, [_c('div', {
    staticClass: "uk-button-group sc-buttons-stacked@m"
  }, [_c('button', {
    staticClass: "sc-button sc-button-success",
    attrs: {
      "type": "button",
      "title": "Get Cropped Canvas"
    },
    on: {
      "click": function ($event) {
        return _vm.getCroppedCanvas('full');
      }
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\tGet Cropped Canvas\r\n\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('button', {
    staticClass: "sc-button sc-button-success",
    attrs: {
      "type": "button",
      "title": "Get 320x180 Canvas"
    },
    on: {
      "click": function ($event) {
        return _vm.getCroppedCanvas('medium');
      }
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t320x180\r\n\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('button', {
    staticClass: "sc-button sc-button-success",
    attrs: {
      "type": "button",
      "title": "Get 240x100 Canvas"
    },
    on: {
      "click": function ($event) {
        return _vm.getCroppedCanvas('small');
      }
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t240x100\r\n\t\t\t\t\t\t\t\t\t\t")])])])])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"uk-width-1-3@l\">", "</div>", [_c('ScCard', [_c('ScCardBody', [_c('p', {
    staticClass: "uk-margin-small-bottom"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\tPreview:\r\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "sc-cropper-preview sc-cropper-preview-lg"
  }, [_c('img', {
    staticStyle: {
      "max-height": "150px"
    },
    attrs: {
      "src": _vm.cropImg,
      "alt": "Cropped Image"
    }
  })])]), _vm._v(" "), _c('p', {
    staticClass: "uk-margin-top uk-margin-small-bottom"
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\tAspect Ratio:\r\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "uk-button-group sc-buttons-stacked@m"
  }, [_c('button', {
    staticClass: "sc-button sc-button-primary sc-button-radio",
    class: {
      'uk-active': _vm.aspectRatio === '16/9'
    },
    attrs: {
      "type": "button",
      "title": "aspectRatio: 16/9"
    },
    on: {
      "click": function ($event) {
        return _vm.setAspectRatio(1.7777777777777777, '16/9');
      }
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t16:9\r\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('button', {
    staticClass: "sc-button sc-button-primary sc-button-radio",
    class: {
      'uk-active': _vm.aspectRatio === '4/3'
    },
    attrs: {
      "type": "button",
      "title": "aspectRatio: 4/3"
    },
    on: {
      "click": function ($event) {
        return _vm.setAspectRatio(1.3333333333333333, '4/3');
      }
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t4:3\r\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('button', {
    staticClass: "sc-button sc-button-primary sc-button-radio",
    class: {
      'uk-active': _vm.aspectRatio === '1/1'
    },
    attrs: {
      "type": "button",
      "title": "aspectRatio: 1/1"
    },
    on: {
      "click": function ($event) {
        return _vm.setAspectRatio(1, '1/1');
      }
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t1:1\r\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('button', {
    staticClass: "sc-button sc-button-primary sc-button-radio",
    class: {
      'uk-active': _vm.aspectRatio === '2/3'
    },
    attrs: {
      "type": "button",
      "title": "aspectRatio: 2/3"
    },
    on: {
      "click": function ($event) {
        return _vm.setAspectRatio(0.6666666666666666, '2/3');
      }
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t2:3\r\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('button', {
    staticClass: "sc-button sc-button-primary sc-button-radio",
    class: {
      'uk-active': _vm.aspectRatio === 'NaN'
    },
    attrs: {
      "type": "button",
      "title": "aspectRatio: NaN"
    },
    on: {
      "click": function ($event) {
        return _vm.setAspectRatio(NaN, 'NaN');
      }
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tFree\r\n\t\t\t\t\t\t\t\t\t")])])])])], 1)], 1)], 2), _vm._ssrNode(" <div id=\"getCroppedCanvasModal\" data-uk-modal aria-hidden=\"true\" aria-labelledby=\"sc-getCroppedCanvasTitle\" role=\"dialog\"><div class=\"uk-modal-dialog\"><button type=\"button\" data-uk-close class=\"uk-modal-close-default\"></button> <div class=\"uk-modal-header\"><h2 id=\"sc-getCroppedCanvasTitle\" class=\"uk-modal-title\">\r\n\t\t\t\t\t\t\tCropped Canvas\r\n\t\t\t\t\t\t</h2></div> <div id=\"croppedCanvasWrapper\" class=\"uk-modal-body uk-text-center\"></div> <div class=\"uk-modal-footer uk-text-right\"><button type=\"button\" class=\"sc-button sc-button-flat sc-button-flat-danger uk-modal-close\">\r\n\t\t\t\t\t\t\tCancel\r\n\t\t\t\t\t\t</button> <a id=\"croppedCanvasDownload\" href=\"javascript:void(0);\" download=\"cropped.jpg\"" + _vm._ssrAttr("disabled", !_vm.canDownload) + " class=\"sc-button\">\r\n\t\t\t\t\t\t\tDownload\r\n\t\t\t\t\t\t</a></div></div></div> <div data-uk-form-custom class=\"sc-fab-page-wrapper uk-form-custom\"><input type=\"file\" name=\"file\" accept=\".jpg,.jpeg,.png,.gif,.bmp,.tiff\"> <button type=\"button\" tabindex=\"-1\" class=\"sc-fab sc-fab-large sc-fab-danger\"><i class=\"mdi mdi-file-upload\"></i></button></div>")], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/plugins/image_cropper.vue?vue&type=template&id=3ac128fd&

// EXTERNAL MODULE: ./assets/js/utils.js + 5 modules
var utils = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/plugins/image_cropper.vue?vue&type=script&lang=js&

const {
  isHiRes
} = utils["d" /* scHelpers */];
/* harmony default export */ var image_croppervue_type_script_lang_js_ = ({
  name: 'PluginsImageCropper',
  components: {
    VueCropper:  false ? undefined : null
  },
  data: () => ({
    imgSrc: isHiRes ? __webpack_require__(166) : __webpack_require__(138),
    cropImg: '',
    dragMode: 'move',
    scaleXVal: -1,
    scaleYVal: -1,
    disabled: false,
    aspectRatio: '16/9',
    canDownload: false
  }),
  methods: {
    cropImage() {
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
    },

    changeDragMode(mode) {
      this.dragMode = mode;
      this.$refs.cropper.setDragMode(mode);
    },

    zoom(val) {
      this.$refs.cropper.relativeZoom(val);
    },

    move(o1, o2) {
      this.$refs.cropper.move(o1, o2);
    },

    rotate(deg) {
      this.$refs.cropper.rotate(deg);
    },

    scaleX(val) {
      this.$refs.cropper.scaleX(val);
      this.scaleXVal = val === 1 ? -1 : 1;
    },

    scaleY(val) {
      this.$refs.cropper.scaleY(val);
      this.scaleYVal = val === 1 ? -1 : 1;
    },

    clear() {
      this.$refs.cropper.clear();
    },

    initCrop() {
      this.$refs.cropper.initCrop();
    },

    disable() {
      this.$refs.cropper.disable();
      this.disabled = true;
    },

    enable() {
      this.$refs.cropper.enable();
      this.disabled = false;
    },

    reset() {
      this.$refs.cropper.reset();
    },

    destroy() {
      this.$refs.cropper.destroy();
    },

    getCroppedCanvas(size) {
      let options = null;

      if (size === 'full') {
        options = {
          "maxWidth": 4096,
          "maxHeight": 4096
        };
      }

      if (size === 'medium') {
        options = {
          "width": 320,
          "height": 180
        };
      }

      if (size === 'small') {
        options = {
          "width": 240,
          "height": 100
        };
      }

      document.getElementById('croppedCanvasWrapper').innerHTML = '';
      UIkit.modal('#getCroppedCanvasModal').show();
      const croppedCanvas = this.$refs.cropper.getCroppedCanvas(options);
      document.getElementById('croppedCanvasWrapper').appendChild(croppedCanvas);
      document.getElementById("croppedCanvasDownload").href = croppedCanvas.toDataURL('image/jpeg');
    },

    setAspectRatio(aspectRatio, val) {
      this.$refs.cropper.setAspectRatio(aspectRatio);
      this.aspectRatio = val;
    },

    readImage(e) {
      const file = e.target.files[0];

      if (!file.type.includes('image/')) {
        alert('Please select an image file');
        return;
      }

      if (typeof FileReader === 'function') {
        const reader = new FileReader();

        reader.onload = event => {
          this.imgSrc = event.target.result;
          this.$refs.cropper.replace(event.target.result);
        };

        reader.readAsDataURL(file);
      } else {
        alert('Sorry, FileReader API not supported');
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/plugins/image_cropper.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_image_croppervue_type_script_lang_js_ = (image_croppervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/plugins/image_cropper.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(667)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  plugins_image_croppervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "180850a2"
  
)

/* harmony default export */ var image_cropper = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=image_cropper.js.map