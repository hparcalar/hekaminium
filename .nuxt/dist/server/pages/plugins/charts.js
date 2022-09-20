exports.ids = [119];
exports.modules = {

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
let Chart = {};


if (false) {}

/* unused harmony default export */ var _unused_webpack_default_export = (Chart);

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "vue-chartjs"
var external_vue_chartjs_ = __webpack_require__(105);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chartjs/Doughnut.vue?vue&type=script&lang=js&

/* harmony default export */ var Doughnutvue_type_script_lang_js_ = ({
  name: 'ChartJsDoughnut',
  extends: external_vue_chartjs_["Doughnut"],
  props: {
    data: {
      type: Object,

      default() {
        return {};
      }

    },
    options: {
      type: Object,

      default() {
        return {};
      }

    }
  },

  mounted() {
    this.renderChart(this.data, this.options);
  }

});
// CONCATENATED MODULE: ./components/chartjs/Doughnut.vue?vue&type=script&lang=js&
 /* harmony default export */ var chartjs_Doughnutvue_type_script_lang_js_ = (Doughnutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/chartjs/Doughnut.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  chartjs_Doughnutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "499e04cc"
  
)

/* harmony default export */ var Doughnut = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "vue-chartjs"
var external_vue_chartjs_ = __webpack_require__(105);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chartjs/Pie.vue?vue&type=script&lang=js&

/* harmony default export */ var Pievue_type_script_lang_js_ = ({
  name: 'ChartJsPie',
  extends: external_vue_chartjs_["Pie"],
  props: {
    data: {
      type: Object,

      default() {
        return {};
      }

    },
    options: {
      type: Object,

      default() {
        return {};
      }

    }
  },

  mounted() {
    this.renderChart(this.data, this.options);
  }

});
// CONCATENATED MODULE: ./components/chartjs/Pie.vue?vue&type=script&lang=js&
 /* harmony default export */ var chartjs_Pievue_type_script_lang_js_ = (Pievue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/chartjs/Pie.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  chartjs_Pievue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "288dc224"
  
)

/* harmony default export */ var Pie = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "vue-chartjs"
var external_vue_chartjs_ = __webpack_require__(105);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chartjs/Line.vue?vue&type=script&lang=js&

/* harmony default export */ var Linevue_type_script_lang_js_ = ({
  name: 'ChartJsLine',
  extends: external_vue_chartjs_["Line"],
  props: {
    data: {
      type: Object,

      default() {
        return {};
      }

    },
    options: {
      type: Object,

      default() {
        return {};
      }

    }
  },

  mounted() {
    this.renderChart(this.data, this.options);
  }

});
// CONCATENATED MODULE: ./components/chartjs/Line.vue?vue&type=script&lang=js&
 /* harmony default export */ var chartjs_Linevue_type_script_lang_js_ = (Linevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/chartjs/Line.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  chartjs_Linevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5be7c48c"
  
)

/* harmony default export */ var Line = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/plugins/charts.vue?vue&type=template&id=437ad5da&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_vm._ssrNode("<h3 class=\"uk-heading-line\"><span>Billboard.js</span></h3> "), _vm._ssrNode("<div data-uk-grid class=\"uk-child-width-1-2@m uk-grid\">", "</div>", [_vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardTitle', [_vm._v("\n\t\t\t\t\t\t\tArea Chart\n\t\t\t\t\t\t")]), _vm._v(" "), _c('ScCardBody', [_c('client-only', [_c('BillboardChart', {
    attrs: {
      "options": _vm.bb.areaChart
    }
  })], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardTitle', [_vm._v("\n\t\t\t\t\t\t\tBar Chart\n\t\t\t\t\t\t")]), _vm._v(" "), _c('ScCardBody', [_c('client-only', [_c('BillboardChart', {
    attrs: {
      "options": _vm.bb.barChart
    }
  })], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardTitle', [_vm._v("\n\t\t\t\t\t\t\tDonut Chart\n\t\t\t\t\t\t")]), _vm._v(" "), _c('ScCardBody', [_c('client-only', [_c('BillboardChart', {
    attrs: {
      "options": _vm.bb.donutChart
    }
  })], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardTitle', [_vm._v("\n\t\t\t\t\t\t\tLine Chart\n\t\t\t\t\t\t")]), _vm._v(" "), _c('ScCardBody', [_c('client-only', [_c('BillboardChart', {
    attrs: {
      "options": _vm.bb.lineChart
    }
  })], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardTitle', [_vm._v("\n\t\t\t\t\t\t\tRadar Chart\n\t\t\t\t\t\t")]), _vm._v(" "), _c('ScCardBody', [_c('client-only', [_c('BillboardChart', {
    attrs: {
      "options": _vm.bb.radarChart
    }
  })], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardTitle', [_vm._v("\n\t\t\t\t\t\t\tScatter Chart\n\t\t\t\t\t\t")]), _vm._v(" "), _c('ScCardBody', [_c('client-only', [_c('BillboardChart', {
    attrs: {
      "options": _vm.bb.scatterChart
    }
  })], 1)], 1)], 1)], 1)], 2), _vm._ssrNode(" <h3 class=\"uk-heading-line uk-margin-large-top\"><span>Chart.js</span></h3> "), _vm._ssrNode("<div data-uk-grid class=\"uk-child-width-1-2@m uk-grid\">", "</div>", [_vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardBody', {
    staticClass: "sc-chart-chartjs"
  }, [_c('ChartJsBar', {
    attrs: {
      "chart-id": "cjsBarChartData",
      "data": _vm.cjsBarChartData,
      "options": _vm.cjs.barChart.options
    }
  })], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardBody', {
    staticClass: "sc-chart-chartjs"
  }, [_c('ChartJsBar', {
    attrs: {
      "chart-id": "cjsBarStackedChartData",
      "data": _vm.cjsBarStackedChartData,
      "options": _vm.cjs.barStackedChart.options
    }
  })], 1)], 1)], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div data-uk-grid class=\"uk-child-width-1-2@m uk-grid\">", "</div>", [_vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardBody', {
    staticClass: "sc-chart-chartjs"
  }, [_c('ChartJsLine', {
    attrs: {
      "chart-id": "cjsLineChartData",
      "data": _vm.cjsLineChartData,
      "options": _vm.cjs.lineChart.options
    }
  })], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardBody', {
    staticClass: "sc-chart-chartjs"
  }, [_c('ChartJsLine', {
    attrs: {
      "chart-id": "cjsLineInterpolationChartData",
      "data": _vm.cjsLineInterpolationChartData,
      "options": _vm.cjs.lineInterpolationChart.options
    }
  })], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardBody', {
    staticClass: "sc-chart-chartjs"
  }, [_c('ChartJsLine', {
    attrs: {
      "chart-id": "cjsLineSteppedChartData",
      "data": _vm.cjsLineSteppedChartData,
      "options": _vm.cjs.lineSteppedChart.options
    }
  })], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardBody', {
    staticClass: "sc-chart-chartjs"
  }, [_c('ChartJsLine', {
    attrs: {
      "chart-id": "cjsLinePointsChartData",
      "data": _vm.cjsLinePointsChartData,
      "options": _vm.cjs.linePointsChart.options
    }
  })], 1)], 1)], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div data-uk-grid class=\"uk-child-width-1-2@m uk-grid\">", "</div>", [_vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardBody', {
    staticClass: "sc-chart-chartjs"
  }, [_c('ChartJsLine', {
    attrs: {
      "chart-id": "cjsAreaChartData",
      "data": _vm.cjsAreaChartData,
      "options": _vm.cjs.areaChart.options
    }
  })], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardBody', {
    staticClass: "sc-chart-chartjs"
  }, [_c('ChartJsLine', {
    attrs: {
      "chart-id": "cjsAreaStackedChartData",
      "data": _vm.cjsAreaStackedChartData,
      "options": _vm.cjs.areaStackedChart.options
    }
  })], 1)], 1)], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div data-uk-grid class=\"uk-child-width-1-3@l uk-child-width-1-2@m uk-grid\">", "</div>", [_vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardBody', {
    staticClass: "sc-chart-chartjs"
  }, [_c('ChartJsDoughnut', {
    attrs: {
      "chart-id": "cjsDoughnutChartData",
      "data": _vm.cjsDoughnutChartData,
      "options": _vm.cjs.doughnutChart.options
    }
  })], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardBody', {
    staticClass: "sc-chart-chartjs"
  }, [_c('ChartJsPie', {
    attrs: {
      "chart-id": "cjsPieChartData",
      "data": _vm.cjsPieChartData,
      "options": _vm.cjs.pieChart.options
    }
  })], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardBody', {
    staticClass: "sc-chart-chartjs"
  }, [_c('ChartJsPolarArea', {
    attrs: {
      "chart-id": "cjsPolarAreaChart",
      "data": _vm.cjsPolarAreaChart,
      "options": _vm.cjs.polarAreaChart.options
    }
  })], 1)], 1)], 1)], 2)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/plugins/charts.vue?vue&type=template&id=437ad5da&

