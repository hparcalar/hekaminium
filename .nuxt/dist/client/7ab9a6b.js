(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1698:function(t,n,e){"use strict";e.r(n);e(20);var r=e(5),c=(e(30),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.params,e=t.$axios,n.next=3,e.$get("/api/user");case 3:return n.next=5,n.sent;case 5:return r=n.sent,n.abrupt("return",{user:r});case 7:case"end":return n.stop()}}),n)})))()},data:function(){return{user:{}}}}),o=e(3),component=Object(o.a)(c,(function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"sc-page-wrapper"}},[n("div",{attrs:{id:"sc-page-content"}},[n("ScCard",[n("ScCardBody",[n("div",[t._v("\n\t\t\t\t\t\tName: "+t._s(t.user.name)+"\n\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"uk-margin-small-top uk-margin-bottom"},[t._v("\n\t\t\t\t\t\tEmail: "+t._s(t.user.email)+"\n\t\t\t\t\t")]),t._v(" "),n("a",{staticClass:"sc-button sc-button-default sc-button-outline",attrs:{href:"javascript:void(0)"},on:{click:function(n){return t.$auth.logout()}}},[t._v("\n\t\t\t\t\t\tLogout\n\t\t\t\t\t")])])],1)],1)])}),[],!1,null,null,null);n.default=component.exports}}]);