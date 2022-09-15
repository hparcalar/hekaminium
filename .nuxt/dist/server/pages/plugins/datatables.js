exports.ids = [122];
exports.modules = {

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(629);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("7a40f028", content, true, context)
};

/***/ }),

/***/ 627:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"1\",\"name\":\"Tiger Nixon\",\"position\":\"System Architect\",\"salary\":\"$320,800\",\"start_date\":\"2011/04/25\",\"office\":\"Edinburgh\",\"extn\":\"5421\"},{\"id\":\"2\",\"name\":\"Garrett Winters\",\"position\":\"Accountant\",\"salary\":\"$170,750\",\"start_date\":\"2011/07/25\",\"office\":\"Tokyo\",\"extn\":\"8422\"},{\"id\":\"3\",\"name\":\"Ashton Cox\",\"position\":\"Junior Technical Author\",\"salary\":\"$86,000\",\"start_date\":\"2009/01/12\",\"office\":\"San Francisco\",\"extn\":\"1562\"},{\"id\":\"4\",\"name\":\"Cedric Kelly\",\"position\":\"Senior Javascript Developer\",\"salary\":\"$433,060\",\"start_date\":\"2012/03/29\",\"office\":\"Edinburgh\",\"extn\":\"6224\"},{\"id\":\"5\",\"name\":\"Airi Satou\",\"position\":\"Accountant\",\"salary\":\"$162,700\",\"start_date\":\"2008/11/28\",\"office\":\"Tokyo\",\"extn\":\"5407\"},{\"id\":\"6\",\"name\":\"Brielle Williamson\",\"position\":\"Integration Specialist\",\"salary\":\"$372,000\",\"start_date\":\"2012/12/02\",\"office\":\"New York\",\"extn\":\"4804\"},{\"id\":\"7\",\"name\":\"Herrod Chandler\",\"position\":\"Sales Assistant\",\"salary\":\"$137,500\",\"start_date\":\"2012/08/06\",\"office\":\"San Francisco\",\"extn\":\"9608\"},{\"id\":\"8\",\"name\":\"Rhona Davidson\",\"position\":\"Integration Specialist\",\"salary\":\"$327,900\",\"start_date\":\"2010/10/14\",\"office\":\"Tokyo\",\"extn\":\"6200\"},{\"id\":\"9\",\"name\":\"Colleen Hurst\",\"position\":\"Javascript Developer\",\"salary\":\"$205,500\",\"start_date\":\"2009/09/15\",\"office\":\"San Francisco\",\"extn\":\"2360\"},{\"id\":\"10\",\"name\":\"Sonya Frost\",\"position\":\"Software Engineer\",\"salary\":\"$103,600\",\"start_date\":\"2008/12/13\",\"office\":\"Edinburgh\",\"extn\":\"1667\"},{\"id\":\"11\",\"name\":\"Jena Gaines\",\"position\":\"Office Manager\",\"salary\":\"$90,560\",\"start_date\":\"2008/12/19\",\"office\":\"London\",\"extn\":\"3814\"},{\"id\":\"12\",\"name\":\"Quinn Flynn\",\"position\":\"Support Lead\",\"salary\":\"$342,000\",\"start_date\":\"2013/03/03\",\"office\":\"Edinburgh\",\"extn\":\"9497\"},{\"id\":\"13\",\"name\":\"Charde Marshall\",\"position\":\"Regional Director\",\"salary\":\"$470,600\",\"start_date\":\"2008/10/16\",\"office\":\"San Francisco\",\"extn\":\"6741\"},{\"id\":\"14\",\"name\":\"Haley Kennedy\",\"position\":\"Senior Marketing Designer\",\"salary\":\"$313,500\",\"start_date\":\"2012/12/18\",\"office\":\"London\",\"extn\":\"3597\"},{\"id\":\"15\",\"name\":\"Tatyana Fitzpatrick\",\"position\":\"Regional Director\",\"salary\":\"$385,750\",\"start_date\":\"2010/03/17\",\"office\":\"London\",\"extn\":\"1965\"},{\"id\":\"16\",\"name\":\"Michael Silva\",\"position\":\"Marketing Designer\",\"salary\":\"$198,500\",\"start_date\":\"2012/11/27\",\"office\":\"London\",\"extn\":\"1581\"},{\"id\":\"17\",\"name\":\"Paul Byrd\",\"position\":\"Chief Financial Officer (CFO)\",\"salary\":\"$725,000\",\"start_date\":\"2010/06/09\",\"office\":\"New York\",\"extn\":\"3059\"},{\"id\":\"18\",\"name\":\"Gloria Little\",\"position\":\"Systems Administrator\",\"salary\":\"$237,500\",\"start_date\":\"2009/04/10\",\"office\":\"New York\",\"extn\":\"1721\"},{\"id\":\"19\",\"name\":\"Bradley Greer\",\"position\":\"Software Engineer\",\"salary\":\"$132,000\",\"start_date\":\"2012/10/13\",\"office\":\"London\",\"extn\":\"2558\"},{\"id\":\"20\",\"name\":\"Dai Rios\",\"position\":\"Personnel Lead\",\"salary\":\"$217,500\",\"start_date\":\"2012/09/26\",\"office\":\"Edinburgh\",\"extn\":\"2290\"},{\"id\":\"21\",\"name\":\"Jenette Caldwell\",\"position\":\"Development Lead\",\"salary\":\"$345,000\",\"start_date\":\"2011/09/03\",\"office\":\"New York\",\"extn\":\"1937\"},{\"id\":\"22\",\"name\":\"Yuri Berry\",\"position\":\"Chief Marketing Officer (CMO)\",\"salary\":\"$675,000\",\"start_date\":\"2009/06/25\",\"office\":\"New York\",\"extn\":\"6154\"},{\"id\":\"23\",\"name\":\"Caesar Vance\",\"position\":\"Pre-Sales Support\",\"salary\":\"$106,450\",\"start_date\":\"2011/12/12\",\"office\":\"New York\",\"extn\":\"8330\"},{\"id\":\"24\",\"name\":\"Doris Wilder\",\"position\":\"Sales Assistant\",\"salary\":\"$85,600\",\"start_date\":\"2010/09/20\",\"office\":\"Sidney\",\"extn\":\"3023\"},{\"id\":\"25\",\"name\":\"Angelica Ramos\",\"position\":\"Chief Executive Officer (CEO)\",\"salary\":\"$1,200,000\",\"start_date\":\"2009/10/09\",\"office\":\"London\",\"extn\":\"5797\"},{\"id\":\"26\",\"name\":\"Gavin Joyce\",\"position\":\"Developer\",\"salary\":\"$92,575\",\"start_date\":\"2010/12/22\",\"office\":\"Edinburgh\",\"extn\":\"8822\"},{\"id\":\"27\",\"name\":\"Jennifer Chang\",\"position\":\"Regional Director\",\"salary\":\"$357,650\",\"start_date\":\"2010/11/14\",\"office\":\"Singapore\",\"extn\":\"9239\"},{\"id\":\"28\",\"name\":\"Brenden Wagner\",\"position\":\"Software Engineer\",\"salary\":\"$206,850\",\"start_date\":\"2011/06/07\",\"office\":\"San Francisco\",\"extn\":\"1314\"},{\"id\":\"29\",\"name\":\"Fiona Green\",\"position\":\"Chief Operating Officer (COO)\",\"salary\":\"$850,000\",\"start_date\":\"2010/03/11\",\"office\":\"San Francisco\",\"extn\":\"2947\"},{\"id\":\"30\",\"name\":\"Shou Itou\",\"position\":\"Regional Marketing\",\"salary\":\"$163,000\",\"start_date\":\"2011/08/14\",\"office\":\"Tokyo\",\"extn\":\"8899\"},{\"id\":\"31\",\"name\":\"Michelle House\",\"position\":\"Integration Specialist\",\"salary\":\"$95,400\",\"start_date\":\"2011/06/02\",\"office\":\"Sidney\",\"extn\":\"2769\"},{\"id\":\"32\",\"name\":\"Suki Burks\",\"position\":\"Developer\",\"salary\":\"$114,500\",\"start_date\":\"2009/10/22\",\"office\":\"London\",\"extn\":\"6832\"},{\"id\":\"33\",\"name\":\"Prescott Bartlett\",\"position\":\"Technical Author\",\"salary\":\"$145,000\",\"start_date\":\"2011/05/07\",\"office\":\"London\",\"extn\":\"3606\"},{\"id\":\"34\",\"name\":\"Gavin Cortez\",\"position\":\"Team Leader\",\"salary\":\"$235,500\",\"start_date\":\"2008/10/26\",\"office\":\"San Francisco\",\"extn\":\"2860\"},{\"id\":\"35\",\"name\":\"Martena Mccray\",\"position\":\"Post-Sales support\",\"salary\":\"$324,050\",\"start_date\":\"2011/03/09\",\"office\":\"Edinburgh\",\"extn\":\"8240\"},{\"id\":\"36\",\"name\":\"Unity Butler\",\"position\":\"Marketing Designer\",\"salary\":\"$85,675\",\"start_date\":\"2009/12/09\",\"office\":\"San Francisco\",\"extn\":\"5384\"},{\"id\":\"37\",\"name\":\"Howard Hatfield\",\"position\":\"Office Manager\",\"salary\":\"$164,500\",\"start_date\":\"2008/12/16\",\"office\":\"San Francisco\",\"extn\":\"7031\"},{\"id\":\"38\",\"name\":\"Hope Fuentes\",\"position\":\"Secretary\",\"salary\":\"$109,850\",\"start_date\":\"2010/02/12\",\"office\":\"San Francisco\",\"extn\":\"6318\"},{\"id\":\"39\",\"name\":\"Vivian Harrell\",\"position\":\"Financial Controller\",\"salary\":\"$452,500\",\"start_date\":\"2009/02/14\",\"office\":\"San Francisco\",\"extn\":\"9422\"},{\"id\":\"40\",\"name\":\"Timothy Mooney\",\"position\":\"Office Manager\",\"salary\":\"$136,200\",\"start_date\":\"2008/12/11\",\"office\":\"London\",\"extn\":\"7580\"},{\"id\":\"41\",\"name\":\"Jackson Bradshaw\",\"position\":\"Director\",\"salary\":\"$645,750\",\"start_date\":\"2008/09/26\",\"office\":\"New York\",\"extn\":\"1042\"},{\"id\":\"42\",\"name\":\"Olivia Liang\",\"position\":\"Support Engineer\",\"salary\":\"$234,500\",\"start_date\":\"2011/02/03\",\"office\":\"Singapore\",\"extn\":\"2120\"},{\"id\":\"43\",\"name\":\"Bruno Nash\",\"position\":\"Software Engineer\",\"salary\":\"$163,500\",\"start_date\":\"2011/05/03\",\"office\":\"London\",\"extn\":\"6222\"},{\"id\":\"44\",\"name\":\"Sakura Yamamoto\",\"position\":\"Support Engineer\",\"salary\":\"$139,575\",\"start_date\":\"2009/08/19\",\"office\":\"Tokyo\",\"extn\":\"9383\"},{\"id\":\"45\",\"name\":\"Thor Walton\",\"position\":\"Developer\",\"salary\":\"$98,540\",\"start_date\":\"2013/08/11\",\"office\":\"New York\",\"extn\":\"8327\"},{\"id\":\"46\",\"name\":\"Finn Camacho\",\"position\":\"Support Engineer\",\"salary\":\"$87,500\",\"start_date\":\"2009/07/07\",\"office\":\"San Francisco\",\"extn\":\"2927\"},{\"id\":\"47\",\"name\":\"Serge Baldwin\",\"position\":\"Data Coordinator\",\"salary\":\"$138,575\",\"start_date\":\"2012/04/09\",\"office\":\"Singapore\",\"extn\":\"8352\"},{\"id\":\"48\",\"name\":\"Zenaida Frank\",\"position\":\"Software Engineer\",\"salary\":\"$125,250\",\"start_date\":\"2010/01/04\",\"office\":\"New York\",\"extn\":\"7439\"},{\"id\":\"49\",\"name\":\"Zorita Serrano\",\"position\":\"Software Engineer\",\"salary\":\"$115,000\",\"start_date\":\"2012/06/01\",\"office\":\"San Francisco\",\"extn\":\"4389\"},{\"id\":\"50\",\"name\":\"Jennifer Acosta\",\"position\":\"Junior Javascript Developer\",\"salary\":\"$75,650\",\"start_date\":\"2013/02/01\",\"office\":\"Edinburgh\",\"extn\":\"3431\"},{\"id\":\"51\",\"name\":\"Cara Stevens\",\"position\":\"Sales Assistant\",\"salary\":\"$145,600\",\"start_date\":\"2011/12/06\",\"office\":\"New York\",\"extn\":\"3990\"},{\"id\":\"52\",\"name\":\"Hermione Butler\",\"position\":\"Regional Director\",\"salary\":\"$356,250\",\"start_date\":\"2011/03/21\",\"office\":\"London\",\"extn\":\"1016\"},{\"id\":\"53\",\"name\":\"Lael Greer\",\"position\":\"Systems Administrator\",\"salary\":\"$103,500\",\"start_date\":\"2009/02/27\",\"office\":\"London\",\"extn\":\"6733\"},{\"id\":\"54\",\"name\":\"Jonas Alexander\",\"position\":\"Developer\",\"salary\":\"$86,500\",\"start_date\":\"2010/07/14\",\"office\":\"San Francisco\",\"extn\":\"8196\"},{\"id\":\"55\",\"name\":\"Shad Decker\",\"position\":\"Regional Director\",\"salary\":\"$183,000\",\"start_date\":\"2008/11/13\",\"office\":\"Edinburgh\",\"extn\":\"6373\"},{\"id\":\"56\",\"name\":\"Michael Bruce\",\"position\":\"Javascript Developer\",\"salary\":\"$183,000\",\"start_date\":\"2011/06/27\",\"office\":\"Singapore\",\"extn\":\"5384\"},{\"id\":\"57\",\"name\":\"Donna Snider\",\"position\":\"Customer Support\",\"salary\":\"$112,000\",\"start_date\":\"2011/01/25\",\"office\":\"New York\",\"extn\":\"4226\"}]");

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_datatables_vue_vue_type_style_index_0_id_9a2b5758_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(490);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_datatables_vue_vue_type_style_index_0_id_9a2b5758_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_datatables_vue_vue_type_style_index_0_id_9a2b5758_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_datatables_vue_vue_type_style_index_0_id_9a2b5758_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_datatables_vue_vue_type_style_index_0_id_9a2b5758_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "table.dataTable{clear:both}table.dataTable td,table.dataTable th{box-sizing:content-box}table.dataTable td.dataTables_empty,table.dataTable th.dataTables_empty{text-align:center}table.dataTable.nowrap td,table.dataTable.nowrap th{white-space:nowrap}div.dataTables_wrapper div.dataTables_length label{font-weight:400;text-align:left;white-space:nowrap}div.dataTables_wrapper div.dataTables_length select{width:64px;display:inline-block;border:1px solid rgba(0,0,0,.08);border-radius:3px}div.dataTables_wrapper div.dataTables_filter{text-align:right}div.dataTables_wrapper div.dataTables_filter label{font-weight:400;white-space:nowrap;text-align:left}div.dataTables_wrapper div.dataTables_filter input{margin-left:8px;display:inline-block;width:auto;border:1px solid rgba(0,0,0,.08);border-radius:3px;transition:all .14s cubic-bezier(.55,0,.1,1)}div.dataTables_wrapper div.dataTables_filter input:focus{border-color:#1976d2;outline:none}div.dataTables_wrapper div.row.uk-grid.dt-merge-grid{margin-top:16px}div.dataTables_wrapper div.dataTables_info{white-space:nowrap;font-size:14px;font-size:.875rem;color:rgba(0,0,0,.54)}div.dataTables_wrapper div.dataTables_paginate{margin:0;white-space:nowrap;text-align:right}div.dataTables_wrapper div.dataTables_paginate ul.pagination{margin:2px 0;white-space:nowrap}div.dataTables_wrapper div.dataTables_processing{position:absolute;top:50%;left:50%;width:200px;margin-left:-100px;margin-top:-26px;text-align:center;padding:1em 0}div.dataTables_wrapper span.select-info,div.dataTables_wrapper span.select-item{padding-left:16px}@media (max-width:959px){div.dataTables_wrapper span.select-info,div.dataTables_wrapper span.select-item{padding:4px 0;display:block;text-align:center}}div.dataTables_wrapper span.select-info+span.select-info,div.dataTables_wrapper span.select-info+span.select-item,div.dataTables_wrapper span.select-item+span.select-info,div.dataTables_wrapper span.select-item+span.select-item{display:none}table.dataTable thead>tr>td.sorting,table.dataTable thead>tr>td.sorting_asc,table.dataTable thead>tr>td.sorting_desc,table.dataTable thead>tr>th.sorting,table.dataTable thead>tr>th.sorting_asc,table.dataTable thead>tr>th.sorting_desc{padding-right:30px}table.dataTable thead>tr>td:active,table.dataTable thead>tr>th:active{outline:none}table.dataTable thead .sorting,table.dataTable thead .sorting_asc,table.dataTable thead .sorting_asc_disabled,table.dataTable thead .sorting_desc,table.dataTable thead .sorting_desc_disabled{cursor:pointer;position:relative}table.dataTable thead .sorting:after,table.dataTable thead .sorting:before,table.dataTable thead .sorting_asc:after,table.dataTable thead .sorting_asc:before,table.dataTable thead .sorting_asc_disabled:after,table.dataTable thead .sorting_asc_disabled:before,table.dataTable thead .sorting_desc:after,table.dataTable thead .sorting_desc:before,table.dataTable thead .sorting_desc_disabled:after,table.dataTable thead .sorting_desc_disabled:before{font-family:\"Material Design Icons\";position:absolute;font-size:24px;font-size:1.5rem;top:4px;right:4px;display:block;color:rgba(0,0,0,.4)}@media (max-width:959px){table.dataTable thead .sorting:after,table.dataTable thead .sorting:before,table.dataTable thead .sorting_asc:after,table.dataTable thead .sorting_asc:before,table.dataTable thead .sorting_asc_disabled:after,table.dataTable thead .sorting_asc_disabled:before,table.dataTable thead .sorting_desc:after,table.dataTable thead .sorting_desc:before,table.dataTable thead .sorting_desc_disabled:after,table.dataTable thead .sorting_desc_disabled:before{font-size:18px;font-size:1.125rem;top:9px}}table.dataTable thead .sorting:before{content:\"\\f4ba\"}table.dataTable thead .sorting_asc:before,table.dataTable thead .sorting_desc:before{content:\"\"}table.dataTable thead .sorting_asc:after{content:\"\\f4bc\";color:rgba(0,0,0,.87)}table.dataTable thead .sorting_desc:after{content:\"\\f4bd\";color:rgba(0,0,0,.87)}table.dataTable thead .sorting_asc_disabled:before,table.dataTable thead .sorting_desc_disabled:after{color:rgba(0,0,0,.4)}div.dataTables_scrollHead table.dataTable{margin-bottom:0!important}div.dataTables_scrollBody table{border-top:none;margin-top:0!important;margin-bottom:0!important}div.dataTables_scrollBody table thead .sorting:after,div.dataTables_scrollBody table thead .sorting:before,div.dataTables_scrollBody table thead .sorting_asc:after,div.dataTables_scrollBody table thead .sorting_asc:before,div.dataTables_scrollBody table thead .sorting_desc:after,div.dataTables_scrollBody table thead .sorting_desc:before{display:none}div.dataTables_scrollBody table tbody tr:first-child td,div.dataTables_scrollBody table tbody tr:first-child th{border-top:none}div.dataTables_scrollFoot table{margin-top:0!important;border-top:none}@media (max-width:959px){div.dataTables_wrapper div.dataTables_filter,div.dataTables_wrapper div.dataTables_info,div.dataTables_wrapper div.dataTables_length,div.dataTables_wrapper div.dataTables_paginate{text-align:left}div.dataTables_wrapper div.dataTables_info{text-align:center}div.dataTables_wrapper .dt-uikit-header div+div{margin-top:8px}div.dataTables_wrapper .dt-uikit-footer .uk-pagination{justify-content:center;margin-left:0}div.dataTables_wrapper .dt-uikit-footer .uk-pagination>*>*{height:24px;min-width:24px;line-height:26px}div.dataTables_wrapper .dt-uikit-footer div+div{margin-top:8px}}table.dataTable.uk-table-condensed>thead>tr>th{padding-right:20px}table.dataTable.uk-table-condensed .sorting:after,table.dataTable.uk-table-condensed .sorting_asc:after,table.dataTable.uk-table-condensed .sorting_desc:after{top:6px;right:6px}div.dt-buttons{display:flex;align-items:center}div.dt-buttons .sc-button{margin-right:8px}div.dt-buttons .sc-button:last-child{margin-right:0}@media (max-width:959px){div.dt-buttons{display:flex;flex-wrap:wrap;margin-top:-8px}div.dt-buttons .sc-button{margin-top:8px}}.dt-print-view h1{font-size:24px;font-size:1.5rem;font-weight:400}table.dataTable.dtr-inline.collapsed>tbody>tr>td.child,table.dataTable.dtr-inline.collapsed>tbody>tr>td.dataTables_empty,table.dataTable.dtr-inline.collapsed>tbody>tr>th.child{cursor:default!important}table.dataTable.dtr-inline.collapsed>tbody>tr>td.child:before,table.dataTable.dtr-inline.collapsed>tbody>tr>td.dataTables_empty:before,table.dataTable.dtr-inline.collapsed>tbody>tr>th.child:before{display:none!important}table.dataTable.dtr-inline.collapsed>tbody>tr>td:first-child,table.dataTable.dtr-inline.collapsed>tbody>tr>th:first-child{position:relative;padding-left:40px;cursor:pointer}table.dataTable.dtr-inline.collapsed>tbody>tr>td:first-child:before,table.dataTable.dtr-inline.collapsed>tbody>tr>th:first-child:before{display:block;position:absolute;color:rgba(0,0,0,.54);font-family:\"Material Design Icons\";font-size:24px;font-size:1.5rem;top:50%;left:8px;margin-top:-12px;line-height:1;content:\"\\f416\"}table.dataTable.dtr-inline.collapsed>tbody>tr.parent>td:first-child:before,table.dataTable.dtr-inline.collapsed>tbody>tr.parent>th:first-child:before{content:\"\\f375\"}table.dataTable.dtr-column>tbody>tr>td.control,table.dataTable.dtr-column>tbody>tr>th.control{position:relative}table.dataTable.dtr-column>tbody>tr>td.control:before,table.dataTable.dtr-column>tbody>tr>th.control:before{display:block;position:absolute;color:rgba(0,0,0,.54);font-family:\"Material Design Icons\";font-size:24px;font-size:1.5rem;top:50%;left:8px;margin-top:-12px;line-height:1;content:\"\\f416\"}table.dataTable.dtr-column>tbody>tr.parent td.control:before,table.dataTable.dtr-column>tbody>tr.parent th.control:before{content:\"\\f375\"}table.dataTable>tbody>tr.child ul.dtr-details{display:block;list-style-type:none;margin:0;padding:0}table.dataTable>tbody>tr.child ul.dtr-details>li{border-bottom:1px solid #efefef;padding:8px 0}table.dataTable>tbody>tr.child ul.dtr-details>li:first-child{padding-top:0}table.dataTable>tbody>tr.child ul.dtr-details>li:last-child{border-bottom:none}table.dataTable>tbody>tr.child span.dtr-title{display:inline-block;min-width:80px;font-weight:500;color:rgba(0,0,0,.54)}#dtr-uikit-modal .table.dtr-details{font-size:14px;font-size:.875rem}#dtr-uikit-modal .table.dtr-details tr td{padding:4px 8px}#dtr-uikit-modal .table.dtr-details tr td:first-child{font-weight:500;color:rgba(0,0,0,.54);white-space:nowrap;width:1%;padding-left:0}table.dataTable tbody>tr.selected,table.dataTable tbody>tr>.selected{background-color:#b2ebf2!important}table.dataTable.display tbody>tr.selected:hover,table.dataTable.display tbody>tr>.selected:hover,table.dataTable.hover tbody>tr.selected:hover,table.dataTable.hover tbody>tr>.selected:hover{background-color:#80deea!important}.pretty *{box-sizing:border-box}.pretty input:not([type=checkbox]):not([type=radio]){display:none}.pretty{position:relative;display:inline-block;margin-right:1em;white-space:nowrap;line-height:1}.pretty input{position:absolute;left:0;top:0;min-width:1em;width:100%;height:100%;z-index:2;opacity:0;margin:0;padding:0;cursor:pointer}.pretty .state label{position:static;display:inline-block;font-weight:400;margin:0;text-indent:1.5em;min-width:calc(1em + 2px)}.pretty .state label:after,.pretty .state label:before{content:\"\";width:calc(1em + 2px);height:calc(1em + 2px);display:block;box-sizing:border-box;border-radius:0;border:1px solid transparent;z-index:0;position:absolute;left:0;top:calc(-108% + 1em);background-color:transparent}.pretty .state label:before{border-color:#bdc3c7}.pretty .state.p-is-hover,.pretty .state.p-is-indeterminate{display:none}@-webkit-keyframes zoom{0%{opacity:0;transform:scale(0)}}@keyframes zoom{0%{opacity:0;transform:scale(0)}}@-webkit-keyframes tada{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;transform:scale(7)}38%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;transform:scale(1)}55%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.5)}72%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}81%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.24)}89%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}95%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.04)}to{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}}@keyframes tada{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;transform:scale(7)}38%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;transform:scale(1)}55%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.5)}72%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}81%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.24)}89%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}95%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;transform:scale(1.04)}to{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1)}}@-webkit-keyframes jelly{0%{transform:scaleX(1)}30%{transform:scale3d(.75,1.25,1)}40%{transform:scale3d(1.25,.75,1)}50%{transform:scale3d(.85,1.15,1)}65%{transform:scale3d(1.05,.95,1)}75%{transform:scale3d(.95,1.05,1)}to{transform:scaleX(1)}}@keyframes jelly{0%{transform:scaleX(1)}30%{transform:scale3d(.75,1.25,1)}40%{transform:scale3d(1.25,.75,1)}50%{transform:scale3d(.85,1.15,1)}65%{transform:scale3d(1.05,.95,1)}75%{transform:scale3d(.95,1.05,1)}to{transform:scaleX(1)}}@-webkit-keyframes rotate{0%{opacity:0;transform:translateZ(-200px) rotate(-45deg)}to{opacity:1;transform:translateZ(0) rotate(0)}}@keyframes rotate{0%{opacity:0;transform:translateZ(-200px) rotate(-45deg)}to{opacity:1;transform:translateZ(0) rotate(0)}}@-webkit-keyframes pulse{0%{box-shadow:0 0 0 0 #bdc3c7}to{box-shadow:0 0 0 1.5em rgba(189,195,199,0)}}@keyframes pulse{0%{box-shadow:0 0 0 0 #bdc3c7}to{box-shadow:0 0 0 1.5em rgba(189,195,199,0)}}.pretty.p-default.p-fill .state label:after{transform:scale(1)}.pretty.p-default .state label:after{transform:scale(.6)}.pretty.p-default input:checked~.state label:after{background-color:#bdc3c7!important}.pretty.p-default.p-thick .state label:after,.pretty.p-default.p-thick .state label:before{border-width:.14286em}.pretty.p-default.p-thick .state label:after{transform:scale(.4)!important}.pretty.p-icon .state .icon{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc(-108% + 1em);border:1px solid transparent;opacity:0}.pretty.p-icon .state .icon:before{margin:0;width:100%;height:100%;text-align:center;display:flex;flex:1;justify-content:center;align-items:center;line-height:1}.pretty.p-icon input:checked~.state .icon{opacity:1}.pretty.p-icon input:checked~.state label:before{border-color:#5a656b}.pretty.p-svg .state .svg{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc(-108% + 1em);border:1px solid transparent;opacity:0}.pretty.p-svg .state svg{margin:0;width:100%;height:100%;text-align:center;display:flex;flex:1;justify-content:center;align-items:center;line-height:1}.pretty.p-svg input:checked~.state .svg{opacity:1}.pretty.p-image .state img{opacity:0;position:absolute;width:calc(1em + 2px);height:calc(1em + 2px);top:0;top:calc(-108% + 1em);left:0;z-index:0;text-align:center;line-height:normal;transform:scale(.8)}.pretty.p-image input:checked~.state img{opacity:1}.pretty.p-switch input{min-width:2em}.pretty.p-switch .state{position:relative}.pretty.p-switch .state:before{content:\"\";border:1px solid #bdc3c7;border-radius:60px;width:2em;box-sizing:unset;height:calc(1em + 2px);position:absolute;top:0;top:calc(-116% + 1em);z-index:0;transition:all .5s ease}.pretty.p-switch .state label{text-indent:2.5em}.pretty.p-switch .state label:after,.pretty.p-switch .state label:before{transition:all .5s ease;border-radius:100%;left:0;border-color:transparent;transform:scale(.8)}.pretty.p-switch .state label:after{background-color:#bdc3c7!important}.pretty.p-switch input:checked~.state:before{border-color:#5a656b}.pretty.p-switch input:checked~.state label:before{opacity:0}.pretty.p-switch input:checked~.state label:after{background-color:#5a656b!important;left:1em}.pretty.p-switch.p-fill input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}.pretty.p-switch.p-fill input:checked~.state label:before{opacity:0}.pretty.p-switch.p-fill input:checked~.state label:after{background-color:#fff!important;left:1em}.pretty.p-switch.p-slim .state:before{height:.1em;background:#bdc3c7!important;top:calc(50% - .1em)}.pretty.p-switch.p-slim input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}.pretty.p-has-hover input:hover~.state:not(.p-is-hover){display:none}.pretty.p-has-hover input:hover~.state.p-is-hover,.pretty.p-has-hover input:hover~.state.p-is-hover .icon{display:block}.pretty.p-has-focus input:focus~.state label:before{box-shadow:0 0 3px 0 #bdc3c7}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state:not(.p-is-indeterminate){display:none}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate{display:block}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate .icon{display:block;opacity:1}.pretty.p-toggle .state.p-on{opacity:0;display:none}.pretty.p-toggle .state .icon,.pretty.p-toggle .state.p-off,.pretty.p-toggle .state .svg,.pretty.p-toggle .state img{opacity:1;display:inherit}.pretty.p-toggle .state.p-off .icon{color:#bdc3c7}.pretty.p-toggle input:checked~.state.p-on{opacity:1;display:inherit}.pretty.p-toggle input:checked~.state.p-off{opacity:0;display:none}.pretty.p-plain.p-toggle .state label:before,.pretty.p-plain input:checked~.state label:before{content:none}.pretty.p-plain.p-plain .icon{transform:scale(1.1)}.pretty.p-round .state label:after,.pretty.p-round .state label:before{border-radius:100%}.pretty.p-round.p-icon .state .icon{border-radius:100%;overflow:hidden}.pretty.p-round.p-icon .state .icon:before{transform:scale(.8)}.pretty.p-curve .state label:after,.pretty.p-curve .state label:before{border-radius:20%}.pretty.p-smooth .icon,.pretty.p-smooth .svg,.pretty.p-smooth label:after,.pretty.p-smooth label:before{transition:all .5s ease}.pretty.p-smooth input:checked+.state label:after{transition:all .3s ease}.pretty.p-smooth.p-default input:checked+.state label:after,.pretty.p-smooth input:checked+.state .icon,.pretty.p-smooth input:checked+.state .svg,.pretty.p-smooth input:checked+.state img{-webkit-animation:zoom .2s ease;animation:zoom .2s ease}.pretty.p-smooth.p-plain input:checked+.state label:before{content:\"\";transform:scale(0);transition:all .5s ease}.pretty.p-tada:not(.p-default) input:checked+.state .icon,.pretty.p-tada:not(.p-default) input:checked+.state .svg,.pretty.p-tada:not(.p-default) input:checked+.state img,.pretty.p-tada:not(.p-default) input:checked+.state label:after,.pretty.p-tada:not(.p-default) input:checked+.state label:before{-webkit-animation:tada .7s cubic-bezier(.25,.46,.45,.94) 1 alternate;animation:tada .7s cubic-bezier(.25,.46,.45,.94) 1 alternate;opacity:1}.pretty.p-jelly:not(.p-default) input:checked+.state .icon,.pretty.p-jelly:not(.p-default) input:checked+.state .svg,.pretty.p-jelly:not(.p-default) input:checked+.state img,.pretty.p-jelly:not(.p-default) input:checked+.state label:after,.pretty.p-jelly:not(.p-default) input:checked+.state label:before{-webkit-animation:jelly .7s cubic-bezier(.25,.46,.45,.94);animation:jelly .7s cubic-bezier(.25,.46,.45,.94);opacity:1}.pretty.p-jelly:not(.p-default) input:checked+.state label:before{border-color:transparent}.pretty.p-rotate:not(.p-default) input:checked~.state .icon,.pretty.p-rotate:not(.p-default) input:checked~.state .svg,.pretty.p-rotate:not(.p-default) input:checked~.state img,.pretty.p-rotate:not(.p-default) input:checked~.state label:after,.pretty.p-rotate:not(.p-default) input:checked~.state label:before{-webkit-animation:rotate .7s cubic-bezier(.25,.46,.45,.94);animation:rotate .7s cubic-bezier(.25,.46,.45,.94);opacity:1}.pretty.p-rotate:not(.p-default) input:checked~.state label:before{border-color:transparent}.pretty.p-pulse:not(.p-switch) input:checked~.state label:before{-webkit-animation:pulse 1s;animation:pulse 1s}.pretty input[disabled]{cursor:not-allowed;display:none}.pretty input[disabled]~*{opacity:.5}.pretty.p-locked input{display:none;cursor:not-allowed}.pretty.p-toggle .state.p-primary label:after,.pretty input:checked~.state.p-primary label:after{background-color:#428bca!important}.pretty.p-toggle .state.p-primary .icon,.pretty.p-toggle .state.p-primary .svg,.pretty input:checked~.state.p-primary .icon,.pretty input:checked~.state.p-primary .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-primary-o label:before,.pretty input:checked~.state.p-primary-o label:before{border-color:#428bca}.pretty.p-toggle .state.p-primary-o label:after,.pretty input:checked~.state.p-primary-o label:after{background-color:transparent}.pretty.p-toggle .state.p-primary-o .icon,.pretty.p-toggle .state.p-primary-o .svg,.pretty.p-toggle .state.p-primary-o svg,.pretty input:checked~.state.p-primary-o .icon,.pretty input:checked~.state.p-primary-o .svg,.pretty input:checked~.state.p-primary-o svg{color:#428bca;stroke:#428bca}.pretty.p-default:not(.p-fill) input:checked~.state.p-primary-o label:after{background-color:#428bca!important}.pretty.p-switch input:checked~.state.p-primary:before{border-color:#428bca}.pretty.p-switch.p-fill input:checked~.state.p-primary:before{background-color:#428bca!important}.pretty.p-switch.p-slim input:checked~.state.p-primary:before{border-color:#245682;background-color:#245682!important}.pretty.p-toggle .state.p-info label:after,.pretty input:checked~.state.p-info label:after{background-color:#5bc0de!important}.pretty.p-toggle .state.p-info .icon,.pretty.p-toggle .state.p-info .svg,.pretty input:checked~.state.p-info .icon,.pretty input:checked~.state.p-info .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-info-o label:before,.pretty input:checked~.state.p-info-o label:before{border-color:#5bc0de}.pretty.p-toggle .state.p-info-o label:after,.pretty input:checked~.state.p-info-o label:after{background-color:transparent}.pretty.p-toggle .state.p-info-o .icon,.pretty.p-toggle .state.p-info-o .svg,.pretty.p-toggle .state.p-info-o svg,.pretty input:checked~.state.p-info-o .icon,.pretty input:checked~.state.p-info-o .svg,.pretty input:checked~.state.p-info-o svg{color:#5bc0de;stroke:#5bc0de}.pretty.p-default:not(.p-fill) input:checked~.state.p-info-o label:after{background-color:#5bc0de!important}.pretty.p-switch input:checked~.state.p-info:before{border-color:#5bc0de}.pretty.p-switch.p-fill input:checked~.state.p-info:before{background-color:#5bc0de!important}.pretty.p-switch.p-slim input:checked~.state.p-info:before{border-color:#2390b0;background-color:#2390b0!important}.pretty.p-toggle .state.p-success label:after,.pretty input:checked~.state.p-success label:after{background-color:#5cb85c!important}.pretty.p-toggle .state.p-success .icon,.pretty.p-toggle .state.p-success .svg,.pretty input:checked~.state.p-success .icon,.pretty input:checked~.state.p-success .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-success-o label:before,.pretty input:checked~.state.p-success-o label:before{border-color:#5cb85c}.pretty.p-toggle .state.p-success-o label:after,.pretty input:checked~.state.p-success-o label:after{background-color:transparent}.pretty.p-toggle .state.p-success-o .icon,.pretty.p-toggle .state.p-success-o .svg,.pretty.p-toggle .state.p-success-o svg,.pretty input:checked~.state.p-success-o .icon,.pretty input:checked~.state.p-success-o .svg,.pretty input:checked~.state.p-success-o svg{color:#5cb85c;stroke:#5cb85c}.pretty.p-default:not(.p-fill) input:checked~.state.p-success-o label:after{background-color:#5cb85c!important}.pretty.p-switch input:checked~.state.p-success:before{border-color:#5cb85c}.pretty.p-switch.p-fill input:checked~.state.p-success:before{background-color:#5cb85c!important}.pretty.p-switch.p-slim input:checked~.state.p-success:before{border-color:#357935;background-color:#357935!important}.pretty.p-toggle .state.p-warning label:after,.pretty input:checked~.state.p-warning label:after{background-color:#f0ad4e!important}.pretty.p-toggle .state.p-warning .icon,.pretty.p-toggle .state.p-warning .svg,.pretty input:checked~.state.p-warning .icon,.pretty input:checked~.state.p-warning .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-warning-o label:before,.pretty input:checked~.state.p-warning-o label:before{border-color:#f0ad4e}.pretty.p-toggle .state.p-warning-o label:after,.pretty input:checked~.state.p-warning-o label:after{background-color:transparent}.pretty.p-toggle .state.p-warning-o .icon,.pretty.p-toggle .state.p-warning-o .svg,.pretty.p-toggle .state.p-warning-o svg,.pretty input:checked~.state.p-warning-o .icon,.pretty input:checked~.state.p-warning-o .svg,.pretty input:checked~.state.p-warning-o svg{color:#f0ad4e;stroke:#f0ad4e}.pretty.p-default:not(.p-fill) input:checked~.state.p-warning-o label:after{background-color:#f0ad4e!important}.pretty.p-switch input:checked~.state.p-warning:before{border-color:#f0ad4e}.pretty.p-switch.p-fill input:checked~.state.p-warning:before{background-color:#f0ad4e!important}.pretty.p-switch.p-slim input:checked~.state.p-warning:before{border-color:#c77c11;background-color:#c77c11!important}.pretty.p-toggle .state.p-danger label:after,.pretty input:checked~.state.p-danger label:after{background-color:#d9534f!important}.pretty.p-toggle .state.p-danger .icon,.pretty.p-toggle .state.p-danger .svg,.pretty input:checked~.state.p-danger .icon,.pretty input:checked~.state.p-danger .svg{color:#fff;stroke:#fff}.pretty.p-toggle .state.p-danger-o label:before,.pretty input:checked~.state.p-danger-o label:before{border-color:#d9534f}.pretty.p-toggle .state.p-danger-o label:after,.pretty input:checked~.state.p-danger-o label:after{background-color:transparent}.pretty.p-toggle .state.p-danger-o .icon,.pretty.p-toggle .state.p-danger-o .svg,.pretty.p-toggle .state.p-danger-o svg,.pretty input:checked~.state.p-danger-o .icon,.pretty input:checked~.state.p-danger-o .svg,.pretty input:checked~.state.p-danger-o svg{color:#d9534f;stroke:#d9534f}.pretty.p-default:not(.p-fill) input:checked~.state.p-danger-o label:after{background-color:#d9534f!important}.pretty.p-switch input:checked~.state.p-danger:before{border-color:#d9534f}.pretty.p-switch.p-fill input:checked~.state.p-danger:before{background-color:#d9534f!important}.pretty.p-switch.p-slim input:checked~.state.p-danger:before{border-color:#a02622;background-color:#a02622!important}.pretty.p-bigger .icon,.pretty.p-bigger .img,.pretty.p-bigger .svg,.pretty.p-bigger label:after,.pretty.p-bigger label:before{font-size:1.2em!important;top:calc(-135% + 1em)!important}.pretty.p-bigger label{text-indent:1.7em}@media print{.pretty .state .icon,.pretty .state:before,.pretty .state label:after,.pretty .state label:before{color-adjust:exact;-webkit-print-color-adjust:exact;print-color-adjust:exact}}body .pretty{margin:0;line-height:normal}body .pretty.p-smooth .icon,body .pretty.p-smooth .svg{transition:all .14s cubic-bezier(.55,0,.1,1)}body .pretty label a{position:relative;z-index:10}body .pretty:not(.p-switch):not(.p-radio),body .pretty:not(.p-switch):not(.p-radio) .state{height:18px}body .pretty:not(.p-switch):not(.p-radio) .state{display:flex;align-items:center}body .pretty:not(.p-switch):not(.p-radio).p-icon .state .icon{border-radius:4px;left:0;top:-1px;width:18px;height:18px}body .pretty:not(.p-switch):not(.p-radio).p-icon .state .icon,body .pretty:not(.p-switch):not(.p-radio).p-icon .state .icon:before{font-size:18px}body .pretty:not(.p-switch):not(.p-radio) .state label{min-width:18px;text-indent:26px;min-height:18px}body .pretty:not(.p-switch):not(.p-radio) .state label:after,body .pretty:not(.p-switch):not(.p-radio) .state label:before{width:18px;height:18px;top:0}body .pretty:not(.p-switch):not(.p-radio) .state label:before{background:transparent;border-radius:50%;transition:all .14s cubic-bezier(.55,0,.1,1)}body .pretty:not(.p-switch):not(.p-radio) .state label:after{background:#fff;border-radius:2px;border:2px solid rgba(0,0,0,.54);transition:all .24s cubic-bezier(.55,0,.1,1)}body .pretty:not(.p-switch):not(.p-radio) input:checked~.state label:after{border-color:#1976d2;background:#1976d2}body .pretty:not(.p-switch):not(.p-radio).p-custom input:checked~.state label:after{background:var(--color);border-color:var(--color)}body .pretty:not(.p-switch):not(.p-radio) input:checked[disabled]~.state label:after{border-color:#757575;background:#757575}body .pretty:not(.p-switch):not(.p-radio) input[disabled]~*{opacity:.6}body .pretty:not(.p-switch):not(.p-radio).p-icon input:checked~.state .icon{color:#fff}body .pretty:not(.p-switch):not(.p-radio) .state.p-is-indeterminate .icon{top:0;color:#fff}body .pretty:not(.p-switch):not(.p-radio) .state.p-is-indeterminate .icon,body .pretty:not(.p-switch):not(.p-radio) .state.p-is-indeterminate .icon:before{font-size:18px}body .pretty:not(.p-switch):not(.p-radio) .state.p-is-indeterminate label:after{border-color:#1976d2;background-color:#1976d2}body .pretty.p-radio,body .pretty.p-radio .state{min-height:20px}body .pretty.p-radio .state{display:flex;align-items:center;position:relative}body .pretty.p-radio .state:before{content:\"\";position:absolute;left:0;top:50%;width:20px;height:20px;border:2px solid rgba(0,0,0,.54);transition:all .24s cubic-bezier(.55,0,.1,1);border-radius:50%;box-sizing:border-box;margin-top:-10px;background:#fff}body .pretty.p-radio .state label{min-width:20px;text-indent:26px}body .pretty.p-radio .state label:before{background:transparent;border-radius:50%;border-color:transparent;transition:all .14s cubic-bezier(.55,0,.1,1);width:18px;height:18px;top:0}body .pretty.p-radio .state label:after{border-radius:50%;transition:all .24s cubic-bezier(.55,0,.1,1);width:10px;height:10px;top:50%;margin-top:-5px;left:5px}body .pretty.p-radio input:checked~.state:before{border-color:#1976d2}body .pretty.p-radio input:checked~.state label:after{background:#1976d2}body .pretty.p-radio input:checked[disabled]~.state:before{border-color:rgba(0,0,0,.54)}body .pretty.p-radio input:checked[disabled]~.state label:after{background:rgba(0,0,0,.54)}body .pretty.p-radio input[disabled]~*{opacity:.6}body .pretty.p-switch .state{height:26px}body .pretty.p-switch .state:before{border-radius:20px;height:14px;width:36px;background-color:rgba(0,0,0,.26);border:none;top:50%;margin-top:-7px;left:2px;transition:all .14s cubic-bezier(.55,0,.1,1)}body .pretty.p-switch .state label{text-indent:48px;line-height:28px;height:28px;min-width:38px}body .pretty.p-switch .state label:after,body .pretty.p-switch .state label:before{width:20px;height:20px;top:3px;box-shadow:0 1px 4px rgba(0,0,0,.55);transition:all .14s cubic-bezier(.55,0,.1,1);border:none;transform:none}body .pretty.p-switch .state label:after{background-color:#fff!important}body .pretty.p-switch input:checked~.state:before{background-color:#92c2f2}body .pretty.p-switch input:checked~.state label:after{left:20px;background-color:#1976d2!important}body .pretty.p-switch input:checked~.state.p-primary:before{background-color:#5cf1ff}body .pretty.p-switch input:checked~.state.p-primary label:after{background-color:#00838f!important}body .pretty.p-switch input:checked~.state.p-danger:before{background-color:#f6bebd}body .pretty.p-switch input:checked~.state.p-danger label:after{background-color:#e53935!important}body .pretty.p-switch input:checked~.state.p-success:before{background-color:#c8e1ad}body .pretty.p-switch input:checked~.state.p-success label:after{background-color:#7cb342!important}body .pretty.p-switch input:checked~.state.p-warning:before{background-color:#ffe199}body .pretty.p-switch input:checked~.state.p-warning label:after{background-color:#ffb300!important}body .pretty.uk-flex{display:flex}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/plugins/datatables.vue?vue&type=template&id=9a2b5758&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_c('ScCard', [_c('ScCardTitle', [_vm._v("\n\t\t\t\t\tZero configuration\n\t\t\t\t")]), _vm._v(" "), _c('ScCardBody', [_c('client-only', [_c('Datatable', {
    ref: "basicTable",
    attrs: {
      "id": "sc-basic-table",
      "data": _vm.dtAData
    },
    on: {
      "initComplete": _vm.dtBasicInitialized
    }
  }, [_c('tfoot', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('tr', [_c('th', [_vm._v("Id")]), _vm._v(" "), _c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Position")]), _vm._v(" "), _c('th', [_vm._v("Salary")]), _vm._v(" "), _c('th', {
    staticClass: "uk-text-nowrap"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\tStart date\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('th', [_vm._v("Office")]), _vm._v(" "), _c('th', [_vm._v("Extn.")])])])])], 1)], 1)], 1), _vm._ssrNode(" "), _c('ScCard', {
    staticClass: "uk-margin-top"
  }, [_c('ScCardTitle', [_vm._v("\n\t\t\t\t\tVertical Scroll\n\t\t\t\t")]), _vm._v(" "), _c('ScCardBody', [_c('client-only', [_c('Datatable', {
    ref: "vScrollTable",
    attrs: {
      "id": "sc-dt-scroll-v",
      "data": _vm.dtBData,
      "options": _vm.dtBOptions
    }
  })], 1)], 1)], 1), _vm._ssrNode(" "), _c('ScCard', {
    staticClass: "uk-margin-top"
  }, [_c('ScCardHeader', {
    attrs: {
      "separator": ""
    }
  }, [_c('div', {
    staticClass: "uk-flex-middle uk-grid-small uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', {
    staticClass: "uk-flex-1"
  }, [_c('ScCardTitle', [_vm._v("\n\t\t\t\t\t\t\t\tShow / hide columns dynamically\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('ScCardMeta', [_vm._v("\n\t\t\t\t\t\t\t\tlocalStorage\n\t\t\t\t\t\t\t")])], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-width-auto@s"
  }, [_c('button', {
    staticClass: "sc-button sc-button-primary sc-button-flex",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\tToggle Columns "), _c('i', {
    staticClass: "mdi mdi-chevron-down uk-margin-small-left"
  })]), _vm._v(" "), _c('div', {
    staticClass: "uk-dropdown uk-width-small",
    attrs: {
      "data-uk-drop": "mode: click"
    }
  }, [_c('div', {
    staticClass: "sc-padding-small"
  }, _vm._l(_vm.dtCHeaders, function (checkbox, index) {
    return _c('div', {
      key: index,
      staticClass: "uk-margin-small"
    }, [_c('PrettyCheck', {
      staticClass: "p-icon",
      attrs: {
        "value": index,
        "checked": checkbox.checked,
        "disabled": checkbox.disabled
      },
      on: {
        "change": function ($event) {
          return _vm.toggleCol($event, index);
        }
      }
    }, [_c('i', {
      staticClass: "icon mdi mdi-check",
      attrs: {
        "slot": "extra"
      },
      slot: "extra"
    }), _vm._v("\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(checkbox.name) + "\n\t\t\t\t\t\t\t\t\t\t")])], 1);
  }), 0)])])])]), _vm._v(" "), _c('ScCardBody', [_c('client-only', [_c('Datatable', {
    ref: "colToggleTable",
    attrs: {
      "id": "sc-dt-columns-toggle",
      "data": _vm.dtCData,
      "options": _vm.dtCOptions
    },
    on: {
      "initComplete": _vm.dtCInitialized
    }
  })], 1)], 1)], 1), _vm._ssrNode(" "), _c('ScCard', {
    staticClass: "uk-margin-top"
  }, [_c('ScCardHeader', {
    attrs: {
      "separator": ""
    }
  }, [_c('div', {
    staticClass: "uk-flex-middle uk-grid-small uk-grid",
    attrs: {
      "data-uk-grid": ""
    }
  }, [_c('div', {
    staticClass: "uk-flex-1"
  }, [_c('ScCardTitle', [_vm._v("\n\t\t\t\t\t\t\t\tButtons\n\t\t\t\t\t\t\t")])], 1), _vm._v(" "), _c('div', {
    staticClass: "uk-width-auto@s"
  }, [_c('div', {
    attrs: {
      "id": "sc-dt-buttons"
    }
  })])])]), _vm._v(" "), _c('ScCardBody', [_c('client-only', [_c('Datatable', {
    ref: "buttonsTable",
    attrs: {
      "id": "sc-dt-buttons-table",
      "data": _vm.dtDData,
      "options": _vm.dtDOptions,
      "buttons": true
    },
    on: {
      "initComplete": _vm.dtButtonsInitialized
    }
  })], 1)], 1)], 1)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/plugins/datatables.vue?vue&type=template&id=9a2b5758&

// EXTERNAL MODULE: external "pretty-checkbox-vue/check"
var check_ = __webpack_require__(96);
var check_default = /*#__PURE__*/__webpack_require__.n(check_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/plugins/datatables.vue?vue&type=script&lang=js&


const rows = __webpack_require__(627);

/* harmony default export */ var datatablesvue_type_script_lang_js_ = ({
  name: 'PluginsDatatables',
  components: {
    Datatable:  false ? undefined : null,
    PrettyCheck: check_default.a
  },
  data: () => ({
    dtAData: JSON.parse(JSON.stringify(rows)),
    dtBData: JSON.parse(JSON.stringify(rows)),
    dtBOptions: {
      "scrollY": "200px",
      "scrollCollapse": true,
      "paging": false,
      responsive: 'responsiveModal'
    },
    dtCData: JSON.parse(JSON.stringify(rows)),
    dtCHeaders: [],
    dtCOptions: {
      "pagingType": "full_numbers",
      select: true,
      "stateSave": true,

      stateSaveCallback(settings, data) {
        localStorage.setItem('dtC', JSON.stringify(data));
      },

      stateLoadCallback(settings) {
        return JSON.parse(localStorage.getItem('dtC'));
      }

    },
    dtDData: JSON.parse(JSON.stringify(rows)),
    dtDOptions: {
      buttons: [{
        extend: "copyHtml5",
        className: "sc-button",
        text: 'Copy'
      }, {
        extend: "csvHtml5",
        className: "sc-button",
        text: 'CSV '
      }, {
        extend: "excelHtml5",
        className: "sc-button",
        text: 'Excel '
      }, {
        extend: "pdfHtml5",
        className: "sc-button sc-button-icon",
        text: '<i class="mdi mdi-file-pdf md-color-red-800"></i>'
      }, {
        extend: "print",
        className: "sc-button sc-button-icon",
        text: '<i class="mdi mdi-printer"></i>',
        title: 'Custom Title',
        messageTop: 'Custom message on the top',
        messageBottom: 'Custom message on the bottom',
        autoPrint: true
      }]
    }
  }),
  methods: {
    dtBasicInitialized() {
      // basic table manipulation
      const basicTable = this.$refs.basicTable.$dt; // Go to last page

      basicTable.page('last').draw('page'); // add new row

      setTimeout(() => {
        this.dtAData.push({
          "id": "1000",
          "name": "New User",
          "position": "New position",
          "salary": "$222,222",
          "start_date": "2018\/03\/22",
          "office": "New York",
          "extn": "1111"
        });
      }, 1000); // go to first page

      setTimeout(() => {
        basicTable.page('first').draw('page');
      }, 1200); // remove row (id = '4')

      setTimeout(() => {
        var index = this.dtAData.map(obj => {
          return obj.id;
        }).indexOf('3');
        this.dtAData.splice(index, 1);
      }, 2000);
    },

    dtCInitialized() {
      const ls = JSON.parse(localStorage.getItem('dtC'));
      this.$refs.colToggleTable.headers.forEach((value, i) => {
        this.dtCHeaders.push({
          'name': value,
          checked: ls.columns[i].visible,
          disabled: i === 0
        });
      });
    },

    dtButtonsInitialized() {
      // append buttons to custom container
      this.$refs.buttonsTable.$dt.buttons().container().appendTo(document.getElementById('sc-dt-buttons'));
    },

    toggleCol(e, col) {
      var column = this.$refs.colToggleTable.$dt.column(col);
      column.visible(e).draw('page');
    }

  }
});
// CONCATENATED MODULE: ./pages/plugins/datatables.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_datatablesvue_type_script_lang_js_ = (datatablesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/plugins/datatables.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(628)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  plugins_datatablesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6007503c"
  
)

/* harmony default export */ var datatables = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=datatables.js.map