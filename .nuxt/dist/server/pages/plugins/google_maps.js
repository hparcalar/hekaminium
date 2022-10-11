exports.ids = [125];
exports.modules = {

/***/ 443:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgIDxwYXRoIGZpbGw9IiNlNTM5MzUiIGQ9Ik0xMiwxMS41QTIuNSwyLjUgMCAwLDEgOS41LDlBMi41LDIuNSAwIDAsMSAxMiw2LjVBMi41LDIuNSAwIDAsMSAxNC41LDlBMi41LDIuNSAwIDAsMSAxMiwxMS41TTEyLDJBNyw3IDAgMCwwIDUsOUM1LDE0LjI1IDEyLDIyIDEyLDIyQzEyLDIyIDE5LDE0LjI1IDE5LDlBNyw3IDAgMCwwIDEyLDJaIiAvPg0KPC9zdmc+"

/***/ }),

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/plugins/google_maps.vue?vue&type=template&id=420df1dc&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "sc-page-wrapper"
    }
  }, [_vm._ssrNode("<div id=\"sc-page-content\">", "</div>", [_vm._ssrNode("<div data-uk-grid class=\"uk-child-width-1-2@l uk-grid\">", "</div>", [_vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardTitle', [_vm._v("\n\t\t\t\t\t\t\tMarkers\n\t\t\t\t\t\t")]), _vm._v(" "), _c('ScCardBody', [_c('client-only', [_c('GmapMap', {
    staticClass: "sc-gmap",
    attrs: {
      "center": _vm.map1.center,
      "zoom": _vm.map1.zoom,
      "options": _vm.map1.options
    }
  }, _vm._l(_vm.markers, function (m) {
    return _c('GmapMarker', {
      key: m.id,
      attrs: {
        "position": m.position,
        "title": m.title,
        "clickable": true,
        "icon": _vm.markerIcon
      }
    });
  }), 1)], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardTitle', [_vm._v("\n\t\t\t\t\t\t\tRoute\n\t\t\t\t\t\t")]), _vm._v(" "), _c('ScCardBody', [_c('client-only', [_c('GmapMap', {
    ref: "map2",
    staticClass: "sc-gmap",
    attrs: {
      "center": _vm.map2.center,
      "zoom": _vm.map2.zoom,
      "options": _vm.map2.options
    },
    on: {
      "tilesloaded": _vm.setRoute
    }
  })], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('ScCardTitle', [_vm._v("\n\t\t\t\t\t\t\tStyled\n\t\t\t\t\t\t")]), _vm._v(" "), _c('ScCardBody', {
    staticClass: "sc-padding-remove"
  }, [_c('client-only', [_c('GmapMap', {
    staticClass: "sc-gmap",
    attrs: {
      "center": _vm.map3.center,
      "zoom": _vm.map3.zoom,
      "options": _vm.map3.options
    }
  })], 1)], 1)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_c('ScCard', [_c('div', {
    staticClass: "uk-flex uk-flex-middle sc-padding sc-padding-medium-ends"
  }, [_c('ScCardTitle', {
    staticClass: "uk-width-1-3"
  }, [_vm._v("\n\t\t\t\t\t\t\t\tAutocomplete\n\t\t\t\t\t\t\t")]), _vm._v(" "), _c('div', {
    staticClass: "uk-flex-1 uk-margin-left"
  }, [_c('client-only', [_c('GmapAutocomplete', {
    staticClass: "uk-input uk-form-small",
    attrs: {
      "value": _vm.autocompleteVal,
      "placeholder": "Find location",
      "select-first-on-enter": true
    },
    on: {
      "place_changed": _vm.setPlace
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('ScCardBody', {
    staticClass: "sc-padding sc-padding-remove-top"
  }, [_c('client-only', [_c('GmapMap', {
    staticClass: "sc-gmap",
    attrs: {
      "center": _vm.map4.center,
      "zoom": _vm.map4.zoom,
      "options": _vm.map4.options
    }
  })], 1)], 1)], 1)], 1)], 2)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/plugins/google_maps.vue?vue&type=template&id=420df1dc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/plugins/google_maps.vue?vue&type=script&lang=js&
if (false) {}

/* harmony default export */ var google_mapsvue_type_script_lang_js_ = ({
  name: 'PluginsGoogleMaps',
  data: () => ({
    map1: {
      center: {
        lat: 41.9027835,
        lng: 12.4963655
      },
      zoom: 13
    },
    map2: {
      center: {
        lat: 41.9027835,
        lng: 12.4963655
      },
      zoom: 13
    },
    map3: {
      center: {
        lat: 41.9027835,
        lng: 12.4963655
      },
      zoom: 10,
      options: {
        styles: [{
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#444444"
          }]
        }, {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [{
            "color": "#f2f2f2"
          }]
        }, {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road",
          "elementType": "all",
          "stylers": [{
            "saturation": -100
          }, {
            "lightness": 45
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [{
            "visibility": "simplified"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "water",
          "elementType": "all",
          "stylers": [{
            "color": "#46bcec"
          }, {
            "visibility": "on"
          }]
        }]
      }
    },
    map4: {
      center: {
        lat: 41.9027835,
        lng: 12.4963655
      },
      zoom: 13
    },
    markerIcon: __webpack_require__(443),
    markers: [{
      id: 1,
      title: 'Romes Colosseum',
      position: {
        lat: 41.8902102,
        lng: 12.4922309
      }
    }, {
      id: 2,
      title: 'Pantheon',
      position: {
        lat: 41.8986108,
        lng: 12.4768729
      }
    }],
    origin: [41.8902102, 12.4922309],
    destination: [41.8991632, 12.4730739],
    autocompleteVal: 'Rome',
    map2Ref: null
  }),
  methods: {
    getRoute() {
      var self = this;
      this.directionsService = new google.maps.DirectionsService();
      this.directionsDisplay = new google.maps.DirectionsRenderer({
        polylineOptions: {
          strokeColor: "#4527A0"
        }
      });
      this.directionsDisplay.setMap(this.$refs.map2.$mapObject);
      self.directionsService.route({
        origin: {
          lat: this.origin[0],
          lng: this.origin[1]
        },
        destination: {
          lat: this.destination[0],
          lng: this.destination[1]
        },
        travelMode: 'DRIVING'
      }, function (response, status) {
        if (status === 'OK') {
          self.directionsDisplay.setDirections(response);
        } else {
          console.log('Directions request failed due to ' + status);
        }
      });
    },

    setPlace(place) {
      if (place) {
        this.map4.center.lat = place.geometry.location.lat();
        this.map4.center.lng = place.geometry.location.lng();
      }
    },

    setRoute() {
      this.$refs.map2.$mapPromise.then(() => {
        this.getRoute();
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/plugins/google_maps.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_google_mapsvue_type_script_lang_js_ = (google_mapsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/plugins/google_maps.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  plugins_google_mapsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1ce4e21a"
  
)

/* harmony default export */ var google_maps = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=google_maps.js.map