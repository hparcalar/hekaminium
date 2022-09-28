/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{1449:function(t,e,n){"use strict";n.r(e);var o=n(289),l=n(291),r={name:"PagesMailboxCompose",components:{Select2:function(){return Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,1338))},ScInput:o.a,ScTextarea:l.a},data:function(){return{message:{to:[],subject:"",content:""},emails:[{id:"1",text:"ldare@gmail.com"},{id:"2",text:"jonathon.mueller@yundt.com"},{id:"3",text:"icummings@gmail.com"}]}},methods:{backToMailbox:function(t){t.preventDefault(),this.$router.push({name:"pages-mailbox"})}}},c=n(2),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"uk-height-1-1"},[e("transition",{attrs:{name:"scale-up",appear:""}},[e("div",{staticClass:"sc-message-compose sc-message-compose-single"},[e("div",{staticClass:"uk-flex uk-height-1-1 sc-message-compose-wrapper"},[e("div",{staticClass:"uk-width-expand uk-flex uk-flex-column"},[e("div",{staticClass:"sc-message-head"},[e("client-only",[e("Select2",{attrs:{options:t.emails,settings:{width:"100%",placeholder:"Insert valid email address...",tags:!0,tokenSeparators:[","," "],createTag:"emailAddress"},multiple:""},model:{value:t.message.to,callback:function(e){t.$set(t.message,"to",e)},expression:"message.to"}})],1),t._v(" "),e("div",{staticClass:"uk-margin-top"},[e("ScInput",{model:{value:t.message.subject,callback:function(e){t.$set(t.message,"subject",e)},expression:"message.subject"}},[e("label",[t._v("Subject")])])],1)],1),t._v(" "),e("div",{staticClass:"sc-message-body"},[e("ScTextarea",{attrs:{cols:30,rows:4},model:{value:t.message.content,callback:function(e){t.$set(t.message,"content",e)},expression:"message.content"}},[e("label",[t._v("Message")])])],1),t._v(" "),e("div",{staticClass:"sc-message-footer uk-margin-top"},[e("div",[e("span",{staticClass:"uk-display-block uk-margin-small-bottom uk-text-muted uk-text-medium"},[t._v("Attachments:")]),t._v(" "),e("ul",{staticClass:"sc-message-attachments"},[e("li",{staticClass:"sc-flex-no-shrink"},[e("div",{staticClass:"sc-attachment"},[e("a",{attrs:{href:"#"}},[t._v("file1.png "),e("span",[t._v("(241KB)")])]),e("a",{staticClass:"mdi mdi-close sc-attachment-remove",attrs:{href:"#"}})])]),t._v(" "),e("li",{staticClass:"sc-flex-no-shrink"},[e("div",{staticClass:"sc-attachment"},[e("a",{attrs:{href:"#"}},[t._v("file2.pdf "),e("span",[t._v("(1240KB)")])]),e("a",{staticClass:"mdi mdi-close sc-attachment-remove",attrs:{href:"#"}})])])])]),t._v(" "),e("hr"),t._v(" "),e("div",[e("button",{staticClass:"sc-button sc-button-primary"},[t._v("\n\t\t\t\t\t\t\t\t\tSend\n\t\t\t\t\t\t\t\t")])])])]),t._v(" "),e("div",[e("a",{staticClass:"uk-margin-left mdi mdi-close sc-icon-square",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.backToMailbox(e)}}})])])])])],1)}),[],!1,null,null,null);e.default=component.exports},289:function(t,e,n){"use strict";n(12),n(90);var o={name:"ScInput",props:{id:{type:String,default:null},name:{type:String,default:null},type:{type:String,default:"text"},value:{type:[String,Object,Number],default:""},disabled:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},mode:{type:String,default:""},state:{type:String,default:""},extraClasses:{type:String,default:""},successState:{type:Boolean,default:!1},errorState:{type:Boolean,default:!1},placeholder:{type:String,default:null},ukTooltip:{type:Object,default:null},focus:{type:Function,default:null},blur:{type:Function,default:null},change:{type:Function,default:null},keyUp:{type:Function,default:null},validator:{type:Object,default:null}},data:function(){return{inputFocused:!1}},computed:{modeClass:function(){return"outline"===this.$props.mode?"sc-input-outline":""},inputErrorClass:function(){return this.$props.errorState?"uk-form-danger":""},inputSuccessClass:function(){return this.$props.successState?"uk-form-success":""}},mounted:function(){var t=this;t.ukTooltip&&UIkit.tooltip(t.$refs.input,t.ukTooltip)},methods:{inputBlur:function(){this.inputFocused=!1,this.blur&&this.blur(),this.validator&&this.validator.$touch(),this.$emit("blur")},inputFocus:function(){this.inputFocused=!0,this.focus&&this.focus(),this.$emit("focus")},inputChange:function(){this.change&&this.change(),this.$emit("change")},inputKeyUp:function(t){this.keyUp&&this.keyUp(),this.$emit("keyUp",t)}},watch:{}},l=n(2),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sc-input-wrapper",class:{"sc-input-wrapper-outline":"outline"===t.mode,"sc-input-wrapper-disabled":t.disabled,"sc-input-wrapper-danger":t.errorState,"sc-input-wrapper-success":t.successState,"sc-input-filled":""!==t.value||"fixed"===t.state,"sc-input-focus":t.inputFocused}},[t._t("icon"),t._v(" "),t._t("default"),t._v(" "),e("input",{ref:"input",class:["uk-input","sc-vue-input",t.modeClass,t.inputErrorClass,t.inputSuccessClass,t.extraClasses],attrs:{id:t.id,name:t.name,placeholder:t.placeholder,type:t.type,disabled:t.disabled,readonly:t.readOnly},domProps:{value:t.value},on:{focus:t.inputFocus,blur:t.inputBlur,change:t.inputChange,input:function(e){return t.$emit("input",e.target.value)},keyup:t.inputKeyUp}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:"outline"!==t.mode,expression:"mode !== 'outline'"}],staticClass:"sc-input-bar"}),t._v(" "),t._t("help-inline")],2)}),[],!1,null,null,null);e.a=component.exports},291:function(t,e,n){"use strict";n(12),n(90);var o=n(292),l={name:"ScTextarea",directives:{autosize:{bind:function(t,e,n){n.context.$props.autosize&&n.context.$nextTick((function(){o(t)}))},componentUpdated:function(t,e,n){n.context.$props.autosize&&o.update(t)},unbind:function(t){o.destroy(t)}}},props:{id:{type:String,default:null},name:{type:String,default:""},value:{type:String,default:""},disabled:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},mode:{type:String,default:""},state:{type:String,default:""},extraClasses:{type:String,default:""},successState:{type:Boolean,default:!1},errorState:{type:Boolean,default:!1},placeholder:{type:String,default:null},rows:{type:Number,default:5},cols:{type:Number,default:10},autosize:{type:Boolean,default:!1},ukTooltip:{type:Object,default:null},focus:{type:Function,default:null},blur:{type:Function,default:null},change:{type:Function,default:null},keyUp:{type:Function,default:null},validator:{type:Object,default:null}},data:function(){return{txtFocused:!1}},computed:{modeClass:function(){return"outline"===this.$props.mode?"sc-textarea-outline":""},dangerClass:function(){return this.$props.errorState?"uk-form-danger":""},successClass:function(){return this.$props.successState?"uk-form-success":""}},mounted:function(){this.ukTooltip&&UIkit.tooltip(this.$refs.teaxtarea,this.ukTooltip)},methods:{txtBlur:function(){this.txtFocused=!1,this.blur&&this.blur(),this.validator&&this.validator.$touch(),this.$emit("blur")},txtFocus:function(){this.txtFocused=!0,this.focus&&this.focus(),this.$emit("focus")},txtChange:function(){this.change&&this.change(),this.$emit("change")},txtKeyUp:function(){this.keyUp&&this.keyUp(),this.$emit("keyUp")}}},r=n(2),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sc-input-wrapper",class:{"sc-input-wrapper-outline":"outline"===t.mode,"sc-input-wrapper-disabled":t.disabled,"sc-input-wrapper-danger":t.errorState,"sc-input-wrapper-success":t.successState,"sc-input-filled":""!==t.value||"fixed"===t.state,"sc-input-focus":t.txtFocused}},[t._t("default"),t._v(" "),e("textarea",{directives:[{name:"autosize",rawName:"v-autosize"}],ref:"textarea",class:["uk-textarea","sc-vue-input",t.modeClass,t.dangerClass,t.successClass,t.extraClasses],attrs:{id:t.id,name:t.name,placeholder:t.placeholder,rows:t.rows,disabled:t.disabled,readonly:t.readOnly},domProps:{value:t.value},on:{focus:t.txtFocus,blur:t.txtBlur,change:t.txtChange,input:function(e){return t.$emit("input",e.target.value)},keyup:t.txtKeyUp}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:"outline"!==t.mode,expression:"mode !== 'outline'"}],staticClass:"sc-input-bar"})],2)}),[],!1,null,null,null);e.a=component.exports},292:function(t,e,n){var o,l,r;l=[t,e],o=function(t,e){"use strict";var n,o,map="function"==typeof Map?new Map:(n=[],o=[],{has:function(t){return n.indexOf(t)>-1},get:function(t){return o[n.indexOf(t)]},set:function(t,e){-1===n.indexOf(t)&&(n.push(t),o.push(e))},delete:function(t){var e=n.indexOf(t);e>-1&&(n.splice(e,1),o.splice(e,1))}}),l=function(t){return new Event(t,{bubbles:!0})};try{new Event("test")}catch(t){l=function(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!1),e}}function r(t){if(t&&t.nodeName&&"TEXTAREA"===t.nodeName&&!map.has(t)){var e=null,n=null,o=null,r=function(){t.clientWidth!==n&&v()},c=function(style){window.removeEventListener("resize",r,!1),t.removeEventListener("input",v,!1),t.removeEventListener("keyup",v,!1),t.removeEventListener("autosize:destroy",c,!1),t.removeEventListener("autosize:update",v,!1),Object.keys(style).forEach((function(e){t.style[e]=style[e]})),map.delete(t)}.bind(t,{height:t.style.height,resize:t.style.resize,overflowY:t.style.overflowY,overflowX:t.style.overflowX,wordWrap:t.style.wordWrap});t.addEventListener("autosize:destroy",c,!1),"onpropertychange"in t&&"oninput"in t&&t.addEventListener("keyup",v,!1),window.addEventListener("resize",r,!1),t.addEventListener("input",v,!1),t.addEventListener("autosize:update",v,!1),t.style.overflowX="hidden",t.style.wordWrap="break-word",map.set(t,{destroy:c,update:v}),d()}function d(){var style=window.getComputedStyle(t,null);"vertical"===style.resize?t.style.resize="none":"both"===style.resize&&(t.style.resize="horizontal"),e="content-box"===style.boxSizing?-(parseFloat(style.paddingTop)+parseFloat(style.paddingBottom)):parseFloat(style.borderTopWidth)+parseFloat(style.borderBottomWidth),isNaN(e)&&(e=0),v()}function f(e){var n=t.style.width;t.style.width="0px",t.offsetWidth,t.style.width=n,t.style.overflowY=e}function h(t){for(var e=[];t&&t.parentNode&&t.parentNode instanceof Element;)t.parentNode.scrollTop&&e.push({node:t.parentNode,scrollTop:t.parentNode.scrollTop}),t=t.parentNode;return e}function m(){if(0!==t.scrollHeight){var o=h(t),l=document.documentElement&&document.documentElement.scrollTop;t.style.height="",t.style.height=t.scrollHeight+e+"px",n=t.clientWidth,o.forEach((function(t){t.node.scrollTop=t.scrollTop})),l&&(document.documentElement.scrollTop=l)}}function v(){m();var e=Math.round(parseFloat(t.style.height)),n=window.getComputedStyle(t,null),r="content-box"===n.boxSizing?Math.round(parseFloat(n.height)):t.offsetHeight;if(r<e?"hidden"===n.overflowY&&(f("scroll"),m(),r="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(t,null).height)):t.offsetHeight):"hidden"!==n.overflowY&&(f("hidden"),m(),r="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(t,null).height)):t.offsetHeight),o!==r){o=r;var c=l("autosize:resized");try{t.dispatchEvent(c)}catch(t){}}}}function c(t){var e=map.get(t);e&&e.destroy()}function d(t){var e=map.get(t);e&&e.update()}var f=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((f=function(t){return t}).destroy=function(t){return t},f.update=function(t){return t}):((f=function(t,e){return t&&Array.prototype.forEach.call(t.length?t:[t],(function(t){return r(t,e)})),t}).destroy=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],c),t},f.update=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],d),t}),e.default=f,t.exports=e.default},void 0===(r="function"==typeof o?o.apply(e,l):o)||(t.exports=r)}}]);