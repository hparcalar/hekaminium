(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{1241:function(t,e,o){"use strict";o(806)},1242:function(t,e,o){var r=o(11)(!1);r.push([t.i,'.scutum-vgt thead th.sorting{position:relative;padding-right:32px;background:rgba(0,0,0,.08)}.scutum-vgt thead th.sorting:after{content:"";position:absolute;right:6px;top:50%;margin-top:-15px;font-family:"Material Design Icons";font-size:20px;font-size:1.25rem}.scutum-vgt thead th.sorting.sorting-asc:after{content:"\\f143"}.scutum-vgt thead th.sorting.sorting-desc:after{content:"\\f140"}.scutum-vgt th.line-numbers{padding-top:12px;padding-bottom:12px}.scutum-vgt th.line-numbers,.scutum-vgt th.vgt-checkbox-col{width:1%;white-space:nowrap}.vgt-wrap__footer{border:none;background:none;padding:16px 12px}@media (max-width:959px){.vgt-wrap__footer{padding:16px 0 0}}.vgt-wrap__footer .footer__row-count__select{border-radius:3px;border:1px solid rgba(0,0,0,.12);padding:8px}@media (max-width:959px){.vgt-wrap__footer .footer__navigation,.vgt-wrap__footer .footer__row-count{float:none!important}}.vgt-wrap__footer .footer__navigation{display:flex;align-items:center;margin-top:8px}@media (max-width:959px){.vgt-wrap__footer .footer__navigation{margin-top:16px;justify-content:center}.vgt-wrap__footer .footer__navigation .footer__navigation__page-btn{margin:0}.vgt-wrap__footer .footer__navigation .footer__navigation__info{display:block;margin:0 8px}}.vgt-wrap__footer .footer__navigation__page-info__current-entry{border-radius:3px;border:1px solid rgba(0,0,0,.12);padding:2px}.vgt-wrap__footer .footer__navigation__page-btn{display:inline-flex}.vgt-wrap__footer .footer__navigation__page-btn .disabled,.vgt-wrap__footer .footer__navigation__page-btn .disabled:hover{color:rgba(0,0,0,.87)}.vgt-wrap__footer .footer__navigation__page-btn .chevron{width:20px;height:20px;border-radius:0;margin:0}.vgt-wrap__footer .footer__navigation__page-btn .chevron:after{content:"";position:absolute;top:-5px;left:0;font-family:"Material Design Icons";font-size:20px;font-size:1.25rem;border:none!important;margin:0!important}.vgt-wrap__footer .footer__navigation__page-btn .chevron.left:after{content:"\\f141"}.vgt-wrap__footer .footer__navigation__page-btn .chevron.right:after{content:"\\f142"}.vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after,.vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after,.vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.left:after,.vgt-wrap__footer .footer__navigation__page-btn.disabled:hover .chevron.right:after{color:rgba(0,0,0,.4)}.vgt-global-search{background:none;border:none;padding:0 0 12px}.vgt-global-search__input:before{position:absolute;left:0;top:50%;margin-top:-16px;font-family:"Material Design Icons";font-size:24px;font-size:1.5rem;content:"\\f349";color:rgba(0,0,0,.54)}.vgt-global-search__actions,.vgt-global-search__input .input__icon{display:none}.vgt-selection-info-row{background:transparent;border:none;padding:12px 16px;color:rgba(0,0,0,.87)}.vgt-selection-info-row a{color:#0277bd;position:relative;padding-left:20px}.vgt-selection-info-row a:before{position:absolute;left:0;top:-3px;font-family:"Material Design Icons";font-size:18px;font-size:1.125rem;content:"\\f5ad"}',""]),t.exports=r},1714:function(t,e,o){"use strict";o.r(e);o(32),o(44),o(21),o(45),o(46);var r=o(16),n=(o(59),o(804),o(805)),l=o(10);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"PagesIssuesList",components:{VueGoodTable:n.a},computed:d(d({},Object(l.b)({issues:"issues/issues"})),{},{columns:function(){return[{label:"Id",field:"issueId",sortable:!0,sortFn:this.issueIdSort,tdClass:"uk-text-center uk-text-nowrap"},{label:"Priority",field:"priority",tdClass:"uk-text-center",filterOptions:{enabled:!0,filterDropdownItems:["minor","major","critical","blocker"]}},{label:"Title",field:"title",filterOptions:{enabled:!0}},{label:"User",field:"user",filterOptions:{enabled:!0}},{label:"Status",field:"status"},{label:"Created On",field:"created",type:"date",dateInputFormat:"yyyy-MM-dd",dateOutputFormat:"MMM do yyyy",tdClass:"uk-text-nowrap uk-text-left"},{label:"Modified On",field:"modified",type:"date",dateInputFormat:"yyyy-MM-dd",dateOutputFormat:"MMM do yyyy",tdClass:"uk-text-nowrap uk-text-left"}]}}),methods:{priorityLabel:function(t){var e=null;switch(t){case"minor":e="uk-label-success";break;case"major":e="";break;case"critical":e="uk-label-warning";break;case"blocker":e="uk-label-danger"}return e},issueIdSort:function(t,e,col,o,r){var n=parseInt(t.replace("sc-","")),l=parseInt(e.replace("sc-",""));return n<l?-1:n>l?1:0}}},_=(o(1241),o(3)),component=Object(_.a)(f,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"sc-page-wrapper"}},[t._m(0),t._v(" "),e("div",{attrs:{id:"sc-page-content"}},[e("ScCard",[e("ScCardBody",[e("VueGoodTable",{attrs:{columns:t.columns,rows:t.issues,"pagination-options":{enabled:!0},"style-class":"uk-table uk-table-divider scutum-vgt","search-options":{enabled:!0}},scopedSlots:t._u([{key:"table-row",fn:function(o){return["priority"===o.column.field?e("span",{staticClass:"uk-label",class:[t.priorityLabel(o.row.priority)]},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(o.row.priority)+"\n\t\t\t\t\t\t\t")]):"status"===o.column.field?e("span",{staticClass:"uk-label uk-label-outline"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(o.row.status)+"\n\t\t\t\t\t\t\t")]):"title"===o.column.field?e("nuxt-link",{attrs:{to:"/pages/issues/details/"+o.row.id}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(o.row.title)+"\n\t\t\t\t\t\t\t")]):"user"===o.column.field?e("span",[t._v("\n\t\t\t\t\t\t\t\t"+t._s(o.row.user)+"\n\t\t\t\t\t\t\t")]):[t._v("\n\t\t\t\t\t\t\t\t"+t._s(o.formattedRow[o.column.field])+"\n\t\t\t\t\t\t\t")]]}}])})],1)],1)],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"sc-top-bar",attrs:{id:"sc-page-top-bar"}},[e("div",{staticClass:"sc-top-bar-content sc-padding-medium-top sc-padding-medium-bottom uk-flex-1"},[e("div",{staticClass:"uk-flex-1"},[e("h1",{staticClass:"sc-top-bar-title"},[t._v("\n\t\t\t\t\t\tIssue Tracker\n\t\t\t\t\t")]),t._v(" "),e("span",{staticClass:"uk-text-muted"},[t._v("\n\t\t\t\t\t\tScutum Admin\n\t\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"sc-actions uk-margin-left"},[e("a",{staticClass:"sc-actions-icon mdi mdi-printer",attrs:{href:"javascript:void(0)"}}),t._v(" "),e("a",{staticClass:"sc-actions-icon mdi mdi-archive",attrs:{href:"javascript:void(0)"}}),t._v(" "),e("a",{staticClass:"sc-actions-icon mdi mdi-dots-vertical",attrs:{href:"javascript:void(0)"}})])])])}],!1,null,null,null);e.default=component.exports},806:function(t,e,o){var content=o(1242);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("2a45f2cc",content,!0,{sourceMap:!1})}}]);