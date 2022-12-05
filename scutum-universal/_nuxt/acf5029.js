/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1768:function(t,e,n){"use strict";n.r(e);n(56);var o=n(417),r=n(419),l={name:"FormsExamplesContact",components:{ScInput:o.a,ScTextarea:r.a},data:function(){return{userData:{form1:{name:"",email:"",subject:"",message:""},form2:{name:"",email:"",subject:"",message:""}}}}},c=n(3),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"sc-page-wrapper"}},[e("div",{attrs:{id:"sc-page-content"}},[e("div",{staticClass:"uk-child-width-1-2@m",attrs:{"data-uk-grid":""}},[e("div",[e("ScCard",[e("ScCardHeader",{attrs:{separator:""}},[e("div",{staticClass:"uk-flex uk-flex-middle"},[e("i",{staticClass:"mdi mdi-message-outline uk-margin-medium-right sc-icon-24"}),t._v(" "),e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\t\t\tContact Us\r\n\t\t\t\t\t\t\t\t")])],1),t._v(" "),e("ScCardMeta",{staticClass:"uk-text-medium"},[t._v("\r\n\t\t\t\t\t\t\t\tWe will respond as soon as possible, generally within a few hours.\r\n\t\t\t\t\t\t\t")])],1),t._v(" "),e("ScCardBody",[e("form",{staticClass:"uk-form-stacked"},[e("div",{staticClass:"uk-child-width-1-2@m uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("ScInput",{model:{value:t.userData.form1.name,callback:function(e){t.$set(t.userData.form1,"name",e)},expression:"userData.form1.name"}},[e("label",[t._v("Name")])])],1),t._v(" "),e("div",[e("ScInput",{attrs:{"error-state":!0},model:{value:t.userData.form1.email,callback:function(e){t.$set(t.userData.form1,"email",e)},expression:"userData.form1.email"}},[e("label",[t._v("Email")])]),t._v(" "),e("span",{staticClass:"sc-form-error-block"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t")])],1)]),t._v(" "),e("div",{staticClass:"uk-margin"},[e("ScInput",{model:{value:t.userData.form1.subject,callback:function(e){t.$set(t.userData.form1,"subject",e)},expression:"userData.form1.subject"}},[e("label",[t._v("Subject")])])],1),t._v(" "),e("div",{staticClass:"uk-margin"},[e("ScTextarea",{attrs:{cols:30,rows:6},model:{value:t.userData.form1.message,callback:function(e){t.$set(t.userData.form1,"message",e)},expression:"userData.form1.message"}},[e("label",[t._v("Message")])])],1),t._v(" "),e("div",{staticClass:"uk-margin-medium-top"},[e("button",{staticClass:"sc-button sc-button-primary"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSend message\r\n\t\t\t\t\t\t\t\t\t")])])])])],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardHeader",{staticClass:"sc-padding"},[e("div",{staticClass:"sc-padding-medium sc-round uk-flex uk-flex-middle sc-border md-bg-grey-100"},[e("i",{staticClass:"mdi mdi-message-outline uk-margin-medium-right sc-icon-24"}),t._v(" "),e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\t\t\tContact Us\r\n\t\t\t\t\t\t\t\t")])],1)]),t._v(" "),e("ScCardBody",[e("form",{staticClass:"uk-form-horizontal"},[e("div",{staticClass:"sc-padding-small"},[e("label",{staticClass:"uk-form-label",attrs:{for:"f-h-name"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tName"),e("sup",[t._v("*")])]),t._v(" "),e("div",{staticClass:"uk-form-controls"},[e("ScInput",{attrs:{id:"f-h-name",mode:"outline"},model:{value:t.userData.form2.name,callback:function(e){t.$set(t.userData.form2,"name",e)},expression:"userData.form2.name"}})],1)]),t._v(" "),e("div",{staticClass:"uk-margin-medium-top sc-padding-small"},[e("label",{staticClass:"uk-form-label",attrs:{for:"f-h-email"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tEmail"),e("sup",[t._v("*")])]),t._v(" "),e("div",{staticClass:"uk-form-controls"},[e("ScInput",{attrs:{id:"f-h-email",mode:"outline"},model:{value:t.userData.form2.email,callback:function(e){t.$set(t.userData.form2,"email",e)},expression:"userData.form2.email"}})],1)]),t._v(" "),e("div",{staticClass:"uk-margin-medium-top sc-padding-small"},[e("label",{staticClass:"uk-form-label",attrs:{for:"f-h-subject"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tSubject\r\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"uk-form-controls"},[e("ScInput",{attrs:{id:"f-h-subject",mode:"outline"},model:{value:t.userData.form2.subject,callback:function(e){t.$set(t.userData.form2,"subject",e)},expression:"userData.form2.subject"}})],1)]),t._v(" "),e("div",{staticClass:"uk-margin-medium-top sc-padding-small"},[e("label",{staticClass:"uk-form-label",attrs:{for:"f-h-message"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tMessage\r\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"uk-form-controls"},[e("ScTextarea",{attrs:{id:"f-h-message",cols:30,rows:6,mode:"outline"},model:{value:t.userData.form2.message,callback:function(e){t.$set(t.userData.form2,"message",e)},expression:"userData.form2.message"}})],1)]),t._v(" "),e("div",{staticClass:"uk-margin-medium-top sc-padding-small"},[e("div",{staticClass:"uk-form-controls"},[e("button",{staticClass:"sc-button sc-button-primary"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\tSend message\r\n\t\t\t\t\t\t\t\t\t\t")])])])])])],1)],1)])])])}),[],!1,null,null,null);e.default=component.exports},417:function(t,e,n){"use strict";n(56),n(74);var o={name:"ScInput",props:{id:{type:String,default:null},name:{type:String,default:null},type:{type:String,default:"text"},value:{type:[String,Object,Number],default:""},disabled:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},mode:{type:String,default:""},state:{type:String,default:""},extraClasses:{type:String,default:""},successState:{type:Boolean,default:!1},errorState:{type:Boolean,default:!1},placeholder:{type:String,default:null},ukTooltip:{type:Object,default:null},focus:{type:Function,default:null},blur:{type:Function,default:null},change:{type:Function,default:null},keyUp:{type:Function,default:null},validator:{type:Object,default:null}},data:function(){return{inputFocused:!1}},computed:{modeClass:function(){return"outline"===this.$props.mode?"sc-input-outline":""},inputErrorClass:function(){return this.$props.errorState?"uk-form-danger":""},inputSuccessClass:function(){return this.$props.successState?"uk-form-success":""}},mounted:function(){var t=this;t.ukTooltip&&UIkit.tooltip(t.$refs.input,t.ukTooltip)},methods:{inputBlur:function(){this.inputFocused=!1,this.blur&&this.blur(),this.validator&&this.validator.$touch(),this.$emit("blur")},inputFocus:function(){this.inputFocused=!0,this.focus&&this.focus(),this.$emit("focus")},inputChange:function(){this.change&&this.change(),this.$emit("change")},inputKeyUp:function(t){this.keyUp&&this.keyUp(),this.$emit("keyUp",t)}},watch:{}},r=n(3),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sc-input-wrapper",class:{"sc-input-wrapper-outline":"outline"===t.mode,"sc-input-wrapper-disabled":t.disabled,"sc-input-wrapper-danger":t.errorState,"sc-input-wrapper-success":t.successState,"sc-input-filled":""!==t.value||"fixed"===t.state,"sc-input-focus":t.inputFocused}},[t._t("icon"),t._v(" "),t._t("default"),t._v(" "),e("input",{ref:"input",class:["uk-input","sc-vue-input",t.modeClass,t.inputErrorClass,t.inputSuccessClass,t.extraClasses],attrs:{id:t.id,name:t.name,placeholder:t.placeholder,type:t.type,disabled:t.disabled,readonly:t.readOnly},domProps:{value:t.value},on:{focus:t.inputFocus,blur:t.inputBlur,change:t.inputChange,input:function(e){return t.$emit("input",e.target.value)},keyup:t.inputKeyUp}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:"outline"!==t.mode,expression:"mode !== 'outline'"}],staticClass:"sc-input-bar"}),t._v(" "),t._t("help-inline")],2)}),[],!1,null,null,null);e.a=component.exports},419:function(t,e,n){"use strict";n(56),n(74);var o=n(420),r={name:"ScTextarea",directives:{autosize:{bind:function(t,e,n){n.context.$props.autosize&&n.context.$nextTick((function(){o(t)}))},componentUpdated:function(t,e,n){n.context.$props.autosize&&o.update(t)},unbind:function(t){o.destroy(t)}}},props:{id:{type:String,default:null},name:{type:String,default:""},value:{type:String,default:""},disabled:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},mode:{type:String,default:""},state:{type:String,default:""},extraClasses:{type:String,default:""},successState:{type:Boolean,default:!1},errorState:{type:Boolean,default:!1},placeholder:{type:String,default:null},rows:{type:Number,default:5},cols:{type:Number,default:10},autosize:{type:Boolean,default:!1},ukTooltip:{type:Object,default:null},focus:{type:Function,default:null},blur:{type:Function,default:null},change:{type:Function,default:null},keyUp:{type:Function,default:null},validator:{type:Object,default:null}},data:function(){return{txtFocused:!1}},computed:{modeClass:function(){return"outline"===this.$props.mode?"sc-textarea-outline":""},dangerClass:function(){return this.$props.errorState?"uk-form-danger":""},successClass:function(){return this.$props.successState?"uk-form-success":""}},mounted:function(){this.ukTooltip&&UIkit.tooltip(this.$refs.teaxtarea,this.ukTooltip)},methods:{txtBlur:function(){this.txtFocused=!1,this.blur&&this.blur(),this.validator&&this.validator.$touch(),this.$emit("blur")},txtFocus:function(){this.txtFocused=!0,this.focus&&this.focus(),this.$emit("focus")},txtChange:function(){this.change&&this.change(),this.$emit("change")},txtKeyUp:function(){this.keyUp&&this.keyUp(),this.$emit("keyUp")}}},l=n(3),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sc-input-wrapper",class:{"sc-input-wrapper-outline":"outline"===t.mode,"sc-input-wrapper-disabled":t.disabled,"sc-input-wrapper-danger":t.errorState,"sc-input-wrapper-success":t.successState,"sc-input-filled":""!==t.value||"fixed"===t.state,"sc-input-focus":t.txtFocused}},[t._t("default"),t._v(" "),e("textarea",{directives:[{name:"autosize",rawName:"v-autosize"}],ref:"textarea",class:["uk-textarea","sc-vue-input",t.modeClass,t.dangerClass,t.successClass,t.extraClasses],attrs:{id:t.id,name:t.name,placeholder:t.placeholder,rows:t.rows,disabled:t.disabled,readonly:t.readOnly},domProps:{value:t.value},on:{focus:t.txtFocus,blur:t.txtBlur,change:t.txtChange,input:function(e){return t.$emit("input",e.target.value)},keyup:t.txtKeyUp}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:"outline"!==t.mode,expression:"mode !== 'outline'"}],staticClass:"sc-input-bar"})],2)}),[],!1,null,null,null);e.a=component.exports},420:function(t,e,n){var o,r,l;r=[t,e],o=function(t,e){"use strict";var n,o,map="function"==typeof Map?new Map:(n=[],o=[],{has:function(t){return n.indexOf(t)>-1},get:function(t){return o[n.indexOf(t)]},set:function(t,e){-1===n.indexOf(t)&&(n.push(t),o.push(e))},delete:function(t){var e=n.indexOf(t);e>-1&&(n.splice(e,1),o.splice(e,1))}}),r=function(t){return new Event(t,{bubbles:!0})};try{new Event("test")}catch(t){r=function(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!1),e}}function l(t){if(t&&t.nodeName&&"TEXTAREA"===t.nodeName&&!map.has(t)){var e=null,n=null,o=null,l=function(){t.clientWidth!==n&&h()},c=function(style){window.removeEventListener("resize",l,!1),t.removeEventListener("input",h,!1),t.removeEventListener("keyup",h,!1),t.removeEventListener("autosize:destroy",c,!1),t.removeEventListener("autosize:update",h,!1),Object.keys(style).forEach((function(e){t.style[e]=style[e]})),map.delete(t)}.bind(t,{height:t.style.height,resize:t.style.resize,overflowY:t.style.overflowY,overflowX:t.style.overflowX,wordWrap:t.style.wordWrap});t.addEventListener("autosize:destroy",c,!1),"onpropertychange"in t&&"oninput"in t&&t.addEventListener("keyup",h,!1),window.addEventListener("resize",l,!1),t.addEventListener("input",h,!1),t.addEventListener("autosize:update",h,!1),t.style.overflowX="hidden",t.style.wordWrap="break-word",map.set(t,{destroy:c,update:h}),d()}function d(){var style=window.getComputedStyle(t,null);"vertical"===style.resize?t.style.resize="none":"both"===style.resize&&(t.style.resize="horizontal"),e="content-box"===style.boxSizing?-(parseFloat(style.paddingTop)+parseFloat(style.paddingBottom)):parseFloat(style.borderTopWidth)+parseFloat(style.borderBottomWidth),isNaN(e)&&(e=0),h()}function f(e){var n=t.style.width;t.style.width="0px",t.offsetWidth,t.style.width=n,t.style.overflowY=e}function m(t){for(var e=[];t&&t.parentNode&&t.parentNode instanceof Element;)t.parentNode.scrollTop&&e.push({node:t.parentNode,scrollTop:t.parentNode.scrollTop}),t=t.parentNode;return e}function v(){if(0!==t.scrollHeight){var o=m(t),r=document.documentElement&&document.documentElement.scrollTop;t.style.height="",t.style.height=t.scrollHeight+e+"px",n=t.clientWidth,o.forEach((function(t){t.node.scrollTop=t.scrollTop})),r&&(document.documentElement.scrollTop=r)}}function h(){v();var e=Math.round(parseFloat(t.style.height)),n=window.getComputedStyle(t,null),l="content-box"===n.boxSizing?Math.round(parseFloat(n.height)):t.offsetHeight;if(l<e?"hidden"===n.overflowY&&(f("scroll"),v(),l="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(t,null).height)):t.offsetHeight):"hidden"!==n.overflowY&&(f("hidden"),v(),l="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(t,null).height)):t.offsetHeight),o!==l){o=l;var c=r("autosize:resized");try{t.dispatchEvent(c)}catch(t){}}}}function c(t){var e=map.get(t);e&&e.destroy()}function d(t){var e=map.get(t);e&&e.update()}var f=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((f=function(t){return t}).destroy=function(t){return t},f.update=function(t){return t}):((f=function(t,e){return t&&Array.prototype.forEach.call(t.length?t:[t],(function(t){return l(t,e)})),t}).destroy=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],c),t},f.update=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],d),t}),e.default=f,t.exports=e.default},void 0===(l="function"==typeof o?o.apply(e,r):o)||(t.exports=l)}}]);