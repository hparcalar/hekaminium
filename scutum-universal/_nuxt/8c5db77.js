(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1655:function(t,n,o){"use strict";o.r(n);var r={name:"ComponentsButtons",components:{ScProgressCircular:o(56).b},data:function(){return{btnReplacedContent:!0,btnContent:"Click Me",btn1Loading:!1,btn2Loading:!1,btn1LoadingEnd:!1,btn2LoadingEnd:!1,btn3Loading:!1,btn3LoadingEnd:!1}},methods:{showBtn1Loading:function(){var t=this;this.btn1Loading=!0,this.btn1LoadingEnd=!0,setTimeout((function(){t.btn1Loading=!1,setTimeout((function(){t.btn1LoadingEnd=!1}),300)}),1e3)},showBtn2Loading:function(){var t=this;this.btn2Loading=!0,this.btn2LoadingEnd=!0,setTimeout((function(){t.btn2Loading=!1,setTimeout((function(){t.btn2LoadingEnd=!1}),300)}),1e3)},showBtn3Loading:function(){var t=this;this.btn3Loading=!0,this.btn3LoadingEnd=!0,setTimeout((function(){t.btn3Loading=!1,setTimeout((function(){t.btn3LoadingEnd=!1}),300)}),1e3)},buttonReplaceContent:function(){var t=this;this.btnReplacedContent=!1,setTimeout((function(){t.btnContent='New replaced text <i class="mdi mdi-emoticon-happy-outline uk-margin-small-left"></i>',t.btnReplacedContent=!0}),1200)}}},c=o(2),component=Object(c.a)(r,(function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"sc-page-wrapper"}},[n("div",{attrs:{id:"sc-page-content"}},[n("div",{staticClass:"uk-child-width-1-2@l uk-grid",attrs:{"data-uk-grid":""}},[n("div",[n("ScCard",[n("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tRaised buttons\r\n\t\t\t\t\t\t")]),t._v(" "),n("ScCardBody",[n("div",{staticClass:"uk-grid-small uk-width-auto uk-grid",attrs:{"data-uk-grid":""}},[n("div",[n("a",{directives:[{name:"waves",rawName:"v-waves.button",modifiers:{button:!0}}],staticClass:"sc-button",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tDefault\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("a",{directives:[{name:"waves",rawName:"v-waves.button.light",modifiers:{button:!0,light:!0}}],staticClass:"sc-button sc-button-primary",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tPrimary\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("a",{directives:[{name:"waves",rawName:"v-waves.button.light",modifiers:{button:!0,light:!0}}],staticClass:"sc-button sc-button-secondary",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSecondary\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("a",{directives:[{name:"waves",rawName:"v-waves.button.light",modifiers:{button:!0,light:!0}}],staticClass:"sc-button sc-button-warning",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tWarning\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("a",{directives:[{name:"waves",rawName:"v-waves.button.light",modifiers:{button:!0,light:!0}}],staticClass:"sc-button sc-button-success",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSuccess\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("a",{directives:[{name:"waves",rawName:"v-waves.button.light",modifiers:{button:!0,light:!0}}],staticClass:"sc-button sc-button-danger",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tDanger\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("a",{staticClass:"sc-button sc-button-disabled",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tDisabled\r\n\t\t\t\t\t\t\t\t\t")])])])])],1),t._v(" "),n("ScCard",{staticClass:"uk-margin-top"},[n("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tFlat buttons\r\n\t\t\t\t\t\t")]),t._v(" "),n("ScCardBody",[n("div",{staticClass:"uk-grid-small uk-width-auto uk-grid",attrs:{"data-uk-grid":""}},[n("div",[n("a",{directives:[{name:"waves",rawName:"v-waves.button",modifiers:{button:!0}}],staticClass:"sc-button sc-button-default sc-button-flat",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tDefault\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("a",{directives:[{name:"waves",rawName:"v-waves.button.primary",modifiers:{button:!0,primary:!0}}],staticClass:"sc-button sc-button-flat sc-button-flat-primary",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tPrimary\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("a",{directives:[{name:"waves",rawName:"v-waves.button.warning",modifiers:{button:!0,warning:!0}}],staticClass:"sc-button sc-button-flat sc-button-flat-warning",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tWarning\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("a",{directives:[{name:"waves",rawName:"v-waves.button.success",modifiers:{button:!0,success:!0}}],staticClass:"sc-button sc-button-flat sc-button-flat-success",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSuccess\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("a",{directives:[{name:"waves",rawName:"v-waves.button.danger",modifiers:{button:!0,danger:!0}}],staticClass:"sc-button sc-button-flat sc-button-flat-danger",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tDanger\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("a",{staticClass:"sc-button sc-button-default sc-button-flat sc-button-disabled",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tDisabled\r\n\t\t\t\t\t\t\t\t\t")])])])])],1),t._v(" "),n("ScCard",{staticClass:"uk-margin-top"},[n("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tOutline buttons\r\n\t\t\t\t\t\t")]),t._v(" "),n("ScCardBody",[n("div",{staticClass:"uk-grid-small uk-width-auto uk-grid",attrs:{"data-uk-grid":""}},[n("div",[n("a",{directives:[{name:"waves",rawName:"v-waves.button",modifiers:{button:!0}}],staticClass:"sc-button sc-button-default sc-button-outline",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tDefault\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("a",{directives:[{name:"waves",rawName:"v-waves.button.primary",modifiers:{button:!0,primary:!0}}],staticClass:"sc-button sc-button-outline sc-button-outline-primary",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tPrimary\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("a",{directives:[{name:"waves",rawName:"v-waves.button.warning",modifiers:{button:!0,warning:!0}}],staticClass:"sc-button sc-button-outline sc-button-outline-warning",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tWarning\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("a",{directives:[{name:"waves",rawName:"v-waves.button.success",modifiers:{button:!0,success:!0}}],staticClass:"sc-button sc-button-outline sc-button-outline-success",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSuccess\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("a",{directives:[{name:"waves",rawName:"v-waves.button.danger",modifiers:{button:!0,danger:!0}}],staticClass:"sc-button sc-button-outline sc-button-outline-danger",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tDanger\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("a",{staticClass:"sc-button sc-button-default sc-button-outline sc-button-disabled",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tDisabled\r\n\t\t\t\t\t\t\t\t\t")])])])])],1),t._v(" "),n("ScCard",{staticClass:"uk-margin-top"},[n("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tCustom Colors\r\n\t\t\t\t\t\t")]),t._v(" "),n("ScCardBody",[n("div",{staticClass:"uk-grid-small uk-width-auto uk-grid",attrs:{"data-uk-grid":""}},[n("div",[n("a",{directives:[{name:"waves",rawName:"v-waves.button.light",modifiers:{button:!0,light:!0}}],staticClass:"sc-button sc-button-custom md-bg-purple-600",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tPurple\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("a",{directives:[{name:"waves",rawName:"v-waves.button.light",modifiers:{button:!0,light:!0}}],staticClass:"sc-button sc-button-custom md-bg-blue-grey-600",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tBlue Grey\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("a",{directives:[{name:"waves",rawName:"v-waves.button.light",modifiers:{button:!0,light:!0}}],staticClass:"sc-button sc-button-custom md-bg-lime-600",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tLime\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("a",{directives:[{name:"waves",rawName:"v-waves.button.light",modifiers:{button:!0,light:!0}}],staticClass:"sc-button sc-button-custom md-bg-brown-600",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tBrown\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("a",{directives:[{name:"waves",rawName:"v-waves.button.light",modifiers:{button:!0,light:!0}}],staticClass:"sc-button sc-button-custom md-bg-grey-600",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tGrey\r\n\t\t\t\t\t\t\t\t\t")])])])])],1),t._v(" "),n("ScCard",{staticClass:"uk-margin-top"},[n("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tIcons\r\n\t\t\t\t\t\t")]),t._v(" "),n("ScCardBody",[n("div",[n("div",{staticClass:"uk-width-auto uk-flex-middle uk-grid-medium uk-grid",attrs:{"data-uk-grid":""}},[n("div",[n("button",{staticClass:"sc-button sc-button-flex"},[n("span",{staticClass:"uk-margin-small-right",attrs:{"data-uk-icon":"icon: sign-in"}}),t._v("\r\n\t\t\t\t\t\t\t\t\t\t\tSign In\r\n\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("button",{staticClass:"sc-button sc-button-flex sc-button-red"},[n("span",{staticClass:"md-color-orange-600 uk-margin-small-right",attrs:{"data-uk-icon":"icon: settings"}}),t._v("\r\n\t\t\t\t\t\t\t\t\t\t\tSettings\r\n\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("button",{staticClass:"sc-button sc-button-flex"},[n("i",{staticClass:"mdi mdi-chart-areaspline uk-margin-small-right"}),t._v("\r\n\t\t\t\t\t\t\t\t\t\t\tCharts\r\n\t\t\t\t\t\t\t\t\t\t")])])])]),t._v(" "),n("hr"),t._v(" "),n("div",[n("div",{staticClass:"uk-width-auto uk-flex-middle uk-grid-medium uk-grid",attrs:{"data-uk-grid":""}},[n("div",[n("button",{staticClass:"sc-button sc-button-icon"},[n("span",{attrs:{"data-uk-icon":"icon: sign-in"}})])]),t._v(" "),n("div",[n("button",{staticClass:"sc-button sc-button-icon sc-button-red"},[n("span",{staticClass:"md-color-orange-600",attrs:{"data-uk-icon":"icon: settings"}})])]),t._v(" "),n("div",[n("button",{staticClass:"sc-button sc-button-icon sc-button-green"},[n("span",{attrs:{"data-uk-icon":"icon: server"}})])]),t._v(" "),n("div",[n("button",{staticClass:"sc-button sc-button-icon sc-button-mini"},[n("span",{attrs:{"data-uk-icon":"icon: more; ratio: 0.50"}})])]),t._v(" "),n("div",[n("button",{staticClass:"sc-button sc-button-default sc-button-icon sc-button-outline sc-button-small"},[n("span",{attrs:{"data-uk-icon":"icon: plus; ratio: 0.60"}})])]),t._v(" "),n("div",[n("button",{staticClass:"sc-button sc-button-default sc-button-icon sc-button-outline sc-button-flat sc-button-large"},[n("span",{attrs:{"data-uk-icon":"icon: question; ratio: 1.3"}})])])])]),t._v(" "),n("hr"),t._v(" "),n("div",[n("div",{staticClass:"uk-width-auto uk-grid-medium uk-flex-middle uk-grid",attrs:{"data-uk-grid":""}},[n("div",[n("a",{staticClass:"sc-button sc-button-icon md-bg-green-400",attrs:{href:"javascript:void(0)"}},[n("i",{staticClass:"mdi mdi-phone-bluetooth md-color-white"})])]),t._v(" "),n("div",[n("a",{staticClass:"sc-button sc-button-icon",attrs:{href:"javascript:void(0)"}},[n("i",{staticClass:"mdi md-color-light-blue-600 mdi-account-alert"})])]),t._v(" "),n("div",[n("a",{staticClass:"sc-button sc-button-icon",attrs:{href:"javascript:void(0)"}},[n("i",{staticClass:"md-color-red-600 mdi mdi-sale"})])]),t._v(" "),n("div",[n("a",{staticClass:"sc-button sc-button-icon sc-button-mini",attrs:{href:"javascript:void(0)"}},[n("i",{staticClass:"mdi mdi-chart-arc"})])]),t._v(" "),n("div",[n("a",{staticClass:"sc-button sc-button-icon sc-button-large",attrs:{href:"javascript:void(0)"}},[n("i",{staticClass:"mdi mdi-comment"})])])])])])],1),t._v(" "),n("ScCard",{staticClass:"uk-margin-top"},[n("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tUIkit buttons\r\n\t\t\t\t\t\t")]),t._v(" "),n("ScCardBody",[n("div",{staticClass:"uk-grid-small uk-width-auto uk-grid",attrs:{"data-uk-grid":""}},[n("div",[n("button",{staticClass:"uk-button uk-button-default"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tDefault\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("button",{staticClass:"uk-button uk-button-primary"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tPrimary\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("button",{staticClass:"uk-button uk-button-secondary"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSecondary\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("button",{staticClass:"uk-button uk-button-danger"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tDanger\r\n\t\t\t\t\t\t\t\t\t")])])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"uk-grid-small uk-width-auto uk-grid",attrs:{"data-uk-grid":""}},[n("div",[n("button",{staticClass:"uk-button uk-button-text"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t.uk-button-text\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("button",{staticClass:"uk-button uk-button-link"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t.uk-button-link\r\n\t\t\t\t\t\t\t\t\t")])])])])],1)],1),t._v(" "),n("div",[n("ScCard",[n("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tSize modifiers\r\n\t\t\t\t\t\t")]),t._v(" "),n("ScCardBody",[n("div",{staticClass:"uk-grid-small uk-width-auto uk-grid",attrs:{"data-uk-grid":""}},[n("div",[n("button",{staticClass:"sc-button sc-button-mini"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tMini button\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("button",{staticClass:"sc-button sc-button-flat sc-button-flat-success sc-button-mini"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tMini button\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("button",{staticClass:"sc-button sc-button-outline sc-button-outline-danger sc-button-mini"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tMini button\r\n\t\t\t\t\t\t\t\t\t")])])]),t._v(" "),n("div",{staticClass:"uk-grid-small uk-width-auto uk-margin-top uk-grid",attrs:{"data-uk-grid":""}},[n("div",[n("button",{staticClass:"sc-button sc-button-small"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSmall button\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("button",{staticClass:"sc-button sc-button-flat sc-button-flat-success sc-button-small"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSmall button\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("button",{staticClass:"sc-button sc-button-outline sc-button-outline-danger sc-button-small"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSmall button\r\n\t\t\t\t\t\t\t\t\t")])])]),t._v(" "),n("div",{staticClass:"uk-grid-small uk-width-auto uk-margin-top uk-grid",attrs:{"data-uk-grid":""}},[n("div",[n("button",{staticClass:"sc-button sc-button-large"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tLarge button\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("button",{staticClass:"sc-button sc-button-flat sc-button-flat-success sc-button-large"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tLarge button\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("button",{staticClass:"sc-button sc-button-outline sc-button-outline-danger sc-button-large"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tLarge button\r\n\t\t\t\t\t\t\t\t\t")])])])])],1),t._v(" "),n("ScCard",{staticClass:"uk-margin-top"},[n("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tWidth modifiers\r\n\t\t\t\t\t\t")]),t._v(" "),n("ScCardBody",[n("div",{staticClass:"uk-margin"},[n("button",{directives:[{name:"waves",rawName:"v-waves.button.light",modifiers:{button:!0,light:!0}}],staticClass:"sc-button sc-button-primary uk-width-1-3"},[t._v("\r\n\t\t\t\t\t\t\t\t\t.uk-width-1-3\r\n\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",{staticClass:"uk-margin"},[n("button",{directives:[{name:"waves",rawName:"v-waves.button.light",modifiers:{button:!0,light:!0}}],staticClass:"sc-button sc-button-primary uk-width-1-2"},[t._v("\r\n\t\t\t\t\t\t\t\t\t.uk-width-1-2\r\n\t\t\t\t\t\t\t\t")])]),t._v(" "),n("button",{directives:[{name:"waves",rawName:"v-waves.button.light",modifiers:{button:!0,light:!0}}],staticClass:"sc-button sc-button-primary uk-width-1-1"},[t._v("\r\n\t\t\t\t\t\t\t\t.uk-width-1-1\r\n\t\t\t\t\t\t\t")])])],1),t._v(" "),n("ScCard",{staticClass:"uk-margin-top"},[n("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tButton Group\r\n\t\t\t\t\t\t")]),t._v(" "),n("ScCardBody",[n("div",{staticClass:"uk-margin"},[n("div",{staticClass:"uk-button-group"},[n("button",{staticClass:"sc-button"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tButton\r\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),n("button",{staticClass:"sc-button"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tButton\r\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),n("button",{staticClass:"sc-button uk-active"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tButton\r\n\t\t\t\t\t\t\t\t\t")])])]),t._v(" "),n("div",{staticClass:"uk-margin"},[n("div",{staticClass:"uk-button-group"},[n("button",{staticClass:"sc-button sc-button-secondary"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tButton\r\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),n("button",{staticClass:"sc-button sc-button-secondary"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tButton\r\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),n("button",{staticClass:"sc-button sc-button-secondary"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tButton\r\n\t\t\t\t\t\t\t\t\t")])])]),t._v(" "),n("div",{staticClass:"uk-margin"},[n("div",{staticClass:"uk-button-group sc-button-group-outline"},[n("button",{staticClass:"sc-button sc-button-default sc-button-outline"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tButton\r\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),n("button",{staticClass:"sc-button sc-button-default sc-button-outline uk-active"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tButton\r\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),n("button",{staticClass:"sc-button sc-button-default sc-button-outline"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tButton\r\n\t\t\t\t\t\t\t\t\t")])])]),t._v(" "),n("div",[n("div",{staticClass:"uk-button-group"},[n("button",{staticClass:"sc-button"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tDropdown\r\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"uk-inline"},[n("button",{staticClass:"sc-button sc-button-icon"},[n("i",{staticClass:"mdi mdi-chevron-down"})]),t._v(" "),n("div",{attrs:{"data-uk-dropdown":"mode: click; boundary: ! .uk-button-group; boundary-align: true;"}},[n("ul",{staticClass:"uk-nav uk-dropdown-nav"},[n("li",{staticClass:"uk-active"},[n("a",{attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tActive\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tItem\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("li",{staticClass:"uk-nav-header"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tHeader\r\n\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tItem\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tItem\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("li",{staticClass:"uk-nav-divider"}),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tItem\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])])])])])])])])],1),t._v(" "),n("ScCard",{staticClass:"uk-margin-top"},[n("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tButtons Helpers\r\n\t\t\t\t\t\t")]),t._v(" "),n("ScCardBody",[n("div",{staticClass:"uk-child-width-auto@m uk-grid",attrs:{"data-uk-grid":""}},[n("div",[n("transition",{attrs:{name:"scale-up"}},[n("button",{directives:[{name:"show",rawName:"v-show",value:t.btnReplacedContent,expression:"btnReplacedContent"}],staticClass:"sc-button sc-button-flex",domProps:{innerHTML:t._s(t.btnContent)},on:{click:function(n){return n.preventDefault(),t.buttonReplaceContent()}}})]),t._v(" "),n("span",{staticClass:"uk-form-help-block uk-margin-remove-left"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tReplace text\r\n\t\t\t\t\t\t\t\t\t")])],1),t._v(" "),n("div",[n("button",{staticClass:"sc-button",class:{"sc-button-progress":t.btn1Loading},attrs:{disabled:t.btn1LoadingEnd},on:{click:function(n){return n.preventDefault(),t.showBtn1Loading()}}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!t.btn1LoadingEnd,expression:"!btn1LoadingEnd"}]},[t._v("Click Me")]),t._v(" "),n("ScProgressCircular",{directives:[{name:"show",rawName:"v-show",value:t.btn1LoadingEnd,expression:"btn1LoadingEnd"}]})],1),t._v(" "),n("span",{staticClass:"uk-form-help-block uk-margin-remove-left"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tLoading effect\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("button",{staticClass:"sc-button sc-button-primary",class:{"sc-button-progress":t.btn2Loading},attrs:{disabled:t.btn2LoadingEnd},on:{click:function(n){return n.preventDefault(),t.showBtn2Loading()}}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!t.btn2LoadingEnd,expression:"!btn2LoadingEnd"}]},[t._v("Click Me")]),t._v(" "),n("ScProgressCircular",{directives:[{name:"show",rawName:"v-show",value:t.btn2LoadingEnd,expression:"btn2LoadingEnd"}],attrs:{light:""}})],1),t._v(" "),n("span",{staticClass:"uk-form-help-block uk-margin-remove-left"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tLoading effect (light)\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("button",{staticClass:"sc-button",class:{"sc-button-progress-overlay":t.btn3LoadingEnd},attrs:{disabled:t.btn3LoadingEnd},on:{click:function(n){return n.preventDefault(),t.showBtn3Loading()}}},[n("span",[t._v("Click Me")]),t._v(" "),n("transition",{attrs:{name:"scale-up"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.btn3Loading,expression:"btn3Loading"}],staticClass:"sc-button-progress-layer"},[n("ScProgressCircular")],1)])],1),t._v(" "),n("span",{staticClass:"uk-form-help-block uk-margin-remove-left"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tLoading effect (overlay)\r\n\t\t\t\t\t\t\t\t\t")])])])])],1),t._v(" "),n("ScCard",{staticClass:"uk-margin-top"},[n("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tSocial Buttons\r\n\t\t\t\t\t\t")]),t._v(" "),n("ScCardBody",[n("div",[n("div",{staticClass:"uk-width-auto uk-grid-medium uk-grid",attrs:{"data-uk-grid":""}},[n("div",[n("a",{staticClass:"sc-button sc-button-facebook sc-button-social",attrs:{href:"javascript:void(0)"}},[n("i",{staticClass:"mdi mdi-facebook"})])]),t._v(" "),n("div",[n("a",{staticClass:"sc-button sc-button-twitter sc-button-social",attrs:{href:"javascript:void(0)"}},[n("i",{staticClass:"mdi mdi-twitter"})])]),t._v(" "),n("div",[n("a",{staticClass:"sc-button sc-button-gplus sc-button-social",attrs:{href:"javascript:void(0)"}},[n("i",{staticClass:"mdi mdi-google-plus"})])]),t._v(" "),n("div",[n("a",{staticClass:"sc-button sc-button-twitch sc-button-social",attrs:{href:"javascript:void(0)"}},[n("i",{staticClass:"mdi mdi-twitch"})])]),t._v(" "),n("div",[n("a",{staticClass:"sc-button sc-button-youtube sc-button-social",attrs:{href:"javascript:void(0)"}},[n("i",{staticClass:"mdi mdi-youtube"})])]),t._v(" "),n("div",[n("a",{staticClass:"sc-button sc-button-linkedin sc-button-social",attrs:{href:"javascript:void(0)"}},[n("i",{staticClass:"mdi mdi-linkedin"})])])])]),t._v(" "),n("div",{staticClass:"uk-margin-medium-top"},[n("div",{staticClass:"uk-grid-medium uk-width-auto uk-grid",attrs:{"data-uk-grid":""}},[n("div",[n("a",{staticClass:"sc-button sc-button-facebook sc-button-social",attrs:{href:"javascript:void(0)"}},[n("span",[t._v("Sign in with")]),n("i",{staticClass:"mdi mdi-facebook"})])]),t._v(" "),n("div",[n("a",{staticClass:"sc-button sc-button-twitter sc-button-social",attrs:{href:"javascript:void(0)"}},[n("span",[t._v("Sign in with")]),n("i",{staticClass:"mdi mdi-twitter"})])]),t._v(" "),n("div",[n("a",{staticClass:"sc-button sc-button-gplus sc-button-social",attrs:{href:"javascript:void(0)"}},[n("span",[t._v("Sign in with")]),n("i",{staticClass:"mdi mdi-google-plus"})])]),t._v(" "),n("div",[n("a",{staticClass:"sc-button sc-button-youtube sc-button-social",attrs:{href:"javascript:void(0)"}},[n("span",[t._v("Watch it on")]),n("i",{staticClass:"mdi mdi-youtube"})])])])])])],1)],1)])])])}),[],!1,null,null,null);n.default=component.exports}}]);