// EXTERNAL MODULE: ./assets/js/utils.js + 5 modules
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./components/chartjs/defaults.js
var defaults = __webpack_require__(298);

// EXTERNAL MODULE: external "vue-chartjs"
var external_vue_chartjs_ = __webpack_require__(105);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chartjs/Bar.vue?vue&type=script&lang=js&

/* harmony default export */ var Barvue_type_script_lang_js_ = ({
  name: 'ChartJsBar',
  extends: external_vue_chartjs_["Bar"],
  props: {
    data: {
      type: Object,

      default() {
        return {};
      }

    },
    options: {
      type: Object,

      default() {
        return {};
      }

    }
  },

  mounted() {
    this.renderChart(this.data, this.options);
  }

});
// CONCATENATED MODULE: ./components/chartjs/Bar.vue?vue&type=script&lang=js&
 /* harmony default export */ var chartjs_Barvue_type_script_lang_js_ = (Barvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/chartjs/Bar.vue
var Bar_render, Bar_staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  chartjs_Barvue_type_script_lang_js_,
  Bar_render,
  Bar_staticRenderFns,
  false,
  null,
  null,
  "3706f12b"
  
)

/* harmony default export */ var Bar = (component.exports);
// EXTERNAL MODULE: ./components/chartjs/Line.vue + 2 modules
var Line = __webpack_require__(449);

