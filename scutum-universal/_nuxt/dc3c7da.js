(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1926:function(t,e,r){"use strict";r.r(e);var n=r(509),c=r(1074),d=(r(339),{name:"FormsAdvancedElementsDateRangePicker",components:{ScInput:n.a,DateRangePicker:c.a},data:function(){return{drpDefault:[],drpTime:[],drpFutureDates:[],drpExtraContentVal:[]}},computed:{drpExtraContent:function(){return{showDateFilter:function(time,t){return'<span class="sc-text-semibold">'+t+'</span><div class="sc-color-secondary uk-margin-mini-top">$'+Math.round(999*Math.random())+"</div>"}}}},methods:{setRange:function(){this.drpDefault=[this.$moment().format("DD-MM-YYYY"),this.$moment().add(7,"days").format("DD-MM-YYYY")]}}}),o=r(2),component=Object(o.a)(d,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"sc-page-wrapper"}},[e("div",{attrs:{id:"sc-page-content"}},[e("div",{staticClass:"uk-child-width-1-2@m uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("ScCard",[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tDefault\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("DateRangePicker",{model:{value:t.drpDefault,callback:function(e){t.drpDefault=e},expression:"drpDefault"}},[e("ScInput",{attrs:{placeholder:"Pick a range..."}})],1),t._v(" "),e("a",{staticClass:"sc-button sc-button-small uk-margin-small-top",attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.setRange()}}},[t._v("\r\n\t\t\t\t\t\t\t\tSet range\r\n\t\t\t\t\t\t\t")])],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tTime Enabled\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("DateRangePicker",{attrs:{config:{format:"DD.MM.YYYY HH:mm",autoClose:!1,time:{enabled:!0}}},model:{value:t.drpTime,callback:function(e){t.drpTime=e},expression:"drpTime"}},[e("ScInput",{attrs:{placeholder:"Pick a range..."}})],1)],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tFuture date shortcuts\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("DateRangePicker",{attrs:{config:{showShortcuts:!0,shortcuts:{"next-days":[3,5,7],next:["week","month","year"]}}},model:{value:t.drpFutureDates,callback:function(e){t.drpFutureDates=e},expression:"drpFutureDates"}},[e("ScInput",{attrs:{placeholder:"Pick a range..."}})],1)],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tExtra content\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("DateRangePicker",{attrs:{config:t.drpExtraContent},model:{value:t.drpExtraContentVal,callback:function(e){t.drpExtraContentVal=e},expression:"drpExtraContentVal"}},[e("ScInput",{attrs:{placeholder:"Pick a range..."}})],1)],1)],1)],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);