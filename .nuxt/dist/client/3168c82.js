(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1131:function(t,r,e){"use strict";e(867)},1132:function(t,r,e){var o=e(9)(!1);o.push([t.i,".sc-progress{position:relative;max-width:100%;box-shadow:none;background:rgba(0,0,0,.1);border-radius:6px;display:flex}.sc-progress-label{position:absolute;bottom:100%;font-size:12px;font-size:.75rem;width:100%;color:rgba(0,0,0,.54);font-weight:500;margin-bottom:4px;text-align:center}.sc-progress-label-enabled{margin-top:28px}.sc-progress-bar{position:relative;height:4px;min-width:12px;background:#bdbdbd;transition:width .36s cubic-bezier(.55,0,.1,1),background-color .14s cubic-bezier(.55,0,.1,1);color:#fff;box-sizing:border-box;text-align:center;overflow:hidden}.sc-progress-medium .sc-progress-bar{height:8px;font-size:10px;font-size:.625rem;line-height:8px}.sc-progress-large .sc-progress-bar{height:16px;font-size:11px;font-size:.6875rem;line-height:17px}.sc-progress-large,.sc-progress-large .sc-progress-bar,.sc-progress-medium,.sc-progress-medium .sc-progress-bar{border-radius:3px}.sc-progress-large.sc-progress-group .sc-progress-bar,.sc-progress-medium.sc-progress-group .sc-progress-bar{border-radius:3px 0 0 3px}.sc-progress-large.sc-progress-group .sc-progress-bar+.sc-progress-bar,.sc-progress-medium.sc-progress-group .sc-progress-bar+.sc-progress-bar{border-radius:0}.sc-progress-large.sc-progress-group .sc-progress-bar:last-child,.sc-progress-medium.sc-progress-group .sc-progress-bar:last-child{border-radius:0 3px 3px 0}.sc-progress-indeterminate{overflow:hidden}.sc-progress-indeterminate .sc-progress-bar{width:100%;-webkit-animation:indeterminate 2.8s linear infinite;animation:indeterminate 2.8s linear infinite}.sc-progress-circular{border:4px solid rgba(0,0,0,.12);border-top-color:#00acc1;border-radius:50%;width:24px;height:24px;-webkit-animation:circular-animation .8s linear infinite;animation:circular-animation .8s linear infinite;display:inline-block}.sc-progress-circular-small{width:12px;height:12px;border-width:2px}.sc-progress-circular-large{width:48px;height:48px;border-width:8px}.sc-progress-circular-secondary{border-top-color:#d50000}.sc-progress-circular-light{border-color:hsla(0,0%,100%,.9) rgba(0,0,0,.2) rgba(0,0,0,.2)}@-webkit-keyframes circular-animation{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes circular-animation{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@-webkit-keyframes indeterminate{0%{transform:translateX(-100%) scaleX(.2)}20%{transform:translateX(-40%) scaleX(.2)}30%{transform:translateX(0) scaleX(.5)}55%{transform:translateX(100%) scaleX(.7)}55.99%{transform:scaleX(0)}56%{transform:translateX(-100%) scaleX(0)}56.99%{transform:translateX(-100%) scaleX(.6)}75%{transform:translateX(-5%) scaleX(.6)}85%{transform:translateX(30%) scaleX(.3)}98%{transform:translateX(100%) scaleX(.2)}99.99%{transform:scaleX(0)}to{transform:translateX(-100%)}}@keyframes indeterminate{0%{transform:translateX(-100%) scaleX(.2)}20%{transform:translateX(-40%) scaleX(.2)}30%{transform:translateX(0) scaleX(.5)}55%{transform:translateX(100%) scaleX(.7)}55.99%{transform:scaleX(0)}56%{transform:translateX(-100%) scaleX(0)}56.99%{transform:translateX(-100%) scaleX(.6)}75%{transform:translateX(-5%) scaleX(.6)}85%{transform:translateX(30%) scaleX(.3)}98%{transform:translateX(100%) scaleX(.2)}99.99%{transform:scaleX(0)}to{transform:translateX(-100%)}}",""]),t.exports=o},1842:function(t,r,e){"use strict";e.r(r);var progress=e(92),o={name:"ComponentsProgressSpinners",components:{ScProgressLinear:progress.d,ScProgressBar:progress.a,ScProgressLabel:progress.c,ScProgressCircular:progress.b,ScProgressOverlay:progress.e},data:function(){return{rootProgress:!1,cardProgress:!1,progressGroup:{bar1:14,bar2:25,bar3:31},dynamicVal:12,dynamicColor:"md-bg-red-400"}},mounted:function(){var t=this,animate=setInterval((function(){var r=Math.floor(10*Math.random())+5;t.dynamicVal+r>=33&&(t.dynamicColor="md-bg-amber-400",t.dynamicVal=t.dynamicVal+r),t.dynamicVal+r>=66&&(t.dynamicColor="md-bg-green-400",t.dynamicVal=t.dynamicVal+r),t.dynamicVal+r>=100?(t.dynamicVal=100,clearInterval(animate)):t.dynamicVal=t.dynamicVal+r}),1200),r=this.$refs.uikitProgress,e=setInterval((function(){r.value+=10,r.value>=r.max&&clearInterval(e)}),1e3)},methods:{toggleRootOverlay:function(){this.$store.commit("toggleProgressOverlay",!this.rootProgress),this.rootProgress=!this.rootProgress}}},n=(e(1131),e(2)),component=Object(n.a)(o,(function(){var t=this,r=t._self._c;return r("div",{attrs:{id:"sc-page-wrapper"}},[r("div",{attrs:{id:"sc-page-content"}},[r("div",{staticClass:"uk-child-width-1-2@l uk-grid",attrs:{"data-uk-grid":""}},[r("div",[r("ScCard",[r("ScCardTitle",[t._v("\n\t\t\t\t\t\t\tCircular Progress\n\t\t\t\t\t\t")]),t._v(" "),r("ScCardBody",[r("div",{staticClass:"uk-child-width-auto uk-grid-margin uk-flex-middle uk-grid",attrs:{"data-uk-grid":""}},[r("div",[r("ScProgressCircular",{attrs:{size:"sm"}})],1),t._v(" "),r("div",[r("ScProgressCircular")],1),t._v(" "),r("div",[r("ScProgressCircular",{attrs:{size:"lg"}})],1),t._v(" "),r("div",[r("ScProgressCircular",{attrs:{size:"sm",color:"secondary"}})],1),t._v(" "),r("div",[r("ScProgressCircular",{attrs:{color:"secondary"}})],1),t._v(" "),r("div",[r("ScProgressCircular",{attrs:{size:"lg",color:"secondary"}})],1)])])],1),t._v(" "),r("ScCard",{staticClass:"uk-margin-top"},[r("ScCardTitle",[t._v("\n\t\t\t\t\t\t\tUIkit Spinners\n\t\t\t\t\t\t")]),t._v(" "),r("ScCardBody",[r("div",{staticClass:"uk-child-width-auto uk-grid-margin uk-flex-middle uk-grid",attrs:{"data-uk-grid":""}},[r("div",[r("div",{attrs:{"data-uk-spinner":"ratio: 0.6"}})]),t._v(" "),r("div",[r("div",{attrs:{"data-uk-spinner":""}})]),t._v(" "),r("div",[r("div",{attrs:{"data-uk-spinner":"ratio: 3"}})]),t._v(" "),r("div",[r("div",{staticClass:"md-color-red-600",attrs:{"data-uk-spinner":"ratio: 2"}})]),t._v(" "),r("div",[r("div",{staticClass:"md-color-blue-600",attrs:{"data-uk-spinner":"ratio: 2"}})])])])],1),t._v(" "),r("ScCard",{staticClass:"uk-margin-top uk-position-relative"},[r("ScCardTitle",[t._v("\n\t\t\t\t\t\t\tOverlay Spinners/Progress\n\t\t\t\t\t\t")]),t._v(" "),r("ScCardBody",[r("div",{staticClass:"uk-height-medium uk-flex-bottom uk-flex"},[r("div",{staticClass:"uk-child-width-auto@m uk-grid-margin uk-grid-medium uk-grid",attrs:{"data-uk-grid":""}},[r("div",[r("button",{staticClass:"sc-button",on:{click:function(r){return t.toggleRootOverlay()}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tToggle Root Overlay\n\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),r("div",[r("button",{staticClass:"sc-button",on:{click:function(r){t.cardProgress=!t.cardProgress}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tToggle Card Overlay\n\t\t\t\t\t\t\t\t\t\t")])])])])]),t._v(" "),r("ScProgressOverlay",{attrs:{active:t.cardProgress}})],1)],1),t._v(" "),r("div",[r("ScCard",[r("ScCardTitle",[t._v("\n\t\t\t\t\t\t\tLinear Progress\n\t\t\t\t\t\t")]),t._v(" "),r("ScCardBody",[r("p",{staticClass:"sc-color-secondary uk-margin-small"},[t._v("\n\t\t\t\t\t\t\t\tDefault\n\t\t\t\t\t\t\t")]),t._v(" "),r("ScProgressLinear",[r("ScProgressBar",{attrs:{color:"sc-theme-complementary-bg",value:62}})],1),t._v(" "),r("hr"),t._v(" "),r("p",{staticClass:"sc-color-secondary uk-margin-small"},[t._v("\n\t\t\t\t\t\t\t\tMedium\n\t\t\t\t\t\t\t")]),t._v(" "),r("ScProgressLinear",{attrs:{size:"md"}},[r("ScProgressBar",{attrs:{value:21,color:"md-bg-red-400"}})],1),t._v(" "),r("hr"),t._v(" "),r("p",{staticClass:"sc-color-secondary uk-margin-small"},[t._v("\n\t\t\t\t\t\t\t\tLarge\n\t\t\t\t\t\t\t")]),t._v(" "),r("ScProgressLinear",{attrs:{size:"lg"}},[r("ScProgressBar",{attrs:{value:21,color:"md-bg-red-400"}})],1),t._v(" "),r("hr"),t._v(" "),r("p",{staticClass:"sc-color-secondary uk-margin-small"},[t._v("\n\t\t\t\t\t\t\t\tGroup\n\t\t\t\t\t\t\t")]),t._v(" "),r("div",{staticClass:"uk-margin-large-top"},[r("ScProgressLinear",{attrs:{group:""}},[r("ScProgressBar",{attrs:{value:t.progressGroup.bar1,color:"md-bg-red-400"}},[r("ScProgressLabel",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.progressGroup.bar1)+"%\n\t\t\t\t\t\t\t\t\t\t")])],1),t._v(" "),r("ScProgressBar",{attrs:{value:t.progressGroup.bar2,color:"md-bg-amber-400"}},[r("ScProgressLabel",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.progressGroup.bar2)+"%\n\t\t\t\t\t\t\t\t\t\t")])],1),t._v(" "),r("ScProgressBar",{attrs:{value:t.progressGroup.bar3,color:"md-bg-light-green-400"}},[r("ScProgressLabel",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.progressGroup.bar3)+"%\n\t\t\t\t\t\t\t\t\t\t")])],1)],1)],1),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"uk-margin-large-top"},[r("ScProgressLinear",{scopedSlots:t._u([{key:"label",fn:function(){return[r("ScProgressLabel",[t._v("\n\t\t\t\t\t\t\t\t\t\t\tProgress Label\n\t\t\t\t\t\t\t\t\t\t")])]},proxy:!0}])},[t._v(" "),r("ScProgressBar",{attrs:{value:28,color:"md-bg-light-blue-800"}})],1)],1),t._v(" "),r("hr"),t._v(" "),r("p",{staticClass:"sc-color-secondary uk-margin-small"},[t._v("\n\t\t\t\t\t\t\t\tIndeterminate\n\t\t\t\t\t\t\t")]),t._v(" "),r("ScProgressLinear",{attrs:{indeterminate:""}},[r("ScProgressBar",{attrs:{color:"md-bg-light-blue-800"}})],1),t._v(" "),r("hr"),t._v(" "),r("p",{staticClass:"sc-color-secondary uk-margin-small"},[t._v("\n\t\t\t\t\t\t\t\tDynamic progress\n\t\t\t\t\t\t\t")]),t._v(" "),r("ScProgressLinear",{attrs:{size:"md"}},[r("ScProgressBar",{attrs:{value:t.dynamicVal,color:t.dynamicColor}})],1)],1)],1),t._v(" "),r("ScCard",[r("ScCardTitle",[t._v("\n\t\t\t\t\t\t\tUIkit Progress\n\t\t\t\t\t\t")]),t._v(" "),r("ScCardBody",[r("progress",{staticClass:"uk-progress",attrs:{value:"10",max:"100"}}),t._v(" "),r("hr"),t._v(" "),r("progress",{ref:"uikitProgress",staticClass:"uk-progress",attrs:{value:"10",max:"100"}})])],1)],1)])])])}),[],!1,null,null,null);r.default=component.exports},867:function(t,r,e){var content=e(1132);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(10).default)("d4196904",content,!0,{sourceMap:!1})}}]);