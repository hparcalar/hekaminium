(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{609:function(t,e,n){"use strict";n.r(e);n(13),n(10),n(9),n(25),n(26);var r=n(5),o=n(19),c=n(3);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var v={name:"ScOffcanvas",props:{extraClass:{type:String,default:""}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)(["vxOffcanvasPresent","vxOffcanvasExpanded"])),watch:{vxOffcanvasExpanded:function(t){c.e.mediumMax()&&(t?(UIkit.offcanvas("#sc-offcanvas").show(),this.$store.getters.sidebarMainState&&this.$store.commit("sidebarMainToggle",!1)):UIkit.offcanvas("#sc-offcanvas").hide())},$route:function(){this.$store.getters.offcanvasState&&this.$store.commit("offcanvasToggle",!1)}},mounted:function(){var t=this;c.e.mediumMax()&&t.$nextTick((function(){t.$store.commit("setOffcanvasPresent",!0)}))},beforeDestroy:function(){this.$store.commit("offcanvasToggle",!1),this.$store.commit("setOffcanvasPresent",!1)},methods:{hide:function(){this.$store.commit("offcanvasToggle",!1)}}},l=v,O=n(2),component=Object(O.a)(l,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.vxOffcanvasPresent,expression:"vxOffcanvasPresent"}],attrs:{id:"sc-offcanvas","data-uk-offcanvas":"flip: true; container: '#nuxt-wrapper'"}},[e("div",{staticClass:"uk-offcanvas-bar",class:t.extraClass},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports}}]);