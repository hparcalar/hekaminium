(window.webpackJsonp=window.webpackJsonp||[]).push([[161,32],{1318:function(t,o,e){"use strict";e(833)},1319:function(t,o,e){var r=e(11)(!1);r.push([t.i,'div#driver-popover-item{display:none;position:absolute;background:#fff;color:rgba(0,0,0,.87);margin:0;padding:16px;border-radius:4px;min-width:240px;max-width:300px;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);z-index:1000000000}div#driver-popover-item .driver-popover-tip{border:5px solid #fff;content:"";position:absolute}div#driver-popover-item .driver-popover-tip.bottom{bottom:-10px;border-color:#fff transparent transparent}div#driver-popover-item .driver-popover-tip.bottom.position-center{left:49%}div#driver-popover-item .driver-popover-tip.bottom.position-right{right:20px}div#driver-popover-item .driver-popover-tip.left{left:-10px;top:10px;border-color:transparent #fff transparent transparent}div#driver-popover-item .driver-popover-tip.left.position-center{top:46%}div#driver-popover-item .driver-popover-tip.left.position-bottom{top:auto;bottom:20px}div#driver-popover-item .driver-popover-tip.right{right:-10px;top:10px;border-color:transparent transparent transparent #fff}div#driver-popover-item .driver-popover-tip.right.position-center{top:46%}div#driver-popover-item .driver-popover-tip.right.position-bottom{top:auto;bottom:20px}div#driver-popover-item .driver-popover-tip.top{top:-10px;border-color:transparent transparent #fff}div#driver-popover-item .driver-popover-tip.top.position-center{left:49%}div#driver-popover-item .driver-popover-tip.top.position-right{right:20px}div#driver-popover-item .driver-popover-footer{display:block;clear:both;padding-top:16px}div#driver-popover-item .driver-popover-footer button{display:inline-block;padding:6px 8px 5px;border:none;text-decoration:none;color:#fff;font-size:12px;font-size:.75rem;font-weight:500;font-family:"Roboto",sans-serif;cursor:pointer;outline:0;background-color:#00838f;border-radius:3px;zoom:1;text-transform:uppercase;transition:all .14s cubic-bezier(.55,0,.1,1);text-shadow:none;margin:0;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}div#driver-popover-item .driver-popover-footer button:hover{box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}div#driver-popover-item .driver-popover-footer button+button{margin-left:4px}div#driver-popover-item .driver-popover-footer button.driver-disabled{color:rgba(0,0,0,.26);background:rgba(0,0,0,.06);cursor:default;pointer-events:none;box-shadow:none!important}div#driver-popover-item .driver-popover-footer .driver-close-btn{float:left;background-color:transparent;box-shadow:none!important;color:rgba(0,0,0,.54);position:absolute;top:0;right:0;margin:0}div#driver-popover-item .driver-popover-footer .driver-close-btn:hover{color:rgba(0,0,0,.87)}div#driver-popover-item .driver-popover-footer .driver-close-btn:before{content:"\\F156";font-family:"Material Design Icons";font-size:20px;font-size:1.25rem}div#driver-popover-item .driver-popover-footer .driver-btn-group{float:right}div#driver-popover-item .driver-popover-title{margin:0 0 4px;font-weight:700;font-size:18px;font-size:1.125rem;font-family:"Roboto",sans-serif;display:block;position:relative;line-height:1.5;zoom:1;padding-right:16px}div#driver-popover-item .driver-popover-description{margin-bottom:0;font-size:14px;font-weight:400;font-family:"Roboto",sans-serif;color:rgba(0,0,0,.87);zoom:1}.driver-stage-no-animation{transition:none!important;background:transparent!important;outline:5000px solid rgba(0,0,0,.75)}div#driver-page-overlay{background:#000;position:fixed;top:0;left:0;bottom:0;right:0;display:block;width:100%;height:100%;zoom:1;filter:alpha(opacity=75);opacity:.75;z-index:100002!important;transition:all .4s}div#driver-highlighted-element-stage{position:absolute;top:0;left:0;height:50px;width:300px;background:#fff;z-index:100003!important;display:none;border-radius:2px;transition:all .4s}.driver-highlighted-element{z-index:100004!important}.driver-position-relative{position:relative!important}.driver-fix-stacking{z-index:auto!important;opacity:1!important;transform:none!important;filter:none!important;perspective:none!important;transform-style:flat!important;transform-box:border-box!important;will-change:unset!important}',""]),t.exports=r},1740:function(t,o,e){"use strict";e.r(o);var r=e(4),n=e(417);e(418),e(494),e(1315);var l={name:"PluginsTour",components:{ScInput:n.a},data:function(){return{tour:null,highlightDriver:null,focusDriver:null,popoverDriver:null,popoverPosDriver:null,tourInputA:"",tourInputB:"",tourInputC:"",tourInputD:""}},mounted:function(){var t=this;this.$nextTick((function(){var o=e(1317);t.tour=new o({opacity:.6,padding:0,allowClose:!1,closeBtnText:"",nextBtnText:"Next",prevBtnText:"Previous"});var n=r.e.mediumMax()?[{element:"#sc-header",popover:{title:"Main Header",description:"Here is the main header.",position:"bottom-center",offset:0}},{element:"#sc-sidebar-main-toggle",popover:{title:"Main Sidebar",description:"Here you can toggle main sidebar.",position:"bottom-left",offset:-8}},{element:"#sc-search-main-toggle-mobile",popover:{title:"Main Search",description:"Here you can toggle search form.",position:"bottom-right",offset:24}},{element:"#sc-tour-restart",popover:{title:"Restart tour",description:"Here you can restart tour.",position:"bottom-left",offset:0}}]:[{element:"#sc-header",popover:{title:"Main Header",description:"Here is the main header.",position:"bottom-center",offset:16}},{element:"#sc-sidebar-main",popover:{title:"Main Sidebar",description:"Here is the main sidebar with the main menu.",position:"right",offset:8}},{element:"#sc-js-fullscreen-toggle",popover:{title:"Fullscreen toggle",description:"Here you can toggle fullscreen mode.",position:"bottom-right",offset:8}},{element:"#sc-tour-restart",popover:{title:"Restart tour",description:"Here you can restart tour.",position:"bottom-left",offset:8}}];t.tour.defineSteps(n),setTimeout((function(){t.tour.start()}),200),t.highlightDriver=new o({opacity:.6,closeBtnText:""}),t.focusDriver=new o({opacity:.6,closeBtnText:""}),t.popoverDriver=new o({opacity:.6,closeBtnText:""}),t.popoverPosDriver=new o({opacity:.6,padding:0,closeBtnText:""})}))},methods:{startTour:function(){this.tour.start(0)},highlightEl:function(){this.highlightDriver.highlight("#sc-tour-singleEl-noPopover")},focusEl:function(t){this.focusDriver.highlight(this.$refs[t])},popoverEl:function(t){this.popoverDriver.highlight({element:t.target.closest("div"),popover:{title:"Title for the Popover",description:"Description for highlighted element",position:"top"}})},popoverElPos:function(t,o){this.popoverPosDriver.highlight({element:t.target.closest("div"),popover:{title:"Title for the Popover",description:"Description for popover.",position:o}})}}},c=(e(1318),e(3)),component=Object(c.a)(l,(function(){var t=this,o=t._self._c;return o("div",{attrs:{id:"sc-page-wrapper"}},[o("div",{attrs:{id:"sc-page-content"}},[o("ScCard",[o("ScCardBody",[o("button",{staticClass:"sc-button sc-button-primary",attrs:{id:"sc-tour-restart"},on:{click:t.startTour}},[t._v("\r\n\t\t\t\t\t\tRestart tour\r\n\t\t\t\t\t")])])],1),t._v(" "),o("ScCard",{staticClass:"uk-margin-top"},[o("ScCardBody",[o("h5",{staticClass:"uk-margin-medium"},[t._v("\r\n\t\t\t\t\t\tHighlighting a Single Element – Without Popover\r\n\t\t\t\t\t")]),t._v(" "),o("div",{staticClass:"uk-child-width-1-2@s uk-grid",attrs:{"data-uk-grid":""}},[o("div",[o("div",{attrs:{id:"sc-tour-singleEl-noPopover"}},[o("button",{staticClass:"sc-button sc-button-primary",on:{click:t.highlightEl}},[t._v("\r\n\t\t\t\t\t\t\t\t\tShow\r\n\t\t\t\t\t\t\t\t")]),t._v(" "),o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[o("code",[t._v("this.highlightDriver = new Driver({\r\n\topacity: 0.6,\r\n\tcloseBtnText: ''\r\n});\r\n\r\n@click=\"highlightEl\"\r\n\r\nhighlightEl () {\r\n\tthis.highlightDriver.highlight('#sc-tour-singleEl-noPopover');\r\n}")])])])]),t._v(" "),o("div",[o("div",{ref:"input-a",staticClass:"uk-margin-small sc-tour-singleEl-noPopover"},[o("ScInput",{on:{focus:function(o){return t.focusEl("input-a")}},model:{value:t.tourInputA,callback:function(o){t.tourInputA=o},expression:"tourInputA"}},[o("label",[t._v("Focus any of the input")])])],1),t._v(" "),o("div",{ref:"input-b",staticClass:"uk-margin-small sc-tour-singleEl-noPopover"},[o("ScInput",{on:{focus:function(o){return t.focusEl("input-b")}},model:{value:t.tourInputB,callback:function(o){t.tourInputB=o},expression:"tourInputB"}},[o("label",[t._v("Focus any of the input")])])],1),t._v(" "),o("div",{ref:"input-c",staticClass:"uk-margin-small sc-tour-singleEl-noPopover"},[o("ScInput",{on:{focus:function(o){return t.focusEl("input-c")}},model:{value:t.tourInputC,callback:function(o){t.tourInputC=o},expression:"tourInputC"}},[o("label",[t._v("Focus any of the input")])])],1),t._v(" "),o("div",{ref:"input-d",staticClass:"uk-margin-small sc-tour-singleEl-noPopover"},[o("ScInput",{on:{focus:function(o){return t.focusEl("input-d")}},model:{value:t.tourInputD,callback:function(o){t.tourInputD=o},expression:"tourInputD"}},[o("label",[t._v("Focus any of the input")])])],1)])])])],1),t._v(" "),o("ScCard",{staticClass:"uk-margin-top"},[o("ScCardBody",[o("div",{staticClass:"uk-child-width-1-2@m",attrs:{"data-uk-grid":""}},[o("div",[o("h5",{staticClass:"uk-margin-large"},[t._v("\r\n\t\t\t\t\t\t\t\tHighlighting a Single Element – With Popover\r\n\t\t\t\t\t\t\t")]),t._v(" "),o("div",[o("button",{staticClass:"sc-button sc-button-primary",on:{click:t.popoverEl}},[t._v("\r\n\t\t\t\t\t\t\t\t\tShow\r\n\t\t\t\t\t\t\t\t")]),t._v(" "),o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[o("code",[t._v("this.popoverDriver = new Driver({\r\n\topacity: 0.6,\r\n\tcloseBtnText: ''\r\n});\r\n\r\n @click=\"popoverEl\"\r\n\r\n popoverEl (e) {\r\n\tthis.popoverDriver.highlight({\r\n\t\telement: e.target.closest(\"div\"),\r\n\t\tpopover: {\r\n\t\t\ttitle: 'Title for the Popover',\r\n\t\t\tdescription: 'Description for highlighted element',\r\n\t\t\tposition: 'top'\r\n\t\t}\r\n\t})\r\n}")])])])]),t._v(" "),o("div",[o("h5",{staticClass:"uk-margin-large"},[t._v("\r\n\t\t\t\t\t\t\t\tPopover Positioning\r\n\t\t\t\t\t\t\t")]),t._v(" "),o("div",[o("div",{staticClass:"sc-padding-small uk-display-inline-block"},[o("button",{staticClass:"sc-button",on:{click:function(o){return t.popoverElPos(o,"left")}}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tLeft\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),o("div",{staticClass:"sc-padding-small uk-display-inline-block"},[o("button",{staticClass:"sc-button",on:{click:function(o){return t.popoverElPos(o,"left-center")}}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tLeft Center\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),o("div",{staticClass:"sc-padding-small uk-display-inline-block"},[o("button",{staticClass:"sc-button",on:{click:function(o){return t.popoverElPos(o,"left-bottom")}}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tLeft Bottom\r\n\t\t\t\t\t\t\t\t\t")])])]),t._v(" "),o("div",{staticClass:"uk-margin-small-top"},[o("div",{staticClass:"sc-padding-small uk-display-inline-block"},[o("button",{staticClass:"sc-button",on:{click:function(o){return t.popoverElPos(o,"top")}}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tTop\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),o("div",{staticClass:"sc-padding-small uk-display-inline-block"},[o("button",{staticClass:"sc-button",on:{click:function(o){return t.popoverElPos(o,"top-center")}}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tTop Center\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),o("div",{staticClass:"sc-padding-small uk-display-inline-block"},[o("button",{staticClass:"sc-button",on:{click:function(o){return t.popoverElPos(o,"top-right")}}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tTop Right\r\n\t\t\t\t\t\t\t\t\t")])])]),t._v(" "),o("div",{staticClass:"uk-margin-small-top"},[o("div",{staticClass:"sc-padding-small uk-display-inline-block"},[o("button",{staticClass:"sc-button",on:{click:function(o){return t.popoverElPos(o,"right")}}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tRight\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),o("div",{staticClass:"sc-padding-small uk-display-inline-block"},[o("button",{staticClass:"sc-button",on:{click:function(o){return t.popoverElPos(o,"right-center")}}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tRight Center\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),o("div",{staticClass:"sc-padding-small uk-display-inline-block"},[o("button",{staticClass:"sc-button",on:{click:function(o){return t.popoverElPos(o,"right-bottom")}}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tRight Bottom\r\n\t\t\t\t\t\t\t\t\t")])])]),t._v(" "),o("div",{staticClass:"uk-margin-small-top"},[o("div",{staticClass:"sc-padding-small uk-display-inline-block"},[o("button",{staticClass:"sc-button",on:{click:function(o){return t.popoverElPos(o,"bottom")}}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tBottom\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),o("div",{staticClass:"sc-padding-small uk-display-inline-block"},[o("button",{staticClass:"sc-button",on:{click:function(o){return t.popoverElPos(o,"bottom-center")}}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tBottom Center\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),o("div",{staticClass:"sc-padding-small uk-display-inline-block"},[o("button",{staticClass:"sc-button",on:{click:function(o){return t.popoverElPos(o,"bottom-right")}}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tBottom Right\r\n\t\t\t\t\t\t\t\t\t")])])])])])])],1)],1)])}),[],!1,null,null,null);o.default=component.exports},417:function(t,o,e){"use strict";e(56),e(74);var r={name:"ScInput",props:{id:{type:String,default:null},name:{type:String,default:null},type:{type:String,default:"text"},value:{type:[String,Object,Number],default:""},disabled:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},mode:{type:String,default:""},state:{type:String,default:""},extraClasses:{type:String,default:""},successState:{type:Boolean,default:!1},errorState:{type:Boolean,default:!1},placeholder:{type:String,default:null},ukTooltip:{type:Object,default:null},focus:{type:Function,default:null},blur:{type:Function,default:null},change:{type:Function,default:null},keyUp:{type:Function,default:null},validator:{type:Object,default:null}},data:function(){return{inputFocused:!1}},computed:{modeClass:function(){return"outline"===this.$props.mode?"sc-input-outline":""},inputErrorClass:function(){return this.$props.errorState?"uk-form-danger":""},inputSuccessClass:function(){return this.$props.successState?"uk-form-success":""}},mounted:function(){var t=this;t.ukTooltip&&UIkit.tooltip(t.$refs.input,t.ukTooltip)},methods:{inputBlur:function(){this.inputFocused=!1,this.blur&&this.blur(),this.validator&&this.validator.$touch(),this.$emit("blur")},inputFocus:function(){this.inputFocused=!0,this.focus&&this.focus(),this.$emit("focus")},inputChange:function(){this.change&&this.change(),this.$emit("change")},inputKeyUp:function(t){this.keyUp&&this.keyUp(),this.$emit("keyUp",t)}},watch:{}},n=e(3),component=Object(n.a)(r,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"sc-input-wrapper",class:{"sc-input-wrapper-outline":"outline"===t.mode,"sc-input-wrapper-disabled":t.disabled,"sc-input-wrapper-danger":t.errorState,"sc-input-wrapper-success":t.successState,"sc-input-filled":""!==t.value||"fixed"===t.state,"sc-input-focus":t.inputFocused}},[t._t("icon"),t._v(" "),t._t("default"),t._v(" "),o("input",{ref:"input",class:["uk-input","sc-vue-input",t.modeClass,t.inputErrorClass,t.inputSuccessClass,t.extraClasses],attrs:{id:t.id,name:t.name,placeholder:t.placeholder,type:t.type,disabled:t.disabled,readonly:t.readOnly},domProps:{value:t.value},on:{focus:t.inputFocus,blur:t.inputBlur,change:t.inputChange,input:function(o){return t.$emit("input",o.target.value)},keyup:t.inputKeyUp}}),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:"outline"!==t.mode,expression:"mode !== 'outline'"}],staticClass:"sc-input-bar"}),t._v(" "),t._t("help-inline")],2)}),[],!1,null,null,null);o.a=component.exports},418:function(t,o,e){var r=e(423);window.jQuery=window.$=r},494:function(t,o,e){"use strict";e.r(o);var r=e(2),n=e(608);e(609),n.registerLanguage("xml",e(610)),n.registerLanguage("sql",e(611)),n.registerLanguage("javascript",e(612)),r.default.directive("highlightjs",{deep:!0,bind:function(t,o){var e,i,r=t.querySelectorAll("code");for(i=0;i<r.length;i+=1)e=r[i],"string"==typeof o.value&&(e.textContent=o.value),n.highlightBlock(t)},componentUpdated:function(t,o){var e,i,r=t.querySelectorAll("code");for(i=0;i<r.length;i+=1)e=r[i],"string"==typeof o.value&&(e.textContent=o.value,n.highlightBlock(t))}})},833:function(t,o,e){var content=e(1319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(12).default)("8b276db0",content,!0,{sourceMap:!1})}}]);