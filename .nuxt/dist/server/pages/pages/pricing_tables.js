exports.ids = [110];
exports.modules = {

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/pricing_tables.vue?vue&type=template&id=bb8ecc22&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_vm._ssrNode("<div class=\"uk-flex uk-flex-center\">", "</div>", [_vm._ssrNode("<div class=\"uk-width-3-4@l\">", "</div>", [_vm._ssrNode("<div data-uk-grid class=\"uk-child-width-1-3@l uk-child-width-1-2@s uk-grid\">", "</div>", _vm._l(_vm.data, function (table) {
    return _vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardBody', {
      staticClass: "sc-padding-remove"
    }, [_c('div', {
      staticClass: "sc-padding sc-round-top",
      class: {
        'sc-light md-bg-light-blue-600': table.default
      }
    }, [_c('div', {
      staticClass: "uk-flex uk-flex-middle uk-grid-small",
      attrs: {
        "data-uk-grid": ""
      }
    }, [_c('div', {
      staticClass: "uk-width-expand@s uk-text-center@xs"
    }, [_c('h3', {
      staticClass: "uk-margin-remove"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(table.title) + "\n\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
      staticClass: "uk-text-uppercase uk-text-small sc-color-secondary"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(table.subtitle) + "\n\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('div', {
      staticClass: "uk-width-auto@s uk-text-center@xs"
    }, [_c('h1', {
      staticClass: "sc-pricing-table-amount uk-margin-remove uk-display-inline-block sc-text-semibold"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(table.price) + "\n\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', {
      staticClass: "uk-text-small sc-color-secondary"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t/month\n\t\t\t\t\t\t\t\t\t\t\t\t")])])])]), _vm._v(" "), _c('hr', {
      staticClass: "uk-margin-remove"
    }), _vm._v(" "), _c('div', {
      staticClass: "sc-padding-large"
    }, [_c('ul', {
      staticClass: "uk-list uk-list-large uk-margin-bottom"
    }, [_c('li', {
      staticClass: "uk-text-large"
    }, [_c('i', {
      staticClass: "mdi mdi-check uk-margin-right md-color-green-500"
    }), _vm._v(_vm._s(table.features.ram) + "\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('li', {
      staticClass: "uk-text-large"
    }, [_c('i', {
      staticClass: "mdi mdi-check uk-margin-right md-color-green-500"
    }), _vm._v(_vm._s(table.features.cpu) + "\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('li', {
      staticClass: "uk-text-large"
    }, [_c('i', {
      staticClass: "mdi mdi-check uk-margin-right md-color-green-500"
    }), _vm._v(_vm._s(table.features.disk) + "\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('li', {
      staticClass: "uk-text-large"
    }, [_c('i', {
      staticClass: "mdi mdi-check uk-margin-right md-color-green-500"
    }), _vm._v(" "), _c('span', {
      domProps: {
        "innerHTML": _vm._s(table.features.transfer)
      }
    })]), _vm._v(" "), _c('li', {
      staticClass: "uk-text-large"
    }, [_c('i', {
      staticClass: "mdi mdi-check uk-margin-right md-color-green-500"
    }), _vm._v(_vm._s(table.features.users) + "\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !table.features.mailchimp,
        expression: "!table.features.mailchimp"
      }],
      staticClass: "uk-text-large"
    }, [_c('i', {
      staticClass: "mdi mdi-check uk-margin-right md-color-grey-400"
    }), _c('span', {
      staticClass: "md-color-grey-400"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tMailchimp Integration\n\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: table.features.mailchimp,
        expression: "table.features.mailchimp"
      }],
      staticClass: "uk-text-large"
    }, [_c('i', {
      staticClass: "mdi mdi-check uk-margin-right md-color-green-500"
    }), _vm._v("Mailchimp Integration\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !table.features.support,
        expression: "!table.features.support"
      }],
      staticClass: "uk-text-large"
    }, [_c('i', {
      staticClass: "mdi mdi-check uk-margin-right md-color-grey-400"
    }), _c('span', {
      staticClass: "md-color-grey-400"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t24/7 Support\n\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: table.features.support,
        expression: "table.features.support"
      }],
      staticClass: "uk-text-large"
    }, [_c('i', {
      staticClass: "mdi mdi-check uk-margin-right md-color-green-500"
    }), _vm._v("24/7 Support\n\t\t\t\t\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c('hr', {
      staticClass: "uk-margin-remove"
    }), _vm._v(" "), _c('div', {
      staticClass: "sc-padding md-bg-grey-200 uk-text-center"
    }, [_c('button', {
      staticClass: "sc-button sc-button-large sc-button-block",
      class: {
        'sc-button-custom md-bg-light-blue-600': table.default
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\tSign Up\n\t\t\t\t\t\t\t\t\t\t")])])])], 1)], 1);
  }), 0), _vm._ssrNode(" <hr class=\"uk-margin-large\"> "), _c('ScCard', [_c('ScCardBody', [_c('h1', {
    staticClass: "uk-text-center uk-margin-small-bottom"
  }, [_vm._v("\n\t\t\t\t\t\t\t\tPlans & Pricing\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('p', {
    staticClass: "uk-text-center uk-margin-top-remove uk-margin-large-bottom"
  }, [_vm._v("\n\t\t\t\t\t\t\t\tFree 14-day trial. No credit card required.\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "uk-overflow-auto"
  }, [_c('table', {
    staticClass: "uk-table uk-table-hover uk-table-border-inside uk-table-middle"
  }, [_c('thead', [_c('tr', [_c('th', {
    staticClass: "uk-table-border-remove"
  }), _vm._v(" "), _c('th', {
    staticClass: "uk-width-1-6 uk-text-center md-bg-grey-100"
  }, [_c('span', {
    staticClass: "uk-display-block sc-text-semibold uk-text-large md-color-red-600"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tPersonal\n\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', [_vm._v("For Freelancers")])]), _vm._v(" "), _c('th', {
    staticClass: "uk-width-1-6 uk-text-center md-bg-grey-100"
  }, [_c('span', {
    staticClass: "uk-display-block sc-text-semibold uk-text-large md-color-blue-600"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tTeam\n\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', [_vm._v("For small teams")])]), _vm._v(" "), _c('th', {
    staticClass: "uk-width-1-6 uk-text-center md-bg-grey-100"
  }, [_c('span', {
    staticClass: "uk-display-block sc-text-semibold uk-text-large md-color-green-600"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tEnterprise\n\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('span', [_vm._v("For large teams")])])])]), _vm._v(" "), _c('tbody', [_c('tr', {
    staticClass: "uk-table-hover-disable"
  }, [_c('td', {
    staticClass: "uk-table-border-remove"
  }), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('div', {
    staticClass: "sc-padding"
  }, [_c('h1', {
    staticClass: "uk-margin-remove uk-display-inline-block sc-text-semibold"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t$5\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v("/mo\n\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('div', {
    staticClass: "sc-padding"
  }, [_c('h1', {
    staticClass: "uk-margin-remove uk-display-inline-block sc-text-semibold"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t$20\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v("/mo\n\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('div', {
    staticClass: "sc-padding"
  }, [_c('h1', {
    staticClass: "uk-margin-remove uk-display-inline-block sc-text-semibold"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t$99\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v("/mo\n\t\t\t\t\t\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c('tr', {
    staticClass: "md-bg-grey-100"
  }, [_c('td', [_c('strong', {
    staticClass: "uk-text-uppercase"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tFeatures\n\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "uk-text-nowrap"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tAPI Projects\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center uk-text-large"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t3\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center uk-text-large"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t10\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center uk-text-large"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tUnlimited\n\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "uk-text-nowrap"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tNumber of keywords\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center uk-text-large"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t5\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center uk-text-large"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t15\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center uk-text-large"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t50\n\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tCustomization of your web page (Logo, cover, videos, photos)\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('i', {
    staticClass: "mdi mdi-check md-color-green-500"
  })]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('i', {
    staticClass: "mdi mdi-check md-color-green-500"
  })]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('i', {
    staticClass: "mdi mdi-check md-color-green-500"
  })])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Email templates HTML + RWD")]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('i', {
    staticClass: "mdi mdi-minus md-color-grey-400"
  })]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('i', {
    staticClass: "mdi mdi-check md-color-green-500"
  })]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('i', {
    staticClass: "mdi mdi-check md-color-green-500"
  })])]), _vm._v(" "), _c('tr', {
    staticClass: "md-bg-grey-100"
  }, [_c('td', [_c('strong', {
    staticClass: "uk-text-uppercase"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tOther benefits\n\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "uk-text-nowrap"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tTeam Management\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('i', {
    staticClass: "mdi mdi-minus md-color-grey-400"
  })]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('i', {
    staticClass: "mdi mdi-check md-color-green-500"
  })]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('i', {
    staticClass: "mdi mdi-check md-color-green-500"
  })])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "uk-text-nowrap"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tAdvanced GitHub Integration\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('i', {
    staticClass: "mdi mdi-check md-color-green-500"
  })]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('i', {
    staticClass: "mdi mdi-check md-color-green-500"
  })]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('i', {
    staticClass: "mdi mdi-check md-color-green-500"
  })])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "uk-text-nowrap"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tMailchimp Integration\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('i', {
    staticClass: "mdi mdi-check md-color-green-500"
  })]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('i', {
    staticClass: "mdi mdi-check md-color-green-500"
  })]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('i', {
    staticClass: "mdi mdi-check md-color-green-500"
  })])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "uk-text-nowrap"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tAnalytics Integration\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('i', {
    staticClass: "mdi mdi-minus md-color-grey-400"
  })]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('i', {
    staticClass: "mdi mdi-check md-color-green-500"
  })]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('i', {
    staticClass: "mdi mdi-check md-color-green-500"
  })])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "uk-text-nowrap"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\tSSL Security Included\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('i', {
    staticClass: "mdi mdi-minus md-color-grey-400"
  })]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('i', {
    staticClass: "mdi mdi-check md-color-green-500"
  })]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('i', {
    staticClass: "mdi mdi-check md-color-green-500"
  })])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "uk-text-nowrap"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t24/7 Support\n\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('i', {
    staticClass: "mdi mdi-minus md-color-grey-400"
  })]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('i', {
    staticClass: "mdi mdi-minus md-color-grey-400"
  })]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('i', {
    staticClass: "mdi mdi-check md-color-green-500"
  })])]), _vm._v(" "), _c('tr', {
    staticClass: "uk-table-hover-disable"
  }, [_c('td', {
    staticClass: "uk-table-border-remove"
  }), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('button', {
    staticClass: "sc-button sc-button-custom md-bg-red-600"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tTry it Free\n\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('button', {
    staticClass: "sc-button sc-button-custom md-bg-blue-600"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tTry it Free\n\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('td', {
    staticClass: "uk-text-center"
  }, [_c('button', {
    staticClass: "sc-button sc-button-custom md-bg-green-600"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tTry it Free\n\t\t\t\t\t\t\t\t\t\t\t\t")])])])])])])])], 1)], 2)])])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/pages/pricing_tables.vue?vue&type=template&id=bb8ecc22&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pages/pricing_tables.vue?vue&type=script&lang=js&
/* harmony default export */ var pricing_tablesvue_type_script_lang_js_ = ({
  name: 'PagesPricingTables',
  data: () => ({
    data: [{
      id: 1,
      title: 'Personal',
      subtitle: 'For Frelancers',
      price: '$5',
      features: {
        ram: '512MB Memory',
        cpu: '1 Core Processor',
        disk: '10GB SSD Disk',
        transfer: '1TB Transfer',
        users: '1 User',
        mailchimp: false,
        support: false
      }
    }, {
      id: 2,
      default: true,
      title: 'Team',
      subtitle: 'For small teams',
      price: '$20',
      features: {
        ram: '4BG Memory',
        cpu: '2 Core Processor',
        disk: '20GB SSD Disk',
        transfer: '8TB Transfer',
        users: '5 Users',
        mailchimp: true,
        support: false
      }
    }, {
      id: 3,
      title: 'Enterprise',
      subtitle: 'For large teams',
      price: '$99',
      features: {
        ram: '32BG Memory',
        cpu: '8 Core Processor',
        disk: '1000GB SSD Disk',
        transfer: '<strong>Unlimited</strong> Transfer',
        users: '50 Users',
        mailchimp: true,
        support: true
      }
    }]
  })
});
// CONCATENATED MODULE: ./pages/pages/pricing_tables.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_pricing_tablesvue_type_script_lang_js_ = (pricing_tablesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/pages/pricing_tables.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_pricing_tablesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "58fd54a6"
  
)

/* harmony default export */ var pricing_tables = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=pricing_tables.js.map