// EXTERNAL MODULE: ./components/chartjs/Doughnut.vue + 2 modules
var Doughnut = __webpack_require__(447);

// EXTERNAL MODULE: ./components/chartjs/Pie.vue + 2 modules
var Pie = __webpack_require__(448);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chartjs/PolarArea.vue?vue&type=script&lang=js&

/* harmony default export */ var PolarAreavue_type_script_lang_js_ = ({
  name: 'ChartJsPolarArea',
  extends: external_vue_chartjs_["PolarArea"],
  props: {
    data: {
      type: Object,

      default() {
        return {};
      }

    },
    options: {
      type: Object,

      default() {
        return {};
      }

    }
  },

  mounted() {
    this.renderChart(this.data, this.options);
  }

});
// CONCATENATED MODULE: ./components/chartjs/PolarArea.vue?vue&type=script&lang=js&
 /* harmony default export */ var chartjs_PolarAreavue_type_script_lang_js_ = (PolarAreavue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/chartjs/PolarArea.vue
var PolarArea_render, PolarArea_staticRenderFns




/* normalize component */

var PolarArea_component = Object(componentNormalizer["a" /* default */])(
  chartjs_PolarAreavue_type_script_lang_js_,
  PolarArea_render,
  PolarArea_staticRenderFns,
  false,
  null,
  null,
  "d46bc3fa"
  
)

/* harmony default export */ var PolarArea = (PolarArea_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/plugins/charts.vue?vue&type=script&lang=js&







/* harmony default export */ var chartsvue_type_script_lang_js_ = ({
  name: 'PluginsCharts',
  components: {
    BillboardChart:  false ? undefined : null,
    ChartJsBar: Bar,
    ChartJsLine: Line["a" /* default */],
    ChartJsDoughnut: Doughnut["a" /* default */],
    ChartJsPie: Pie["a" /* default */],
    ChartJsPolarArea: PolarArea
  },
  data: () => ({
    bb: {
      areaChart: {
        data: {
          columns: [["data1", 300, 350, 300, 0, 0, 0], ["data2", 130, 100, 140, 200, 150, 50]],
          types: {
            data1: "area-spline",
            data2: "area"
          }
        },
        area: {
          linearGradient: true
        },
        color: {
          pattern: utils["a" /* scColors */].multi
        }
      },
      barChart: {
        data: {
          columns: [["data1", 30, 200, 100, 400, 150, 250], ["data2", 130, 100, 140, 200, 150, 50]],
          type: "bar"
        },
        bar: {
          width: {
            ratio: 0.5
          }
        },
        color: {
          pattern: utils["a" /* scColors */].multi
        },
        grid: {
          y: {
            show: true
          }
        }
      },
      donutChart: {
        data: {
          columns: [["data1", 30], ["data2", 120]],
          type: "donut",

          onclick(d, i) {
            console.log("onclick", d, i);
          },

          onover(d, i) {
            console.log("onover", d, i);
          },

          onout(d, i) {
            console.log("onout", d, i);
          }

        },
        donut: {
          title: "Iris Petal Width"
        },
        color: {
          pattern: utils["a" /* scColors */].multi
        }
      },
      lineChart: {
        data: {
          columns: [["data1", 30, 200, 100, 400, 150, 250], ["data2", 50, 20, 10, 40, 15, 25]]
        },
        color: {
          pattern: utils["a" /* scColors */].multi
        },
        grid: {
          x: {
            show: true
          },
          y: {
            show: true
          }
        }
      },
      radarChart: {
        data: {
          x: "x",
          columns: [["x", "Data A", "Data B", "Data C", "Data D", "Data E"], ["data1", 330, 350, 200, 380, 150], ["data2", 130, 100, 30, 200, 80], ["data3", 230, 153, 85, 300, 250]],
          type: "radar",
          labels: true
        },
        radar: {
          axis: {
            max: 400
          },
          level: {
            depth: 4
          },
          direction: {
            clockwise: true
          }
        },
        color: {
          pattern: utils["a" /* scColors */].multi
        }
      },
      scatterChart: {
        data: {
          xs: {
            setosa: "setosa_x",
            versicolor: "versicolor_x",
            virginica: "virginica_x"
          },
          columns: [["setosa_x", 3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3, 3.8, 3.2, 3.7, 3.3], ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3, 2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3, 2.7, 3, 2.9, 2.9, 2.5, 2.8], ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2], ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1, 1.3, 1.4, 1, 1.5, 1, 1.4, 1.3, 1.4, 1.5, 1, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1, 1.1, 1, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3]],
          type: "scatter"
        },
        axis: {
          x: {
            label: "Sepal.Width",
            tick: {
              fit: false
            }
          },
          y: {
            label: "Petal.Width"
          }
        },
        color: {
          pattern: utils["a" /* scColors */].multi
        }
      }
    },
    cjs: {
      barChart: {
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart'
          }
        }
      },
      barStackedChart: {
        options: {
          title: {
            display: true,
            text: 'Chart.js Bar Chart - Stacked'
          },
          tooltips: {
            mode: 'index',
            intersect: false
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              stacked: true
            }],
            yAxes: [{
              stacked: true
            }]
          }
        }
      },
      lineChart: {
        options: {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Chart.js Line Chart'
          },
          tooltips: {
            mode: 'index',
            intersect: false
          },
          hover: {
            mode: 'nearest',
            intersect: true
          },
          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Month'
              }
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Value'
              }
            }]
          }
        }
      },
      lineInterpolationChart: {
        options: {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Chart.js Line Chart - Cubic interpolation mode'
          },
          tooltips: {
            mode: 'index'
          },
          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                display: true
              }
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Value'
              },
              ticks: {
                suggestedMin: -10,
                suggestedMax: 200
              }
            }]
          }
        }
      },
      lineSteppedChart: {
        options: {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Step Before Interpolation'
          }
        }
      },
      linePointsChart: {
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: 'bottom'
          },
          hover: {
            mode: 'index'
          },
          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Month'
              }
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Value'
              }
            }]
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart - Different point sizes'
          }
        }
      },
      areaChart: {
        options: {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Chart.js - fill: start'
          }
        }
      },
      areaStackedChart: {
        options: {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Chart.js Line Chart - Stacked Area'
          },
          tooltips: {
            mode: 'index'
          },
          hover: {
            mode: 'index'
          },
          scales: {
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Month'
              }
            }],
            yAxes: [{
              stacked: true,
              scaleLabel: {
                display: true,
                labelString: 'Value'
              }
            }]
          }
        }
      },
      doughnutChart: {
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: 'right'
          },
          title: {
            display: true,
            text: 'Chart.js Doughnut Chart'
          },
          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
      },
      pieChart: {
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: 'right'
          },
          title: {
            display: true,
            text: 'Chart.js Pie Chart'
          }
        }
      },
      polarAreaChart: {
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: 'right'
          },
          title: {
            display: true,
            text: 'Chart.js Polar Area Chart'
          },
          scale: {
            ticks: {
              beginAtZero: true
            },
            reverse: false
          },
          animation: {
            animateRotate: false,
            animateScale: true
          }
        }
      }
    },
    seed: Date.now(),
    color:  false ? undefined : '#fff',
    cjsDatatpoints: [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170]
  }),
  computed: {
    cjsRandData() {
      return [this.cjsGenerateData(6), this.cjsGenerateData(6), this.cjsGenerateData(6), this.cjsGenerateData(6), this.cjsGenerateData(6), this.cjsGenerateData(6), this.cjsGenerateData(6), this.cjsGenerateData(6), this.cjsGenerateData(6), this.cjsGenerateData(6), this.cjsGenerateData(6), this.cjsGenerateData(6), this.cjsGenerateData(6), this.cjsGenerateData(6), this.cjsGenerateData(6), this.cjsGenerateData(6), this.cjsGenerateData(6), this.cjsGenerateData(5), // 17
      this.cjsGenerateData(5)];
    },

    cjsBarChartData() {
      return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Dataset 1',
          backgroundColor:  false ? undefined : this.color,
          borderColor: utils["a" /* scColors */].multi[0],
          borderWidth: 1,
          data: this.cjsRandData[0]
        }, {
          label: 'Dataset 2',
          backgroundColor:  false ? undefined : this.color,
          borderColor: utils["a" /* scColors */].multi[1],
          borderWidth: 1,
          data: this.cjsRandData[1]
        }]
      };
    },

    cjsBarStackedChartData() {
      return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Dataset 1',
          backgroundColor: utils["a" /* scColors */].multi[1],
          stack: 'Stack 0',
          data: this.cjsRandData[2]
        }, {
          label: 'Dataset 2',
          backgroundColor: utils["a" /* scColors */].multi[3],
          stack: 'Stack 0',
          data: this.cjsRandData[3]
        }, {
          label: 'Dataset 3',
          backgroundColor: utils["a" /* scColors */].multi[0],
          stack: 'Stack 1',
          data: this.cjsRandData[4]
        }]
      };
    },

    cjsLineChartData() {
      return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: utils["a" /* scColors */].multi[4],
          borderColor: utils["a" /* scColors */].multi[4],
          data: this.cjsRandData[5],
          fill: false
        }, {
          label: 'My Second dataset',
          fill: false,
          backgroundColor: utils["a" /* scColors */].multi[5],
          borderColor: utils["a" /* scColors */].multi[5],
          data: this.cjsRandData[6]
        }]
      };
    },

    cjsLineInterpolationChartData() {
      const self = this;
      return {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [{
          label: 'Cubic interpolation (monotone)',
          data: self.cjsDatatpoints,
          borderColor: utils["a" /* scColors */].multi[0],
          backgroundColor: 'rgba(0, 0, 0, 0)',
          fill: false,
          cubicInterpolationMode: 'monotone'
        }, {
          label: 'Cubic interpolation (default)',
          data: self.cjsDatatpoints,
          borderColor: utils["a" /* scColors */].multi[1],
          backgroundColor: 'rgba(0, 0, 0, 0)',
          fill: false
        }, {
          label: 'Linear interpolation',
          data: self.cjsDatatpoints,
          borderColor: utils["a" /* scColors */].multi[2],
          backgroundColor: 'rgba(0, 0, 0, 0)',
          fill: false,
          lineTension: 0
        }]
      };
    },

    cjsLineSteppedChartData() {
      return {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
        datasets: [{
          label: 'steppedLine: true',
          steppedLine: true,
          data: this.cjsRandData[7],
          borderColor: utils["a" /* scColors */].multi[5],
          fill: false
        }]
      };
    },

    cjsLinePointsChartData() {
      return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'dataset - big points',
          data: this.cjsRandData[8],
          backgroundColor: utils["a" /* scColors */].multi[0],
          borderColor: utils["a" /* scColors */].multi[0],
          fill: false,
          borderDash: [5, 5],
          pointRadius: 15,
          pointHoverRadius: 25
        }, {
          label: 'dataset - individual point sizes',
          data: this.cjsRandData[9],
          backgroundColor: utils["a" /* scColors */].multi[1],
          borderColor: utils["a" /* scColors */].multi[1],
          fill: false,
          borderDash: [5, 5],
          pointRadius: [2, 4, 6, 18, 0, 12, 20]
        }, {
          label: 'dataset - large pointHoverRadius',
          data: this.cjsRandData[10],
          backgroundColor: utils["a" /* scColors */].multi[2],
          borderColor: utils["a" /* scColors */].multi[2],
          fill: false,
          pointHoverRadius: 30
        }, {
          label: 'dataset - large pointHitRadius',
          data: this.cjsRandData[11],
          backgroundColor: utils["a" /* scColors */].multi[3],
          borderColor: utils["a" /* scColors */].multi[3],
          fill: false,
          pointHitRadius: 20
        }]
      };
    },

    cjsAreaChartData() {
      return {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: this.transparentize(utils["a" /* scColors */].multi[3]),
          borderColor: this.transparentize(utils["a" /* scColors */].multi[3]),
          data: this.cjsRandData[12],
          fill: 'start'
        }]
      };
    },

    cjsAreaStackedChartData() {
      return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'My First dataset',
          borderColor: utils["a" /* scColors */].multi[0],
          backgroundColor: utils["a" /* scColors */].multi[0],
          data: this.cjsRandData[13]
        }, {
          label: 'My Second dataset',
          borderColor: utils["a" /* scColors */].multi[1],
          backgroundColor: utils["a" /* scColors */].multi[1],
          data: this.cjsRandData[14]
        }, {
          label: 'My Third dataset',
          borderColor: utils["a" /* scColors */].multi[2],
          backgroundColor: utils["a" /* scColors */].multi[2],
          data: this.cjsRandData[15]
        }, {
          label: 'My Third dataset',
          borderColor: utils["a" /* scColors */].multi[3],
          backgroundColor: utils["a" /* scColors */].multi[3],
          data: this.cjsRandData[16]
        }]
      };
    },

    cjsDoughnutChartData() {
      return {
        datasets: [{
          data: this.cjsRandData[17],
          backgroundColor: [utils["a" /* scColors */].multi[0], utils["a" /* scColors */].multi[1], utils["a" /* scColors */].multi[2], utils["a" /* scColors */].multi[3], utils["a" /* scColors */].multi[4]],
          label: 'Dataset 1'
        }],
        labels: ['Blue', 'Orange', 'Green', 'Purple', 'Red']
      };
    },

    cjsPieChartData() {
      return {
        datasets: [{
          data: this.cjsRandData[18],
          backgroundColor: [utils["a" /* scColors */].multi[0], utils["a" /* scColors */].multi[1], utils["a" /* scColors */].multi[2], utils["a" /* scColors */].multi[3], utils["a" /* scColors */].multi[4]],
          label: 'Dataset 1'
        }],
        labels: ['Blue', 'Orange', 'Green', 'Purple', 'Red']
      };
    },

    cjsPolarAreaChart() {
      let randomScalingFactor = () => {
        return Math.round(Math.random() * 100);
      };

      return {
        datasets: [{
          data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
          backgroundColor: [ false ? undefined : utils["a" /* scColors */].multi[0],  false ? undefined : utils["a" /* scColors */].multi[1],  false ? undefined : utils["a" /* scColors */].multi[2],  false ? undefined : utils["a" /* scColors */].multi[3],  false ? undefined : utils["a" /* scColors */].multi[4]],
          label: 'My dataset'
        }],
        labels: ['Blue', 'Orange', 'Green', 'Purple', 'Red']
      };
    }

  },

  mounted() {
    // update bb bar chart
    setTimeout(() => {
      this.bb.barChart.data.columns.push(["data3", 130, -150, 200, 300, -200, 100]);
    }, 1000); // update bb donut chart

    setTimeout(() => {
      this.bb.donutChart.data.columns.push(["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2]);
      this.bb.donutChart.data.columns.push(["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3]);
      this.bb.donutChart.data.columns.push(["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]);
    }, 1500);
    setTimeout(() => {
      this.bb.donutChart.data.columns.splice(0, 2);
    }, 2500); // update bb line chart

    setTimeout(() => {// this.bb.lineChart.data.columns.push(["data1", 230, 190, 300, 500, 300, 400]);
    }, 1000);
    setTimeout(() => {
      this.bb.lineChart.data.columns.push(["data3", 130, 150, 200, 300, 200, 100]);
    }, 1500);
    setTimeout(() => {
      this.bb.lineChart.data.columns.splice(0, 1);
    }, 1500); // update bb scatter chart

    setTimeout(() => {
      this.bb.scatterChart.data.columns.push(["virginica_x", 3.3, 2.7, 3.0, 2.9, 3.0, 3.0, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3.0, 2.5, 2.8, 3.2, 3.0, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3.0, 2.8, 3.0, 2.8, 3.8, 2.8, 2.8, 2.6, 3.0, 3.4, 3.1, 3.0, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3.0, 2.5, 3.0, 3.4, 3.0]);
      this.bb.scatterChart.data.columns.push(["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]);
    }, 1000);
    setTimeout(() => {
      var index = this.bb.scatterChart.data.columns.map(item => {
        return item[0];
      }).indexOf('setosa');
      this.bb.scatterChart.data.columns.splice(index, 1);
    }, 2000);
    setTimeout(() => {
      this.bb.scatterChart.data.columns.push(["virginica", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2]);
    }, 3000);
  },

  methods: {
    cjsRandomizeData(min, max) {
      let seed = this.seed;
      min = min === undefined ? 0 : min;
      max = max === undefined ? 1 : max;
      this.seed = (seed * 9301 + 49297) % 233280;
      return min + this.seed / 233280 * (max - min);
    },

    cjsGenerateData(items) {
      let data = [];

      for (let i = 0; i < items; i++) {
        data.push(Math.round(this.cjsRandomizeData(-100, 100)));
      }

      return data;
    },

    transparentize(color, opacity) {
      var alpha = opacity === undefined ? 0.5 : 1 - opacity;
      return  false ? undefined : color;
    }

  }
});
// CONCATENATED MODULE: ./pages/plugins/charts.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_chartsvue_type_script_lang_js_ = (chartsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/plugins/charts.vue





/* normalize component */

var charts_component = Object(componentNormalizer["a" /* default */])(
  plugins_chartsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "19418fb0"
  
)

/* harmony default export */ var charts = __webpack_exports__["default"] = (charts_component.exports);

/***/ })

};;
//# sourceMappingURL=charts.js.map