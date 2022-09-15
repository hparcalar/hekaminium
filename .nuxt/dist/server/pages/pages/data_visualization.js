exports.ids = [93];
exports.modules = {

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(581);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("7ee4df18", content, true, context)
};

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_data_visualization_vue_vue_type_style_index_0_id_37efd2b8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(474);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_data_visualization_vue_vue_type_style_index_0_id_37efd2b8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_data_visualization_vue_vue_type_style_index_0_id_37efd2b8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_data_visualization_vue_vue_type_style_index_0_id_37efd2b8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_data_visualization_vue_vue_type_style_index_0_id_37efd2b8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "table.dataTable{clear:both}table.dataTable td,table.dataTable th{box-sizing:content-box}table.dataTable td.dataTables_empty,table.dataTable th.dataTables_empty{text-align:center}table.dataTable.nowrap td,table.dataTable.nowrap th{white-space:nowrap}div.dataTables_wrapper div.dataTables_length label{font-weight:400;text-align:left;white-space:nowrap}div.dataTables_wrapper div.dataTables_length select{width:64px;display:inline-block;border:1px solid rgba(0,0,0,.08);border-radius:3px}div.dataTables_wrapper div.dataTables_filter{text-align:right}div.dataTables_wrapper div.dataTables_filter label{font-weight:400;white-space:nowrap;text-align:left}div.dataTables_wrapper div.dataTables_filter input{margin-left:8px;display:inline-block;width:auto;border:1px solid rgba(0,0,0,.08);border-radius:3px;transition:all .14s cubic-bezier(.55,0,.1,1)}div.dataTables_wrapper div.dataTables_filter input:focus{border-color:#1976d2;outline:none}div.dataTables_wrapper div.row.uk-grid.dt-merge-grid{margin-top:16px}div.dataTables_wrapper div.dataTables_info{white-space:nowrap;font-size:14px;font-size:.875rem;color:rgba(0,0,0,.54)}div.dataTables_wrapper div.dataTables_paginate{margin:0;white-space:nowrap;text-align:right}div.dataTables_wrapper div.dataTables_paginate ul.pagination{margin:2px 0;white-space:nowrap}div.dataTables_wrapper div.dataTables_processing{position:absolute;top:50%;left:50%;width:200px;margin-left:-100px;margin-top:-26px;text-align:center;padding:1em 0}div.dataTables_wrapper span.select-info,div.dataTables_wrapper span.select-item{padding-left:16px}@media (max-width:959px){div.dataTables_wrapper span.select-info,div.dataTables_wrapper span.select-item{padding:4px 0;display:block;text-align:center}}div.dataTables_wrapper span.select-info+span.select-info,div.dataTables_wrapper span.select-info+span.select-item,div.dataTables_wrapper span.select-item+span.select-info,div.dataTables_wrapper span.select-item+span.select-item{display:none}table.dataTable thead>tr>td.sorting,table.dataTable thead>tr>td.sorting_asc,table.dataTable thead>tr>td.sorting_desc,table.dataTable thead>tr>th.sorting,table.dataTable thead>tr>th.sorting_asc,table.dataTable thead>tr>th.sorting_desc{padding-right:30px}table.dataTable thead>tr>td:active,table.dataTable thead>tr>th:active{outline:none}table.dataTable thead .sorting,table.dataTable thead .sorting_asc,table.dataTable thead .sorting_asc_disabled,table.dataTable thead .sorting_desc,table.dataTable thead .sorting_desc_disabled{cursor:pointer;position:relative}table.dataTable thead .sorting:after,table.dataTable thead .sorting:before,table.dataTable thead .sorting_asc:after,table.dataTable thead .sorting_asc:before,table.dataTable thead .sorting_asc_disabled:after,table.dataTable thead .sorting_asc_disabled:before,table.dataTable thead .sorting_desc:after,table.dataTable thead .sorting_desc:before,table.dataTable thead .sorting_desc_disabled:after,table.dataTable thead .sorting_desc_disabled:before{font-family:\"Material Design Icons\";position:absolute;font-size:24px;font-size:1.5rem;top:4px;right:4px;display:block;color:rgba(0,0,0,.4)}@media (max-width:959px){table.dataTable thead .sorting:after,table.dataTable thead .sorting:before,table.dataTable thead .sorting_asc:after,table.dataTable thead .sorting_asc:before,table.dataTable thead .sorting_asc_disabled:after,table.dataTable thead .sorting_asc_disabled:before,table.dataTable thead .sorting_desc:after,table.dataTable thead .sorting_desc:before,table.dataTable thead .sorting_desc_disabled:after,table.dataTable thead .sorting_desc_disabled:before{font-size:18px;font-size:1.125rem;top:9px}}table.dataTable thead .sorting:before{content:\"\\f4ba\"}table.dataTable thead .sorting_asc:before,table.dataTable thead .sorting_desc:before{content:\"\"}table.dataTable thead .sorting_asc:after{content:\"\\f4bc\";color:rgba(0,0,0,.87)}table.dataTable thead .sorting_desc:after{content:\"\\f4bd\";color:rgba(0,0,0,.87)}table.dataTable thead .sorting_asc_disabled:before,table.dataTable thead .sorting_desc_disabled:after{color:rgba(0,0,0,.4)}div.dataTables_scrollHead table.dataTable{margin-bottom:0!important}div.dataTables_scrollBody table{border-top:none;margin-top:0!important;margin-bottom:0!important}div.dataTables_scrollBody table thead .sorting:after,div.dataTables_scrollBody table thead .sorting:before,div.dataTables_scrollBody table thead .sorting_asc:after,div.dataTables_scrollBody table thead .sorting_asc:before,div.dataTables_scrollBody table thead .sorting_desc:after,div.dataTables_scrollBody table thead .sorting_desc:before{display:none}div.dataTables_scrollBody table tbody tr:first-child td,div.dataTables_scrollBody table tbody tr:first-child th{border-top:none}div.dataTables_scrollFoot table{margin-top:0!important;border-top:none}@media (max-width:959px){div.dataTables_wrapper div.dataTables_filter,div.dataTables_wrapper div.dataTables_info,div.dataTables_wrapper div.dataTables_length,div.dataTables_wrapper div.dataTables_paginate{text-align:left}div.dataTables_wrapper div.dataTables_info{text-align:center}div.dataTables_wrapper .dt-uikit-header div+div{margin-top:8px}div.dataTables_wrapper .dt-uikit-footer .uk-pagination{justify-content:center;margin-left:0}div.dataTables_wrapper .dt-uikit-footer .uk-pagination>*>*{height:24px;min-width:24px;line-height:26px}div.dataTables_wrapper .dt-uikit-footer div+div{margin-top:8px}}table.dataTable.uk-table-condensed>thead>tr>th{padding-right:20px}table.dataTable.uk-table-condensed .sorting:after,table.dataTable.uk-table-condensed .sorting_asc:after,table.dataTable.uk-table-condensed .sorting_desc:after{top:6px;right:6px}div.dt-buttons{display:flex;align-items:center}div.dt-buttons .sc-button{margin-right:8px}div.dt-buttons .sc-button:last-child{margin-right:0}@media (max-width:959px){div.dt-buttons{display:flex;flex-wrap:wrap;margin-top:-8px}div.dt-buttons .sc-button{margin-top:8px}}.dt-print-view h1{font-size:24px;font-size:1.5rem;font-weight:400}table.dataTable.dtr-inline.collapsed>tbody>tr>td.child,table.dataTable.dtr-inline.collapsed>tbody>tr>td.dataTables_empty,table.dataTable.dtr-inline.collapsed>tbody>tr>th.child{cursor:default!important}table.dataTable.dtr-inline.collapsed>tbody>tr>td.child:before,table.dataTable.dtr-inline.collapsed>tbody>tr>td.dataTables_empty:before,table.dataTable.dtr-inline.collapsed>tbody>tr>th.child:before{display:none!important}table.dataTable.dtr-inline.collapsed>tbody>tr>td:first-child,table.dataTable.dtr-inline.collapsed>tbody>tr>th:first-child{position:relative;padding-left:40px;cursor:pointer}table.dataTable.dtr-inline.collapsed>tbody>tr>td:first-child:before,table.dataTable.dtr-inline.collapsed>tbody>tr>th:first-child:before{display:block;position:absolute;color:rgba(0,0,0,.54);font-family:\"Material Design Icons\";font-size:24px;font-size:1.5rem;top:50%;left:8px;margin-top:-12px;line-height:1;content:\"\\f416\"}table.dataTable.dtr-inline.collapsed>tbody>tr.parent>td:first-child:before,table.dataTable.dtr-inline.collapsed>tbody>tr.parent>th:first-child:before{content:\"\\f375\"}table.dataTable.dtr-column>tbody>tr>td.control,table.dataTable.dtr-column>tbody>tr>th.control{position:relative}table.dataTable.dtr-column>tbody>tr>td.control:before,table.dataTable.dtr-column>tbody>tr>th.control:before{display:block;position:absolute;color:rgba(0,0,0,.54);font-family:\"Material Design Icons\";font-size:24px;font-size:1.5rem;top:50%;left:8px;margin-top:-12px;line-height:1;content:\"\\f416\"}table.dataTable.dtr-column>tbody>tr.parent td.control:before,table.dataTable.dtr-column>tbody>tr.parent th.control:before{content:\"\\f375\"}table.dataTable>tbody>tr.child ul.dtr-details{display:block;list-style-type:none;margin:0;padding:0}table.dataTable>tbody>tr.child ul.dtr-details>li{border-bottom:1px solid #efefef;padding:8px 0}table.dataTable>tbody>tr.child ul.dtr-details>li:first-child{padding-top:0}table.dataTable>tbody>tr.child ul.dtr-details>li:last-child{border-bottom:none}table.dataTable>tbody>tr.child span.dtr-title{display:inline-block;min-width:80px;font-weight:500;color:rgba(0,0,0,.54)}#dtr-uikit-modal .table.dtr-details{font-size:14px;font-size:.875rem}#dtr-uikit-modal .table.dtr-details tr td{padding:4px 8px}#dtr-uikit-modal .table.dtr-details tr td:first-child{font-weight:500;color:rgba(0,0,0,.54);white-space:nowrap;width:1%;padding-left:0}table.dataTable tbody>tr.selected,table.dataTable tbody>tr>.selected{background-color:#b2ebf2!important}table.dataTable.display tbody>tr.selected:hover,table.dataTable.display tbody>tr>.selected:hover,table.dataTable.hover tbody>tr.selected:hover,table.dataTable.hover tbody>tr>.selected:hover{background-color:#80deea!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/data_visualization.vue?vue&type=template&id=37efd2b8&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_vm._ssrNode("<h3 class=\"uk-margin-bottom\">\n\t\t\t\tData Visualization\n\t\t\t\t<span class=\"sc-sub-heading\">Datatables/Billboard.js integration based on <a href=\"https://webdesign.tutsplus.com/tutorials/data-visualization-with-datatablesjs-and-highchartsjs--cms-29691\">envatotuts+ tutorial</a></span></h3> "), _c('ScCard', [_c('ScCardBody', [_c('client-only', [_c('Datatable', {
    ref: "dataTable",
    attrs: {
      "id": "sc-datatable",
      "table-class": "uk-table-small uk-table-border",
      "data": _vm.dtData,
      "options": _vm.dtOptions,
      "custom-events": _vm.customEvents
    }
  })], 1)], 1)], 1), _vm._ssrNode(" "), _c('ScCard', {
    staticClass: "uk-margin-top"
  }, [_c('ScCardBody', [_c('client-only', [_c('BillboardChart', {
    ref: "bbChart",
    attrs: {
      "options": _vm.chartOptions
    }
  })], 1)], 1)], 1)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/pages/data_visualization.vue?vue&type=template&id=37efd2b8&

