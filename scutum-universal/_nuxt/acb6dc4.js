(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1305:function(t,e,n){"use strict";n.r(e);var o={components:{ScProgressOverlay:n(56).e},props:{active:Boolean,animate:Boolean,progress:Boolean},data:function(){return{activeAnimated:!1,dimmed:!1,overlayProgress:!1,progressActive:!1}},watch:{active:function(t){var e=this;this.animate&&(t?(this.activeAnimated=!0,setTimeout((function(){e.dimmed=!0}),10)):(this.dimmed=!1,setTimeout((function(){e.activeAnimated=!1}),280)))}}},r=n(2),c={name:"ComponentsOverlay",components:{contentOverlay:Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"uk-position-relative"},[t._t("default"),t._v(" "),t.animate?[e("transition",{attrs:{name:"fade"}},[t.activeAnimated?e("div",{staticClass:"sc-overlay",class:{dimmed:t.dimmed}}):t._e()])]:[t.active?e("div",{staticClass:"sc-overlay dimmed"}):t._e()],t._v(" "),t.progress?[e("ScProgressOverlay",{attrs:{active:t.active}})]:t._e()],2)}),[],!1,null,null,null).exports},data:function(){return{contentOverlayActive:!1,progressActive:!1}},methods:{showContentOverlay:function(){var t=this;this.contentOverlayActive=!0,setTimeout((function(){t.contentOverlayActive=!1}),2e3)},showContentOverlaySpinner:function(){var t=this;this.contentOverlayActive=!0,this.progressActive=!0,setTimeout((function(){t.contentOverlayActive=!1,setTimeout((function(){t.progressActive=!1}),280)}),2e3)},showPageOverlay:function(){var t=this;this.$store.commit("togglePageOverlay",!0),setTimeout((function(){t.$store.commit("togglePageOverlay",!1)}),2e3)},showPageOverlaySpinner:function(){var t=this;this.$store.commit("togglePageOverlay",!0),this.$store.commit("toggleProgressOverlay",!0),setTimeout((function(){t.$store.commit("toggleProgressOverlay",!1),setTimeout((function(){t.$store.commit("togglePageOverlay",!1)}))}),2e3)}}},l=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"sc-page-wrapper"}},[e("div",{attrs:{id:"sc-page-content"}},[e("content-overlay",{attrs:{active:t.contentOverlayActive,animate:!0,progress:t.progressActive}},[e("ScCard",[e("ScCardTitle",[t._v("\n\t\t\t\t\t\tOverlay\n\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("div",{staticClass:"uk-flex uk-height-medium"},[e("button",{staticClass:"sc-button uk-margin-right",on:{click:function(e){return e.preventDefault(),t.showContentOverlay.apply(null,arguments)}}},[t._v("\n\t\t\t\t\t\t\t\tContent overlay\n\t\t\t\t\t\t\t")]),t._v(" "),e("button",{staticClass:"sc-button uk-margin-right",on:{click:function(e){return e.preventDefault(),t.showContentOverlaySpinner.apply(null,arguments)}}},[t._v("\n\t\t\t\t\t\t\t\tContent overlay + spinner\n\t\t\t\t\t\t\t")]),t._v(" "),e("button",{staticClass:"sc-button sc-js-page-overlay uk-margin-right",on:{click:function(e){return e.preventDefault(),t.showPageOverlay.apply(null,arguments)}}},[t._v("\n\t\t\t\t\t\t\t\tPage overlay\n\t\t\t\t\t\t\t")]),t._v(" "),e("button",{staticClass:"sc-button",on:{click:function(e){return e.preventDefault(),t.showPageOverlaySpinner.apply(null,arguments)}}},[t._v("\n\t\t\t\t\t\t\t\tPage overlay + spinner\n\t\t\t\t\t\t\t")])])])],1)],1)],1)])}),[],!1,null,null,null);e.default=l.exports}}]);