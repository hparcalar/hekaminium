(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1048:function(r,t,e){"use strict";e(819)},1049:function(r,t,e){var o=e(23)(!1);o.push([r.i,".sc-progress{position:relative;max-width:100%;box-shadow:none;background:rgba(0,0,0,.1);border-radius:6px;display:flex}.sc-progress-label{position:absolute;bottom:100%;font-size:12px;font-size:.75rem;width:100%;color:rgba(0,0,0,.54);font-weight:500;margin-bottom:4px;text-align:center}.sc-progress-label-enabled{margin-top:28px}.sc-progress-bar{position:relative;height:4px;min-width:12px;background:#bdbdbd;transition:width .36s cubic-bezier(.55,0,.1,1),background-color .14s cubic-bezier(.55,0,.1,1);color:#fff;box-sizing:border-box;text-align:center;overflow:hidden}.sc-progress-medium .sc-progress-bar{height:8px;font-size:10px;font-size:.625rem;line-height:8px}.sc-progress-large .sc-progress-bar{height:16px;font-size:11px;font-size:.6875rem;line-height:17px}.sc-progress-large,.sc-progress-large .sc-progress-bar,.sc-progress-medium,.sc-progress-medium .sc-progress-bar{border-radius:3px}.sc-progress-large.sc-progress-group .sc-progress-bar,.sc-progress-medium.sc-progress-group .sc-progress-bar{border-radius:3px 0 0 3px}.sc-progress-large.sc-progress-group .sc-progress-bar+.sc-progress-bar,.sc-progress-medium.sc-progress-group .sc-progress-bar+.sc-progress-bar{border-radius:0}.sc-progress-large.sc-progress-group .sc-progress-bar:last-child,.sc-progress-medium.sc-progress-group .sc-progress-bar:last-child{border-radius:0 3px 3px 0}.sc-progress-indeterminate{overflow:hidden}.sc-progress-indeterminate .sc-progress-bar{width:100%;-webkit-animation:indeterminate 2.8s linear infinite;animation:indeterminate 2.8s linear infinite}.sc-progress-circular{border:4px solid rgba(0,0,0,.12);border-top-color:#00acc1;border-radius:50%;width:24px;height:24px;-webkit-animation:circular-animation .8s linear infinite;animation:circular-animation .8s linear infinite;display:inline-block}.sc-progress-circular-small{width:12px;height:12px;border-width:2px}.sc-progress-circular-large{width:48px;height:48px;border-width:8px}.sc-progress-circular-secondary{border-top-color:#d50000}.sc-progress-circular-light{border-color:hsla(0,0%,100%,.9) rgba(0,0,0,.2) rgba(0,0,0,.2)}@-webkit-keyframes circular-animation{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes circular-animation{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@-webkit-keyframes indeterminate{0%{transform:translateX(-100%) scaleX(.2)}20%{transform:translateX(-40%) scaleX(.2)}30%{transform:translateX(0) scaleX(.5)}55%{transform:translateX(100%) scaleX(.7)}55.99%{transform:scaleX(0)}56%{transform:translateX(-100%) scaleX(0)}56.99%{transform:translateX(-100%) scaleX(.6)}75%{transform:translateX(-5%) scaleX(.6)}85%{transform:translateX(30%) scaleX(.3)}98%{transform:translateX(100%) scaleX(.2)}99.99%{transform:scaleX(0)}to{transform:translateX(-100%)}}@keyframes indeterminate{0%{transform:translateX(-100%) scaleX(.2)}20%{transform:translateX(-40%) scaleX(.2)}30%{transform:translateX(0) scaleX(.5)}55%{transform:translateX(100%) scaleX(.7)}55.99%{transform:scaleX(0)}56%{transform:translateX(-100%) scaleX(0)}56.99%{transform:translateX(-100%) scaleX(.6)}75%{transform:translateX(-5%) scaleX(.6)}85%{transform:translateX(30%) scaleX(.3)}98%{transform:translateX(100%) scaleX(.2)}99.99%{transform:scaleX(0)}to{transform:translateX(-100%)}}",""]),r.exports=o},1675:function(r,t,e){"use strict";e.r(t);var progress=e(74),o={name:"ComponentsProgressSpinners",components:{ScProgressLinear:progress.d,ScProgressBar:progress.a,ScProgressLabel:progress.c,ScProgressCircular:progress.b,ScProgressOverlay:progress.e},data:function(){return{rootProgress:!1,cardProgress:!1,progressGroup:{bar1:14,bar2:25,bar3:31},dynamicVal:12,dynamicColor:"md-bg-red-400"}},mounted:function(){var r=this,animate=setInterval((function(){var t=Math.floor(10*Math.random())+5;r.dynamicVal+t>=33&&(r.dynamicColor="md-bg-amber-400",r.dynamicVal=r.dynamicVal+t),r.dynamicVal+t>=66&&(r.dynamicColor="md-bg-green-400",r.dynamicVal=r.dynamicVal+t),r.dynamicVal+t>=100?(r.dynamicVal=100,clearInterval(animate)):r.dynamicVal=r.dynamicVal+t}),1200),t=this.$refs.uikitProgress,e=setInterval((function(){t.value+=10,t.value>=t.max&&clearInterval(e)}),1e3)},methods:{toggleRootOverlay:function(){this.$store.commit("toggleProgressOverlay",!this.rootProgress),this.rootProgress=!this.rootProgress}}},n=(e(1048),e(2)),component=Object(n.a)(o,(function(){var r=this,t=r._self._c;return t("div",{attrs:{id:"sc-page-wrapper"}},[t("div",{attrs:{id:"sc-page-content"}},[t("div",{staticClass:"uk-child-width-1-2@l uk-grid",attrs:{"data-uk-grid":""}},[t("div",[t("ScCard",[t("ScCardTitle",[r._v("\r\n\t\t\t\t\t\t\tCircular Progress\r\n\t\t\t\t\t\t")]),r._v(" "),t("ScCardBody",[t("div",{staticClass:"uk-child-width-auto uk-grid-margin uk-flex-middle uk-grid",attrs:{"data-uk-grid":""}},[t("div",[t("ScProgressCircular",{attrs:{size:"sm"}})],1),r._v(" "),t("div",[t("ScProgressCircular")],1),r._v(" "),t("div",[t("ScProgressCircular",{attrs:{size:"lg"}})],1),r._v(" "),t("div",[t("ScProgressCircular",{attrs:{size:"sm",color:"secondary"}})],1),r._v(" "),t("div",[t("ScProgressCircular",{attrs:{color:"secondary"}})],1),r._v(" "),t("div",[t("ScProgressCircular",{attrs:{size:"lg",color:"secondary"}})],1)])])],1),r._v(" "),t("ScCard",{staticClass:"uk-margin-top"},[t("ScCardTitle",[r._v("\r\n\t\t\t\t\t\t\tUIkit Spinners\r\n\t\t\t\t\t\t")]),r._v(" "),t("ScCardBody",[t("div",{staticClass:"uk-child-width-auto uk-grid-margin uk-flex-middle uk-grid",attrs:{"data-uk-grid":""}},[t("div",[t("div",{attrs:{"data-uk-spinner":"ratio: 0.6"}})]),r._v(" "),t("div",[t("div",{attrs:{"data-uk-spinner":""}})]),r._v(" "),t("div",[t("div",{attrs:{"data-uk-spinner":"ratio: 3"}})]),r._v(" "),t("div",[t("div",{staticClass:"md-color-red-600",attrs:{"data-uk-spinner":"ratio: 2"}})]),r._v(" "),t("div",[t("div",{staticClass:"md-color-blue-600",attrs:{"data-uk-spinner":"ratio: 2"}})])])])],1),r._v(" "),t("ScCard",{staticClass:"uk-margin-top uk-position-relative"},[t("ScCardTitle",[r._v("\r\n\t\t\t\t\t\t\tOverlay Spinners/Progress\r\n\t\t\t\t\t\t")]),r._v(" "),t("ScCardBody",[t("div",{staticClass:"uk-height-medium uk-flex-bottom uk-flex"},[t("div",{staticClass:"uk-child-width-auto@m uk-grid-margin uk-grid-medium uk-grid",attrs:{"data-uk-grid":""}},[t("div",[t("button",{staticClass:"sc-button",on:{click:function(t){return r.toggleRootOverlay()}}},[r._v("\r\n\t\t\t\t\t\t\t\t\t\t\tToggle Root Overlay\r\n\t\t\t\t\t\t\t\t\t\t")])]),r._v(" "),t("div",[t("button",{staticClass:"sc-button",on:{click:function(t){r.cardProgress=!r.cardProgress}}},[r._v("\r\n\t\t\t\t\t\t\t\t\t\t\tToggle Card Overlay\r\n\t\t\t\t\t\t\t\t\t\t")])])])])]),r._v(" "),t("ScProgressOverlay",{attrs:{active:r.cardProgress}})],1)],1),r._v(" "),t("div",[t("ScCard",[t("ScCardTitle",[r._v("\r\n\t\t\t\t\t\t\tLinear Progress\r\n\t\t\t\t\t\t")]),r._v(" "),t("ScCardBody",[t("p",{staticClass:"sc-color-secondary uk-margin-small"},[r._v("\r\n\t\t\t\t\t\t\t\tDefault\r\n\t\t\t\t\t\t\t")]),r._v(" "),t("ScProgressLinear",[t("ScProgressBar",{attrs:{color:"sc-theme-complementary-bg",value:62}})],1),r._v(" "),t("hr"),r._v(" "),t("p",{staticClass:"sc-color-secondary uk-margin-small"},[r._v("\r\n\t\t\t\t\t\t\t\tMedium\r\n\t\t\t\t\t\t\t")]),r._v(" "),t("ScProgressLinear",{attrs:{size:"md"}},[t("ScProgressBar",{attrs:{value:21,color:"md-bg-red-400"}})],1),r._v(" "),t("hr"),r._v(" "),t("p",{staticClass:"sc-color-secondary uk-margin-small"},[r._v("\r\n\t\t\t\t\t\t\t\tLarge\r\n\t\t\t\t\t\t\t")]),r._v(" "),t("ScProgressLinear",{attrs:{size:"lg"}},[t("ScProgressBar",{attrs:{value:21,color:"md-bg-red-400"}})],1),r._v(" "),t("hr"),r._v(" "),t("p",{staticClass:"sc-color-secondary uk-margin-small"},[r._v("\r\n\t\t\t\t\t\t\t\tGroup\r\n\t\t\t\t\t\t\t")]),r._v(" "),t("div",{staticClass:"uk-margin-large-top"},[t("ScProgressLinear",{attrs:{group:""}},[t("ScProgressBar",{attrs:{value:r.progressGroup.bar1,color:"md-bg-red-400"}},[t("ScProgressLabel",[r._v("\r\n\t\t\t\t\t\t\t\t\t\t\t"+r._s(r.progressGroup.bar1)+"%\r\n\t\t\t\t\t\t\t\t\t\t")])],1),r._v(" "),t("ScProgressBar",{attrs:{value:r.progressGroup.bar2,color:"md-bg-amber-400"}},[t("ScProgressLabel",[r._v("\r\n\t\t\t\t\t\t\t\t\t\t\t"+r._s(r.progressGroup.bar2)+"%\r\n\t\t\t\t\t\t\t\t\t\t")])],1),r._v(" "),t("ScProgressBar",{attrs:{value:r.progressGroup.bar3,color:"md-bg-light-green-400"}},[t("ScProgressLabel",[r._v("\r\n\t\t\t\t\t\t\t\t\t\t\t"+r._s(r.progressGroup.bar3)+"%\r\n\t\t\t\t\t\t\t\t\t\t")])],1)],1)],1),r._v(" "),t("hr"),r._v(" "),t("div",{staticClass:"uk-margin-large-top"},[t("ScProgressLinear",{scopedSlots:r._u([{key:"label",fn:function(){return[t("ScProgressLabel",[r._v("\r\n\t\t\t\t\t\t\t\t\t\t\tProgress Label\r\n\t\t\t\t\t\t\t\t\t\t")])]},proxy:!0}])},[r._v(" "),t("ScProgressBar",{attrs:{value:28,color:"md-bg-light-blue-800"}})],1)],1),r._v(" "),t("hr"),r._v(" "),t("p",{staticClass:"sc-color-secondary uk-margin-small"},[r._v("\r\n\t\t\t\t\t\t\t\tIndeterminate\r\n\t\t\t\t\t\t\t")]),r._v(" "),t("ScProgressLinear",{attrs:{indeterminate:""}},[t("ScProgressBar",{attrs:{color:"md-bg-light-blue-800"}})],1),r._v(" "),t("hr"),r._v(" "),t("p",{staticClass:"sc-color-secondary uk-margin-small"},[r._v("\r\n\t\t\t\t\t\t\t\tDynamic progress\r\n\t\t\t\t\t\t\t")]),r._v(" "),t("ScProgressLinear",{attrs:{size:"md"}},[t("ScProgressBar",{attrs:{value:r.dynamicVal,color:r.dynamicColor}})],1)],1)],1),r._v(" "),t("ScCard",[t("ScCardTitle",[r._v("\r\n\t\t\t\t\t\t\tUIkit Progress\r\n\t\t\t\t\t\t")]),r._v(" "),t("ScCardBody",[t("progress",{staticClass:"uk-progress",attrs:{value:"10",max:"100"}}),r._v(" "),t("hr"),r._v(" "),t("progress",{ref:"uikitProgress",staticClass:"uk-progress",attrs:{value:"10",max:"100"}})])],1)],1)])])])}),[],!1,null,null,null);t.default=component.exports},819:function(r,t,e){var content=e(1049);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[r.i,content,""]]),content.locals&&(r.exports=content.locals);(0,e(24).default)("d4196904",content,!0,{sourceMap:!1})}}]);