// EXTERNAL MODULE: ./assets/js/utils.js + 5 modules
var utils = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/data_visualization.vue?vue&type=script&lang=js&

/* harmony default export */ var data_visualizationvue_type_script_lang_js_ = ({
  components: {
    Datatable:  false ? undefined : null,
    BillboardChart:  false ? undefined : null
  },

  data() {
    return {
      dtData: [{
        "Country": "Bangladesh",
        "Population (2017)": 164669751,
        "Density (P/Km2)": 1265,
        medAge: 26
      }, {
        "Country": "Brazil",
        "Population (2017)": 209288278,
        "Density (P/Km2)": 25,
        medAge: 31
      }, {
        "Country": "China",
        "Population (2017)": 1409517397,
        "Density (P/Km2)": 150,
        medAge: 37
      }, {
        "Country": "DR Congo",
        "Population (2017)": 81339988,
        "Density (P/Km2)": 36,
        medAge: 17
      }, {
        "Country": "Egypt",
        "Population (2017)": 97553151,
        "Density (P/Km2)": 98,
        medAge: 25
      }, {
        "Country": "Ethiopia",
        "Population (2017)": 104957438,
        "Density (P/Km2)": 105,
        medAge: 19
      }, {
        "Country": "France",
        "Population (2017)": 64979548,
        "Density (P/Km2)": 119,
        medAge: 41
      }, {
        "Country": "Germany",
        "Population (2017)": 82114224,
        "Density (P/Km2)": 236,
        medAge: 46
      }, {
        "Country": "India",
        "Population (2017)": 1339180127,
        "Density (P/Km2)": 450,
        medAge: 27
      }, {
        "Country": "Indonesia",
        "Population (2017)": 263991379,
        "Density (P/Km2)": 146,
        medAge: 28
      }, {
        "Country": "Iran",
        "Population (2017)": 81162788,
        "Density (P/Km2)": 50,
        medAge: 30
      }, {
        "Country": "Italy",
        "Population (2017)": 59359900,
        "Density (P/Km2)": 202,
        medAge: 46
      }, {
        "Country": "Japan",
        "Population (2017)": 127484450,
        "Density (P/Km2)": 350,
        medAge: 46
      }, {
        "Country": "Mexico",
        "Population (2017)": 129163276,
        "Density (P/Km2)": 66,
        medAge: 28
      }, {
        "Country": "Nigeria",
        "Population (2017)": 190886311,
        "Density (P/Km2)": 210,
        medAge: 18
      }, {
        "Country": "Pakistan",
        "Population (2017)": 197015955,
        "Density (P/Km2)": 256,
        medAge: 28
      }, {
        "Country": "Philippines",
        "Population (2017)": 104918090,
        "Density (P/Km2)": 352,
        medAge: 24
      }, {
        "Country": "Russia",
        "Population (2017)": 143989754,
        "Density (P/Km2)": 9,
        medAge: 39
      }, {
        "Country": "South Africa",
        "Population (2017)": 56717156,
        "Density (P/Km2)": 47,
        medAge: 26
      }, {
        "Country": "Tanzania",
        "Population (2017)": 57310019,
        "Density (P/Km2)": 65,
        medAge: 17
      }, {
        "Country": "Thailand",
        "Population (2017)": 69037513,
        "Density (P/Km2)": 135,
        medAge: 38
      }, {
        "Country": "Turkey",
        "Population (2017)": 80745020,
        "Density (P/Km2)": 105,
        medAge: 30
      }, {
        "Country": "U.K.",
        "Population (2017)": 66181585,
        "Density (P/Km2)": 274,
        medAge: 40
      }, {
        "Country": "U.S.",
        "Population (2017)": 324459463,
        "Density (P/Km2)": 35,
        medAge: 38
      }, {
        "Country": "Viet Nam",
        "Population (2017)": 95540800,
        "Density (P/Km2)": 308,
        medAge: 30
      }],
      dtOptions: {
        "scrollY": "200px",
        "scrollCollapse": true,
        "paging": false
      }
    };
  },

  computed: {
    chartOptions() {
      var self = this;
      return {
        data: {
          columns: [this.dtCalcData['Population (2017)'], this.dtCalcData['Density (P/Km2)']],
          types: {
            "Population (2017)": 'bar',
            "Density (P/Km2)": "spline"
          },
          axes: {
            "Population (2017)": "y",
            "Density (P/Km2)": "y2"
          },
          colors: {
            "Population (2017)": utils["a" /* scColors */].multi[6],
            "Density (P/Km2)": utils["a" /* scColors */].multi[1]
          }
        },
        axis: {
          x: {
            type: "category",
            categories: self.dtCalcData['Countries'],
            tick: {
              fit: true,
              autorotate: true,
              rotate: -45,
              multiline: false,
              culling: false
            }
          },
          y: {
            label: 'Population (2017)',
            tick: {
              format: function (x) {
                return x / 1000000 + ' M';
              }
            }
          },
          y2: {
            label: 'Density (P/Km²)',
            show: true,
            tick: {
              format: function (x) {
                return x;
              }
            }
          }
        },
        padding: {
          bottom: 80
        },
        tooltip: {
          format: {
            title: function (d) {
              return self.dtCalcData['Countries'][d];
            },
            value: function (value, ratio, id) {
              return id === "Population (2017)" ? Math.round(value / 1000000) + 'M' : value;
            }
          }
        },
        render: {
          lazy: false
        }
      };
    },

    dtCalcData() {
      var population = ["Population (2017)"];
      var density = ["Density (P/Km2)"];
      this.dtData.forEach(item => {
        population.push(item['Population (2017)']);
        density.push(item['Density (P/Km2)']);
      });
      return {
        'Countries': this.dtData.map(item => item['Country']),
        'Population (2017)': population,
        'Density (P/Km2)': density
      };
    },

    customEvents() {
      var self = this;
      var events = [];
      events.push({
        name: 'draw',
        function: () => {
          var timer;
          clearTimeout(timer);
          timer = setTimeout(function () {
            var tableData = self.getTableData(self.$refs['dataTable'].$dt);
            var population = ["Population (2017)"];
            tableData[1].forEach(function (item) {
              population.push(item);
            });
            var density = ["Density (P/Km2)"];
            tableData[2].forEach(function (item) {
              density.push(item);
            });
            self.$refs['bbChart'].bbChart.load({
              columns: [population, density]
            });
            self.$refs['bbChart'].bbChart.config("axis.x.categories", tableData[0], true);
          }, 50);
        }
      });
      return events;
    }

  },
  methods: {
    getTableData(table) {
      var dataArray = [];
      var countryArray = [];
      var populationArray = [];
      var densityArray = [];
      table.rows({
        search: "applied"
      }).every(function () {
        const data = this.data();
        countryArray.push(data['Country']);
        populationArray.push(parseInt(data['Population (2017)']));
        densityArray.push(parseInt(data['Density (P/Km2)']));
      });
      dataArray.push(countryArray, populationArray, densityArray);
      return dataArray;
    }

  }
});
// CONCATENATED MODULE: ./pages/pages/data_visualization.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_data_visualizationvue_type_script_lang_js_ = (data_visualizationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/pages/data_visualization.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(580)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_data_visualizationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "71fb95fe"
  
)

/* harmony default export */ var data_visualization = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=data_visualization.js.map