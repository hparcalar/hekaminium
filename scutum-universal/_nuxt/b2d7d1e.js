(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1652:function(t,e,l){"use strict";l.r(e);l(493);var n={name:"ComponentsAnimations",components:{Select2:function(){return Promise.all([l.e(0),l.e(1),l.e(9)]).then(l.bind(null,964))}},data:function(){return{animationDuration:"",animationFast:!1,animationSlow:!1,animationVerySlow:!1,durations:[{id:"animation-default",text:"Default"},{id:"animation-fast",text:"Fast"},{id:"animation-slow",text:"Slow"},{id:"animation-very-slow",text:"Very Slow"}]}},methods:{changeDuration:function(t){this.animationFast=!1,this.animationSlow=!1,this.animationVerySlow=!1,"animation-fast"===t&&(this.animationFast=!0),"animation-slow"===t&&(this.animationSlow=!0),"animation-very-slow"===t&&(this.animationVerySlow=!0)}}},d=l(3),component=Object(d.a)(n,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"sc-page-wrapper"}},[e("client-only",[e("div",{staticClass:"sc-top-bar",attrs:{id:"sc-page-top-bar","data-uk-sticky":"offset:48; show-on-up: true; animation: uk-animation-slide-top-medium"}},[e("div",{staticClass:"sc-top-bar-content uk-flex uk-flex-1"},[e("h1",{staticClass:"sc-top-bar-title uk-text-uppercase uk-flex-1"},[t._v("\r\n\t\t\t\t\t\tAnimations\r\n\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"uk-width-1-2 uk-width-1-3@s uk-width-1-5@m"},[e("client-only",[e("Select2",{attrs:{options:t.durations,settings:{width:"100%",minimumResultsForSearch:-1,placeholder:"Select duration..."}},on:{change:function(e){return t.changeDuration(e)}},model:{value:t.animationDuration,callback:function(e){t.animationDuration=e},expression:"animationDuration"}})],1)],1)])])]),t._v(" "),e("div",{staticClass:"uk-flex uk-flex-center",attrs:{id:"sc-page-content"}},[e("div",{staticClass:"uk-width-2-3@l"},[e("div",{class:{"sc-animation-slow":t.animationSlow,"sc-animation-fast":t.animationFast,"sc-animation-very-slow":t.animationVerySlow}},[e("div",{staticClass:"uk-child-width-1-2 uk-child-width-1-6@s uk-grid-match uk-grid-medium uk-grid",attrs:{"data-uk-grid":""}},[e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-fade"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tFade\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-scale-up"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tScale Up\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-scale-down"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tScale Down\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-shake"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tShake\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-left"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Left\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-top"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Top\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-bottom"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Bottom\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-right"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Right\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-left-small"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Left Small\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-top-small"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Top Small\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-bottom-small"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Bottom Small\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-right-small"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Right Small\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-left-medium"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Left Medium\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-top-medium"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Top Medium\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-bottom-medium"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Bottom Medium\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-right-medium"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Right Medium\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1)])]),t._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e("code",[t._v('<div class="uk-animation-fade"></div>\r\n<div class="uk-animation-scale-up"></div>\r\n<div class="uk-animation-scale-down"></div>\r\n<div class="uk-animation-shake"></div>\r\n<div class="uk-animation-slide-left"></div>\r\n<div class="uk-animation-slide-top"></div>\r\n<div class="uk-animation-slide-bottom"></div>\r\n<div class="uk-animation-slide-right"></div>\r\n<div class="uk-animation-slide-left-small"></div>\r\n<div class="uk-animation-slide-top-small"></div>\r\n<div class="uk-animation-slide-bottom-small"></div>\r\n<div class="uk-animation-slide-right-small"></div>\r\n<div class="uk-animation-slide-left-medium"></div>\r\n<div class="uk-animation-slide-top-medium"></div>\r\n<div class="uk-animation-slide-bottom-medium"></div>\r\n<div class="uk-animation-slide-right-medium"></div>\r\n')])]),t._v(" "),e("h5",{staticClass:"uk-margin-medium-top"},[t._v("\r\n\t\t\t\t\tReverse modifier\r\n\t\t\t\t")]),t._v(" "),e("div",{class:{"sc-animation-slow":t.animationSlow,"sc-animation-fast":t.animationFast,"sc-animation-very-slow":t.animationVerySlow}},[e("div",{staticClass:"uk-child-width-1-2 uk-child-width-1-6@s uk-grid-match sc-js-animations-grid uk-grid-medium uk-grid",attrs:{"data-uk-grid":""}},[e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-fade uk-animation-reverse"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tFade\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-scale-up uk-animation-reverse"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tScale Up\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-scale-down uk-animation-reverse"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tScale Down\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-shake uk-animation-reverse"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tShake\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-left uk-animation-reverse"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Left\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-top uk-animation-reverse"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Top\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-bottom uk-animation-reverse"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Bottom\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-right uk-animation-reverse"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Right\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-left-small uk-animation-reverse"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Left Small\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-top-small uk-animation-reverse"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Top Small\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-bottom-small uk-animation-reverse"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Bottom Small\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-right-small uk-animation-reverse"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Right Small\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-left-medium uk-animation-reverse"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Left Medium\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-top-medium uk-animation-reverse"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Top Medium\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-bottom-medium uk-animation-reverse"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Bottom Medium\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",{staticClass:"uk-animation-toggle"},[e("ScCard",{staticClass:"uk-flex uk-height-small uk-flex-middle uk-flex-center uk-animation-slide-right-medium uk-animation-reverse"},[e("ScCardBody",[e("p",{staticClass:"uk-text-center uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSlide Right Medium\r\n\t\t\t\t\t\t\t\t\t")])])],1)],1)])]),t._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e("code",[t._v('<div class="uk-animation-fade uk-animation-reverse"></div>\r\n<div class="uk-animation-scale-up uk-animation-reverse"></div>\r\n<div class="uk-animation-scale-down uk-animation-reverse"></div>\r\n<div class="uk-animation-shake uk-animation-reverse"></div>\r\n<div class="uk-animation-slide-left uk-animation-reverse"></div>\r\n<div class="uk-animation-slide-top uk-animation-reverse"></div>\r\n<div class="uk-animation-slide-bottom uk-animation-reverse"></div>\r\n<div class="uk-animation-slide-right uk-animation-reverse"></div>\r\n<div class="uk-animation-slide-left-small uk-animation-reverse"></div>\r\n<div class="uk-animation-slide-top-small uk-animation-reverse"></div>\r\n<div class="uk-animation-slide-bottom-small uk-animation-reverse"></div>\r\n<div class="uk-animation-slide-right-small uk-animation-reverse"></div>\r\n<div class="uk-animation-slide-left-medium uk-animation-reverse"></div>\r\n<div class="uk-animation-slide-top-medium uk-animation-reverse"></div>\r\n<div class="uk-animation-slide-bottom-medium uk-animation-reverse"></div>\r\n<div class="uk-animation-slide-right-medium uk-animation-reverse"></div>\r\n')])])])])],1)}),[],!1,null,null,null);e.default=component.exports},493:function(t,e,l){"use strict";l.r(e);var n=l(2),d=l(607);l(608),d.registerLanguage("xml",l(609)),d.registerLanguage("sql",l(610)),d.registerLanguage("javascript",l(611)),n.default.directive("highlightjs",{deep:!0,bind:function(t,e){var l,i,n=t.querySelectorAll("code");for(i=0;i<n.length;i+=1)l=n[i],"string"==typeof e.value&&(l.textContent=e.value),d.highlightBlock(t)},componentUpdated:function(t,e){var l,i,n=t.querySelectorAll("code");for(i=0;i<n.length;i+=1)l=n[i],"string"==typeof e.value&&(l.textContent=e.value,d.highlightBlock(t))}})}}]);