(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{1736:function(t,e,o){"use strict";o.r(e);o(649);var l={name:"PluginsGoogleMaps",data:function(){return{map1:{center:{lat:41.9027835,lng:12.4963655},zoom:13},map2:{center:{lat:41.9027835,lng:12.4963655},zoom:13},map3:{center:{lat:41.9027835,lng:12.4963655},zoom:10,options:{styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]}]}},map4:{center:{lat:41.9027835,lng:12.4963655},zoom:13},markerIcon:o(720),markers:[{id:1,title:"Romes Colosseum",position:{lat:41.8902102,lng:12.4922309}},{id:2,title:"Pantheon",position:{lat:41.8986108,lng:12.4768729}}],origin:[41.8902102,12.4922309],destination:[41.8991632,12.4730739],autocompleteVal:"Rome",map2Ref:null}},methods:{getRoute:function(){var t=this;this.directionsService=new google.maps.DirectionsService,this.directionsDisplay=new google.maps.DirectionsRenderer({polylineOptions:{strokeColor:"#4527A0"}}),this.directionsDisplay.setMap(this.$refs.map2.$mapObject),t.directionsService.route({origin:{lat:this.origin[0],lng:this.origin[1]},destination:{lat:this.destination[0],lng:this.destination[1]},travelMode:"DRIVING"},(function(e,o){"OK"===o?t.directionsDisplay.setDirections(e):console.log("Directions request failed due to "+o)}))},setPlace:function(t){t&&(this.map4.center.lat=t.geometry.location.lat(),this.map4.center.lng=t.geometry.location.lng())},setRoute:function(){var t=this;this.$refs.map2.$mapPromise.then((function(){t.getRoute()}))}}},n=o(3),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"sc-page-wrapper"}},[e("div",{attrs:{id:"sc-page-content"}},[e("div",{staticClass:"uk-child-width-1-2@l uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("ScCard",[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tMarkers\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("client-only",[e("GmapMap",{staticClass:"sc-gmap",attrs:{center:t.map1.center,zoom:t.map1.zoom,options:t.map1.options}},t._l(t.markers,(function(o){return e("GmapMarker",{key:o.id,attrs:{position:o.position,title:o.title,clickable:!0,icon:t.markerIcon}})})),1)],1)],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tRoute\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("client-only",[e("GmapMap",{ref:"map2",staticClass:"sc-gmap",attrs:{center:t.map2.center,zoom:t.map2.zoom,options:t.map2.options},on:{tilesloaded:t.setRoute}})],1)],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tStyled\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",{staticClass:"sc-padding-remove"},[e("client-only",[e("GmapMap",{staticClass:"sc-gmap",attrs:{center:t.map3.center,zoom:t.map3.zoom,options:t.map3.options}})],1)],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("div",{staticClass:"uk-flex uk-flex-middle sc-padding sc-padding-medium-ends"},[e("ScCardTitle",{staticClass:"uk-width-1-3"},[t._v("\r\n\t\t\t\t\t\t\t\tAutocomplete\r\n\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"uk-flex-1 uk-margin-left"},[e("client-only",[e("GmapAutocomplete",{staticClass:"uk-input uk-form-small",attrs:{value:t.autocompleteVal,placeholder:"Find location","select-first-on-enter":!0},on:{place_changed:t.setPlace}})],1)],1)],1),t._v(" "),e("ScCardBody",{staticClass:"sc-padding sc-padding-remove-top"},[e("client-only",[e("GmapMap",{staticClass:"sc-gmap",attrs:{center:t.map4.center,zoom:t.map4.zoom,options:t.map4.options}})],1)],1)],1)],1)])])])}),[],!1,null,null,null);e.default=component.exports},649:function(t,e,o){"use strict";o.r(e);var l=o(2),n=o(679);l.default.use(n,{load:{key:"AIzaSyC2FodI8g-iCz1KHRFE7_4r8MFLA7Zbyhk",libraries:"places"}})},720:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgIDxwYXRoIGZpbGw9IiNlNTM5MzUiIGQ9Ik0xMiwxMS41QTIuNSwyLjUgMCAwLDEgOS41LDlBMi41LDIuNSAwIDAsMSAxMiw2LjVBMi41LDIuNSAwIDAsMSAxNC41LDlBMi41LDIuNSAwIDAsMSAxMiwxMS41TTEyLDJBNyw3IDAgMCwwIDUsOUM1LDE0LjI1IDEyLDIyIDEyLDIyQzEyLDIyIDE5LDE0LjI1IDE5LDlBNyw3IDAgMCwwIDEyLDJaIiAvPg0KPC9zdmc+"}}]);