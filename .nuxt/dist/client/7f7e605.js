(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1691:function(t,c,r){"use strict";r.r(c);var e=r(313),d=(r(102),{name:"ScFabSingleSheet",props:{actions:{type:Number,default:1}},data:function(){return{fabActive:!1,animDuration:80,animated:!1,active:!1,fabStyle:{width:"",height:""}}},mounted:function(){var t=this;window.addEventListener("click",(function(c){c.target.closest(".sc-fab-sheet")||t.hide()}))},methods:{show:function(){var t=this,c=this;this.animated=!0,setTimeout((function(){c.fabStyle.width="240px",c.fabStyle.height="".concat(40*c.actions+8,"px")}),140),setTimeout((function(){t.active=!0}),280)},hide:function(){var t=this;this.active&&(this.active=!1,this.fabStyle.width="",this.fabStyle.height="",setTimeout((function(){t.animated=!1}),140))}}}),l=r(3),o=Object(l.a)(d,(function(){var t=this,c=t._self._c;return c("div",{staticClass:"sc-fab-card-wrapper sc-fab-sheet",class:{"sc-fab-animated":t.animated,"sc-fab-active":t.active},style:[t.fabStyle]},[t._t("trigger"),t._v(" "),c("div",{ref:"actions",staticClass:"sc-fab-sheet-actions"},[t._t("actions")],2)],2)}),[],!1,null,null,null).exports,v={name:"ComponentsFabButtons",components:{ScFabSpeedDial:e.a,ScFabSingleSheet:o},data:function(){return{fabs:[{id:1,class:"md-bg-light-blue-600 sc-fab-dark",to:"/pages/mailbox/",icon:" mdi-email-check"},{id:2,class:"md-bg-light-green-600 sc-fab-dark",href:"javascript:void(0)",icon:" mdi-email-edit"},{id:3,class:"md-bg-red-600 sc-fab-dark",href:"javascript:void(0)",icon:" mdi-email-lock"},{id:4,class:"md-bg-amber-600 sc-fab-dark",href:"javascript:void(0)",icon:" mdi-reload"}]}}},n=Object(l.a)(v,(function(){var t=this,c=t._self._c;return c("div",{attrs:{id:"sc-page-wrapper"}},[c("div",{attrs:{id:"sc-page-content"}},[c("div",{staticClass:"uk-child-width-1-3@l uk-child-width-1-2@s uk-grid",attrs:{"data-uk-grid":""}},[c("div",[c("ScCard",[c("ScCardBody",{staticClass:"uk-height-small"},[c("h5",[t._v("Default")])]),t._v(" "),c("div",{staticClass:"sc-fab-card-wrapper uk-position-bottom-right"},[c("a",{staticClass:"sc-fab",attrs:{href:"javascript:void(0)"}},[c("i",{staticClass:"mdi mdi-content-save"})])])],1)],1),t._v(" "),c("div",[c("ScCard",[c("ScCardBody",{staticClass:"uk-height-small"},[c("h5",[t._v("Mini")])]),t._v(" "),c("div",{staticClass:"sc-fab-card-wrapper uk-position-bottom-right"},[c("a",{staticClass:"sc-fab sc-fab-small sc-fab-danger",attrs:{href:"javascript:void(0)"}},[c("i",{staticClass:"mdi mdi-briefcase-plus"})])])],1)],1),t._v(" "),c("div",[c("ScCard",[c("ScCardBody",{staticClass:"uk-height-small"},[c("h5",[t._v("Large")])]),t._v(" "),c("div",{staticClass:"sc-fab-card-wrapper uk-position-bottom-right"},[c("a",{staticClass:"sc-fab sc-fab-large sc-fab-primary",attrs:{href:"javascript:void(0)"}},[c("i",{staticClass:"mdi mdi-autorenew"})])])],1)],1)]),t._v(" "),c("div",{staticClass:"uk-child-width-1-3@l uk-child-width-1-2@s uk-grid",attrs:{"data-uk-grid":""}},[c("div",[c("ScCard",[c("ScCardBody",{staticClass:"uk-height-small"},[c("h5",[t._v("Text default")])]),t._v(" "),c("div",{staticClass:"sc-fab-card-wrapper uk-position-bottom-right"},[c("a",{staticClass:"sc-fab sc-fab-text sc-fab-secondary",attrs:{href:"javascript:void(0)"}},[t._v("\n\t\t\t\t\t\t\t\tCreate\n\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),c("div",[c("ScCard",[c("ScCardBody",{staticClass:"uk-height-small"},[c("h5",[t._v("Text small")])]),t._v(" "),c("div",{staticClass:"sc-fab-card-wrapper uk-position-bottom-right"},[c("a",{staticClass:"sc-fab sc-fab-small sc-fab-text sc-fab-secondary",attrs:{href:"javascript:void(0)"}},[t._v("\n\t\t\t\t\t\t\t\tCreate\n\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),c("div",[c("ScCard",[c("ScCardBody",{staticClass:"uk-height-small"},[c("h5",[t._v("Text large")])]),t._v(" "),c("div",{staticClass:"sc-fab-card-wrapper uk-position-bottom-right"},[c("a",{staticClass:"sc-fab sc-fab-large sc-fab-text sc-fab-secondary",attrs:{href:"javascript:void(0)"}},[t._v("\n\t\t\t\t\t\t\t\tCreate\n\t\t\t\t\t\t\t")])])],1)],1)]),t._v(" "),c("div",{staticClass:"uk-child-width-1-3@l uk-child-width-1-2@s uk-grid",attrs:{"data-uk-grid":""}},[c("div",[c("ScCard",[c("ScCardBody",{staticClass:"uk-height-small"},[c("h5",[t._v("Text + icon default")])]),t._v(" "),c("div",{staticClass:"sc-fab-card-wrapper uk-position-bottom-right"},[c("a",{staticClass:"sc-fab sc-fab-text sc-fab-success",attrs:{href:"javascript:void(0)"}},[c("i",{staticClass:"mdi mdi-plus"}),t._v("Create\n\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),c("div",[c("ScCard",[c("ScCardBody",{staticClass:"uk-height-small"},[c("h5",[t._v("Text small")])]),t._v(" "),c("div",{staticClass:"sc-fab-card-wrapper uk-position-bottom-right"},[c("a",{staticClass:"sc-fab sc-fab-small sc-fab-text sc-fab-success",attrs:{href:"javascript:void(0)"}},[c("i",{staticClass:"mdi mdi-plus"}),t._v("Create\n\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),c("div",[c("ScCard",[c("ScCardBody",{staticClass:"uk-height-small"},[c("h5",[t._v("Text large")])]),t._v(" "),c("div",{staticClass:"sc-fab-card-wrapper uk-position-bottom-right"},[c("a",{staticClass:"sc-fab sc-fab-large sc-fab-text sc-fab-success",attrs:{href:"javascript:void(0)"}},[c("i",{staticClass:"mdi mdi-plus"}),t._v("Create\n\t\t\t\t\t\t\t")])])],1)],1)]),t._v(" "),c("div",{attrs:{"data-uk-grid":""}},[c("div",{staticClass:"uk-width-1-3@l"},[c("ScCard",[c("ScCardBody",{staticClass:"uk-height-medium"},[c("h5",[t._v("Multiple")])]),t._v(" "),c("div",{staticClass:"sc-fab-card-wrapper uk-position-bottom-right"},[c("a",{staticClass:"sc-fab md-bg-light-green-600 sc-fab-dark",attrs:{href:"javascript:void(0)"}},[c("i",{staticClass:"mdi mdi-send"})]),t._v(" "),c("a",{staticClass:"sc-fab md-bg-amber-600 sc-fab-dark",attrs:{href:"javascript:void(0)"}},[c("i",{staticClass:"mdi mdi-reload"})]),t._v(" "),c("a",{staticClass:"sc-fab",attrs:{href:"javascript:void(0)"}},[c("i",{staticClass:"mdi mdi-content-save"})])])],1)],1)]),t._v(" "),c("h3",{staticClass:"uk-margin-large-top uk-margin-remove-bottom"},[t._v("\n\t\t\t\tSpeed Dial\n\t\t\t")]),t._v(" "),c("hr",{staticClass:"uk-margin-medium-top"}),t._v(" "),c("div",{staticClass:"uk-child-width-1-2@m uk-margin-medium-bottom",attrs:{"data-uk-grid":""}},[c("div",[c("div",{staticClass:"uk-card"},[t._m(0),t._v(" "),c("ScFabSpeedDial",{staticClass:"sc-fab-card-wrapper uk-position-bottom-right",attrs:{"fab-alignment":"horizontal",fabs:t.fabs}},[c("a",{staticClass:"sc-fab",attrs:{href:"javascript:void(0)"}},[c("i",{staticClass:"mdi mdi-email"}),t._v(" "),c("i",{staticClass:"mdi mdi-close"})])])],1)]),t._v(" "),c("div",[c("div",{staticClass:"uk-card"},[t._m(1),t._v(" "),c("ScFabSpeedDial",{staticClass:"sc-fab-card-wrapper uk-position-bottom-right",attrs:{"fab-event":"hover","fab-alignment":"horizontal",fabs:t.fabs}},[c("a",{staticClass:"sc-fab",attrs:{href:"javascript:void(0)"}},[c("i",{staticClass:"mdi mdi-email"}),t._v(" "),c("i",{staticClass:"mdi mdi-close"})])])],1)])]),t._v(" "),c("div",{staticClass:"uk-child-width-1-2@m uk-child-width-1-3@l uk-margin-large-bottom",attrs:{"data-uk-grid":""}},[c("div",[c("div",{staticClass:"uk-card"},[t._m(2),t._v(" "),c("ScFabSpeedDial",{staticClass:"sc-fab-card-wrapper uk-position-bottom-right",attrs:{fabs:t.fabs}},[c("a",{staticClass:"sc-fab",attrs:{href:"javascript:void(0)"}},[c("i",{staticClass:"mdi mdi-email"}),t._v(" "),c("i",{staticClass:"mdi mdi-close"})])])],1)]),t._v(" "),c("div",[c("div",{staticClass:"uk-card"},[t._m(3),t._v(" "),c("ScFabSpeedDial",{staticClass:"sc-fab-card-wrapper uk-position-bottom-right",attrs:{"fab-event":"hover",fabs:t.fabs}},[c("a",{staticClass:"sc-fab",attrs:{href:"javascript:void(0)"}},[c("i",{staticClass:"mdi mdi-email"}),t._v(" "),c("i",{staticClass:"mdi mdi-close"})])])],1)])]),t._v(" "),c("h3",{staticClass:"uk-margin-large-top uk-margin-remove-bottom"},[t._v("\n\t\t\t\tSingle Sheet\n\t\t\t")]),t._v(" "),c("hr",{staticClass:"uk-margin-medium-top"}),t._v(" "),c("div",{staticClass:"uk-child-width-1-2@m uk-child-width-1-3@l uk-margin-large-bottom",attrs:{"data-uk-grid":""}},[c("div",[c("ScCard",[c("ScCardBody",{staticClass:"uk-height-large md-bg-grey-200"},[c("ScFabSingleSheet",{ref:"fabSheetA",staticClass:"uk-position-bottom-right",attrs:{actions:4},scopedSlots:t._u([{key:"trigger",fn:function(){return[c("i",{staticClass:"mdi mdi-email sc-fab-sheet-trigger",on:{click:function(c){return t.$refs.fabSheetA.show()}}})]},proxy:!0},{key:"actions",fn:function(){return[c("a",{attrs:{href:"javascript:void(0)"}},[c("i",{staticClass:"mdi mdi-folder sc-color-secondary"}),t._v("\n\t\t\t\t\t\t\t\t\t\tMove to folder\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),c("a",{attrs:{href:"javascript:void(0)"}},[c("i",{staticClass:"mdi mdi-pencil sc-color-secondary"}),t._v("\n\t\t\t\t\t\t\t\t\t\tEdit\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),c("a",{attrs:{href:"javascript:void(0)"}},[c("i",{staticClass:"mdi mdi-flag sc-color-secondary"}),t._v("\n\t\t\t\t\t\t\t\t\t\tFlag\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),c("a",{attrs:{href:"javascript:void(0)"}},[c("i",{staticClass:"mdi mdi-delete sc-color-secondary"}),t._v("\n\t\t\t\t\t\t\t\t\t\tDelete\n\t\t\t\t\t\t\t\t\t")])]},proxy:!0}])})],1)],1)],1),t._v(" "),c("div",[c("ScCard",[c("ScCardBody",{staticClass:"uk-height-large"},[c("ScFabSingleSheet",{ref:"fabSheetB",staticClass:"uk-position-bottom-right sc-fab-warning",attrs:{actions:4},scopedSlots:t._u([{key:"trigger",fn:function(){return[c("i",{staticClass:"mdi mdi-email sc-fab-sheet-trigger",on:{click:function(c){return t.$refs.fabSheetB.show()}}})]},proxy:!0},{key:"actions",fn:function(){return[c("a",{staticClass:"md-color-white",attrs:{href:"javascript:void(0)"}},[c("i",{staticClass:"mdi mdi-folder md-color-white"}),t._v("\n\t\t\t\t\t\t\t\t\t\tMove to folder\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),c("a",{staticClass:"md-color-white",attrs:{href:"javascript:void(0)"}},[c("i",{staticClass:"mdi mdi-pencil md-color-white"}),t._v("\n\t\t\t\t\t\t\t\t\t\tEdit\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),c("a",{staticClass:"md-color-white",attrs:{href:"javascript:void(0)"}},[c("i",{staticClass:"mdi mdi-flag md-color-white"}),t._v("\n\t\t\t\t\t\t\t\t\t\tFlag\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),c("a",{staticClass:"md-color-white",attrs:{href:"javascript:void(0)"}},[c("i",{staticClass:"mdi mdi-delete md-color-white"}),t._v("\n\t\t\t\t\t\t\t\t\t\tDelete\n\t\t\t\t\t\t\t\t\t")])]},proxy:!0}])})],1)],1)],1)])]),t._v(" "),t._m(4)])}),[function(){var t=this._self._c;return t("div",{staticClass:"uk-card-body uk-height-medium"},[t("h5",[this._v("Speed dial horizontal")])])},function(){var t=this._self._c;return t("div",{staticClass:"uk-card-body uk-height-medium"},[t("h5",[this._v("Speed dial horizontal (hover mode)")])])},function(){var t=this._self._c;return t("div",{staticClass:"uk-card-body uk-height-large"},[t("h5",[this._v("Speed dial")])])},function(){var t=this._self._c;return t("div",{staticClass:"uk-card-body uk-height-large"},[t("h5",[this._v("Speed dial (hover mode)")])])},function(){var t=this._self._c;return t("div",{staticClass:"sc-fab-page-wrapper"},[t("a",{staticClass:"sc-fab sc-fab-large md-bg-light-blue-700 sc-fab-dark",attrs:{href:"javascript:void(0)"}},[t("i",{staticClass:"mdi mdi-account-multiple-plus"})])])}],!1,null,null,null);c.default=n.exports}}]);