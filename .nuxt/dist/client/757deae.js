(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1734:function(t,n,o){"use strict";o.r(n);var c={name:"ComponentsNotifications",data:function(){return{notification:{default:"My message",persistent:"My persistent message",withIcon:'<div class="uk-flex uk-flex-middle"><i class="mdi mdi-check-all uk-margin-right md-color-light-green-400"></i>Message</div>',long:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, labore laudantium eaque obcaecati",withLink:'<div class="uk-flex uk-flex-middle"><span class="uk-flex-1">Message deleted!</span><a href="javascript:void(0)" class="md-color-amber-500 uk-margin-small-left">undo</a></div>'}}},methods:{showNotification:function(text,t,n,o){var c={};c.timeout=o?!o:3e3,n&&(c.status=n),t&&(c.pos=t),UIkit.notification(text,c)}}},e=o(3),component=Object(e.a)(c,(function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"sc-page-wrapper"}},[n("div",{attrs:{id:"sc-page-content"}},[n("ScCard",[n("ScCardBody",[n("div",{staticClass:"uk-child-width-1-5@l uk-child-width-1-3@m uk-grid-divider uk-grid",attrs:{"data-uk-grid":""}},[n("div",[n("p",{staticClass:"uk-text-large"},[t._v("\n\t\t\t\t\t\t\t\tDefault\n\t\t\t\t\t\t\t")]),t._v(" "),n("button",{staticClass:"sc-button",on:{click:function(n){return t.showNotification(t.notification.default)}}},[t._v("\n\t\t\t\t\t\t\t\tClick\n\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("p",{staticClass:"uk-text-large"},[t._v("\n\t\t\t\t\t\t\t\tPersistent\n\t\t\t\t\t\t\t")]),t._v(" "),n("button",{staticClass:"sc-button",on:{click:function(n){return t.showNotification(t.notification.persistent,!1,!1,!0)}}},[t._v("\n\t\t\t\t\t\t\t\tClick\n\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("p",{staticClass:"uk-text-large"},[t._v("\n\t\t\t\t\t\t\t\tWith icon\n\t\t\t\t\t\t\t")]),t._v(" "),n("button",{staticClass:"sc-button",on:{click:function(n){return t.showNotification(t.notification.withIcon)}}},[t._v("\n\t\t\t\t\t\t\t\tClick\n\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("p",{staticClass:"uk-text-large"},[t._v("\n\t\t\t\t\t\t\t\tLong text\n\t\t\t\t\t\t\t")]),t._v(" "),n("button",{staticClass:"sc-button",on:{click:function(n){return t.showNotification(t.notification.long)}}},[t._v("\n\t\t\t\t\t\t\t\tClick\n\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("p",{staticClass:"uk-text-large"},[t._v("\n\t\t\t\t\t\t\t\tWith link\n\t\t\t\t\t\t\t")]),t._v(" "),n("button",{staticClass:"sc-button",on:{click:function(n){return t.showNotification(t.notification.withLink)}}},[t._v("\n\t\t\t\t\t\t\t\tClick\n\t\t\t\t\t\t\t")])])]),t._v(" "),n("h4",{staticClass:"uk-margin-large-top uk-heading-line"},[n("span",[t._v("Posititions")])]),t._v(" "),n("div",{staticClass:"uk-child-width-auto@m uk-grid-divider",attrs:{"data-uk-grid":""}},[n("div",[n("button",{staticClass:"sc-button",on:{click:function(n){return t.showNotification(t.notification.default,"top-left")}}},[t._v("\n\t\t\t\t\t\t\t\tTop Left\n\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("button",{staticClass:"sc-button",on:{click:function(n){return t.showNotification(t.notification.default,"top-center")}}},[t._v("\n\t\t\t\t\t\t\t\tTop Center\n\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("button",{staticClass:"sc-button",on:{click:function(n){return t.showNotification(t.notification.default,"top-right")}}},[t._v("\n\t\t\t\t\t\t\t\tTop Right\n\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("button",{staticClass:"sc-button",on:{click:function(n){return t.showNotification(t.notification.default,"bottom-left")}}},[t._v("\n\t\t\t\t\t\t\t\tBottom Left\n\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("button",{staticClass:"sc-button",on:{click:function(n){return t.showNotification(t.notification.default,"bottom-center")}}},[t._v("\n\t\t\t\t\t\t\t\tBottom Center\n\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("button",{staticClass:"sc-button",on:{click:function(n){return t.showNotification(t.notification.default,"bottom-right")}}},[t._v("\n\t\t\t\t\t\t\t\tBottom Right\n\t\t\t\t\t\t\t")])])]),t._v(" "),n("h4",{staticClass:"uk-margin-large-top uk-heading-line"},[n("span",[t._v("Status")])]),t._v(" "),n("div",{staticClass:"uk-child-width-auto@m uk-grid-divider",attrs:{"data-uk-grid":""}},[n("div",[n("button",{staticClass:"sc-button",on:{click:function(n){return t.showNotification(t.notification.default,!1,"primary")}}},[t._v("\n\t\t\t\t\t\t\t\tPrimary\n\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("button",{staticClass:"sc-button",on:{click:function(n){return t.showNotification(t.notification.default,!1,"success")}}},[t._v("\n\t\t\t\t\t\t\t\tSuccess\n\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("button",{staticClass:"sc-button",on:{click:function(n){return t.showNotification(t.notification.default,!1,"danger")}}},[t._v("\n\t\t\t\t\t\t\t\tDanger\n\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("button",{staticClass:"sc-button",on:{click:function(n){return t.showNotification(t.notification.default,!1,"warning")}}},[t._v("\n\t\t\t\t\t\t\t\tWarning\n\t\t\t\t\t\t\t")])])])])],1)],1)])}),[],!1,null,null,null);n.default=component.exports}}]);