(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{1158:function(t,e,n){var o;o=function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var l=e[o]={exports:{},id:o,loaded:!1};return t[o].call(l.exports,l,l.exports,n),l.loaded=!0,l.exports}return n.m=t,n.c=e,n.p="",n(0)}([function(t,e){"use strict";var n=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t},o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),l=function(object,t,e){t.forEach((function(t){object.addEventListener(t,(function(t){e(t)}))}))},r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.defaults={idle:1e4,events:["mousemove","keydown","mousedown","touchstart"],onIdle:function(){},onActive:function(){},onHide:function(){},onShow:function(){},keepTracking:!0,startAtIdle:!1,recurIdleCall:!1},this.settings=n({},this.defaults,e),this.idle=this.settings.startAtIdle,this.visible=!this.settings.startAtIdle,this.visibilityEvents=["visibilitychange","webkitvisibilitychange","mozvisibilitychange","msvisibilitychange"],this.lastId=null}return o(t,[{key:"resetTimeout",value:function(t,e){if(this.idle&&(e.onActive.call(),this.idle=!1),clearTimeout(t),this.settings.keepTracking)return this.timeout(this.settings)}},{key:"timeout",value:function(t){return(this.settings.recurIdleCall?setInterval:setTimeout)(function(){this.idle=!0,this.settings.onIdle.call()}.bind(this),this.settings.idle)}},{key:"start",value:function(){window.addEventListener("idle:stop",(function(t){var object;object=window,this.settings.events.forEach((function(t){object.removeEventListener(t)})),this.settings.keepTracking=!1,this.resetTimeout(this.lastId,this.settings)})),this.lastId=this.timeout(this.settings),l(window,this.settings.events,function(t){this.lastId=this.resetTimeout(this.lastId,this.settings)}.bind(this)),(this.settings.onShow||this.settings.onHide)&&l(document,this.visibilityEvents,function(t){document.hidden||document.webkitHidden||document.mozHidden||document.msHidden?this.visible&&(this.visible=!1,this.settings.onHide.call()):this.visible||(this.visible=!0,this.settings.onShow.call())}.bind(this))}}]),t}();t.exports=r}])},t.exports=o()},1284:function(t,e,n){"use strict";n.r(e);var o=n(1),l=n(15),r=n(1158),c=n.n(r),d={install:function(t,e){var n=e||{},o=n.eventEmitter,r=n.store,d=n.moduleName,h=void 0===d?"idleVue":d,v=n.idleTime,m=void 0===v?6e4:v,f=n.events,w=void 0===f?["mousemove","keydown","mousedown","touchstart"]:f,k=n.keepTracking,y=void 0===k||k,I=n.startAtIdle,_=void 0===I||I;if(!o&&!r)throw Error("Either `eventEmitter` or `store` must be passed in options");r&&r.registerModule(h,{state:{isIdle:_},mutations:Object(l.a)({},"".concat(h,"/IDLE_CHANGED"),(function(t,e){t.isIdle=e}))});var T="".concat(h,"_onIdle"),C="".concat(h,"_onActive");new c.a({idle:m,events:w,keepTracking:y,startAtIdle:_,onIdle:function(){o&&o.$emit(T),r&&r.commit("".concat(h,"/IDLE_CHANGED"),!0)},onActive:function(){o&&o.$emit(C),r&&r.commit("".concat(h,"/IDLE_CHANGED"),!1)}}).start(),t.mixin({data:function(){var t;return t={},Object(l.a)(t,T,null),Object(l.a)(t,C,null),t},computed:{isAppIdle:function(){return r&&r.state[h].isIdle}},created:function(){o&&this.$options.onIdle&&(this[T]=this.$options.onIdle.bind(this),o.$on(T,this[T])),o&&this.$options.onActive&&(this[C]=this.$options.onActive.bind(this),o.$on(C,this[C]))},destroyed:function(){o&&this[T]&&o.$off(T,this[T]),o&&this[C]&&o.$off(C,this[C])}})}},h={eventEmitter:new o.default,idleTime:5e3};o.default.use(d,h)},1404:function(t,e,n){"use strict";n.r(e);n(1284);var o={name:"PluginsIdleTimeout",data:function(){return{timeleft:30,warningTimer:null}},onIdle:function(){UIkit.modal("#idle-modal").show(),this.countDown()},onActive:function(){},methods:{countDown:function(){var t=this;this.warningTimer=setInterval((function(){t.timeleft-=1,t.timeleft<=0&&t.logout()}),1e3)},clearTimer:function(){clearInterval(this.warningTimer),UIkit.modal("#idle-modal").hide(),this.timeleft=30},logout:function(){this.clearTimer(),this.$router.push({path:"/login_page"})}}},l=n(2),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"sc-page-wrapper"}},[e("div",{attrs:{id:"sc-page-content"}},[e("ScCard",[e("ScCardBody",[e("h1",[t._v("Idle timeout")]),t._v(" "),e("hr"),t._v(" "),e("p",{staticClass:"uk-margin-remove"},[t._v("\n\t\t\t\t\t\tKeep your mouse and keyboard still!\n\t\t\t\t\t")]),t._v(" "),e("p",{staticClass:"uk-margin-remove"},[t._v("\n\t\t\t\t\t\tThis plugin will display a modal to the user after 5 seconds of idleness.\n\t\t\t\t\t")])])],1),t._v(" "),e("div",{attrs:{id:"idle-modal","data-uk-modal":"",container:"false"}},[e("div",{staticClass:"uk-modal-dialog"},[e("div",{staticClass:"uk-modal-body"},[e("h3",{staticClass:"uk-modal-title"},[t._v("\n\t\t\t\t\t\t\tYour session is about to expire!\n\t\t\t\t\t\t")]),t._v(" "),e("hr"),t._v(" "),e("p",{staticClass:"uk-margin-remove"},[t._v("\n\t\t\t\t\t\t\tYou've been inactive for a while. For your security, we'll log you out automatically.\n\t\t\t\t\t\t")]),t._v(" "),e("p",{staticClass:"uk-margin-remove"},[t._v('\n\t\t\t\t\t\t\tClick "Stay Online" to continue your session.\n\t\t\t\t\t\t')]),t._v(" "),e("p",[t._v("\n\t\t\t\t\t\t\tYour session will expire in\n\t\t\t\t\t\t\t"),e("span",{staticClass:"sc-text-semibold md-color-red-600",attrs:{id:"sc-session-timer"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.timeleft)+"\n\t\t\t\t\t\t\t")]),t._v("\n\t\t\t\t\t\t\tsecond(s).\n\t\t\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"uk-modal-footer uk-text-right"},[e("button",{staticClass:"sc-button sc-button-default sc-button-flat uk-modal-close",attrs:{type:"button"},on:{click:t.clearTimer}},[t._v("\n\t\t\t\t\t\t\tStay Online\n\t\t\t\t\t\t")]),t._v(" "),e("button",{staticClass:"sc-button sc-button-outline sc-button-outline-primary uk-margin-small-left",attrs:{type:"button"},on:{click:t.logout}},[t._v("\n\t\t\t\t\t\t\tLogout\n\t\t\t\t\t\t")])])])])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);